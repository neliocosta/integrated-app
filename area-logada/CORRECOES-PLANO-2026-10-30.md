# Área do cliente — o que corrigir, ajustar e orientar (30/10/2026)

Documento de direção para a próxima rodada de implementação (prompt para o Opus). Escrito a partir de:
(a) o código da branch `claude/plano-cartoes-area-cliente` (commit `1cd7779`: `area-logada/mock/index.html` e
`area-cliente.html`); (b) o relatório do cliente `evolucao-patrimonial.html`, que é a ferramenta do repositório
assets-evolution (a branch `claude/friendly-tesla-x2amx4` foi mergeada no `main` e o conteúdo está neste repositório, no
commit `7e2c582`); (c) as sessões anteriores (o outline `README.md`/`UX.md`/`ETAPAS.md`, as avaliações de 24 e 25/10 e a
sessão de 30/10 que gerou a branch); (d) o feedback do dono do produto em 30/10, reproduzido na seção 1.

Onde este documento e o `UX.md` divergirem, vale este documento; a seção 10 lista o que precisa mudar nos documentos.

> **Implementado em 30/10/2026** em `area-cliente.html` (a base única) e `evolucao-patrimonial.html` (o resumo para a
> área, `?versao`, `?embutido` e `?fluxo&vida`), com a seção 15 de `verificar.js`. Ficaram de fora, registrados em
> `PENDENCIAS.md` › "Área do cliente: a base única": o mock não foi aposentado nem convertido (fica como referência das
> telas que faltam), os questionários completos da coleta para o self-service (seção 5.3, médio prazo), a fórmula oficial
> do exame, as fotos guardadas com a marca, Conteúdos e Utilitários. A calibração do peso da profundidade ficou para
> decisão.

---

## 1. O feedback que motiva esta rodada (dono do produto, 30/10)

1. **Uma estrutura só para todo mundo.** Visitante, Cadastrado, Clínica e Completo navegam pela mesma área, com as
   mesmas abas e os mesmos cartões. O que muda é o **nível de profundidade** de cada área: o visitante calcula sozinho,
   rápido, algumas áreas; o cliente da clínica tem algumas áreas preenchidas pela consultora numa conversa curta; o
   cliente do planejamento completo tem tudo calculado pelo consultor depois da coleta. **As informações a serem vistas
   são as mesmas.**
2. **O foco nunca é do tipo de reunião. O foco é do momento de vida do cliente.** Para o cliente não importa se a
   orientação veio de um vídeo da área logada, de uma clínica ou de um planejamento. O selo "Foco da clínica" está
   errado e sai.
3. **A ferramenta de relatório é a referência da estrutura.** Cada orientação da vida financeira tem uma versão
   resumida (a capa do capítulo, na montagem do relatório) e uma versão expandida. No Plano, cada área é um cartão com
   o resumo macro; o clique expande para o detalhe, "como se fosse o planejamento completo do cliente".
4. **Profundidade visível, à maneira da Origin.** Cartões vazios aparecem (ainda não preenchidos), com o percentual de
   profundidade de cada área e do plano. Um visitante pode estar em 5–10% com um número macro; um cliente de clínica em
   25% com uns quatro indicadores; o completo em 100% com uns quinze. No médio prazo, o visitante chega a 100% sozinho,
   respondendo os mesmos questionários do planejamento completo.
5. **Tarefas e o andamento dos objetivos** talvez não fiquem no Plano, e sim numa home (Painel).
6. **Fluxo de caixa de 24 meses e da vida toda** acessíveis em algum lugar (provavelmente dentro de Gestão financeira), e
   o gráfico/vídeo da **evolução patrimonial**, que é o ponto alto da apresentação.
7. **Orçado × realizado**, do orçamento e do patrimônio: planejei em outubro de 2026, quero olhar em julho de 2027 se
   fiquei dentro, abaixo ou acima.
8. **Fotografias do exame de saúde financeira** (33 perguntas; nota 0–100 geral e por pilar: poupança, patrimônio,
   proteção, consciência, atitude), para ver a evolução.

---

## 2. Diagnóstico do que foi feito na branch

### 2.1 Três estruturas de Plano, uma por degrau (contraria o item 1)

| Onde | Degrau | O que a aba Plano mostra | Linhas |
|---|---|---|---|
| mock | Completo, só na situação Padrão | "livro em cartões": faixa do Diagnóstico + 8 cartões por capítulo, que abrem a página do capítulo | `mock/index.html` 2084–2087, 2158 (`temLivro = degrau === 'completo' && !montagem && id === 'padrao'`) |
| mock | Clínica, Cadastrado, Montagem | o "Status": lista de verticais expansíveis, agrupadas por estado; na Clínica, o grupo "Combinado na clínica de 12/09" primeiro | 1941–1960, 2158–2162 |
| mock | Cadastrado e Clínica | só 4 verticais das 10 (orçamento, saúde, objetivos, reserva); as outras **somem** | 785 |
| `area-cliente.html` | Clínica (único degrau) | "O que combinamos" (lista de orientações) + "Para uma próxima conversa" + 4 cartões fixos (Reserva, Objetivos e liberdade, Orçamento e sobra, Saúde financeira) ordenados por `R.focos`, **sem clique** e sem página expandida | 747–766 |

Além do Plano, a navegação muda entre degraus: o mock tem 8 destinos (Painel, Objetivos, Tarefas, Plano, Realizado,
Conteúdos, Jornada, Utilitários + Conversas); `area-cliente.html` tem 5 (sem Realizado, Conteúdos, Utilitários);
o Visitante não tem casca nem barra (mock 2513–2518). O rótulo "· clínica financeira" está fixo no menu lateral
(`area-cliente.html` 556).

### 2.2 O tipo de reunião como critério de destaque (contraria o item 2)

- Chip **"foco da clínica"** nos cartões do Plano e ordenação dos cartões por `R.focos` (`area-cliente.html` 753–765;
  o cartão Saúde financeira tem `foco` fixo em `false`, linha 760).
- Grupo "Combinado na clínica de 12/09" no alto do Status (mock 1943, 1955–1958); `foco: true` posto à mão nas
  situações Renda irregular e Clínica pela empresa (mock 1093–1097, 1208–1210).
- Rótulos "combinado na clínica de 12/09" nos números do Painel (mock 769, 1086–1087, 1203–1204; folha de origem 2765).
- "foco escolhido pela Patrícia na clínica de 12/09" no passo (mock 792–793, 1083, 1200; `area-cliente.html` 612) e na
  escalada ("Na clínica, o foco escolhido pela … vale acima da régua", `area-cliente.html` 779; mock 849, 1111, 1134).
- O Painel da Clínica usa "O que combinamos em 12/09" como protagonista (mock 1401–1429; `area-cliente.html` Painel).

A premissa 10 do `README.md` ("o consultor prevalece sobre a régua") continua valendo como **regra de cálculo do passo
atual**. O erro é expô-la ao cliente como selo e como critério de ordenação, nomeando a reunião. O cliente vê o passo
do momento de vida dele; a origem ("definido com a Patrícia em 12/09") fica no toque, como qualquer outra origem.

### 2.3 O relatório do assets-evolution foi acessado, mas a estrutura dele não foi aproveitada (item 3)

A sessão de 30/10 de fato acessou a ferramenta: trouxe o `main` (que já continha a branch `friendly-tesla`), leu o
código de `evolucao-patrimonial.html` e capturou 36 páginas com `ux/capturas.cjs`. Mas o resultado não reaproveita a
estrutura do relatório:

- Os cartões do mock leem uma **constante fixa `LIVRO`** (mock 1969–1996), com números copiados à mão do relatório em
  30/10 (comentário 1962–1968), não do motor. É exatamente o erro apontado na Origin ("a tela nunca pode contradizer o
  número"): já há divergências (sobra R$ 3.233 no `LIVRO.politica` contra R$ 2.500 do JSON; Fortaleza 354 contra 150;
  liberdade com R$ 646.800 guardados na Política e R$ 689.000 em `baseLib`; o JSON pede R$ 5.506/mês e o motor
  auditado pede R$ 5.690).
- O relatório **já tem a versão resumida de cada capítulo**: `destaques(id, P)` (`evolucao-patrimonial.html`
  5294–5356) devolve os "Principais números" (`nums`) e o "O que fazer" (`faz`) de cada capítulo, usados na capa e no
  resumo (`renderCapa` 6215, `renderResumo` 6226). Os cartões do Plano deveriam nascer daí, e a página expandida é a
  própria página do capítulo. Nada disso foi usado; o mock reescreveu gráficos menores com dados estáticos.
- A lista de áreas do mock (`CAPS_PLANO`, 2000–2009) não é a lista canônica das verticais do `UX.md` nem a dos
  capítulos do livro (`CAPITULOS`, 5228–5240): Reserva não tem cartão (mapeada para Política, mock 2922), Saúde
  financeira não tem cartão (mapeada para Diagnóstico), e a Carteira aparece como cartão vazio enquanto a vertical
  "Carteira e IR" mostra 62% de aderência (mock 781, 1992, 2081).
- `area-cliente.html` não usa o livro em nada: 4 cartões com gráficos próprios, sem página de capítulo.

### 2.4 Profundidade e cartões vazios não existem (item 4)

Nenhum dos dois arquivos tem o conceito de profundidade ou percentual de preenchimento. A regra em vigor nos documentos é
a oposta: "o que falta some" (`UX.md` › Status; `PRODUCT.md` princípio 4; `PROMPT-MOCK.md` "Nada vazio"). Essa regra
precisa ser **revista para o Plano** (ver seção 5): no Plano, a área que falta aparece como cartão vazio com o convite
e a profundidade; o "some" continua valendo para o resto da área (Realizado sem dado, lentes vazias etc.).

### 2.5 O que falta de conteúdo em relação ao relatório e ao feedback

| Área ou peça | mock | `area-cliente.html` | no relatório (`evolucao-patrimonial.html`) |
|---|---|---|---|
| Fluxo de caixa de 24 meses | ausente (Realizado tem 6 meses de "fluxo planejado") | ausente | janela `?fluxo` (3626, `DEFAULT_VIEW` 3757), a mesma tabela editável |
| Fluxo de caixa da vida toda | ausente como tabela | ausente | `drawCashflow` 4253, "Fluxo de caixa · por ano", com zoom |
| Gráfico/vídeo da evolução patrimonial | curva estática em SVG | ausente | canvas `draw()` 3969 com Reproduzir, marcos com foto, modal da liberdade (4540–4599), "Destino da trajetória" (4150–4166) |
| Tempo (valor-hora, horas de patrimônio, presente × futuro) | ausente | ausente | `renderTempo` 5560–5575, `relogioDoMes` 5508, `ENGINE.horasDoTrabalho` |
| Gestão de riscos com gráfico spider | 8 barras | ausente (proteção só como pilar 52) | `teiaSvg` 6429 + carrossel por ameaça + liquidez D+0/D+30/1 ano (6457) |
| Patrimônio: distribuição mercado financeiro / bens / participações / dívidas, liquidez ideal, fase | trilha de fases | só o total no Painel | `renderPatrimonio` 6346–6393, `idealHtml` 6289, "De onde vem o seu patrimônio" 6378 |
| Liberdade: idade-alvo, rendas passivas com data, padrão de vida, renda-alvo × consumir até 95 × perpetuidade | só "aos 57" | só "aos 57, 13% do caminho" | modal do marco FF (4577–4591) e, no portal, a página Liberdade financeira (README 1115–1146) |
| Orçado × realizado (orçamento e patrimônio) | lentes do Realizado, com dados fixos de 3 meses | ausente (só o teto da semana) | não existe no relatório; modelo em `reaproveitar/acompanhamento.js` |
| Exame: nota geral + 5 pilares, fotografias datadas | nota no Painel; pilares só na folha "Todos os números" | 5 pilares no cartão Saúde financeira, sem histórico por pilar | não existe; descrito em `COLETA.md` 48–122 |
| Versões datadas do plano | 2 versões fixas no Realizado do Completo | ausente | `versoes/<cliente>` gravado pelo portal (README da área logada) |

### 2.6 Defeitos de dados e de código (para corrigir na mesma rodada)

- Data do exame: "19/09/2026" (mock 763, 776) × "19/08/2026" (mock 837, 845; `area-cliente.html` 284) × só o exame de
  10/01 na Jornada do Completo (mock 834).
- Fase da vida: "acumulação" (mock 776) × "consolidação" (mock 1984; `area-cliente.html` 284). A Jornada diz "Vocês estão
  em Construir" (mundo) enquanto o Plano diz "fase: consolidação"; os dois conceitos precisam de nomes e lugares
  distintos (mundo da escalada × fase da vida do patrimônio).
- Teto de outubro, semana 3: 1.150 (mock 731) × 1.100 (`area-cliente.html` 326), embora o cabeçalho de
  `area-cliente.html` diga que os números são os mesmos do mock.
- Objetivos em `area-cliente.html`: a aba Objetivos diz "Casa própria 61% do necessário", o Painel e o Plano dizem "25%
  guardado"; são medidas diferentes com rótulos parecidos. Um nome por número (`UX.md` › Princípios).
- Painel do mock e de `area-cliente.html`: "Patrimônio R$ 1,7 milhão · esperado R$ 387,5 mil" sem dizer que o esperado é
  o da fase e que o total exclui a papelaria; lido assim, parece erro.
- "17% para o futuro … a referência é 20%" (mock 2054; `area-cliente.html` 758) sem estado nem indicação de que está
  abaixo.
- Nota "71, era 64": a origem diz "exame de 19/08/2026" e o histórico "64 em jan/2026"; a Jornada do Completo só tem o
  exame de 10/01 com 64.
- `area-cliente.html`: o "hoje" vem do relógio, então o exemplo (aporte de 05/10, resgate até 23/10) já aparece
  atrasado; o exemplo precisa de datas relativas ao hoje ou de um `?hoje` padrão.
- `area-cliente.html`: cartões do Plano sem ação (765); estados vazios ausentes em Objetivos (712–719), Tarefas
  (620–628), Conversas (784), Plano com `R.temas`/`R.orientacoes` vazios (751, 763).
- `area-cliente.html` duplica utilitários, `MUNDOS`, `CATS`, `ICONES`, `b100`, `legenda` e a casca do mock (345–366,
  404, 537–544, 573–574) com um modelo de dados diferente (ocorrências geradas dos `pedidos`). Decidir uma fonte só para
  o que é comum (ver seção 9).
- Mock: rota `vertical` sem `case` (1359, 1367, 1374, 2821); ação `abre-vert` sem uso (2915); `folhaAvulsa` "origem"
  quebra se o número não existe (2764); campos nunca lidos (`peso`, `protagonista.esperar`, `S.ui.livroPag`; em
  `area-cliente.html`, `R.custo.corteAjustaveis` 286 e `R.rendas[].dia` 285); textos fixos ("Outubro:" 1692, "R$ 10 mil
  de R$ 30 mil" 2295, `pct(30000/60000)` 2203, "resposta até 22/10" 1927 e 2961, "10:02" 2671).
- "Abrir o livro completo" e "Ver no livro" só mostram um toast (mock 2085, 2155).
- Tom sóbrio: cinco trechos ainda em Sora (avisado na sessão de 30/10, sem correção registrada); fotos de natureza
  hotlinkadas do Unsplash (para produção, escolher e guardar com a marca; preferir paisagens brasileiras).
- Armazenamento em `localStorage` (`ARMAZEM`, `area-cliente.html` 373–393); a plataforma troca o bloco.

---

## 3. Os princípios corrigidos (valem acima do UX.md onde houver conflito)

1. **Um esqueleto, as mesmas abas, os mesmos cartões, para todos os degraus.** Nada de tela, aba ou cartão que exista
   num degrau e não exista no outro. O degrau muda só: quem preenche (o próprio cliente, a consultora numa conversa
   curta, o consultor com a coleta), a profundidade preenchida e com quem o cliente fala.
2. **O destaque é do momento de vida.** O que sobe, o que ganha a cor de ação e o que o Painel chama de "o passo agora"
   vêm do mundo e do passo da escalada (régua, com o foco do consultor prevalecendo quando há consultor). Nunca de "foi
   combinado na clínica", "é do planejamento completo" ou "veio do vídeo". A origem de cada orientação é rastreável no
   toque, como qualquer número, e só ali nomeia a reunião e a pessoa.
3. **O Plano é o relatório em cartões.** Cada cartão é a capa de um capítulo (os `destaques()` do relatório: 2 a 4
   números, um gráfico, o "o que fazer"); o clique abre a página expandida, que é o capítulo do livro com os mesmos
   números. Os cartões e as páginas leem o **motor** (`ENGINE.*`, `run()`), nunca constantes copiadas.
4. **Profundidade visível.** Cada cartão tem o seu percentual de profundidade e aparece mesmo vazio, com o convite ao
   próximo preenchimento. O plano tem uma profundidade geral. Nada de cadeado nem "disponível no plano completo".
5. **Um dado, um lugar, um nome.** Continua o `variavel-num-lugar-so` e o "cada número sabe onde se corrige". Nomes
   distintos para medidas distintas ("% guardado" × "% do necessário"; "mundo" da escalada × "fase da vida").
6. **O Painel é a home; o Plano é o plano.** Tarefas, próximo passo, próxima tarefa, o andamento dos objetivos, o
   ritmo e o próximo encontro ficam no Painel. O Plano não lista tarefas nem orientações; cada cartão aponta a tarefa
   que o resolve, e a tarefa mora em Tarefas.
7. **O tom é o sóbrio** (memória `direcao-estetica-sobria`): fundo neutro, borda fina, serifa nos títulos e números
   grandes, mono nos rótulos, marinho na ação, laranja só no passo e no futuro dos gráficos; fotos de natureza só em
   pausas (propósito, entrada, escalada). Gráficos e elementos visuais valem mais que números soltos.

---

## 4. A navegação-alvo (a mesma para Visitante, Cadastrado, Clínica e Completo)

| Destino | O que é | Como a profundidade muda |
|---|---|---|
| **Painel** (home) | o plano numa página: propósito e objetivos (ou o que faz as vezes deles: dívida, primeira reserva), **o passo agora**, **a próxima tarefa**, os quatro números, o ritmo, o próximo encontro, e a **profundidade do plano** ("seu plano está 25% aprofundado · próximo: Reserva") | Visitante sem login: o mesmo Painel com o que calculou na sessão e o aviso de que nada é guardado até o cadastro; o próximo encontro muda por degrau (agendar clínica / consultora / consultor) |
| **Objetivos** | o ambiente de cada objetivo e "O caminho" (desejo × realidade) | criados pelo cliente, registrados na clínica, ou do plano; a origem no toque |
| **Tarefas** | a lista, as quatro respostas, o teto da semana | propostas pelo sistema, registradas pela consultora, geradas do plano |
| **Plano** | **os cartões das áreas** (seção 5) e, em cada um, a página expandida | o mesmo conjunto de cartões sempre; o que muda é quantos indicadores de cada cartão existem |
| **Realizado** | orçado × realizado: orçamento, dinheiro dedicado, patrimônio, dívidas, colchão, versões do plano (seção 7) | a partir do primeiro registro em qualquer degrau; "começou em outubro" quando só há um mês |
| **Conteúdos** | biblioteca, lives, comitê; "recomendado para o seu passo" | mais materiais de atualização e monitorias no Completo |
| **Jornada** | histórico de reuniões, relação com a Nord, a escalada | a relação muda por degrau; a escalada é a mesma |
| **Conversas** | com quem falar e o histórico | muda só o interlocutor |
| **Utilitários** | calculadoras sem valores salvos | igual para todos |

Celular: barra inferior com Painel, Objetivos, Tarefas, Plano e Mais (Realizado, Conteúdos, Jornada, Utilitários);
"Falar com alguém" no cabeçalho. Desktop: menu lateral com tudo. **O Visitante usa a mesma casca** (sem a entrada
separada do mock como tela única): a entrada por tema/empresa/sem origem é só a primeira tela, que desemboca no Painel.

Sai do menu lateral qualquer rótulo de degrau ("· clínica financeira"). O degrau aparece só onde é informação útil: na
Jornada (a relação com a Nord) e em Conversas (com quem falar).

---

## 5. O Plano em cartões: as áreas, o resumo, o expandido e a profundidade

### 5.1 A lista canônica de cartões (proposta; uma lista só, no mock, na produção e no UX.md)

A lista junta as verticais do `UX.md` com os capítulos do relatório, na ordem da escalada. Cada cartão corresponde a um
capítulo ou página do relatório (coluna "no relatório"), de onde saem o resumo (`destaques()`) e a página expandida.

| # | Cartão | No relatório (`evolucao-patrimonial.html`) | Mundo |
|---|---|---|---|
| 1 | **Saúde financeira** (exame, nota e pilares, fase da vida; as fotografias) | não existe; `COLETA.md` 48–122 e o Diagnóstico "Hoje e depois" (`renderHojeDepois` 5481) | Descobrir |
| 2 | **Gestão financeira** (orçamento, sobra, tempo; os fluxos de caixa) | capítulo Gestão financeira: `renderRendaCusto` 5533, `renderTempo` 5560, `renderOrcamento` 6058; `?fluxo` e `drawCashflow` 4253 | Sobreviver/Descobrir |
| 3 | **Dívidas** (quando há; senão o cartão existe vazio com "sem dívidas") | dentro de Patrimônio ("De onde vem", dívidas) e da Evolução | Sobreviver |
| 4 | **Objetivos** | capítulo Objetivos: `renderObjetivosJuntos` 5842, `renderRealizacao` 5939 | Descobrir/Focar |
| 5 | **Reserva e liquidez** | ameaças "reserva" e "liquidez" do capítulo Riscos (6457) e a caixinha da reserva na Política | Construir |
| 6 | **Gestão de riscos** (proteção: as 8 ameaças, seguros) | capítulo Riscos: `teiaSvg` 6429, carrossel `corpoCartao` 6445 | Proteger |
| 7 | **Patrimônio e ativos** (total, distribuição, fase, liquidez ideal) | capítulo Patrimônio: `renderPatrimonio` 6346, `idealHtml` 6289 | Construir/Otimizar |
| 8 | **Política de investimentos e carteira** (caixinhas, alocação hoje × recomendada) | capítulos Política (`renderPolitica` 5700) e Carteira (`renderCarteiraCli` 5743) | Focar/Otimizar |
| 9 | **Impostos e sucessão** (IR, pró-labore, previdência, ITCMD) | capítulo Tributário: `paginaIR` 6686, 6732, 6759, 6799 | Otimizar/Desfrutar |
| 10 | **Liberdade financeira** (idade-alvo, rendas passivas, padrão de vida, estratégia de retirada) | modal do marco FF (4577–4591) + página Liberdade do portal (README 1115–1146); o `destino` da trajetória (4150) | Desfrutar |
| 11 | **Evolução patrimonial** (o gráfico/vídeo; o caminho daqui para frente) | `draw()` 3969, `renderCaminho` 5580 | todos |

Propósito e Diagnóstico não viram cartão: o propósito é o alto do Painel; o placar "X de 8 em dia" vira a faixa do alto
do Plano, junto da profundidade geral. Se o dono do produto preferir menos cartões, as fusões naturais são 3 em 2
(Dívidas dentro de Gestão financeira) e 5 em 6 (Reserva dentro de Riscos); a decisão fica registrada no `UX.md`.

### 5.2 O que cada cartão mostra, por profundidade

Para cada cartão, os **indicadores** são uma lista fixa e numerada (a mesma para todos os degraus). A profundidade do
cartão é `indicadores preenchidos / indicadores da lista`. O resumo (a capa) mostra sempre o mesmo lugar para o número
grande, o gráfico e a linha de estado; quando o indicador não existe, o lugar mostra o convite ("responder 3 perguntas",
"abrir a calculadora", "a Patrícia preenche na coleta").

Abaixo, a sugestão de indicadores (ordem = ordem de preenchimento natural: os primeiros são os que o visitante calcula
sozinho em um minuto; os últimos, os que só a coleta traz). O "nível" entre parênteses é só ilustrativo da profundidade
esperada: V = visitante, C = clínica, P = planejamento completo.

**1. Saúde financeira**
- Capa: a nota geral (número grande) com "era N em mês/ano"; mini-radar ou 5 barras dos pilares; a fase da vida;
  estado "em dia / atenção" pelo pilar mais baixo.
- Indicadores: nota geral (V); os 5 pilares (V); a fase da vida (V); a fotografia anterior e a variação por pilar (V, a
  partir do segundo exame); o placar "hoje × depois do plano" dos 8 indicadores do Diagnóstico (P); as 33 respostas com
  data (V).
- Expandido: a evolução da nota e de cada pilar como linha no tempo (uma por fotografia); as 33 respostas com data e
  "atualizar"; o Diagnóstico "Hoje e depois" do relatório; o que cada pilar mede.

**2. Gestão financeira**
- Capa: "% para o futuro" (número grande) com a referência de 20% e o estado (dentro/fora); barra 100% fixas /
  ajustáveis / futuro; linha "valor-hora R$ N · N h/mês para o presente, N h para o futuro".
- Indicadores: renda, custo de vida e sobra (V); fixas × ajustáveis (V); dentro ou fora da referência 50/30/20 (V);
  valor-hora (V, com horas trabalhadas); horas do mês para o presente e para o futuro (V); horas de patrimônio ("o
  patrimônio equivale a N anos de trabalho", V com patrimônio informado); quantas vezes poupou em 12 meses (exame);
  orçamento por categoria, hoje × combinado (C/P); teto do mês e da semana (C/P); fluxo de caixa de 24 meses (P);
  fluxo de caixa da vida toda (P).
- Expandido: as páginas Renda e custo de vida, Tempo (relógio do mês com o valor-hora) e O orçamento da família do
  relatório; **subseções Fluxo de caixa · 24 meses** (a tabela mês a mês, só leitura na versão vigente, com "Simular e
  propor") **e Fluxo de caixa · vida toda** (a tabela por ano, com zoom). Um atalho para Realizado › Orçamento.

**3. Dívidas**
- Capa: saldo total e data prevista de quitação; barra do que já foi pago; "juros por mês".
- Indicadores: saldo por credor e taxa (V); parcela e data de quitação no ritmo de hoje (V); renegociação planejada (C/P);
  efeito de uma falta (P, do motor).
- Expandido: um cartão por credor; a curva de quitação; o roteiro de renegociação como tarefa.

**4. Objetivos**
- Capa: "N de M no caminho"; linha do tempo com os marcos (foto pequena); "pedem R$ X por mês; o plano põe R$ Y".
- Indicadores: cada objetivo com valor, data e aporte (V); % guardado e % do necessário, com os dois nomes (V); a ordem
  de prioridade (V); o caminho desejo × realidade (C/P); fontes do dinheiro e vendas/compras financiadas (P); a trilha
  do acumulado em cada dezembro (P).
- Expandido: a página Os seus objetivos do relatório (gráfico de faixas das caixinhas, a trilha, um cartão por
  objetivo) e "Como realizar cada objetivo"; cada objetivo aponta para o ambiente dele em Objetivos (fonte única).

**5. Reserva e liquidez**
- Capa: "R$ hoje de R$ ideal" com a barra mínima/aceitável/ideal (a que já existe em `area-cliente.html`); "a ideal: N
  meses de custo de vida"; liquidez em D+0 como "N vezes o padrão de vida".
- Indicadores: reserva atual (V); alvo mínimo/aceitável/ideal (V, calculado); onde está aplicada (C/P); liquidez D+0,
  D+30 e 1 ano (P); de onde vem o que falta (bônus, remanejamento) (C/P).
- Expandido: a ameaça "reserva" e a "liquidez" do capítulo Riscos, com as marcas 40/70/100%.

**6. Gestão de riscos**
- Capa: "% protegido" (número grande) e o **gráfico spider das 8 ameaças** (`teiaSvg`), em miniatura; "N críticas ·
  N totalmente protegidas".
- Indicadores: tem dependentes e seguros marcados (V, do exame); renda protegida em caso de afastamento (C/P); vida /
  família (C/P); saúde (C/P); patrimônio e terceiros (P); ruína e liquidez (P); custo das proteções recomendadas (P).
- Expandido: o hero com a teia grande e o carrossel das 8 ameaças do relatório, cada uma com o essencial e o detalhe,
  e "o que fazer" com "Virar tarefa".

**7. Patrimônio e ativos**
- Capa: patrimônio total (número grande, "fora a papelaria" quando houver participação); rosca ou barra 100% mercado
  financeiro / bens / participações / dívidas; "fase N: dentro / acima / abaixo do esperado"; liquidez ideal "N% em
  liquidez, ideal N%".
- Indicadores: total declarado (V); distribuição por bloco (V); fase da vida e esperado para a idade (V); liquidez atual ×
  ideal (C/P); lista de bens e participações com protecão (P); o patrimônio esperado em cada fase, como curva (P).
- Expandido: a página Fase da vida e patrimônio do relatório (trilha das fases, escada mercado + participações + bens −
  dívidas, "De onde vem o seu patrimônio"), e um desenho da **evolução patrimonial esperada por fase** (a curva do
  cartão 11 com as faixas das fases). Atalho para Realizado › Patrimônio.

**8. Política de investimentos e carteira**
- Capa: "R$ X em N caixinhas" com a barra 100% reserva / objetivos / liberdade; "R$ Y por mês, cada parte no seu
  prazo"; quando há carteira: "N% aderente à recomendada".
- Indicadores: as caixinhas por prazo (C/P, calculado da reserva + objetivos + liberdade); o aporte por caixinha (C/P);
  a carteira de hoje por classe (P); a recomendada e a aderência (P); o que sai e o que entra (P); o perfil (V, do
  exame).
- Expandido: os dois Sankeys e a tabela das caixinhas (Política) e o sunburst com as abas Hoje/Ideal/Recomendada
  (Carteira). O cartão existe mesmo sem carteira: "a carteira entra quando os investimentos forem registrados".

**9. Impostos e sucessão**
- Capa: "R$ X a menos de imposto por ano" e "R$ Y a menos na sucessão"; mini-barras dos 4 itens.
- Indicadores: regime do IR e economia (P); retirada da empresa (P, quando há); previdência: ganho em N anos (C/P, a
  calculadora de IR e previdência já existe na plataforma); sucessão e ITCMD (P).
- Expandido: as quatro páginas do capítulo Tributário, com o simulador da previdência.

**10. Liberdade financeira**
- Capa: "aos N anos, em AAAA" (número grande); o padrão de vida planejado (R$ por mês); a estratégia em uma linha
  ("renda-alvo com o patrimônio durando até os 95" / "perpetuidade"); mini-curva do patrimônio a partir da liberdade.
- Indicadores: idade-alvo (V); renda desejada (V); patrimônio necessário e "% do caminho" (V, calculadora da
  liberdade); as três alavancas quando não fecha (V); rendas passivas com data de início (INSS, aluguel, previdência,
  participação) (C/P); a estratégia: renda-alvo × consumir até a expectativa de vida × perpetuidade (P); a evolução do
  patrimônio a partir da liberdade (P).
- Expandido: a tabela das rendas passivas (de onde, quanto, a partir de quando), o padrão de vida na liberdade, a
  estratégia escolhida com as outras duas simuladas, e a curva do patrimônio da liberdade em diante (o trecho final do
  gráfico de evolução, com o destino: "renda de R$ X por mês até os 95" ou "para sempre").

**11. Evolução patrimonial**
- Capa: a curva do patrimônio até os 95 em miniatura com os marcos; "liberdade aos N; N de M objetivos cabem como estão".
- Indicadores: a curva a partir do declarado (V, só com renda, custo e patrimônio); os marcos dos objetivos (V); o marco
  da liberdade (V); as faixas financeiro / bens / participações / dívidas (P); os pontos reais sobre a curva (a partir do
  primeiro registro em Realizado); a mensagem final do planejador (P).
- Expandido: **o próprio canvas do relatório** com Reproduzir/Pular, os marcos com foto, o modal da liberdade e o
  "Destino da trajetória"; abaixo, "O caminho daqui para frente" (os próximos passos de todos os capítulos) e a tabela
  Fluxo de caixa · vida toda (compartilhada com o cartão 2). É o ponto alto; é o único lugar com o vídeo do caso em
  destaque.

### 5.3 A mecânica da profundidade

- **Profundidade do cartão** = indicadores preenchidos / total da lista do cartão. Mostrada no cartão como uma pequena
  barra ou "4 de 15" discreto, em tom suave; nunca como medalha.
- **Profundidade do plano** = média ponderada dos cartões (peso igual por padrão; o peso pode ser um parâmetro do
  produto). Mostrada na faixa do alto do Plano e no Painel: "Seu plano está 25% aprofundado. Próximo: a reserva (3
  perguntas)".
- **O que preenche**: o visitante, pelas calculadoras e pelo exame (grava no vetor, com origem "você, dd/mm"); a
  consultora, pelo registro da clínica (origem "clínica de dd/mm, com Patrícia"); o consultor, pela coleta e pela
  montagem (origem "coleta de dd/mm" / "plano de dd/mm"). **Os mesmos questionários** da coleta ficam disponíveis ao
  cliente self-service, bloco a bloco, para chegar a 100% sozinho (médio prazo; na rodada atual basta o modelo prever a
  origem e o degrau não limitar o preenchimento).
- **Cartão vazio**: aparece no mesmo lugar e no mesmo tamanho, com o nome da área, uma frase do que ela responde, "0 de
  N" e um único convite (a calculadora ou as perguntas que preenchem os primeiros indicadores). Sem cinza morto: o
  cartão vazio tem borda tracejada e o convite em marinho.
- **Validade** continua: indicador com mais de 12 meses conta como preenchido, mas mostra "respondido em mês/ano;
  atualizar".
- **Fotografias**: a profundidade e a nota do exame são fotografadas a cada versão do plano e a cada exame; a Jornada
  mostra a profundidade ao longo do tempo.

### 5.4 Fonte dos números

- O mock e a produção leem o **motor** do relatório (`ENGINE.*`, `run()`, `destaques()`), nunca a constante `LIVRO`,
  que sai. O plano de exemplo (`ux/plano-exemplo.json`) passa pelo motor; os cartões mostram o que o motor devolve.
- Para os degraus com dados parciais, o motor recebe o vetor parcial; os indicadores que dependem do que falta ficam
  vazios (não calculados com zero). Isso exige que o motor aceite plano incompleto sem quebrar; onde não aceitar, o
  cartão usa a calculadora correspondente da plataforma (reserva, liberdade, orçamento, valor-hora) com a mesma fórmula.
- `node verificar.js` passa a conferir que os números da capa de cada cartão são iguais aos da página expandida e aos
  do relatório, para o plano de exemplo.

---

## 6. O Painel (home) depois da mudança

Fica como o `UX.md` descreve (o propósito e os objetivos; o passo agora; a próxima tarefa; os quatro números; o ritmo;
o próximo encontro), com estas correções:

- O bloco do alto nunca se chama "O que combinamos em dd/mm". Para quem tem objetivos, os objetivos; para quem não tem,
  a dívida ou a primeira reserva; para quem passou pela clínica sem objetivo combinado, as orientações entram como
  **tarefas** (em Tarefas) e o alto mostra o passo do momento de vida, com a origem no toque.
- O cartão "O passo agora" não leva "foco escolhido pela Patrícia" no rótulo; a frase de origem aparece ao abrir o passo.
- Acrescenta a linha da **profundidade do plano** com o próximo preenchimento (seção 5.3).
- O andamento dos objetivos fica aqui e em Objetivos; não no Plano.
- Os quatro números ganham o estado junto do número ("17% para o futuro · abaixo dos 20%").

---

## 7. Orçado × realizado (o ambiente de comparação)

O `UX.md` › Realizado já descreve o essencial; o que falta é implementar de fato e ligar aos cartões. Requisitos da
rodada:

1. **Versões datadas do plano**: cada publicação do portal ("Gerar versão final") e cada ajuste criam uma versão com
   data; a lista de versões, com o que mudou, fica em Realizado e na Jornada. Cada mês é comparado com a versão vigente
   naquele mês; a troca de versão aparece como traço tracejado nos gráficos.
2. **Orçamento**: a mesa de comparação (um cartão por mês: entradas, fixas, ajustáveis, futuro, saldo, orçado ×
   realizado), o fluxo planejado e o fluxo realizado, nas mesmas categorias do Fluxo de caixa do portal. Lançamento
   manual do total do mês por grupo enquanto não há open banking.
3. **Patrimônio**: a curva planejada (do cartão 11) com os pontos reais por bloco (financeiro, bens, participações,
   dívidas), por mês ou trimestre; "hoje R$ X · o plano previa R$ Y"; lembrete trimestral para atualizar.
4. **Dinheiro dedicado, sobra, dívidas e colchão**, como no `UX.md`.
5. **Ligação com os cartões**: os cartões Gestão financeira, Patrimônio e Objetivos ganham um atalho "planejado ×
   realizado" que abre a lente correspondente do Realizado já no horizonte certo. O Realizado continua sendo o lugar
   único da comparação (não se duplica a mesa dentro do cartão).
6. **Horizonte**: 3 | 6 | 12 meses | o ano | desde o plano, mostrando só os que têm dado; "começou em outubro" no
   primeiro mês. O cenário do feedback (plano de outubro de 2026 olhado em julho de 2027) tem de funcionar com o exemplo.
7. O modelo de dados é o de `reaproveitar/acompanhamento.js` (`foto` e `realizado`), estendido como diz `ETAPAS.md` ›
   Etapa 1, item 5.

---

## 8. As fotografias do exame de saúde financeira

- O exame tem 33 perguntas (`COLETA.md` 75–109, com o `name` de cada uma) e devolve a nota geral e os cinco pilares
  (`assetsScore`, `savingsScore`, `protectionScore`, `conscienceScore`, `attitudeScore`, `generalHealthScore`), de 0 a
  100. A fórmula fica no servidor e **ainda não foi levantada** (`COLETA.md` 499): inferir os pesos com "SIMULAR" ou
  pedir a fórmula; enquanto não vier, o mock usa uma fórmula declarada como provisória, num lugar só.
- Cada exame respondido vira uma **fotografia datada** (nota geral + 5 pilares + as 33 respostas), nunca sobrescrita.
  O vetor de variáveis guarda a resposta atual de cada pergunta (uma variável só, compartilhada com a coleta, como já diz
  o `COLETA.md`); a fotografia é a foto do conjunto naquela data.
- O cartão Saúde financeira mostra a última fotografia, a variação em relação à anterior por pilar e, expandido, a
  linha do tempo das fotografias. A Jornada marca cada exame. O check-up anual da clínica e a reunião semestral do
  completo pedem um exame novo (tarefa de interação).
- O exame é uma só peça para todos os degraus; o visitante responde as 33 (hoje o mock tem 4 de 12, linha 2454) e
  pode gravar ao cadastrar.

---

## 9. Código: uma base só

- **Uma implementação da área do cliente**, não duas. Hoje `area-logada/mock/index.html` (mock, com situações e barra de
  demonstração) e `area-cliente.html` (produção, degrau Clínica) reimplementam a mesma casca com modelos diferentes.
  Direção: a produção (`area-cliente.html`) passa a ser a base; o mock vira um modo de demonstração dela (`?demo` com o
  seletor de situação e de degrau), ou é aposentado quando a produção cobrir as situações. Não evoluir os dois em
  paralelo.
- O motor e os renderizadores dos capítulos do relatório (`ENGINE`, `destaques`, `render*` de `evolucao-patrimonial.html`)
  passam a ser **compartilhados** com a área do cliente (o `sync-motor.js` já copia o motor para o portal; estender para a
  área do cliente, ou carregar o relatório num `iframe`/módulo com a mesma interface de armazém, `iniciar/ler/ouvir/gravar`).
- O degrau é **uma função só**, derivada do login, do pipeline e dos dados, usada apenas para: com quem falar, quem
  pode gravar o quê, e os textos de transição. Nunca para esconder abas, cartões ou indicadores.
- Modelo de dados: o vetor de variáveis atuais (por membro e por domicílio, com data e origem), as versões datadas do
  plano, o realizado datado, as fotografias do exame e da profundidade. `verificar.js` cobre: profundidade por cartão e
  do plano para os quatro degraus do exemplo; igualdade capa × página × relatório; o orçado × realizado do exemplo em
  julho de 2027.
- Remover a constante `LIVRO`, a rota morta `vertical`, a ação `abre-vert`, os campos nunca lidos e os textos fixos
  listados na seção 2.6; corrigir os dados inconsistentes da mesma seção, numa fonte só (`ux/plano-exemplo.json` + o
  motor); trocar as fotos hotlinkadas por arquivos em `fotos/`.

---

## 10. Documentos a atualizar na mesma rodada

- `area-logada/README.md`: a tabela dos degraus (linhas Painel, Objetivos, Tarefas, Plano, Orçado × realizado) passa a
  dizer "o mesmo, com a profundidade que houver" e nomeia a profundidade; a premissa 10 ganha a frase "a regra decide o
  passo; o cliente nunca vê a reunião como selo"; o item "Área do cliente, degrau Clínica" descreve a base única.
- `area-logada/UX.md`: Navegação (Visitante incluído na mesma tabela), Painel (sem "O que combinamos" como bloco do
  alto), "Plano — o livro e o Status" reescrito como "Plano — os cartões das áreas" com a lista canônica da seção 5.1 e
  a mecânica da profundidade; "Uma vertical sem nenhum dado não aparece" vira "aparece vazia, com a profundidade";
  Realizado ganha a ligação com os cartões; Princípios: "O que falta some" restrito ao que não é cartão do Plano.
- `PRODUCT.md`: princípio 4 ("Mostrar só o que o cliente tem") reescrito: "o Plano mostra todas as áreas, com a
  profundidade de cada uma; fora do Plano, o que falta some".
- `area-logada/PROMPT-MOCK.md` e `ETAPAS.md` (etapas 0, 2.2, 3.1 e 3.6): alinhar com a seção 4 e 5.
- `PENDENCIAS.md`: registrar a decisão sobre o número de cartões (11, ou as fusões), a fórmula do exame e a origem das
  fotos.
- Memória do assistente (`direcao-estetica-sobria`): acrescentar "estrutura única por degrau; foco do momento de vida".

---

## 11. Ordem de trabalho sugerida para o prompt do Opus

1. **Modelo** (sem tela): vetor com origem e data; lista canônica dos cartões e dos indicadores de cada um (um arquivo
   de dados só); função de profundidade; função de degrau; versões do plano; fotografias do exame. `verificar.js`
   cobrindo os quatro degraus do exemplo. → verificar: `node verificar.js` passa com as profundidades esperadas
   (visitante ≈ 5–10%, clínica ≈ 25%, completo 100%).
2. **Plano em cartões** na base única, lendo o motor: os 11 cartões com capa e página expandida, para o degrau
   Completo primeiro (todos os indicadores), depois os mesmos cartões com o vetor da Clínica e do Visitante (cartões
   parciais e vazios). → verificar: os números da capa são iguais aos da página e aos do relatório; nenhum cartão some
   em nenhum degrau; nenhum selo nomeia reunião.
3. **Painel** com a profundidade e sem "O que combinamos"; as orientações da clínica viram tarefas. → verificar: a
   mesma casca e as mesmas abas nos quatro degraus, inclusive Visitante.
4. **Fluxo de caixa 24 meses e vida toda** dentro de Gestão financeira e de Evolução; **o canvas da evolução** com
   Reproduzir dentro do cartão 11. → verificar: abrem com o exemplo, em desktop e em celular (com "ver no computador"
   onde for largo).
5. **Realizado** com versões datadas, orçamento e patrimônio, e o cenário "plano de out/2026 visto em jul/2027" no
   exemplo. → verificar: a mesa de comparação mostra dentro / abaixo / acima por grupo e por bloco.
6. **Exame** com as 33 perguntas e as fotografias; cartão Saúde financeira com a evolução por pilar.
7. **Limpeza**: seção 2.6 inteira; documentos da seção 10; tom sóbrio sem resíduos de Sora; fotos locais.

Critério de pronto da rodada: o dono do produto abre a área como Visitante, como cliente da Clínica e como cliente do
Completo e vê **a mesma área**, com os mesmos cartões, mudando só o quanto cada cartão está preenchido; em nenhum lugar
lê "foco da clínica" ou "do planejamento completo"; clica em Gestão de riscos e vê a teia; clica em Evolução e assiste
ao gráfico; abre Realizado e compara outubro de 2026 com julho de 2027.
