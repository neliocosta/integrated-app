# Rodada 1 · Revisão de UX e jornada da área do cliente (03/11/2026)

Base: o inventário de 03/11, as 14 capturas (Painel completo, Tarefas, Saber, Passo, Jornada, Plano, Realizado, Objetivos, clínica, cadastrado, celular), o README e o UX.md da área logada, as personas de 31/10 e os princípios do DESIGN.md. O visual "Livro" não é discutido; o que se discute é a estrutura, a hierarquia, o agrupamento, a navegação, os estados e o texto.

## Diagnóstico de causa raiz

A página parece solta porque **não tem um modelo mental único que ordene os blocos, e sim uma coleção de respostas a perguntas** (o próprio histórico mostra isso: a rodada das vinte personas acrescentou um número ou uma linha para cada pergunta, e cada acréscimo virou um cartão com o mesmo peso dos outros). O produto tem um esqueleto claro e aninhado, objetivo → passo → tarefa (mundo → passo → tarefa no UX.md), mas o Painel não o desenha como aninhamento: o herói mostra o passo, a seção seguinte mostra tarefas sob um título genérico ("Melhorar o futuro financeiro"), e os objetivos, que deveriam ser o protagonista, aparecem no quarto bloco, no fim da coluna esquerda, depois de uma lista de alertas. No lugar da hierarquia, entrou um **segundo eixo** (Fazer × Saber) que divide a dobra mais nobre ao meio e dá ao Saber o mesmo peso da execução, embora o Saber seja apoio ao passo, não uma altura do esqueleto. A partir daí tudo se achata: todos os títulos de seção têm o mesmo tamanho em serifa, todos os cartões têm a mesma caixa branca, as duas colunas do desktop não têm regra de leitura (à esquerda "o que resolver" e "os objetivos", à direita "o teto", "a poupança", "12 meses", "quem acompanha", sem nenhuma relação declarada), a mesma contagem de execução aparece cinco vezes com cinco unidades diferentes, e o propósito da família, que daria o fio a tudo, é apagado de propósito no degrau completo (`proposito = null` em `montar()`). Não há "o que já foi feito" nem "o que vem depois" em nenhuma altura (nem no passo, nem na tarefa, nem no saber), então a tela só mostra o presente, e um presente sem antes e depois não lê como um plano sendo executado; lê como um painel de indicadores.

## Achados

Severidade: **alta** = compromete a leitura do plano como espinha dorsal ou a tese do produto; **média** = confunde ou custa esforço; **baixa** = polimento.

### U1 · Herói com dois protagonistas e sem propósito — alta
**Tela/bloco:** Painel, herói (01, 12, 13, 14).
**Princípio:** um protagonista por dobra; correspondência com o modelo do produto ("o protagonista é o objetivo").
**Problema:** à esquerda, a frase em serifa itálica de 30 px ("Sem reserva, um imprevisto sai do dinheiro dos objetivos e a data deles anda.") é visualmente o elemento mais forte da tela; à direita, o cartão em vidro traz outro elemento forte, "R$ 60 mil" em Sora de ~34 px com a única pílula laranja. O olho vai da frase ao número e volta, sem saber qual é o assunto. A frase é o "porquê" do passo, mas vem rotulada como se fosse um pensamento solto; o passo, que ela explica, está do outro lado do cartão. No degrau completo, o propósito da família ("Uma casa que seja de vocês, viagens com a Luiza e a liberdade aos 57") some, apesar de o plano publicado ter um capítulo inteiro chamado Propósito: o código zera `proposito` no completo. Só a clínica mostra o propósito. No celular (14) o herói ocupa mais de uma tela: frase de quatro linhas, três números, depois o cartão do passo, que é o que importa, abaixo da dobra.
**Recomendação:** um só protagonista no herói: **o passo a serviço do propósito**. Estrutura, de cima para baixo: rótulo "O propósito" com a frase da família em uma linha (serifa, menor que hoje, 20–22 px); o cartão do passo como peça única e centrada no herói, com o nome do passo como título ("Completar a reserva aceitável"), o critério ("R$ 60 mil de R$ 71,5 mil"), a barra, o porquê em uma linha de corpo ("protege a data dos objetivos") e a pílula. Os três números-chave viram uma linha discreta de rodapé do herói. Guardar o propósito no vetor do completo (vem do capítulo Propósito do relatório). No celular, o propósito em uma linha e o cartão do passo na dobra, como o UX.md já pedia ("o próximo passo fica acima da dobra").

### U2 · "Melhorar o futuro financeiro": título genérico e duas colunas de peso igual — alta
**Tela/bloco:** Painel, seção Fazer/Saber (01–02, 12–13).
**Princípio:** hierarquia da informação; correspondência com o esqueleto (mundo → passo → tarefa).
**Problema:** o título de seção não nomeia nada ("melhorar o futuro financeiro" é o produto inteiro) e o subtítulo explica a estrutura da tela em vez de falar com o cliente ("Um bom plano tem duas partes: fazer e saber"). Abaixo, duas colunas idênticas em largura, rótulo, link, subtítulo e cartão-placar: o Fazer (tarefas do passo, a altura micro do esqueleto) e o Saber (apoio educacional) ficam equivalentes. Isso cria um segundo eixo que compete com o eixo principal, e empurra os objetivos para o quarto bloco.
**Recomendação:** apagar o título e o subtítulo. O Fazer vira o bloco "Esta semana", ligado ao passo (ver proposta de arquitetura). O Saber sai da dobra nobre e entra como **uma linha dentro do bloco da semana** ("Os seus 5 minutos: CDI e Selic, que explica onde guardar a reserva"), sempre com a ligação ao passo ou à tarefa. A trilha inteira fica na aba Saber. Se o dono quiser manter "duas verticais conectadas", a conexão tem de ser desenhada: a linha de Saber nasce do passo, não fica ao lado dele.

### U3 · No Fazer não se vê o que já foi feito nem o que vem depois — alta
**Tela/bloco:** Painel › Fazer; Tarefas (02, 05).
**Princípio:** visibilidade do estado do sistema; senso de progresso (princípios de interface do UX.md).
**Problema:** "4 de 7 feitas" é só um número; as quatro feitas não aparecem em lugar nenhum do Painel, e em Tarefas ficam numa seção recolhida ("Respondidas 6"). Não há "o que vem depois": a lista termina em "mais 1 em aberto". O resultado é que o cliente que fez o aporte no dia 5 abre o Painel e não vê o aporte feito; só vê o que falta. A tese do produto é "marca se fez → o plano se ajusta e mostra a diferença", e a diferença não aparece.
**Recomendação:** no bloco "Esta semana", três faixas em uma coluna só: **Agora** (a próxima tarefa, aberta, com Fiz a um toque), **Feito** (as últimas duas respondidas, em cinza, com a data e, quando houver, o efeito: "aporte de outubro feito · a Casa própria segue para jul/2030") e **Depois** (a próxima data: "5/11: aporte de novembro, R$ 2.500"). Em Tarefas, abrir "Feitas" por padrão quando houve resposta na semana, e dar a cada feita o efeito no objetivo.

### U4 · No Saber não se vê a trilha — alta
**Tela/bloco:** Painel › Saber; aba Saber (02, 06).
**Princípio:** visibilidade do caminho; progressive disclosure invertida (o placar sem o conteúdo).
**Problema:** o cartão diz "A trilha — 0 de 4 capítulos — 1 conquista" e o cartão de baixo diz "Para começar... Veja os 4 capítulos", mas nenhum capítulo é nomeado. É um placar de uma trilha invisível. O cliente não sabe o que são os quatro capítulos, qual é o primeiro, nem por que faria isso agora. "1 conquista" sem nome é um número morto.
**Recomendação:** se o Saber ficar no Painel, mostrar a trilha em miniatura: os quatro capítulos como quatro pontos com nome, o atual em laranja, ou, melhor, uma linha só: "Capítulo 1 de 4, O dinheiro e o tempo · 3 módulos de 2 min · começa pela reserva". Trocar "1 conquista" por o que foi conquistado ("Reserva mínima formada"). Na aba Saber, pôr a trilha no topo como linha de pontos nomeados antes da lista de capítulos.

### U5 · Cinco contagens de execução na mesma tela — alta
**Tela/bloco:** Painel (01–04).
**Princípio:** consistência; carga cognitiva; um nome por número (UX.md).
**Problema:** "Nesta semana, 0 de 1 respondidas" (semana, unidade "respondidas"), "Neste mês 4 de 7 feitas" (mês, "feitas"), "2 atrasadas" (sem período), "O que resolver: 2 tarefas atrasadas" (de novo), "A poupança: 1 mês seguido com o aporte feito" (meses, "aporte"). Cinco janelas de tempo e três verbos para a mesma coisa. A pessoa 18 das personas ("está tudo em dia?") precisa conciliar cinco números para responder a uma pergunta.
**Recomendação:** uma contagem de execução no Painel, no ritmo combinado do cliente (UX.md › Ritmo): "Outubro: 4 de 7 feitas, 2 atrasadas". A da semana some (a semana aparece como lista, não como placar). "1 mês seguido" vira a linha do ritmo dentro do bloco do ano ("aportes no ritmo: 1 de 1 desde outubro"). O verbo é um só: "feitas" (ou "respondidas", mas não os dois).

### U6 · "O que resolver" duplica o placar e as tarefas e mistura naturezas — alta
**Tela/bloco:** Painel, coluna esquerda (02–04).
**Princípio:** não repetir; agrupar pelo tipo; o que falta some.
**Problema:** quatro linhas de quatro naturezas: uma tarefa atrasada (já listada 20 px acima, com o mesmo título "Cotar o seguro de vida do Marcos"), um pilar do exame ("Saúde financeira — Proteção em 52"), uma área do plano ("Reserva e liquidez — entre a mínima e a aceitável", que é exatamente o passo do herói) e uma reunião futura ("Aprofundar Investimentos — com o planejador, na próxima reunião · o plano está 94% preenchido"). O título em serifa tem o mesmo peso de "Os objetivos" e "O teto do mês". Em vez de resolver, a lista reabre o que a tela já disse e mistura a altura tarefa com a altura área.
**Recomendação:** retirar o bloco. Cada linha vai para onde pertence: tarefa atrasada no bloco da semana (já está); "Reserva entre a mínima e a aceitável" é o passo (já está no herói); "Proteção em 52" e "abaixo de 70% protegido" viram uma linha de atenção dentro do bloco "O plano" ou um chip no cartão Gestão de riscos do Plano, com a ação ("cotar o seguro", que é a tarefa); "Aprofundar Investimentos na próxima reunião" vai para o bloco "Com a Nord", ao lado da data do acompanhamento. Se o dono quiser manter um resumo de alertas, que seja uma linha só sob o herói ("2 atrasadas · proteção abaixo do alvo"), não um cartão.

### U7 · Coluna direita: quatro cartões sem relação entre si — média
**Tela/bloco:** Painel, coluna direita (02–04).
**Princípio:** agrupamento (proximidade e semelhança da Gestalt); desenhar o todo, não só cartões (UX.md).
**Problema:** "O teto do mês" (gasto, mês corrente), "A poupança" (aporte, série de meses), "Os próximos 12 meses" (renda prevista, ano), "Quem acompanha vocês" (relação). Quatro títulos iguais em serifa, quatro cartões, quatro assuntos. "A poupança" mostra um único quadradinho azul para "1 mês seguido" e uma linha de reforço redundante ("Nenhum mês ficou faltando"): um cartão inteiro para dizer "outubro: feito". "Os próximos 12 meses" fala em renda prevista e divide presente/futuro em R$ 152,5 mil / R$ 39,5 mil, uma visão de plano, não de execução, ao lado de dois cartões de execução.
**Recomendação:** um bloco só, **"O mês e o ano"**: o teto do mês (gastos ajustáveis), o aporte do mês (feito/planejado) e, numa linha, o ano ("em 12 meses, R$ 39,5 mil para o futuro de R$ 192 mil de renda; desde outubro, R$ 2.500 de R$ 2.500"). A série de meses vira a representação do ritmo do UX.md (doze colunas suaves), não um quadradinho. "Quem acompanha vocês" vai para o bloco "Com a Nord", junto com o próximo encontro e a próxima reunião.

### U8 · Duas colunas no desktop sem lógica de leitura; pilha diferente no celular — média
**Tela/bloco:** Painel (02–04 × 14).
**Princípio:** ordem de leitura previsível; coerência entre larguras.
**Problema:** no desktop a leitura em Z põe "O que resolver" ao lado de "O teto do mês" e "Os objetivos" ao lado de "A poupança", pares sem relação. A coluna esquerda é mais larga sem que isso signifique "mais importante" (a segunda coisa mais importante da tela, os objetivos, está na parte de baixo dela). No celular a ordem muda: herói → Fazer/Saber → O que resolver → **O teto do mês** → Os objetivos → A poupança → 12 meses → Quem acompanha; o teto do mês passa na frente dos objetivos, o que a ordem do desktop não sugere. As duas versões contam histórias diferentes.
**Recomendação:** uma ordem só, decidida no celular, e no desktop a mesma ordem numa coluna principal de leitura (até ~720 px) com um trilho lateral estreito para o que é contexto (o mês e o ano; com a Nord). A regra: a coluna principal é a espinha (propósito → passo → semana → objetivos); o trilho é o que acompanha. No celular, o trilho vem depois da espinha, na mesma ordem.

### U9 · Navegação: sete destinos sem hierarquia, "Mais" esconde o Saber, Passo e Realizado quase vazios — alta
**Tela/bloco:** cabeçalho, barra inferior, "Mais" (01, 07, 10, 14).
**Princípio:** arquitetura de navegação; consistência entre larguras; evitar destinos vazios.
**Problema:** no desktop sete abas iguais (Painel, Objetivos, Tarefas, Saber, Plano, Realizado, Jornada) mais "Atendimento" à direita, sem indicar que três delas (Realizado, Jornada, Saber) são secundárias. No celular, Saber vai para "Mais", enquanto o Painel o promove à metade da dobra mais nobre: o produto diz uma coisa na home e outra na barra. Passo é uma tela que o cartão do herói abre e que repete o cartão com uma linha a mais (07); Realizado é um cartão "Contra qual plano" e um botão "Lançar um mês" (10). Dois destinos quase vazios, e a Jornada (onde vive a escalada, o "já resolvido" e a relação) está escondida.
**Recomendação:** ver a proposta de navegação no fim: cinco destinos primários iguais nas duas larguras, "Mais" com os de consulta esporádica, e o Passo e o Realizado deixam de ser telas vazias (o Passo ganha conteúdo; o Realizado vira a segunda vista do Plano).

### U10 · A tela do Passo não tem a trilha de passos nem as tarefas do passo — alta
**Tela/bloco:** Passo (07).
**Princípio:** correspondência com o UX.md ("a tela do passo: o que pede, o critério, por quê, as tarefas do passo com as respostas, onde está na escalada"); progressive disclosure (a tela de detalhe tem de ter mais que o cartão).
**Problema:** a tela repete o cartão do herói (título, R$ 60 mil de R$ 71,5 mil, barra, a mesma frase) e acrescenta só "Passo sugerido pela escalada" e um link "Construir: Tenho base para subir?". Não lista as tarefas que cumprem o passo, não mostra os passos já feitos nem o seguinte dentro de Construir ("sobra automática · primeiros R$ 500 · reserva mínima · reserva aceitável · aporte no dia certo"), não diz quando conclui no ritmo de hoje, não diz qual objetivo protege. É a tela que daria a sensação de "plano sendo executado" e está vazia.
**Recomendação:** quatro partes, nesta ordem: (1) o passo com critério, barra e previsão ("no ritmo de hoje, mar/2027; com mais R$ 500, dez/2026"); (2) **a trilha deste mundo**, uma lista vertical de passos com os feitos marcados e datados, o atual em destaque, os seguintes em cinza, sem nome de mundo no título (o nome fica no rodapé como hoje); (3) **as tarefas deste passo**, com a resposta de cada uma; (4) o porquê, com o objetivo que o passo protege, em link. É aqui, não no Painel, que a trilha aparece no uso diário, e isso respeita a decisão de não mostrar o mapa dos sete mundos.

### U11 · A Jornada mostra a escalada como sete segmentos de barra, sem conteúdo — média
**Tela/bloco:** Jornada (08).
**Princípio:** o conteúdo que o UX.md atribui à Jornada (mundos conquistados, o que já está resolvido, marcos, os três números, quem definiu o foco) não está lá.
**Problema:** a escalada é uma barra de sete segmentos com nomes em 10 px e uma frase; não diz o que ficou resolvido ao sair de Sobreviver e Descobrir ("orçamento que fecha", "plano"), não mostra os passos do mundo atual, não traz os três números (caminho até a liberdade, o ano, o ritmo), não diz "foco escolhido pela Patrícia em 26/09". A coluna esquerda tem duas linhas do tempo ("A relação com a Nord" e "O histórico") com eventos repetidos (a apresentação de 26/09 aparece nas duas).
**Recomendação:** uma linha do tempo só (relação + histórico, do mais recente ao primeiro, com o resumo de cada reunião e as tarefas que nasceram dela), e a escalada como lista vertical dos sete mundos: os passados com "resolvido: orçamento, plano", o atual aberto com a trilha de passos e os marcos, os futuros em cinza, "não se aplica" quando for o caso. Os três números no alto da coluna.

### U12 · O Saber é uma lista uniforme, sem ordem recomendada nem ligação com o passo — média
**Tela/bloco:** Saber (06).
**Princípio:** relevância (recomendado para o seu passo, UX.md › jornada educacional); hierarquia na lista.
**Problema:** quatro capítulos iguais, na mesma ordem para todo cliente, cada um com três módulos de 2 min e um botão secundário "Já sei isso" em cinza. Nada diz "comece por este"; nada liga "Reserva de emergência" ao passo "Completar a reserva aceitável" nem "PGBL e VGBL" à tarefa "Indicar os beneficiários do VGBL". A faixa "Por onde começar: marque os capítulos que você já domina" é a única orientação, e é uma instrução de interface, não de conteúdo. Não há capítulo de proteção, embora a tarefa atrasada seja cotar um seguro; nem de orçamento; nem de liberdade.
**Recomendação:** dividir a lista em "Para o seu passo agora" (os módulos ligados ao passo e às tarefas abertas, com a frase de ligação: "explica onde guardar a reserva") e "O resto da trilha". Dentro de cada capítulo, o estado por módulo (feito / provado / por fazer). "Já sei isso" vira uma ação por módulo, com o rótulo do que acontece ("Provar em 5 perguntas"). Nomear os capítulos que faltam (proteção, orçamento, liberdade) na ordem dos mundos.

### U13 · O Plano como grade de onze cartões iguais — média
**Tela/bloco:** Plano (09).
**Princípio:** agrupamento; hierarquia; rótulos compreensíveis.
**Problema:** onze cartões da mesma largura, sem ordem explicável (Saúde financeira, Gestão financeira, Dívidas, Objetivos, Reserva, Riscos, Patrimônio, Investimentos, Impostos, Liberdade, Evolução), com um rótulo críptico "6 de 6", "12 de 12", "3 de 6" sob o nome (a profundidade, mas nada diz isso) e um anel "94% aprofundado" no topo, jargão interno do portal do consultor. Os cartões em alerta (Proteção em 52, abaixo de 70%, 4 pedem ajuste) não se destacam dos demais além da cor do texto pequeno.
**Recomendação:** agrupar as onze áreas em três faixas com título: **Onde estamos** (Saúde financeira, Gestão financeira, Dívidas, Patrimônio), **Para onde vamos** (Objetivos, Reserva, Liberdade, Evolução) e **Como protegemos e fazemos render** (Riscos, Investimentos, Impostos). Trocar "6 de 6" por uma legenda única no topo ("cada área mostra até onde o plano foi: 6 de 6 é completa") ou por um traço discreto sem número. Trocar "94% aprofundado" por "Falta aprofundar: Investimentos, na reunião de 26/03". Os cartões com alerta vêm primeiro dentro da faixa.

### U14 · Estados vazios: o Realizado quase vazio e o Painel sem estado de "tudo em dia" — média
**Tela/bloco:** Realizado (10); Painel.
**Princípio:** "o que falta some" (UX.md); estados vazios que orientam.
**Problema:** o Realizado é uma tela com um cartão de explicação ("Contra qual plano: cada mês é comparado com a versão do plano que valia nele...") e um cartão com um único número (R$ 2.500 de R$ 2.500, "out: fiz"), mais um botão "Lançar um mês". Para um cliente com um mês de execução é uma tela vazia que explica a si mesma. O Painel, por sua vez, não tem o estado "tudo feito nesta semana" nem o estado "os passos de agora estão cumpridos" desenhados além de uma frase.
**Recomendação:** com menos de três meses de registro, o Realizado não é destino: o seu único número vai para o bloco "O mês e o ano" do Painel, e a aba aparece quando houver o que comparar (ou vira a segunda vista do Plano, ver navegação). O estado vazio do bloco da semana diz a próxima data ("Nada para esta semana. A próxima é em 5/11: R$ 2.500 para os objetivos"), como o UX.md descreve.

### U15 · Nomes inconsistentes para a mesma coisa — média
**Tela/bloco:** toda a área.
**Princípio:** consistência e padrões (Nielsen 4).
**Problema:** a aba se chama "Tarefas" e o bloco do Painel "Fazer" (link "As tarefas"); a aba "Saber" e o bloco "Saber" com link "A trilha" e cartão "A trilha"; "Atendimento" no cabeçalho e "Quem acompanha vocês" no cartão (e "Conversas" no UX.md); "O passo agora" no herói e "O que resolver" como lista que repete o passo; "respondidas" (semana, Tarefas) e "feitas" (mês); "Melhorar o futuro financeiro" não corresponde a nenhum destino. O cliente aprende cinco nomes para três coisas.
**Recomendação:** um nome por destino, usado igual no cabeçalho, na barra, no rótulo do bloco e no link: Tarefas (bloco "Esta semana", link "Todas as tarefas"), Saber (bloco e link "Saber"), Conversas ou Atendimento (um só, no cabeçalho e no cartão), Passo (o cartão, a tela e o link "Ver o passo"). Um verbo para a execução: feitas.

### U16 · Microcopy com jargão do planejador — média
**Tela/bloco:** Painel, Plano, Tarefas, Saber.
**Princípio:** linguagem do usuário (Nielsen 2); "o objetivo antes do número".
**Problema:** "reserva aceitável" (termo da calculadora; o cliente não sabe que existe mínima, aceitável e ideal), "gastos ajustáveis, as fixas à parte", "94% aprofundado / preenchido", "6 de 6", "marcação a mercado", "come-cotas", "Proteção em 52" (pilar do exame, parece dinheiro), "o plano fecha" (selo que o cliente lê como "fechou"?), "Comportamental · os dois", "Burocrática" como rótulo de categoria (etiqueta interna que o cliente vê acima da tarefa), "Passou R$ 193 nas semanas respondidas". Os rótulos de categoria em cima de cada tarefa ocupam a primeira linha do cartão, antes do que importa (o título).
**Recomendação:** no herói e no passo, explicar o alvo na primeira vez ("a reserva que cobre 6 meses: R$ 71,5 mil"); "gastos que vocês controlam" em vez de "ajustáveis"; tirar "aprofundado" e "6 de 6" da vista do cliente; "Proteção" sempre com o sufixo "pilar do exame"; categoria da tarefa como segunda linha ou ícone, não como primeira; "fechado na data" ou "chega na data" em vez de "o plano fecha".

### U17 · Objetivos atrasados sem a saída — alta
**Tela/bloco:** Painel › Os objetivos; Objetivos (03–04, 11).
**Princípio:** "uma falta sempre vem com uma saída que cabe no bolso" (princípio da área); o objetivo é o protagonista.
**Problema:** quatro dos seis objetivos trazem um selo laranja "atrasa 14 meses", "atrasa 8 meses", "atrasa 2 anos", "atrasa 3 anos", e nada ao lado diz o que fazer. A lista é o quarto bloco da tela, abaixo de "O que resolver". Em Objetivos, a régua "O sonho e o plano" tem o controle deslizante que mostra a saída ("Para todos chegarem na data: R$ 4.350 por mês"), mas o Painel não aponta para ela. O protagonista do produto chega atrasado e sem fala.
**Recomendação:** subir "Os objetivos" para logo depois do bloco da semana (o passo e as tarefas existem para eles). Em cada linha atrasada, a saída em uma frase curta: "atrasa 14 meses · com R$ 2.420 por mês, jul/2030". Acima da lista, a linha do UX.md: "Os objetivos juntos pedem R$ 5.565 por mês; vocês põem R$ 2.500. Ver como priorizar". O selo verde/laranja continua, mas sempre com texto.

### U18 · A reserva com três alvos diferentes, sem a escada — média
**Tela/bloco:** herói, Plano › Reserva, cadastrado (01, 09, 13).
**Princípio:** consistência; um nome por número.
**Problema:** herói "R$ 60 mil de R$ 71,5 mil" (aceitável), Plano "R$ 60 mil de R$ 102,1 mil" (ideal), cadastrado "R$ 38 mil de R$ 40 mil" (mínima). A pessoa 6 das personas ("posso tirar da reserva?") vê três denominadores sem saber que são degraus da mesma escada. Em nenhum lugar da home a escada mínima → aceitável → ideal é mostrada.
**Recomendação:** no cartão do passo e na tela do Passo, uma barra com três marcas nomeadas (mínima R$ 40 mil · aceitável R$ 71,5 mil · ideal R$ 102,1 mil) e o valor atual sobre ela; o passo diz qual marca é a próxima. O Plano usa a mesma barra.

### U19 · Densidade e respiro: tudo com o mesmo peso — média
**Tela/bloco:** Painel (02–04).
**Princípio:** hierarquia tipográfica; proximidade.
**Problema:** os títulos de seção ("Melhorar o futuro financeiro", "O que resolver", "Os objetivos", "O teto do mês", "A poupança", "Os próximos 12 meses") têm o mesmo tamanho e a mesma fonte; o rótulo "Fazer" e "Saber" é menor do que o título da seção que os contém, mas o conteúdo deles é mais importante. Os cartões-placar (Neste mês / A trilha) têm a mesma caixa que os cartões de tarefa abaixo, então o placar lê como "mais uma tarefa". A lista de objetivos empilha seis linhas com três informações cada (data, % guardado, previsão) mais barra e selo, sem respiro entre elas. O espaço entre blocos é o mesmo que o espaço entre cartões dentro de um bloco, então o agrupamento não se vê.
**Recomendação:** três níveis tipográficos só: título de bloco (um por bloco, serifa), rótulo de faixa dentro do bloco (DM Sans, cinza, caixa normal) e corpo. Espaço entre blocos ≥ 2× o espaço entre cartões. Os placares deixam de ser cartões e viram uma linha de texto sob o título do bloco ("Outubro: 4 de 7 feitas · 2 atrasadas"). Os objetivos em linhas com duas informações (data e situação); o resto no toque.

### U20 · Acessibilidade: cor como único sinal, texto laranja pequeno e contraste sobre a foto — média
**Tela/bloco:** selos dos objetivos, chips do Plano, herói, tarefas (01, 03, 09).
**Princípio:** WCAG 1.4.1 (uso da cor) e 1.4.3 (contraste); rótulos.
**Problema:** no visual Livro os chips são um ponto colorido de 6 px mais texto na mesma cor; o texto carrega o sentido (bom), mas é laranja em 11,5 px, o que o DESIGN.md proíbe ("não usar o laranja em texto pequeno, porque não passa no contraste"); o mesmo vale para os subtítulos laranja de "O que resolver" e "atrasada há 10 dias". No herói, o rótulo "Por que este passo" e os três números em branco ficam sobre a parte clara da foto (névoa), com o gradiente a .18 de opacidade no meio; o contraste cai onde o texto é menor. O círculo de marcar "fiz" não tem rótulo visível nem texto alternativo evidente; o botão de conversa é só um ícone. Os segmentos da escalada na Jornada diferenciam o atual só pela cor.
**Recomendação:** chips com texto em "atenção-texto" escuro (#964400) ou no marinho, mantendo o ponto como reforço; laranja só na pílula e nas barras. No herói, escurecer o gradiente sob o texto ou pôr os números-chave fora da foto. Rótulo "Marcar como feita" no círculo (visualmente oculto) e "Conversar" no botão. Na escalada, o atual com peso e um marcador textual, não só cor.

### U21 · Padrões de referência: trilha + hoje + histórico numa tela só — média
**Tela/bloco:** Painel; Passo.
**Princípio:** padrões consagrados de "plano em execução".
**Problema:** a tela mostra só o presente. Origin e Monarch resolvem "patrimônio hoje" com uma linha do tempo que mostra o antes (os últimos meses) e a projeção à frente no mesmo gráfico, com o número grande de hoje por cima; Copilot e YNAB mostram o mês como um recipiente que se enche (gasto até agora / limite / o que sobra para os dias restantes), uma figura só; o Duolingo, estruturalmente, mostra a unidade atual em destaque com as lições já feitas em cor sólida acima e as próximas em cinza abaixo, de modo que "onde estou" e "o que já fiz" são a mesma figura. A área tem as três alturas descritas, mas em nenhuma delas o feito e o seguinte aparecem junto do atual.
**Recomendação:** adotar a figura "feito · atual · próximo" em cada altura: no Passo, a trilha de passos do mundo (vertical, sóbria); no bloco da semana, as faixas Feito / Agora / Depois; no bloco do mês, o recipiente do teto com os dias restantes (já existe a frase, falta a figura) e os doze meses do ritmo com o passado preenchido. A regra é: toda figura de progresso mostra pelo menos um item anterior e um posterior ao atual.

### U22 · Números que o Painel esconde ou mistura — baixa
**Tela/bloco:** Painel, Plano (03, 09).
**Princípio:** visibilidade; correspondência entre home e Plano (regra das personas: "a home não pode contradizer o Plano").
**Problema:** "Dívidas R$ 368 mil" está no Plano e não aparece no Painel, nem nos números-chave nem nos objetivos; "Saúde financeira — Proteção em 52" junta a nota geral (71) e um pilar na mesma linha; "Liberdade financeira · aos 57 · 12% do caminho" aparece como linha de objetivo, mas o UX.md a trata como número macro (caminho até a liberdade), que fica na Jornada.
**Recomendação:** se há dívida, ela entra nos números-chave do herói ("Dívidas R$ 368 mil"); "Proteção" com o nome completo ("pilar Proteção do exame: 52"); a liberdade continua primeira linha dos objetivos (decisão das personas), mas com "12% do caminho" explicado no toque.

### U23 · Cabeçalho: ação de conversa sem rótulo e duplicada — baixa
**Tela/bloco:** cabeçalho e cartão "Quem acompanha vocês" (01, 04).
**Princípio:** reconhecimento em vez de memória; consistência.
**Problema:** o ícone de balão ao lado da saudação não diz o que faz; "Atendimento" fica no outro canto do cabeçalho; "Quem acompanha vocês" repete a planejadora no pé da coluna direita. Três entradas para "falar com alguém".
**Recomendação:** uma entrada no cabeçalho, com rótulo ("Conversar com a Patrícia" ou "Atendimento", um só nome), com o contador do que espera resposta; o cartão da planejadora fica no bloco "Com a Nord" e leva à mesma tela.

### U24 · "E ao mesmo tempo": o segundo passo escondido no pé do cartão — baixa
**Tela/bloco:** herói, cartão do passo (01, 12).
**Princípio:** hierarquia; um passo por vez.
**Problema:** a linha "E ao mesmo tempo: Viagem a Fortaleza — R$ 420 por mês até mai/2028" é um segundo compromisso num cartão cujo título diz "O passo agora", em 12 px, sob uma linha fina. Ou é parte do passo, ou é tarefa (o aporte do mês): como está, é um rodapé que ninguém lê.
**Recomendação:** o aporte do mês é uma tarefa de "dedicar dinheiro" e vive no bloco da semana ("5/11: R$ 2.500, dos quais R$ 420 para Fortaleza"). O cartão do passo fica com um passo só.

## Proposta de arquitetura do Painel

Regra de hierarquia: **um protagonista por dobra, e cada bloco responde a uma pergunta, na ordem em que o cliente a faz** (para quê → o que agora → o que esta semana → como vão os objetivos → como está o mês e o ano → com quem). Nenhum bloco repete um número de outro bloco. Cada bloco tem um título de serifa, uma linha de síntese e, no máximo, um cartão ou uma lista. A ordem é a mesma no celular e na coluna principal do desktop.

| # | Bloco (nome na tela) | Pergunta | O que agrupa | Dobra |
|---|---|---|---|---|
| 1 | **O propósito e o passo** (herói) | Para quê, e o que agora? | A frase do propósito em uma linha; o cartão do passo (título, critério com barra de três marcas, previsão no ritmo de hoje, por quê em uma linha, pílula "Ver o passo"); no rodapé do herói, os números-chave (patrimônio, reserva, dívida se houver, nota do exame) em texto pequeno fora da parte clara da foto | 1ª (celular: propósito + cartão do passo cabem em 640 px) |
| 2 | **Esta semana** | O que faço agora, o que já fiz? | Linha de síntese única de execução ("Outubro: 4 de 7 feitas · 2 atrasadas"); faixa **Agora** (uma tarefa aberta com Fiz a um toque, mais "mais 2 em aberto"); faixa **Feito** (as duas últimas, com data e efeito); faixa **Depois** (a próxima data); uma linha de Saber ligada ao passo ("5 minutos: CDI e Selic, que explica onde guardar a reserva") | 2ª |
| 3 | **Os objetivos** | Como vão os sonhos? | Liberdade na primeira linha; até seis objetivos com data, situação em texto e, quando atrasado, a saída em uma frase; acima da lista, a linha "os objetivos juntos pedem R$ X; vocês põem R$ Y · ver como priorizar" | 3ª |
| 4 | **O mês e o ano** | O dinheiro está indo como combinado? | O teto do mês como recipiente (gasto / teto / o que sobra para as semanas que faltam); o aporte do mês (feito/planejado); o ritmo em doze colunas (planejado × feito), com a linha "desde outubro, R$ 2.500 de R$ 2.500"; o ano em uma linha ("R$ 39,5 mil para o futuro de R$ 192 mil de renda") | 4ª (trilho no desktop) |
| 5 | **O plano** (atenção) | Alguma área pede atenção? | Só as áreas em alerta, em uma linha cada, com a ação ("Proteção abaixo do alvo · cotar o seguro de vida"; "Investimentos: aprofundar na reunião de 26/03"); se nada em alerta, uma linha "As onze áreas em dia · Ver o plano". Substitui "O que resolver" | 4ª (trilho) |
| 6 | **Com a Nord** | Com quem falo, quando é o próximo encontro? | A planejadora com o link de conversa; o próximo encontro ("1º acompanhamento · 26/03/2027"); a próxima live ou monitoria | 5ª (trilho) |

**Desktop:** o herói na largura toda; abaixo, coluna principal (blocos 2 e 3, ~720 px, é a espinha) e trilho lateral à direita (blocos 4, 5 e 6, ~320 px, é o contexto). A regra de leitura: a coluna principal é lida de cima a baixo como um texto; o trilho é consultado. Os títulos do trilho um degrau menores que os da coluna principal.
**Celular:** a mesma sequência 1 → 6 empilhada, sem reordenação. O bloco 4 pode vir recolhido com a linha de síntese visível ("Outubro: R$ 3.270 de R$ 5.300 · aporte feito").

O que sai do Painel: o título "Melhorar o futuro financeiro" e o subtítulo; a coluna Saber (vira uma linha no bloco 2); o cartão "O que resolver"; o cartão "A poupança" como cartão separado; a contagem da semana; a linha "E ao mesmo tempo" no cartão do passo. O que entra: o propósito no completo; o feito e o depois; a saída dos objetivos atrasados; a escada da reserva.

Para os quatro degraus, a mesma estrutura: no visitante, o bloco 1 é o convite ao exame e os blocos 2–6 mostram o que existe (o UX.md já descreve); no cadastrado, o bloco 5 some quando não há área em alerta e o 6 traz "Marcar a reunião de avaliação"; na clínica, o bloco 6 traz a consultora da clínica e o check-up. Só a profundidade muda.

## Proposta de navegação

**Cinco destinos primários, iguais no desktop e no celular:** Painel · Objetivos · Tarefas · Plano · Saber. O Saber entra na barra porque o Painel o promove; se o dono preferir o Saber fora da barra, ele também sai da dobra nobre do Painel (a barra e a home têm de contar a mesma história).

**"Mais"** (no celular, o quinto botão; no desktop, um grupo separado à direita das cinco abas, com um divisor): Jornada · Realizado · Utilitários (quando existirem). **Conversas/Atendimento** (um nome só) é o botão do cabeçalho com contador, nas duas larguras, como o UX.md já pedia; sai do grupo de abas.

**Para onde vão as três telas:**
- **Passo**: continua como tela aberta pelo cartão do herói e pela Jornada, não é aba. Ganha o conteúdo do U10 (trilha do mundo, tarefas do passo, previsão, objetivo protegido). É a única tela onde a trilha de passos aparece no uso diário; a escalada dos sete mundos continua só na Jornada.
- **Jornada**: fica em "Mais" como destino de consulta (fechamento do ano, véspera da reunião), com uma linha do tempo só (relação + histórico), a escalada vertical com o resolvido e o que falta, os marcos e os três números. O Painel aponta para ela a partir do passo ("onde isso está no caminho") e do bloco "Com a Nord".
- **Realizado**: deixa de ser um destino separado enquanto houver menos de três meses de registro (o número único vai para o bloco "O mês e o ano"); quando há o que comparar, vira a **segunda vista do Plano** (alternância "O plano | O realizado" no topo da aba Plano, onde cada área mostra o planejado e o que aconteceu, contra a versão vigente), ou um item de "Mais" para quem prefere mantê-lo separado. "Lançar um mês" é uma ação dentro dessa vista, não uma tela.

Com isso o cliente tem três perguntas na barra (o que fazer: Tarefas; para quê: Objetivos; onde estão os números: Plano), uma de apoio (Saber) e a casa (Painel); as de consulta esporádica ficam em "Mais" e os destinos vazios desaparecem.
