# Nord Liberta 2.0 — arquitetura da ferramenta integrada

11/11/2026. Junta numa ferramenta só a produção (`/arealogada` e `/internal`), o portal e o relatório (assets-evolution) e a
área logada com a agenda (integrated-app). Este documento diz onde cada função vive, quem leva a quem e o que falta. O
código é a fonte; onde os dois divergirem, vale o código e este arquivo se corrige.

Dois lados, um armazém:

- **Cliente**: `area-cliente.html` (Painel, Objetivos, Tarefas, Plano, Mais). Dela saem o relatório
  (`evolucao-patrimonial.html`), o acompanhamento (`acompanhamento.html`) e o agendar (`agendar.html`), e todos voltam a ela.
- **Consultor**: `index.html` (a base de clientes e a ficha de cada um), `tela-consultor.html` (coleta e montagem),
  `agendamento.html` (agenda) e as telas do cliente vistas por ele (`&consultor`). Uma casca comum liga todas.
- **Armazém**: um documento por chave e por cliente (`nl-db:<coleção>/<id>` no navegador; o banco do link, quando publicado).
  `planos`, `versoes`, `propostas`, `realizados` (portal, relatório, acompanhamento); `vetor`, `clinicas`, `execucao` (área do
  cliente); `ag*` (agenda). Nenhum backend novo.

## 1. Inventário: toda função existente e onde vive na 2.0

Estado: **pronto** (já existia e ficou onde estava), **integrado agora** (ligado ou construído nesta rodada), **em breve**
(tem entrada real na navegação, dizendo que ainda não existe), **falta construir** (sem tela ainda).

### Produção, área do cliente (`/arealogada`, `/minhastarefas`, `/meusobjetivos`)

| Função em produção | Onde vive na 2.0 | Estado |
|---|---|---|
| Banner "O Meu Planejamento Financeiro" | Painel: a paisagem com o propósito e o passo (`#painel`) | pronto |
| "Primeiros passos" (texto) | Mais › Como usar (`#comousar`): os cinco passos, cada um levando à tela dele | integrado agora |
| Vídeo "Como utilizar a plataforma" | Mais › Como usar (`#comousar`), no alto | em breve (falta o endereço do vídeo) |
| "Sua jornada" (Embarque → Entrega do Relatório → Acompanhamento #1 → #2 → Renovação) | Mais › Jornada (`#jornada`): "A jornada do serviço", com as datas do plano; ao lado, a escalada | integrado agora |
| "Planejamento de Vida", versões datadas e "Ver planejamento" | Mais › Relatório (`#relatorio`): cada versão com data, comentário e "Ver planejamento"; e o nível 3 de cada área do Plano | integrado agora |
| Lembretes por WhatsApp (título, conteúdo, data, assinatura, recorrência, nº; autor consultor ou cliente) | Atributo da tarefa, não uma página: Tarefas › "Nova tarefa" (cliente) e Ficha do cliente › "Tarefas e lembretes" (consultor), com os mesmos campos | integrado agora (o registro e o ciclo; o envio no WhatsApp é da plataforma) |
| Minhas Tarefas | Tarefas (`#tarefas`): as do plano, as da reunião, as do consultor e as do próprio cliente | pronto + integrado agora |
| Meus Objetivos | Objetivos (`#objetivos`, `#objetivo/<id>`) | pronto |
| Assistente Meu Orçamento (50/30/20) | Plano › Gestão financeira (`#cartao/gestao`), calculadora | pronto |
| Assistente Exame de Saúde Financeira | Plano › Saúde financeira (`#cartao/saude`, `#exame`) | pronto (a fórmula oficial da nota segue pendente) |
| Assistente Reserva (mínima, aceitável, ideal) | Plano › Reserva e liquidez (`#cartao/reserva`) | pronto |
| Assistente Liberdade Financeira | Plano › Liberdade financeira (`#cartao/liberdade`) | pronto |
| Assistente Objetivos | Plano › Objetivos (`#cartao/objetivos`) e a aba Objetivos | pronto |
| Assistente Patrimônio Ideal por fase | Plano › Patrimônio e ativos (`#cartao/patrimonio`) | pronto |
| Assistente Fase financeira | Plano › Saúde financeira (a fase) e Patrimônio (o esperado para a fase) | pronto |
| Assistente Valor/hora de trabalho | Plano › Gestão financeira (o valor da hora, as horas para o presente e o futuro) | pronto |
| Assistente Seguros (vida e acidentes) | Plano › Gestão de riscos (`#cartao/riscos`): hoje a leitura das oito ameaças; a conta do capital segurado só no relatório | em breve (a calculadora do capital, no cartão) |
| Assistente Imposto de renda / PGBL | Plano › Impostos e sucessão (`#cartao/tributario`): no Completo, o capítulo; nos outros degraus, sem calculadora | em breve (a calculadora, no cartão) |
| "Recalcular" e "Ver meus valores" | Em cada cartão do Plano: a calculadora grava no vetor e as informações da área mostram valor, data e origem | pronto |
| Calculadoras úteis sem valores salvos (rendimento real de investimento e de imóvel) | Mais › Utilitários (`#utilitarios`) | integrado agora |
| Menu: relatórios de research (Comitê, Renda Fixa Pro, Nord Fundos, Nord FIIs, O Investidor de Valor, Nord Dividendos) | Mais › Research da Nord (`#research`) | integrado agora (faltam os endereços de cinco dos seis) |

### Produção, área do consultor (`/internal` e `/pipeline`, levantados em [PRODUCAO-INTERNAL.md](PRODUCAO-INTERNAL.md))

| Função em produção | Onde vive na 2.0 | Estado |
|---|---|---|
| Duas visões: aba Consultor (a carteira) e aba Cliente (o escolhido) | `index.html`: a base (`#carteira`, `#pipeline`, `#espera`) e a ficha (`#cliente/<id>`) | integrado agora |
| Seletor de cliente + atalhos "Área do cliente" e "Montagem de relatório" | A linha do cliente na base e "Trabalhar neste cliente" na ficha; em toda tela, a casca do consultor | integrado agora |
| "Emulando acesso do cliente" | Ficha › "Emular o acesso do cliente" (`area-cliente.html?cliente=<id>&consultor`) | integrado agora (sem o selo e o relógio da sessão) |
| Pipeline em quadro, 20 etapas, "Vencidos" e "vence em N dias" | `index.html#pipeline`: as 20 colunas; a etapa e o prazo são postos na ficha; sem etapa posta, a base sugere uma pelos dados | integrado agora (sem arrastar, sem lista, sem filtros de escritório e proprietário) |
| Metas do semestre (Renovação, NPS, Indicações, Cobertura da base) | Base › Carteira, no alto | em breve |
| Minhas Tarefas Pendentes | Base › Espera por mim: as tarefas do consultor e de reunião, propostas, mensagens sem resposta, tarefas pedidas ao cliente em atraso, etapas vencidas | integrado agora |
| Reuniões (semana, mês, semestre) | Base › Carteira › Reuniões marcadas (as da agenda); o painel completo em `agendamento.html` | integrado agora (sem o filtro de período) |
| Scores Pendentes (exame há mais de 6 meses) | Base › Carteira › Exames desatualizados | integrado agora |
| Coletas em Andamento | Base › Carteira › Coletas em andamento | integrado agora |
| NPS em Aberto; Pesquisas NPS do cliente | Base › Carteira e Ficha | em breve |
| Programa Contínuo | Base › Carteira | em breve |
| Dados do cliente, com a etapa do pipeline | Ficha: cabeçalho e "Etapa no pipeline" | integrado agora |
| Tarefas do cliente (+ Nova): título, data, responsável (cliente, consultor, reunião), estado | Ficha › Tarefas e lembretes. As do cliente vão para a área dele; as do consultor e de reunião ficam na ficha | integrado agora |
| Reuniões do cliente (+ Nova) | Ficha › Reuniões: a próxima (agenda) e as passadas com o resumo; "+ Nova" abre a agenda | integrado agora; registrar o resumo: em breve |
| Notas (+ Nova) | Ficha › Notas (só o consultor vê) | integrado agora |
| Scores: histórico do exame com os cinco pilares | Ficha › Exames de saúde financeira | integrado agora |
| Coletas de Dados (+ Novo, continuar, descartar, recuperar de arquivo) | Ficha › Coleta de dados (começar ou continuar); "Importar JSON" na base recupera de arquivo. Uma coleta por cliente; descartar não existe | integrado agora (parcial) |
| + Novo Cliente (`/internalsignup`) | Base › "+ Novo cliente" (abre a coleta) | pronto |
| Coleta de dados (211 campos, 11 blocos) | `tela-consultor.html?cliente=<id>&coleta` | pronto |
| Bloco 11 "Próximas tarefas" | Coleta › Documentos e tarefas; na ficha, as pendentes aparecem e as do cliente têm "Enviar ao cliente" | integrado agora |
| Visão Admin · Escritório · Proprietário, e a carteira de outro consultor | Base › "Mais da área do consultor" | em breve |
| Link de indicação, Resultados de Campanha, Cotações de Seguros | Base › "Mais da área do consultor" | em breve |
| Consultores e Escritórios, Pipeline Admin, Registro de Ações, Ferramentas Técnicas, NPS (direção) | Base › "Mais da área do consultor" | em breve |
| Meu Perfil, WhatsApp, Microsserviços (menu do consultor) | Fora do protótipo (são da plataforma) | falta construir |
| Marcar tarefa sem login (`/taskChecker`) | A resposta grava em `execucao/<id>.respostas` com o canal; a página de um toque é da plataforma | falta construir |

### Repositório

| Tela ou função | Onde vive na 2.0 | Estado |
|---|---|---|
| `index.html`, lista de clientes | Base de clientes + ficha do cliente (`index.html#cliente/<id>`) | integrado agora |
| `tela-consultor.html`, montagem em passos | Ficha › Montar o plano | pronto (ganhou a casca) |
| `tela-consultor.html?coleta` (`COLETA.md`, `coleta/`) | Ficha › Coleta | pronto (ganhou a casca) |
| "Gerar versão final para cliente" (`versoes/<id>`) | Montagem › Apresentação; a versão aparece no cliente em Plano e em Mais › Relatório | pronto |
| Propostas do cliente (simular e propor; aprovar) | Relatório (cliente) → Montagem › Propostas (consultor); alerta na base | pronto + integrado agora (o alerta) |
| `evolucao-patrimonial.html`, o relatório-livro | Nível 3 de cada área do Plano (embutido) e Mais › Relatório (inteiro, com "Voltar à área") | pronto + integrado agora |
| Orçamento em quatro páginas, "As semanadas" no relatório | Relatório, capítulo Gestão financeira; Plano › Gestão financeira, nível 3 | pronto |
| `acompanhamento.html`, Semanadas | Cliente: Mais › Semanadas e Plano › Gestão financeira; consultor: Ficha › Acompanhamento | integrado agora |
| `acompanhamento.html`, Orçamento mensal | A mesma página, segunda aba | em breve (etapa 4 do `SEMANADAS.md`) |
| `area-cliente.html`: Painel, Objetivos, Tarefas, Plano (onze cartões), Realizado, Saber, Jornada, Atendimento, exame | Como estava | pronto |
| `agendamento.html`, painel da agenda | Casca do consultor › Agenda; a ficha mostra a próxima reunião | pronto (ganhou a casca) |
| `agendar.html`, página de quem agenda | Área do cliente (Painel, Jornada, Atendimento) e link público | pronto |
| `area-logada/mock/index.html` | Referência histórica; não entra na navegação | — |
| Registrar a clínica (UX.md) | Ficha do cliente | falta construir |
| Registrar a reunião com resumo (UX.md) | Ficha do cliente | falta construir |
| Open banking | Realizado e Acompanhamento (a origem do lançamento já existe no dado) | falta construir |

## 2. Mapa de navegação

### Cliente

```
Painel ── passo, tarefas da semana, objetivos, próxima reunião
Objetivos ── objetivo/<id>
Tarefas ── tarefa/<id> · Nova tarefa (com lembrete)
Plano ── cartao/<area> ── nível 1 visão geral · nível 2 aprofundada (informações + calculadora) · nível 3 relatório (capítulo)
Mais
 ├─ Acompanhar: Realizado · Semanadas → acompanhamento.html?cliente=<id>&area  (volta: "Minha área")
 ├─ O plano:    Relatório → evolucao-patrimonial.html?cliente=<id>&versao=<n>&area (volta: "Voltar à área")
 ├─ Aprender:   Saber · Research da Nord · Como usar
 ├─ Ferramentas: Utilitários
 └─ A Nord:     Jornada (serviço + escalada + preparar a reunião) · Atendimento (agenda → agendar.html)
```

A barra de baixo e o menu lateral não mudaram: Painel, Objetivos, Tarefas, Plano, Mais. Nada novo entrou no Painel.

### Consultor

```
Base de clientes (index.html) ── Carteira (#carteira) · Pipeline (#pipeline) · Espera por mim (#espera)
 └─ Ficha (index.html#cliente/<id>) ── etapa e prazo · notas · exames · coleta
     ├─ Coleta            tela-consultor.html?cliente=<id>&coleta
     ├─ Montar o plano    tela-consultor.html?cliente=<id>
     ├─ Relatório         evolucao-patrimonial.html?cliente=<id>&consultor
     ├─ Área do cliente   area-cliente.html?cliente=<id>&consultor
     ├─ Acompanhamento    acompanhamento.html?cliente=<id>&consultor
     ├─ Tarefas e lembretes: para o cliente (vão para a área dele), do consultor e de reunião (ficam na ficha)
     └─ O que o cliente fez (últimas respostas, conversas sem resposta, proposta pendente)
Agenda (agendamento.html)
```

A **casca do consultor** (`<script id="casca-consultor">`, escrita no `index.html` e copiada pelo `sync-motor.js`) põe as
mesmas ligações em toda tela do consultor: Base de clientes, Pipeline, Agenda e, com um cliente aberto, Ficha, Coleta, Montar o
plano, Relatório, Área do cliente e Acompanhamento. No portal ela entra no menu lateral; nas outras, numa faixa no alto.

## 3. A regra das três profundidades

Todo tema da vida financeira aparece em três níveis, sempre na mesma ordem e com os mesmos nomes:

1. **Visão geral**: uma pergunta, um número, um estado. O cartão da área no Plano (e, quando é assunto do dia, uma linha no Painel).
2. **Visão aprofundada**: as informações da área, uma a uma, com valor, data e origem, o gráfico da área e a calculadora que as preenche. A página `#cartao/<área>`.
3. **Relatório**: a visão extremamente detalhada, que é o capítulo do relatório do planejamento, aberto dentro da página da área (`#cartao/<área>`, bloco "No relatório") e inteiro em Mais › Relatório.

A estrutura é a mesma para todo cliente; muda a profundidade preenchida. Quem não tem planejamento vê o nível 3 no mesmo
lugar, dizendo que ele chega com o planejamento completo. A página da área mostra os três níveis numa régua no alto.

| Área do Plano | 1. Visão geral (`#plano`) | 2. Aprofundada (`#cartao/…`) | 3. Relatório (páginas do livro, `?fase=`) |
|---|---|---|---|
| Saúde financeira (`saude`) | a nota e a fase | 6 informações, o exame e a evolução | `hoje-depois` |
| Gestão financeira (`gestao`) | sobra e quanto vai para o futuro | 12 informações, calculadora de orçamento e valor da hora; atalho para as Semanadas | `renda-custo`, `tempo`, `orcamento` (as quatro páginas, com `semanadas`), fluxo de 24 meses e da vida toda |
| Dívidas (`dividas`) | saldo e situação | 5 informações, calculadora da quitação | `patrimonio` |
| Objetivos (`objetivos`) | quantos no caminho | 7 informações, objetivo novo; a aba Objetivos | `objetivos-juntos`, `realizacao` |
| Reserva e liquidez (`reserva`) | a reserva contra a ideal | 5 informações, calculadora da reserva | `riscos`, `politica` |
| Gestão de riscos (`riscos`) | % de proteção | 8 informações, a teia das ameaças | `riscos` |
| Patrimônio e ativos (`patrimonio`) | o patrimônio total | 6 informações, calculadora do patrimônio e da fase | `patrimonio` |
| Investimentos (`politica`) | as caixinhas | 6 informações, o perfil | `politica`, `carteira-hoje`, `carteira-recomendada`, `carteira-decisoes` |
| Impostos e sucessão (`tributario`) | a economia por ano | 4 informações (calculadora em breve) | `ir`, `prolabore`, `sucessao`, `previdencia` |
| Liberdade financeira (`liberdade`) | a idade e se o plano fecha | 7 informações, calculadora da liberdade | `evolucao`, `caminho` |
| Evolução patrimonial (`evolucao`) | a curva | 6 informações, a curva com o real por cima | `evolucao`, `caminho` |

O que acontece de verdade (o realizado) não é um quarto nível: é a outra metade, em Mais › Realizado e Mais › Semanadas.

## 4. O ciclo consultor → cliente → consultor

1. **O consultor cadastra** na Ficha do cliente (ou em Área do cliente `&consultor` › Tarefas › Nova tarefa): título, para
   quê, prazo, de quem é e, se quiser, o lembrete no WhatsApp (hora, assinatura, recorrência semanal, quinzenal ou mensal e o
   número de vezes). Grava em `execucao/<id>.avulsas[]`, com `por: 'consultor'`. Com responsável "consultor" ou "reunião", a
   tarefa não vai ao cliente: fica em `atendimento/<id>.tarefas[]`, o documento só do consultor (etapa, prazo, tarefas, notas).
2. **O cliente vê** em Tarefas (e no Painel, quando é da semana), com "pedida pela Patrícia". Responde fiz, não fiz ou adia;
   a resposta grava em `execucao/<id>.respostas['av:<id>']`, com quem e por qual canal. O cliente cria as próprias tarefas e
   lembretes no mesmo lugar (`por: 'cliente'`).
3. **Volta para o consultor**: a base mostra por cliente as tarefas abertas e atrasadas e entra em "Espera por mim" o que
   pede ação; a ficha mostra cada tarefa com o estado e a data da resposta, e as últimas respostas das tarefas do plano.
4. As demais voltas já existiam e ficam: a proposta do cliente no relatório (aprovar na Montagem), a conversa no
   Atendimento, o realizado das Semanadas (`realizados/<id>`), a reunião marcada na agenda.

Recorrência: cada vez é uma tarefa com o seu próprio estado (`av:<id>:<k>`); aparecem as vencidas, as dos próximos 14 dias e
a seguinte.

## 5. Decisões tomadas (e por quê)

1. **O lembrete é atributo da tarefa** (já decidido no `UX.md`): a página de lembretes de produção não volta; os campos dela
   viraram campos da tarefa, para consultor e cliente.
2. **Nada novo no Painel** (`painel-so-o-essencial`). Tudo o que veio de produção e do assets-evolution entrou em Mais, em
   cinco grupos, ou dentro do cartão da área.
3. **As três profundidades usam o que já existia** (cartão, página da área, capítulo embutido). O que faltava era nomear os
   níveis, mostrá-los em todo degrau e dar a saída para o relatório inteiro.
4. **A base de clientes lê os documentos crus**, sem motor: estágio, próxima reunião, tarefas avulsas, respostas, conversas,
   proposta. Não grava derivados. A etapa do pipeline é a que o consultor põe na ficha, com o prazo ("vence em N dias"),
   guardada em `atendimento/<id>`; sem ela, a base sugere uma pelos dados (plano com coleta aberta → Reunião agendada;
   coleta finalizada → Montar relatório; uma versão → Aguardando execução ou Estratégia executada; proposta pendente →
   Aguardando aprovação; a 30 dias do A1 → Agendando A1; duas versões → A1 concluído) e diz que é sugestão.
5. **Os exemplos da base são os três da área do cliente** (`exemplo-cadastrado`, `exemplo`, `exemplo-completo`), para o
   funil aparecer cheio. A base os carrega uma vez abrindo a área num quadro escondido (a semente fica só na área). O hoje
   dos exemplos é 20/10/2026, como na área.
6. **O portal abre um cliente sem plano de trabalho a partir da última versão publicada**: é o que faz o exemplo completo
   funcionar de ponta a ponta e é a regra certa para um cliente que só tem versões.
7. **Casca por bloco copiado**, como o motor: as telas são autocontidas, então a navegação comum é um bloco igual em cada uma,
   mantido pelo `sync-motor.js`.
8. **Os exemplos têm uma tarefa pedida pela consultora** (`execucao-completo`, em `area-cliente.html`), para o ciclo
   aparecer cheio nas duas pontas.
9. **Acompanhamento é do cliente** (é a família que informa a fatura); o consultor abre a mesma página com `&consultor`.
10. **Research e vídeo sem endereço inventado**: o que não tem endereço conhecido aparece como "em breve".

## 6. Em aberto para o Nélio

1. Os endereços dos cinco relatórios de research e do vídeo "Como utilizar a plataforma".
2. A etapa do pipeline é posta à mão, com sugestão pelos dados. Vale a sugestão virar automática em algumas passagens
   (publicou a versão → Aguardando execução)? E a clínica financeira, que em produção tem funil próprio, entra em que
   colunas? Hoje o cliente de clínica aparece em "Topo do funil".
3. A tarefa do bloco 11 da coleta e a tarefa da ficha são hoje duas listas (uma no plano, outra na execução), ligadas por
   "Enviar ao cliente". Unificar numa só?
4. As calculadoras de IR/PGBL e de seguros de produção: reconstruir no cartão, ou só o relatório cobre?
5. Do `/internal`, ficaram só como "em breve": metas do semestre, NPS, programa contínuo, papéis (admin, escritório,
   direção), campanhas, cotações de seguro e link de indicação. Qual vem primeiro?
6. No link publicado, a área do cliente ainda guarda no navegador (`execucao`, `vetor`, `clinicas`); a base e a ficha leem
   de lá. Para dois computadores, o armazém da área precisa ir para o banco do link, como o do portal.
7. Registrar a clínica e registrar a reunião (UX.md) continuam sem tela; a ficha do cliente é o lugar.
8. O cliente pode apagar uma tarefa criada pelo consultor? Hoje não: só as dele.

## 7. Telas para o designer

Servir com `node ux/servir.cjs . 8137`. Base: `http://localhost:8137/`. Abra primeiro a base (ela carrega os exemplos).

### Consultor

| Tela | Endereço |
|---|---|
| Base de clientes | `index.html` |
| Pipeline em quadro (20 etapas) | `index.html#pipeline` |
| Base, só "Espera por mim" | `index.html#espera` |
| Ficha do cliente (completo) | `index.html#cliente/exemplo-completo` |
| Ficha do cliente (clínica) | `index.html#cliente/exemplo` |
| Ficha do cliente (cadastrado) | `index.html#cliente/exemplo-cadastrado` |
| Coleta | `tela-consultor.html?cliente=exemplo-completo&coleta` |
| Montagem do plano (15 passos; a casca está no menu lateral) | `tela-consultor.html?cliente=exemplo-completo` |
| Relatório visto pelo consultor | `evolucao-patrimonial.html?cliente=exemplo-completo&consultor` |
| Área do cliente vista pelo consultor | `area-cliente.html?cliente=exemplo-completo&consultor#tarefas` |
| Acompanhamento visto pelo consultor | `acompanhamento.html?cliente=exemplo-completo&consultor` |
| Agenda (carregar o exemplo em Simulação) | `agendamento.html` |

### Cliente (sempre em modo demo; a barra troca o degrau)

| Tela | Endereço |
|---|---|
| Painel | `area-cliente.html?cliente=exemplo-completo&demo#painel` |
| Objetivos | `area-cliente.html?cliente=exemplo-completo&demo#objetivos` |
| Tarefas (com a tarefa do consultor e "Nova tarefa") | `area-cliente.html?cliente=exemplo-completo&demo#tarefas` |
| Plano, nível 1 | `area-cliente.html?cliente=exemplo-completo&demo#plano` |
| Área, níveis 2 e 3 (Completo) | `area-cliente.html?cliente=exemplo-completo&demo#cartao/gestao` |
| Área, níveis 2 e 3 (Clínica: o nível 3 vazio) | `area-cliente.html?cliente=exemplo&demo#cartao/gestao` |
| Área sem calculadora (em breve) | `area-cliente.html?cliente=exemplo&demo#cartao/tributario` |
| Mais (os cinco grupos) | `area-cliente.html?cliente=exemplo-completo&demo#mais` |
| Relatório e versões | `area-cliente.html?cliente=exemplo-completo&demo#relatorio` |
| Relatório e versões (sem plano) | `area-cliente.html?cliente=exemplo-cadastrado&demo#relatorio` |
| Utilitários | `area-cliente.html?cliente=exemplo-completo&demo#utilitarios` |
| Research da Nord | `area-cliente.html?cliente=exemplo-completo&demo#research` |
| Como usar | `area-cliente.html?cliente=exemplo-completo&demo#comousar` |
| Jornada (serviço + escalada) | `area-cliente.html?cliente=exemplo-completo&demo#jornada` |
| Realizado (existe em jul/2027) | `area-cliente.html?cliente=exemplo-completo&demo&hoje=2027-07-15#realizado` |
| Saber, Atendimento | `…&demo#saber`, `…&demo#conversas` |
| Relatório inteiro, aberto da área | `evolucao-patrimonial.html?cliente=exemplo-completo&versao=1&area` |
| Semanadas, aberta da área | `acompanhamento.html?cliente=exemplo-completo&area` |
| Visitante (sem conta) | `area-cliente.html?demo#painel` |

### Lugares reservados para ilustração (o designer decide)

Capa de cada página de Mais (`#relatorio`, `#utilitarios`, `#research`, `#comousar`), o estado vazio do nível 3 na página da
área, o estado vazio da base de clientes e da lista de tarefas da ficha. No código, estão marcados com a classe `ilustra-vaga`.
