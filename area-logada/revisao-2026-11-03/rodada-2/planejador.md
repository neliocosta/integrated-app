# Rodada 2 — revisão do planejador (área do cliente, 03/11/2026)

Releitura da área como se as ações de prioridade 1 e 2 do Documento 1 estivessem feitas. Percorri o Painel reordenado
(blocos 0 a 6), a tela do Passo em quatro partes, o bloco da semana com Agora / Feito / Depois, os objetivos com a saída,
as pendências fora do passo, o Saber pendurado no passo, "Um imprevisto?" e o cartão da planejadora com pauta, nos
quatro degraus e em três momentos (5/11, dia do aporte; segunda-feira 26/10; 21/03/2027, véspera do 1º
acompanhamento). Depois troquei a família do exemplo por três outras: um casal com dívida cara (Sobreviver), um homem de
62 anos que vive de renda (Desfrutar) e um empresário com pró-labore irregular. Conferi os dados do exemplo no
`area-cliente.html` (vetor, pedidos, passos, reuniões, coberturas, orçamento, financiamento).

## O que o Documento 1 resolve

Resolve o que eu mais pedi na rodada 1: a espinha. Com A1 a A7 o Painel passa a ler como um plano em execução
(situação → propósito e passo → o que o passo pede → objetivos → pendências → mês e ano → Nord), e o "O que resolver"
deixa de repetir o herói e o Fazer. B1 e B2 dão ao passo trilha, data e uma escada só para a reserva; C1 e C2 devolvem o
passado à tela e tiram a vergonha do atraso; E1 a E3 fecham a contradição dos quatro aportes; F1 põe a proteção onde
um planejador a põe; G1 abre a porta do imprevisto; H2 e H3 começam a preparar a reunião. O documento também tem a
honestidade de listar o que fica com o dono e o que a rodada 2 deve verificar. O que falta não é mais estrutura: é a
regra por trás de cada frase nova. Várias das frases que o Documento 1 escreve na tela ("no ritmo de hoje, set/2027",
"a sobra vai para a Casa própria", "nenhum objetivo muda de data", "reserva de R$ 52 mil para R$ 60 mil") pressupõem um
cálculo, um dado ou uma decisão que hoje não existem no vetor nem no portal. É disso que trata esta rodada.

## Achados da rodada 2

### P2.1 — "No ritmo de hoje" para o passo não tem de onde sair (alta)
**Ação:** B1 (as três linhas obrigatórias do passo), B3, G1.
**Problema:** B1 manda escrever "No ritmo de hoje (R$ 1.000/mês), set/2027". Mas B3 reconhece que nenhuma tarefa leva
dinheiro à reserva: os R$ 2.500 vão R$ 1.500 para a Casa própria e R$ 1.000 para a liberdade. Os "R$ 1.000/mês" do
exemplo são a parcela da liberdade, não da reserva. No código, "no ritmo de hoje" existe só para objetivos
(`previsoesDeHoje`, aporte de cada objetivo a juros do próprio objetivo); para o passo da reserva não há conta. E a
reserva atual (R$ 60 mil) só muda quando alguém lança patrimônio ou responde "Usei a reserva" (G1): não há fluxo de
entrada, nem a sobra sem destino, nem o 13º, nem o resgate do BTG (que no Completo não é tarefa).
**Por que importa:** É a primeira linha nova do passo, e a que dá data ao cliente. Sem a regra, ou a tela inventa um
ritmo ou escreve "sem data" no passo mais importante do plano: a quebra de credibilidade da rodada 1 (P6, P8) volta
com roupa nova. G1 tem o mesmo buraco: "recompõe em 6 meses" com o quê?
**Recomendação:** Escrever a regra em uma linha: o ritmo do passo é a soma das tarefas de dedicar dinheiro cujo destino
é o passo (recorrentes, por evento e únicas, cada uma na data prevista), a juros da reserva. Se a soma é zero, a frase é
"sem data: nenhuma tarefa leva dinheiro à reserva" e o passo ganha uma tarefa (B3) ou uma origem única ("com o resgate
de R$ 11,5 mil do BTG, em novembro"). "Recompõe em N meses" em G1 usa a mesma soma. Enquanto não houver tarefa, o
cliente vê a causa, não uma data.

### P2.2 — A ordem de prioridade dos objetivos: quem decide, onde grava e o que "mais atrasado" quer dizer (alta)
**Ação:** E2, E1, UX.md "O caminho" (decisão de 25/10).
**Problema:** Três coisas sem dono. (1) Quem decide a ordem: a decisão de 25/10 diz que no Completo reordenar é
"Propor à Patrícia", mas E2 diz que o toque "grava" nos outros degraus e "propõe" no completo sem dizer o que vale até
ela responder; o vetor tem `prioridade` só para o cadastrado (linha 1804), no completo a ordem é a da lista do plano.
(2) "A sobra vai para a Casa própria, a mais atrasada": pelos números, a mais atrasada é a Casa de praia (3 anos), depois
o Intercâmbio (2 anos), depois a Casa própria (14 meses). Se o critério é a data mais próxima ou a prioridade do plano,
a frase está certa; se é o atraso, está errada. (3) Duas contas de "no ritmo de hoje" convivem: a do código (cada
objetivo com o seu aporte, independentes) e a da decisão de 25/10 (cascata: tudo para o 1 até ele se pagar, depois o
2). Com a mesma sobra, as datas da lista de E1 e as da tela "O caminho" vão divergir.
**Por que importa:** A regra "nenhum objetivo adianta; a sobra vai para os atrasados" é a decisão de maior
consequência da área sobre o dinheiro do cliente, e aparece escrita na tela (E2). Escrita errada ou com duas contas, o
cliente lê um "na data" num lugar e "atrasa 2 anos" noutro para o mesmo objetivo.
**Recomendação:** Uma regra só, gravada no plano pela planejadora (Completo), na clínica (Clínica) ou pelo cliente
(Cadastrado), com data e autor, e um só motor: a ordem de prioridade é a lista; a sobra sem destino vai para o primeiro
da lista que está atrasado; "no ritmo de hoje" é sempre a cascata. Trocar "a mais atrasada" por "a primeira da ordem
combinada". Até a planejadora responder à proposta, a tela diz "proposta enviada em 26/10; até lá, a sobra fica na
reserva" (ver P2.3).

### P2.3 — A sobra sem destino tem quatro candidatos e nenhuma fila (alta)
**Ação:** E2 (sobra → objetivo atrasado) versus F1 (proteção), B3 e C7 (reserva via 13º e BTG), F2 (amortizar ou
investir).
**Problema:** Os R$ 733/mês são prometidos a quatro destinos pelo mesmo documento: E2 manda para a Casa própria; F1
pede um seguro de vida para o Marcos (um capital de R$ 1 a 1,5 milhão para um homem de 38 anos custa na faixa de
R$ 200 a 400 por mês, e esse prêmio não está em lugar nenhum do orçamento); B3/C7 mandam o excedente para a reserva; F2
abre "amortizar ou investir" num financiamento a 9,5% a.a. + TR, enquanto a caixinha da Casa própria rende 0,5% ao mês
(cerca de 6,2% a.a.) e a da liberdade 0,4%. Pela conta do planejador, amortizar vence a caixinha. A regra que o
Documento 1 escreve na tela (E2) decide por todos antes da reunião. E a sobra é prevista, não realizada: na semana 2 de
outubro o casal gastou R$ 1.460 contra R$ 1.200; a sobra real do mês já não é R$ 733.
**Por que importa:** É a regra do planejador contra a regra da tela. Proteção vem antes de acumulação quando há
dependente; dívida mais cara que o rendimento vem antes de caixinha. Uma frase fixa "vão para a Casa própria" tira da
planejadora a decisão de maior valor dos próximos anos e, no Sobreviver, seria simplesmente errada.
**Recomendação:** A cascata da sobra é uma regra do plano, gravada pela planejadora e mostrada no toque de E2: (1) o
prêmio da proteção pendente, (2) a reserva até o alvo do passo, (3) a dívida cuja taxa supera a do plano, (4) os
objetivos na ordem combinada. No Completo, enquanto a planejadora não grava, a linha de E2 diz "R$ 733 sem destino:
decidido na reunião de 26/03; até lá, ficam na reserva". A sobra mostrada é a do plano; a realizada entra no bloco do mês
depois do fechamento.

### P2.4 — Quando um passo conclui, o que conclui, e de quem é o passo no Completo (alta)
**Ação:** B1, B2, B5; README premissa 10.
**Problema:** (1) O critério existe no código (reserva ≥ 70% do ideal; N meses seguidos de aporte), mas o dado que o
satisfaz só muda quando alguém lança: a reserva atual vem da "liquidez diária informada na clínica de 12/09" e do
patrimônio lançado à mão. Um "Fiz" no aporte não move a reserva; um "Fiz" no resgate do BTG move só na Clínica
(`efeito: reserva 42133`). Então o fechamento sóbrio de B5 só dispara quando a Patrícia ou a Ana atualiza um número,
não quando o cliente faz o que o passo pede. (2) "Três meses seguidos": o aporte parcial de janeiro (R$ 1.200 de
R$ 2.500) quebra a sequência ou não? Não está escrito. (3) A trilha de B1 ("Reserva mínima · R$ 40 mil · ago/2026",
"Aporte automático no dia 5") não existe nos dados: não há série histórica da reserva nem lista de passos do mundo
com data; o `passos` do exemplo tem dois itens, só na Clínica. (4) No Completo, `R.passos` está vazio e o passo vem da
régua (a tela diz "Passo sugerido pela escalada"); por isso o Painel mostra "aceitável, R$ 71,5 mil" enquanto o plano
publicado e o Plano dizem ideal, R$ 102,1 mil, via resgate do BTG. A premissa 10 ("o consultor prevalece sobre a
régua") está sendo violada no degrau em que mais importa, e B2 assume o alvo da régua, não o do plano.
**Por que importa:** Sem conclusão verificável não há trilha, não há "feito · atual · próximo" (I7) e não há
fechamento. E, no Completo, o cliente lê um passo que a planejadora não escolheu.
**Recomendação:** Gravar no portal, por cliente: o passo escolhido (título, critério, alvo, porquê, tarefa que o executa)
e a trilha do mundo com os passos feitos e a data em que cada critério foi satisfeito (a data vem da primeira foto do
vetor em que o critério já valia; se não houver, "antes do plano"). Regras escritas: toda tarefa de dinheiro com destino
"reserva" soma no atual ao receber "Fiz" (com o valor), até a conciliação com o patrimônio lançado; parcial não quebra a
sequência se cobrir ao menos metade (ou a regra que a planejadora preferir, mas escrita); concluir dispara B5 e abre o
próximo da trilha. Enquanto o passo do Completo não é gravado, a tela diz de quem ele é ("sugerido pela escalada; a
Patrícia confirma na próxima reunião"), nunca "escolhido pela Patrícia".

### P2.5 — "Proposta pelo exame" sem critério, limite, validade nem contagem (média)
**Ação:** C8.
**Problema:** O estado "proposta pelo exame: aceitar / não agora" resolve o "atrasada" do cadastrado, mas não diz: o que
gera uma proposta (reserva abaixo da mínima? dependente sem seguro? dívida informada?); quantas de uma vez; se "não
agora" volta e quando; se aceitar cria pedido com lembrete (e isso exige o consentimento de WhatsApp, que o cadastrado
pode não ter dado); se uma proposta aberta entra em "Outubro: 0 de 1 feita" (A6) e no botão do dia (A4). Hoje a tela do
cadastrado mostra a proposta como a única tarefa, com contador "0 de 1 feita".
**Por que importa:** No self-service não há quem explique. Uma proposta contada como falta é a "atrasada" de volta;
uma proposta que nunca expira vira ruído permanente; uma que some sem rastro deixa o cadastrado sem passo.
**Recomendação:** Escrever: uma proposta nasce de uma condição nomeada do exame ou da régua (lista fechada, com o texto
do porquê); no máximo três abertas; não contam em nenhum placar nem no botão do dia; "não agora" guarda a data e
reaparece só quando a condição muda ou no próximo exame; aceitar pede o dia da renda e o consentimento de lembrete, e só
então vira tarefa com data. Enquanto o cadastrado não aceita nenhuma, o botão do dia é o passo ("Ver a reserva mínima"),
não uma tarefa.

### P2.6 — "Uma ação por visita" não sobrevive a três tarefas abertas, à segunda-feira e à proteção urgente (alta)
**Ação:** A4 versus C1, C3, C4, F1, G1, E2, D5; UX.md "a pílula de ação principal é uma só por tela".
**Problema:** Na segunda 26/10, A4 manda o botão dizer "Combinar a semana: até R$ 1.093" e, abaixo, "Depois disso, nada
mais para hoje". Mas há duas burocráticas atrasadas desde 10/10, e C3 manda ordenar por impacto, com o seguro de vida
primeiro. A frase "nada mais para hoje" é falsa, e a tarefa mais importante do plano cai para "mais 2 em aberto". No
mesmo Painel, F1 põe "A cotação resolve isso" com a tarefa e o módulo (um botão), G1 põe "Um imprevisto?" (outro), E2 põe
"ver como priorizar" (outro), D1 e D5 põem o módulo e a pergunta do dia (mais dois), e o próprio A4 põe o seu. Seis
chamadas na tela que prometia uma. E nada diz de quem é a ação: "Cotar o seguro do Marcos" aparece como ação do dia para
a Ana, que está logada; o responsável do casal (UX.md) some de A4, C1 e C2.
**Por que importa:** O cliente de classe média alta com três coisas abertas escolhe a mais fácil (o teto, um toque) e
sente que cumpriu. Em março a Patrícia encontra o seguro ainda pendente, como o próprio exemplo já prevê para 22/03/2027
("O seguro de vida do Marcos segue pendente").
**Recomendação:** Escrever a precedência do botão do dia: (1) tarefa atrasada de maior impacto, do responsável logado
ou "os dois"; (2) tarefa de dinheiro do dia; (3) compromisso da semana. O teto da segunda não vira botão do herói: é um
"Combinado" inline na faixa Agora, de um toque. "Depois disso, nada mais para hoje" só quando é verdade; senão, "e mais 2
em aberto, a mais antiga desde 10/10". F1, G1 e E2 ficam como linhas com link, sem botão; o Saber no bloco 2 é uma linha
só, que alterna módulo e pergunta do dia. No casal, a ação do dia é a do responsável logado; a do outro aparece em
cinza ("Marcos: cotar o seguro").

### P2.7 — Cinco relatos do que já foi feito, e o que dá razão para voltar não muda entre visitas (alta)
**Ação:** A9 (faixa "Desde o plano") versus bloco 0 (linha de situação), A6 (linha do mês), C1 (faixa Feito), H2 ("O que
ficou de 26/09: 2 de 4"), H3 (Realizado).
**Problema:** O Documento 1 já pergunta se bloco 0 e A9 "não viram duas coisas iguais". Viram, e há mais três. Pior: o
conteúdo de A9 ("reserva de R$ 52 mil para R$ 60 mil · nota de 64 para 71") pressupõe dados que não existem (não há
reserva de set/2026 em lugar nenhum; a liquidez diária foi informada uma vez, em 12/09) e que, quando existirem, mudam a
cada lançamento trimestral de patrimônio. Entre duas visitas na mesma semana, só as tarefas mudam. A faixa que deveria
"mudar de visita para visita" fica igual por três meses.
**Por que importa:** A razão para voltar era o argumento central de A9. Uma faixa estática é um cartão a mais. E cinco
contagens com janelas diferentes (semana, mês, desde o plano, desde a reunião) são a dispersão de P9 outra vez.
**Recomendação:** Quatro janelas, cada uma num lugar só: a semana no bloco 0 (três fatos do presente); o mês na linha
sob o título do bloco 2 (A6); o acumulado desde o plano como cabeçalho da faixa Feito (A9 e C1 viram uma coisa só);
a reunião no cartão da Nord (H2). A9 nasce da versão de 26/09 (H3) como linha de base e só cita números que têm série
(tarefas feitas, aportes, nota do exame); reserva e patrimônio entram quando houver segundo lançamento. Para que mude
entre visitas, A9 carrega a novidade mais recente com data ("em 15/10 a Patrícia respondeu"; "em 19/10 vocês fecharam a
semana 3 no teto"), que é o que o bloco 0 já previa.

### P2.8 — A nova ordem, aplicada a quem está em Sobreviver, lê errado em quatro blocos (alta)
**Ação:** A1 (blocos 3, 4 e 5), E1/E4, F1, G1, C4.
**Problema:** Casal com R$ 18 mil no rotativo a 12% ao mês e R$ 6 mil no cheque especial, sobra zero. O passo é "Quitar a
dívida cara" (régua). Na ordem nova: bloco 3 começa com "Liberdade financeira · aos 60 · não fecha neste ritmo" na
primeira linha (E4 manda a liberdade primeiro); bloco 4 "Pendências fora do passo" mostra "proteção: se ele faltar, a
família fica com R$ X" e pede um seguro que não cabe no orçamento; bloco 5 mostra "R$ 0 para o futuro" e um teto da
semana que não foi combinado com ninguém; G1 oferece "usar a reserva · pausar um aporte" a quem não tem nenhum dos dois;
E2 escreve "a sobra vai para o mais atrasado" quando não há sobra. O que falta, para esse cliente, não está em
nenhum bloco: a lista de credores com taxa, a ordem de quitação, a data em que a dívida acaba e "nenhuma dívida nova
este mês".
**Por que importa:** O Documento 1 foi escrito olhando uma família de Construir com sobra. "A mesma estrutura para
todo degrau" é uma restrição do dono; a mesma estrutura com o conteúdo errado é o que o README chamou de "desenhado
sem perceber para uma pessoa só". No Sobreviver, cada bloco errado é uma humilhação a mais.
**Recomendação:** Manter os sete blocos e escrever o conteúdo por mundo em uma tabela (o UX.md já faz isso para o
bloco 1; falta para os outros). Em Sobreviver: bloco 3 lidera com "Quitar o cartão · R$ 18 mil · previsto para jun/2027"
e os sonhos vêm depois, sem "não fecha"; a liberdade some da primeira linha enquanto não há sobra; bloco 4 só mostra
proteção se houver cobertura gratuita ou barata a resolver (INSS, seguro do empregador), e nomeia o seguro de vida como
"depois da dívida"; bloco 5 vira "O mês": entradas, parcelas, o que sobrou, meses sem saldo negativo; G1 tem a variante
"sem reserva": as saídas são "parcelar sem juro · falar com a Nord · nunca o rotativo"; E2 some.

### P2.9 — Aos 62 anos, vivendo de renda, a área fala de aporte, teto e liberdade com alguém que já chegou (alta)
**Ação:** A1 (blocos 1, 3, 5), A4, A8, C7, G1, régua do `passoAtual`.
**Problema:** Homem de 62 anos, R$ 3,2 milhões, sem dependentes, retira R$ 14 mil por mês. A régua não tem ramo para
Desfrutar: ele cai em "Proteger o que construiu" (a fórmula de proteção penaliza seguro de vida ausente mesmo sem
dependente) ou em "Fazer o dinheiro trabalhar mais". A4 procura "o dia do aporte" que não existe; C7 propõe aporte
automático; bloco 5 mostra teto do mês, aporte do mês e "ritmo em doze posições" de aportes; bloco 3 abre com
"Liberdade financeira · aos 57 · 100% do caminho · o plano fecha", que para ele é passado; A9 conta "aportes feitos".
G1 diz "não pare o aporte". Nada mostra o que importa nesse mundo: a retirada do mês contra a renda sustentável, quantos
anos o patrimônio cobre, a taxa de retirada, a sucessão (testamento, beneficiários, ITCMD) e o check-up anual.
**Por que importa:** É o cliente de maior patrimônio e maior ticket. A área que o trata como poupador em formação não o
segura, e o erro de régua o coloca num mundo que ele já saiu, sem "não se aplica".
**Recomendação:** Dar à régua o ramo 7 (renda passiva ≥ custo de vida → Desfrutar) e o critério de "não se aplica" para
seguro de vida sem dependente. Conteúdo por mundo para Desfrutar: bloco 1 passo "retirada definida e rodando: R$ 14 mil
de R$ 15,8 mil sustentáveis"; bloco 2 as tarefas de retirada e sucessão; bloco 3 lidera com os objetivos de legado e as
experiências, sem a liberdade; bloco 5 vira "A retirada e o ano": retirado × sustentável, patrimônio em 12 meses, anos
cobertos; A4 por calendário usa o dia da retirada, não do aporte; G1 sai da reserva de retirada e diz quantos meses de
cobertura sobram.

### P2.10 — O empresário de renda irregular cai em "Começar a sobrar" nos meses magros e vê doze posições vazias (média)
**Ação:** A4, A8, C4, C7, régua do `passoAtual`, UX.md "A tarefa segue a renda".
**Problema:** Dono de clínica, pró-labore de R$ 6 mil e distribuição de R$ 90 mil em junho e dezembro. A régua lê
`sobra()` mensal: nos meses magros a sobra é negativa e o passo vira "Começar a sobrar", mundo 1, para quem guarda
R$ 120 mil por ano. A8 manda o ritmo "em doze posições, out/2026 a set/2027"; o UX.md manda o ritmo combinado ("1 de 2
distribuições"). A4 procura o dia do aporte; C7 pede aporte automático no dia 5; C4 propõe teto da semana sobre uma
sobra mensal que oscila. O colchão de renda irregular, que é o passo desse cliente, não está em nenhum bloco (a tarefa de
mão dupla "R$ 30 mil para o colchão em junho; R$ 5 mil por mês do colchão nos meses magros").
**Por que importa:** É o perfil mais comum de classe média alta fora do CLT: médico, advogado, empresário. A tese do
README já previu isso (premissa 8); o Documento 1 a perdeu ao fixar "dia 5" e "doze meses".
**Recomendação:** A régua lê a sobra no ritmo da renda (12 meses móveis). O ritmo do bloco 5 segue o `ritmo` de cada
pedido: posições são meses para quem aporta por mês, eventos para quem aporta por evento, e o ano em uma linha para os
dois. A4 usa a data da próxima tarefa de dinheiro, seja dia 5 ou "quando a distribuição cair". O colchão aparece como
passo (bloco 1) e como número-chave ("colchão cobre até abril"). C7 vira "agendar a transferência no dia da entrada"
quando há dia, e "lembrar na janela" quando não há.

### P2.11 — Proteção: o capital não existe no vetor, o prêmio não está no orçamento, e a invalidez do Marcos ficou de fora (alta)
**Ação:** F1, C2 (segundo "Adiar" → "a Patrícia pode cotar"), F3.
**Problema:** F1 pede "R$ X de cobertura por Y meses" e "capital sugerido, tipo e onde cotar". No vetor há o suficiente
para a frase do risco (Marcos: cobertura de vida 0, invalidez 0, INSS por morte R$ 2.500; a Ana tem R$ 500 mil de vida
e R$ 300 mil de invalidez; a parcela do financiamento é R$ 4.870) mas não há capital sugerido, prêmio estimado nem onde
cotar: isso é cálculo do capítulo Riscos e decisão da planejadora, e hoje não é gravado como número do plano. O prêmio
que resultar é uma despesa fixa nova que a sobra precisa absorver (ver P2.3): "Liberdade aos 57: na data, se a proteção é
contratada" (E4) é verdade só se o prêmio couber. F1 fala só de vida; para o Marcos, empresário sem INSS robusto, a
invalidez é o risco mais provável e também está em zero. E C2 propõe "a Patrícia pode cotar por vocês?": se a Nord
intermedeia o seguro, a remuneração precisa estar dita na mesma frase (o UX.md exige "como a Nord é remunerada" antes de
qualquer conversa).
**Por que importa:** É a única lacuna que destrói o plano de um dia para o outro, e é a tarefa que o exemplo prevê ainda
pendente em março. Uma pendência com o risco em dinheiro mas sem capital, tipo, prêmio e origem do dinheiro continua
sendo "Burocrática".
**Recomendação:** Gravar no plano, por pessoa: capital sugerido de vida e de invalidez, tipo (temporário, prazo), prêmio
estimado, onde cotar (dois corretores ou a Nord, com a remuneração dita) e de onde sai o prêmio (a cascata de P2.3). A
linha de F1 usa a conta que já existe: "Se o Marcos faltar, a Ana e a Luiza ficam com R$ 2.500 do INSS para uma parcela
de R$ 4.870 e um custo de R$ 12,8 mil; a cotação resolve isso". Duas tarefas, não uma: vida e invalidez, com o mesmo
roteiro.

### P2.12 — A dívida e o exemplo: corrigir F3 muda a sobra, o teto e a conta de amortizar (média)
**Ação:** F2, F3, A10.
**Problema:** O exemplo paga "Moradia (aluguel) R$ 3.000" e a parcela de R$ 4.870 do "Apartamento em Mogi (moradia)"
ao mesmo tempo. Qualquer correção de F3 (apartamento alugado a terceiros, com aluguel recebido faltando nas entradas; ou
objetivo "trocar o apartamento pela casa", com o aluguel saindo das despesas) muda a sobra de R$ 3.233, o teto de
R$ 5.300 e o aporte combinado: todos os números que o Documento 1 manda bater entre telas (E3). F3 está em prioridade 2
como polimento; é um dado de entrada. A10 pede "custo real" da dívida: o vetor tem 9,5% a.a. e não tem a TR nem o CET;
"até 2041" supõe 360 parcelas sem amortização extra.
**Por que importa:** Se E3 fecha os números sobre um orçamento inconsistente, fecha errado; e "amortizar ou investir"
na pauta sem o custo real é uma conversa sem número.
**Recomendação:** Resolver F3 antes de E3 (é a decisão do exemplo que o dono precisa tomar primeiro) e, no produto,
gravar na dívida a taxa com o indexador e o CET, para que o número-chave diga "9,5% + TR, cerca de 10,3% a.a." e a
pauta compare com a taxa do plano. O bloco 5 (o mês) mostra a parcela como fixa nomeada, não escondida em "as fixas à
parte".

### P2.13 — A véspera da reunião: o que o cliente deve ver e ainda não está coberto (alta)
**Ação:** H2, H3, E2 (propostas), UX.md "As revisões semestrais".
**Problema:** Em 21/03/2027, com o Documento 1 feito, o cliente vê o cartão da Nord com "O que ficou de 26/09: 2 de 4"
e a pauta fixa ("investimentos, prioridade dos objetivos, seguro de vida, amortização"). Não vê: a revisão semestral que o
UX.md manda gerar antes da reunião (versão vigente, o que foi feito, o que faltou, o que mudou) como pré-leitura dele;
as propostas e dúvidas que ele mesmo mandou e que esperam resposta (a sobra de E2, um "não fiz" com ajuste provisório),
que deveriam entrar na pauta automaticamente; a posição dele nas decisões ("amortizar ou investir: o que vocês
preferem?"), colhida antes para a reunião ser de decisão; um lugar para escrever o que quer perguntar; a confirmação da
data (o lembrete chega em 12/03 e some). E o passo da reserva chega a março com o mesmo R$ 60 mil de setembro (P2.1): o
primeiro item da reunião é uma barra que não andou em seis meses.
**Por que importa:** A diferença entre acompanhamento e reapresentação é o cliente chegar sabendo o que ficou, o que
mudou e o que vai decidir. A pauta fixa de H2 é da planejadora; a pauta do cliente não existe.
**Recomendação:** O cartão da Nord, a partir de 30 dias antes da reunião, vira "Preparar a reunião de 26/03": (1) o que
ficou de 26/09 com o estado de cada item; (2) os números antes e depois (a revisão gerada, em quatro linhas); (3) a pauta
com três origens, cada uma marcada: da Patrícia, das propostas e dúvidas abertas do cliente, e "o que vocês querem
levar" (campo do cliente); (4) para cada decisão em pauta, a pergunta curta com a posição do cliente, opcional; (5)
confirmar a data. O mesmo cartão fica na Jornada como a reunião futura.

### P2.14 — O teto da semana respondível: "só o total do cartão" subconta, e o plano já tem o que falta (média)
**Ação:** C4, A8, I4.
**Problema:** C4 manda pedir "só o total do cartão de crédito" enquanto não há open banking. Os ajustáveis do exemplo
são alimentação, mercado, lazer, pet, academia, assinaturas e streaming (R$ 6.200), pagos em cartão, Pix e débito; a
fatura do cartão mistura ciclos e fixas (plano de saúde, curso). O total do cartão não é o gasto ajustável da semana. Ao
mesmo tempo, o que C4 pede que a tela "defina" já está gravado no plano: `orcamento.combinado.ajustaveis` com os cortes
(alimentação −R$ 450, lazer −R$ 450), que é exatamente de onde saem os R$ 5.300. E outubro tem cinco semanas: o teto de
R$ 1.093 e R$ 937 nas duas últimas sai de uma divisão que o cliente não vê.
**Por que importa:** O teto é o único instrumento de curto prazo do cliente; respondido com o número errado, a sugestão
de ajuste da semana seguinte é errada, e o fechamento do mês diz "no teto" quando não esteve.
**Recomendação:** A pergunta da semana lista as categorias combinadas com o valor de cada uma no mês ("alimentação
R$ 1.450, mercado R$ 2.700, lazer R$ 700...") e pede um total estimado em qualquer meio, com "acho que sim / acho que não".
O cartão do teto diz de onde ele veio: "R$ 6.200 do orçamento, menos R$ 450 de alimentação e R$ 450 de lazer que vocês
combinaram em 26/09". As semanas do mês aparecem com o teto de cada uma, e a divisão (por dias ou igual) fica escrita.

### P2.15 — O que o planejador precisa gravar no portal para que as telas novas existam (alta)
**Ação:** transversal (A9, A10, B1, B2, E2, F1, F2, G2, H2, H3).
**Problema:** O Documento 1 escreve na tela treze dados que não existem no vetor, no registro da clínica nem na versão
do plano. Sem eles, cada tela nova nasce com texto fixo ou vazia.
**Por que importa:** É a maior parte do trabalho real, e está sem dono: o portal do consultor (`tela-consultor.html`) e o
registro da clínica não têm esses campos.
**Recomendação:** Acrescentar ao plano publicado (versão datada) e ao registro da reunião:

| Dado | Usado por | Hoje |
|---|---|---|
| O passo escolhido (título, critério, alvo, porquê, tarefa que o executa) e a trilha do mundo com os passos feitos e as datas | B1, B2, B5, A1 bloco 1 | só na Clínica, dois itens; no Completo vem da régua |
| A ordem de prioridade dos objetivos, com autor e data | E2, E1, "O caminho" | só `prioridade` do cadastrado |
| A cascata da sobra sem destino | E2, P2.3 | não existe |
| Capital sugerido de vida e de invalidez por pessoa, tipo, prêmio estimado, onde cotar, origem do prêmio | F1, C2, E4 | coberturas atuais existem; sugeridas não |
| Onde está a reserva (conta, instituição, liquidez), marcada como reserva | G1, G2, B2 | patrimônio financeiro existe sem a marca "reserva" |
| Série da reserva e do patrimônio por data (a foto de cada lançamento) | A9, B2 (ponto de partida), H3 | uma foto, 2026-09 |
| A pauta da próxima reunião (itens da planejadora) e as decisões de cada reunião registradas como decisões, não só como resumo | H2, P2.13 | `temas` na clínica; `resumo` nas reuniões |
| Taxa com indexador e CET da dívida; data prevista de quitação | A10, F2 | juros 9,5 e parcelas |
| O dia de cada entrada de renda por membro e os eventos (13º, bônus, distribuição) com janela | A4, C7, P2.10 | `day` e o bônus de março existem; 13º não |
| As categorias ajustáveis combinadas e os cortes | C4 | existe (`orcamento.combinado`) |
| O efeito esperado de cada tarefa no passo ou no objetivo | C1 (Feito com efeito), B3 | `efeito` só no resgate da clínica |
| Responsável de cada tarefa quando há dois | A4, C1, C2 | existe (`resp`) |
| A regra de conclusão do passo e de "parcial" na sequência | B5, P2.4 | só o critério numérico |

## Os três riscos de implementar o Documento 1 como está, em ordem

1. **Telas que prometem números que o sistema não calcula nem atualiza.** "No ritmo de hoje" para o passo, "reserva de
   R$ 52 mil para R$ 60 mil", "recompõe em 6 meses", "capital sugerido", a trilha datada: nada disso tem fonte (P2.1,
   P2.4, P2.7, P2.11, P2.15). Implementado como texto, o Painel novo nasce com frases fixas que não mudam quando o
   cliente faz o que o plano pede, e a desconfiança da rodada 1 (três alvos, quatro aportes) volta como "a tela diz uma
   coisa e o extrato diz outra".
2. **Regras de dinheiro escritas na tela sem o planejador.** "A sobra vai para a Casa própria", "nenhum objetivo muda
   de data", "a cotação resolve isso", e no Completo um passo que vem da régua e não da Patrícia (P2.2, P2.3, P2.4,
   P2.11). A tela passa a decidir destino de sobra, ordem de prioridade e proteção antes da reunião e sem a cascata do
   planejador (proteção, reserva, dívida cara, objetivos). Viola a premissa 10 e, no Sobreviver, orienta errado.
3. **Uma estrutura desenhada para Construir com sobra, aplicada aos sete mundos.** Dia do aporte, teto da semana,
   doze posições, liberdade na primeira linha, "não pare o aporte" (P2.8, P2.9, P2.10). "A mesma estrutura para todo
   degrau" vai virar o mesmo texto com conteúdo errado para quem tem dívida, para quem vive de renda e para quem recebe
   por evento, e a régua ainda não tem ramo para Desfrutar nem lê renda irregular. A tabela de conteúdo por mundo, que
   o UX.md começou para o bloco 1, precisa existir para os sete blocos antes do código.
