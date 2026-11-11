# Revisão da área do cliente · Documento 1: o que fazer (03/11/2026)

Primeira rodada de quatro revisões independentes sobre `area-cliente.html` como está hoje (inventário em
[inventario.md](inventario.md), pareceres completos em [rodada-1/](rodada-1/)): um **planejador financeiro** (P), a
**cliente** Ana, com Marcos e uma pessoa cadastrada em segundo plano (C), um especialista em **psicologia
comportamental** (B) e um especialista em **UX e jornada** (U). Este documento junta os quatro num plano de ação.
Nada aqui é código; é o que fazer e em que ordem. As restrições do dono valem em tudo: tom sóbrio, sem emoji, medalha,
mascote ou jogo; a mesma estrutura para todo degrau; o objetivo é o protagonista; a escalada é o esqueleto, mas o mapa
dos sete mundos só aparece na Jornada; visual Livro decidido.

## 1. O diagnóstico em que os quatro concordam

Os quatro revisores chegaram, por caminhos diferentes, ao mesmo lugar:

1. **O Painel não desenha o esqueleto do produto.** O produto tem uma hierarquia aninhada (propósito → objetivos →
   mundo → passo → tarefa), mas a tela mostra o passo no herói, as tarefas sob um título genérico ("Melhorar o futuro
   financeiro"), os objetivos no quarto bloco e uma coleção de cartões de peso igual depois. Cada acréscimo das rodadas
   anteriores virou um cartão igual aos outros (U). O resultado é um painel de indicadores do presente, não um plano
   sendo executado.
2. **Fazer e Saber não são duas verticais; são dois braços do passo.** A simetria das colunas sob um slogan é o que
   as faz parecer soltas. O Saber é apoio à decisão do momento, não uma altura do esqueleto (P3, C8, B7, B17, U2).
3. **O passado não existe na tela.** Tarefas feitas somem, a barra do passo não tem ponto de partida, o Realizado está
   vazio, a Jornada não tem passo concluído, o "+7, era 64" fica escondido no Plano. Sem antes e depois, nada lê como
   progresso (P10, C7, B3, U3, U21).
4. **Toda falta aparece sem a saída.** Duas tarefas atrasadas ditas três vezes em laranja, quatro objetivos que "atrasam
   anos" sem dizer que é por desenho do plano nem o que fecha a data, "Proteção em 52" sem o risco em dinheiro. O
   efeito é vergonha e descrédito, não ação (P5, C3, C4, B1, B2, U17).
5. **O passo não tem motor nem horizonte.** "Completar a reserva aceitável" não tem trilha do mundo, data prevista,
   tarefas ligadas a ele, nem o atalho que já existe nos dados (o resgate do BTG). A tela do Passo repete o cartão (P2,
   C15, B5, U10).
6. **Os números não batem entre telas.** Três alvos para a reserva (R$ 40 mil, R$ 71,5 mil, R$ 102,1 mil), quatro
   valores para o aporte (R$ 2.500, R$ 3.233, R$ 3.330, R$ 39,5 mil/ano), dois números para proteção (52 e 38%), cinco
   contagens de execução. O cliente desconfia ou escolhe o número mais confortável (P6, P8, P9, C2, C6, B6, B15, U5,
   U18).
7. **Nada chama de volta.** Entre visitas só o contador de atraso muda; o próximo marco com data é a reunião de março;
   o único botão principal manda "ver" (C20, B12, B15).

A cliente acrescenta uma discordância útil: o problema maior não é a ligação Fazer/Saber, é que a home não responde
"estamos no rumo?" (domingo) nem "o que faço hoje?" (terça) na primeira dobra. Resolvido isso, a ligação vira detalhe.

## 2. O que cada revisor viu que os outros não viram

- **Planejador:** a proteção é a única lacuna que destrói o plano de um dia para o outro (38% com uma filha e um
  financiamento de R$ 368 mil) e está tratada como tarefa "Burocrática"; a dívida de R$ 368 mil não aparece no Painel e
  "amortizar ou investir" é a decisão de maior valor do casal; nenhuma tarefa de outubro leva dinheiro ao passo da
  reserva; "o plano fecha" na liberdade sem a condição; nada prepara a reunião de 26/03; o exemplo se contradiz
  (apartamento financiado como moradia e objetivo "Casa própria: sair do aluguel").
- **Cliente:** o teto da semana não é respondível (ninguém soma gastos por semana, "ajustáveis" não está definido);
  um imprevisto não tem onde entrar (nem "usei a reserva" nem onde a reserva está); o cadastrado recebe uma tarefa
  "atrasada" de um plano que não existe e que contradiz o passo; "Intercâmbio do filho" para a Luiza; "Adiar" é a saída
  mais fácil para a tarefa mais importante.
- **Comportamental:** a folha da tarefa já tem Fiz / Fiz parte / Não fiz / Adiar com as quatro saídas, mas nada disso
  chega ao Painel; o aporte não é automático e o "dia do aporte" não existe na tela; concluir um passo ou um capítulo
  não produz nada (sem peak-end); a sobra de R$ 733/mês sem nome evapora; o Save More Tomorrow do 13º.
- **UX:** o propósito é apagado no código no degrau completo; o celular e o desktop contam histórias diferentes
  (ordens distintas); o Saber é promovido na home e escondido em "Mais" na barra; texto laranja pequeno fora do
  contraste que o DESIGN.md proíbe; três entradas para "falar com alguém"; onze cartões iguais no Plano com "6 de 6"
  sem explicação.

## 3. O que fazer

Cada ação traz a origem entre colchetes e a prioridade: **1** (muda a leitura da área; fazer primeiro), **2**
(corrige confusão ou perda real), **3** (polimento). As ações estão agrupadas por tela; a ordem de execução sugerida
está na seção 4.

### A. O Painel: uma espinha, uma ordem, um protagonista por dobra

**A1. Adotar uma ordem única de blocos, igual no celular e na coluna principal do desktop** [U8, U19, P ordem ideal,
C1]. Prioridade 1. De cima para baixo:

| # | Bloco | Pergunta que responde | O que contém |
|---|---|---|---|
| 0 | Saudação e **a linha de situação** | Está tudo em dia? | Uma frase com até três fatos e um verbo, que muda de semana para semana: "Outubro: aporte feito · 2 tarefas para esta semana · 2 de 6 objetivos na data". Quando houver novidade desde a última visita, ela entra aqui ("desde 13/10: a Patrícia respondeu; a reserva subiu R$ 1.000"). |
| 1 | **O propósito e o passo** (herói) | Para quê, e o que agora? | O propósito da família em uma linha (em todo degrau que o tenha); o cartão do passo como peça única; os números-chave em rodapé discreto (patrimônio, reserva em meses de custo, dívida se houver, nota do exame). |
| 2 | **O que o passo pede** (Fazer, com o Saber pendurado) | O que faço hoje, o que já fiz, o que vem? | Um placar só; faixas Agora / Feito / Depois; o teto da semana aqui, com a consequência; uma linha de Saber ligada ao passo ou à tarefa aberta. |
| 3 | **Os objetivos** | Os sonhos vão acontecer? | Liberdade na primeira linha; cada atrasado com a saída; acima da lista a regra de prioridade e a sobra sem destino. |
| 4 | **Pendências fora do passo** | O que pode derrubar o plano? | Só o que não está no passo nem nas tarefas: proteção (o risco em dinheiro e a ação), dívida (amortizar ou investir), prioridade dos objetivos. Some quando vazio. |
| 5 | **O mês e o ano** | O dinheiro vai como combinado? | O teto do mês como recipiente, o aporte do mês, o ritmo em doze posições, o ano em uma linha. |
| 6 | **Com a Nord** | Com quem falo, quando, sobre o quê? | A planejadora, o próximo encontro, o que ficou da última reunião e a pauta da próxima. |

No desktop: herói na largura toda; blocos 2 e 3 na coluna principal (a espinha); blocos 4, 5 e 6 num trilho lateral
estreito, com títulos um degrau menores. No celular: a mesma sequência 0 → 6 empilhada; o bloco 5 pode vir recolhido com
a linha de síntese visível.

**A2. Devolver o propósito ao herói em todo degrau que o tenha** [P1, C17, B16, U1]. Prioridade 1. No completo, o
código zera o propósito embora o relatório tenha o capítulo Propósito. O rótulo "Por que este passo" fica, mas a frase
nomeia o sonho: "Para a casa de vocês em jul/2030 e a liberdade aos 57, um imprevisto não pode sair do dinheiro deles. É
isso que a reserva aceitável garante."

**A3. Um só protagonista no herói** [U1, B21, P20]. Prioridade 1. Hoje a frase itálica à esquerda e o "R$ 60 mil" à
direita disputam o olhar. O herói passa a ter o propósito em uma linha menor no alto e o cartão do passo como peça
única; os três números-chave saem da parte clara da foto e viram rodapé. No celular, propósito e cartão do passo cabem
na primeira tela; o botão principal fica visível sem rolar.

**A4. O botão do herói nomeia a ação do dia, decidida pelo calendário** [B15, nudge 1, C1]. Prioridade 1. Em vez de
"Ver a reserva" (leitura), o botão diz o gesto: segunda, "Combinar a semana: até R$ 1.093"; dia do aporte, "Marcar o
aporte de novembro: R$ 2.500"; nos outros dias, a tarefa aberta mais importante ("Cotar o seguro do Marcos"). Abaixo,
"Depois disso, nada mais para hoje." O "Ver o passo" vira link secundário.

**A5. Apagar o título "Melhorar o futuro financeiro" e as duas colunas iguais** [P3, C8, B17, U2]. Prioridade 1. O
bloco se chama pelo passo ("O que a reserva aceitável pede de vocês") ou simplesmente "Esta semana". Fazer é a coluna;
Saber é uma linha subordinada dentro dela (ver D1).

**A6. Uma contagem de execução só** [P9, C6, B15, U5]. Prioridade 1. Sai "Nesta semana, 0 de 1 respondidas"; sai a
repetição em "O que resolver"; "A poupança" deixa de ser cartão. Fica uma linha sob o título do bloco 2: "Outubro: 4 de
7 feitas · 2 para esta semana". Um verbo só em toda a área: feitas.

**A7. Retirar o cartão "O que resolver" e devolver cada linha ao seu lugar** [P13, C12, U6]. Prioridade 1. A tarefa
atrasada já está no bloco 2; a reserva é o passo; "Aprofundar Investimentos, com o planejador" vai para a pauta no
bloco 6. Proteção e dívida ficam no bloco 4, "Pendências fora do passo", cada uma com a ação; o bloco some quando não
há nada.

**A8. Juntar "O teto do mês", "A poupança" e "Os próximos 12 meses" num bloco "O mês e o ano"** [C13, U7, B4]. Prioridade
2. O teto como recipiente (gasto / teto / o que sobra para as semanas que faltam), as semanas respeitadas antes do
excesso ("2 de 3 semanas no teto"), o excesso como ajuste e não como notícia; o aporte do mês (feito / próximo em
5/11); o ritmo em doze posições (out/2026 a set/2027), as feitas preenchidas, a próxima em destaque com data e valor;
o ano em uma linha. "R$ 39,5 mil para o futuro" vira "para a Casa própria, a viagem e a liberdade" (B18).

**A9. Uma faixa "Desde o plano" com o que já andou** [C7, B3, nudge 2, C20]. Prioridade 1. Abaixo da saudação ou no
bloco 2: "Desde 26/09: 7 feitas · reserva de R$ 52 mil para R$ 60 mil · nota de 64 para 71 · aporte de outubro feito".
Toque leva ao Realizado. É o que dá razão para voltar: muda de visita para visita.

**A10. Os números-chave coerentes com o Plano** [P6, P7, U22, C10]. Prioridade 2. Reserva em meses de custo ("R$ 60 mil
· 5 de 8 meses"); a dívida entra nos números-chave quando existe ("Dívidas R$ 368 mil · parcela R$ 4.870 · até
2041"); "Saúde financeira 71 de 100" separada do pilar ("pilar Proteção do exame: 52"), nunca na mesma linha.

### B. O passo: trilha, data, motor

**B1. A tela do Passo com quatro partes** [P2, C15, B5, U10]. Prioridade 1. (1) O passo com critério, barra e as
três linhas obrigatórias: "Faltam R$ 11,5 mil" · "No ritmo de hoje (R$ 1.000/mês), set/2027" · "Com o resgate de
R$ 42 mil do BTG que a Patrícia pediu, esta semana". (2) **A trilha deste mundo**, lista vertical de passos com os
feitos marcados e datados ("Reserva mínima · R$ 40 mil · ago/2026"), o atual em destaque, os seguintes em cinza
("Aporte automático no dia 5"), sem o nome do mundo no título. (3) **As tarefas deste passo**, feitas e abertas, com a
resposta de cada uma. (4) O porquê com o objetivo que o passo protege, em link. É aqui, não no Painel, que a trilha
aparece no uso diário; a escalada dos sete mundos continua só na Jornada.

**B2. A escada da reserva numa barra só, em todo lugar** [P6, C2, B6, U18]. Prioridade 1. Três marcas nomeadas (mínima
R$ 40 mil · 3 meses, feita em ago/2026; aceitável R$ 71,5 mil · 5 meses, agora; ideal R$ 102,1 mil · 8 meses, no mundo
Proteger) com o valor atual sobre ela e o ponto de partida ("set/2026: R$ 52 mil"). A mesma barra no cartão do herói,
na tela do Passo e no cartão Reserva do Plano. O Plano deixa de dizer "de R$ 102,1 mil" sozinho.

**B3. Toda tarefa de dinheiro nomeia o passo ou o objetivo que serve, e o passo tem ao menos uma tarefa que o
executa** [P2, P11, B5]. Prioridade 1. Se nenhuma tarefa do mês leva dinheiro à reserva, o passo precisa dizer por quê
("primeiro os objetivos; a reserva completa com o resgate do BTG") ou ganhar a tarefa. O resgate previsto na clínica
entra como tarefa de Carteira no completo.

**B4. "E ao mesmo tempo" sai do cartão do passo** [U24]. Prioridade 3. O aporte do mês é tarefa de dedicar dinheiro
e vive no bloco 2 ("5/11: R$ 2.500, dos quais R$ 420 para Fortaleza"). O cartão do passo fica com um passo só.

**B5. Fechamento sóbrio ao concluir um passo ou um capítulo** [B10, nudge 4]. Prioridade 2. Uma vez, em tela inteira,
a frase com números e datas: "Reserva aceitável completa. R$ 71,5 mil guardados entre ago/2026 e set/2027. A Casa
própria e a viagem ficam protegidas de um imprevisto. O próximo passo: aporte automático no dia 5." Um botão só
("Seguir"). O texto vira linha permanente na Jornada e vai à planejadora. O fechamento do mês do WhatsApp aparece
também no Painel no primeiro acesso do mês seguinte.

### C. Fazer: o feito, o agora e o depois

**C1. Três faixas no bloco da semana: Agora / Feito / Depois** [U3, U21, P10, B3]. Prioridade 1. Agora: a próxima
tarefa, com Fiz a um toque e "mais N em aberto". Feito: as duas últimas respondidas, em cinza, com data e efeito
("Aporte de outubro · 5/10 · a Casa própria ficou R$ 1.500 mais perto"). Depois: a próxima data ("5/11: aporte de
novembro, R$ 2.500"; "em novembro: quanto do 13º vai para a reserva?").

**C2. Nenhum atraso sem a saída ao lado, dito uma vez, em data neutra** [B1, C4, P11, nudge 3]. Prioridade 1.
"Cotar o seguro de vida do Marcos · combinada em 26/09 · uns 20 minutos: a Nord indica dois corretores; pedir
cotação de R$ X de cobertura." Em vez de "atrasada há 10 dias" em laranja, "desde 10/10" em cinza; laranja só no
botão da ação, nunca no estado. O "Adiar" pela segunda vez abre uma proposta ("a Patrícia pode cotar por vocês?"),
não só um aviso.

**C3. Toda tarefa diz para quê e tem tamanho e primeiro passo** [P11, C4]. Prioridade 1. "Para proteger a Luiza e a
Casa própria" (e não "combinada na reunião", que é origem); a pendência ou passo de origem; minutos; o primeiro gesto
concreto. Ordenar por impacto, não por data: cotar o seguro antes de indicar beneficiários.

**C4. O teto da semana respondível** [C5, B9]. Prioridade 1. Na segunda, a tarefa pede o compromisso em um toque
("Nesta semana, até R$ 1.093 de gastos que vocês controlam. Combinado?") e diz para quê ("é o que libera o aporte da
Casa própria"). O cartão define "ajustáveis" com as categorias combinadas no plano e exemplos. A folha aceita "acho
que sim / acho que não / não sei" sem travar o ciclo; enquanto não há open banking, pede só o total do cartão de
crédito. No meio da semana, o que resta ("faltam R$ 400 até domingo").

**C5. Categorias com nomes do cliente, em segunda linha** [C11, U16]. Prioridade 3. "Burocrática", "Comportamental ·
os dois", "Dedicar dinheiro" saem da primeira linha do cartão. O cartão diz para quem é e a que serve ("Marcos ·
proteção da família"); os filtros técnicos ficam na aba Tarefas, com nomes humanos ("Papelada", "Dia a dia",
"Guardar").

**C6. Em Tarefas, as feitas visíveis** [C7, U3, B3]. Prioridade 2. "Feitas" aberta por padrão nos últimos 30 dias,
cada uma com a data e o que mudou. Sem tom de cobrança nas não feitas.

**C7. Aporte automático como primeira tarefa de quem tem sobra, e o dia do aporte na tela** [B11]. Prioridade 2.
"Agendar a transferência automática de R$ 2.500 para o dia 5" com roteiro; o bloco do mês diz "aporte automático:
sim, dia 5" ou "ainda manual · agendar"; o aporte do mês vira confirmação, não pedido. O 13º e aumentos geram a
pergunta antes de o dinheiro cair ("O 13º chega em novembro; R$ 3 mil dele para a reserva fecha o passo. Combinado?").

**C8. No cadastrado, tarefas propostas, não "atrasadas"; e nada de aporte a objetivo antes da reserva mínima**
[P19, C18]. Prioridade 1. Estado "proposta pelo exame: aceitar / não agora" para o que não veio de um combinado. A
régua do passo não deixa a tarefa contradizer o herói: enquanto o passo é a reserva mínima, a tarefa de dinheiro é
"R$ 2.500 para a reserva mínima; em novembro, volta para a Casa própria"; faltando R$ 2 mil, "este é o último aporte
da reserva".

### D. Saber: a serviço da decisão do momento

**D1. O Saber se subordina ao passo e à tarefa** [P3, P12, C8, C9, B7, U2, U12, nudge 5]. Prioridade 1. No Painel,
uma linha dentro do bloco 2: "Para o passo agora: Reserva de emergência · 2 min · por que ela fica no Tesouro Selic e
não na caixinha da Casa própria". Cada tarefa burocrática leva "Antes de fazer, 2 min: Seguro de vida com
dependentes". Na aba Saber, o primeiro bloco é "Para o seu passo" e só depois "O resto da trilha". Os exemplos usam os
números da família ("a reserva de vocês cobre 5 dos 8 meses").

**D2. A trilha visível e nomeada onde houver placar** [U4]. Prioridade 1. "0 de 4 capítulos · 1 conquista" sem nome
some. No Painel, uma linha com o capítulo atual ("Capítulo 1 de 4, O dinheiro e o tempo · começa pela reserva"); na
aba Saber, a trilha no topo como linha de pontos nomeados, o atual em laranja. "1 conquista" vira o que foi
conquistado, com data ("Reserva mínima formada · ago/2026").

**D3. Sete capítulos espelhando a escalada** [P12, C9, B7]. Prioridade 2. Hoje três dos quatro são de investimento.
Capítulos a criar, na ordem dos mundos: orçamento e dívida (inclui "amortizar ou investir"); objetivos e liberdade;
reserva e juros; aportes e caixinhas; proteção e previdência; carteira e imposto; retirada e sucessão. Todos abertos;
o do passo atual e o da pendência destacada ficam em "Para o seu passo".

**D4. Cada módulo diz a decisão que destrava** [C9, B8]. Prioridade 2. "Depois disto você vai saber decidir X":
"Juros compostos: por que R$ 320 a mais por mês tiram 14 meses da casa". Ao responder, a devolutiva aponta o plano
("Certo. É por isso que a reserva de vocês fica no Tesouro Selic." · "Agora, no seu plano: ver a reserva").

**D5. A pergunta do dia no Painel em todo degrau** [B8]. Prioridade 2. Um toque, 20 segundos, respondível ali (hoje
só a clínica tem). Trocar "prove" por "confira" no texto (C9).

**D6. "Já sei isso" abre a prova curta na hora; "Já fiz" pede a data e grava** [B20]. Prioridade 3. Ao passar na
prova, "Agora, no seu plano: ver a reserva". "Já fiz" de "O primeiro título" grava no vetor (título, valor, data) e
alimenta o Realizado.

### E. Objetivos: o protagonista com voz

**E1. Nenhum objetivo atrasado sem a saída e sem a causa** [P5, C3, B2, U17]. Prioridade 1. O selo carrega a frase:
"atrasa 14 meses · com mais R$ 920/mês, na data" ou "a sobra da reserva passa para cá em set/2027". Distinguir, em
texto e cor, "atrasa porque o plano foi desenhado assim" (decisão da reunião de março) de "atrasa porque o aporte não
aconteceu".

**E2. A regra de prioridade e a sobra sem destino, acima da lista** [P5, P8, B18]. Prioridade 1. "Os objetivos pedem
R$ 5.565/mês; vocês dedicam R$ 2.500 e sobram R$ 733 sem destino · vão para a Casa própria, a mais atrasada · ver
como priorizar ›". A regra decidida ("nenhum objetivo adianta; a sobra vai para os atrasados, nesta ordem") aparece
na tela. O toque propõe à planejadora (no completo) ou grava (nos outros degraus).

**E3. Um só número de aporte combinado em toda a área** [P8]. Prioridade 1. Sobra (R$ 3.233), combinado (R$ 2.500) e
sem destino (R$ 733) tratados à parte e com os mesmos valores no Painel, em Objetivos e no bloco do ano. O controle
deslizante de Objetivos começa no valor combinado. Tirar "tudo o que foi combinado" ao lado de um número que não é o
necessário.

**E4. "O plano fecha" com a condição e um só vocabulário** [P15, C10, U16]. Prioridade 2. "Liberdade aos 57: na data,
se o aporte segue e a proteção é contratada". "12% do caminho" explicado no toque ("R$ 647 mil de R$ 5,2 milhões, fora
a casa"). Uma contagem só de objetivos ("1 de 5" × "2 de 6") em toda a área.

**E5. Os objetivos com o nome de quem são** [C19]. Prioridade 3. "Intercâmbio da Luiza", não "do filho".

### F. Pendências fora do passo: proteção e dívida

**F1. Proteção como pendência destacada, com o risco em dinheiro e a ação** [P4, B19]. Prioridade 1. Uma linha só,
concreta: "Se o Marcos faltar, a Luiza e a Ana ficam com R$ X de cobertura por Y meses. A cotação resolve isso."
Logo abaixo, a tarefa, com capital sugerido, tipo e onde cotar, e o módulo de Proteção. Um número só para proteção
em toda a área (sai "Proteção em 52" de "O que resolver"; o pilar fica no Plano com a origem).

**F2. A dívida no Painel e "amortizar ou investir" na pauta** [P7]. Prioridade 2. Número-chave de dívida (saldo,
parcela, quando acaba, custo real) ligado ao Plano; a decisão entra na pauta da reunião de 26/03.

**F3. Corrigir o exemplo** [P7]. Prioridade 2. O "Apartamento em Mogi (moradia)" financiado não combina com o
objetivo "Casa própria: sair do aluguel". Ou o apartamento é alugado a terceiros, ou o objetivo é "trocar o
apartamento pela casa".

### G. O imprevisto: a porta que falta

**G1. Uma entrada permanente "Um imprevisto?" no Painel e no Atendimento** [C14, B14, nudge 5]. Prioridade 1. Três
perguntas (quanto, quando, de onde pensa tirar) e a resposta em números: "R$ 6 mil da reserva: ela fica em R$ 54 mil,
ainda acima da mínima; recompõe em 6 meses; nenhum objetivo muda de data. Não pare o aporte da Casa própria." Saídas,
na ordem: usar a reserva · pausar um aporte com a data nova · falar com a Patrícia. Nunca "resgatar do objetivo" como
primeira opção. "Usei a reserva" grava no Realizado e recalcula o passo.

**G2. A tela da reserva diz onde a reserva está** [C14]. Prioridade 2. Instituição e liquidez ("R$ 60 mil: R$ 18 mil
na conta, R$ 42 mil no BTG em liquidez diária"), não só onde deveria estar.

### H. Jornada, Plano, Realizado e a reunião

**H1. A Jornada com a escalada de verdade** [P17, U11]. Prioridade 2. Uma linha do tempo só (relação + histórico, do
mais recente ao primeiro, com o resumo de cada reunião e as tarefas que nasceram dela). A escalada como lista vertical
dos sete mundos: os passados com "resolvido: orçamento, plano", o atual aberto com a trilha de passos e os marcos, os
futuros em cinza, "não se aplica" quando for o caso. Os três números (caminho até a liberdade, o ano, o ritmo) no alto.
"Foco escolhido pela Patrícia em 26/09" quando for o caso.

**H2. O cartão da planejadora como accountability e preparação** [P18, B13]. Prioridade 2. "Patrícia vê as respostas
de vocês." · "O que ficou de 26/09: 2 de 4 feitos" · "Pauta de 26/03: investimentos, prioridade dos objetivos, seguro
de vida, amortização" · "respondeu em 15/10, em 1 dia útil". Na Jornada, a reunião passada com o resumo.

**H3. O Realizado nasce com a linha de base do plano** [P16, U14]. Prioridade 2. A foto de 26/09 como base e o que
já existe: aporte de outubro, teto por semana, patrimônio e reserva na última leitura, nota do exame (64 → 71).
"Contra qual plano" vai para o rodapé. Com menos de três meses de registro, o número único vai para o bloco do mês no
Painel e a aba deixa de ser um destino vazio (ver I2).

**H4. O Plano em três faixas, sem jargão interno** [U13, C10]. Prioridade 2. "Onde estamos" (Saúde financeira,
Gestão financeira, Dívidas, Patrimônio), "Para onde vamos" (Objetivos, Reserva, Liberdade, Evolução), "Como protegemos
e fazemos render" (Riscos, Investimentos, Impostos). Os cartões em alerta primeiro na faixa. "94% aprofundado" vira
"Falta aprofundar: Investimentos, na reunião de 26/03"; "6 de 6" vira legenda única ou traço discreto.

### I. Navegação e consistência

**I1. A barra e a home contam a mesma história** [U9, C16, P20]. Prioridade 1. Se o Saber vira linha dentro do
passo (D1), ele não precisa de aba na barra do celular; se o dono quiser o Saber na barra, ele também fica na home. A
cliente sugere trocar "Plano" por "Conversa" na barra do celular; o UX sugere cinco destinos iguais nas duas larguras
(Painel · Objetivos · Tarefas · Plano · Saber) com "Mais" para Jornada e Realizado. Decisão do dono; o critério é um só:
nada promovido na home pode estar escondido na barra.

**I2. Passo e Realizado deixam de ser telas vazias** [U9, U14]. Prioridade 2. O Passo ganha o conteúdo de B1. O
Realizado, enquanto tiver menos de três meses, não é destino; quando houver o que comparar, vira a segunda vista do
Plano ("O plano | O realizado") ou item de "Mais". "Lançar um mês" é ação dentro dessa vista.

**I3. Um nome por destino** [U15, U23]. Prioridade 2. Tarefas (bloco "Esta semana", link "Todas as tarefas"); Saber;
um só nome para Atendimento / Conversas / Quem acompanha vocês, com uma entrada no cabeçalho com rótulo e contador; o
cartão da planejadora leva à mesma tela. Passo (o cartão, a tela e o link "Ver o passo").

**I4. Microcopy sem jargão** [U16, C10]. Prioridade 2. "A reserva que cobre 5 meses: R$ 71,5 mil" na primeira vez;
"gastos que vocês controlam" em vez de "ajustáveis"; tirar "aprofundado", "preenchido" e "6 de 6" da vista do cliente;
"na data" em vez de "o plano fecha"; "Passou R$ 193" vira "R$ 193 acima; redistribuído nas duas semanas que faltam, o
mês fecha no teto".

**I5. Três níveis tipográficos e espaço que mostra o agrupamento** [U19]. Prioridade 2. Título de bloco (serifa, um
por bloco), rótulo de faixa (DM Sans, cinza, caixa normal) e corpo. Espaço entre blocos ao menos o dobro do espaço
entre cartões. Placares deixam de ser cartões e viram linha de texto sob o título. Objetivos em linhas com duas
informações; o resto no toque.

**I6. Acessibilidade** [U20]. Prioridade 2. Texto pequeno laranja (selos, "atrasada há 10 dias", subtítulos de "O que
resolver") passa ao tom escuro de atenção ou ao marinho; laranja só na pílula e nas barras. Gradiente mais escuro sob o
texto do herói ou números-chave fora da foto. Rótulo oculto "Marcar como feita" no círculo e "Conversar" no botão de
balão. Na escalada, o atual com peso e marcador textual, não só cor.

**I7. Padrão "feito · atual · próximo" em toda figura de progresso** [U21, B3]. Prioridade 2. No Passo, a trilha do
mundo; na semana, Agora / Feito / Depois; no mês, o recipiente do teto e os doze meses do ritmo com o passado
preenchido. Regra: toda figura de progresso mostra ao menos um item anterior e um posterior ao atual.

## 4. Ordem de execução sugerida

1. **A espinha** (A1, A2, A3, A5, A6, A7, A9, I5): reordenar o Painel, devolver o propósito, um protagonista por
   dobra, uma contagem, retirar "O que resolver", a faixa "Desde o plano". Isso resolve "parece solto" sem tocar em
   dados.
2. **O passo com trilha e motor** (B1, B2, B3, C1, I7): a tela do Passo, a escada da reserva, as faixas Agora / Feito
   / Depois, a tarefa que executa o passo.
3. **Nenhuma falta sem saída** (C2, C3, E1, E2, E3, F1, C8): tarefas e objetivos com a saída, a regra de prioridade e
   a sobra, proteção em dinheiro, o cadastrado sem "atrasada".
4. **Saber a serviço do passo** (D1, D2, D3, D4, D5): a linha no bloco da semana, a trilha nomeada, os sete capítulos,
   a decisão que cada módulo destrava.
5. **A ação do dia e o retorno** (A4, C4, C7, G1, G2, B5): o botão do dia, o teto respondível, o aporte automático, o
   imprevisto, o fechamento sóbrio.
6. **O resto** (A8, A10, B4, C5, C6, D6, E4, E5, F2, F3, H1 a H4, I1 a I4, I6).

## 5. Decisões que ficam com o dono do produto

- **O Saber na barra do celular ou não** (I1). Os revisores divergem; o critério comum é a coerência entre home e
  barra.
- **Onde vive o Realizado** antes de três meses de registro (I2): dentro do Plano, em "Mais", ou mantido como aba.
- **Se "Pendências fora do passo" existe como bloco** (A7, F1) ou se proteção e dívida entram como linhas do bloco
  "O plano" em atenção. Os quatro concordam que o cartão "O que resolver" como está sai.
- **O nome do bloco 2**: "Esta semana" (UX), "O que a reserva aceitável pede de vocês" (comportamental) ou "Fazer"
  (nome atual).
- **A ordem de execução**: a sugestão acima começa pela estrutura porque é o que o dono sentiu; a cliente sugeriria
  começar pela linha de situação e pela saída dos objetivos atrasados, que são o que ela leva ao Marcos.

## 6. O que a rodada 2 vai verificar

A rodada 2 vai reler a área como se as ações de prioridade 1 e 2 estivessem feitas, e procurar o que ainda falta ou o
que elas quebram: se a nova ordem funciona nos quatro degraus e no celular; se "uma ação por visita" e "nenhuma falta
sem saída" se sustentam quando há três tarefas abertas e quatro objetivos atrasados; se o Saber pendurado no passo
não some demais; se a faixa "Desde o plano" e a linha de situação não viram duas coisas iguais; se o Painel sem "O que
resolver" ainda responde às vinte pessoas das personas; o que o cliente faz quando o passo está concluído ou quando não
há tarefa na semana.
