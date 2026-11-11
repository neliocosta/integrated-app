# Área do cliente · Documento final: os ajustes a fazer (03/11/2026)

Resultado de três rodadas de revisão de `area-cliente.html` por quatro olhares (planejador financeiro, cliente,
psicologia comportamental, UX), cada rodada lendo a área como se a anterior já estivesse aplicada. O
[Documento 1](DOCUMENTO-1-o-que-fazer.md) deu a espinha; o [Documento 2](DOCUMENTO-2-o-que-melhorar.md) corrigiu
o que ela quebrava; a rodada 3 ([rodada-3/](rodada-3/)) verificou contradições, orçamento, excesso e o que cabe na
primeira versão. Este documento substitui os dois anteriores: é a lista final, organizada por tela, com as regras
escritas, os cortes feitos e a divisão entre primeira e segunda versão. Nada aqui é código. O inventário do estado
atual está em [inventario.md](inventario.md); os pareceres de cada rodada estão nas pastas `rodada-1/`, `rodada-2/` e
`rodada-3/`.

As restrições do dono valem em tudo: tom sóbrio, sem emoji, medalha, mascote ou jogo; a mesma estrutura para todo
degrau, mudando só a profundidade; o objetivo é o protagonista; a escalada de sete mundos é o esqueleto, mas o mapa
só aparece na Jornada; visual Livro decidido.

---

## 1. O diagnóstico, em uma página

A página parece solta porque não desenha o esqueleto do produto. O produto é aninhado (propósito → objetivos → mundo →
passo → tarefa), mas a tela mostra o passo no herói, as tarefas sob um título genérico ("Melhorar o futuro
financeiro"), os objetivos no quarto bloco e uma coleção de cartões de peso igual depois. Fazer e Saber não são duas
verticais: são dois braços do passo, e a simetria das colunas sob um slogan é o que as faz parecer soltas. O passado
não existe (tarefas feitas somem, a barra do passo não tem ponto de partida, o Realizado está vazio). Toda falta
aparece sem saída (atrasos ditos três vezes em laranja, quatro objetivos que "atrasam anos" sem dizer que é por
desenho do plano). O passo não tem motor nem horizonte. Os números não batem entre telas (três alvos para a reserva,
quatro valores para o aporte, cinco contagens de execução). E nada chama de volta.

A cliente resumiu o critério de sucesso: responder "estamos no rumo?" no domingo e "o que faço hoje?" na terça, na
primeira dobra, e sair em menos de um minuto sem culpa quando não há nada a fazer. Com os ajustes abaixo, as cinco
perguntas dela passam de nenhum "sim" (hoje) para quatro "sim" e um "em parte".

## 2. Os princípios que valem para toda a área

Regras transversais, consolidadas das três rodadas. Toda tela e todo texto novo é testado contra elas.

1. **Uma espinha, uma ordem.** Sete blocos no Painel, na mesma ordem no celular e na coluna principal do desktop,
   cada um respondendo a uma pergunta. Nenhum bloco repete um número de outro.
2. **Na primeira dobra, um de cada tipo:** uma frase em serifa (o título do passo), um laranja (o botão), uma
   pendência destacada, uma linha de Saber. O propósito é contexto, não protagonista.
3. **Orçamento de dobra.** No celular (375 px), até 14 elementos antes do botão e o botão abaixo de 480 px (aparelho
   de referência: 667 px para o herói, 844 px para o bloco 2); o bloco "Esta semana" com até 12 elementos e 380 px.
   "Uma linha" é uma linha tipográfica, não uma frase de 90 caracteres. O bloco 0 tem no máximo duas linhas.
4. **Uma falta por tela, dita uma vez, sempre com a saída na mesma frase.** A palavra é "abertas desde dd/mm", nunca
   "atrasadas" em laranja. Laranja só na pílula e nas barras. O tom muda pelo histórico: primeira vez, neutro; segunda
   vez seguida, a saída fácil em destaque; terceira, proposta à planejadora com aviso prévio. A fila de faltas tem três
   tipos (aporte, tarefa, proteção) com contador por tipo; o teto não é falta, é estado.
5. **Nenhum atraso sem causa e sem saída que caiba no bolso.** A causa é "no plano desde 26/09" (desenho) ou "desde o
   aporte de outubro" (execução); só a segunda gera tarefa. Saída por regra: cabe na sobra; cabe no que o passo libera;
   ou é decisão de data ou tamanho para a reunião.
6. **Um número por grandeza em toda a tela.** Reais para valores, meses só nos rótulos das marcas; um aporte
   combinado; um verbo para execução ("feitas"); uma contagem de objetivos; uma data futura por tela.
7. **Uma pendência vive num lugar só, e o nome dela aparece no máximo em dois.** Com tarefa, está em "Esta semana" (e
   no botão quando é a ação do dia); na pauta, em "Com a Nord"; o resto em "Pendências do plano". A frase do risco
   aparece uma vez por tela: no bloco 4 do Painel e como "para quê" na folha da tarefa.
8. **A tela não decide dinheiro.** Todo real sem destino (sobra, 13º, dinheiro que entra, reserva liberada ao
   concluir o passo, recomposição depois de um imprevisto) segue a cascata gravada pela planejadora; onde a cascata
   não está gravada, a tela não promete destino, propõe. Nenhuma frase com número é escrita à mão: todas são saídas do
   mesmo cálculo, com a fonte visível.
9. **O consultor prevalece sobre a régua.** No Completo e na Clínica com foco, o passo e o próximo passo são os da
   trilha gravada; a régua só move no Cadastrado e na Clínica sem foco; a mudança de mundo é sempre decisão gravada.
10. **Dado ausente vira uma linha com dono e data**, nunca vazio nem inventado ("a Patrícia define em 26/03").
11. **Orçamento de atenção.** No máximo duas perguntas por semana (uma de dinheiro ou compromisso, uma outra) e oito
    por mês mais uma sazonal. WhatsApp e tela são um canal só: respondida num, não aparece no outro. Precedência: saída
    de um "não fiz" aberto › aporte no dia dele › teto na segunda (vale até quarta, depois vira combinado) › a sazonal
    no fechamento › "fiz?" da burocrática mais antiga do membro logado › proposta (uma por trimestre) › pauta (30 dias
    antes) › Saber.
12. **O feito abaixo do pedido, sempre com o efeito no objetivo e o próximo gesto.** Contagem só com denominador. A
    conquista é do objetivo, nunca do cliente; sem adjetivo, sem "parabéns".
13. **Toda figura de progresso mostra ao menos um item anterior e um posterior ao atual** (feito · atual · próximo).
14. **Toda promessa feita em nome da planejadora tem um fallback que não é o cliente.** No terceiro dia útil a fila
    escala à operação da Nord e a tela diz "a Nord está resolvendo", nunca um atraso dela em vermelho.
15. **Plural para o casal, nome só no toque.** A tarefa tem responsável; a resposta de "os dois" é do casal; a frase do
    risco só para o responsável logado, em segunda pessoa; sem contador de dias na tarefa do outro.

## 3. Decisões do dono antes de desenhar

Nenhum desenho começa sem estas. A recomendação dos revisores está entre parênteses.

1. **O passo do exemplo**: "Completar a reserva aceitável" (régua, R$ 71,5 mil) ou "Completar a reserva com o resgate
   do BTG" (plano publicado, R$ 102,1 mil). Trava os números do herói, do passo e dos objetivos. (Recomendação: o
   plano prevalece; o passo nomeia o resgate e a escada marca aceitável e ideal como "com o resgate".)
2. **A cascata da sobra**: regra fixa do produto ou default que a planejadora muda por cliente. (Recomendação: default
   por cliente, com a ordem proteção › reserva até o alvo › dívida mais cara que o plano › objetivos na ordem
   combinada.) E se a tarefa de transição ao concluir um passo nasce sozinha ou como proposta. (Proposta no Completo,
   automática nos outros degraus.)
3. **Corrigir o exemplo antes de fechar números**: "Apartamento em Mogi (moradia)" financiado convive com aluguel de
   R$ 3.000 e com o objetivo "Casa própria: sair do aluguel". A correção muda a sobra, o teto e o aporte combinado.
4. **A Nord intermedeia seguro ou só indica?** Decide se "a Patrícia pode cotar por vocês" existe e o que a tela diz
   sobre remuneração. Confirmar com o compliance as trocas de texto da seção 15.
5. **O rótulo do botão**: até 26 caracteres com complemento em cinza abaixo (recomendado) ou pílula de duas linhas.
6. **A palavra para a falta**: "abertas desde 10/10" (recomendado) ou "atrasadas".
7. **O propósito em DM Sans** (cinza-escuro, 16 px, acima do cartão; recomendado, porque muda o que se lê primeiro) ou
   em serifa, disputando com o título do passo.
8. **As conquistas do Saber**: lista própria, como a memória do dono registra, ou dissolvidas na trilha (as de fazer
   são passos feitos) e nas datas dos capítulos (as de saber). (Recomendação: dissolvidas; a aba Saber fica com a fila
   e os capítulos.)
9. **O Realizado na primeira versão**: não existe (recomendado), item de "Mais", ou segunda vista do Plano com três
   meses de registro.
10. **Onde vive a preparação da reunião**: entrada da próxima reunião na Jornada, aberta (recomendado), ou página de
    Atendimento.
11. **O cabeçalho no celular**: Atendimento só com ícone e contador (recomendado; faz a saudação caber em uma linha)
    ou com rótulo e a saudação só com quem está logado ("Boa noite, Ana").
12. **"Lembrar o Marcos"**: a mensagem é da Nord no WhatsApp dele (recomendado; exige o consentimento dele) e nunca "a
    Ana pediu".
13. **Quanto da tabela por mundo entra na primeira versão**: Sobreviver e renda irregular sim; Desfrutar fica para a
    segunda, porque a régua não tem o ramo 7.
14. **O Saber fora da barra do celular** enquanto for uma linha no Painel (regra: entra na barra no dia em que tiver um
    bloco com título).

---

## 4. O Painel: a estrutura final, bloco a bloco

Ordem única, no celular e na coluna principal do desktop. Desktop: herói na largura toda; blocos 2 e 3 na coluna
principal (600–720 px); blocos 4, 5 e 6 no trilho lateral fixo de 300 px, alinhado ao título do bloco 2, com títulos de
20 px (24 na coluna); calha de 24; abaixo de 1080 px, uma coluna na ordem 0 → 6. Três níveis tipográficos: título de
bloco (serifa, um por bloco), rótulo de faixa (DM Sans, cinza, caixa normal), corpo. Espaço entre blocos ao menos o
dobro do espaço entre cartões. Placares são linhas de texto sob o título, não cartões.

### Bloco 0 · A linha de situação (sem título, sob a saudação)

- **Saudação** em 24 px, uma linha. Atendimento no cabeçalho como botão com contador (ícone no celular, rótulo no
  desktop); é a única entrada para "falar com alguém" no cabeçalho; o balão sem rótulo sai.
- **Três fatos em ordem fixa**, até 22 caracteres cada, separados por "·", sem laranja, sem verbo de cobrança: (1) o
  dinheiro do mês ("Aporte em 5/11"; "Hoje: aporte R$ 2.500"; na segunda, "Até R$ 1.093 esta semana"); (2) a execução,
  nesta precedência: "2 abertas desde 10/10" › "2 para esta semana" › "tudo feito"; (3) os objetivos ("2 de 6 na
  data").
- **Segunda linha de novidade**, só quando a última visita foi há mais de dois dias e houve evento de uma lista
  fechada (resposta da planejadora; versão nova do plano; passo concluído; reserva ou patrimônio atualizados; semana
  fechada no teto), até dois itens, some na visita seguinte. Quando existe, **substitui** o terceiro fato, não soma:
  o bloco 0 nunca passa de duas linhas tipográficas.
- **No primeiro acesso do mês**, o primeiro fato é "Outubro fechado · ver ›" (rola até o bloco 5); o registro "desde o
  plano" não sobe ao topo: vive atrás de "o que mudou ›" no bloco 6 e na preparação da reunião.
- **Quando nada mudou**, a linha diz o próximo marco com data. **Quando piorou**, nomeia a falta uma vez, em data
  neutra, com a saída na mesma frase; a segunda falta vai para o bloco 2 e sobe quando a primeira tiver saída. Uma falta
  fica na linha por no máximo 30 dias; depois vira pendência do bloco 4 e item da planejadora.
- **Celular**: a linha inteira é um alvo só de 44 px (leva ao bloco 2); no desktop cada fato leva ao seu bloco.
- **Por degrau**: visitante, ausente; cadastrado na primeira semana, "Primeira semana · 1 tarefa sugerida · 1
  objetivo"; clínica e completo iguais.

### Bloco 1 · O propósito e o passo (herói; cartão "O passo agora")

- **O propósito**, uma linha de até 70 caracteres no celular, em DM Sans cinza-escuro acima do cartão, em todo degrau
  que o tenha (o código deixa de zerar o propósito no Completo; ele vem do capítulo Propósito do relatório). A frase
  já nomeia o passo: "Para a casa de vocês e a liberdade aos 57, um imprevisto não sai desse dinheiro." O rótulo "Por
  que este passo" e a frase longa saem.
- **O cartão**, peça única e centrada: rótulo "O passo agora"; título do passo em serifa; a figura; **uma** linha de
  síntese ("Faltam R$ 11,5 mil · com o resgate do BTG, em novembro"); o botão da ação do dia; a linha de complemento ou
  estado abaixo do botão; o link "Ver o passo ›". As três linhas completas (faltam, ritmo com fonte, atalho) ficam na
  tela do Passo. "E ao mesmo tempo" sai do cartão: o aporte do mês é tarefa e vive no bloco 2.
- **A figura** tem quatro variantes decididas pelo critério do passo: **escada** (reserva: três marcas nomeadas em
  reais, mínima · aceitável · ideal, com os meses só no rótulo, o valor atual, o ponto de partida datado, a marca feita
  com sinal textual "feita" e a **marca alvo do passo destacada mesmo quando não é a próxima**, com as intermediárias em
  cinza "passa no caminho"; dívida cara: uma marca, o zero, com o saldo descendo), **contagem** ("2 de 3 meses
  seguidos", três posições), **única** (uma tarefa com data) e **sem data** ("no ritmo de hoje, sem data; com
  R$ 300/mês, março"). A mesma escada da reserva aparece no Passo e no cartão Reserva do Plano.
- **O botão da ação do dia**, rótulo de até 26 caracteres, decidido por tabela: (1) o dia do aporte, ±1 dia útil
  ("Marcar o aporte de novembro" / complemento "R$ 2.500 · Casa própria R$ 1.500, reserva R$ 1.000"; com aporte
  automático, "Confirmar o aporte" / "saiu em 5/11?"); (2) a segunda-feira ("Combinar a semana" / "até R$ 1.093 nos
  gastos que vocês controlam"; quando coincide com o aporte, o aporte vence e o teto vai para a linha do bloco 2);
  (3) a tarefa aberta mais antiga, por impacto, **do responsável logado ou "os dois"**; (4) a próxima tarefa por data;
  (5) nenhuma: **sem pílula**, e a linha diz "Nada para hoje · a próxima é em 5/11". Educacional nunca passa na frente
  de dinheiro ou proteção. Depois de feita, o botão muda de estado ("Feito por hoje · próxima: 5/11") só quando não há
  outra tarefa aberta do membro logado; senão "Respondido · fica: seguro (20 min)". O botão **nunca** é "Lembrar o
  Marcos": a tarefa do outro vive no bloco 2. No cadastrado sem tarefa aceita: "Aceitar a tarefa" / "R$ 1.500 para a
  reserva mínima, no dia 5", com "não agora" como link. A linha sob o botão tem um papel só: o complemento ou o estado;
  a lista "e mais 2" e o link "outra tarefa" saem.
- **Estados do cartão**: *sem ação* (sem pílula); *concluído* (o fechamento sóbrio uma vez, na primeira visita com mais
  de 30 segundos depois do evento, nunca por cima de uma tarefa aberta, botão único "Seguir", nunca repete; depois,
  "Reserva aceitável completa em 19/10" como rótulo do cartão por um ciclo e o próximo passo da trilha gravada com a
  figura dele; se o próximo já está satisfeito, pula para o primeiro não feito só no Cadastrado e na Clínica sem foco);
  *sem foco* ("Reserva aceitável completa em 19/10. A Patrícia define o próximo passo até 26/10", sem a sugestão da
  régua); *em conversa* ("em conversa com a Patrícia desde 10/11", e o botão passa à tarefa seguinte para não travar o
  dia); *origem vencida* (passada a data da origem única, a síntese vira a falta com a saída: "o resgate do BTG,
  previsto para novembro, não entrou · a Patrícia foi avisada em 2/12").
- **Números-chave** em rodapé, fora da parte clara da foto, em texto pequeno: patrimônio; reserva ("R$ 60 mil · entre
  a mínima e a aceitável · **um imprevisto? ›**"); dívida quando existe ("Dívidas R$ 368 mil · parcela R$ 4.870 ·
  9,5% a.a. + TR"). A nota do exame sai do rodapé diário (só muda com exame novo; vive no Plano). Cada número abre a
  área dele e sabe onde se corrige ("Atualizar o patrimônio" no toque; "Lançar um mês" como tela sai).
- **Por degrau**: visitante, convite ao exame sem figura e botão "Fazer o exame"; cadastrado, passo da régua; clínica,
  foco da consultora com a marca alvo destacada; completo, passo do plano (enquanto não gravado, "sugerido pela
  escalada; a Patrícia confirma na próxima reunião").

### Bloco 2 · Esta semana

- **Título** "Esta semana"; **subtítulo** "Para completar a reserva aceitável · Outubro: 4 de 7 feitas" (o denominador
  resolve o licensing; os nomes das que faltam não entram); link "Todas as tarefas ›".
- **Agora**: o único cartão do bloco. A próxima tarefa do membro logado ou de "os dois", com círculo "Fiz" a um toque;
  título; de quem e para quê ("Ana · para proteger a Luiza"); minutos e primeiro gesto ("15 min: abrir o app da
  seguradora"); "desde 10/10" em cinza; "mais 1 em aberto ›". Quando o botão do herói já é esta tarefa, o cartão não
  repete o botão. **A tarefa do outro** ocupa o lugar de "mais 1" quando é a única outra aberta: "Mais 1, do Marcos:
  cotar o seguro de vida · lembrar ›", sem contador de dias; "lembrar" manda uma mensagem da Nord com os fatos, no máximo
  uma por tarefa a cada sete dias, com estado depois ("lembrado em 14/1").
- **Respondidas**: no celular uma resposta, a última, de qualquer tipo, com data e efeito ("Aporte de outubro, 5/10 · a
  Casa própria ficou R$ 1.500 mais perto · ver as 4 ›"; "Aporte de janeiro · não fiz · todos atrasam 1 mês; o próximo
  aporte sobe R$ 72"); no desktop, duas. Depois de escolhida a saída de um "não fiz", mostra a saída ("adiado para
  20/11"), não a falta.
- **Depois**: uma linha com a próxima data e valor ("5/11: aporte de novembro, R$ 2.500"; "em novembro: R$ 2.500 do 13º
  para a reserva, combinado em out"). É a única linha da tela com essa data.
- **A linha do teto** só aparece aqui quando não é o botão do herói ("Faltam R$ 400 até domingo", só com dado).
- **Uma linha de Saber**, que muda por regra (seção 8). A pergunta do dia vive no toque dela, não como cartão.
- **Estado vazio**: Agora vazio diz "Nada para esta semana" (sem data; a data é da linha Depois); Respondidas sem
  resposta, ausente.
- **Orçamento**: até 12 elementos e 380 px no celular. Agora antes de Respondidas: o feito fica abaixo do pedido.
- **Por degrau**: visitante ausente; cadastrado com a tarefa sugerida (aceitar / não agora) e sem Carteira; clínica com
  as orientações da consultora e a frase dela no toque; completo com as do plano.

### Bloco 3 · Os objetivos

- **A linha de cima**, dita uma vez: "Os seis pedem R$ 5.565/mês; o combinado é R$ 2.500. Os R$ 733 que sobram ficam na
  reserva até a reunião de 26/03 · ver a ordem ›" (com a cascata gravada: "… vão para a Casa própria, a primeira da
  ordem combinada"). O controle deslizante de Objetivos começa no valor combinado.
- **Liberdade financeira na primeira linha**, com a condição completa: "na data, com R$ 1.000 agora e R$ 2.500 a partir
  de jul/2030, e a proteção contratada"; no toque, a medida única em renda mensal de hoje ("o guardado rende hoje
  R$ 2.750/mês dos R$ 20.800 que faltam além do INSS · projeção com rentabilidade real de 0,4% ao mês, não é
  garantia"). "12% do caminho" sai. A data da liberdade só muda por decisão gravada na revisão semestral; entre
  revisões o selo diz "na data · revisto em 26/09" e o desvio vai ao Plano.
- **Até seis objetivos, uma linha de 40 caracteres cada**: nome · data · situação ("na data" / "jul/2030 · no plano desde
  26/09" / "desde o aporte de outubro"). Selo com texto, nunca só cor; nenhuma barra por objetivo, só o traço fino.
  **A saída como segunda linha só no objetivo que recebe a sobra**, calculada pela cascata; os demais levam só a causa.
  Acima de seis, "Todos ›". Os objetivos com o nome de quem são ("Intercâmbio da Luiza").
- **Estado vazio**: cadastrado sem objetivo recebe o único convite grande da tela, com exemplos na escala da renda; no
  Sobreviver, "o primeiro objetivo nasce quando a dívida acabar; quer dar nome a ele?".

### Bloco 4 · Pendências do plano

- Só o que não tem tarefa nem pauta, mais a **exceção única**: a proteção, enquanto a cotação não foi feita, com a frase
  do risco sem repetir o nome da tarefa. Uma pendência destacada por vez, escolhida pelo risco irreversível (proteção
  com dependente sem cobertura › dívida com juro acima do rendimento do plano › prioridade dos objetivos); as demais como
  linha de uma palavra em cinza; no máximo três linhas; ausente quando vazio (nunca "tudo em dia" como cartão).
- **A frase do risco** em renda mensal, um número de cada lado, por pessoa: para o responsável logado, "Se você faltar,
  a Ana e a Luiza ficam com R$ 2.500 por mês para um custo de R$ 17,7 mil · resolve com a cotação ›"; para o outro,
  terceira pessoa em uma linha sem a frase forte. Uma frase por risco (vida; invalidez: "se você parar de trabalhar por
  um ano, …"). Até 30 dias aqui; depois, a oferta da planejadora; depois de 60 dias sai do Painel e vive só na tarefa e
  na fila dela.
- Quando a pendência é mais grave que o passo, "a Patrícia pode trocar o passo por isto ›" vira proposta; a tela não
  troca.
- A dívida de financiamento nunca é destacada: número no rodapé do herói e decisão "amortizar ou investir" num lugar
  só (pauta quando há reunião marcada; aqui quando não há).
- Link "Ver o plano ›"; as linhas vêm do estado "em atenção" por área do Plano, que é a fonte única.
- **Por degrau**: visitante ausente; cadastrado só o pilar do exame com ação ("Proteção, pilar do exame: 52 · responder
  a calculadora de seguros, 4 min"), como educação, não como proposta de produto; clínica o que a consultora marcou.

### Bloco 5 · O mês e o ano

- **Linha de síntese** sempre visível ("Outubro: R$ 3.270 de R$ 5.300 · aporte feito · 1 de 1 até aqui"); recolhido por
  padrão no celular, aberto no desktop.
- **O teto do mês** como recipiente (medidor com a frase ao lado: "R$ 3.270 de R$ 5.300 · R$ 193 acima, redistribuído
  nas duas semanas que faltam, o mês fecha no teto"), as semanas respeitadas antes do excesso ("2 de 3 no teto"), a
  semana atual com **um** teto só e a regra de divisão escrita; o cartão diz de onde o teto veio ("R$ 6.200 do orçamento,
  menos R$ 450 de alimentação e R$ 450 de lazer combinados em 26/09"); a parcela do financiamento como fixa nomeada.
- **O aporte do mês**: feito / próximo em 5/11 / "automático: sim, dia 5" ou "ainda manual · agendar".
- **O ritmo** em posições (meses para quem aporta por mês, eventos para quem aporta por evento), começando no mês do
  plano: três estados sem laranja (feito preenchido; parte, meio, com o valor no toque; não feito, contorno) e o pausado
  pelo imprevisto (contorno com traço, "pausado em dez · combinado", fora do denominador). **Denominador** = meses desde
  o plano com aporte previsto; **numerador** = feito, parte com metade ou mais, "usei em outro objetivo". Contagem do
  ano, nunca sequência ("5 de 5 desde outubro"; no primeiro mês, "1 de 1 até aqui"). Abaixo, a recuperação nomeada
  ("nov sem aporte · a Casa própria passou para ago/2030 · com R$ 2.620 em dez e jan, volta para jul/2030"). Um ponto de
  foco para a figura, síntese como nome acessível, rótulo só na primeira, na atual e na última posição.
- **O ano em uma linha** nomeando os objetivos ("R$ 39,5 mil para a Casa própria, a viagem e a liberdade, de R$ 192 mil
  de renda").
- **O fechamento do mês**, todo mês, em três linhas no primeiro acesso do mês seguinte, só aqui: o acumulado desde o
  plano do objetivo que andou ("Casa própria: R$ 4.500 guardados desde o plano · faltam 37 meses"); o que ficou e a
  saída já escolhida; o próximo gesto com data. Sem conquista, a primeira linha é o estado e a segunda o que faria
  andar. É o único feedback do dia 1; novidade e "desde o plano" são absorvidos por ele.
- **Nos meses 3, 6, 9 e 12 desde o plano**, o fechamento tem outra forma: os três números do UX.md (caminho até a
  liberdade em renda mensal, o ano, o ritmo) e, no máximo, uma proposta de escalada ("o teto sobrou R$ 400/mês em três
  meses; subir o aporte para R$ 2.900?"), que no Completo vai à planejadora.
- Link "O realizado ›" só quando o Realizado existir.
- **Por degrau**: cadastrado sem teto até combinar; sem registro, o bloco é só a síntese ("Primeiro aporte em 5/11").

### Bloco 6 · Com a Nord

- Quem atende (nome, foto) e a frase de compromisso recíproco: "O que vocês marcam aqui, a Patrícia acompanha; o que
  entra na fila dela, ela responde em até 2 dias úteis." O que ela vê é o que o cliente vê; nada de "dias sem entrar".
- O próximo encontro com data; "o que ficou de 26/09: 2 de 4 feitos"; a presença dela com fatos datados ("respondeu em
  15/10, em 1 dia útil"; vencido o prazo, "a Nord está resolvendo").
- A partir de 30 dias antes da reunião, a linha "Preparar a reunião de 26/03 · 2 de 5 prontos ›" (seção 11).
- "o que mudou ›" (o registro "desde o plano", só com fatos posteriores à versão do plano e de grandezas que têm
  série).
- Link "Atendimento ›", o mesmo nome do botão do cabeçalho. Último bloco no celular, nunca recolhido.
- **Por degrau**: visitante, agendar uma clínica, as lives, os níveis; cadastrado, "Marcar a reunião de avaliação" e os
  níveis; clínica, a consultora, o check-up e os temas; completo, a planejadora e a reunião semestral.

### Tabela de presença por degrau

| Bloco | Visitante | Cadastrado | Clínica | Completo |
|---|---|---|---|---|
| 0 | ausente | presente (1ª semana: orientador) | presente | presente |
| 1 | convite ao exame | passo da régua | foco da consultora | passo do plano |
| 2 | ausente | sugeridas, sem Carteira | orientações da consultora | tarefas do plano |
| 3 | ausente | os que ele criou (vazio orientador) | combinados + dele | os do plano |
| 4 | ausente | pilar do exame só com ação | o que a consultora marcou | áreas em atenção |
| 5 | ausente | só o aporte e o ritmo | com o teto da consultora | completo |
| 6 | clínica, lives, níveis | reunião de avaliação | consultora, check-up | planejadora, pauta |

Entre os blocos 1 e 6 do visitante, uma linha para o Plano ("As onze áreas do seu plano, preenchidas pelo exame ·
ver ›"), a única exceção à regra "o que falta some". Estado vazio orientador só quando o próximo dado tem data ou gesto;
nunca "ainda nada por aqui".

## 5. A tela do Passo

Aberta pelo cartão do herói e pela Jornada; não é aba. Ordem no celular: título · o porquê (a mesma linha do propósito,
não uma segunda frase) · a figura · até três linhas, as que o critério tiver ("Faltam R$ 11,5 mil"; "No ritmo de hoje,
set/2027", com a fonte; "Com o resgate de R$ 42 mil do BTG, em novembro"; quando o ritmo é zero: "sem data: nenhuma
tarefa leva dinheiro à reserva · propor à Patrícia ›", sempre com a saída na mesma linha) · "de quem é o passo" em cinza
("escolhido pela Patrícia em 26/09" ou "sugerido pela escalada; a Patrícia confirma") · **as tarefas deste passo**,
feitas e abertas, com a resposta de cada uma · **a trilha desta fase** · o objetivo que o passo protege, em link · o
mundo no rodapé ("Onde isso está no caminho: Construir ›"). O critério de conclusão vive no toque da figura. No desktop,
a trilha à direita das tarefas, em 300 px. Altura no celular em torno de 900 px.

**A trilha** tem cinco estados: *resolvido ao entrar* (uma linha recolhida: "3 passos já resolvidos quando o plano
começou, set/2026 ›"; nunca marcados como feitos), *feito* com data (da primeira foto do vetor em que o critério já
valia), *agora* com a figura, *depois* em cinza, *não se aplica*. No celular: a linha recolhida, o atual e até dois
seguintes; o resto no toque. Rótulo em cinza ("Os passos desta fase") e link "ver a escalada inteira ›" para a mesma
lista na Jornada, com o atual destacado lá.

**O ritmo do passo** é a soma das tarefas de dedicar dinheiro cujo destino é o passo (recorrentes, por evento e únicas,
cada uma na data prevista), a juros da reserva; a cascata gravada produz essas tarefas ("R$ 430/mês para a reserva"), que
a soma então inclui. **O passo nomeia a tarefa que o completa e a conta tem que bater.**

**Conclusão com duas marcas**: "concluído em 12/12 pelo que vocês marcaram" (toda tarefa de dinheiro com destino
"reserva" soma no atual ao receber "Fiz" com o valor) e "confirmado em 15/01 pelo patrimônio lançado". A conciliação que
contradiz acima de uma tolerância escrita reabre o passo com uma linha datada, nunca em silêncio; o fechamento sóbrio
não repete. Parcial de metade ou mais conta na sequência e o que faltou vira a recuperação nomeada; três parciais
concluem. Ao concluir, o dinheiro que o passo libera **não ganha destino na tela**: nasce como proposta à planejadora no
Completo ("Patrícia: para onde vão os R$ 1.000 que a reserva libera?") e como tarefa de transição automática nos outros
degraus ("Mudar a transferência" / "R$ 1.000 da reserva para a Viagem à Europa · 10 min").

## 6. O dinheiro: um motor só

Toda frase com número da área é saída da mesma conta. O motor:

1. **A ordem de prioridade dos objetivos** é gravada com autor e data (planejadora no Completo, consultora na Clínica,
   cliente no Cadastrado). "No ritmo de hoje" é sempre a cascata (tudo para o primeiro até se pagar, depois o segundo);
   a conta "cada objetivo com o seu aporte" sai do código.
2. **A cascata da sobra**, gravada pela planejadora (default proposto: prêmio da proteção pendente › reserva até o alvo
   do passo › dívida cuja taxa supera a do plano › objetivos na ordem combinada), decide o destino de todo real sem
   destino: a sobra mensal, o 13º, o bônus, o dinheiro que entra, a reserva liberada ao concluir o passo e a
   recomposição depois de um imprevisto. A cascata gera tarefas de dinheiro, que o ritmo do passo soma.
3. **Onde a cascata não está gravada**, a tela não promete destino: "R$ 733 sem destino · decidido na reunião de 26/03;
   até lá, ficam na reserva". A saída "cabe na sobra" do objetivo só aparece com a cascata gravada e com os degraus
   anteriores satisfeitos.
4. **O 13º e os eventos de renda** (seção 7) usam como default o primeiro degrau da cascata que ainda falta, nunca "o
   que fecha o passo" se não fecha.
5. **O imprevisto** (seção 7) responde com a cascata: a recomposição é o degrau da reserva reaberto, com a fonte dita
   ("dos R$ 733 de nov a jun"; com ritmo zero, "R$ 6 mil a repor: com o resgate do BTG mais R$ 6 mil, ou com os R$ 733
   por mês até set/2027"), e "nenhum objetivo muda de data" só é impresso quando a conta devolve isso.
6. **A sobra mostrada é a do plano**; a realizada entra no bloco 5 depois do fechamento.
7. **A liberdade financeira** não oscila com o mercado: a data só muda por decisão gravada na revisão semestral; a
   medida é a renda mensal em valores de hoje, com a premissa e "não é garantia" no toque. Os objetivos de curto prazo
   podem mover com o lançamento; a liberdade, não.

Nenhum dos números de exemplo que aparecem nos documentos anteriores ("R$ 1.000/mês", "6 meses", "R$ 920", "R$ 3 mil
fecha o passo") entra na tela sem sair desse motor.

## 7. Fazer: tarefas, teto, aporte, imprevisto, proteção, casal

- **Toda tarefa** diz de quem é e para quê na primeira leitura ("Marcos · proteção da família"), a pendência ou passo de
  origem, minutos e primeiro gesto. Ordenada por impacto, não por data. As categorias técnicas saem da primeira linha
  do cartão; na aba Tarefas os filtros são Papelada · Dia a dia · Guardar · de quem · objetivo.
- **Nenhum atraso sem saída**: "Cotar o seguro de vida do Marcos · combinada em 26/09 · uns 20 minutos: dois corretores
  indicados; pedir cotação da cobertura a definir". "desde 10/10" em cinza. "Adiar" pela segunda vez abre "Adiar de novo
  manda esta tarefa para a Patrícia. Enviar?" (o cliente escolhe mandar; nunca descobre depois).
- **A proteção tem relógio próprio**, independente do botão: 30 dias aberta sem resposta de ninguém, vai sozinha à
  fila da planejadora e os dois recebem uma linha ("desde 10/10 sem resposta: a Patrícia entra em contato"); o lembrete
  vai ao WhatsApp do responsável no dia seguinte ao do aporte, sem passar pelo outro; a volta de quem sumiu não a
  suaviza. Uma tarefa só, "cotar seguro de vida e invalidez", com as duas coberturas na folha; a de invalidez só ganha
  frase própria quando a de vida foi cotada. A folha diz o "para quê" com a frase do risco (é a segunda aparição
  permitida).
- **O teto da semana**: na segunda, "Combinar a semana" com três respostas e destino para cada uma: "Combinado" grava;
  "Esta semana não dá" abre um controle de um toque com três valores e o custo na mesma frase ("com R$ 1.500 nesta
  semana, as duas que faltam ficam com R$ 890; o aporte da Casa própria continua"), e a semana conta como respondida;
  "Não sei" vale como combinado, sem segunda pergunta na quarta. Silêncio: o combinado vale, nunca "você não
  respondeu". "Não dá" em três de seis semanas dispara, no fechamento do mês, a proposta de teto novo com o custo. A
  folha lista as categorias combinadas do plano com o valor de cada uma e dois exemplos do próprio orçamento da família,
  e pede um total estimado em qualquer meio. "Faltam R$ 400 até domingo" só com dado.
- **O aporte**: a primeira tarefa de quem tem sobra é agendar a transferência automática, com roteiro; com automático, o
  aporte do mês é confirmação, não pedido. Toda resposta no WhatsApp devolve o efeito e o link ("Aporte feito: a Casa
  própria ficou R$ 1.500 mais perto · ver ›").
- **O 13º**: a pergunta em outubro, no fechamento ("O 13º chega em novembro e dezembro. Do que vier, R$ X para … ·
  combinado?"), com o valor da cascata como default, "outro valor" e "este ano não" (sem segunda pergunta); a resposta
  vira tarefa por evento com janela e o gatilho "caiu?". "A renda mudou?" uma vez por ano, em janeiro, com default
  metade da diferença. Para quem recebe por evento, o botão usa a data da próxima tarefa de dinheiro ("quando a
  distribuição cair").
- **"Um imprevisto?"**: um link de texto em marinho ao lado da reserva, primeiro item de Atendimento e saída na folha do
  "não fiz"; nunca laranja, ícone ou caixa. A folha abre com "O que aconteceu?" (saúde · casa ou carro · renda que caiu ·
  outra coisa; na segunda versão, também "entrou dinheiro"), depois quanto, quando, de onde (com a lista de onde a
  reserva está, quando gravada). A resposta sempre com o custo no passo **antes** da folga, calculado pelo motor:
  "R$ 6 mil da reserva: ela volta para R$ 54 mil, acima da mínima. O passo da reserva aceitável vai de set/2027 para
  mar/2028." Entre mínima e aceitável, a recomposição entra como tarefa de dinheiro com a fonte dita; abaixo da mínima,
  a primeira saída é "falar com a Patrícia hoje"; "outra coisa" responde "isso parece um objetivo novo; não sai da
  reserva". O segundo uso em 90 dias muda a devolutiva. "Usei a reserva" grava e recalcula o passo. O aporte segue
  como combinado; "se precisar pausar, aqui ›" (a pausa mostra a data nova).
- **No cadastrado**: tarefas "sugeridas a partir das suas respostas", uma por vez no Painel, as outras em Tarefas numa
  faixa própria, no máximo três, fora do placar e do botão do dia; cada uma nasce de uma condição nomeada (lista
  fechada); "não agora" arquiva 30 dias e volta uma vez com a frase mudada; recusada duas vezes, só por iniciativa do
  cliente ou quando o passo muda; "aceitar" pede o dia da renda e o consentimento de lembrete e vira "sua, com lembrete
  no dia 5". Enquanto o passo é a reserva mínima, nenhum aporte a objetivo ("este é o último aporte da reserva").
  Proteção entra como educação e tarefa de informar-se, não como proposta de produto.
- **O casal**: a tarefa do outro em uma linha sem contador; "lembrar" como link, mensagem da Nord, uma por tarefa a
  cada sete dias, com estado depois; a resposta de "os dois" é do casal ("respondido em 20/10"; o nome no toque) e o
  outro é avisado; a fila de Saber é privada; a linha de situação, o fechamento e a planejadora falam no plural;
  "resposta do outro membro" não é novidade.

## 8. Saber

- **Uma linha por pessoa no bloco 2**, que muda por regra: (1) o módulo da tarefa do botão ("Antes de cotar, 2 min:
  Seguro de vida com dependentes ›"); (2) o módulo do passo; (3) o módulo da pauta nos 30 dias antes da reunião; (4) na
  segunda versão, a revisão vencida (só em 7 e 90 dias, nunca na segunda nem no dia do aporte, sem lembrete fora da
  área); (5) nada: a linha some. A linha abre o módulo, não a aba. A pergunta do dia vive no toque; só vira pergunta
  respondível no Painel quando a tarefa de Agora é educacional.
- **Cada módulo diz a decisão que destrava** e usa os números da família; a devolutiva aponta o plano ("Certo. É por
  isso que a reserva de vocês fica em liquidez diária. Agora, no seu plano: ver a reserva"). Trocar "prove" por
  "confira". Nenhum nome de produto fora do plano publicado.
- **Sete capítulos espelhando a escalada** (orçamento e dívida; objetivos e liberdade; reserva e juros; aportes e
  caixinhas; proteção e previdência; carteira e imposto; retirada e sucessão), todos abertos; a aba Saber mostra (1) a
  linha da fila, (2) "Para o seu passo", (3) os capítulos com o estado por módulo ("aprovado em 14/10", "a rever",
  "novo"). "Já sei isso" abre a prova curta na hora e a prova tem data; "Já fiz" pede a data e grava no vetor. A Jornada
  não registra provas. As conquistas: decisão 8.
- O mapa passo → módulo e categoria de tarefa → módulo é escrito antes de codificar.

## 9. Objetivos (a aba)

A régua "O sonho e o plano" fica; o controle deslizante começa no valor combinado; "Para todos chegarem na data" usa a
cascata; a lista traz, por objetivo, a causa e a saída calculada (as saídas que o Painel só mostra para o primeiro da
fila vivem aqui); uma contagem só de objetivos em toda a área; "Ver assim" propõe à planejadora no Completo e grava nos
outros degraus.

## 10. O ano inteiro

| Momento | O que a área mostra | A pergunta (uma só) |
|---|---|---|
| Meses 1–3 | O passo com ponto de partida; o fechamento mensal com o acumulado; a proteção em destaque até cotada (30 dias na linha) | Outubro: 13º · nov/dez: "caiu?" |
| Fechamento do trimestre 1 | Os três números pela primeira vez; "A renda mudou?" | "A renda mudou?" |
| Meses 4–6 | Preparação da reunião a partir de 30 dias antes; depois dela, as decisões gravadas como decisões, o passo confirmado ou trocado | Confirmar a data; "o que vocês querem levar" |
| Fechamento do trimestre 2 | Os três números com a primeira comparação; no máximo uma proposta de escalada | A proposta (vai à planejadora) |
| Meses 7–9 | O passo perto do fim ("com o aporte de agosto, completa"); ao concluir, o fechamento sóbrio e a transição | A transição (proposta no Completo) |
| Meses 10–12 | Preparação da segunda reunião com a revisão semestral gerada | Confirmar a data; o campo livre |
| Fechamento do ano | Uma página da Jornada, datada, em fatos (aportes N de M, passos concluídos com data, proteção e decisões, capítulos, os três números no início e no fim); o mesmo texto à planejadora; a meta de aporte do ano 2 | A meta de aporte do ano 2 |

A meta anual de aporte, decidida com a planejadora, vira o denominador do ritmo do ano seguinte: é o que transforma
doze fechamentos iguais em um ciclo.

## 11. A reunião e a planejadora

- **"Preparar a reunião de 26/03"** é a entrada da próxima reunião na Jornada, aberta (depois da reunião, a mesma
  página vira o registro com o resumo). Chega-se pela linha do bloco 6, pelo botão do dia 3 dias antes, pelo link do
  WhatsApp (um, 3 dias antes) e pelo primeiro item de Atendimento. Conteúdo: (1) o que ficou de 26/09 com o estado de
  cada item; (2) os números antes e depois, em quatro linhas (a revisão semestral gerada); (3) a pauta com três origens
  marcadas: da planejadora, das propostas e dúvidas abertas do cliente (entram sozinhas) e "o que vocês querem levar",
  o único campo de texto livre da área, que cai na fila dela; (4) na segunda versão, para cada decisão em pauta, a
  pergunta curta com a conta na mesma linha ("amortizar R$ 10 mil: a parcela cai R$ 95 · investir: R$ 23 mil em 2041") e
  o módulo ao lado; (5) confirmar a data, com "confirmada em dd/mm" visível nos dois lados. Os dois membros editam a
  mesma preparação. Depois de enviar: "A Patrícia lê isto até 23/03".
- **O portal da planejadora** ganha uma fila única com cinco tipos (resposta, proposta, passo a definir, retomada, dado
  faltante), cada item com cliente, origem, prazo e estado; um resumo diário; a regra para o prazo vencido (escala à
  operação da Nord no terceiro dia útil); o registro de decisão com autor e data (é o que fecha proposta, passo e os
  dados gravados); "ver como o cliente vê"; e o painel "área de Ana e Marcos: 6 de 13 dados; os 7 que faltam entram em
  26/03". Na primeira versão, a fila pode ser uma lista com estado no `tela-consultor.html`; o registro de proposta
  com estado não pode faltar, porque a tela do cliente já o cita.
- **Obrigações com frequência**: semanal, 15 minutos na fila; nos sete dias após a reunião, gravar os treze dados e
  confirmar "o que ficou"; trimestral, lançar reserva e patrimônio (sem isso a escada diz "última leitura: set/2026");
  semestral, a pauta 30 dias antes. O portal dela tem o mesmo botão do dia que a área do cliente.

## 12. As outras telas e a navegação

- **Navegação**: Painel · Objetivos · Tarefas · Plano · Mais, iguais nas duas larguras; "Mais" com Saber, Jornada e
  Realizado quando existir; Atendimento no cabeçalho. Nomes: "O passo agora" (cartão, tela e link "Ver o passo"), "Esta
  semana" (link "Todas as tarefas"), "Os objetivos" ("Todos"), "Pendências do plano" ("Ver o plano"), "O mês e o ano",
  "Com a Nord" ("Atendimento"). Um verbo: feitas.
- **Tarefas**: faixas Agora · Depois · Respondidas (abertas por padrão nos últimos 30 dias, com data e efeito); filtros
  Papelada · Dia a dia · Guardar · de quem · objetivo; placar igual ao subtítulo do bloco 2, sem sequência; faixa
  "Sugeridas a partir das suas respostas" só no cadastrado; os três estados novos em texto na segunda linha do cartão
  ("sugerida", "quando a distribuição cair", "transição do passo"). Rodapé: os lembretes chegam no WhatsApp e a resposta
  vale nos dois lugares.
- **Jornada**: uma linha do tempo só (relação + histórico, do mais recente ao primeiro, com o resumo de cada reunião e
  as tarefas que nasceram dela; a próxima reunião como entrada aberta de preparação); a escalada como lista vertical dos
  sete mundos (os passados com "resolvido: orçamento, plano", o atual aberto com a trilha e os marcos, os futuros em
  cinza, "não se aplica"), com os três números no alto da seção e "foco escolhido pela Patrícia em 26/09"; quatro tipos
  de evento (reunião, versão do plano, passo concluído, retomada); o fechamento do ano como página datada. "ver a
  escalada inteira ›" chega com a seção aberta no celular.
- **Plano**: três faixas ("Onde estamos": Saúde financeira, Gestão financeira, Dívidas, Patrimônio; "Para onde vamos":
  Objetivos, Reserva, Liberdade, Evolução; "Como protegemos e fazemos render": Riscos, Investimentos, Impostos); os
  cartões em atenção primeiro na faixa, com o estado "em atenção" por área como fonte do bloco 4; "94% aprofundado" vira
  "Falta aprofundar: Investimentos, na reunião de 26/03"; "6 de 6" vira legenda única ou traço; o cartão Reserva usa a
  mesma escada; a nota do exame vive aqui com o pilar ("pilar Proteção do exame: 52"); "projeção com rentabilidade real
  de 0,4% ao mês; não é garantia" uma vez.
- **Realizado**: não existe antes de três meses de registro (nenhuma porta além de "Mais"); quando houver o que
  comparar, segunda vista do Plano ("O plano | O realizado") contra a versão vigente, nascendo com a foto de 26/09 como
  linha de base e o que já existe (aportes, teto por semana, patrimônio e reserva na última leitura); "Contra qual
  plano" no rodapé; "Lançar um mês" sai (cada número sabe onde se corrige).

## 13. Os outros mundos

A mesma estrutura, com o conteúdo por mundo escrito numa tabela para os sete blocos. Na primeira versão: Construir e
Focar (o exemplo), **Sobreviver** (a dívida é o passo e fica no herói; o bloco 3 continua "Os objetivos" com os sonhos e
a saída da cascata neles — "quando o cartão acabar, em jun/2027, R$ 1.800/mês passam para cá" — ou o vazio orientador;
o bloco 4 só proteção gratuita ou barata, com o seguro de vida nomeado "depois da dívida"; o bloco 5 vira "O mês":
entradas, parcelas, o que sobrou, meses sem saldo negativo; o imprevisto tem a variante "sem reserva": parcelar sem
juro · falar com a Nord · nunca o rotativo; sem linha de sobra; o conteúdo próprio: credores com taxa, ordem de
quitação, data do fim, "nenhuma dívida nova este mês") e **renda irregular** (a régua lê a sobra em 12 meses móveis; o
ritmo segue o pedido, por evento; o colchão como passo e número-chave "cobre até abril"; a tarefa de mão dupla do
colchão). Na segunda versão, **Desfrutar**: a régua ganha o ramo 7 (renda passiva ≥ custo de vida) e "não se aplica" para
seguro de vida sem dependente; passo "retirada definida e rodando: R$ 14 mil de R$ 15,8 mil sustentáveis"; tarefas de
retirada e sucessão; o bloco 3 lidera com legado e experiências; o bloco 5 vira "A retirada e o ano"; o botão usa o dia
da retirada; o imprevisto diz quantos meses de cobertura sobram.

## 14. O cliente que some

Aos 30 dias sem visita nem resposta, os lembretes de tarefa param; fica um por mês, o fechamento, reescrito para a
ausência ("Outubro: a reserva segue em R$ 60 mil. Quando quiser retomar, o próximo gesto é um: o aporte de novembro").
Na volta, por uma visita: a faixa "Desde setembro" vem primeiro (o que o plano fez sozinho, o que a planejadora
respondeu), depois um gesto só no botão ("Para retomar"); as abertas em cinza como "ficaram de setembro", sem contador;
os objetivos sem selo de atraso; a proteção não é suavizada. O bloco 0 respeita as duas linhas (a faixa substitui a
linha de situação nessa visita). A planejadora recebe uma linha ("retomaram em 15/12"), não uma lista de faltas.
Mensagens de volta só nos marcos de fresh start (primeiro dia útil do mês, 13º, 2 de janeiro, 15 dias antes da
reunião), no máximo duas; aos 90 dias no Completo, a planejadora escreve e a área avisa.

## 15. Texto

**As quinze frases de referência** (Completo, Ana logada, terça; os números dependem da decisão 1):

1. Situação: `Aporte em 5/11 · 2 abertas desde 10/10 · 2 de 6 na data` [segunda: `Até R$ 1.093 esta semana · …`; dia 1:
   `Outubro fechado · ver › · 2 abertas desde 10/10`]
2. Propósito: `Para a casa de vocês e a liberdade aos 57, um imprevisto não sai desse dinheiro.`
3. Cartão: `O passo agora` / `Completar a reserva aceitável`
4. Síntese: `Faltam R$ 11,5 mil · com o resgate do BTG, em novembro` [sem origem: `Faltam R$ 11,5 mil · sem data:
   nenhuma tarefa leva dinheiro à reserva · propor à Patrícia ›`]
5. Botão e complemento: `Indicar os beneficiários` / `15 min · para proteger a Luiza` [segunda: `Combinar a semana` /
   `até R$ 1.093 nos gastos que vocês controlam`; dia 5: `Marcar o aporte de novembro` / `R$ 2.500 · Casa própria
   R$ 1.500, reserva R$ 1.000`; feito: `Feito por hoje · próxima: 5/11`; sem ação: `Nada para hoje · a próxima é em
   5/11`]
6. Reserva: `Reserva R$ 60 mil · entre a mínima e a aceitável · um imprevisto? ›`
7. Subtítulo do bloco 2: `Para completar a reserva aceitável · Outubro: 4 de 7 feitas`
8. Agora: `Indicar os beneficiários do plano` / `Ana · para proteger a Luiza · 15 min: abrir o app da seguradora` /
   `desde 10/10`
9. A tarefa do outro: `Mais 1, do Marcos: cotar o seguro de vida · lembrar ›`
10. Respondidas: `Aporte de outubro, 5/10 · a Casa própria ficou R$ 1.500 mais perto · ver as 4 ›` [não fiz: `Aporte de
    janeiro · não fiz · todos atrasam 1 mês; o próximo aporte sobe R$ 72`]
11. Saber: `Antes de cotar, 2 min: Seguro de vida com dependentes ›`
12. Objetivos, acima: `Os seis pedem R$ 5.565/mês; o combinado é R$ 2.500. Os R$ 733 que sobram ficam na reserva até a
    reunião de 26/03 · ver a ordem ›`
13. Objetivos, linhas: `Liberdade aos 57 · na data, com R$ 1.000 agora e R$ 2.500 a partir de jul/2030, e a proteção
    contratada` / `Casa própria · jul/2030 · no plano desde 26/09`
14. Pendências (Marcos logado): `Se você faltar, a Ana e a Luiza ficam com R$ 2.500 por mês para um custo de R$ 17,7
    mil · resolve com a cotação ›`
15. Fechamento ao concluir (tela inteira, uma vez): `Reserva aceitável completa. R$ 71,5 mil guardados entre ago/2026 e
    nov/2026. A Casa própria e a viagem ficam protegidas de um imprevisto. A Patrícia define o próximo passo até 26/11.`
    / `Seguir`

**Microcopy, regras gerais**: "a reserva que cobre 5 meses: R$ 71,5 mil" na primeira vez; "gastos que vocês controlam"
em vez de "ajustáveis"; nada de "aprofundado", "preenchido", "6 de 6", "o plano fecha", "12% do caminho", "Burocrática",
"Comportamental", "proposta pelo exame"; "abertas desde" em vez de "atrasada há"; "confira" em vez de "prove"; toda
frase com número diz de onde ele vem na própria frase ou no toque; a semana atual com um valor só; "R$ 5,2 milhões"
sempre com o "por mês".

**Trocas antes de publicar (confirmar com o compliance)**: "a cotação é o primeiro passo; o que protege é contratar"
em vez de "resolve"; "o aporte segue como combinado; se precisar pausar, aqui ›" em vez de "não pare o aporte"; o módulo
de amortização ensina a comparar (taxa, liquidez, imposto, FGTS) e termina em "a decisão é de vocês com a Patrícia em
26/03", sem veredito; produtos só com nome genérico ("liquidez diária e baixo risco") fora do plano publicado; "a Nord
não recebe pela indicação" quando for verdade, ou a remuneração dita; "projeção com rentabilidade real de 0,4% ao mês;
não é garantia" uma vez no Plano e no toque da liberdade; no Cadastrado, proteção como educação, nunca "aceitar" um
seguro.

## 16. Os dados que o portal grava

Treze dados, em três camadas, cada um com a frase de ausência escrita (dado ausente vira linha com dono e data):

| Camada | Dado | Usado por | Ausência |
|---|---|---|---|
| Derivável hoje | O passo da régua com rótulo; a frase do risco em renda (INSS, parcela, custo existem); a reserva atual; 9,5% a.a. sem CET; as categorias ajustáveis e os cortes; o dia da renda; o responsável da tarefa | herói, bloco 4, teto, botão | "sugerido pela escalada; a Patrícia confirma"; "custo real: a Patrícia confirma em 26/03" |
| Decidido na próxima reunião | O passo escolhido (título, critério, alvo, porquê, tarefa que o executa) e a trilha; a ordem de prioridade com autor e data; a cascata da sobra; capital sugerido de vida e invalidez, tipo, prêmio estimado, onde cotar, origem do prêmio; a pauta e as decisões como decisões; a regra de conclusão e do parcial; taxa com indexador e CET e data de quitação; eventos de renda com janela | passo, objetivos, bloco 4, reunião, 13º | "decidido na reunião de 26/03; até lá, …" |
| Nascido do uso | A série da reserva e do patrimônio por data; onde está a reserva (conta, instituição, liquidez), marcada como reserva; o efeito esperado de cada tarefa | ponto de partida, "desde o plano", imprevisto "de onde", Respondidas | "última leitura: set/2026"; o imprevisto sem a lista "de onde" |

No portal, o painel "n de 13" por cliente. A correção do exemplo (decisão 3) vem antes de fechar qualquer número.

## 17. Acessibilidade

Escada como medidor com as três marcas e estados em texto oculto e sinal textual na feita; trilha como lista ordenada
com estado em texto e `aria-current` no atual; recipiente do teto como medidor com a frase sempre presente; posições do
ritmo com um ponto de foco e a síntese como nome, cada posição com mês e estado no toque; linha de situação como um alvo
só de 44 px no celular; rótulo oculto "Marcar como feita" no círculo e "Atendimento" no botão; chips com texto escuro, o
ponto como reforço; gradiente mais escuro sob o texto do herói; na escalada da Jornada, o atual com peso e marcador
textual; respeito a `prefers-reduced-motion` no fechamento sóbrio e no carrossel do Plano.

## 18. O que foi cortado ao longo das rodadas

Para que ninguém reimplemente: o título "Melhorar o futuro financeiro" e as duas colunas Fazer/Saber; o cartão "O que
resolver"; "A poupança" como cartão; "Nesta semana, 0 de 1 respondidas"; "E ao mesmo tempo" no cartão do passo; o rótulo
"Por que este passo" com a frase longa; a faixa "Desde o plano" no topo e como terceiro registro da linha; a lista "e
mais 2" sob o botão e o link "outra tarefa"; "faltam: nomes" no subtítulo; a pergunta do dia como cartão no Painel; a
repergunta do teto na quarta; a revisão espaçada em 1 e 30 dias e o registro de provas na Jornada; "Entrou um dinheiro?"
como segundo link do rodapé (vira resposta da mesma folha, segunda versão); duas tarefas de seguro ao mesmo tempo; "a
régua sugere" no estado sem foco; a posição do cliente por decisão da pauta (segunda versão, com a conta); o lembrete de
preparação 15 dias antes; os quatro porquês do "não agora" (segunda versão); a sequência "N meses seguidos" no
fechamento; "resposta do outro membro" como novidade; "retomado em" como linha da Jornada para o cliente; "Lembrar o
Marcos" como botão do dia; "12% do caminho"; a nota do exame no rodapé diário; "Lançar um mês" como tela; "Capítulo 1
de 7" no Painel; os objetivos "em linhas com duas informações" (substituído pela linha de 40 caracteres); o Desfrutar na
primeira versão.

## 19. Primeira versão e segunda versão

Critério: a primeira versão usa só o que o vetor, os pedidos, as respostas, as reuniões e o orçamento combinado já
gravam hoje, mais o que a planejadora decide na reunião de 26/03 sem campo novo. A segunda depende dos treze dados, do
motor da cascata ou de conteúdo a produzir. A correção do exemplo (decisão 3) é pré-requisito das duas.

**Primeira versão, na ordem de execução**

1. **A espinha e o orçamento**: a ordem única dos sete blocos, o propósito de volta, o herói com um protagonista, os
   orçamentos de dobra, a linha de situação com os três fatos e a novidade (sem o registro "desde o plano"), a
   retirada de "O que resolver" e das contagens repetidas, os três níveis tipográficos, a navegação e os nomes finais,
   a grade do desktop, a tabela de presença, a acessibilidade. (Seções 2, 4, 12, 17.)
2. **O dia e a semana**: a tabela do botão do dia com o responsável; "Esta semana" com Agora · Respondidas · Depois e a
   linha do outro; o teto da semana com três respostas e silêncio como default (sem "faltam R$ 400", que não tem dado);
   tarefas com para quê, minutos, primeiro gesto e "abertas desde"; a proteção com a frase do risco em renda e o
   relógio de 30 dias; "Adiar" pela segunda vez com aviso; Tarefas redesenhada. (Seção 7.)
3. **O passo**: a tela em quatro partes na ordem da seção 5; a escada em reais com a marca alvo destacada e as variantes
   escada e única; a trilha com "resolvido ao entrar" sem datas; o rótulo "sugerido pela escalada; a Patrícia
   confirma"; o ritmo como soma das tarefas (zero → "sem data" com a saída ou a origem única); o estado "origem
   vencida"; a Jornada com a lista vertical dos sete mundos e o atual.
4. **Objetivos e liberdade**: as linhas de 40 caracteres com a causa; a conta acima da lista com o fallback "ficam na
   reserva até 26/03"; a saída só no formato "decisão em 26/03"; um aporte combinado em toda a área (depois da correção
   do exemplo); a liberdade com a condição completa e a medida em renda mensal; os nomes dos objetivos.
5. **Mês, ano e retorno**: "O mês e o ano" com o recipiente, as semanas com um teto cada, o ritmo com três estados e o
   denominador escrito, o fechamento mensal de três linhas todo mês; a parada dos lembretes aos 30 dias; a pergunta do
   13º em outubro com três respostas e a tarefa por evento; o imprevisto com as quatro perguntas e o custo em data
   quando o passo tem ritmo (sem a lista "de onde"); o fechamento sóbrio ao concluir, nos degraus em que a régua decide.
6. **Saber**: a linha única com as regras tarefa → passo → pauta; a devolutiva que aponta o plano; "confira"; a aba com
   a fila e os capítulos existentes.
7. **Reunião e planejadora**: a preparação na Jornada com os itens 1, 3 (com os temas que existem e o campo livre) e 5;
   a frase de compromisso recíproco; a fila mínima com estado no portal e o registro de proposta com estado.
8. **Outros mundos**: Sobreviver e renda irregular.
9. **Texto**: as quinze frases e as trocas de compliance.

**Segunda versão**

- O motor: a cascata gravada gerando tarefas; as saídas "cabe na sobra" e "cabe no que o passo libera" calculadas; o
  passo gravado com a trilha datada, a conclusão por "Fiz" com as duas marcas e a conciliação; os estados concluído e
  sem foco com "o próximo é o da trilha gravada"; a tarefa de transição como proposta; o fechamento sóbrio no Completo;
  as variantes contagem e sem data.
- Os dados: os treze com o painel "n de 13"; onde está a reserva e a lista "de onde" do imprevisto; "entrou dinheiro"
  na mesma folha; bônus, aumento e PLR com posições extras; TR e CET; capital, prêmio, onde cotar e a remuneração.
- A série: o ponto de partida datado na escada, o registro "desde o plano" atrás de "o que mudou", o Realizado como
  segunda vista do Plano, a regra da liberdade frente ao mercado, os três números nos meses 3, 6, 9 e 12, o fechamento
  do ano e a meta de aporte do ano 2.
- A relação: a preparação completa (números antes e depois gerados; a posição por decisão com a conta); "lembrar" por
  mensagem da Nord; os marcos de fresh start e a escrita aos 90 dias; o ciclo da tarefa sugerida com os motivos; a fila
  completa da planejadora com prazo vencido, escalonamento e "modo cliente".
- O conteúdo: os sete capítulos; a revisão espaçada em 7 e 90 dias e o mapa passo → módulo; Desfrutar com o ramo 7 da
  régua.

## 20. As tabelas a escrever antes de codificar

Quinze, curtas, nesta ordem: (1) presença por bloco e degrau; (2) decisão da ação do dia, com o rótulo de até 26
caracteres e o complemento; (3) variantes da figura do passo e estados do cartão; (4) o componente linha de situação
(fatos, ordem, novidade, substituição, o dia 1); (5) orçamentos de elementos e altura por bloco e aparelho; (6) "uma
pendência, um lugar" com o teto de menções; (7) saídas de objetivo e a classificação por desenho / por aporte; (8) mapa
passo → módulo e categoria → módulo; (9) lista fechada de eventos de novidade; (10) estados da trilha; (11) a grade
600–720 / 300 / 1080; (12) gatilho e fechamento do passo concluído; (13) acessibilidade de cada figura; (14) nomes
finais; (15) o estado "em atenção" por área do Plano. Mais a tabela de conteúdo por mundo, a lista dos treze dados com
a frase de ausência, o calendário da área (seção 10 e a tabela em [rodada-2/comportamental.md](rodada-2/comportamental.md))
e o orçamento de perguntas (princípio 11).
