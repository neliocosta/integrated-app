// Copia o motor, o armazém e os gráficos compartilhados (o sunburst da carteira) da tela do cliente para as outras telas:
// a do consultor (os três blocos) e a do acompanhamento (o motor e o armazém). As telas são autocontidas, então os blocos
// são duplicados de propósito; rode isto após mexer neles.
const fs = require('fs');
const origem = fs.readFileSync('evolucao-patrimonial.html', 'utf8');
const DESTINOS = { 'tela-consultor.html': ['engine', 'armazem', 'graficos'], 'acompanhamento.html': ['engine', 'armazem'] };
for (const [p, ids] of Object.entries(DESTINOS)) {
  let s = fs.readFileSync(p, 'utf8');
  for (const id of ids) {
    const re = new RegExp('<script id="' + id + '">[\\s\\S]*?<\\/script>');
    const bloco = origem.match(re)[0];
    if (re.test(s)) s = s.replace(re, () => bloco);
    else s = s.replace(/(<script id="engine">[\s\S]*?<\/script>)/, (m) => m + '\n' + bloco);   // primeira vez: logo depois do motor
    console.log(p + ': ' + id + ' sincronizado (' + Math.round(bloco.length / 1024) + ' KB)');
  }
  fs.writeFileSync(p, s);
}

// O motor e o armazém da agenda: do painel (agendamento.html) para a página de quem agenda e para a área do cliente.
// Só onde a tela já carrega o bloco; a primeira cópia em cada tela é posta à mão, no lugar certo dela.
const painel = fs.readFileSync('agendamento.html', 'utf8');
for (const id of ['motor-agenda', 'armazem-agenda']) {
  const re = new RegExp('<script id="' + id + '">[\\s\\S]*?<\\/script>'), bloco = painel.match(re)[0];
  for (const destino of ['agendar.html', 'area-cliente.html']) {
    if (!fs.existsSync(destino)) continue;
    const t = fs.readFileSync(destino, 'utf8');
    if (!re.test(t)) continue;
    const quebra = t.includes('\r\n') ? '\r\n' : '\n';   // a área do cliente é CRLF: a cópia segue a quebra de cada tela
    fs.writeFileSync(destino, t.replace(re, () => bloco.replace(/\r?\n/g, quebra)));
    console.log(id + ' sincronizado em ' + destino + ' (' + Math.round(bloco.length / 1024) + ' KB)');
  }
}
