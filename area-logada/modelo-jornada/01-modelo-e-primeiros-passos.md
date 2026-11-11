# A jornada: modelo dos passos e os 15 primeiros (04/11/2026)

Documento de trabalho. Nada aqui está em código. Os nomes da metáfora são provisórios.

## 1. O que ficou decidido na conversa

- Para o cliente existem as áreas do plano e os passos a dar. Visitante, cadastrado, clínica e completo são
  divisões internas: só dizem quais dados a Nord tem. O catálogo de passos é um só para todo mundo; o que muda é
  quanto dele já está feito.
- Vocabulário na tela: **tarefa, passo, conquista, trecho, jornada**. Nunca missão, quest, XP, medalha, nível,
  sequência diária, selo, desbloquear.
- **Conquista = passo feito, com data.** Não há uma segunda hierarquia. Duas conquistas próprias, sem passo:
  trecho concluído e trilha de saber do trecho concluída. Se o estado regride, a conquista guarda a data original e o
  passo reabre ("conquistada em mar/2026 · em recomposição").
- Conquistas têm um símbolo discreto, a desenhar depois (prompt para o Midjourney). Um desenho só.
- O exame de saúde financeira mede a jornada inteira, não um trecho.
- Dois eixos estáveis na fotografia do cliente, com vocabulários que não se misturam:
  - **Fase da vida** (tempo, vem da idade): preparação, início de carreira, consolidação, plenitude, liberdade
    financeira. Regra já no motor: vida de trabalho em nonos, 2/9, 4/9, 3/9.
  - **Trecho da jornada** (solidez, vem dos passos feitos): sete trechos, o último é o destino. Regride só em
    revés grande.
- A situação do orçamento (deficitário, zero a zero, superavitário) não é eixo: é um atributo com horizonte de 12
  meses, usado nos critérios dos passos do primeiro trecho.
- O destino se chama **liberdade financeira**, sem apelido.

## 2. Os sete trechos (a escalada, na ordem do seu desenho)

| # | Trecho | Lógica | Pergunta do cliente | Nome na metáfora de expedição, se for o caso |
|---|---|---|---|---|
| 1 | Sobreviver | Guardar mais do que ganha | Consigo fechar o mês com sobra? | Preparo |
| 2 | Definir | Definir os objetivos | Para onde vou? | Destino |
| 3 | Construir | Montar a estrutura de reserva e orçamento | Tenho base para um imprevisto? | Base |
| 4 | Proteger | Proteger a renda e os bens | Um revés derruba o que construí? | Equipagem |
| 5 | Focar | Investir todo mês na direção dos objetivos | Estou andando no ritmo combinado? | Trajeto |
| 6 | Otimizar | Melhorar produtos e estratégias | O dinheiro trabalha o máximo que pode? | Ritmo |
| 7 | Desfrutar | Atingir a liberdade financeira | Vivo do que construí? | Liberdade financeira |

Os nomes dos trechos (verbos atuais ou substantivos de expedição) ficam em aberto; o que está fechado é a ordem.
Atenção: o código hoje tem Focar antes de Proteger; a ordem acima inverte isso. O trecho atual é o primeiro que
tem passo aberto. Trechos anteriores podem reabrir.

## 3. O molde de um passo

| Campo | O que é |
|---|---|
| Nome | Infinitivo, a experiência a viver ("Ter a reserva mínima") |
| Trecho · Área | Onde fica na jornada e em qual das onze áreas do plano |
| Critério | Condição sobre os dados que diz feito / aberto; sem o dado, **desconhecido** |
| Aplicabilidade | Para quem o passo existe; fora disso, não aparece nunca |
| Pré-requisitos | Passos que precisam estar feitos antes de este abrir |
| Figura | Como o cartão mostra o estado: **valor-alvo** (escada ou barra), **contagem** (n de m), **sim/não**, **data** |
| Ação | A tarefa que move o passo e o tipo do botão: *fazer fora e confirmar*, *enviar um dado*, *decidir*, *falar com a Nord* |
| Dados | Quais campos determinam o estado (e, por tabela, o que o exame e o cadastro precisam perguntar) |
| Perda | Se aberto, o cliente está perdendo dinheiro ou correndo risco agora? (manda na prioridade) |

### Como os três passos da home são escolhidos

Entre os passos **abertos e aplicáveis** (desconhecidos contam como abertos):

1. Primeiro os de **perda**: déficit, dívida cara, família sem proteção, reserva abaixo da mínima.
2. Depois pela ordem do trecho e, dentro dele, pela ordem da tabela.
3. No plano completo a planejadora pode **fixar ou reordenar**; a regra acima é o que vale quando ela não marcou.
4. No máximo **um passo de "enviar um dado"** entre os três, para a home não virar formulário.
5. Quando faltam dados que só o exame dá, os passos desconhecidos desse grupo se **recolhem em um só**: "Conhecer a sua
   saúde financeira". É assim que um visitante vê "fazer o exame" sem regra especial para visitante.

## 4. Os 15 primeiros passos

Critérios com número são os da régua atual do motor ou um chute razoável, marcados com (?) para você acertar.

### Trecho 1 · Sobreviver

| # | Passo | Área | Critério | Aplicável a | Pré-req. | Figura | Ação · botão | Dados | Perda |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Conhecer a sua saúde financeira | — | Exame respondido há ≤ 12 meses | Todos | — | sim/não | Responder o exame · *enviar um dado* | data do último exame | não |
| 2 | Saber para onde vai o dinheiro | Orçamento | Renda, gastos fixos e ajustáveis registrados há ≤ 12 meses | Todos | 1 | sim/não | Enviar o orçamento ou conectar o Open Banking · *enviar um dado* | orçamento, data | não |
| 3 | Fechar o mês com sobra | Orçamento | Sobra média dos últimos 12 meses ≥ 5% da renda (?) | Todos | 2 | valor-alvo (sobra em % da renda, barra) | Decidir onde cortar com a Nord · *decidir* | orçamento 12 meses | **sim** se negativa |
| 4 | Sair das dívidas caras | Dívidas | Nenhuma dívida com juros acima de 3% ao mês (?) (cartão, cheque especial, crédito pessoal) | Quem tem dívida assim | 2 | valor-alvo (saldo, barra que esvazia) | Quitar ou trocar a dívida · *fazer fora e confirmar* | dívidas com taxa | **sim** |

### Trecho 2 · Definir

| # | Passo | Área | Critério | Aplicável a | Pré-req. | Figura | Ação · botão | Dados | Perda |
|---|---|---|---|---|---|---|---|---|---|
| 5 | Dar nome, data e valor aos objetivos | Objetivos | ≥ 1 objetivo com data e valor | Todos | — | contagem (objetivos completos de n) | Registrar um objetivo · *enviar um dado* | objetivos | não |
| 6 | Escolher a data da liberdade financeira | Liberdade | Idade-alvo e renda desejada registradas | Todos ainda na vida de trabalho | — | sim/não | Decidir a data · *decidir* | idade-alvo, renda desejada | não |
| 7 | Ter um plano para chegar lá | Plano | Versão vigente do plano com aporte combinado | Todos | 5, 6 | sim/não | Conversar com a Nord sobre o planejamento · *falar com a Nord* | versão vigente | não |

### Trecho 3 · Construir

| # | Passo | Área | Critério | Aplicável a | Pré-req. | Figura | Ação · botão | Dados | Perda |
|---|---|---|---|---|---|---|---|---|---|
| 8 | Ter a reserva mínima | Reserva | Reserva ≥ 3 meses de custo fixo (?) | Todos | 3 | valor-alvo (escada: mínima · aceitável · ideal) | Guardar para a reserva neste mês · *fazer fora e confirmar* | reserva, custo fixo | **sim** |
| 10 | Completar a reserva ideal | Reserva | Reserva ≥ ideal do plano (6 ou 12 meses conforme a renda) (?) | Todos | 8 | valor-alvo (a mesma escada) | Guardar ou resgatar para a reserva · *fazer fora e confirmar* | reserva, ideal | não |

(O orçamento como estrutura, passo 2, poderia estar aqui em vez de em Sobreviver; deixei em Sobreviver porque sem
ele não dá para saber se sobra.)

### Trecho 4 · Proteger

| # | Passo | Área | Critério | Aplicável a | Pré-req. | Figura | Ação · botão | Dados | Perda |
|---|---|---|---|---|---|---|---|---|---|
| 9 | Proteger a renda da família | Proteção | Seguro de vida com capital ≥ 5 anos do custo da família (?) | Quem tem dependentes ou dívida que recai sobre a família | — | valor-alvo (capital contratado de necessário) | Cotar e contratar · *fazer fora e confirmar* | dependentes, seguros, custo da família | **sim** |

(Faltam aqui, para a lista completa: invalidez, saúde, patrimônio segurado, dívida que recai sobre a família.)

### Trecho 5 · Focar

| # | Passo | Área | Critério | Aplicável a | Pré-req. | Figura | Ação · botão | Dados | Perda |
|---|---|---|---|---|---|---|---|---|---|
| 11 | Aportar todo mês | Aportes | Aporte ≥ combinado em cada um dos últimos 3 meses | Quem tem plano com aporte | 7, 8 | contagem (3 de 3 meses) | Confirmar o aporte do mês · *fazer fora e confirmar* | aportes, combinado | não |
| 12 | Deixar o aporte automático | Aportes | Transferência ou débito programado registrado | Quem tem plano com aporte | 11 | sim/não | Programar no banco · *fazer fora e confirmar* | aporte automático (sim/não) | não |
| 13 | Investir conforme o perfil | Investimentos | Carteira dentro da alocação-alvo com desvio ≤ 10 pontos (?) | Quem tem carteira | 10 | valor-alvo (aderência em %) | Ajustar a carteira · *fazer fora e confirmar* ou *falar com a Nord* | posições, alocação-alvo | não |

### Trecho 6 · Otimizar

| # | Passo | Área | Critério | Aplicável a | Pré-req. | Figura | Ação · botão | Dados | Perda |
|---|---|---|---|---|---|---|---|---|---|
| 14 | Pagar menos imposto na previdência | Previdência | PGBL até 12% da renda tributável e regime adequado ao prazo | Quem declara no modelo completo e tem IR a compensar | 13 | sim/não | Ajustar o plano de previdência · *fazer fora e confirmar* | IR, previdência | não |
| 15 | Deixar a sucessão encaminhada | Sucessão | Beneficiários indicados em todos os produtos que permitem; testamento quando o patrimônio pede | Quem tem dependentes ou patrimônio acima de X (?) | 9 | contagem (produtos com beneficiário de n) | Indicar os beneficiários · *fazer fora e confirmar* | produtos, beneficiários, testamento | não |

### Trecho 7 · Desfrutar

Nenhum passo modelado ainda: é o destino. Os passos de quem chegou (retirada, renda dos ativos, sucessão em
execução) entram na lista completa.

## 5. Teste: os três passos de cada exemplo

Aplicando as regras aos quatro exemplos que a área já tem:

| Exemplo | Dados que existem | Abertos e aplicáveis | Os três da home |
|---|---|---|---|
| Visitante | nenhum | tudo desconhecido; os que dependem do exame recolhem em 1 | 1 Conhecer a sua saúde financeira · 5 Dar nome aos objetivos · 7 Ter um plano (conversar com a Nord) |
| Cadastrado (exame feito, sem plano) | exame, orçamento resumido | 3?, 4 se tiver dívida cara, 5, 6, 7, 8 | perda primeiro: 4 ou 8; depois 5 e 7 |
| Clínica (Ana e Marcos, sem plano completo) | exame, clínica, reserva, dívidas | 7, 9, 10, 15 | 9 Proteger a renda da família (perda) · 10 Completar a reserva ideal · 7 Ter um plano |
| Completo (Ana e Marcos) | plano, posições, aportes | 9, 10, 15, 11 em curso | 9 Proteger a renda da família · 10 Completar a reserva ideal · 15 Deixar a sucessão encaminhada |

O exemplo completo sai igual ao que a planejadora combinou na reunião de 26/09 (seguro, resgate para a reserva,
beneficiários), sem nenhuma regra feita para ele. Isso é o sinal de que o molde funciona; o que falta acertar são
os números dos critérios e a lista inteira.

## 6. O que este molde ainda não cobre (para a lista completa)

- Passos do trecho Desfrutar (vivendo de renda): retirada, renda dos ativos, sucessão em execução.
- Renda irregular: o critério de "fechar o mês com sobra" precisa de horizonte anual.
- Casal: passos do casal (um só) contra passos de cada um (seguro de cada um). Proposta: o passo é do casal; a
  tarefa tem responsável.
- Passos que a Nord faz pelo cliente (montar o plano, revisar a carteira): o cliente vê, mas o botão é "falar com a
  Nord".
