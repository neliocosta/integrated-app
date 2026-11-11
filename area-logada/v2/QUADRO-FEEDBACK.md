# Quadro de feedback · 12 meses de uso simulado da Nord Liberta 2.0

Feito em 11/11/2026 por um teste de uso simulado: uma pessoa (Ana Ribeiro, 35, CLT, casada com o Marcos, dono de uma
papelaria; entende pouco de finanças; usa o celular; cinco minutos de paciência) viveu de novembro/2026 a outubro/2027
na ferramenta, com a consultora Patrícia do outro lado. O relato mês a mês está em
[DIARIO-12-MESES.md](DIARIO-12-MESES.md); as capturas, em [capturas-simulacao/](capturas-simulacao/).

Como ler: cada cartão vem de algo visto na tela, navegando de verdade (Chrome pelo DevTools, 390×844 e 1366×800). A
"conta" é o exemplo completo (`area-cliente.html?cliente=exemplo-completo&demo&hoje=…`); o começo da jornada foi vivido
como visitante. **Gravidade alta** = me faria desistir ou tomar uma decisão errada. "Mês" é o mês da simulação (0 =
chegada; 1 = nov/2026; 12 = out/2027). Endereços abreviados: `área` = `area-cliente.html?cliente=exemplo-completo&demo`.

## As 10 coisas mais importantes, em ordem

1. **Lançar um mês informando só o financeiro zera a dívida e os bens** (Q1): o Painel passou de "Patrimônio R$ 1,8
   milhão, Dívidas R$ 366 mil" para "R$ 941 mil" e "Dívidas R$ 0".
2. **A consultora não consegue responder na ferramenta** (Q2 e S1): a resposta dela entra assinada "Ana · aguardando a
   resposta". Minhas três perguntas do ano ficaram sem resposta.
3. **O que eu marco não chega à ficha da consultora** (Q3): "O que o cliente fez" parou em 19/10/2026; o resgate, o
   imprevisto, o mês sem guardar, o ajuste "provisório até a Patrícia aprovar" e a minha pauta não aparecem para ela.
4. **O que eu faço não muda a proteção nem a reserva do plano** (Q4 e Q5): seguro contratado e reserva completa, e a
   tela segue em 38%, "sem proteção", "Emergência 59%"; o relatório de março ainda diz "vocês têm hoje R$ 60.000".
5. **Os números da poupança e dos objetivos não batem entre telas** (Q6, Q7, Q8): 17% × 20%; R$ 3.233 × R$ 3.330;
   aporte "fiz R$ 2.500" × realizado R$ 1.300; "R$ 22.400 de R$ 35.248" × "dentro do plano" na mesma tela.
6. **Fico sem passo** (S2): depois de cumprir o passo, "A Patrícia define o próximo"; depois do imprevisto, dez meses
   de "sem data: nenhuma tarefa leva dinheiro à reserva".
7. **A tarefa diz o quê, não diz como** (S3 e S4): de qual produto resgatar, onde pôr a reserva, onde abrir o PGBL, em
   que investir o aporte; a carteira recomendada está vazia.
8. **"Não guardei": o botão Confirmar fica fora da tela** (T1): escolhi "Manter a data", saí, e nada foi gravado.
9. **O seguro ficou oito meses parado** (S5): "pedir a cotação a um corretor", sem corretor; "cotações de seguros" está
   em breve. É a maior ameaça do plano.
10. **O relatório não funciona no celular** (Q12): orçamento com colunas cortadas, evolução ilegível, o simulador com a
    comparação fora da tela; e é lá que fica a única forma de mudar um objetivo (T5).

## Veredito sobre os 12 meses

A vida da Ana melhorou em reserva (R$ 60 mil → R$ 102,1 mil, e um conserto de R$ 6.800 pago sem susto), em hábito (8
de 13 aportes, R$ 22.400) e em clareza do tamanho do problema; a Casa própria ganhou sete meses com o ajuste de março.
A ferramenta deu a régua e o gesto: marcar, ver a reserva subir, ver quanto custa um mês sem guardar.
Proteção e imposto melhoraram na vida, mas a ferramenta não registra: segue em 38% e só mostra o imposto "possível".
Investimentos, dívida e quatro dos cinco objetivos ficaram onde estavam; o cônjuge nunca entrou.
Toda decisão e toda resposta vieram da Patrícia por fora (WhatsApp e reunião): hoje a ferramenta registra o que foi
combinado, mas não fecha a volta, e os números que divergem entre telas corroem a confiança no que ela mostra.

---

## 1. Senti falta (não existe e eu precisava)

| Nº | Título | O que aconteceu | Onde | Mês | Gravidade | O que resolveria, para mim |
|---|---|---|---|---|---|---|
| S1 | A resposta da Patrícia, aqui | Escrevi três perguntas (13º, carro, pauta). Todas ficaram "aguardando a resposta, em até 2 dias úteis" o ano inteiro. A resposta veio pelo WhatsApp. | Atendimento, `área#conversas` | 2, 3, 5 | alta | Ver a resposta dela na conversa e um aviso no Painel quando chegar. |
| S2 | O próximo passo | Marquei o resgate e o Painel disse "Os passos de agora estão cumpridos. A Patrícia define o próximo." Depois do carro, "faltam R$ 6.800 · sem data: nenhuma tarefa leva dinheiro à reserva", de janeiro a outubro. | Painel, `área#painel` (captura 08) | 1, 3 a 12 | alta | Sempre ter um passo: o seguinte da lista, ou "repor R$ 6.800 em X meses, R$ Y por mês", que eu aceito com um toque. |
| S3 | Como fazer a tarefa | "Resgatar R$ 42.133 do BTG para a reserva, em liquidez diária." Tenho vários produtos no BTG. De qual? Ponho onde? No PGBL, onde se abre? | Tarefas, `área#tarefas` | 1, 2 | alta | Em cada tarefa, o passo a passo que a Patrícia escreveu para mim (produto, valor, destino). |
| S4 | Onde investir o aporte | O aporte diz "fazer a transferência no app do banco". Em Investimentos, "carteira de hoje", "carteira recomendada" e "o que muda" estão vazias; no Research, cinco de seis "em breve". | `área#cartao/politica`, `área#research` | 6 | alta | Para cada objetivo, "ponha em tal tipo de investimento", na própria tarefa do aporte. |
| S5 | Um corretor para o seguro | "Cotar o seguro de vida do Marcos · pedir a cotação a um corretor" ficou aberta de 10/10/2026 a junho. Que corretor? | Tarefas e Painel › Pendências | 1 a 8 | alta | Um botão "pedir a cotação pela Nord" ou o contato de quem cota. |
| S6 | O que fazer com dinheiro extra | Entraram 13º e bônus e nada na ferramenta disse para onde vão. Em março (bônus de R$ 12 mil), de novo. | Painel, Tarefas | 2, 5 | média | Uma tarefa no mês em que o extra entra: "R$ X para tal objetivo". |
| S7 | O imposto que eu já economizei | Fiz o PGBL. O cartão continuou "R$ 34 mil por ano a menos", que é o possível. Do que eu garanti, nada. | `área#cartao/tributario` | 2, 6 | média | "Já garantido este ano: R$ 4.494 de R$ 34 mil." |
| S8 | O IR de abril | Em abril não havia nada: o que declarar, o que muda com o PGBL, o que juntar. | Painel, Tarefas | 6 | média | Uma lista curta em março e abril, saída do capítulo de impostos. |
| S9 | Dizer por que não fiz, e anexar | "Enviar o informe de rendimentos": enviar por onde? E o banco só libera em fevereiro. "Não fiz" só me deixou marcar nova data. | Folha da tarefa, `área#tarefas` | 1 | média | Um campo "por quê" que a Patrícia lê, e anexar o arquivo na tarefa. |
| S10 | O Marcos entrar | Ele quis ver no celular dele. Não há convite nem "entrar como Marcos"; até as tarefas dele saem "Respondendo como Ana". | Toda a área | 8 | média | Convidar o cônjuge, cada um vendo e respondendo as suas. |
| S11 | Criar ou mudar um objetivo na aba Objetivos | Quis incluir a festa da Luiza e reduzir a casa de praia. Com plano completo, a aba só tem "Ver os objetivos no plano". | `área#objetivos`, `área#objetivo/praia` | 4, 10 | média | Na página do objetivo: "mudar valor ou data" e "novo objetivo", que viram proposta. |
| S12 | O balanço do ano antes de renovar | A "Renovação" está "a definir". Não há uma página com o que mudou em 12 meses. | `área#jornada`, `área#preparar` | 11 | média | Um "seu ano": reserva, aportes, objetivos, proteção, imposto, antes e depois. |
| S13 | O dia em que o objetivo chega | Passada a data da viagem, a tela mostra "57%" e linhas "atrasado". Ninguém pergunta se viajamos. | `área&hoje=2028-06-05#objetivo/fortaleza` (captura 25) | além do 12 | média | Na data: "chegou. Realizaram? Adiar? Usar o que tem?" |
| S14 | Corrigir uma resposta | O aporte de janeiro estava "fiz parte, R$ 1.200". Abri para acertar e só havia "Fechar". O "Desfazer" só existe nos segundos depois de responder. | Folha da tarefa respondida | 3 | média | "Corrigir a resposta" em qualquer tarefa respondida. |
| S15 | Marcar a reunião de avaliação sem conta de cliente | "Marcar a reunião de avaliação" mostrou um aviso ("No produto, abre a agenda…") e nada mais. | `area-cliente.html?demo#painel` | 0 | média | Abrir a agenda de verdade, como acontece depois para o cliente. |
| S16 | Preço e o que cada nível inclui | Em "Os níveis de atendimento" não há valor nem como contratar. | `#conversas` (visitante) | 0 | baixa | Faixa de preço e um botão para falar com alguém. |
| S17 | "Enquanto você esteve fora" | Fiquei quase dois meses sem abrir. Voltei e li só "Desde 20/04: o patrimônio foi atualizado". As semanas não respondidas sumiram. | Painel | 8 | baixa | Três linhas: o que venceu, o que foi feito por mim, o que fazer agora. |
| S18 | O número exato da evolução | "Patrimônio: de R$ 1,8 milhão em dez/2026 a R$ 1,8 milhão em mar/2027." Cresceu R$ 31 mil. | `área#preparar` | 5, 11 | baixa | Mostrar a diferença em reais. |

## 2. Travei (existe, mas não consegui ou não entendi)

| Nº | Título | O que aconteceu | Onde | Mês | Gravidade | O que resolveria, para mim |
|---|---|---|---|---|---|---|
| T1 | "Não guardei": o Confirmar fica fora da tela | Toquei em "Manter a data (sugerida)", ficou azul, fechei. Um mês depois o aporte seguia "em aberto" e o seguinte não tinha subido: o "Confirmar" estava abaixo da tela (a cerca de 1.190 px numa tela de 844). | Folha do aporte, `área&hoje=2027-07-15` (captura 20) | 9, 10 | alta | Tocar na opção já grava (com "Desfazer"), ou o Confirmar fica sempre à vista. |
| T2 | "Sem data: nada para hoje" logo no começo | Recém-cadastrada, o passo era "Chegar à reserva mínima · faltam R$ 24 mil · sem data: nenhuma tarefa leva dinheiro à reserva · Nada para hoje". A própria tela dizia que R$ 2.400 por mês iriam para a reserva. | `area-cliente.html?cliente=<conta>&demo#painel` | 0 | alta | "Guarde R$ 2.400 por mês: chega em 10 meses", com a tarefa já criada. |
| T3 | O resultado do exame não diz o que fazer | "46 de 100", cinco barras e "Nota provisória: a fórmula oficial ainda vai substituir esta conta". Patrimônio 100 devendo R$ 370 mil. | `#exame` (captura 02) | 0 | média | Uma frase: "o seu ponto fraco é X; comece por Y". Sem o aviso de "provisória" na cara do cliente. |
| T4 | O botão do passo é de outro assunto | No cartão "Completar a reserva com o resgate do BTG", o botão laranja era "Combinar a semana". Cliquei achando que era o resgate. Depois virou "Enviar o informe de…", cortado. | Painel (capturas 06 e 07) | 1 | média | O botão do passo faz o passo; o resto fica na lista. Título inteiro. |
| T5 | "Simular outros valores" está escondido | A área manda usar "Simular outros valores, no relatório". Procurei em quatro páginas. Está num ícone dentro do cartão que abre ao tocar o marcador do objetivo no gráfico da evolução. | `evolucao-patrimonial.html?…&fase=evolucao` | 10 | média | Um botão "simular e propor" na página de cada objetivo. |
| T6 | Teto da semana: qual semana, que valor, que resposta | Três tarefas iguais "Teto da semana: até R$ 1.237" (desde 8/11, 15/11…), uma "até R$ 177", outras "R$ 513", "R$ 171". Perguntam "fiquei dentro ou passei" no primeiro dia da semana. Respondi R$ 1.100 e li "fechou no teto". | `área#tarefas` e Painel | 1 a 12 | média | Uma tarefa só, "semana de 9 a 15/11", perguntada no fim da semana; "ficou R$ 137 abaixo". |
| T7 | Dois tetos para a mesma coisa | Em Tarefas, "Teto da semana R$ 1.237, em qualquer meio". Em Semanadas, "a fatura em até R$ 1.325", com outras datas. Lancei a fatura e a tarefa não soube. | `área#tarefas` × `acompanhamento.html?cliente=exemplo-completo&area` (captura 24) | 2, 12 | média | Um combinado só; responder num lugar vale no outro. |
| T8 | Semanadas vazia sem eu saber por quê | "O seu consultor ainda não combinou as semanadas." Mesmo depois de ela configurar, seguiu vazia até publicar uma versão nova do plano. | `acompanhamento.html?…&area` (captura 12) | 2 | média | Esconder a entrada enquanto não há combinado, ou dizer "peça à Patrícia" com um toque. |
| T9 | Aprender começa por uma prova | "Antes de fazer, 2 min: PGBL e VGBL" abriu três perguntas. Errei as três; só então veio "o conceito", três linhas com "renda bruta tributável". | `área#modulo/previdencia` (captura 11) | 2 | média | O conceito primeiro, em linguagem de gente, e a prova opcional ("já sei"). |
| T10 | "Lançar um mês" pede totais que eu não tenho | Pede "despesas fixas" e "despesas ajustáveis" do mês. Eu teria de somar o extrato. | `área#realizado` › Lançar um mês | 3, 12 | média | Aceitar só "quanto entrou" e "quanto sobrou", ou a fatura e o saldo. |
| T11 | Marcar a reunião de 6 meses | "Confirmar a data" só escreveu "data confirmada em 15/03", sem hora. "Agendar o 1º acompanhamento" deu um aviso. O agendar de verdade só apareceu depois de a consultora montar a agenda; aí abriu no mês errado e o Painel seguiu mostrando "26/03/2027". | `área#preparar`, `área#conversas`, `agendar.html` | 5 | média | Um caminho só: "Agendar", que abre os horários dela e troca a data prevista pela marcada. |
| T12 | "Os 5 pedem R$ 5.626/mês… 4 atrasam por desenho do plano" | Não entendi "por desenho do plano", e o número sobe todo mês (5.626, 5.689, 5.796… 6.535). Parece que estou piorando. | Painel › Os objetivos | 1 a 12 | média | "Combinamos priorizar a viagem e a casa; os outros três esperam até set/2027." |
| T13 | Palavras que eu não sei | Liquidez diária, D+0 e D+30, caixinha, ajustáveis, pró-labore, ITCMD, VGBL, "escalada", "Construir", "Ruína em investimentos", "Risco de liquidez". | Plano, Tarefas, exame de riscos | 0 a 12 | média | A palavra comum, ou um toque que explica em uma linha. |
| T14 | "Responder a calculadora de seguros" leva a um "em breve" | A pendência mandava responder a calculadora; ela não existe. No lugar, oito ameaças para eu classificar sozinha. | `#cartao/riscos` (cadastrada) | 0 | média | Não oferecer o que não existe; ou três perguntas que eu sei responder. |
| T15 | Enviar a proposta sem mudar nada | Abri o simulador, escrevi a observação e toquei "Enviar ao consultor". Nada aconteceu, sem aviso. | Simulador do objetivo, relatório | 10 | baixa | Dizer "mude um valor para enviar", ou enviar só a observação. |
| T16 | "Propor à Patrícia" | O link leva ao alto do Atendimento, sem nada escrito. | Painel | 3 | baixa | Abrir a mensagem já começada: "Usei R$ 6.800 da reserva; como reponho?" |
| T17 | Quantas perguntas tem o exame | O Painel e o "Como usar" dizem 33; a abertura diz 24; no meio virou "de 28", "de 30", "de 31". | `#painel`, `#exame`, `#comousar` | 0 | baixa | Um número só, ou uma barra sem número. |

## 3. Quebrado (erro, número incoerente entre telas, texto cortado, não funciona no celular)

| Nº | Título | O que aconteceu | Onde | Mês | Gravidade | O que resolveria, para mim |
|---|---|---|---|---|---|---|
| Q1 | Lançar o mês zerou a minha dívida | Lancei setembro e, no patrimônio "opcional", só o financeiro (R$ 941 mil). O Painel passou a "Patrimônio R$ 941 mil" (era R$ 1,8 milhão), o bloco da dívida sumiu, o Plano mostrou "Dívidas R$ 0" e o cartão, "R$ 0 para quitar tudo · Ana lançou em 18/10/2027". | `área&hoje=2027-10-18#realizado` → `#painel`, `#plano`, `#cartao/dividas` (captura 23) | 12 | alta | Campo em branco é "não mudou", nunca zero. |
| Q2 | A resposta da consultora sai com o meu nome | A Patrícia abriu a minha pergunta pela ficha e respondeu no mesmo campo ("Escrever para a Patrícia"). A resposta entrou como "Ana · 16/12 · aguardando a resposta" e virou mais uma "mensagem sem resposta" na lista dela. | `area-cliente.html?cliente=exemplo-completo&consultor#conversas` (captura 10) | 2 | alta | Ela responde como ela, e a minha pergunta sai da fila. |
| Q3 | A ficha da consultora não vê o que eu fiz | "O que o cliente fez" mostra quatro linhas, a última de 19/10/2026, em novembro, dezembro, março e agosto. Não aparecem o resgate, o imprevisto de R$ 6.800, o mês sem guardar, o ajuste "provisório até a Patrícia aprovar" nem a pauta que "a Patrícia lê antes da reunião". | `index.html#cliente/exemplo-completo` | 1, 2, 5, 10 | alta | Ela ver o mesmo que eu vejo em "Respondidas", o que pede aprovação e a minha pauta. |
| Q4 | Contratei o seguro e nada mudou | Marquei "Contratar o seguro de vida do Marcos". Seguiram: "38% protegido", "A família, se faltar quem sustenta: sem proteção", e no Painel "Se o Marcos faltar… resolve com a cotação". Até outubro. | `área#cartao/riscos`, Painel › Pendências (captura 19) | 8 a 12 | alta | A pendência fechar e o percentual subir, ainda que "a confirmar com a Patrícia". |
| Q5 | A reserva tem um valor em cada tela | Painel e Plano: R$ 102,1 mil, depois R$ 95,3 mil. Gestão de riscos: "Emergência 59%". Cartão da reserva: "D+0 R$ 60 mil", "o que falta sai da caixinha da liberdade", origem "plano de 26/09/2026". Relatório versão 2 (22/03/2027): "Vocês têm hoje R$ 60.000". Portal da consultora: "R$ 60.000 de R$ 102.133". Política: "R$ 102.200". | `área#painel`, `#cartao/reserva`, `#cartao/riscos`; `evolucao-patrimonial.html?…&versao=2&fase=riscos`; `tela-consultor.html#apresentacao` | 1 a 12 | alta | Um valor só, o de hoje, em toda tela; e o relatório novo partir dele. |
| Q6 | Quanto vai para o futuro: 17% ou 20%? R$ 3.233 ou R$ 3.330? | Relatório: "Vocês guardam 17%; faltam R$ 500 para os 20%". Plano: "20% para o futuro, dentro da referência". Relatório (política): total R$ 3.233, partes que somam R$ 3.330. Painel: R$ 2.500 + R$ 830; depois R$ 2.800 + R$ 530; Investimentos: "R$ 3.233 por mês". Realizado: orçado R$ 2.500 "contra o plano de 22/03/2027", que pede R$ 2.800. | relatório `fase=renda-custo` e `fase=politica`; `área#plano`, `#cartao/gestao`, `#cartao/politica`, `#realizado` | 0 a 12 | alta | Um número combinado ("vocês guardam R$ X por mês"), igual em todo lugar. |
| Q7 | Guardei R$ 2.500 ou R$ 1.300? | Dezembro: aporte "fiz · R$ 2.500"; no Realizado, "para o futuro: R$ 1.300". Em outubro/2027, na mesma tela: "R$ 22.400 de R$ 35.248 planejados" e "Realizado R$ 31,7 mil: dentro do plano". | `área#realizado` | 3, 12 | alta | Dizer qual vale e explicar a diferença numa linha. |
| Q8 | Objetivos: contas que se contradizem na mesma tela | "Para todos chegarem na data: R$ 4.500 por mês" e "Os objetivos juntos pedem R$ 5.796". Liberdade "na data" com "aporte em 11% do necessário". Casa de praia "na data" com "aporte em 18% do necessário". Relatório: pedem R$ 5.690; Painel no mesmo mês: R$ 5.626. | `área#objetivos` (captura 14), Painel, relatório `fase=objetivos-juntos` | 0, 3, 12 | alta | Uma conta só de "quanto falta por mês", e "na data" só quando o aporte fecha. |
| Q9 | Proposta aprovada: o relatório diz que espera, a área já mudou | A Patrícia aprovou a casa de praia a R$ 150 mil. No relatório: "⏳ aguardando o consultor" e R$ 300.000. Na minha área: "de R$ 150 mil". Na ficha dela, a proposta seguiu "esperando resposta". | relatório `…&versao=2`; `área#objetivo/praia`; `index.html#cliente/exemplo-completo` | 10 | alta | Ver "aprovada em tal dia" com a resposta dela, e o mesmo valor nos dois lugares. |
| Q10 | Escolhi manter a data e a tela diz que atrasou | Depois de confirmar "Manter a data", o Painel: "Aporte de julho: não feito · os objetivos atrasam um mês" e "Viagem a Fortaleza: atrasa 1 mês". | Painel › Respondidas e Os objetivos | 10, 11 | média | "Não feito · compensado nos próximos aportes (R$ 2.916)". |
| Q11 | Coisas com data do futuro | Em 14/12: mensagem da Patrícia de "22/03" sobre a reunião semestral. Em 22/02: "Aporte de março, 5/03" em Respondidas e somado ao guardado. Em 29/03: "Aporte de abril, 5/04". No portal, em novembro: "Versão 2, a que o cliente vê, 22/03/2027". | `área#conversas` (captura 09), Painel (captura 15), `tela-consultor.html` | 2, 4, 5 | média | Só mostrar o que já aconteceu (pode ser só do exemplo; vale conferir no dado real). |
| Q12 | O relatório no celular | Orçamento: colunas "Reduz" e "Novo" fora da tela e a barra cortada. Evolução: rótulos uns sobre os outros, legenda atrás do botão "?". Simulador: a comparação "como está / com estes valores" fica cortada à direita. | `evolucao-patrimonial.html?…&fase=orcamento`, `evolucao`, e o simulador em `riscos`, em 390 px (capturas 05, 21, 22) | 0, 10 | média | Reler o relatório no celular sem perder coluna; simulador em uma coluna. |
| Q13 | O gráfico do teto cai em cima do botão | Na folha "Teto da semana", a sexta coluna (30/11) quebra para a linha de baixo e fica sobre "Fiquei dentro" e a legenda. | Painel › Combinar a semana, 390 px (captura 06) | 1 | média | As semanas do mês caberem numa linha. |
| Q14 | O passo e a pauta ficam velhos | Depois do resgate feito e do carro, o passo segue "Completar a reserva com o resgate do BTG". A pauta da reunião de setembro tem os mesmos quatro itens da de março, e a minha pauta de 15/03 continua lá. | Painel, `área#preparar` | 3 a 11 | média | O título do passo dizer o que falta hoje; a pauta zerar depois da reunião. |
| Q15 | Idades que mudam | "Liberdade aos 57" e "sonho jun/2048 (aos 56)". Fortaleza "aos 36" em jan/2027 e "aos 34" em jun/2028. Relatório de março/2027: "Hoje · 35 anos" e "fev/2027, daqui a 5 meses". Luiza tem 1 ano no plano de saúde e intercâmbio em 2034. | `área#objetivos`; relatório `fase=evolucao`, `fase=realizacao`, `fase=riscos` | 3, 10, 12 | média | A idade certa, e o relatório novo contar a partir da data dele. |
| Q16 | Números do plano parados na foto | Em out/2027: "Investimentos R$ 860 mil" (Plano) com financeiro real de R$ 926,8 mil (Realizado). "A trilha: R$ 10 mil guardados até dez/2026", lida em fev/2027. Origem "do plano de 26/09/2026" com a versão 2 em vigor. | `área#plano`, `#cartao/politica`, `#cartao/objetivos`, `#objetivo/praia` | 4, 6, 12 | média | Ao lado do número do plano, o de hoje. |
| Q17 | Visitante: "21% para o futuro, dentro da referência" | Eu disse que guardo R$ 1.500 em 4 a 6 meses do ano. A tela calculou renda menos custo e me deu 21% e "sobra de R$ 3.000". | `area-cliente.html?demo#plano`, `#objetivos` | 0 | média | Usar o que eu disse que guardo; mostrar a diferença como pergunta ("para onde vão os outros R$ 1.500?"). |
| Q18 | Texto cru na tela | Caixa laranja com a palavra "familia" na tarefa do seguro. Na ficha, "de a família". | Folha "Contratar o seguro de vida do Marcos" (captura 18); `index.html#cliente/…` | 8, 1 | baixa | Tirar, ou escrever a frase ("protege a família"). |
| Q19 | Ficha da consultora contradiz a minha área | "Coleta de dados: ainda não começou" com reunião de coleta em 02/09 e plano publicado. "Sem reunião marcada" enquanto a minha área mostra "1º acompanhamento · 26/03/2027". | `index.html#cliente/exemplo-completo` | 0, 1 | baixa | A ficha e a área contarem a mesma história. |
| Q20 | Erro no console ao gravar valor | "NotFoundError: Failed to set the 'innerHTML'… moved in a 'blur' event handler" ao sair do campo de valor (teto, imprevisto). Na tela, nada quebrou. | `area-cliente.html`, linhas ~4976–4977 | 1, 3 | baixa | — |

## 4. Funcionou bem (manter)

| Nº | Título | O que aconteceu | Onde | Mês | O que manter |
|---|---|---|---|---|---|
| F1 | "Não guardei" sem bronca e com a conta | "Sem este aporte, a Viagem a Fortaleza precisa de R$ 51 a mais por mês…", quatro saídas, e o aporte seguinte virou R$ 2.916. É a tese do produto funcionando. | Folha do aporte (captura 20) | 9, 10 | O texto, as quatro saídas, o aviso "provisório até a Patrícia aprovar". |
| F2 | Marquei e a reserva subiu | "Fiz" no resgate: "Reserva R$ 102,1 mil · ideal", "a reserva subiu R$ 42,1 mil", com "Desfazer". | Painel | 1 | O efeito na hora, dito em reais. |
| F3 | "Um imprevisto?" | Quatro perguntas e "R$ 6.800 da reserva: ela volta para R$ 95,3 mil. Nenhum objetivo muda de data." | Painel (captura 13) | 3 | A frase que acalma antes de eu confirmar. |
| F4 | O Painel em dez segundos | Um passo, a régua mínima/aceitável/ideal, e três números (patrimônio, reserva, dívida). | `área#painel` (captura 01) | 0 a 12 | Um passo só, a régua, pouca coisa. |
| F5 | A tarefa da Patrícia chega com o "para quê" | "Abrir o PGBL… · pedida pela Patrícia · para pagar R$ 4.494 a menos de imposto". A minha resposta voltou para a ficha ("fez em 20/12/2026", "adiada até 26/02/2027"). | Painel, Tarefas, `index.html#cliente/…` | 1, 2, 4 | O "para quê" com valor; a volta da resposta. |
| F6 | O exame, uma pergunta por vez | Botões grandes, dá para pular e voltar, e a conta criada depois levou tudo o que preenchi. | `#exame`, criar a conta (captura 03) | 0 | O ritmo, o "pular", o cadastro de dois campos. |
| F7 | Objetivo com data e a resposta "atrasa 7 meses" | Criei a viagem e li na hora "pede R$ 842; vocês põem R$ 600; atrasa 7 meses". | `#cartao/objetivos`, `#objetivos` (captura 04) | 0 | A resposta imediata em meses. |
| F8 | Preparar a reunião | O que ficou da última, os números antes e depois, a pauta dela e a minha. | `área#preparar` (captura 16) | 5, 11 | A página; falta só a pauta chegar a ela. |
| F9 | O plano foi ajustado, e eu vi | "Desde 15/03: a Patrícia escreveu · o plano foi ajustado"; Casa própria de 15 para 8 meses de atraso; Versão 2 em vigor, Versão 1 guardada. | Painel, `área#relatorio` | 5 | O "desde a última visita" e as versões com data e comentário. |
| F10 | Agendar (quando existe) | Calendário, "guardamos este horário por 4:58", link da chamada, remarcar e cancelar; a reunião apareceu na ficha dela. | `agendar.html` aberto da área (captura 17) | 5 | O fluxo inteiro. |
| F11 | Semanadas | "Até 16/nov, a fatura em até R$ 1.325"; passei R$ 275 e as semanas seguintes caíram para R$ 1.233, com o antigo riscado. A consultora vê o que lancei. | `acompanhamento.html?…&area` (captura 24) | 12 | A régua e o "novo alvo" em uma frase. |
| F12 | Lembrar o Marcos | "A Nord lembra Marcos pelo WhatsApp." | Painel › lembrar | 4 | Cobrar o outro sem eu cobrar. |
| F13 | A página do objetivo | Guardado, por mês, na data, e o histórico de cada aporte e ajuste. | `área#objetivo/praia` | 10 | O histórico mês a mês. |
| F14 | A proposta chega à consultora | Custo novo e o meu comentário apareceram em "Espera por mim" e em Propostas, lado a lado com o plano de hoje. | `index.html#espera`, `tela-consultor.html#propostas` | 10 | A ida; falta a volta (Q9). |
| F15 | Criar a minha tarefa com lembrete | Título, para quê, data, de quem é, repetição, hora. | `área#tarefas` › Nova tarefa | 4 | Simples como está. |
| F16 | Sem rolagem lateral na área | Nas telas em que medi (Painel, Atendimento, Preparar a reunião, Semanadas, agendar), nada passou de 390 px de largura. | a área e `acompanhamento.html`, 390 px | 0 a 12 | — |
| F17 | O relatório-livro na reunião, no computador | O propósito com os nossos objetivos, "1 de 8 em dia hoje, 7 de 8 depois", cada objetivo com "de onde vem o dinheiro". | `evolucao-patrimonial.html?…&versao=1&area`, 1366 px | 0 | A narrativa. |

---

## O que não consegui testar, e por quê

| O quê | Por quê |
|---|---|
| O lembrete no WhatsApp e a resposta com um toque | Não existe no protótipo; só vi o aviso "A Nord lembra…" e a etiqueta "pelo WhatsApp" nos dados do exemplo. Por isso "o mês em que não abri e voltei pelo lembrete" foi vivido só como a volta. |
| As reuniões em si (entrega, 6 meses, 12 meses) e a renovação | Só há o antes (preparar, agendar) e o depois (resumo e versão do exemplo). Não existe tela de renovação: a Jornada diz "a definir". "Registrar o resumo" na ficha está "em breve". |
| Login, senha, e-mail, celular e consentimento do WhatsApp | A conta se cria com o primeiro nome e fica só no navegador. |
| O cônjuge com acesso próprio | Não encontrei a função (cartão S10). |
| Meses de novembro/2026 a junho/2027 "em branco" | O exemplo traz os aportes, o extrato e o patrimônio desses meses já respondidos; não pude viver, neles, um aporte não marcado. Vivi isso em julho e agosto de 2027. |
| Um objetivo chegando na data com o dinheiro completo | Os objetivos do exemplo vencem depois dos 12 meses e não dá para criar outro na conta com plano. Avancei a data até jun/2028 para a viagem, mas já com aportes em atraso. |
| Datas simuladas no relatório, nas Semanadas e na agenda | `evolucao-patrimonial.html`, `acompanhamento.html`, `agendar.html` e o portal usam o relógio de verdade (11/11/2026), não o `&hoje=`. A proposta, a fatura e a reunião saíram com data de novembro de 2026, e a versão que publiquei como consultora entrou como "Versão 3 · 11/11/2026", abaixo da Versão 2 de 22/03/2027. Os cartões Q9 e Q11 devem ser lidos com essa ressalva. |
| Orçamento mensal no Acompanhamento; vídeo "Como usar"; calculadoras de seguro e de IR/PGBL; cinco relatórios de research; NPS | Estão marcados "em breve". |
| Leitor de tela, teclado e contraste | Fora do escopo desta rodada; não medi. |
| Campos de data pelo teclado do celular | No Chrome sem janela, preenchi os campos de data e de mês por script (valor direto), não pelo seletor nativo. |
| O relatório inteiro, página a página, no celular | Abri 12 das 36 páginas (5 delas em 390 px). |

Estado deixado: nada foi alterado no repositório além destes dois arquivos e da pasta de capturas. As marcações, a
conta criada, a proposta e a versão de teste ficaram só no perfil temporário do Chrome usado no teste (fora do
repositório e do navegador do Nélio).
