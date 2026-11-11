# Rodada 1 — revisão do planejador (área do cliente, 03/11/2026)

Revisão feita por um planejador financeiro sênior sobre o inventário, as 14 capturas e os documentos de direção
(README, UX.md, personas, referências do Saber). Cliente de exemplo: Ana e Marcos, 35 anos, filha Luiza, degrau
Completo, plano apresentado em 26/09/2026, hoje 20/10/2026.

## Veredito

A página responde bem a "o que fazer hoje" (o passo da reserva, as tarefas, o teto da semana) e, depois das personas,
a "quanto tenho" (patrimônio, reserva, nota). Não responde às três perguntas que um planejador quer que o cliente
leve consigo entre uma reunião e outra: **para onde estamos indo e estamos no rumo** (o propósito sumiu do herói no
Completo, os objetivos estão na quinta posição e 4 de 6 "atrasam" sem nenhuma direção ao lado), **o que já construímos
e o que falta** (nem o passo nem o Fazer nem o Saber mostram trilha, feito e por vir; o Realizado está vazio; a
escalada na Jornada é uma barra sem conteúdo) e **o que pode derrubar tudo isso** (38% de proteção com uma filha
dependente e um financiamento de R$ 368 mil, e o Painel não diz nem o risco nem a dívida). Há também um conflito de
fundo entre o passo e a execução: o passo é "completar a reserva aceitável", mas nenhuma tarefa do mês leva dinheiro à
reserva; os R$ 2.500 vão para os objetivos. E os números de aporte não batem entre as telas (R$ 2.500, R$ 3.233,
R$ 3.330, R$ 39,5 mil/ano), o que pode fazer o cliente achar que "faz tudo o que foi combinado" enquanto sobram
R$ 700 por mês sem destino e quatro objetivos atrasam. O que mais falta, em uma frase: a espinha dorsal visível
(propósito → objetivos → mundo e trilha de passos → tarefas feitas e por fazer → o que isso muda no objetivo), com o
Fazer e o Saber pendurados no passo e não ao lado dele.

## Achados

### P1 — Painel: a ordem inverte o protagonista (alta)
**Tela/cartão:** Painel completo, herói e sequência de blocos.
**Problema:** No Completo o herói diz "Por que este passo: Sem reserva, um imprevisto sai do dinheiro dos objetivos e
a data deles anda" e o cartão do passo; o propósito da família ("Uma casa que seja de vocês, viagens com a Luiza e a
liberdade aos 57") só aparece na Clínica. Os objetivos chegam na quinta posição, depois de Fazer/Saber e de "O que
resolver". A ordem efetiva é passo → execução → pendências → objetivos → cartões soltos. O UX.md previa o oposto:
bloco 1 propósito e objetivos, bloco 2 o passo, bloco 3 a tarefa.
**Por que importa:** O cliente de classe média alta não sustenta disciplina por um "R$ 60 mil de R$ 71,5 mil";
sustenta por "a casa, a Luiza, parar aos 57". Sem o propósito no alto, a reserva vira meta contábil e o plano vira
lista de tarefas. É isso que o dono sente como "cartões soltos".
**Recomendação:** O herói volta a ser propósito + estado dos objetivos ("2 de 6 na data"), com a faixa de objetivos
em cartões pequenos (UX.md, bloco 1). O passo vem logo abaixo, em cartão próprio, com a frase "é o que protege a Casa
própria e a liberdade". Os números-chave ficam, mas acompanham o propósito, não o passo.

### P2 — O passo não tem trilha, não tem data e não tem tarefa que o execute (alta)
**Tela/cartão:** Cartão do passo no herói e tela "O passo agora".
**Problema:** A tela do passo mostra "Completar a reserva aceitável · R$ 60 mil de R$ 71,5 mil · Construir: Tenho base
para subir?" e nada mais: sem os passos anteriores e seguintes do mundo (sobra automática, reserva mínima, reserva
aceitável, aporte no dia certo), sem "no ritmo de hoje, conclui em…", sem as tarefas do passo. Pior: nenhuma tarefa de
outubro leva dinheiro à reserva. O aporte combinado de R$ 2.500 vai para os objetivos ("Desde outubro, R$ 2.500 para
os objetivos, tudo o que foi combinado"), e o resgate do BTG que a clínica previa para completar a reserva ("o
restante sai do BTG, que hoje está parado em liquidez") não existe como tarefa no Completo. O passo é um enunciado
sem motor.
**Por que importa:** O cliente vê o passo mais importante do plano e não tem o que fazer por ele. Em março de 2027 a
reserva estará nos mesmos R$ 60 mil e o acompanhamento começa por uma frustração. É a quebra da tese "o plano diz o
que fazer → o cliente marca se fez".
**Recomendação:** A tela do passo com (1) a trilha do mundo: feitos preenchidos, o atual em destaque, os próximos em
cinza; (2) o critério e a data ("faltam R$ 11,5 mil; com o resgate de R$ 11,5 mil do BTG, pronto em novembro"); (3) as
tarefas do passo, feitas e abertas; (4) o módulo que o explica. E uma tarefa Carteira ou Dedicar dinheiro ligada ao
passo. Se a decisão do plano é "primeiro os objetivos, a reserva fica com o BTG", o passo precisa dizer isso.

### P3 — Fazer e Saber são duas colunas iguais sob um slogan, não dois braços do passo (alta)
**Tela/cartão:** Painel, "Melhorar o futuro financeiro · Um bom plano tem duas partes: fazer e saber."
**Problema:** O título é genérico e as duas colunas têm o mesmo peso. Fazer mostra "Neste mês 4 de 7 feitas" e três
tarefas abertas; as feitas não aparecem. Saber mostra "0 de 4 capítulos · 1 conquista" e um cartão-convite "Ninguém
precisa começar do zero". Nada liga uma coluna à outra, nem as duas ao passo acima: a tarefa "Cotar o seguro de vida"
não aponta módulo; o passo da reserva não aponta "Reserva de emergência" (que existe no capítulo 1).
**Por que importa:** Para o cliente, fazer sem entender é obediência, e entender sem fazer é curso. O valor do
planejador está na junção: "este passo pede isto; aqui está por quê". Como está, o Saber é um placar de curso online
colado ao lado da lista de tarefas.
**Recomendação:** Um bloco só, "O passo agora", com duas trilhas penduradas nele: à esquerda "Fazer por este passo:
2 feitas · 2 abertas · próxima: …", à direita "Entender este passo: Reserva de emergência, 2 min" (ou a revisão
espaçada do que já aprovou). O placar geral de capítulos sai do Painel e fica no Saber. Abaixo do bloco, uma linha
"Desde a apresentação (26/09): 4 tarefas feitas, 1 capítulo aprovado" começa a contar a história.

### P4 — Proteção em 38% com dependente e financiamento, e o Painel não diz o risco (alta)
**Tela/cartão:** "O que resolver: Saúde financeira — Proteção em 52"; Plano "Gestão de riscos 38% protegido, abaixo
de 70%"; tarefas "Cotar o seguro de vida do Marcos" e "Indicar os beneficiários do VGBL", atrasadas há 10 dias.
**Problema:** A família tem só plano de saúde (e o seguro habitacional do financiamento). Há uma filha, um
financiamento de R$ 368 mil com parcela de R$ 4.870 e dois sonhos que dependem da renda do Marcos. O Painel traduz
isso em dois números diferentes para a mesma coisa ("Proteção em 52" é o pilar do exame, "38% protegido" é a gestão
de riscos) e numa tarefa "Burocrática" com o mesmo peso de indicar beneficiários. Em nenhum lugar está o tamanho do
risco em dinheiro.
**Por que importa:** É a única lacuna que pode destruir o plano inteiro de um dia para o outro. Um planejador CFP
coloca proteção antes de acumulação quando há dependentes. O cliente, lendo "Proteção em 52" numa lista de quatro
itens, não sente urgência.
**Recomendação:** Proteção entra como pendência destacada do mundo (UX.md, "O que já está resolvido"), acima dos
objetivos atrasados: "Sem seguro de vida, se o Marcos faltar a família perde R$ X por mês; a Casa própria e a
liberdade param." Um número só para proteção em toda a área. A tarefa do seguro com roteiro (capital sugerido, tipo,
onde cotar) e com o módulo de Proteção. Sem emoji, sem alarme: uma frase de planejador.

### P5 — Objetivos atrasados sem a decisão ao lado (alta)
**Tela/cartão:** Painel "Os objetivos" (4 de 6 com "atrasa 14 meses", "atrasa 8 meses", "atrasa 2 anos", "atrasa 3
anos"); Objetivos "Os objetivos juntos pedem R$ 5.565 por mês — vocês põem R$ 2.500 de R$ 3.233 de sobra".
**Problema:** O Painel lista quatro atrasos em laranja e não diz o que fazer com eles. A tela de Objetivos tem o
controle deslizante e "Para todos chegarem na data: R$ 4.350 por mês. Ver assim", mas isso não chega ao Painel. A
regra decidida ("nenhum objetivo adianta; a sobra vai para os atrasados") não aparece em lugar nenhum, então o cliente
não sabe que os R$ 733 de sobra sem destino poderiam ir para a Casa própria.
**Por que importa:** Atraso sem decisão gera dois comportamentos ruins: desânimo ("o plano não fecha mesmo") ou
alavancagem (financiar a casa de praia). O trabalho do planejador é transformar atraso em escolha explícita: mais
aporte, data mais longa, ou tirar um objetivo da fila.
**Recomendação:** Sob a lista de objetivos no Painel, uma linha de decisão: "Os objetivos pedem R$ 5.565/mês; vocês
dedicam R$ 2.500 e sobram R$ 733 sem destino. Ver como priorizar ›" levando a "O caminho". Em cada linha atrasada, a
saída mais barata ("+R$ 920/mês fecha na data" ou "na data, com R$ 1.500, chega em set/2031"). Ordenar os objetivos
pela prioridade do plano, não pela data, e dizer qual é o próximo a receber a sobra.

### P6 — A reserva tem três alvos e nenhuma explicação (alta)
**Tela/cartão:** Herói "Reserva R$ 60 mil"; passo "de R$ 71,5 mil"; Plano "R$ 60 mil de R$ 102,1 mil"; Cadastrado
"R$ 38 mil de R$ 40 mil"; "O que resolver: Reserva e liquidez — entre a mínima e a aceitável".
**Problema:** Mínima (R$ 40 mil), aceitável (R$ 71,5 mil) e ideal (R$ 102,1 mil) aparecem em telas diferentes sem a
escada. O cliente que lê "R$ 60 mil de R$ 71,5 mil" no Painel e "de R$ 102,1 mil" no Plano acha que um dos dois está
errado.
**Por que importa:** Reserva é o conceito mais simples do plano e o que o cliente mais consulta em emergência
(persona 6). Três alvos sem escada tiram credibilidade dos outros números.
**Recomendação:** Falar em meses de custo de vida em toda a área ("R$ 60 mil · 5 de 8 meses"), como a própria
clínica já falou ("cobre cinco dos oito meses ideais"). Uma escada visível uma vez (no cartão do passo e no Plano):
mínima 3 meses feito · aceitável 5 meses agora · ideal 8 meses, no mundo Proteger. O número-chave do herói diz
"Reserva · 5 de 8 meses".

### P7 — A dívida de R$ 368 mil não existe no Painel, e o exemplo se contradiz (alta)
**Tela/cartão:** Plano "Dívidas R$ 368 mil"; Painel (nada); "Os próximos 12 meses" (nada); objetivo "Casa própria —
Sair do aluguel".
**Problema:** O financiamento do "Apartamento em Mogi (moradia)", R$ 368 mil de saldo, 9,5% a.a., parcela de
R$ 4.870 (cerca de 38% dos R$ 12.767 do presente), é a maior saída fixa da família e não aparece no Painel nem no
cartão dos 12 meses. Ao mesmo tempo, o objetivo "Casa própria" tem o porquê "Sair do aluguel", o que não combina com
um imóvel de moradia financiado. Ou é inconsistência do exemplo, ou falta explicar que é troca de imóvel.
**Por que importa:** Com juro de 9,5% mais TR, "amortizar ou investir" é a decisão de maior valor financeiro que esse
casal tem nos próximos anos, maior que a escolha de CDB. Uma dívida invisível também distorce a leitura de "R$ 1,8
milhão de patrimônio" e de "20% para o futuro".
**Recomendação:** Um número-chave de dívida no Painel (saldo, parcela, quando acaba, custo real) ligado ao Plano, e a
pergunta "amortizar ou investir" como tema de pauta da reunião de 26/03. Corrigir o exemplo: ou o apartamento é
alugado a terceiros, ou o objetivo é "trocar o apartamento pela casa".

### P8 — Os números de aporte não batem entre as telas (alta)
**Tela/cartão:** "A poupança" e "Os próximos 12 meses" (R$ 2.500/mês; R$ 39,5 mil para o futuro); Objetivos (controle
em R$ 3.330/mês; "R$ 2.500 de R$ 3.233 de sobra"; "O presente segue com R$ 12.767").
**Problema:** Quatro valores para "quanto vai para o futuro": R$ 2.500 (aporte feito), R$ 3.233 (sobra), R$ 3.330
(posição do controle) e R$ 39,5 mil/ano (R$ 3.292/mês). E a frase "tudo o que foi combinado" ao lado de R$ 2.500.
**Por que importa:** Induz decisão ruim: o cliente conclui que cumpre o combinado e que o atraso dos objetivos é
inevitável, quando há R$ 700 a R$ 800 por mês de sobra sem destino. É o oposto do que o planejador quer.
**Recomendação:** Um só número de aporte combinado em toda a área, e a sobra tratada à parte: "sobra R$ 3.233;
combinado R$ 2.500; R$ 733 sem destino → vão para a Casa própria (a mais atrasada)". O controle de Objetivos começa no
valor combinado, não num terceiro número.

### P9 — Cinco contagens de execução espalhadas (média)
**Tela/cartão:** "Nesta semana, 0 de 1 respondidas"; "Neste mês 4 de 7 feitas"; "2 atrasadas"; "O que resolver: 2
tarefas atrasadas"; "A poupança: 1 mês seguido".
**Problema:** A mesma execução contada cinco vezes, com três janelas diferentes (semana, mês, desde outubro). "0 de 1"
na segunda linha da coluna Fazer soa a cobrança sem contexto, e "1 mês seguido" é uma sequência de um.
**Por que importa:** Dispersa a atenção e mistura o que é hábito (teto da semana), o que é compromisso (aporte) e o que
é pendência (burocrática).
**Recomendação:** Um placar único no bloco do passo: "Outubro: aporte feito · 4 de 7 tarefas · 2 atrasadas". O Ritmo do
UX.md ("1 de 1 aporte no ritmo combinado desde o plano") substitui "A poupança" até haver três meses.

### P10 — Fazer sem histórico e sem efeito no objetivo (média)
**Tela/cartão:** Painel Fazer; Tarefas "Respondidas (6)" recolhida; Realizado.
**Problema:** As feitas só existem como "4 de 7". Não há "desde 26/09", não há o que o aporte de outubro mudou na Casa
própria, não há o que vem depois (novembro: aporte, teto; o 13º em dezembro). O cliente não vê o que construiu nem o
que vem.
**Por que importa:** A tese do produto é "marca se fez → o plano mostra a diferença". Sem o efeito ("R$ 2.500 em
outubro: a Casa própria passou de 25% para 26%"), marcar "fiz" é burocracia.
**Recomendação:** No cartão Fazer, duas linhas: "Desde a apresentação: 4 feitas · 1 parcial" e "Próximas: aporte de
novembro (dia 5) · teto da semana". Em Tarefas, a seção de feitas aberta, por data, com o efeito em uma frase. O 13º
como tarefa prevista desde já ("em novembro: quanto do 13º vai para a reserva?").

### P11 — As tarefas não dizem para quê, e as duas atrasadas têm o mesmo peso (média)
**Tela/cartão:** Tarefas e Painel: "Cotar o seguro de vida do Marcos — combinada na reunião de 26/09"; "Indicar os
beneficiários do VGBL da Icatu — combinada na reunião de 26/09".
**Problema:** O UX.md manda toda tarefa nomear o objetivo ou o passo a que serve. "Combinada na reunião" é origem, não
propósito. Cotar o seguro (protege a Luiza e os dois sonhos) e indicar beneficiários (evita inventário no VGBL) são de
gravidade diferente e aparecem iguais, com o rótulo "Burocrática" voltado ao cliente.
**Por que importa:** Sem o "para quê", a tarefa atrasada vira culpa; com ele, vira escolha informada. E a ordem errada
faz o cliente resolver o fácil primeiro.
**Recomendação:** Cada tarefa com "para…" ("para proteger a Luiza e a Casa própria") e a pendência ou passo de origem.
Ordenar por impacto, não por data. Trocar "Burocrática" por algo que o cliente entenda ("Contratar", "Documento").

### P12 — Saber: trilha única, de investidor, e sem os capítulos que esta família precisa (média)
**Tela/cartão:** Saber: 4 capítulos (O dinheiro e o tempo; Renda fixa; Risco e carteira; Imposto, previdência e
herança).
**Problema:** Três dos quatro capítulos são de investimento. Não há capítulo de orçamento e sobra (o teto da semana é
tarefa deles), de dívida (financiamento: amortizar ou investir), de proteção (o pilar mais fraco deles) nem de
liberdade financeira (o objetivo principal). A trilha é a mesma para todo cliente, na mesma ordem, sem "para o seu
passo agora" e sem ligação com os sete mundos.
**Por que importa:** Para Ana e Marcos, aprender marcação a mercado antes de entender seguro de vida é estudar a
matéria errada. O Saber deveria explicar o plano deles, não a renda fixa em geral.
**Recomendação:** Sete capítulos espelhando a escalada (orçamento e dívida; objetivos e liberdade; reserva e juros;
aportes e caixinhas; proteção e previdência; carteira e imposto; retirada e sucessão), todos abertos, com o do passo
atual e o da pendência destacada em "Para o seu passo agora". Cada tarefa e cada passo apontam o módulo; o módulo usa
os números deles ("a reserva de vocês cobre 5 dos 8 meses"). Nivelamento de cinco perguntas na primeira visita, em
vez do convite "marque o que já domina".

### P13 — "O que resolver" repete o herói e o Fazer e mistura pendência do cliente com pendência do planejador (média)
**Tela/cartão:** Painel "O que resolver": "2 tarefas atrasadas"; "Saúde financeira — Proteção em 52"; "Reserva e
liquidez — entre a mínima e a aceitável"; "Aprofundar Investimentos — com o planejador, na próxima reunião · o plano
está 94% preenchido".
**Problema:** A reserva é o passo do herói; as tarefas atrasadas são o Fazer; "Aprofundar Investimentos · 94%
preenchido" é trabalho do planejador que parece pendência do cliente.
**Por que importa:** O cliente lê quatro problemas quando tem dois de verdade fora do passo (proteção e a decisão sobre
os objetivos). Repetição dilui a pendência que importa.
**Recomendação:** "O que resolver" vira "Pendências fora do passo": só o que não está no passo nem na lista de tarefas
(proteção, dívida, prioridade dos objetivos), cada uma com a ação. "Aprofundar Investimentos" vai para a pauta da
próxima reunião no cartão da planejadora.

### P14 — O teto do mês sem o efeito e sem as fixas (média)
**Tela/cartão:** "O teto do mês: R$ 5.300 nos gastos ajustáveis, as fixas à parte · Passou R$ 193 nas semanas
respondidas… as 2 semanas que faltam ficam com R$ 1.093 e R$ 937."
**Problema:** Bom cálculo, mas solto: não diz o que acontece se passar ("sai do aporte da Casa própria de novembro") e
"as fixas à parte" esconde R$ 4.870 de parcela e o resto do orçamento. O cartão está na coluna direita, longe da
tarefa "Teto da semana" que está no Fazer.
**Por que importa:** O teto é o único instrumento de curto prazo que o cliente controla; sem consequência explícita,
é um número.
**Recomendação:** Juntar o teto à tarefa comportamental dentro do bloco do passo, com a consequência em uma frase e o
link para o orçamento do mês no Realizado (entradas, fixas, ajustáveis, futuro).

### P15 — "O plano fecha" na liberdade pode dar conforto falso (média)
**Tela/cartão:** Painel "Liberdade financeira · aos 57 · 12% do caminho · o plano fecha"; Plano "Objetivos 1 de 5 no
caminho, 4 pedem ajuste"; Objetivos "2 de 6 na data".
**Problema:** "O plano fecha" sem dizer de que depende (o aporte de R$ 2.500 mantido, a reserva completa, a proteção
contratada). Enquanto isso, 38% de proteção e reserva incompleta. E as contagens "1 de 5" e "2 de 6" convivem.
**Por que importa:** O cliente lê "o plano fecha" e relaxa; um sinistro sem seguro derruba a liberdade antes de qualquer
mercado.
**Recomendação:** A linha da liberdade com a condição: "fecha aos 57 se o aporte segue e a proteção é contratada". Uma
contagem só de objetivos em toda a área (incluindo ou não a liberdade, mas sempre do mesmo jeito).

### P16 — O Realizado vazio no primeiro mês (média)
**Tela/cartão:** Realizado: "Contra qual plano", "R$ 2.500 de R$ 2.500 planejados · out: fiz", botão "Lançar um mês".
**Problema:** A tela da reunião de acompanhamento começa pela explicação metodológica ("cada mês é comparado com a
versão do plano…") e tem um dado. Nada de patrimônio (há o lançamento de set/2026, R$ 1,8 milhão), de reserva, de
teto das três semanas respondidas, de saúde financeira (64 → 71).
**Por que importa:** É onde o cliente vai ver, em março, se o plano funcionou. Vazio em outubro, ele não cria o hábito
de voltar.
**Recomendação:** O Realizado nasce com a foto do plano de 26/09 como linha de base e mostra o que já existe: aporte
de outubro, teto por semana, patrimônio e reserva na última leitura, nota do exame. "Contra qual plano" vai para o
rodapé. "Começou em outubro" em vez de tela vazia.

### P17 — Jornada: a escalada é uma barra sem trilha, sem resolvido/falta e sem os três números (média)
**Tela/cartão:** Jornada, "A escalada": sete segmentos, Construir marcado, "Vocês estão em Construir. Tenho base para
subir? O passo agora: completar a reserva aceitável."
**Problema:** Falta tudo o que o UX.md previa para a escalada: a trilha de passos do mundo atual, o que já está
resolvido (orçamento, plano) e o que falta (seguros como pendência destacada, carteira, sucessão), os marcos, os três
números (caminho até a liberdade 12%, o ano, o ritmo). "Comitês de investimentos mensais · desde set/2026, todo mês"
sem data nem gravação. No celular, a Jornada fica dentro de "Mais".
**Por que importa:** A escalada é o esqueleto do planejamento; hoje é uma etiqueta. Sem "resolvido / falta" o cliente
não vê que a área está construindo algo cumulativo.
**Recomendação:** A escalada com a trilha de Construir aberta, a lista "resolvido · em andamento · falta" e os três
números. O cartão do passo e o Painel apontam para ela ("ver onde isso está na escalada").

### P18 — Nada prepara o cliente para a reunião de acompanhamento (média)
**Tela/cartão:** Painel "Quem acompanha vocês · Patrícia Lemos · 1º acompanhamento · 26/03/2027"; Jornada.
**Problema:** O que o planejador quer que o cliente veja antes de 26/03: o que ficou combinado em 26/09 e o estado de
cada item (seguro de vida, beneficiários, aporte, teto), o que mudou nos números (patrimônio, reserva, nota) e as
decisões que vão para a mesa (amortizar ou investir, prioridade dos objetivos, carteira). Nada disso está no cartão;
a Jornada tem a data e o "lembrete para agendar chega em 12/03".
**Por que importa:** Reunião sem preparação do cliente é reunião de reapresentação; com preparação, é reunião de
decisão. É o que diferencia o acompanhamento do relatório.
**Recomendação:** O cartão da planejadora com "O que ficou de 26/09: 2 de 4 feitos" e "Pauta de 26/03: investimentos,
prioridade dos objetivos, seguro de vida, amortização". Na Jornada, a reunião passada com o resumo e as tarefas que
nasceram dela, como o UX.md descreve.

### P19 — Cadastrado: o passo diz "tudo para a reserva" e a tarefa manda R$ 1.500 para a casa (média)
**Tela/cartão:** Painel cadastrado: herói "Até a reserva mínima, todo dinheiro que sobra vai para ela"; passo "R$ 38
mil de R$ 40 mil · Com a sobra inteira, R$ 2.500 por mês, chega em 1 mês"; única tarefa "Aporte de outubro: R$ 1.500
para Casa própria · atrasada há 15 dias".
**Problema:** O passo e a tarefa se contradizem na mesma tela.
**Por que importa:** No self-service não há planejador para explicar; o cliente faz um ou outro e perde a confiança
na régua.
**Recomendação:** Enquanto a reserva mínima não está completa, a tarefa de dinheiro é "R$ 2.500 para a reserva
mínima; em novembro, volta para a Casa própria". Faltando R$ 2 mil, dizer "este é o último aporte da reserva".

### P20 — Celular: o passo cai abaixo da dobra e o Saber e a Jornada somem em "Mais" (baixa)
**Tela/cartão:** Painel no celular.
**Problema:** "Por que este passo" em serifa grande, três números-chave e só então o cartão do passo, que começa a
cerca de 700 px; o botão "Ver a reserva" fica fora da primeira tela. O UX.md pede o passo acima da dobra. Saber e
Jornada estão dentro de "Mais".
**Por que importa:** O celular é o uso diário, saindo do WhatsApp: o cliente vem conferir o passo e marcar a tarefa.
**Recomendação:** No celular, o herói em faixa compacta (propósito em uma linha, números em uma linha) e o cartão do
passo visível sem rolar. Se o Saber vira braço do passo (P3), ele não precisa de aba própria na barra.

## A ordem ideal do Painel (de cima para baixo)

1. **Saudação e a situação em uma linha** — "Outubro: aporte feito, 2 tarefas atrasadas, 2 de 6 objetivos na data."
   Responde "está tudo em dia?".
2. **O propósito e os objetivos** (herói) — a frase do propósito, a faixa dos objetivos com data e progresso, a
   liberdade primeiro, e a linha de decisão "pedem R$ 5.565; dedicam R$ 2.500; R$ 733 sem destino · ver como
   priorizar". Responde "para onde vamos e estamos no rumo?".
3. **Os números-chave** (dentro ou logo abaixo do herói) — reserva em meses de custo, patrimônio, dívida, sobra ×
   aporte combinado, saúde financeira como evolução. Responde "quanto tenho, quanto devo, quanto guardo?".
4. **O passo agora, com a trilha** — o passo, o critério e a data prevista, o que ele protege, e a trilha do mundo
   (feitos · atual · por vir). Responde "o que estamos construindo agora e quanto falta?".
5. **Fazer por este passo** — a próxima tarefa (a atrasada mais importante) com as quatro respostas; "mais N nesta
   semana"; "desde 26/09: 4 feitas". O teto do mês aqui, com a consequência. Responde "o que faço hoje e o que já fiz?".
6. **Entender este passo** — o módulo de 2 min ligado ao passo ou à pendência, ou a revisão espaçada. Responde "por
   que isso importa?".
7. **Pendências fora do passo** — proteção (o risco em dinheiro e a ação), dívida (amortizar ou investir), prioridade
   dos objetivos. Responde "o que pode derrubar o plano?".
8. **Ritmo** — aportes no ritmo combinado desde o plano e o efeito no objetivo ("outubro: a Casa própria andou 1%").
   Responde "estou cumprindo e isso está fazendo diferença?".
9. **Os próximos 12 meses** — renda prevista, presente × futuro, com o aporte combinado consistente com o resto.
   Responde "qual é o tamanho do esforço no ano?".
10. **A próxima reunião** — a planejadora, a data, o que ficou da reunião anterior e a pauta. Responde "quando falo
    com alguém e sobre o quê?".
