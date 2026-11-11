# Diário de 12 meses na Nord Liberta 2.0 (teste de uso simulado)

Feito em 11/11/2026, no protótipo da branch `claude/versao-2-integrada`. O quadro com os cartões para o UX está em
[QUADRO-FEEDBACK.md](QUADRO-FEEDBACK.md); as capturas, em [capturas-simulacao/](capturas-simulacao/).

## Quem sou eu

**Ana Ribeiro, 35 anos**, gerente de marketing numa empresa (CLT, R$ 9 mil líquidos, bônus uma vez por ano). Casada com
o **Marcos, 38**, dono da Papelaria Canetinha (retira R$ 6 mil por mês). Temos a **Luiza**. Moramos de aluguel
(R$ 3.000), temos um apartamento financiado em Mogi alugado a terceiros (parcela de R$ 4.870, devemos R$ 368 mil) e
R$ 860 mil espalhados entre BTG, Itaú, Nubank e uma previdência da Icatu que eu nem lembrava de ter.

- **O que me aflige:** ganhamos bem e não sei para onde vai. Queremos sair do aluguel e eu não sei se dá. Se o Marcos
  faltar, não sei o que acontece com a papelaria e com a gente.
- **O que entendo de finanças:** pouco. Sei o que é poupança e CDB. "Liquidez", "PGBL", "pró-labore" e "ITCMD" eu não sei.
- **Onde uso:** celular, no sofá, depois que a Luiza dorme. Computador só na reunião com a consultora.
- **Paciência:** cinco minutos. Se eu não entender o que fazer, fecho e esqueço.
- **Quem me acompanha:** a Patrícia Lemos, planejadora.

## Como o teste foi feito (para quem lê)

- Navegação de verdade: Chrome sem janela, controlado pelo protocolo DevTools por um script meu (clicar no ponto da
  tela, digitar, ler o texto, capturar), em **390×844** (celular) e **1366×800** (computador, para a consultora e a
  reunião). Servidor `node ux/servir.cjs . 8137`.
- A "minha" conta é o exemplo completo (`area-cliente.html?cliente=exemplo-completo&demo&hoje=AAAA-MM-DD`). O começo da
  jornada eu vivi como visitante (`area-cliente.html?demo`), criando uma conta de verdade, e olhei o degrau da clínica
  (`?cliente=exemplo&demo`). O papel da Patrícia eu fiz em `index.html`, `tela-consultor.html` e `agendamento.html`.
- **Três limites do exemplo que mudam a leitura:** (1) a história da família é roteirizada até junho de 2027: os
  aportes de outubro a junho já vêm respondidos "pelo WhatsApp", o extrato já vem "classificado pela Patrícia" e a
  reunião de 22/03/2027 já vem com resumo; o que eu de fato decidi foram as tarefas avulsas, o resgate, o imprevisto,
  as mensagens, a pauta, o aporte de julho, a proposta e os lançamentos. (2) As reuniões em si não aconteceram: vi só o
  antes e o depois na ferramenta. (3) O lembrete no WhatsApp não existe no protótipo; só vi o aviso de que ele seria enviado.
- No exame de visitante respondi "de cabeça", com números redondos e uma data de nascimento diferente da do exemplo;
  por isso a nota de lá (46) não é a mesma família do exemplo (64 e 71).

---

## Mês 0 · começo de novembro de 2026 · chegar, fazer o exame, criar a conta, receber o plano

**O que eu queria:** saber se a minha vida financeira está bem ou mal, e o que essa Nord faz por mim.

**Visitante** (`area-cliente.html?demo`, captura `01-visitante-painel.jpg`). Gostei: uma frase, um botão laranja,
"Fazer o exame". O cartão dizia **33 perguntas, uns 8 minutos**; a abertura do exame dizia **24 perguntas**; no meio
virou "Pergunta 5 de 28", depois "de 30", depois "de 31". Fiquei sem saber quanto faltava.

**O exame** (`#exame`). Uma pergunta por vez, botão grande, dá para pular e voltar. Pulei "quanto imagina que precisa
investir por mês" (eu tinha acabado de dizer que nunca calculei) e "qual seria uma reserva adequada" (não sei, é por
isso que estou aqui). Respondi 29 de 31.

**O resultado** (`02-exame-resultado.jpg`): **46 de 100**, cinco barras, e uma frase: "Nota provisória: a fórmula
oficial da Nord ainda vai substituir esta conta". Então a nota vale ou não vale? Patrimônio **100** e eu devo
R$ 370 mil. Nenhuma linha dizendo o que é ruim e o que fazer primeiro. O único botão é "Ver o plano".

**O Plano** (`#plano`). Onze áreas, "27%". Em Gestão financeira: "**21% para o futuro, dentro da referência de 20%**".
Eu disse que guardo R$ 1.500 e só em 4 a 6 meses do ano. A tela pegou renda menos custo e me deu parabéns por uma
coisa que eu não faço.

**De volta ao Painel**: "O passo agora: **Chegar à reserva mínima**. Faltam R$ 24 mil · **sem data: nenhuma tarefa leva
dinheiro à reserva** · **Nada para hoje**". Travei aqui. Quanto eu guardo por mês? Em quanto tempo chego? Mais abaixo a
própria tela diz "Os R$ 2.400 que sobram vão primeiro para a reserva", mas não transforma isso em tarefa nem em data.

**Criar a conta** (`03-criar-conta.jpg`): "Só eu / Nós dois", dois nomes, pronto. O que eu tinha preenchido veio junto.
Simples demais para ser verdade: não pediu e-mail, celular nem senha (é protótipo).

**Um objetivo** (`#cartao/objetivos`): criei "Viagem a Fortaleza, R$ 18 mil, mai/2028, R$ 600 por mês". Resposta na
hora: "pede R$ 842 por mês; vocês põem R$ 600 · atrasa 7 meses" (`04-objetivo-criado-visitante.jpg`). Isso é bom, é
exatamente o que eu queria saber.

**"Proteção, pilar do exame: 28 · responder a calculadora de seguros ›"**: cliquei e a calculadora do seguro está "em
breve". No lugar, oito perguntas do tipo "Ruína em investimentos: protegido, em parte, sem proteção". Não sei responder.

**"Marcar a reunião de avaliação"**: apareceu um aviso cinza, "No produto, abre a agenda dos planejadores da Nord", e
sumiu. Não marquei nada. Em "Os níveis de atendimento" não há preço.

**A clínica** (`area-cliente.html?cliente=exemplo&demo&hoje=2026-11-18`): o mesmo Painel, agora com a Patrícia, o
"check-up anual" e as tarefas que saíram da conversa. A estrutura igual ajuda: não precisei reaprender.

**A coleta e o relatório** (a Patrícia, no computador). Ela abriu `index.html#cliente/exemplo-completo`, a coleta
(`tela-consultor.html?cliente=exemplo-completo&coleta`) e me apresentou o relatório
(`evolucao-patrimonial.html?cliente=exemplo-completo&versao=1&area`). Na reunião, no computador, o livro funciona: o
propósito com os nossos objetivos, "hoje 1 de 8 em dia, depois 7 de 8", os oito riscos, a página de cada objetivo. Saí
com números que eu nunca tive: reserva ideal de R$ 102 mil (tenho R$ 60 mil), proteção em 38%, R$ 2.500 por mês para
cinco objetivos, liberdade aos 57.

**Depois, sozinha, no celular**, tentei reler o relatório: a tabela do "orçamento alternativo" sai cortada
(`05-relatorio-orcamento-celular.jpg`), o gráfico da evolução vira um emaranhado (`22-evolucao-celular.jpg`).

**O que não bateu no relatório:** "Vocês guardam **17%** da renda; faltam R$ 500 para chegar a 20%" e, na minha área,
"**20%** para o futuro, dentro da referência". "Para o futuro **R$ 3.233**" e, logo abaixo, as partes que somam
**R$ 3.330**. O relatório diz que os objetivos pedem **R$ 5.690**; o Painel, **R$ 5.626**.

**Senti falta:** de alguém me dizer, no resultado do exame, "o seu problema é este". **Deu vontade de voltar:** o
objetivo com data e o "atrasa 7 meses". **Deu vontade de desistir:** o "sem data, nada para hoje".

---

## Mês 1 · novembro de 2026 (16/11) · a primeira tarefa de verdade

`area-cliente.html?cliente=exemplo-completo&demo&hoje=2026-11-16#painel`

**O que eu queria:** ver o que fazer e fazer.

O Painel é bom: "Completar a reserva com o resgate do BTG · R$ 60 mil · faltam R$ 42,1 mil · até 20/11", e embaixo o
patrimônio, a reserva e a dívida. Só que o botão laranja dentro desse cartão era "**Combinar a semana**", que é de outro
assunto (o teto de gastos). Cliquei achando que era o resgate.

**O teto da semana** (`06-teto-grafico-sobreposto.jpg`): "até R$ 1.237 nos gastos que vocês controlam, de 16/11 a
22/11", e me pergunta "Fiquei dentro / Passei" **no primeiro dia da semana**. No gráfico, a sexta coluna (30/11) cai
para a linha de baixo, em cima do botão. Informei R$ 1.100 e o Painel respondeu "a semana de 16/11 **fechou no teto**".
Fechou? Ainda é segunda-feira.

Depois disso o botão laranja virou "**Enviar o informe de…**" (cortado, `07-botao-truncado-e-desfazer.jpg`). Era uma
tarefa "pedida pela Patrícia": enviar o informe de rendimentos do Itaú. Enviar por onde? Não tem como anexar. E o banco
só libera o informe em fevereiro. Toquei em "Não fiz": só me deixou escolher nova data. Não pude escrever o porquê.

**Em Tarefas** (`#tarefas`) havia três linhas iguais, "Teto da semana: até R$ 1.237" (desde 8/11, desde 15/11) e uma
"até R$ 177" (desde 1/11). Qual é qual? Por que R$ 177?

**O resgate.** "Resgatar R$ 42.133 do BTG para a reserva, em liquidez diária. 10 min: pedir o resgate no app do BTG."
Tenho R$ 530 mil no BTG em vários produtos. Resgato de qual? E ponho onde? "Liquidez diária" eu não sei o que é.
Perguntei à Patrícia pelo WhatsApp (fora da ferramenta), fiz, e marquei **Fiz**. O Painel mudou na hora: **Reserva
R$ 102,1 mil · ideal**, e "a reserva subiu R$ 42,1 mil". Foi a melhor sensação do ano.

E logo depois: "**Os passos de agora estão cumpridos. A Patrícia define o próximo.**" (`08-passos-cumpridos-sem-proximo.jpg`).
E agora? Fiquei sem passo.

**Do lado da Patrícia** (`index.html?hoje=2026-11-16#cliente/exemplo-completo`): a tarefa do informe apareceu como
"adiada até 26/02/2027" (certo). Mas em "O que o cliente fez" a última linha é de **19/10/2026**: o resgate que eu
acabei de marcar não está lá. Ela não tem como saber que a reserva fechou. Ela cadastrou uma tarefa nova para mim
("Abrir o PGBL da Ana e aplicar R$ 16.848 até 28/12").

**Voltar ou desistir:** voltar, pelo resgate. Mas saí sem saber o próximo passo.

---

## Mês 2 · dezembro de 2026 (14 e 20/12) · 13º, bônus e o PGBL

`…&hoje=2026-12-14#painel`

**O que eu queria:** saber o que fazer com o 13º.

A tarefa da Patrícia chegou no Painel: "Abrir o PGBL… · pedida pela Patrícia · para pagar R$ 4.494 a menos de imposto".
Esse "para quê" com valor é ótimo. Sobre o 13º, nada em lugar nenhum.

"Antes de fazer, 2 min: Previdência: PGBL e VGBL" (`11-saber-prova-antes-do-conceito.jpg`). Abri para aprender e caí
numa **prova de três perguntas**. Errei as três. Só então apareceu "o conceito", em três linhas que falam de "renda
bruta tributável" e "tabela regressiva". Continuei sem saber onde se abre um PGBL.

**Atendimento** (`#conversas`). Escrevi: "entra o 13º e o bônus; uso para o PGBL ou ponho na casa própria?". Ficou
"aguardando a resposta, em até 2 dias úteis". Reparei que na conversa já havia uma mensagem da Patrícia datada de
**22/03**, falando da "reunião semestral", e estávamos em dezembro (`09-mensagem-do-futuro.jpg`).

**Do lado da Patrícia**: a pergunta apareceu em "Espera por mim" (bom). Ela abriu, escreveu a resposta no mesmo campo e
a resposta entrou **assinada como "Ana · aguardando a resposta"** (`10-consultora-responde-como-ana.jpg`). Ou seja: a
minha pergunta nunca foi respondida na ferramenta. A resposta veio pelo WhatsApp.

Marquei o PGBL como feito. No cartão de impostos (`#cartao/tributario`) continuou "R$ 34 mil por ano a menos": é o que
eu **poderia** economizar. Do que eu **já garanti** (os R$ 4.494), nada.

**Semanadas** (Mais › Semanadas, `acompanhamento.html?cliente=exemplo-completo&area`): "O seu consultor ainda não
combinou as semanadas: falta o dia em que a fatura de cada cartão vira" (`12-semanadas-nao-combinadas.jpg`). Mas eu
respondo um "teto da semana" toda semana em Tarefas. São duas coisas? A Patrícia configurou no portal (dia 10, teto de
R$ 5.300) e ainda assim a minha tela continuou vazia até ela publicar uma versão nova do plano.

**Senti falta:** do que fazer com dinheiro extra; de ver o imposto que já economizei.

---

## Mês 3 · janeiro de 2027 (18/01) · IPVA, guardei só uma parte, e o carro quebrou

`…&hoje=2027-01-18`

O aporte de janeiro já estava como "fiz parte, R$ 1.200". O Painel disse "Viagem a Fortaleza ficou R$ 216 mais perto
(feito em parte)". Abri a tarefa para corrigir o valor: só tem "Fechar". Resposta dada não se mexe mais. E nada me
disse como os R$ 1.300 que faltaram seriam recuperados.

**O conserto do carro, R$ 6.800.** No Painel, ao lado da reserva, "um imprevisto? ›" (`13-imprevisto.jpg`). Quatro
perguntas e a resposta: "R$ 6.800 da reserva: ela volta para R$ 95,3 mil, acima da aceitável. **Nenhum objetivo muda de
data. O aporte segue como combinado.**" Isso me acalmou de verdade.

Depois de confirmar, o passo voltou com o título antigo, "Completar a reserva com o resgate do BTG" (o resgate eu já
fiz), e "Faltam R$ 6.800 · **sem data: nenhuma tarefa leva dinheiro à reserva** · propor à Patrícia ›". O link só abre
o Atendimento, no alto da página. Escrevi outra pergunta. Também ficou sem resposta.

**Objetivos** (`#objetivos`, `14-objetivos-linha-do-tempo.jpg`). A linha "o sonho e o plano" é bonita, mas:
- "Para todos chegarem na data: **R$ 4.500** por mês" e, mais abaixo, "Os objetivos juntos pedem **R$ 5.796** por mês".
- Liberdade financeira "**na data**" e, no cartão dela, "aporte em **11% do necessário**: R$ 830 de R$ 7.656".
- "Liberdade aos **57**" e "sonho jun/2048 (aos **56**)".

**Realizado** (`#realizado`): dezembro, "Para o futuro: orçado R$ 2.500, realizado **R$ 1.300**". Mas o aporte de
dezembro está "fiz, R$ 2.500". Guardei 2.500 ou 1.300?

"Lançar um mês": pede o total de "despesas fixas" e de "despesas ajustáveis". Eu teria de somar o extrato à mão.
Cancelei.

**Voltar ou desistir:** o imprevisto me fez confiar; os números que não batem me fizeram desconfiar.

---

## Mês 4 · fevereiro de 2027 (22/02) · papelada do IR

`…&hoje=2027-02-22`

O informe do Itaú saiu, marquei Fiz. Criei uma tarefa minha ("Separar os recibos de médico e da escola para o IR", com
lembrete): fácil. Toquei em "lembrar ›" na tarefa do Marcos (o seguro, parado desde 10/10) e apareceu "A Nord lembra
Marcos pelo WhatsApp". Gostei, porque cobrar marido é ruim.

Em "Respondidas" já aparecia "**Aporte de março, 5/03**". Era 22 de fevereiro (`15-aporte-do-futuro.jpg`).

Quis criar um objetivo novo (a festa de 2 anos da Luiza). Na conta com plano completo não existe "novo objetivo": só
"Ver os objetivos no plano". Desisti.

---

## Mês 5 · março de 2027 (15 e 29/03) · bônus e a reunião de 6 meses

`…&hoje=2027-03-15#preparar`

**Preparar a reunião** (`16-preparar-reuniao.jpg`): o que ficou da reunião passada, "Reserva R$ 95,3 mil de R$ 102,1
mil", "Aportes 5 de 6", a pauta da Patrícia e um campo para a minha. Escrevi: o bônus de R$ 12 mil, trocar a casa de
praia por adiantar a casa própria, e o Marcos querendo ver no celular dele. "A Patrícia lê isto antes da reunião."
Na ficha dela a minha pauta **não aparece**.

"Patrimônio: de **R$ 1,8 milhão** em dez/2026 a **R$ 1,8 milhão** em mar/2027." Cresceu R$ 31 mil e a tela arredondou
para nada.

**Marcar.** "Confirmar a data" só escreveu "data confirmada em 15/03": sem hora, sem link. Em Atendimento, "Agendar o
1º acompanhamento" mostrou o aviso "No produto, abre a agenda da Patrícia". Só depois que a Patrícia montou a agenda
dela (`agendamento.html`, exemplo) apareceu um "Agendar" de verdade. Aí foi bom (`17-agendar.jpg`): calendário,
horário, "guardamos este horário por 4:58", link da chamada, remarcar e cancelar. Mas o calendário abriu no mês real
(novembro de 2026), e o Painel continuou mostrando "1º acompanhamento · 26/03/2027" ao lado de "A próxima reunião:
12 de novembro". A reunião dizia 50 minutos.

**Depois da reunião (29/03)**: "Desde 15/03: a Patrícia escreveu · **o plano foi ajustado**". A Casa própria passou a
R$ 1.800 por mês e o atraso dela caiu de **15 para 8 meses**. Relatório com "Versão 2 · em vigor" e a Versão 1 guardada.
Isso é o plano vivo funcionando.

O que não mudou: a reserva segue "sem data"; a pauta da próxima reunião tem **os mesmos quatro itens** da que acabou de
acontecer; sobre o bônus, nada.

---

## Mês 6 · abril de 2027 (20/04) · imposto de renda e uma dúvida de investimento

`…&hoje=2027-04-20`

**IR:** não há nada de abril na ferramenta. O que declarar, o que mudou com o PGBL, quanto vou restituir: fui ao
relatório (capítulo de impostos) e à Patrícia. Minha tarefa dos recibos segue aberta "desde 1/03".

**Dúvida:** o aporte agora é de R$ 2.800. Ponho em quê? A tarefa diz "fazer a transferência no app do banco". Em
Investimentos (`#cartao/politica`): "A carteira de hoje", "A carteira recomendada" e "O que muda na carteira" estão como
"preenchido com um planejador, na coleta e no plano": vazios, para um plano completo. Research da Nord: cinco de seis
"em breve". E a tela diz "R$ 3.233 por mês divididos entre as caixinhas" enquanto o Painel diz R$ 2.800 mais R$ 530.

Plano: "Investimentos R$ 860 mil" (o número de setembro) e, no Realizado, o financeiro já é R$ 902,5 mil.

---

## Mês 7 · maio de 2027 · não abri

Mês cheio no trabalho. Não entrei. O lembrete viria pelo WhatsApp; no protótipo não tenho como ver.

---

## Mês 8 · junho de 2027 (14/06) · voltei, e o Marcos quis ver

`…&hoje=2027-06-14`

Voltei depois de quase dois meses. O Painel disse "Desde 20/04: o patrimônio foi atualizado". Só isso. As semanas de
teto que eu não respondi sumiram em silêncio; não houve um "enquanto você esteve fora".

**O Marcos.** Ele quer ver no celular dele. Não achei convite, nem "entrar como Marcos". Tudo o que eu toco sai
"Respondendo como Ana", inclusive as tarefas dele. Mostrei no meu celular.

**O seguro.** "Cotar o seguro de vida e invalidez do Marcos · pedir a cotação a um corretor" está aberta desde
**10/10/2026**. Que corretor? A Nord não indica. Em junho ele finalmente contratou (por indicação da Patrícia). Abri
"Contratar o seguro de vida do Marcos": no meio da tela, uma caixa laranja com a palavra solta "**familia**"
(`18-familia-texto-cru.jpg`). Marquei Fiz.

E nada mudou (`19-riscos-nao-muda.jpg`): Gestão de riscos **38% protegido**, "A família, se faltar quem sustenta: **sem
proteção**", "Emergência **59%**" (a reserva está em 93%), e no Painel a pendência "Se o Marcos faltar, a Ana e a Luiza
ficam com R$ 2.500 por mês… resolve com a cotação ›". Fizemos a coisa mais importante do plano e a ferramenta não viu.

---

## Mês 9 · julho de 2027 (15/07) · o mês em que não guardei

`…&hoje=2027-07-15`

Férias da Luiza, viagem, não sobrou. "Marcar o aporte de julho" › **Não fiz** (`20-nao-guardei-opcoes.jpg`): "Sem este
aporte, a Viagem a Fortaleza precisa de R$ 51 a mais por mês para manter mai/2028; a Casa própria, R$ 56…". Quatro
saídas: manter a data (sugerida), adiar o objetivo, ajustar ao que coube, usei em outro objetivo. É a melhor tela da
ferramenta: não me dá bronca e me dá a conta.

Toquei em "Manter a data". Ficou azul. Fechei, satisfeita.

---

## Mês 10 · agosto de 2027 (9 e 12/08) · descobri que não tinha valido, e quis mudar um objetivo

`…&hoje=2027-08-09`

O aporte de julho continuava "em aberto" e o de agosto continuava R$ 2.800. A escolha de julho **não tinha sido
gravada**: havia um botão "Confirmar" lá embaixo, fora da tela (a 1.190 px numa tela de 844). Refiz, rolei, confirmei.
Aí sim: "Aporte de agosto: **R$ 2.916**". E um aviso honesto: "o ajuste vale como provisório até a Patrícia aprovar".
(Na ficha dela não aparece nada para aprovar.)

Só que o Painel passou a dizer "Aporte de julho: não feito · **os objetivos atrasam um mês**" e "Viagem a Fortaleza:
atrasa 1 mês". Eu escolhi manter a data.

**Mudar a casa de praia.** Na página do objetivo (`#objetivo/praia`) há um bom histórico dos aportes, mas nenhum botão
de mudar. O caminho é "Simular outros valores, no relatório". Procurei em quatro páginas do relatório e não achei. Está
num ícone pequeno dentro do cartão que abre quando se toca no marcador do objetivo no gráfico da evolução. No celular,
a tabela "como está / com estes valores" sai cortada (`21-simular-cortado-celular.jpg`). Mudei o custo para R$ 150 mil
e enviei: "Proposta enviada, aguardando o consultor". (Na primeira tentativa enviei sem mudar nada e não aconteceu
nada, sem aviso.)

**A Patrícia** viu em "Espera por mim" (bom), aprovou e respondeu. **Do meu lado**, o relatório continuou "⏳ aguardando
o consultor" e a casa de praia a R$ 300.000; já a minha área passou a mostrar a casa de praia a **R$ 150 mil**. Duas
telas, dois valores, nenhuma resposta.

---

## Mês 11 · setembro de 2027 (20/09) · a reunião de 12 meses

`…&hoje=2027-09-20#preparar`

A reunião se chama "Acompanhamento anual" no Painel, "Acompanhamento #2" na Jornada, e a "Renovação" está "a definir".
Eu queria, antes de decidir renovar, uma página com "o que mudou em um ano". O "Preparar a reunião" dá um pedaço:
reserva R$ 95,3 mil, aportes 3 de 6 desde março, tarefas da reunião passada 2 de 2. O resto eu tive de montar na cabeça.

A pauta "da Patrícia" é a mesma de março (riscos abaixo de 70%, aprofundar investimentos, a dívida, a ordem dos
objetivos). A minha pauta de 15/03 continua lá, sem resposta.

---

## Mês 12 · outubro de 2027 (18/10) · o balanço

`…&hoje=2027-10-18#realizado`

**Realizado**: "O dinheiro dedicado aos objetivos: **R$ 22.400 de R$ 35.248** planejados" e, logo abaixo, "Planejado
para o futuro R$ 31,3 mil · Realizado **R$ 31,7 mil: dentro do plano**". Estou R$ 13 mil atrás ou dentro do plano?

Lancei setembro (entradas 15.000, fixas 6.300, ajustáveis 7.900) e, no campo opcional do patrimônio, só o financeiro
(R$ 941 mil). Gravou, com "Ana lançou em 18/10/2027". E então (`23-patrimonio-caiu-divida-zero.jpg`): Painel com
**Patrimônio R$ 941 mil** (era R$ 1,8 milhão) e **a dívida sumiu**; Plano com "Dívidas **R$ 0**"; o cartão de dívidas
com "R$ 0 para quitar tudo". Os campos que eu deixei em branco viraram zero. Se eu não soubesse que devo R$ 366 mil,
teria comemorado.

No lançamento, "orçado para o futuro: R$ 2.500", contra o plano de 22/03 que já pede R$ 2.800.

**Semanadas, enfim.** Com a versão nova publicada pela Patrícia, a página funcionou (`24-semanadas-fatura.jpg`): quatro
semanas, "até 16/nov, a fatura em até R$ 1.325". Informei R$ 1.600: "R$ 275 acima do marco", e as semanas seguintes
caíram para R$ 1.233, com o valor antigo riscado. Entendi de primeira. Mas em Tarefas o "teto da semana" continua
R$ 1.237, com outras datas, sem saber do que lancei aqui.

**Um passo além do ano** (`…&hoje=2028-06-05`): a viagem a Fortaleza era para maio de 2028. Passada a data, a tela do
objetivo mostra só "R$ 6.816 de R$ 12 mil · 57%" e sete linhas "atrasado" (`25-objetivo-data-passou.jpg`). Ninguém
pergunta "vocês viajaram?". E a idade ao lado virou "aos 34" (em janeiro de 2027 era "aos 36").

---

## A minha vida financeira melhorou nesses 12 meses?

**Melhorou, e a ferramenta mostra:**

| Em quê | Antes | Depois | Onde vi |
|---|---|---|---|
| Reserva | R$ 60 mil (59% da ideal) | R$ 102,1 mil em nov/2026; R$ 95,3 mil depois do carro | Painel e `#cartao/reserva` |
| Um imprevisto | viraria dívida ou susto | R$ 6.800 pagos da reserva, "nenhum objetivo muda de data" | Painel › um imprevisto |
| Casa própria | atrasava 15 meses | atrasava 8 meses depois do ajuste de 22/03 (voltou a 12 com o mês sem guardar) | Painel › Os objetivos |
| Hábito de guardar | "4 a 6 vezes por ano" | 8 de 13 aportes, R$ 22.400 dedicados aos objetivos | `#realizado` |
| Clareza do que fazer no mês | nenhuma | um passo e a lista de tarefas, quando o passo existe | Painel e Tarefas |
| Saber o tamanho do problema | não sabia | reserva ideal, 38% de proteção, quanto cada sonho pede | relatório e Plano |

**Melhorou na vida, mas a ferramenta não mostra (ou mostra errado):**

- **Proteção:** o Marcos contratou o seguro de vida em junho. A ferramenta segue em 38%, "sem proteção".
- **Imposto:** fiz o PGBL de R$ 16.848. A ferramenta só mostra o potencial (R$ 34 mil por ano), nunca o que garanti.
- **Patrimônio:** o financeiro foi de R$ 871 mil (dez/2026) a R$ 926,8 mil (jun/2027), pelo Realizado; o Painel disse
  "R$ 1,8 milhão" o ano inteiro e, depois do meu lançamento de setembro (em que informei só o financeiro, R$ 941 mil),
  passou a dizer "R$ 941 mil" de patrimônio total, com a dívida zerada.

**Não melhorou, e a ferramenta não ajudou:**

- **Investimentos:** continuo sem saber onde pôr o aporte de cada objetivo. A carteira recomendada está vazia para mim.
- **Dívida:** R$ 368 mil para R$ 366 mil, só a amortização. "Amortizar ou investir" ficou na pauta o ano todo.
- **Quatro dos cinco objetivos seguem atrasados**, "por desenho do plano", e o que eles pedem por mês só subiu
  (R$ 5.626 para R$ 6.149).
- **A reserva não voltou ao ideal** depois do carro: dez meses com "sem data: nenhuma tarefa leva dinheiro à reserva".
- **O Marcos nunca entrou.**

**Só melhorou por causa da Patrícia, apesar da ferramenta:**

- Saber de qual produto do BTG resgatar e onde pôr a reserva.
- O que fazer com o 13º e o bônus; a declaração do IR.
- Achar um corretor e fechar o seguro.
- O ajuste da Casa própria (decidido na reunião) e a aprovação da casa de praia.
- Todas as respostas às minhas perguntas: nenhuma chegou pela ferramenta.

**Em uma frase:** a ferramenta me deu o hábito e a régua (marcar, ver a reserva subir, ver o custo de não guardar); a
decisão e a confiança vieram da Patrícia, por fora; e os números que não batem entre uma tela e outra quase me fizeram
parar de acreditar na régua.
