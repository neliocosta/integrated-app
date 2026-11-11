# Rodada 1 — revisão comportamental da área do cliente (03/11/2026)

Base: inventário de 03/11, as 14 capturas (degrau Completo, Ana e Marcos, hoje 20/10/2026), README, UX.md (escalada, o ano e os três números, Tarefas, lembrete no WhatsApp, Painel, Jornada, princípios) e REFERENCIAS-SABER. Conferi no `area-cliente.html` que a folha da tarefa já tem Fiz · Fiz parte · Não fiz · Adiar com as quatro saídas (manter a data, adiar, ajustar ao que coube, usei em outro objetivo); isso é importante porque boa parte do que falta não é mecanismo novo, é mecanismo que existe e não chega ao Painel.

Restrições respeitadas: tom sóbrio, sem emoji, medalha, mascote, confete ou jogo; a mesma estrutura em todo degrau; o objetivo é o protagonista; visual "Livro" não discutido; nada de código.

## Diagnóstico em um parágrafo

A tela de hoje reforça **vigilância e leitura**, não **execução e retorno**. O que o cliente vê ao entrar é um inventário de pendências em laranja (duas tarefas "atrasada há 10 dias", "2 atrasadas", "2 tarefas atrasadas", "Passou R$ 193", quatro objetivos que "atrasam" de 8 meses a 3 anos, "Proteção em 52", "abaixo de 70%") e um botão principal que só manda **ver** ("Ver a reserva"). O que ele já fez some: as 4 tarefas feitas não aparecem, o Realizado está vazio, a Jornada não tem passo concluído, a barra do passo começa do zero como se os R$ 60 mil não tivessem sido construídos. Para um adulto sério, o efeito previsível desse arranjo é o do avestruz: a tela custa mais do que dá, e a visita seguinte é adiada. O comportamento que a área deveria reforçar é o ciclo da tese do produto, em frase única: **"fiz uma coisa pequena hoje, e vi o objetivo andar"**. Isso pede (1) uma ação clara por visita, (2) o feito tão visível quanto o que falta, (3) toda falta ou atraso acompanhado da saída que cabe no bolso, (4) o passo com data e marcos, e (5) o Saber e a planejadora a serviço da decisão do momento. Hoje o Painel é um relatório de status; precisa virar a mesa de trabalho de um plano em execução.

## Achados

### B1 — Atraso dito três vezes, em laranja, sem saída
- **Tela/cartão:** Painel › Fazer (placar "2 atrasadas", dois cartões "atrasada há 10 dias") e "O que resolver" ("2 tarefas atrasadas — a mais antiga: Cotar o seguro de vida do Marcos"); repetido em Tarefas.
- **Mecanismo:** aversão à perda e vergonha → evitação (ostrich effect). A repetição não aumenta a urgência; aumenta o custo emocional de abrir a tela. O UX.md manda "sem julgar" e "uma falta sempre vem com uma saída".
- **Hoje:** "Cotar o seguro de vida do Marcos — combinada na reunião de 26/09 — atrasada há 10 dias" (3 menções ao mesmo atraso na primeira dobra).
- **Efeito provável:** o cliente aprende que entrar na área é levar bronca; volta menos; a tarefa burocrática (a mais chata) fica ainda mais tempo parada.
- **Recomendação:** uma menção só, e com a saída. O cartão da tarefa diz o que destrava: "Cotar o seguro de vida do Marcos · combinada em 26/09 · uns 20 minutos: a Nord indica dois corretores; pedir cotação de R$ X de cobertura". O contador "há 10 dias" vira data neutra ("desde 10/10") e, no placar, "4 de 7 feitas · 2 ficaram para esta semana". Em "O que resolver", a linha de tarefas sai (já está em Fazer). Laranja só no botão da ação, nunca no estado.
- **Severidade:** alta.

### B2 — Objetivos que "atrasam 2 anos" sem caminho de recuperação
- **Tela/cartão:** Painel › Os objetivos (selos "atrasa 14 meses", "atrasa 8 meses", "atrasa 2 anos", "atrasa 3 anos"); Objetivos (lista e cartões).
- **Mecanismo:** goal gradient (esforço cresce perto da meta; some quando a meta parece inalcançável) e desesperança aprendida. Quatro de seis objetivos em vermelho-laranja sem "e agora?" ensinam que o plano não fecha.
- **Hoje:** "Casa de praia · set/2037 · 8% guardado · no ritmo de hoje, ago/2040 · atrasa 3 anos".
- **Efeito provável:** descrédito no plano; o cliente desiste de olhar a lista ou passa a tratar a data como fictícia.
- **Recomendação:** o selo carrega a saída, no mesmo lugar: "atrasa 2 anos · com mais R$ 180/mês, na data" ou "a sobra passa para cá em mar/2027, quando a reserva fechar" (o plano já prevê a ordem: tudo para o 1, depois o 2). No Painel, mostrar o estado agregado e a regra: "2 de 6 na data · a reserva fecha em set/2027 e libera R$ 1.000/mês para os atrasados, nesta ordem". A lista inteira fica em Objetivos. Nunca mostrar um atraso sem a frase que diz como ele diminui.
- **Severidade:** alta.

### B3 — O que já foi feito é invisível
- **Tela/cartão:** Painel (tarefas feitas não aparecem), Tarefas ("Respondidas (6)" recolhida), Realizado (quase vazio), Jornada (sem passo concluído), Passo (barra sem ponto de partida).
- **Mecanismo:** progress principle (Amabile: o maior motivador diário é perceber progresso em trabalho que importa) e endowed progress (Nunes e Drèze: progresso já dado aumenta conclusão). A tela só contabiliza o débito.
- **Hoje:** "Neste mês 4 de 7 feitas" é o único vestígio; o passo mostra "R$ 60 mil de R$ 71,5 mil" como se os R$ 60 mil não fossem conquista.
- **Efeito provável:** a sensação de "parece solto" que o dono do produto descreve: não há espinha dorsal porque não há passado; cada visita recomeça do zero.
- **Recomendação:** (a) no Painel, uma faixa curta "Desde o plano de 26/09: 7 feitas · reserva de R$ 52 mil para R$ 60 mil · aporte de outubro feito", com toque para o Realizado; (b) a barra do passo com o ponto de partida marcado ("em set/2026: R$ 52 mil"), para que o trecho já andado seja visível; (c) em Tarefas, "Feitas" aberta por padrão nos últimos 30 dias, cada uma com a data e o que mudou ("Aporte de outubro · 5/10 · a Casa própria ficou R$ 1.500 mais perto"); (d) na Jornada, a trilha de passos de Construir com os concluídos preenchidos ("Reserva mínima · R$ 40 mil · ago/2026").
- **Severidade:** alta.

### B4 — Sequência de aportes: um quadradinho e "1 mês seguido"
- **Tela/cartão:** Painel › A poupança.
- **Mecanismo:** streak sóbrio (consistência) e o "Ritmo", o número micro que o UX.md define como 100% sob controle do cliente. Um quadradinho azul não comunica ritmo nem o que vem.
- **Hoje:** "1 mês seguido com o aporte feito · desde outubro · Nenhum mês ficou faltando".
- **Efeito provável:** cartão lido como vazio; não dá razão para proteger a sequência nem diz quando é o próximo gesto.
- **Recomendação:** o cartão vira o Ritmo do ano: doze posições (out/2026 a set/2027), as feitas preenchidas, a próxima em destaque com data e valor: "Próximo aporte: 5/11 · R$ 2.500 (R$ 1.500 Casa própria, R$ 1.000 reserva) · 1 de 12 no ano". A frase de sequência fica, mas no futuro: "Com novembro feito, 2 meses seguidos". Sem punição ao quebrar: o mês falhado fica vazio e a contagem recomeça sem comentário.
- **Severidade:** média.

### B5 — O passo não tem data nem marcos
- **Tela/cartão:** herói do Painel e tela do passo.
- **Mecanismo:** goal gradient (precisa de distância visível e decrescente), implementation intention ("quando X, então Y"), e a trilha de passos que o UX.md promete para a tela do passo (critério, tarefas do passo, passos anteriores e seguintes).
- **Hoje:** "R$ 60 mil de R$ 71,5 mil · Completar a reserva aceitável · Ver a reserva". O cadastrado tem "chega em 1 mês"; o completo não tem previsão.
- **Efeito provável:** o passo mais importante do plano não tem horizonte; o cliente não sabe se faltam semanas ou anos, nem o que fazer para encurtar.
- **Recomendação:** três linhas obrigatórias no cartão: "Faltam R$ 11,5 mil"; "No ritmo de hoje (R$ 1.000/mês), pronto em set/2027"; "Com o resgate de R$ 42 mil que a Patrícia pediu, pronto esta semana" (a tarefa de carteira existe nos dados e é o atalho). A barra com os três degraus marcados (mínima R$ 40 mil, feita; aceitável R$ 71,5 mil, agora; ideal R$ 102,1 mil, depois). A tela do passo lista as tarefas do passo com estado e o passo seguinte em cinza ("Depois: aporte automático no dia 5").
- **Severidade:** alta.

### B6 — Três alvos para a mesma reserva, sem a escada
- **Tela/cartão:** herói (R$ 71,5 mil), Plano (R$ 102,1 mil), cadastrado (R$ 40 mil), clínica ("Completar a reserva ideal").
- **Mecanismo:** confiança e fluência cognitiva: metas que mudam de número conforme a tela parecem arbitrárias, e meta arbitrária não compromete.
- **Hoje:** "Reserva R$ 60 mil" (herói) · "de R$ 71,5 mil" (passo) · "R$ 60 mil de R$ 102,1 mil" (Plano).
- **Efeito provável:** o cliente desconfia do cálculo ou escolhe mentalmente o alvo mais confortável.
- **Recomendação:** uma barra única com os três degraus nomeados, em todo lugar em que a reserva aparece (herói, passo, Plano, cartão de "Reserva e liquidez"). O número do Plano passa a ser "R$ 60 mil · aceitável em R$ 71,5 mil · ideal em R$ 102,1 mil".
- **Severidade:** média.

### B7 — Saber não está ligado à decisão do momento
- **Tela/cartão:** Painel › Saber ("Para começar") e a aba Saber.
- **Mecanismo:** educação just-in-time (a prática de evidência mais forte da REFERENCIAS-SABER) e Knowles (adulto aprende pelo problema próprio). A trilha é a mesma para todos, na mesma ordem, e não há capítulo de proteção, orçamento, dívida ou liberdade; a tarefa "cotar o seguro de vida" não aponta nada.
- **Hoje:** "Ninguém precisa começar do zero. Veja os 4 capítulos e marque os que você já domina."
- **Efeito provável:** o Saber é lido como curso genérico, separado do plano; é a vertical que "não parece conectada".
- **Recomendação:** o Saber se subordina ao passo e à tarefa. No Painel, o cartão vira "Para o passo agora: Reserva de emergência · 2 min · por que ela fica no Tesouro Selic e não na Casa própria". Cada tarefa burocrática leva a linha "Antes de fazer, 2 min: Seguro de vida com dependentes" (o capítulo precisa existir; hoje falta Proteção). Na aba Saber, o primeiro bloco é "Para o seu passo" e só depois "Os capítulos". O exemplo usa os números da família ("a reserva de vocês cobre 5 dos 8 meses").
- **Severidade:** alta.

### B8 — Saber sem recompensa percebida
- **Tela/cartão:** Painel › Saber ("0 de 4 capítulos · 1 conquista"); aba Saber ("Concluir um capítulo vale uma conquista").
- **Mecanismo:** recompensa percebida e feedback imediato. "Conquista" é abstração sem uso; o que recompensa um adulto é entender o próprio plano.
- **Hoje:** a pergunta só aparece no Painel da clínica ("Os seus 5 minutos · CDI e Selic"); no completo há um botão "Ver os capítulos".
- **Efeito provável:** zero por cento da trilha tocada; o "1 conquista" sem nome não explica o que foi ganho.
- **Recomendação:** a pergunta do dia no Painel em todo degrau (um toque, 20 segundos), e a resposta devolve o plano explicado: "Certo. É por isso que a reserva de vocês fica no Tesouro Selic, e não na caixinha da Casa própria." Trocar "1 conquista" por o que foi ganho ("Juros a favor · 14/10"). Ao fechar um capítulo: "Agora, no seu plano: ver onde está a reserva" (prática 8 da pesquisa). "Já sei isso" fica: é endowed progress honesto.
- **Severidade:** média.

### B9 — O teto da semana como compromisso, e o "Passou R$ 193"
- **Tela/cartão:** Painel › O teto do mês; tarefa "Teto da semana: até R$ 1.093".
- **Mecanismo:** commitment device (o teto só funciona se foi assumido antes da semana, não lido depois), feedback loop curto e enquadramento de perda. A frase atual é boa na segunda metade (dá a saída) e dura na primeira.
- **Hoje:** "Passou R$ 193 nas semanas respondidas. Para fechar o mês no teto, as 2 semanas que faltam ficam com R$ 1.093 e R$ 937." A tarefa diz "até 25/10" mas não tem gesto de assumir nem mostra as semanas respeitadas.
- **Efeito provável:** a semana é vivida como auditoria no fim, não como combinado no início; o excesso vira notícia, não ajuste.
- **Recomendação:** na segunda-feira, a tarefa pede o compromisso em um toque ("Nesta semana, até R$ 1.093 de gastos ajustáveis. Combinado?") e diz para quê ("é o que libera o aporte da Casa própria"). No meio da semana, o que resta ("faltam R$ 400 até domingo"). No cartão do mês, mostrar as semanas como barras com as respeitadas contadas ("2 de 3 semanas no teto") antes do excesso, e o excesso como ajuste: "R$ 193 acima; redistribuído nas duas que faltam, o mês fecha no teto". A pergunta da semana no WhatsApp já está desenhada no UX.md; o Painel precisa refletir o mesmo ciclo.
- **Severidade:** média.

### B10 — Nada acontece quando um passo ou capítulo é concluído
- **Tela/cartão:** tela do passo, Jornada, Saber.
- **Mecanismo:** peak-end (a lembrança da ferramenta é definida pelos picos e pelo fim) e marcos. O UX.md prevê "concluir um passo é registrado com movimento suave; concluir um mundo é um marco anotado na Jornada", mas nada disso existe.
- **Hoje:** não há estado "passo concluído" em tela nenhuma; a reserva mínima (R$ 40 mil, já atingida) não aparece como feita em lugar algum.
- **Efeito provável:** o esforço de meses termina em silêncio; a transição para o próximo passo é invisível, e a Jornada não tem memória de conquista.
- **Recomendação (celebração sóbria):** ao concluir o passo, o herói mostra uma vez, em tela inteira, a frase de fechamento com números e datas: "Reserva aceitável completa. R$ 71,5 mil guardados entre ago/2026 e set/2027. A Casa própria e a viagem ficam protegidas de um imprevisto. O próximo passo: aporte automático no dia 5." Com um botão só ("Seguir"). O mesmo texto vira linha permanente na Jornada e vai à Patrícia. Ao concluir capítulo: "Capítulo concluído em 14/10 · onde isso está no plano de vocês: a reserva e as caixinhas". O fechamento do mês no WhatsApp ("Outubro: 3 de 3 feitas. A Itália ficou R$ 1.500 mais perto") é o pico mensal; precisa aparecer também no Painel no primeiro acesso do mês seguinte.
- **Severidade:** alta.

### B11 — A poupança não é automática, e o dia do aporte não existe na tela
- **Tela/cartão:** Painel › A poupança; tarefa de aporte (cadastrado e clínica: "Aporte de outubro: R$ 2.500 · atrasada há 15 dias").
- **Mecanismo:** default (Save More Tomorrow, Thaler e Benartzi): o aporte que depende de lembrar falha; o automático não. O UX.md lista "sobra automática" e "aporte no dia certo" como passos de Construir.
- **Hoje:** "Nenhum mês ficou faltando" sem dizer se é automático; o cadastrado já tem aporte atrasado há 15 dias, o que é o sintoma do manual.
- **Efeito provável:** o aporte vira tarefa mensal de força de vontade; cada mês difícil quebra a sequência.
- **Recomendação:** (a) a primeira tarefa burocrática de todo degrau com sobra: "Agendar a transferência automática de R$ 2.500 para o dia 5" com roteiro; (b) o cartão A poupança mostra "aporte automático: sim, dia 5" ou "ainda manual · agendar"; (c) o aporte do mês vira confirmação, não pedido ("Vimos/Você marcou o aporte de 5/11?"); (d) Save More Tomorrow para eventos: 13º e aumento geram a pergunta antes de o dinheiro cair ("O 13º chega em novembro; R$ 3 mil dele para a reserva fecha o passo. Combinado?").
- **Severidade:** média.

### B12 — Não há razão para voltar na semana que vem
- **Tela/cartão:** Painel inteiro.
- **Mecanismo:** hábito (gatilho → rotina → recompensa) e recompensa variável sem jogo: o que varia entre visitas tem de ser informação real que só a ferramenta tem. Hoje, entre uma visita e outra, só o contador de atraso muda.
- **Hoje:** nenhuma marca de "o que mudou desde a última vez"; o cartão da planejadora aponta 26/03/2027.
- **Efeito provável:** uso reativo ao WhatsApp e nada mais; o Painel não cria ciclo próprio.
- **Recomendação:** dar ritmo semanal ao Painel e dizer o que é novo. Segunda: o teto e a tarefa da semana. Dia do salário: o aporte. Fim do mês: o fechamento. E uma faixa no alto, abaixo da saudação, só quando houver novidade: "Desde 13/10: a Patrícia respondeu sobre o VGBL · a reserva subiu R$ 1.000 · a Casa própria está em 27%". Isso é o "variable reward" de um adulto: o plano se mexeu e alguém olhou.
- **Severidade:** alta.

### B13 — A planejadora como accountability aparece só como data distante
- **Tela/cartão:** Painel › Quem acompanha vocês ("Patrícia Lemos · 1º acompanhamento · 26/03/2027"); Jornada.
- **Mecanismo:** accountability e prova social de uma pessoa (ser visto por alguém que importa é o motivador mais barato que existe); o "não fiz" entra na fila dela, mas o cliente não sabe disso.
- **Hoje:** uma data cinco meses à frente e nada sobre o que ela vê.
- **Efeito provável:** a relação parece pausada até março; a tarefa "combinada na reunião de 26/09" perde o peso do combinado.
- **Recomendação:** o cartão diz o que ela acompanha e com o que vocês chegam: "Patrícia vê as respostas de vocês. Em 26/03 vocês chegam com: reserva aceitável (set/2027), seguro de vida cotado, beneficiários do VGBL indicados." Lista curta que se preenche. Mostrar presença real: "respondeu em 15/10, em 1 dia útil". E, antes da reunião, "Pauta para 26/03" montada do que ficou aberto.
- **Severidade:** média.

### B14 — O momento de crise não tem porta de entrada
- **Tela/cartão:** nenhuma; "Ver a reserva" e "Atendimento" são o mais próximo.
- **Mecanismo:** proteção contra decisões ruins sob estresse (present bias, mental accounting): quando o carro quebra, o cliente ou resgata a caixinha errada, ou para o aporte, ou vai ao cartão, porque não sabe que a reserva é para isso.
- **Hoje:** a reserva é apresentada como alvo a completar, nunca como dinheiro a usar; não há "pausar um mês" com efeito mostrado; não há "resgatar" como ação prevista.
- **Efeito provável:** no primeiro imprevisto, o plano é abandonado silenciosamente, e a vergonha de B1 impede a volta.
- **Recomendação:** uma entrada discreta e permanente no Painel e no Atendimento: "Um imprevisto?" que abre três perguntas (quanto, quando, de onde você pensa tirar) e responde com números: "R$ 6 mil da reserva: ela fica em R$ 54 mil, recompõe em 6 meses, e nenhum objetivo muda de data. Não pare o aporte da Casa própria." As saídas, na ordem: usar a reserva (é para isso) · pausar um aporte com a data nova · falar com a Patrícia. Nunca "resgatar do objetivo" como primeira opção. O mesmo fluxo é o que torna o "não fiz" uma escolha de adulto, não uma falha.
- **Severidade:** alta.

### B15 — Cinco contagens, um botão que só manda ver
- **Tela/cartão:** Painel (herói "Ver a reserva"; "0 de 1 respondidas", "4 de 7 feitas", "2 atrasadas", "2 tarefas atrasadas", "1 mês seguido").
- **Mecanismo:** default e escolha única (uma ação clara por visita reduz a fricção de decisão); o UX.md diz "a pílula de ação principal é uma só por tela: o botão do cartão do passo".
- **Hoje:** o botão principal é "Ver a reserva" (leitura), enquanto as ações reais estão em cartões menores; cinco placares dizem coisas diferentes sobre a mesma execução.
- **Efeito provável:** o cliente lê, não faz; e não sabe qual número é o que importa.
- **Recomendação:** o botão do herói nomeia a ação do dia, decidida pelo calendário e pela lista: "Responder a semana (até R$ 1.093)" na segunda; "Marcar o aporte de novembro" no dia 5; "Cotar o seguro do Marcos" quando não há nada de dinheiro pendente. Um placar só, no Fazer: "Outubro: 4 de 7 · próxima: ...". Os outros números vão para Tarefas e Realizado.
- **Severidade:** alta.

### B16 — "Por que este passo" perdeu o sonho
- **Tela/cartão:** herói do Painel (completo).
- **Mecanismo:** motivação intrínseca e o princípio "o objetivo antes do número"; o propósito é o que dá sentido ao sacrifício de hoje.
- **Hoje:** "Sem reserva, um imprevisto sai do dinheiro dos objetivos e a data deles anda." (abstrato); na clínica, "Uma casa que seja de vocês, viagens com a Luiza e a liberdade aos 57."
- **Efeito provável:** o passo soa como regra financeira, não como proteção do que a família quer; a frase de medo sem o objeto da proteção é menos motivadora que a frase do sonho.
- **Recomendação:** juntar propósito e passo numa frase que nomeia: "Para a casa de vocês em jul/2030 e a liberdade aos 57, um imprevisto não pode sair do dinheiro deles. É isso que a reserva aceitável garante." O rótulo pode continuar "Por que este passo"; o conteúdo cita o sonho sempre, em todo degrau.
- **Severidade:** alta.

### B17 — Fazer e Saber como duas colunas iguais sob um título genérico
- **Tela/cartão:** Painel › "Melhorar o futuro financeiro · Um bom plano tem duas partes: fazer e saber."
- **Mecanismo:** coerência de estrutura (o cliente precisa ver que tudo serve ao mesmo passo); a sensação de "duas verticais soltas" vem da simetria.
- **Hoje:** título abstrato, duas colunas de mesmo peso, sem referência ao passo que está logo acima.
- **Efeito provável:** o passo (acima) e o trabalho (abaixo) parecem dois assuntos.
- **Recomendação:** o título da seção nomeia o passo: "O que a reserva aceitável pede de vocês". Dentro, Fazer é a coluna principal (a tarefa do dia, o teto, o aporte) e Saber é uma linha subordinada ("e 2 minutos para entender por quê: Reserva de emergência"). A mesma estrutura em todo degrau, só muda o passo.
- **Severidade:** média.

### B18 — Sobra sem destino e o "para o presente × para o futuro"
- **Tela/cartão:** Painel › Os próximos 12 meses; Objetivos ("vocês põem R$ 2.500 de R$ 3.233 de sobra").
- **Mecanismo:** mental accounting: dinheiro sem rótulo é gasto; dinheiro com nome de objetivo é guardado. "R$ 39,5 mil para o futuro" é um rótulo frio.
- **Hoje:** "R$ 152,5 mil para o presente · R$ 39,5 mil para o futuro"; a sobra de R$ 733/mês sem destino aparece só no pé de Objetivos.
- **Efeito provável:** R$ 733/mês evaporam; o 20% parece pouco porque não tem rosto.
- **Recomendação:** "R$ 39,5 mil para a Casa própria, a viagem e a liberdade"; e a linha "R$ 733 por mês ainda sem destino · dar aos atrasados, nesta ordem: Casa própria" com o toque que propõe à Patrícia (no completo) ou grava (nos outros degraus). É o nudge mais barato da tela.
- **Severidade:** média.

### B19 — Proteção: número de pilar no lugar do risco concreto
- **Tela/cartão:** "O que resolver" ("Saúde financeira · Proteção em 52"); Plano ("38% protegido · abaixo de 70%"); as duas tarefas burocráticas atrasadas são de proteção.
- **Mecanismo:** aversão à perda bem usada: funciona uma vez, com o risco nomeado e a ação ao lado; como porcentagem abstrata, vira ruído e alimenta o avestruz.
- **Hoje:** "Proteção em 52" e "38% protegido" sem dizer o que está desprotegido.
- **Efeito provável:** o cliente não liga "52" a "se o Marcos faltar, a Luiza fica com X"; as tarefas de seguro continuam as últimas da fila.
- **Recomendação:** uma linha só, concreta e sem repetição: "Se o Marcos faltar, a casa e a Luiza ficam com R$ X de cobertura por Y meses. A cotação resolve isso." Logo abaixo, a tarefa. Tirar "Proteção em 52" de "O que resolver"; o número fica no Plano, com a origem.
- **Severidade:** média.

### B20 — "Já sei isso" e "Já fiz" sem prova nem efeito no plano
- **Tela/cartão:** Saber (botão "Já sei isso" por capítulo; conquistas com "Já fiz").
- **Mecanismo:** endowed progress e autodeclaração: marcar o que se sabe é bom (reduz o começar do zero), mas sem a prova curta que a memória do projeto promete vira preenchimento vazio; e "Já fiz" de "O primeiro título" não muda nada no plano.
- **Hoje:** "Já sei isso" aprova o capítulo; "Já fiz" marca a conquista; nenhum dos dois leva a nada.
- **Efeito provável:** o cliente marca tudo numa visita e a trilha fica "completa" sem ter servido ao passo.
- **Recomendação:** "Já sei isso" abre as cinco perguntas na hora (prova curta); ao passar, "Agora, no seu plano: ver a reserva". "Já fiz" pede a data e, quando for o caso, grava no vetor ("primeiro título: Tesouro Selic, R$ 5 mil, 14/10"), para que o Saber alimente o Realizado.
- **Severidade:** baixa.

### B21 — Celular: o herói ocupa a tela e a ação some abaixo da dobra
- **Tela/cartão:** Painel no celular.
- **Mecanismo:** fricção e escolha única: no celular (saindo do WhatsApp) o cliente tem uma intenção; se ela não está na primeira tela, a visita termina.
- **Hoje:** "Por que este passo", três números e o cartão do passo ocupam mais de uma tela; a tarefa do dia vem depois.
- **Efeito provável:** o link do WhatsApp cai numa página que pede rolagem antes de deixar fazer.
- **Recomendação:** no celular, a primeira tela é a ação do dia (B15) com o passo em uma linha; o propósito e os três números vêm em seguida. Saber e Jornada em "Mais" é aceitável, desde que a pergunta do dia (B8) apareça no Painel.
- **Severidade:** média.

## Os 5 nudges mais importantes que faltam (em ordem)

### 1. Uma ação por visita, decidida pelo calendário
O botão do herói deixa de ser "Ver a reserva" e nomeia o gesto do dia, com valor e destino. O Painel sabe que dia é: segunda pede o compromisso da semana, o dia 5 pede o aporte, o resto da semana oferece a tarefa burocrática mais antiga. Tudo o mais fica um nível abaixo.
> **No alto do herói:** "O passo agora: completar a reserva aceitável · faltam R$ 11,5 mil · set/2027 no ritmo de hoje"
> **Botão:** "Marcar o aporte de novembro: R$ 2.500" (dia 5) · "Combinar a semana: até R$ 1.093" (segunda) · "Cotar o seguro do Marcos" (demais dias)
> **Linha abaixo:** "Depois disso: nada mais para hoje."

### 2. O feito ao lado do que falta
Uma faixa fixa no Painel e a trilha do mundo na Jornada, para que cada visita comece pelo que já andou (progress principle, endowed progress). As tarefas feitas aparecem com o que mudaram; a barra do passo mostra de onde partiu.
> **Faixa abaixo da saudação:** "Desde o plano de 26/09: 7 coisas feitas · a reserva foi de R$ 52 mil a R$ 60 mil · outubro com o aporte feito · a Patrícia respondeu em 15/10"
> **Barra do passo:** marcas "mínima R$ 40 mil · feita em ago/2026", "aceitável R$ 71,5 mil · agora", "ideal R$ 102,1 mil · depois", com o ponto "set/2026: R$ 52 mil"
> **Jornada › Construir:** "Primeiros R$ 500 · feito · Um mês de custo · feito · Reserva mínima · feito ago/2026 · Reserva aceitável · agora · Aporte automático · depois"

### 3. Nenhum atraso sem a saída ao lado
Vale para tarefa e para objetivo. O atraso é dito uma vez, em data neutra, e a frase seguinte é sempre o que o diminui. Nos objetivos, a regra de prioridade e o dinheiro que será liberado quando o passo fechar.
> **Tarefa:** "Cotar o seguro de vida do Marcos · combinada em 26/09 · uns 20 minutos com um dos dois corretores que a Nord indica"
> **Objetivo:** "Casa própria · jul/2030 · 26% guardado · no ritmo de hoje, set/2031 · com os R$ 1.000 da reserva a partir de set/2027, jul/2030"
> **Painel › Os objetivos (cabeçalho):** "2 de 6 na data · quando a reserva fechar, R$ 1.000/mês passam para os atrasados, nesta ordem"

### 4. O passo com data, ritmo e atalho
Todo passo responde três perguntas antes de qualquer botão: quanto falta, quando conclui no ritmo de hoje, o que encurta. A tela do passo lista as tarefas do passo e o passo seguinte. Ao concluir, o fechamento sóbrio em tela inteira, gravado na Jornada e enviado à planejadora.
> **Cartão do passo:** "Faltam R$ 11,5 mil · no ritmo de R$ 1.000/mês, set/2027 · com o resgate de R$ 42 mil do BTG que a Patrícia pediu, esta semana"
> **Ao concluir:** "Reserva aceitável completa. R$ 71,5 mil guardados entre ago/2026 e set/2027. A Casa própria e a viagem ficam protegidas de um imprevisto. O próximo passo: aporte automático no dia 5." · botão "Seguir"

### 5. "Um imprevisto?" e o Saber na hora da decisão
A entrada permanente que protege o plano na crise, e o módulo de 2 minutos que acompanha cada passo e tarefa. Os dois tratam o mesmo problema: o cliente decide melhor quando a ferramenta fala no momento da decisão, não antes nem depois.
> **Painel e Atendimento, discreto:** "Um imprevisto? Ver o que a reserva cobre" → "R$ 6 mil da reserva: ela fica em R$ 54 mil, recompõe em 6 meses e nenhum objetivo muda de data. Não pare o aporte da Casa própria." Saídas: usar a reserva · pausar um aporte (com a data nova) · falar com a Patrícia
> **Saber no Painel:** "Para o passo agora · Reserva de emergência · 2 min · por que ela fica no Tesouro Selic e não na caixinha da Casa própria" → ao responder: "Certo. A reserva de vocês cobre 5 dos 8 meses do alvo ideal."
> **Dentro da tarefa burocrática:** "Antes de cotar, 2 min: Seguro de vida com dependentes" (capítulo de Proteção a criar)

Quando estes cinco existirem, Fazer e Saber deixam de ser colunas e viram o que o passo pede; o Painel deixa de ser relatório e vira a espinha dorsal que o dono do produto sente faltar.
