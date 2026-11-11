# Feedback aplicado · o quadro do cliente simulado, cartão a cartão

11/11/2026, segunda rodada de UX. Parte do [QUADRO-FEEDBACK.md](QUADRO-FEEDBACK.md) (55 cartões de Senti falta, Travei e
Quebrado). Cada cartão foi reproduzido na tela ou no código antes de qualquer mudança. As telas foram conferidas em 390 px e
em 1366 px (Chrome sem janela, pelo DevTools), com o console sem erros, e `node verificar.js` e `node verificar-agenda.js`
passam ao fim de cada bloco. O `verificar.js` ganhou a seção "Feedback do cliente simulado", com uma verificação por defeito corrigido.

**Placar:** 24 corrigidos · 11 corrigidos em parte · 18 para o Nélio decidir (11 deles viraram ideia em `IDEIAS.md`) · 1 não
reproduzido · 1 que não é defeito.

Os commits: **B1** `e32013b` · **B2** `5393245` · **B3** `34e72c3` · **B4** `51f0769` · **B5** `0c223dc`.

## Duas descobertas que mudam a leitura do quadro

1. **A ficha do exemplo vivia em 20/10/2026.** A base de clientes (`index.html`) fixava o "hoje" dos exemplos nessa data e
   escondia tudo o que fosse posterior. Por isso "O que o cliente fez" parava em 19/10/2026 em qualquer mês do teste (Q3).
   Para um cliente de verdade o relógio já era o do dia. A base agora aceita `?hoje=AAAA-MM-DD`, como a área, e o repassa às
   telas que abre.
2. **O relatório, as Semanadas, a agenda e o portal seguem no relógio real.** Não foram mexidos. O que o quadro aponta de
   "data do futuro" e "contado a partir de hoje" nessas telas (parte de Q9, Q11 e Q15) é efeito do teste com `&hoje=`, não um
   defeito para o cliente real.

## Os números que não batem: a causa de cada um

Regra do produto: cada número tem uma origem só (`VARIAVEIS.md`). Onde duas telas liam fontes diferentes, a exibição foi
corrigida. Onde a causa está no motor ou numa definição de negócio, nada foi mexido: ficam os dois cálculos, para o Nélio decidir.

| Divergência | Causa exata | O que foi feito |
|---|---|---|
| **17% × 20% para o futuro** (Q6) | Duas bases, as duas do motor (`ENGINE.gestaoFinanceira`). O Plano usa a média de 12 meses: sobra R$ 3.233 ÷ renda R$ 16.000 = 20,2% (com o bônus anual de R$ 12 mil e o IPTU diluídos). A página "Renda e custo" do relatório, na visão do mês, usa o **mês de maior gasto** dos próximos 12 (`g.pico`): R$ 2.500 ÷ R$ 15.000 = 16,7%, e daí "faltam R$ 500". | Nada. **Decisão do Nélio:** qual das duas é "quanto vocês guardam". |
| **R$ 3.233 × R$ 3.330 por mês** (Q6) | A política de investimentos (motor) dá à Viagem a Fortaleza R$ 354, o que basta para a data (objetivo travado na data), e manda o resto para a liberdade: 354 + 1.500 + 300 + 150 + 100 + 830 = R$ 3.233, a sobra. A área soma o aporte **planejado** da viagem (R$ 450) com os mesmos R$ 830 da liberdade: 2.500 + 830 = R$ 3.330, R$ 97 acima da sobra. | Nada. **Decisão do Nélio:** o aporte da viagem é o planejado (450) ou o que o motor reparte (354)? Se for o planejado, a liberdade da área deveria ser 733. |
| **Orçado "para o futuro" R$ 2.500 × aporte de R$ 2.800** (Q6) e **"fiz R$ 2.500" × "para o futuro R$ 1.300"** (Q7) | São duas medidas com o mesmo nome. A linha do Realizado é a **sobra do extrato** (entradas − fixas − ajustáveis); o aporte é o que a família **marcou** como feito. Em dezembro o extrato sobrou R$ 1.300 e o aporte marcado foi R$ 2.500. | Exibição corrigida (B2): a linha passou a "Sobra do mês", os totais a "Sobra planejada" e "Sobra realizada", e uma frase explica a diferença. |
| **"Para todos chegarem na data: R$ 4.450" × "juntos pedem R$ 5.785"** (Q8) | Duas contas. A primeira é a simulação em sequência (regra do Nélio: o dinheiro de um objetivo que chega passa para o seguinte). A segunda soma o que cada objetivo pediria sozinho, em paralelo. | Exibição corrigida (B2): a segunda passou a "Somados um a um, pediriam…", com a frase que diz por que a conta do alto pede menos. **Decisão do Nélio:** vale manter as duas. |
| **"Na data" com "aporte em 11% do necessário"** (Q8) | O selo do cartão vinha de `necessario()` (objetivo sozinho); a linha do alto e o Painel, de `previsoesDeHoje()` (a simulação). Na liberdade, o "necessário" da área (R$ 7.720) ignora o que o motor conta: a renda que cresce e os aportes que os outros objetivos liberam. | Exibição corrigida (B2): cartão, página do objetivo e Painel leem `previsoesDeHoje()`. Na liberdade do plano que fecha, o texto diz que a data é a do plano. |
| **R$ 5.690 (relatório) × R$ 5.626 (Painel)** (Q8) | O relatório é a foto na data do plano (`RS.objetivos.necessaria`); a área recalcula com o guardado e os meses de hoje, e por isso o número anda todo mês. | Não é defeito: a foto é datada. A frase do Painel foi reescrita (T12). |
| **Reserva: R$ 102,1 mil × "Emergência 59%" × R$ 60 mil** (Q5) | A área calcula a reserva de hoje (`reservaAtual()`: a do plano, mais resgates e aportes marcados, menos imprevistos). A nota de proteção e a teia vêm do motor, sobre o plano publicado (R$ 60 mil = 59%). O relatório e o portal são a foto do plano: a versão 2 do exemplo ainda traz R$ 60 mil porque o dado do plano não foi atualizado. "R$ 102.200" na política é o alvo da caixinha, arredondado. | Na área (B2): a página de riscos ganhou "Desde o plano de…", com a reserva do plano e a de hoje, e a origem da reserva diz que soma o que foi marcado. **Decisão do Nélio:** o plano novo deve nascer com a reserva de hoje (o portal puxar da execução)? |
| **Seguro contratado e 38% protegido** (Q4) | A proteção sai da cobertura gravada no plano (`riscos.seguro.geradores[].coberturaVida`), que só o consultor muda. A tarefa marcada não altera o plano. | Na área (B2): a pendência do Painel fecha ("feito em…, a proteção sobe quando a Patrícia registrar a apólice") e a página de riscos diz o mesmo. O percentual não muda. **Decisão do Nélio:** a marcação do cliente pode subir a proteção de forma provisória? |
| **Visitante: "21% para o futuro"** (Q17) | A área calcula renda − custo; o exame também pergunta quanto a pessoa guarda (R$ 1.500, em 4 a 6 meses do ano) e esse número não entra no percentual. | Nada. **Decisão do Nélio:** mesma pergunta do 17% × 20%. |

## 1. Senti falta

| Nº | Decisão | O que foi feito, ou por que não |
|---|---|---|
| S1 | corrigido · B1 | Era consequência do Q2: a resposta da Patrícia agora entra como dela e aparece na conversa do cliente. O aviso "a Patrícia escreveu" no Painel já existia. |
| S2 | corrigido · B4 | Reproduzido nos dois casos. Passos cumpridos: o cartão mostra a tarefa aberta de maior efeito (a da ameaça antes das outras). Reserva abaixo depois de um imprevisto: "Repor a reserva", com a proposta "Guardar R$ 1.150 por mês, 6 meses"; um toque cria a tarefa mensal com lembrete, e cada vez feita soma na reserva. |
| S3 | em parte · B4 | A folha da tarefa ganhou "Como fazer": o primeiro gesto, para onde vai o dinheiro da reserva e a pergunta já começada à Patrícia. A ficha ganhou o campo "Como fazer", que o cliente lê na tarefa (conferido: escrito na ficha, lido na folha). O produto exato de onde resgatar só aparece se o consultor escrever. |
| S4 | em parte · B4 | A tarefa do aporte diz o perfil de cada caixinha, pelo plano, e leva a Investimentos. A carteira recomendada vazia é dado do exemplo (o plano não tem carteira). |
| S5 | para o Nélio · ideia | Corretor e cotação pela Nord: função nova. |
| S6 | para o Nélio · ideia | Destino do 13º e do bônus: função nova. |
| S7 | para o Nélio · ideia | Imposto já garantido: pede um dado que o plano não tem (o PGBL de fato aportado no ano). |
| S8 | para o Nélio · ideia | A lista do IR de abril: função nova. |
| S9 | para o Nélio · ideia | Anexar arquivo e dizer o porquê: função nova. A pergunta já começada da tarefa (S3) cobre "enviar por onde?". |
| S10 | para o Nélio · ideia | Acesso próprio do cônjuge: função grande. |
| S11 | em parte · B4 | A página do objetivo ganhou "Simular e propor", que abre a calculadora do relatório naquele objetivo. Criar objetivo novo com plano publicado segue só pela conversa: decisão do Nélio. |
| S12 | para o Nélio · ideia | O balanço do ano e a renovação: função grande. |
| S13 | para o Nélio · ideia | O dia em que o objetivo chega: função nova. |
| S14 | corrigido · B2 | "Corrigir a resposta" na folha de qualquer tarefa respondida: volta para em aberto, desfaz os ajustes dela e reabre para responder. |
| S15 | para o Nélio | Visitante marcar a reunião de avaliação: depende de qual agenda atende quem ainda não é cliente. |
| S16 | não é defeito | Preço dos níveis: o `PRODUCT.md` proíbe inventar preço; é decisão comercial. |
| S17 | para o Nélio · ideia | "Enquanto você esteve fora": função nova (hoje há uma linha "Desde…"). |
| S18 | corrigido · B5 | "Patrimônio: de R$ 1,8 milhão a R$ 1,8 milhão (+R$ 34.875)". |

## 2. Travei

| Nº | Decisão | O que foi feito, ou por que não |
|---|---|---|
| T1 | corrigido · B1 | Reproduzido: o Confirmar ficava a 1.251 px numa tela de 844. Agora fica preso ao pé da folha (782 px) e a opção escolhida rola para o meio. |
| T2 | corrigido · B4 | Reproduzido no exemplo cadastrado. A síntese dizia "sem data" com a tarefa sugerida logo abaixo; agora diz "aceitando a tarefa de R$ 1.500 por mês, fecha em dez/2026". Sem tarefa sugerida, vale a proposta do S2. |
| T3 | em parte · B5 | O resultado do exame diz o pilar mais fraco e leva ao passo. O aviso "nota provisória" ficou: a fórmula oficial é pendência do produto. |
| T4 | corrigido · B4 | O botão do cartão do passo abre a tarefa do passo, antes da ação do dia. O rótulo curto passou de 26 para 34 caracteres. |
| T5 | corrigido · B4 | "Simular e propor" na página de cada objetivo; o relatório aceita `&simular=obj:<id>` e abre a calculadora. |
| T6 | em parte · B4 | A resposta com valor diz "ficou R$ 137 abaixo do teto". Uma tarefa só por semana, perguntada no fim, fica para o Nélio (junto com o T7). |
| T7 | para o Nélio · ideia | Dois tetos (o da tarefa, R$ 1.237, e o da fatura nas Semanadas, R$ 1.325) são dois combinados de origens diferentes. Unificar é decisão de produto. |
| T8 | para o Nélio | Semanadas vazia até publicar a versão: o combinado mora na versão publicada. Esconder a entrada ou explicar é pequeno, mas não coube nesta rodada. |
| T9 | para o Nélio | "Aprender começa por uma prova": toca a direção do Saber (ninguém começa do zero, prova curta). A ordem conceito × prova no "Antes de fazer" é decisão dele. |
| T10 | para o Nélio | Lançar o mês só com "entrou" e "sobrou" muda o dado do Realizado (fixas e ajustáveis deixam de existir no lançamento). |
| T11 | para o Nélio | Um caminho só para agendar a reunião de 6 meses: mexe na agenda e em três telas; não coube com qualidade. |
| T12 | corrigido · B2 | "Somados um a um, os 5 pediriam…; N atrasam: o combinado cobre primeiro os de data mais próxima, e os outros recebem quando esses chegam". |
| T13 | para o Nélio · ideia | Glossário de um toque: função nova, atravessa todas as telas. |
| T14 | corrigido · B5 | A pendência não oferece mais a calculadora que não existe: leva às oito ameaças. |
| T15 | corrigido · B4 | Com o botão desligado, a calculadora diz "Mude um valor para poder enviar". |
| T16 | corrigido · B4 | O link abre o Atendimento com a mensagem começada ("A reserva está em R$ 95,3 mil e faltam R$ 6.800… Como repomos?"). |
| T17 | corrigido · B5 | "Até 33 perguntas" em todo lugar; a barra do exame mostra "Pergunta 5", sem o total que mudava. |

## 3. Quebrado

| Nº | Decisão | O que foi feito, ou por que não |
|---|---|---|
| Q1 | corrigido · B1 | Reproduzido no código (`bens: n('bens') \|\| 0`) e na tela. Campo em branco agora repete o último registro. Conferido: só o financeiro lançado, dívida segue R$ 366,3 mil; só a dívida lançada, o resto fica. |
| Q2 | corrigido · B1 | Reproduzido. Com `&consultor`, o campo vira "Responder a Ana e Marcos", a mensagem sai como a planejadora e fecha as perguntas em aberto. |
| Q3 | corrigido · B3 | Duas causas: o relógio do exemplo (acima) e a ficha só lia as respostas. Agora mostra, em ordem, respostas (com a saída escolhida), imprevistos, ajustes, mensagens, pauta e meses lançados. O ajuste provisório entra em "Espera por mim" com **Aprovar**, e a área do cliente passa a dizer "aprovado pela Patrícia em…". |
| Q4 | em parte · B2 | Ver a tabela dos números. |
| Q5 | em parte · B2 | Ver a tabela dos números. |
| Q6 | para o Nélio | Ver a tabela dos números: duas causas no motor, uma de rótulo (corrigida com o Q7). |
| Q7 | corrigido · B2 | Ver a tabela dos números. |
| Q8 | corrigido · B2 | Ver a tabela dos números. |
| Q9 | não reproduzido | Pelo código, a proposta respondida no portal ("Concluir resposta") vira `respondida`, e o relatório passa a "Seu consultor respondeu". O valor no relatório só muda quando uma versão é publicada, e a versão do teste entrou com a data real. Não refiz o fluxo inteiro. A ficha passou a mostrar o estado da proposta e a data da resposta (B3). |
| Q10 | corrigido · B4 | "Não feito · compensado nos próximos aportes, as datas ficam". Conferido: com julho e agosto em "manter a data", a Viagem a Fortaleza fica "na data". O "atrasa 1 mês" que sobra vem do mês anterior sem resposta. |
| Q11 | em parte · B1, B5 | Na área, conversa e resposta com data depois de hoje não aparecem. A "Versão 2, 22/03/2027" vista em novembro no portal é o relógio real do portal. |
| Q12 | em parte · B4 | Calculadora em uma coluna e a comparação inteira (era 731 px numa janela de 350); orçamento em três linhas por despesa, sem colunas cortadas; a tabela das caixinhas rola de lado. **A página da evolução (o gráfico animado) não foi mexida:** pede um desenho próprio para o celular. |
| Q13 | corrigido · B5 | As seis semanas do mês ficam na mesma linha. |
| Q14 | corrigido · B3, B4 | O título do passo vira "Repor a reserva" depois de o resgate estar feito; a pauta da família some depois da reunião registrada, na área e na ficha. |
| Q15 | em parte · B5 | Na área, a idade sai da data de nascimento do plano. "Hoje · 35 anos" e "daqui a 5 meses" no relatório são o relógio real. A Luiza com 1 ano e intercâmbio "aos 18" em 2034 é dado do exemplo. |
| Q16 | em parte · B2 | Riscos e reserva dizem o que mudou desde o plano. "Investimentos R$ 860 mil" ao lado do financeiro real segue como foto do plano. |
| Q17 | para o Nélio | Ver a tabela dos números. |
| Q18 | corrigido · B2, B3 | A caixa laranja mostra a frase da ameaça, não "familia"; na ficha, "da família". |
| Q19 | corrigido · B3 | "Coleta: feita, o plano já está publicado" e "acompanhamento anual previsto para 26/09/2027", como a área. |
| Q20 | corrigido · B1 | Reproduzido com clique por script e o campo ainda em foco: a folha se redesenhava dentro do próprio desenho. Uma trava impede o aninhamento. |

## O que não foi conferido na tela

- O fluxo completo da proposta (enviar, responder no portal, publicar a versão), do Q9.
- As páginas do relatório no celular além de orçamento, política, riscos, renda, objetivos, patrimônio e evolução.
- Teclado, leitor de tela e o seletor de data nativo do celular.

## Decisões que só o Nélio pode tomar

1. **Quanto a família guarda:** a média de 12 meses (20%) ou o mês de maior gasto (17%)? E, para o visitante, o que ele diz que guarda ou renda menos custo?
2. **O aporte de um objetivo que já fecha na data:** o planejado (R$ 450) ou o que o motor reparte (R$ 354)?
3. **O que o cliente marca muda o plano?** Seguro contratado sobe a proteção de forma provisória? A versão nova nasce com a reserva de hoje?
4. **A conta dos objetivos:** manter as duas ("somados um a um" e "em sequência") ou só a da sequência.
5. **O próximo passo quando os do consultor acabam:** hoje a área mostra a tarefa de maior efeito; vale sugerir o passo da escalada?
6. **A reposição da reserva** (R$ por mês, em até seis meses, aceita pelo cliente sem o consultor): a regra e o prazo estão certos?
7. **Um teto só** (tarefa da semana × Semanadas) e a pergunta no fim da semana.
8. **O "Antes de fazer"** do Saber: conceito antes da prova?
9. **O gráfico da evolução no celular:** redesenhar ou dizer "abra no computador".
