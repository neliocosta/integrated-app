# Prompt — protótipo do agendamento de reuniões

Copiar daqui para baixo numa sessão nova do Claude Code aberta neste repositório. Os arquivos que ele manda ler
estão todos no repositório. Onde este prompt e o [AGENDAMENTO.md](AGENDAMENTO.md) divergirem, vale o AGENDAMENTO.md.

---

Quero construir o **protótipo funcional do agendamento de reuniões** da Nord Liberta, que vai substituir o OnceHub.
A especificação está pronta em `area-logada/AGENDAMENTO.md`. Não é um mock de telas: o admin cadastra de verdade, o
cliente agenda de verdade, a distribuição por peso e os lembretes rodam. Só o que está fora do navegador (Google,
Microsoft, WhatsApp, e-mail, o relógio) é simulado, como a seção "O protótipo" descreve.

## Leia antes de começar, nesta ordem

1. `area-logada/AGENDAMENTO.md`, inteiro. É a especificação. As seções "Modelo de dados" e "O protótipo" dizem o
   que construir; as outras dizem as regras.
2. `README.md` › "Quem vê o quê e onde os dados ficam": o armazém, a ponte com a página principal no link publicado
   e o modo local. O protótipo guarda os dados do mesmo jeito.
3. `DESIGN.md`: tokens, tipografia e componentes. As telas novas usam exatamente esses tokens.
4. `index.html` e o bloco `<script id="armazem">` de `area-cliente.html`: o padrão de armazém a reaproveitar.
5. `verificar.js` e `sync-motor.js`: o padrão de conferência em Node e de cópia do motor entre as telas.
6. `area-logada/README.md`, só "O que já existe" e os degraus, para o vocabulário (pipeline, Jornada, clínica).

## Entrega

Na ordem da seção "Ordem dentro do protótipo" do AGENDAMENTO.md, um passo por vez, parando para eu ver ao fim de
cada um:

1. O motor (`<script id="motor-agenda">`) e o `verificar-agenda.js`, com as dez conferências da especificação
   passando.
2. `agendamento.html`: Equipe e Links de agendamento, com o calendário simulado.
3. `agendar.html`: a página de quem agenda, primeiro no celular.
4. Mensagens: remetentes, modelos, lembretes, caixa de saída e relógio.
5. Pessoas e pesos: distribuição, cota × realizado, simulação e reatribuição.
6. Públicos, liberação, link pessoal, tokens e o encaixe em `area-cliente.html`.

## Regras

- **Começa zerado.** Nenhum tipo, pessoa, peso, duração, lembrete ou número no código. O exemplo entra só pelo botão
  "Carregar exemplo", com nomes inventados.
- **A faixa de patrimônio nunca chega ao cliente:** nem na página, nem no endereço, nem nas mensagens, nem no
  convite do calendário.
- **As regras moram no motor**, sem tocar em tela, e o `verificar-agenda.js` as confere. Rode-o a cada mudança no
  motor.
- HTML autocontido, sem dependências além das fontes, como as outras telas. Não mexa no motor do plano nem nas
  telas existentes, fora o encaixe do passo 6.
- Verifique cada tela no navegador (servidor `integrated-app` do `.claude/launch.json`), no celular e no desktop,
  antes de dizer que está pronta.
- Onde a especificação não decidir, decida, e registre a decisão num comentário no alto do arquivo e na seção
  "Decidido" do AGENDAMENTO.md.
- Ao fim de cada passo, atualize o AGENDAMENTO.md se a construção mudou alguma regra.
