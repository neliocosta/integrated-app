// Verificação do motor da agenda. Rode `node verificar-agenda.js` depois de qualquer mudança no motor.
// Não precisa de navegador: extrai o <script id="motor-agenda"> do agendamento.html e confere as dez regras da
// seção "O que o verificar-agenda.js confere" do area-logada/AGENDAMENTO.md. Os dados são inventados aqui mesmo.
const fs = require('fs');
const vm = require('vm');

const ORIGEM = 'agendamento.html';
const COPIAS = ['agendar.html', 'area-cliente.html'];   // as telas que carregam o motor (quando já o têm)
let falhas = 0;
const ok = (nome, cond, detalhe) => {
  console.log((cond ? '  ok   ' : '  FALHA') + '  ' + nome + (detalhe ? '  ' + detalhe : ''));
  if (!cond) falhas++;
};
// a área do cliente é CRLF: a comparação ignora a quebra de linha
const bloco = arq => (fs.readFileSync(arq, 'utf8').replace(/\r\n/g, '\n').match(/<script id="motor-agenda">([\s\S]*?)<\/script>/) || [])[1];
const src = bloco(ORIGEM);
if (!src) { console.error('motor não encontrado em ' + ORIGEM); process.exit(2); }
const ctx = { module: { exports: {} }, console };
vm.createContext(ctx);
vm.runInContext(src, ctx);
const A = ctx.module.exports;

// ---------- ajudantes ----------
const MIN = 60000, HORA = 60 * MIN, DIA = 24 * HORA;
const T = s => Date.parse(s.length <= 16 ? s + ':00-03:00' : s);   // '2026-11-16T10:00' em horário de Brasília
const iso = t => new Date(t).toISOString();
const rngDe = seed => () => { seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const util = blocos => ({ 1: blocos, 2: blocos, 3: blocos, 4: blocos, 5: blocos });
const bl = (de, ate) => ({ de, ate });
let seqZap = 0;
const pessoa = (id, grade, extra) => Object.assign({
  id, nome: 'Pessoa ' + id, email: id.toLowerCase() + '@exemplo.test', whatsapp: '+55 11 90000-00' + String(++seqZap).padStart(2, '0'), papel: 'consultor', ativo: true,
  fuso: 'America/Sao_Paulo', video: 'meet', grade, excecoes: [],
  calendarios: [{ provedor: 'google', conta: id.toLowerCase() + '@exemplo.test', estado: 'conectado', confere: true, grava: true }],
}, extra);
const remetente = () => ({
  id: 'r1', nome: 'Número de teste', numero: '+55 11 3000-0000', modelos: [
    { id: 'conf', nome: 'confirmacao', estado: 'aprovado', texto: 'Olá {{1}}, sua {{2}} está marcada para {{3}} às {{4}} com {{5}}. Entrar: {{6}}. Remarcar: {{7}}. Cancelar: {{8}}', variaveis: ['1', '2', '3', '4', '5', '6', '7', '8'], botoes: [] },
    { id: 'lemb', nome: 'lembrete', estado: 'aprovado', texto: 'Lembrete: {{1}}, {{2}} às {{3}}. Entrar: {{4}}', variaveis: ['1', '2', '3', '4'], botoes: [{ rotulo: 'Confirmo', acao: 'confirmar' }, { rotulo: 'Preciso remarcar', acao: 'remarcar' }] },
    { id: 'equipe', nome: 'aviso_equipe', estado: 'aprovado', texto: 'Novo agendamento: {{1}} — {{2}} em {{3}} às {{4}}. WhatsApp {{5}}', variaveis: ['1', '2', '3', '4', '5'], botoes: [] },
    { id: 'canc', nome: 'cancelamento', estado: 'aprovado', texto: '{{1}}, sua {{2}} foi cancelada. Para marcar de novo: {{3}}', variaveis: ['1', '2', '3'], botoes: [] },
  ],
});
const VAR_CONF = { 1: 'nomeCliente', 2: 'nomePublico', 3: 'data', 4: 'hora', 5: 'quemAtende', 6: 'linkEntrar', 7: 'linkRemarcar', 8: 'linkCancelar' };
const VAR_LEMB = { 1: 'nomeCliente', 2: 'nomePublico', 3: 'hora', 4: 'linkEntrar' };
const VAR_EQUIPE = { 1: 'nomeCliente', 2: 'nomeInterno', 3: 'data', 4: 'hora', 5: 'whatsappCliente' };
const mensagensPadrao = () => ({
  agendou: { ligada: true, modeloCliente: 'conf', modeloAtende: 'equipe', variaveis: { cliente: VAR_CONF, atende: VAR_EQUIPE } },
  remarcou: { ligada: true, modeloCliente: 'conf', modeloAtende: 'equipe', variaveis: { cliente: VAR_CONF, atende: VAR_EQUIPE } },
  cancelou: { ligada: true, modeloCliente: 'canc', variaveis: { cliente: { 1: 'nomeCliente', 2: 'nomePublico', 3: 'linkAgendar' } } },
  naoCompareceu: { ligada: false },
});
const tipo = (id, extra) => Object.assign({
  id, nomeInterno: 'Tipo ' + id, nomePublico: 'Conversa de teste', descricaoPublica: 'Uma conversa para conhecer você.', endereco: 'conversa-' + id.toLowerCase(),
  ligado: true, publico: 'naoCliente', liberacao: 'sempre', atende: 'pessoas', pessoas: [], adicionais: [], ciclo: 'mes',
  duracao: 50, antes: 0, depois: 0, inicios: [0, 30], antecedencia: 0, janelaDias: 30, limiteDia: 0, limiteSemana: 0,
  local: { modo: 'video' }, formulario: [], cancelarAte: 0, remarcarAte: 0, motivoObrigatorio: false, tokens: 0, devolveAoCancelar: false, devolveNaFalta: false,
  remetente: 'r1', mensagens: mensagensPadrao(), lembretes: [],
}, extra);
const estadoCom = (pessoas, tipos) => {
  const e = A.estadoVazio();
  for (const p of pessoas) { e.pessoas[p.id] = p; e.calendarios[p.id] = { id: p.id, ocupados: [], eventos: [] }; }
  for (const t of tipos) e.tipos[t.id] = t;
  e.remetentes.r1 = remetente();
  return e;
};
const ocupa = (e, pid, ini, fim) => e.calendarios[pid].ocupados.push({ inicio: iso(T(ini)), fim: iso(T(fim)) });
const agFixo = (e, id, tipoId, pid, ini, dur, regras, extra) => { e.agendamentos[id] = Object.assign({ id, tipo: tipoId, regras: Object.assign({ antes: 0, depois: 0, duracao: dur }, regras), cliente: {}, inicio: iso(T(ini)), fim: iso(T(ini) + dur * MIN), atende: pid, adicionais: [], estado: 'marcado', feitoEm: iso(T(ini) - 3 * DIA), distribuicao: {}, reatribuidoDe: [] }, extra); };
const pesos = (...pares) => pares.map(([pessoa, peso]) => ({ pessoa, peso, participando: true }));
const linha = (q, pid) => q.linhas.find(l => l.pessoa === pid);

// A referência: a definição direta de "horário livre", testada instante a instante, sem o motor.
// São Paulo está em UTC−3 o ano todo (sem horário de verão desde 2019), o que deixa a conta independente do fuso do motor.
function referencia(e, tipoId, agora, ate, pids) {
  const t = e.tipos[tipoId], r = new Map(), local = x => new Date(x - 3 * HORA);
  const fim = Math.min(ate, agora + t.janelaDias * DIA), ini = agora + t.antecedencia * MIN;
  const bate = (a0, a1, b0, b1) => a0 < b1 && b0 < a1;
  for (let x = Math.ceil(agora / (5 * MIN)) * 5 * MIN; x <= fim; x += 5 * MIN) {
    if (x < ini) continue;
    const L = local(x), dkey = L.toISOString().slice(0, 10), min = L.getUTCHours() * 60 + L.getUTCMinutes();
    if (!t.inicios.includes(L.getUTCMinutes())) continue;
    const livres = [];
    for (const pid of pids) {
      const p = e.pessoas[pid], ex = p.excecoes.find(z => z.data === dkey);
      const blocos = (ex ? (ex.folga ? [] : ex.blocos) : (p.grade[L.getUTCDay()] || [])).map(b => [+b.de.slice(0, 2) * 60 + +b.de.slice(3), +b.ate.slice(0, 2) * 60 + +b.ate.slice(3)]);
      if (!blocos.some(([b0, b1]) => min >= b0 && min + t.duracao <= b1)) continue;
      const n0 = x, n1 = x + t.duracao * MIN, c0 = n0 - t.antes * MIN, c1 = n1 + t.depois * MIN;
      if (e.calendarios[pid].ocupados.some(o => bate(c0, c1, Date.parse(o.inicio), Date.parse(o.fim)))) continue;
      const ags = Object.values(e.agendamentos).filter(a => a.estado === 'marcado' && (a.atende === pid || a.adicionais.includes(pid)));
      if (ags.some(a => { const i = Date.parse(a.inicio), f = Date.parse(a.fim); return bate(c0, c1, i, f) || bate(n0, n1, i - a.regras.antes * MIN, f + a.regras.depois * MIN); })) continue;
      const doDia = ags.filter(a => a.tipo === tipoId && a.atende === pid && local(Date.parse(a.inicio)).toISOString().slice(0, 10) === dkey).length;
      if (t.limiteDia && doDia >= t.limiteDia) continue;
      const ok2 = (t.adicionais || []).every(s => {
        if (e.calendarios[s].ocupados.some(o => bate(c0, c1, Date.parse(o.inicio), Date.parse(o.fim)))) return false;
        return !Object.values(e.agendamentos).some(a => a.estado === 'marcado' && (a.atende === s || a.adicionais.includes(s)) && (bate(c0, c1, Date.parse(a.inicio), Date.parse(a.fim)) || bate(n0, n1, Date.parse(a.inicio) - a.regras.antes * MIN, Date.parse(a.fim) + a.regras.depois * MIN)));
      });
      if (ok2) livres.push(pid);
    }
    if (livres.length) r.set(iso(x), livres.sort());
  }
  return r;
}
const comparar = (motor, ref) => {
  const m = new Map(motor.map(h => [h.inicio, h.pessoas.slice().sort()]));
  const so1 = [...m.keys()].filter(k => !ref.has(k)), so2 = [...ref.keys()].filter(k => !m.has(k));
  const dif = [...m.keys()].filter(k => ref.has(k) && m.get(k).join() !== ref.get(k).join());
  return { igual: !so1.length && !so2.length && !dif.length, detalhe: (so1.length ? 'só no motor: ' + so1.slice(0, 3).join(' ') + ' ' : '') + (so2.length ? 'só na referência: ' + so2.slice(0, 3).join(' ') + ' ' : '') + (dif.length ? 'pessoas diferentes: ' + dif.slice(0, 3).join(' ') : '') };
};

// ---------- 0. o motor nas telas e o começo zerado ----------
console.log('\n0. O motor nas telas e o começo zerado');
for (const arq of COPIAS) {
  if (!fs.existsSync(arq)) continue;
  const c = bloco(arq);
  if (c == null) { if (arq !== 'area-cliente.html') ok(arq + ' carrega o motor', false, '→ rode: node sync-motor.js'); continue; }
  ok(arq + ' tem a mesma cópia do motor', c === src, c === src ? '' : '→ rode: node sync-motor.js');
  const arm = f => (fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n').match(/<script id="armazem-agenda">([\s\S]*?)<\/script>/) || [])[1];
  if (arm(arq) != null) ok(arq + ' tem a mesma cópia do armazém da agenda', arm(arq) === arm(ORIGEM), arm(arq) === arm(ORIGEM) ? '' : '→ rode: node sync-motor.js');
}
{
  const e = A.estadoVazio();
  ok('o estado começa com todas as coleções vazias', Object.keys(A.COLECOES).every(k => e[k] && !Object.keys(e[k]).length));
  const p = A.pendencias(e, { id: 'novo' });
  ok('um tipo novo não liga sem duração e quem atende', ['a duração', 'quem atende'].every(x => p.includes(x)), p.join('; '));
  ok('o número e o modelo da confirmação são desejáveis, não obrigatórios', !p.some(x => /número|modelo/.test(x)));
}
{
  // sem número de WhatsApp: o tipo liga, e tudo sai por e-mail com o texto padrão
  const AG0 = T('2026-11-16T08:00');
  const e = estadoCom([pessoa('P', util([bl('09:00', '18:00')]))], [tipo('X', { pessoas: pesos(['P', 100]), remetente: '', mensagens: {},
    lembretes: [{ quando: -60, para: 'ambos', modelo: '', variaveis: {} }] })]);
  ok('sem número, o tipo liga, com o aviso', !A.pendencias(e, e.tipos.X).length && A.avisos(e, e.tipos.X).some(a => /sem número/.test(a)) && A.avisos(e, e.tipos.X).some(a => /não tem modelo/.test(a)));
  const h = A.horariosLivres(e, 'X', { agora: AG0, de: AG0 + DIA, ate: AG0 + 2 * DIA })[0];
  const ag = A.confirmar(e, { tipo: 'X', inicio: h.inicio, origem: 'publico', quem: { publico: 'naoCliente' }, cliente: { nome: 'Sem Zap', whatsapp: '+55 11 93333-0000', email: 'semzap@exemplo.test', aceite: true } }, { agora: AG0, rng: rngDe(41) }).agendamento;
  const ms = Object.values(e.mensagens).filter(m => m.agendamento === ag.id);
  ok('a confirmação sai por e-mail, com o convite do calendário', ms.some(m => m.evento === 'agendou' && m.canal === 'email' && m.anexo === 'convite.ics') && !ms.some(m => m.canal === 'whatsapp'));
  ok('o lembrete sem modelo sai por e-mail para o cliente e para quem atende', ms.filter(m => m.evento === 'lembrete' && m.canal === 'email').map(m => m.para === 'cliente' ? 'cliente' : 'equipe').sort().join() === 'cliente,equipe');
}

{
  const t = { pessoas: [{ pessoa: 'A', peso: 60 }, { pessoa: 'B', peso: 25 }, { pessoa: 'C', peso: 15 }] };
  A.ajustarPeso(t, 'A', 70); const ida = t.pessoas.map(x => x.peso).join('/'); A.ajustarPeso(t, 'A', 60);
  ok('os pesos são inteiros, somam 100 e ir a 70 e voltar a 60 devolve 25 e 15', ida === '70/19/11' && t.pessoas.map(x => x.peso).join('/') === '60/25/15', ida + ' → ' + t.pessoas.map(x => x.peso).join('/'));
  const t3 = { pessoas: [{ pessoa: 'A', peso: 34 }, { pessoa: 'B', peso: 33 }, { pessoa: 'C', peso: 33 }] };
  A.ajustarPeso(t3, 'A', 60); A.ajustarPeso(t3, 'B', 25);
  ok('preenchendo de cima para baixo, o que já foi escrito não muda: 60, 25 e 15', t3.pessoas.map(x => x.peso).join('/') === '60/25/15', t3.pessoas.map(x => x.peso).join('/'));
  A.ajustarPeso(t3, 'C', 25);
  ok('mudar o último tira de quem está acima, na proporção', t3.pessoas.map(x => x.peso).join('/') === '53/22/25', t3.pessoas.map(x => x.peso).join('/'));
  A.tirarPessoa(t, 'A');
  ok('ao tirar alguém, o peso dele se reparte na proporção dos outros', t.pessoas.map(x => x.peso).join('/') === '63/37', t.pessoas.map(x => x.peso).join('/'));
}

// ---------- 1. horários livres ----------
console.log('\n1. Um horário só aparece se alguém habilitado está livre (intervalos, antecedência, janela, limites)');
const AGORA = T('2026-11-16T08:00');   // segunda-feira
const cenario1 = () => {
  const a = pessoa('A', util([bl('09:00', '12:00'), bl('13:00', '18:00')]), { excecoes: [{ data: '2026-11-18', folga: true }] });
  const b = pessoa('B', util([bl('14:00', '18:00')]), { excecoes: [{ data: '2026-11-21', blocos: [bl('09:00', '12:00')] }] });
  const t = tipo('X', { pessoas: pesos(['A', 50], ['B', 50]), antes: 10, depois: 15, antecedencia: 120, janelaDias: 10, limiteDia: 2 });
  const e = estadoCom([a, b], [t, tipo('Y', { endereco: 'outro' })]);
  ocupa(e, 'A', '2026-11-16T10:00', '2026-11-16T10:30');
  ocupa(e, 'A', '2026-11-17T15:00', '2026-11-17T16:00');
  ocupa(e, 'B', '2026-11-16T15:00', '2026-11-16T15:20');
  agFixo(e, 'f1', 'X', 'A', '2026-11-19T09:00', 50, { antes: 10, depois: 15 });
  agFixo(e, 'f2', 'X', 'B', '2026-11-17T14:00', 50, { antes: 10, depois: 15 });
  agFixo(e, 'f3', 'X', 'B', '2026-11-17T16:30', 50, { antes: 10, depois: 15 });
  agFixo(e, 'f4', 'Y', 'A', '2026-11-20T14:00', 60, { antes: 30, depois: 0 });
  return e;
};
{
  const e = cenario1(), ate = AGORA + 20 * DIA;
  const hs = A.horariosLivres(e, 'X', { agora: AGORA, ate });
  const c = comparar(hs, referencia(e, 'X', AGORA, ate, ['A', 'B']));
  ok('o motor e a definição direta dão os mesmos horários e as mesmas pessoas', c.igual, hs.length + ' horários ' + c.detalhe);
  const tem = (s, pid) => { const h = hs.find(x => x.inicio === iso(T(s))); return !!h && (!pid || h.pessoas.includes(pid)); };
  ok('a antecedência tira o começo da manhã (9h e 9h30 de hoje)', !tem('2026-11-16T09:00') && !tem('2026-11-16T09:30'));
  ok('o intervalo antes tira as 10h30 (ocupado até 10h30)', !tem('2026-11-16T10:30', 'A'));
  ok('às 11h a reunião cabe até 11h50 e aparece', tem('2026-11-16T11:00', 'A'));
  ok('a folga de quarta tira o dia de A', !hs.some(h => h.inicio.startsWith('2026-11-18') && h.pessoas.includes('A')));
  ok('o sábado de plantão de B aparece', tem('2026-11-21T09:00', 'B'));
  ok('o limite de 2 por dia tira a terça de B', !hs.some(h => A.dataLocal(h.inicio, 'America/Sao_Paulo') === '2026-11-17' && h.pessoas.includes('B')));
  ok('a reunião de outro tipo trava a agenda com os intervalos dela', !tem('2026-11-20T13:30', 'A') && !tem('2026-11-20T14:30', 'A'));
  ok('nada depois da janela de 10 dias', hs.every(h => Date.parse(h.inicio) <= AGORA + 10 * DIA));
  ok('a página pública recebe só início e fim', A.horariosPublicos(e, 'X', { agora: AGORA, ate }).every(h => Object.keys(h).join() === 'inicio,fim'));
  e.pessoas.B.calendarios[0].estado = 'quebrado';
  ok('quem tem a conexão quebrada sai do grupo', !A.horariosLivres(e, 'X', { agora: AGORA, ate }).some(h => h.pessoas.includes('B')));
  e.pessoas.B.calendarios[0].estado = 'conectado';
  e.tipos.X.pessoas[1].participando = false;
  ok('quem não está participando não oferece horário', !A.horariosLivres(e, 'X', { agora: AGORA, ate }).some(h => h.pessoas.includes('B')));
  e.tipos.X.pessoas[1].participando = true;
  e.tipos.X.grade = { 1: [bl('13:00', '18:00')], 2: [bl('13:00', '18:00')], 3: [bl('13:00', '18:00')], 4: [bl('13:00', '18:00')], 5: [bl('13:00', '18:00')] };
  ok('a grade própria do tipo (só à tarde) corta a de cada pessoa', A.horariosLivres(e, 'X', { agora: AGORA, ate }).every(h => +A.partes(Date.parse(h.inicio), 'America/Sao_Paulo').h >= 13));
}

// ---------- 2. participante adicional ----------
console.log('\n2. Com participante adicional, só os horários em que ele também está livre');
{
  const e = cenario1(), ate = AGORA + 20 * DIA;
  e.pessoas.S = pessoa('S', {}); e.calendarios.S = { id: 'S', ocupados: [], eventos: [] };
  ocupa(e, 'S', '2026-11-16T14:00', '2026-11-16T16:00');
  agFixo(e, 's1', 'Y', 'A', '2026-11-19T15:00', 50, {}, { adicionais: ['S'] });
  const sem = A.horariosLivres(e, 'X', { agora: AGORA, ate });
  e.tipos.X.adicionais = ['S'];
  const com = A.horariosLivres(e, 'X', { agora: AGORA, ate });
  const c = comparar(com, referencia(e, 'X', AGORA, ate, ['A', 'B']));
  ok('o motor e a definição direta concordam com o adicional', c.igual, com.length + ' horários ' + c.detalhe);
  ok('o ocupado do adicional tira horários que sem ele existiam', com.length < sem.length && !com.some(h => h.inicio === iso(T('2026-11-16T14:00'))) && sem.some(h => h.inicio === iso(T('2026-11-16T14:00'))));
  ok('uma reunião em que ele já é adicional também trava', !com.some(h => h.inicio === iso(T('2026-11-19T15:00'))));
  e.pessoas.S.calendarios[0].estado = 'quebrado';
  ok('adicional com a conexão quebrada: nenhum horário', A.horariosLivres(e, 'X', { agora: AGORA, ate }).length === 0);
}

// ---------- 3. quem recebe está livre ----------
console.log('\n3. Recebe sempre alguém livre no horário; com um só livre, é ele');
{
  const rng = rngDe(7);
  let fora = 0, unicoErrado = 0, unicos = 0, testados = 0;
  for (let k = 0; k < 40; k++) {
    const ps = ['A', 'B', 'C'].map(id => pessoa(id, util([bl('09:00', '18:00')])));
    const e = estadoCom(ps, [tipo('X', { pessoas: pesos(['A', 60], ['B', 25], ['C', 15]), janelaDias: 7 })]);
    for (const id of ['A', 'B', 'C']) for (let j = 0; j < 12; j++) {
      const ini = AGORA + Math.floor(rng() * 7 * 48) * 30 * MIN;
      e.calendarios[id].ocupados.push({ inicio: iso(ini), fim: iso(ini + (1 + Math.floor(rng() * 6)) * 30 * MIN) });
    }
    for (let j = 0; j < 15; j++) {
      const hs = A.horariosLivres(e, 'X', { agora: AGORA, ate: AGORA + 7 * DIA }); if (!hs.length) break;
      const h = hs[Math.floor(rng() * hs.length)];
      const r = A.confirmar(e, { tipo: 'X', inicio: h.inicio, origem: 'publico', quem: { publico: 'naoCliente' }, cliente: { nome: 'Cliente ' + j, whatsapp: '+55 11 98888-' + String(1000 + k * 100 + j), email: '', aceite: true } }, { agora: AGORA, rng });
      testados++;
      if (!r.ok || !h.pessoas.includes(r.agendamento.atende)) fora++;
      if (h.pessoas.length === 1) { unicos++; if (r.agendamento.atende !== h.pessoas[0] || r.agendamento.distribuicao.porque !== 'era o único livre') unicoErrado++; }
    }
  }
  ok('em ' + testados + ' agendamentos sorteados, quem recebeu estava livre', fora === 0, fora ? fora + ' fora' : '');
  ok('nos ' + unicos + ' horários com um só livre, recebeu ele, "era o único livre"', unicos > 0 && unicoErrado === 0, unicoErrado ? unicoErrado + ' errados' : '');
}

// ---------- 4. convergência ----------
console.log('\n4. Com todos livres o tempo todo, 200 agendamentos fecham a até 1 ponto da cota');
{
  const ps = ['A', 'B', 'C'].map(id => pessoa(id, util([bl('09:00', '18:00')])));
  const e = estadoCom(ps, [tipo('X', { pessoas: pesos(['A', 60], ['B', 25], ['C', 15]) })]);
  const base = T('2026-11-02T09:00'), rng = rngDe(11);
  let pior = 0;
  for (let i = 0; i < 200; i++) {
    const agora = base + i * 10 * MIN;
    const d = A.distribuir(e, 'X', ['A', 'B', 'C'], { agora, rng });
    e.agendamentos['g' + i] = { id: 'g' + i, tipo: 'X', regras: {}, cliente: {}, inicio: iso(agora + DIA), fim: iso(agora + DIA + 50 * MIN), atende: d.pessoa, adicionais: [], estado: 'marcado', feitoEm: iso(agora), distribuicao: { porque: d.porque } };
    if (i >= 19) { const q = A.cotaERealizado(e, 'X', agora); pior = Math.max(pior, ...q.linhas.map(l => Math.abs(l.diferenca))); }
  }
  const q = A.cotaERealizado(e, 'X', base + 200 * 10 * MIN);
  ok('ao fim, cada pessoa a até 1 ponto da cota', q.linhas.every(l => Math.abs(l.diferenca) <= 1), q.linhas.map(l => l.pessoa + ' ' + l.realizado.toFixed(1) + '% (cota ' + l.cota + ')').join(', '));
  ok('a partir do 20º, ninguém passa de 5 pontos', pior <= 5, 'pior ' + pior.toFixed(2));
  // o exemplo da especificação: A 12, B 5, C 3 de 20; o 22º com os três livres vai para A
  const e2 = estadoCom(ps.map(p => Object.assign({}, p)), [tipo('X', { pessoas: pesos(['A', 60], ['B', 25], ['C', 15]) })]);
  let n = 0; const poe = (pid, k) => { for (let i = 0; i < k; i++) { const id = 'h' + n++; e2.agendamentos[id] = { id, tipo: 'X', regras: {}, cliente: {}, inicio: iso(base), fim: iso(base), atende: pid, adicionais: [], estado: 'marcado', feitoEm: iso(base + n * MIN), distribuicao: {} }; } };
  poe('A', 12); poe('B', 5); poe('C', 3);
  const d21 = A.distribuir(e2, 'X', ['B', 'C'], { agora: base + DIA, rng });
  ok('o exemplo da especificação: com B e C empatados na cota, recebe quem está há mais tempo sem receber', d21.pessoa === 'B' && /mais tempo/.test(d21.porque), d21.pessoa + ': ' + d21.porque);
  poe(d21.pessoa, 1);
  const d22 = A.distribuir(e2, 'X', ['A', 'B', 'C'], { agora: base + DIA, rng });
  ok('o 22º, com os três livres, vai para A (57%, 3 pontos abaixo)', d22.pessoa === 'A' && /2,9 pontos abaixo/.test(d22.porque), d22.porque);
}

// ---------- 5. removidos ----------
console.log('\n5. Cancelado, remarcado, reatribuído e não compareceu saem da conta de quem perdeu');
{
  const ps = ['A', 'B', 'C'].map(id => pessoa(id, util([bl('09:00', '18:00')])));
  const e = estadoCom(ps, [tipo('X', { pessoas: pesos(['A', 50], ['B', 30], ['C', 20]), janelaDias: 14 })]);
  const rng = rngDe(5);
  for (let j = 0; j < 30; j++) {
    const hs = A.horariosLivres(e, 'X', { agora: AGORA, ate: AGORA + 14 * DIA });
    const h = hs[Math.floor(rng() * hs.length)];
    A.confirmar(e, { tipo: 'X', inicio: h.inicio, origem: 'publico', quem: { publico: 'naoCliente' }, cliente: { nome: 'C' + j, whatsapp: '+55 21 97777-' + (1000 + j), aceite: true } }, { agora: AGORA + j * MIN, rng });
  }
  const agora = AGORA + HORA, q0 = A.cotaERealizado(e, 'X', agora);
  const de = pid => Object.values(e.agendamentos).filter(a => a.atende === pid && a.estado === 'marcado');
  const rec = (pid, q) => linha(q || A.cotaERealizado(e, 'X', agora), pid).recebidos;
  const rem = (pid, motivo) => linha(A.cotaERealizado(e, 'X', agora), pid).removidos.some(r => r.motivo === motivo);

  A.cancelar(e, de('A')[0].id, { agora, quem: 'admin', motivo: 'teste' });
  ok('cancelado sai da conta de A', rec('A') === rec('A', q0) - 1 && rem('A', 'cancelado'));
  A.marcarEstado(e, de('B')[0].id, 'naoCompareceu', { agora, quem: 'admin' });
  ok('não compareceu sai da conta de B', rec('B') === rec('B', q0) - 1 && rem('B', 'naoCompareceu'));
  const aC = de('C')[0], livreA = !A.horariosLivres(e, 'X', { agora, soPessoa: 'A', de: Date.parse(aC.inicio), ate: Date.parse(aC.inicio) }).length;
  const r1 = A.reatribuir(e, aC.id, 'A', { agora, quem: 'admin', forcar: livreA });
  const dispA = A.disponibilidade(e, aC.id, 'A');
  ok('a disponibilidade para reatribuir diz se a pessoa está livre e na grade', dispA.livre === !livreA && dispA.naGrade === true && dispA.situacao === 'ok', JSON.stringify(dispA));
  ok('reatribuído sai da conta de C e entra na de A', r1.ok && rec('C') === rec('C', q0) - 1 && rec('A') === rec('A', q0) && rem('C', 'reatribuido'), r1.motivo || '');
  const recA = rec('A'), aA = de('A')[1];
  const novoA = A.horariosParaRemarcar(e, aA.id, { agora }).horarios[0];
  const r2 = A.remarcar(e, aA.id, novoA.inicio, { agora, quem: 'cliente', rng });
  ok('remarcado com a mesma pessoa: a reunião conta uma vez só', r2.ok && r2.agendamento.atende === 'A' && rec('A') === recA && rem('A', 'remarcado') && r2.agendamento.feitoEm === aA.feitoEm);
  // remarcar para um horário em que A está ocupada e o grupo não
  const aA2 = de('A')[0], quando = Date.parse(A.horariosLivres(e, 'X', { agora, ate: agora + 14 * DIA }).find(h => h.pessoas.includes('B') && h.pessoas.includes('A')).inicio);
  e.calendarios.A.ocupados.push({ inicio: iso(quando - HORA), fim: iso(quando + 2 * HORA) });
  const recA2 = rec('A');
  const r3 = A.remarcar(e, aA2.id, iso(quando), { agora, quem: 'admin', doGrupo: true, rng });
  ok('remarcado para outra pessoa: sai da conta de A e entra na de quem recebeu', r3.ok && r3.agendamento.atende !== 'A' && rec('A') === recA2 - 1, r3.ok ? 'foi para ' + r3.agendamento.atende : r3.motivo);
  const aA3 = de('A')[0], r4 = aA3 && A.remarcar(e, aA3.id, iso(quando), { agora, quem: 'cliente', rng });
  ok('sem aceitar o grupo, a remarcação não troca de pessoa: com ela ocupada, "tomado"', !!aA3 && !r4.ok && r4.motivo === 'tomado' && e.agendamentos[aA3.id].estado === 'marcado');
}

// ---------- 6. quem entra no meio do ciclo ----------
console.log('\n6. Quem entra no meio do ciclo não recebe uma sequência só dele');
{
  const ps = ['A', 'B', 'C'].map(id => pessoa(id, util([bl('09:00', '18:00')])));
  const e = estadoCom(ps, [tipo('X', { pessoas: pesos(['A', 50], ['B', 50]) })]);
  const base = T('2026-11-02T09:00'), rng = rngDe(3);
  const um = (i, livres) => {
    const agora = base + i * 10 * MIN, d = A.distribuir(e, 'X', livres, { agora, rng });
    e.agendamentos['g' + i] = { id: 'g' + i, tipo: 'X', regras: {}, cliente: {}, inicio: iso(agora + DIA), fim: iso(agora + DIA), atende: d.pessoa, adicionais: [], estado: 'marcado', feitoEm: iso(agora), distribuicao: {} };
    return d.pessoa;
  };
  for (let i = 0; i < 100; i++) um(i, ['A', 'B']);
  A.incluirPessoa(e.tipos.X, 'C', 20, base + 100 * 10 * MIN - MIN);
  ok('ao entrar com 20, os outros vão a 40 e 40', e.tipos.X.pessoas.map(x => x.peso).join() === '40,40,20');
  const q = A.cotaERealizado(e, 'X', base + 100 * 10 * MIN);
  ok('na entrada, todos estão na cota', q.linhas.every(l => Math.abs(l.diferenca) < 0.01), q.linhas.map(l => l.pessoa + ' ' + l.realizado.toFixed(1)).join(', '));
  const seq = []; for (let i = 100; i < 150; i++) seq.push(um(i, ['A', 'B', 'C']));
  const maior = Math.max(...seq.join('').split(/[AB]+/).map(s => s.length)), nC = seq.filter(x => x === 'C').length;
  ok('nos 50 seguintes, C nunca recebe mais de 1 seguido', maior <= 1, seq.join(''));
  ok('e recebe a parte dele (10 de 50, ±2)', Math.abs(nC - 10) <= 2, nC + ' de 50');
}

// ---------- 7. dois pedidos ----------
console.log('\n7. Dois pedidos para o mesmo horário e a mesma pessoa: um só é gravado; confirmar duas vezes não duplica');
{
  const e = estadoCom([pessoa('P', util([bl('09:00', '18:00')]))], [tipo('X', { pessoas: pesos(['P', 100]) })]);
  const rng = rngDe(9), h = A.horariosLivres(e, 'X', { agora: AGORA, ate: AGORA + DIA })[2];
  const pedido = (nome, chave, extra) => Object.assign({ tipo: 'X', inicio: h.inicio, origem: 'publico', quem: { publico: 'naoCliente' }, cliente: { nome, whatsapp: '+55 31 96666-' + nome.length + '000', aceite: true }, chave }, extra);
  const r1 = A.confirmar(e, pedido('Primeiro', 'k1'), { agora: AGORA, rng });
  const r1b = A.confirmar(e, pedido('Primeiro', 'k1'), { agora: AGORA, rng });
  const r2 = A.confirmar(e, pedido('Segundo cliente', 'k2'), { agora: AGORA, rng });
  const n = Object.values(e.agendamentos).filter(a => a.inicio === h.inicio).length;
  ok('o toque duplo devolve o mesmo agendamento', r1.ok && r1b.ok && r1b.repetido && r1b.agendamento.id === r1.agendamento.id);
  ok('o segundo cliente recebe "tomado" e os horários mais próximos', !r2.ok && r2.motivo === 'tomado' && r2.proximos.length > 0 && r2.proximos[0].inicio !== h.inicio);
  ok('um só agendamento gravado no horário', n === 1, n + ' gravados');
  const r3 = A.confirmar(e, pedido('Primeiro', 'k9', { inicio: A.horariosLivres(e, 'X', { agora: AGORA, ate: AGORA + DIA })[8].inicio }), { agora: AGORA, rng });
  ok('o mesmo WhatsApp não marca uma segunda reunião futura do mesmo tipo pelo link: vê a que já tem', !r3.ok && r3.motivo === 'ja_marcado' && r3.agendamento.id === r1.agendamento.id);
  // a reserva de 5 minutos
  const h2 = A.horariosLivres(e, 'X', { agora: AGORA, ate: AGORA + DIA })[5];
  const res = A.reservar(e, 'X', h2.inicio, { agora: AGORA, rng });
  ok('com a reserva de um, o horário some para o outro', res.ok && !A.horariosLivres(e, 'X', { agora: AGORA, ate: AGORA + DIA }).some(x => x.inicio === h2.inicio));
  ok('e continua para quem reservou', A.horariosLivres(e, 'X', { agora: AGORA, ate: AGORA + DIA, reserva: res.reserva }).some(x => x.inicio === h2.inicio));
  ok('o outro não confirma por cima da reserva', !A.confirmar(e, pedido('Outra', 'k3', { inicio: h2.inicio }), { agora: AGORA + MIN, rng }).ok);
  A.relogio(e, { agora: AGORA + (A.RESERVA_MIN + 1) * MIN });
  ok('depois de ' + A.RESERVA_MIN + ' minutos a reserva cai e o horário volta', !e.reservas[res.reserva] && A.horariosLivres(e, 'X', { agora: AGORA + 6 * MIN, ate: AGORA + DIA }).some(x => x.inicio === h2.inicio));
}
{
  // num grupo, a reserva já escolhe quem atende (a página mostra a pessoa) e segura só ela
  const ps = ['A', 'B'].map(id => pessoa(id, util([bl('09:00', '18:00')])));
  const e = estadoCom(ps, [tipo('X', { pessoas: pesos(['A', 70], ['B', 30]) })]);
  const rng = rngDe(12), h = A.horariosLivres(e, 'X', { agora: AGORA, ate: AGORA + DIA }).find(x => x.pessoas.length === 2);
  const r1 = A.reservar(e, 'X', h.inicio, { agora: AGORA, rng });
  const visto = A.horariosLivres(e, 'X', { agora: AGORA, ate: AGORA + DIA }).find(x => x.inicio === h.inicio);
  ok('a reserva guarda quem vai atender, escolhido pelo peso', r1.ok && r1.pessoa === 'A' && e.reservas[r1.reserva].distribuicao.porque.length > 0, r1.pessoa);
  ok('para o próximo cliente, o horário continua com a outra pessoa', !!visto && visto.pessoas.join() === 'B');
  const r2 = A.reservar(e, 'X', h.inicio, { agora: AGORA, rng });
  ok('e a reserva dele fica com ela', r2.ok && r2.pessoa === 'B');
  const pedido = (nome, n, reserva) => ({ tipo: 'X', inicio: h.inicio, origem: 'publico', quem: { publico: 'naoCliente' }, reserva, cliente: { nome, whatsapp: '+55 41 93333-000' + n, aceite: true } });
  const c2 = A.confirmar(e, pedido('Segundo', 2, r2.reserva), { agora: AGORA + MIN, rng }), c1 = A.confirmar(e, pedido('Primeiro', 1, r1.reserva), { agora: AGORA + 2 * MIN, rng });
  ok('cada um confirma com a pessoa que viu', c1.ok && c2.ok && c1.agendamento.atende === 'A' && c2.agendamento.atende === 'B');
}

// ---------- perguntas do formulário ----------
{
  const form = [{ rotulo: 'Assunto', tipo: 'longo', obrigatorio: true }, { rotulo: 'Já investe?', tipo: 'unica', opcoes: ['Sim', 'Não'], obrigatorio: true }, { rotulo: 'Interesses', tipo: 'multipla', opcoes: ['Aposentadoria', 'Imóvel', 'Sucessão'] }];
  const err = A.validarRespostas(form, { 'Já investe?': 'Talvez', Interesses: ['Imóvel', 'Viagem'] });
  ok('as perguntas obrigatórias em branco e as escolhas fora das opções voltam como erro', Object.keys(err).sort().join() === ['Assunto', 'Interesses', 'Já investe?'].sort().join(), JSON.stringify(err));
  ok('respostas certas passam, inclusive várias escolhas', !Object.keys(A.validarRespostas(form, { Assunto: 'Herança', 'Já investe?': 'Sim', Interesses: ['Imóvel', 'Sucessão'] })).length);
  const e = estadoCom([pessoa('P', util([bl('09:00', '18:00')]))], [tipo('X', { pessoas: pesos(['P', 100]), formulario: form })]);
  const h = A.horariosLivres(e, 'X', { agora: AGORA, ate: AGORA + DIA })[0];
  const r = A.confirmar(e, { tipo: 'X', inicio: h.inicio, origem: 'publico', quem: { publico: 'naoCliente' }, cliente: { nome: 'Sem resposta', whatsapp: '+55 51 92222-0000', respostas: {} } }, { agora: AGORA, rngDe: 1 });
  ok('o motor não confirma sem as respostas obrigatórias', !r.ok && r.motivo === 'respostas');
  ok('uma pergunta de escolha precisa de ao menos duas opções para o tipo ligar', A.pendencias(e, Object.assign({}, e.tipos.X, { formulario: [{ rotulo: 'Cor', tipo: 'lista', opcoes: ['Azul'] }] })).some(p => /duas opções/.test(p)));
}

// ---------- modelos pausados e lembretes incompletos ----------
{
  const e = estadoCom([pessoa('P', util([bl('09:00', '18:00')]))], [tipo('X', { pessoas: pesos(['P', 100]) })]);
  e.remetentes.r1.modelos.find(m => m.id === 'conf').estado = 'pausado';
  ok('um modelo pausado na Meta não impede o tipo, mas aparece nos avisos', !A.pendencias(e, e.tipos.X).length && A.avisos(e, e.tipos.X).some(a => /pausado/.test(a)));
  const h = A.horariosLivres(e, 'X', { agora: AGORA, ate: AGORA + DIA })[0];
  const r = A.confirmar(e, { tipo: 'X', inicio: h.inicio, origem: 'publico', quem: { publico: 'naoCliente' }, cliente: { nome: 'Ana', whatsapp: '+55 61 91111-0000', email: 'ana@exemplo.test', aceite: true } }, { agora: AGORA, rng: rngDe(2) });
  const doCliente = Object.values(e.mensagens).filter(m => m.agendamento === r.agendamento.id && m.para === 'cliente');
  ok('com o modelo da confirmação pausado, o cliente recebe por e-mail', doCliente.length > 0 && doCliente.every(m => m.canal === 'email'));
  const comIncompleto = Object.assign({}, e.tipos.X, { lembretes: [{}, { quando: 60, para: 'cliente', modelo: 'lemb', variaveis: VAR_LEMB }] });
  ok('um lembrete incompleto não impede o tipo: fica nos avisos', !A.pendencias(e, comIncompleto).length && A.avisos(e, comIncompleto).some(x => /incompleto/.test(x)));
  const agInc = Object.assign({}, r.agendamento, { regras: Object.assign({}, r.agendamento.regras, { lembretes: comIncompleto.lembretes }) });
  ok('e não sai: só os lembretes completos viram mensagem', A.lembretesDe(e, agInc, AGORA).length === 1);
}

// ---------- variáveis com texto fixo ou escrito a cada reunião ----------
{
  const tarefas = { quando: 60, para: 'cliente', modelo: 'tarefas', variaveis: { 1: 'nomeCliente', 2: { porReuniao: 'Tarefas em aberto' }, 3: { texto: 'Qualquer dúvida, responda aqui.' } } };
  const e = estadoCom([pessoa('P', util([bl('09:00', '18:00')]))], [tipo('X', { pessoas: pesos(['P', 100]), lembretes: [tarefas] })]);
  e.remetentes.r1.modelos.push({ id: 'tarefas', nome: 'tarefas_em_aberto', estado: 'aprovado', variaveis: ['1', '2', '3'], botoes: [], texto: 'Olá, {{1}}. Ficaram em aberto: {{2}}. {{3}}' });
  ok('um mapa com texto fixo e campo da reunião é aceito', !A.pendencias(e, e.tipos.X).length, A.pendencias(e, e.tipos.X).join('; '));
  const h = A.horariosLivres(e, 'X', { agora: AGORA, ate: AGORA + DIA })[0], rng = rngDe(21);
  const ag = A.confirmar(e, { tipo: 'X', inicio: h.inicio, origem: 'publico', quem: { publico: 'naoCliente' }, cliente: { nome: 'Teo', whatsapp: '+55 71 90000-1111', aceite: true } }, { agora: AGORA, rng }).agendamento;
  const msg = () => Object.values(e.mensagens).find(m => m.agendamento === ag.id && m.modelo === 'tarefas');
  ok('a mensagem nasce esperando o campo da reunião', msg().estado === 'agendada' && msg().aguarda.join() === 'Tarefas em aberto');
  ok('os campos da reunião aparecem para o consultor preencher', A.camposDaReuniao(e, ag.id).map(c => c.rotulo + (c.vaiAoCliente ? ' (cliente)' : '')).join() === 'Tarefas em aberto (cliente)');
  A.marcarEstado(e, ag.id, 'realizado', { agora: Date.parse(ag.fim), quem: 'P' });
  A.relogio(e, { agora: Date.parse(ag.fim) + 2 * HORA });
  ok('com a reunião realizada e o campo em branco, a mensagem de depois espera (não sai, não some)', msg().estado === 'aguardando');
  const recusa = A.preencherTextos(e, ag.id, { 'Tarefas em aberto': 'rever a carteira Prime' }, { agora: Date.parse(ag.fim) + 3 * HORA, quem: 'P' });
  ok('um texto da reunião com a faixa não vai ao cliente', !recusa.ok && recusa.motivo === 'faixa' && msg().estado === 'aguardando');
  const r = A.preencherTextos(e, ag.id, { 'Tarefas em aberto': 'mandar o extrato da previdência e o IR de 2025' }, { agora: Date.parse(ag.fim) + 3 * HORA, quem: 'P' });
  ok('escrito o campo, a mensagem sai com o texto dele e o texto fixo', r.ok && r.enviadas === 1 && msg().estado === 'enviada' && msg().texto === 'Olá, Teo. Ficaram em aberto: mandar o extrato da previdência e o IR de 2025. Qualquer dúvida, responda aqui.', msg().texto);
  const semNome = Object.assign({}, e.tipos.X, { lembretes: [Object.assign({}, tarefas, { variaveis: { 2: { porReuniao: '' } } })] });
  const comFaixa = Object.assign({}, e.tipos.X, { lembretes: [Object.assign({}, tarefas, { variaveis: { 3: { texto: 'Para clientes de 2 a 5 milhões' } } })] });
  ok('o campo da reunião precisa de nome, e o texto fixo que vai ao cliente não pode ter a faixa', A.pendencias(e, semNome).some(p => /nome do campo/.test(p)) && A.pendencias(e, comFaixa).some(p => /texto fixo sem a faixa/.test(p)));
}

// ---------- 8. lembretes ----------
console.log('\n8. Os lembretes são os da lista do tipo, e os que já passaram não são criados');
{
  const lembretes = [
    { quando: -1440, para: 'cliente', modelo: 'lemb', variaveis: VAR_LEMB },
    { quando: -120, para: 'ambos', modelo: 'lemb', variaveis: VAR_LEMB },
    { quando: -30, para: 'atende', modelo: 'lemb', variaveis: VAR_LEMB },
    { quando: 60, para: 'cliente', modelo: 'lemb', variaveis: VAR_LEMB },
  ];
  const e = estadoCom([pessoa('P', { 0: [bl('00:00', '23:59')], 1: [bl('00:00', '23:59')], 2: [bl('00:00', '23:59')], 3: [bl('00:00', '23:59')], 4: [bl('00:00', '23:59')], 5: [bl('00:00', '23:59')], 6: [bl('00:00', '23:59')] })], [tipo('X', { pessoas: pesos(['P', 100]), lembretes })]);
  const rng = rngDe(4), cli = { nome: 'Lia', whatsapp: '+55 11 95555-0000', email: 'lia@exemplo.test', aceite: true };
  const perto = A.confirmar(e, { tipo: 'X', inicio: iso(AGORA + 3 * HORA), origem: 'publico', quem: { publico: 'naoCliente' }, cliente: cli }, { agora: AGORA, rng }).agendamento;
  const longe = A.confirmar(e, { tipo: 'X', inicio: iso(AGORA + 3 * DIA), origem: 'publico', quem: { publico: 'naoCliente' }, cliente: Object.assign({}, cli, { whatsapp: '+55 11 95555-0001' }) }, { agora: AGORA, rng }).agendamento;
  const lemb = ag => Object.values(e.mensagens).filter(m => m.agendamento === ag.id && m.evento === 'lembrete').map(m => [Date.parse(m.enviarEm) - (Date.parse(m.enviarEm) > Date.parse(ag.inicio) ? Date.parse(ag.fim) : Date.parse(ag.inicio)), m.para === 'cliente' ? 'cliente' : 'atende']).map(([d, p]) => d / MIN + ' ' + p).sort();
  ok('daqui a 3 h: sem o de 24 h; 2 h para os dois, 30 min para quem atende, 1 h depois para o cliente', lemb(perto).join() === ['-120 atende', '-120 cliente', '-30 atende', '60 cliente'].sort().join(), lemb(perto).join(', '));
  ok('daqui a 3 dias: todos os da lista', lemb(longe).join() === ['-1440 cliente', '-120 atende', '-120 cliente', '-30 atende', '60 cliente'].sort().join(), lemb(longe).join(', '));
  ok('lembretesDe e o que foi para a fila são a mesma coisa', A.lembretesDe(e, longe, AGORA).length === lemb(longe).length);
  ok('a confirmação e o aviso a quem atende saem na hora, mais o e-mail com o convite', ['whatsapp cliente', 'whatsapp atende', 'email cliente'].every(k => Object.values(e.mensagens).some(m => m.agendamento === perto.id && m.evento === 'agendou' && m.estado === 'enviada' && (m.canal + ' ' + (m.para === 'cliente' ? 'cliente' : 'atende')) === k)));
  // editar o tipo não muda o agendamento já marcado
  e.tipos.X.lembretes = [];
  ok('editar o tipo vale para os novos; o marcado guarda a sua lista', A.lembretesDe(e, longe, AGORA).length === 5);
  A.cancelar(e, perto.id, { agora: AGORA + HORA, quem: 'cliente' });
  ok('cancelada, os lembretes pendentes não saem', Object.values(e.mensagens).filter(m => m.agendamento === perto.id && m.evento === 'lembrete').every(m => m.estado === 'cancelada'));
  // o relógio envia; o botão "Confirmo" funciona
  A.relogio(e, { agora: Date.parse(longe.inicio) - 1440 * MIN + MIN });
  const m24 = Object.values(e.mensagens).find(m => m.agendamento === longe.id && m.evento === 'lembrete' && m.estado === 'enviada');
  ok('o relógio envia o de 24 h na hora dele, e só ele', !!m24 && Object.values(e.mensagens).filter(m => m.agendamento === longe.id && m.evento === 'lembrete' && m.estado === 'enviada').length === 1);
  A.responder(e, m24.id, 'Confirmo', { agora: Date.parse(m24.enviarEm) + MIN });
  ok('"Confirmo" marca a reunião como confirmada', e.agendamentos[longe.id].confirmado === true);
  A.responder(e, m24.id, 'parar', { agora: Date.parse(m24.enviarEm) + 2 * MIN });
  const pend = Object.values(e.mensagens).filter(m => m.agendamento === longe.id && m.evento === 'lembrete' && m.estado !== 'enviada');
  ok('"parar" interrompe os lembretes do cliente e deixa os da equipe', pend.filter(m => m.para === 'cliente').every(m => m.estado === 'cancelada') && pend.some(m => m.para !== 'cliente' && m.estado === 'agendada') && e.agendamentos[longe.id].estado === 'marcado');
}

// ---------- 9. públicos e liberação ----------
console.log('\n9. Cada público só agenda os tipos dele, e um tipo "quando liberado" só com a liberação em aberto');
{
  const ps = [pessoa('A', util([bl('09:00', '18:00')])), pessoa('B', util([bl('09:00', '18:00')]))];
  const e = estadoCom(ps, [
    tipo('N', { publico: 'naoCliente', pessoas: pesos(['A', 100]) }),
    tipo('E', { publico: 'empresa', endereco: '', pessoas: pesos(['B', 100]), tokens: 5, devolveAoCancelar: true }),
    tipo('E2', { publico: 'empresa', endereco: '', liberacao: 'liberado', pessoas: pesos(['B', 100]) }),
    tipo('C', { publico: 'cliente', endereco: '', liberacao: 'liberado', liberaACadaMeses: 6, atende: 'consultorDoCliente', pessoas: [] }),
  ]);
  const N = { publico: 'naoCliente' }, E = { publico: 'empresa', id: 'e1' }, C = { publico: 'cliente', id: 'c1', consultor: 'A' };
  const pode = (t, q, origem) => A.podeAgendar(e, t, q, { origem, agora: AGORA });
  ok('quem não é cliente agenda o comercial pelo link', pode('N', N, 'publico').pode);
  ok('…e não agenda o da empresa nem o do cliente', pode('E', N, 'publico').motivo === 'outro_publico' && pode('C', N, 'publico').motivo === 'outro_publico');
  ok('…e não tem botão na área logada', pode('N', N, 'interno').motivo === 'so_pelo_link');
  ok('a pessoa de empresa não agenda o comercial nem a coleta', pode('N', E, 'interno').motivo === 'outro_publico' && pode('C', E, 'interno').motivo === 'outro_publico');
  ok('o tipo de cliente não abre pelo endereço público', pode('C', C, 'publico').motivo === 'outro_publico' && A.resolverEndereco(e, 'conversa-c') === null);
  e.saldos.e1 = { id: 'e1', tokens: 4 };
  const t4 = pode('E', E, 'interno');
  ok('clínica com 4 tokens: "faltam 1"', t4.motivo === 'tokens' && t4.faltam === 1);
  e.saldos.e1.tokens = 5;
  ok('com 5, pode', pode('E', E, 'interno').pode);
  const h = A.horariosLivres(e, 'E', { agora: AGORA, ate: AGORA + DIA })[0];
  const rc = A.confirmar(e, { tipo: 'E', inicio: h.inicio, origem: 'interno', quem: E, cliente: { nome: 'Pessoa de empresa', email: 'e1@exemplo.test' } }, { agora: AGORA, rng: rngDe(1) });
  ok('agendar desconta os tokens', rc.ok && e.saldos.e1.tokens === 0);
  A.cancelar(e, rc.agendamento.id, { agora: AGORA, quem: 'cliente' });
  ok('cancelar no prazo devolve, com o interruptor ligado', e.saldos.e1.tokens === 5);
  ok('aprofundamento sem liberação: não', pode('E2', E, 'interno').motivo === 'nao_liberado');
  A.liberar(e, 'e1', 'E2', 'B', AGORA);
  ok('liberado: pode', pode('E2', E, 'interno').pode);
  const h2 = A.horariosLivres(e, 'E2', { agora: AGORA, ate: AGORA + DIA })[3];
  ok('agendado, a liberação é usada', A.confirmar(e, { tipo: 'E2', inicio: h2.inicio, origem: 'interno', quem: E, cliente: { nome: 'Pessoa de empresa' } }, { agora: AGORA, rng: rngDe(2) }).ok && pode('E2', E, 'interno').motivo === 'nao_liberado');
  ok('coleta sem liberação: não; liberada, pode', pode('C', C, 'interno').motivo === 'nao_liberado' && (A.liberar(e, 'c1', 'C', 'A', AGORA), pode('C', C, 'interno').pode));
  ok('o consultor que agenda pelo cliente não depende da liberação', (() => { const t = A.podeAgendar(e, 'C', { publico: 'cliente', id: 'c2', consultor: 'A' }, { origem: 'consultor', agora: AGORA }); return t.pode; })());
  const hc = A.horariosLivres(e, 'C', { agora: AGORA, ate: AGORA + DIA, consultor: 'A' });
  ok('o tipo "consultor do cliente" só oferece a agenda do consultor', hc.length > 0 && hc.every(x => x.pessoas.join() === 'A'));
  A.confirmar(e, { tipo: 'C', inicio: hc[0].inicio, origem: 'interno', quem: C, cliente: { nome: 'Cliente' } }, { agora: AGORA, rng: rngDe(3) });
  A.relogio(e, { agora: AGORA + 100 * DIA, clientes: [{ id: 'c1', publico: 'cliente' }] });
  ok('antes de 6 meses, nada liberado de novo', !A.liberacaoAberta(e, 'c1', 'C'));
  A.relogio(e, { agora: AGORA + 190 * DIA, clientes: [{ id: 'c1', publico: 'cliente' }] });
  ok('6 meses depois, liberado sozinho', !!A.liberacaoAberta(e, 'c1', 'C'));
  e.pessoas.A.calendarios[0].estado = 'quebrado';
  ok('consultor com a agenda desconectada: o cliente vê o motivo e o WhatsApp', pode('C', C, 'interno').motivo === 'agenda_desconectada' && !!pode('C', C, 'interno').whatsapp);
  e.tipos.N.ligado = false;
  ok('tipo desligado: ninguém agenda', pode('N', N, 'publico').motivo === 'desligado');
}

// ---------- públicos na área logada, link pessoal e liberação depois de outra reunião ----------
{
  const ps = [pessoa('A', util([bl('09:00', '18:00')])), pessoa('B', util([bl('09:00', '18:00')]))];
  const e = estadoCom(ps, [
    tipo('CL', { publico: 'empresa', endereco: '', pessoas: pesos(['B', 100]), tokens: 5 }),
    tipo('AP', { publico: 'empresa', endereco: '', liberacao: 'liberado', atende: 'consultorDoCliente' }),
    tipo('CK', { publico: 'empresa', endereco: '', liberacao: 'liberado', liberaAposTipo: 'CL', liberaAposMeses: 12, atende: 'consultorDoCliente' }),
    tipo('AC', { publico: 'cliente', endereco: '', liberacao: 'liberado', atende: 'consultorDoCliente' }),
  ]);
  e.clientes.emp = { id: 'emp', nome: 'Pessoa de empresa', whatsapp: '+55 11 95555-1111', email: 'emp@exemplo.test', publico: 'empresa', consultor: 'B' };
  e.clientes.cli = { id: 'cli', nome: 'Cliente', whatsapp: '+55 11 95555-2222', email: 'cli@exemplo.test', publico: 'cliente', consultor: 'A' };
  e.clientes.sem = { id: 'sem', nome: 'Sem consultor', publico: 'cliente', consultor: null };
  e.saldos.emp = { id: 'emp', tokens: 3 };
  const disp = id => A.tiposParaCliente(e, id, AGORA).map(x => x.tipo + (x.pode ? '' : ':' + x.motivo + (x.faltam ? x.faltam : ''))).sort().join(',');
  ok('a pessoa de empresa vê a clínica (apagada: faltam 2 tokens), sem os tipos ainda não liberados', disp('emp') === 'CL:tokens2', disp('emp'));
  ok('o cliente vê só o que foi liberado para ele; quem não tem consultor não vê nada', disp('cli') === '' && (A.liberar(e, 'cli', 'AC', 'A', AGORA), disp('cli') === 'AC') && disp('sem') === '');
  // agendar pela área logada: sem formulário, com o aceite do cadastro, na agenda do consultor
  const h = A.horariosLivres(e, 'AC', { agora: AGORA, ate: AGORA + 2 * DIA, consultor: 'A' })[0];
  const r = A.confirmar(e, { tipo: 'AC', inicio: h.inicio, origem: 'interno', quem: A.quemDoCliente(e, 'cli'), cliente: { respostas: {} } }, { agora: AGORA, rng: rngDe(31) });
  ok('pela área logada: os dados e o aceite vêm do cadastro, e quem atende é o consultor', r.ok && r.agendamento.cliente.nome === 'Cliente' && r.agendamento.cliente.aceite.origem === 'cadastro' && r.agendamento.atende === 'A');
  ok('a próxima reunião do cliente é essa', A.proximaDoCliente(e, 'cli', AGORA).id === r.agendamento.id);
  // o link pessoal: de uso único e com prazo
  e.saldos.emp.tokens = 5;
  const lk = A.gerarLinkPessoal(e, { tipo: 'CL', cliente: { id: 'emp', nome: 'Pessoa de empresa', whatsapp: '+55 11 95555-1111' }, quem: A.quemDoCliente(e, 'emp'), expiraEm: AGORA + 2 * DIA }, { agora: AGORA, rng: rngDe(32) }).link;
  const h2 = A.horariosLivres(e, 'CL', { agora: AGORA, ate: AGORA + 2 * DIA })[0];
  const p1 = A.confirmar(e, { tipo: 'CL', inicio: h2.inicio, origem: 'pessoal', link: lk.id, code: lk.code, cliente: { respostas: {} } }, { agora: AGORA, rng: rngDe(33) });
  ok('o link pessoal agenda sem formulário e desconta os tokens', p1.ok && p1.agendamento.cliente.id === 'emp' && e.saldos.emp.tokens === 0);
  ok('usado uma vez, o link não vale mais', A.validarLink(e, lk.id, lk.code, AGORA).motivo === 'link_usado');
  const lk2 = A.gerarLinkPessoal(e, { tipo: 'CL', cliente: { id: 'emp' }, quem: A.quemDoCliente(e, 'emp'), expiraEm: AGORA + DIA }, { agora: AGORA, rng: rngDe(34) }).link;
  ok('vencido o prazo, também não', A.validarLink(e, lk2.id, lk2.code, AGORA + 2 * DIA).motivo === 'link_expirado' && A.validarLink(e, lk2.id, 'outro', AGORA).motivo === 'link_invalido');
  // o check-up, 12 meses depois da clínica realizada
  A.marcarEstado(e, p1.agendamento.id, 'realizado', { agora: Date.parse(p1.agendamento.fim) });
  A.relogio(e, { agora: Date.parse(p1.agendamento.inicio) + 300 * DIA });
  ok('antes de 12 meses da clínica, o check-up não é liberado', !A.liberacaoAberta(e, 'emp', 'CK'));
  A.relogio(e, { agora: Date.parse(p1.agendamento.inicio) + 370 * DIA });
  ok('12 meses depois da clínica realizada, o check-up é liberado sozinho', !!A.liberacaoAberta(e, 'emp', 'CK') && A.tiposParaCliente(e, 'emp', Date.parse(p1.agendamento.inicio) + 370 * DIA).some(x => x.tipo === 'CK' && x.pode));
}

// ---------- 10. a faixa nunca chega ao cliente ----------
console.log('\n10. O nome interno e a faixa não aparecem em nenhum texto que o cliente recebe');
{
  const INTERNO = 'Apresentação · Prime 2 a 5 MM';
  const lembretes = [{ quando: -1440, para: 'ambos', modelo: 'lemb', variaveis: VAR_LEMB }, { quando: 120, para: 'cliente', modelo: 'lemb', variaveis: VAR_LEMB }];
  const ps = [pessoa('A', util([bl('09:00', '18:00')])), pessoa('B', util([bl('09:00', '18:00')]))];
  const e = estadoCom(ps, [tipo('X', { nomeInterno: INTERNO, nomePublico: 'Conversa com a Nord', descricaoPublica: 'Uma conversa de 50 minutos para entender o seu momento.', endereco: 'k7m2xq', pessoas: pesos(['A', 60], ['B', 40]), lembretes })]);
  ok('o tipo bem cadastrado pode ligar', A.pendencias(e, e.tipos.X).length === 0, A.pendencias(e, e.tipos.X).join('; '));
  const rng = rngDe(10), cli = n => ({ nome: 'Cliente ' + n, whatsapp: '+55 41 94444-00' + n, email: 'c' + n + '@exemplo.test', aceite: true, respostas: { 'O que você gostaria de tratar?': 'aposentadoria' } });
  const hs = A.horariosLivres(e, 'X', { agora: AGORA, ate: AGORA + 10 * DIA });
  const ids = [];
  for (let i = 0; i < 6; i++) { const r = A.confirmar(e, { tipo: 'X', inicio: hs[i * 7].inicio, origem: 'publico', quem: { publico: 'naoCliente' }, cliente: cli(10 + i) }, { agora: AGORA, rng }); ids.push(r.agendamento.id); }
  const r2 = A.remarcar(e, ids[0], A.horariosParaRemarcar(e, ids[0], { agora: AGORA }).horarios[0].inicio, { agora: AGORA, quem: 'cliente', rng }); ids.push(r2.agendamento.id);
  A.cancelar(e, ids[1], { agora: AGORA, quem: 'cliente', motivo: 'Mudou a agenda' });
  A.relogio(e, { agora: AGORA + 20 * DIA });
  const lb = Object.values(e.mensagens).find(m => m.evento === 'lembrete' && m.para === 'cliente' && m.estado === 'enviada');
  A.responder(e, lb.id, 'Preciso remarcar', { agora: AGORA + 20 * DIA });
  const textos = ids.flatMap(id => A.textosDoCliente(e, id));
  const comInterno = textos.filter(t => t.includes(INTERNO)), comFaixa = textos.filter(t => A.palavrasDeFaixa(t).length);
  ok('em ' + textos.length + ' textos (página, convite, .ics, WhatsApp, e-mail), nenhum nome interno', comInterno.length === 0, comInterno[0] || '');
  ok('…e nenhuma palavra ou valor de faixa', comFaixa.length === 0, comFaixa.length ? A.palavrasDeFaixa(comFaixa[0]).join(', ') + ' em: ' + comFaixa[0].slice(0, 80) : '');
  ok('o aviso a quem atende traz o nome interno (é da equipe)', Object.values(e.mensagens).some(m => m.para !== 'cliente' && m.texto.includes(INTERNO)));
  ok('a página pública não recebe o nome interno', !JSON.stringify(A.vistaPublica(e, 'X')).includes('Prime'));
  // um modelo mal ligado: a variável do nome interno numa mensagem do cliente
  e.tipos.X.mensagens.agendou.variaveis.cliente = Object.assign({}, VAR_CONF, { 2: 'nomeInterno' });
  ok('ligar o nome interno numa mensagem do cliente impede ligar o tipo', A.pendencias(e, e.tipos.X).some(p => /só da equipe/.test(p)));
  const r3 = A.confirmar(e, { tipo: 'X', inicio: hs[50].inicio, origem: 'publico', quem: { publico: 'naoCliente' }, cliente: cli(30) }, { agora: AGORA, rng });
  ok('e, mesmo assim, a variável sai em branco para o cliente', A.textosDoCliente(e, r3.agendamento.id).every(t => !t.includes(INTERNO)));
  e.tipos.X.mensagens.agendou.variaveis.cliente = VAR_CONF;
  for (const [campo, valor] of [['nomePublico', 'Conversa Prime'], ['descricaoPublica', 'Para patrimônio de 2 a 5 milhões'], ['endereco', 'apresentacao-2-5mm'], ['nomePublico', 'Conversa Private'], ['descricaoPublica', 'Acima de R$ 10 mil']]) {
    const t = Object.assign({}, e.tipos.X, { [campo]: valor });
    ok('o painel barra a faixa em ' + campo + ': "' + valor + '"', A.pendencias(e, t).some(p => /sem a faixa/.test(p)));
  }
  e.remetentes.r1.modelos.find(m => m.id === 'lemb').texto = 'Sua reunião Prime é {{3}}';
  ok('um modelo do cliente com a faixa no texto também barra', A.pendencias(e, e.tipos.X).some(p => /modelo sem a faixa/.test(p)));
}

console.log('\n' + (falhas ? falhas + ' FALHA(S)' : 'tudo certo'));
process.exit(falhas ? 1 : 0);
