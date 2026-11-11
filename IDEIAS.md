# Ideias de valor para o produto

Arquivo vivo. Toda ideia que mereça ser lembrada entra aqui, mesmo crua. Nada aqui é decisão: o que vira decisão
sai para o documento ou o código que a implementa, e a ideia muda de estado.

**Como usar**

- Uma ideia por seção, com data de entrada e de quem veio.
- Estados: `nova` (só registrada), `em discussão` (tem perguntas abertas), `aceita` (vai ser feita; aponta onde),
  `feita` (aponta o que a implementou), `descartada` (diz por quê, para não voltar).
- Ao revisar, escreva embaixo da ideia o que mudou, com data. Não apague o histórico.
- Antes de propor algo novo, procure aqui: pode já existir, aceita ou descartada.

---

## Três profundidades por tema

`aceita` · 11/11/2026 · Nélio · ver `area-logada/v2/ARQUITETURA.md`, seção 3

Para cada ponto principal da vida financeira, os dados aparecem em três profundidades: visão geral, visão aprofundada e
visão extremamente detalhada, que é o relatório que o cliente de planejamento recebe. A estrutura é a mesma para todo
cliente; muda a profundidade preenchida.

11/11/2026: aplicada nas onze áreas do Plano (`area-cliente.html`): o cartão (1), a página da área com as informações e a
calculadora (2) e o capítulo do relatório (3), com a régua dos três níveis no alto; sem plano publicado, o nível 3 aparece
no mesmo lugar dizendo com o que chega. Falta levar a regra para fora do Plano (Objetivos, Realizado).

## Exame de saúde financeira revisto, como o nível 1 de cada área

`em discussão` · 11/11/2026 · Nélio

O exame (33 perguntas, nota de 0 a 100, algoritmo próprio) tem uns cinco anos e nunca foi revisto a fundo. A ideia é
rever as perguntas e a conta da nota final com o que se aprendeu nas conversas com clientes, e fazer do exame a **origem
do nível 1** das três profundidades: ele dá o norte de cada área; a clínica com o consultor (ou as tarefas e lições da
trilha do fazer e do saber) aprofunda para o nível 2; o planejamento completo dá o nível 3.

O mesmo dado fica mais preciso a cada nível. O exemplo do Nélio, na poupança:

| Nível | De onde vem | O dado |
|---|---|---|
| 1 · exame | a pessoa declara | "poupo uns R$ 1.500 por mês; guardei em 8 dos últimos 12 meses" |
| 2 · clínica | o consultor confere com ela | na verdade perto de R$ 1.100 por mês, em 6 meses; **alvo combinado de R$ 1.700**, que passa a ser cobrado |
| 3 · planejamento | orçamento inteiro e Open Banking | o que a família ganhou e gastou nos últimos 12 meses (medido) e o que se espera nos próximos 24 (projetado) |

O que existe hoje: as 33 perguntas de produção estão em `COLETA.md`, seção 0 (com o `name` de cada uma), e reescritas em
`area-cliente.html` (`EXAME`). A **fórmula oficial não está aqui**: roda no servidor (`saudeFinanceiraController`); a
`notaDoExame()` da área é uma conta provisória minha, com os cinco pilares em pesos iguais.

Perguntas abertas: a fórmula oficial (o Nélio traz?); o que os clientes erram ou não entendem hoje; se os cinco pilares
continuam ou se a nota passa a ser por área do Plano; como tratar a quebra da série histórica quando a conta mudar.

## Versão 2.0: as duas ferramentas numa só

`aceita` · 11/11/2026 · Nélio · ver `area-logada/v2/ARQUITETURA.md`

Uma ferramenta só, completamente integrada: a área logada do cliente (que o ajuda a melhorar a vida financeira mês a mês)
e a área do consultor (a base de clientes, os relatórios, as tarefas e os lembretes cadastrados para o cliente, o
planejamento de vida, a agenda e o realizado). Nada do que existe em produção, no assets-evolution e no integrated-app fica
de fora ou órfão.

11/11/2026: primeira rodada feita no branch `claude/versao-2-integrada`: o inventário, a base de clientes com o pipeline e a
ficha, a casca comum do consultor, o ciclo da tarefa (consultor → cliente → consultor) e o que veio de produção em Mais. O
que ficou "em breve" e as decisões abertas estão no documento.

## Ilustrações espalhadas pela ferramenta, no estilo flat

`aceita` · 11/11/2026 · Nélio · substitui "ilustração só na capa de capítulo" (31/10/2026)

As ilustrações em vetor plano deixam de ficar só na abertura de cada área e passam a aparecer pela ferramenta toda. O
objetivo do cliente continua com foto.

Perguntas abertas:

- Em que tipos de lugar entram (estados vazios, aberturas de página, passos, conquistas) e onde não entram (telas de
  trabalho do consultor, tabelas).
- O molde do prompt do `DESIGN.md` serve para peças pequenas, ou precisa de um segundo molde.

11/11/2026: os lugares candidatos estão marcados no código com a classe `ilustra-vaga` e listados no fim do
`area-logada/v2/ARQUITETURA.md`; a escolha e o desenho são do trabalho de design.

## Cliente simulado que usa a ferramenta por 12 meses

`feita` · 11/11/2026 · Nélio · ver `area-logada/v2/QUADRO-FEEDBACK.md`, `DIARIO-12-MESES.md` e `FEEDBACK-APLICADO.md`

Um cliente simulado usa a ferramenta por doze meses (entra, responde as tarefas, falha em algumas, recebe os lembretes,
passa pelas reuniões) e devolve um quadro de feedback: o que ajudou, o que confundiu, o que faltou em cada mês.

Perguntas abertas:

- Quantos perfis (os de `ux/personas/clientes-teste.md` e os vinte do Painel são o ponto de partida) e em que degrau cada um.
- O relógio: a área já aceita `?hoje=`; falta um roteiro que avance mês a mês e grave as respostas de cada mês.
- O formato do quadro: por mês e por tela, com a pergunta que a pessoa tinha e se a tela respondeu.

11/11/2026: primeira rodada feita com um perfil (Ana, CLT, casada, no celular) no exemplo completo: 72 cartões no quadro. A segunda
rodada de UX aplicou o quadro (24 corrigidos, 11 em parte) e deixou as decisões e as causas dos números que divergem em
`area-logada/v2/FEEDBACK-APLICADO.md`. Para repetir: a base de clientes agora aceita `?hoje=`, como a área; o relatório, as
Semanadas, a agenda e o portal ainda usam o relógio real, e o exemplo é roteirizado até jun/2027.

## Acesso próprio do cônjuge

`nova` · 11/11/2026 · cliente simulado de 12 meses (S10)

O Marcos quis ver no celular dele e não há convite nem entrada própria: as tarefas dele saem "Respondendo como Ana". Convidar o cônjuge,
cada um vendo e respondendo as suas, com o mesmo plano.

Perguntas abertas:

- Um login por pessoa ou um link por membro do domicílio.
- O que cada um vê do outro (tarefas, mensagens, pauta).

## Cotação do seguro pela Nord

`nova` · 11/11/2026 · cliente simulado de 12 meses (S5)

"Cotar o seguro de vida do Marcos · pedir a cotação a um corretor" ficou aberta oito meses: que corretor? É a maior ameaça do
plano do exemplo. Um botão "pedir a cotação pela Nord" na tarefa, ou o contato de quem cota; em produção existe "Cotações de Seguros"
na área do consultor.

Perguntas abertas:

- Quem cota (corretor parceiro, a própria Nord) e como a apólice contratada volta para o plano e sobe a proteção.

## Registro da reunião, balanço do ano e renovação

`nova` · 11/11/2026 · cliente simulado de 12 meses (S12)

Antes de renovar, não há uma página com o que mudou em 12 meses, e a reunião em si não deixa registro feito na ferramenta ("registrar o
resumo" está em breve). Um "seu ano": reserva, aportes, objetivos, proteção e imposto, antes e depois; e o resumo da reunião gravado pelo
consultor na ficha.

Perguntas abertas:

- O que entra no balanço e quem o escreve.
- A tela de renovação (hoje a Jornada diz "a definir").

## Destino do dinheiro extra (13º, bônus)

`nova` · 11/11/2026 · cliente simulado de 12 meses (S6)

Entraram o 13º e o bônus de março e nada disse para onde iam. Uma tarefa no mês em que o extra entra: "R$ X para tal objetivo" (ou para a
reserva, se ela estiver abaixo).

Perguntas abertas:

- A regra de destino é do consultor, no plano, ou uma sugestão da área.

## O imposto já garantido e a lista do IR de abril

`nova` · 11/11/2026 · cliente simulado de 12 meses (S7 e S8)

Feito o PGBL, o cartão segue mostrando só a economia possível ("R$ 34 mil por ano a menos"). Mostrar o já garantido no ano. E, em março e
abril, uma lista curta do que declarar e juntar, saída do capítulo de impostos.

Perguntas abertas:

- De onde vem o "já aportado no ano" (a tarefa marcada, o extrato, o consultor).

## Anexar e dizer por quê na tarefa

`nova` · 11/11/2026 · cliente simulado de 12 meses (S9)

"Enviar o informe de rendimentos": enviar por onde? "Não fiz" só deixa marcar nova data. Um campo "por quê", que o consultor lê, e anexar
o arquivo na própria tarefa.

Perguntas abertas:

- Onde o arquivo mora e quem pode vê-lo.

## O dia em que o objetivo chega

`nova` · 11/11/2026 · cliente simulado de 12 meses (S13)

Passada a data da viagem, a tela mostra "57%" e linhas "atrasado"; ninguém pergunta se viajaram. Na data: "chegou. Realizaram? Adiar? Usar o
que tem?", com a resposta gravada no histórico do objetivo.

Perguntas abertas:

- O que acontece com o dinheiro guardado quando o objetivo é realizado por menos ou adiado.

## Enquanto você esteve fora

`nova` · 11/11/2026 · cliente simulado de 12 meses (S17)

Depois de quase dois meses sem abrir, a volta mostra só uma linha ("Desde 20/04: o patrimônio foi atualizado"). Três linhas: o que venceu, o
que foi feito por você (pelo WhatsApp, pelo consultor) e o que fazer agora.

Perguntas abertas:

- A partir de quantos dias de ausência aparece.

## A palavra comum, ou um toque que explica

`nova` · 11/11/2026 · cliente simulado de 12 meses (T13)

Liquidez diária, D+0, caixinha, ajustáveis, pró-labore, ITCMD, VGBL, "Construir", "Ruína em investimentos": a cliente não sabe. Trocar pela
palavra comum onde der e, onde não der, um toque que explica em uma linha.

Perguntas abertas:

- A lista de termos e quem escreve as explicações (o tom é do dono do produto).

## Um teto só: a tarefa da semana e as Semanadas

`nova` · 11/11/2026 · cliente simulado de 12 meses (T6 e T7)

Em Tarefas, "Teto da semana: até R$ 1.237, em qualquer meio"; nas Semanadas, "a fatura em até R$ 1.325", com outras datas, e responder num
lugar não vale no outro. Um combinado só, perguntado no fim da semana, com a resposta valendo nos dois lugares.

Perguntas abertas:

- Qual dos dois é o combinado (os gastos que a família controla, ou a fatura do cartão).

## Lembrete de verdade no WhatsApp, resposta com um toque e login

`nova` · 11/11/2026 · cliente simulado de 12 meses ("o que não consegui testar")

O protótipo só registra que o lembrete seria enviado; a conta se cria com o primeiro nome e fica no navegador. O envio, a página de um toque
(`/taskChecker` de produção) e o login com consentimento do WhatsApp são da plataforma.

Perguntas abertas:

- A ordem de construção na plataforma.

## Tempo dedicado ao plano: 5 minutos por mês, 30 a cada seis, 1 hora por ano

`nova` · 05/11/2026 · Nélio

Uma metodologia em que o cliente se compromete com uma cadência de revisão: 5 minutos por mês, 30 minutos a cada
seis meses e 1 hora depois de um ano. Na plataforma, isso vira um compromisso visível: quando ele entra no mês, há um
contador de 5 minutos para a revisão curta; a cada seis meses aparece a revisão de meia hora, mais ampla; e a de uma
hora é a reunião com o consultor, marcada dali.

Em algum ponto da plataforma, um contador do tempo que o cliente já dedicou a cuidar da própria vida financeira, e
depois a comparação disso com o que esse tempo rendeu em reais.

Perguntas abertas:

- O que cabe em 5 minutos (o roteiro da revisão mensal) e em 30 (a semestral)? Isso define o conteúdo de cada uma.
- O contador mede o tempo na tela ou o tempo das revisões concluídas? O segundo é mais honesto.
- Como traduzir tempo em reais sem inventar número: o que mudou no patrimônio entre revisões, ou um valor-hora?
- Combina com o uso mensal já decidido para a área (a pessoa entra uma vez por mês ou menos).

## Catálogo único de passos para qualquer perfil

`em discussão` · 04/11/2026 · Nélio · ver `area-logada/modelo-jornada/01-modelo-e-primeiros-passos.md`

Mais de cem passos possíveis, um catálogo só para todos os clientes, ordenado pela fase da vida, pelo trecho da
jornada e pela situação; os três mais importantes aparecem na home. Os 15 primeiros estão modelados no documento;
falta a lista completa.

## Trilha de conhecimento com fotografia do que falta aprender

`nova` · 04/11/2026 · Nélio

A trilha do Saber funciona para quem não sabe nada e para quem domina o mercado: o avançado pula capítulos, o
iniciante começa do começo, e os dois têm progressão e completude. Paralelo com uma profissão: há experiências a
viver e conhecimentos a adquirir; a plataforma tira a fotografia do cliente e diz o que falta de cada. Formato de
apresentação em estilo de onboarding, com ilustrações (Midjourney, estilo flat combinado). É uma seção própria de
trabalho, longa.

## Conquistas com símbolo próprio

`em discussão` · 04/11/2026 · Nélio

Conquista é o passo feito, com data; não há segunda hierarquia. Cada conquista tem um símbolo discreto, maduro, a
desenhar com o Midjourney quando chegar a hora. Vocabulário na tela: tarefa, passo, conquista, trecho, jornada;
nunca missão, quest, XP, medalha, selo.

## Nomes dos sete trechos da escalada

`em discussão` · 04/11/2026 · Nélio

Hoje: Sobreviver, Definir, Construir, Proteger, Focar, Otimizar, Desfrutar (nesta ordem; o código ainda tem Focar
antes de Proteger). Em avaliação uma metáfora de jornada/expedição com substantivos (Preparo, Destino, Base,
Equipagem, Trajeto, Ritmo, Liberdade financeira) para não soar lúdico e não confundir com as fases da vida.

## Orçado × realizado nos objetivos, com atualização de posições

`aceita` · 04/11/2026 · Nélio · entra na home nova

No bloco dos objetivos, uma linha com o patrimônio que o plano esperava hoje e o real, com os botões "Atualizar
posições" e "Conectar Open Banking". A comparação é no total; cada objetivo mostra só a situação derivada.

## O ano à frente

`aceita` · 04/11/2026 · proposta minha, aceita pelo Nélio · entra na home nova

Lista curta dos próximos eventos do plano: aporte, reunião, renovação de seguro, IR, 13º. Para quem entra a cada
dois meses, responde "o que vem por aí".

## Página do plano em uma página (one-page financial plan)

`aceita` · 04/11/2026 · Nélio · entra como link fixo "Ver o plano"

Patrimônio, dívidas, reserva, proteção, objetivos e aporte em uma página, no lugar dos números que saíram do topo
da home.

## Open Banking para puxar gastos e imprevistos

`nova` · 04/11/2026 · Nélio

Em vez de o cliente registrar um imprevisto ou o teto da semana, a conexão com o Open Banking traz os gastos
automaticamente. Até existir, nada na área pede ao cliente que registre gasto; no máximo ele atualiza posições e
lista uma despesa grande no acompanhamento semestral.
