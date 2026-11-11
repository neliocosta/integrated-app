# Exame de saúde financeira: a fórmula atual da nota

Lido em 11/11/2026 do arquivo `newScore.tsx` que o Nélio mandou (o código de produção; fica fora do repositório). As
perguntas estão em `COLETA.md`, seção 0. Este arquivo descreve a conta como ela é hoje e o que encontrei nela, para
servir de base à revisão do exame (`IDEIAS.md`, "Exame de saúde financeira revisto").

O arquivo traz os cinco pilares. A conta da nota geral não está nele; como os máximos somam 100, **suponho** que a nota
geral seja a soma dos pontos dos cinco pilares. A confirmar.

## 1. Os cinco pilares

| Pilar | Máximo | Componentes |
|---|---|---|
| Poupança | 24 | taxa de poupança (12) + frequência (12) |
| Proteção | 22 | reserva (10) + seguros (12) |
| Atitude | 20 | validação profissional (3) + acompanha despesas (5) + reserva (3) + objetivo (4) + aposentadoria (5) |
| Patrimônio | 18 | patrimônio contra o esperado para a fase da vida (18) |
| Consciência | 16 | noção da reserva (5) + objetivo (5) + aposentadoria (4) + coerência do orçamento (2) |

A nota de cada pilar mostrada ao cliente é pontos ÷ máximo × 100.

**Reserva ideal** (usada em três pilares): custo de vida × meses, em que meses = 3, + 3 se tem dependentes, + 4 se
liberal, autônomo ou empresário, + 2 se CLT. Servidor, aposentado e sem renda ficam com 3 (ou 6 com dependentes).

### Poupança (24)

- **Taxa** = poupança declarada ÷ renda. Até 10% vale de 0 a 7 pontos; de 10% a 20%, de 7 a 10; de 20% a 40%, de 10 a
  12; acima de 40%, 12.
- **Frequência** nos últimos 12 meses: nenhuma 0, 1 a 3 vezes 2, 4 a 6 vezes 5, 7 a 9 vezes 9, 10 ou mais 12. Só
  pontua se a poupança declarada for maior que zero.

### Proteção (22)

- **Reserva** = reserva atual ÷ reserva ideal (até 1) × 10.
- **Seguros** = 12 × (70% proteção pessoal + 30% proteção dos bens).
  - Pessoal: média de três itens. Plano de saúde (tem ou não). Seguro de vida (conta como coberto se não tem
    dependentes). Acidentes pessoais (conta como coberto se é sem renda, aposentado, servidor ou CLT abaixo de
    R$ 3.300).
  - Bens: categorias de bens seguradas ÷ categorias de bens que possui. Sem bens, vale 1.

### Atitude (20)

- Já teve validação de um profissional: 3.
- Acompanha as despesas: não faz ideia 0, tem ideia 1, parcialmente 3, em detalhes 5.
- Reserva: 3 se a reserva atual já chega à ideal **ou** se guarda todo mês para aumentá-la.
- Objetivo: se já avaliou quanto precisa, 4 × (quanto investe de fato ÷ quanto imagina que precisa), até 4.
- Aposentadoria: 5 se investe ou contribui para previdência privada com esse fim; senão 5 × (número de estratégias
  marcadas ÷ 3).

### Patrimônio (18)

- **Fase da vida**, pela idade dentro do período de trabalho (do começo à idade-alvo): Preparação (antes de começar),
  Início de carreira (os primeiros 2/9), Consolidação (os 4/9 seguintes), Plenitude (os 3/9 finais), Liberdade
  financeira (depois da idade-alvo).
- **Base mensal** = o maior entre a renda e o custo de vida.
- **Faixa esperada**, em múltiplos da base: Início 0 a 9; Consolidação 9 a 70; Plenitude 70 a 250; Liberdade 250.
  O esperado ("ideal") anda do mínimo ao máximo conforme a pessoa avança na fase.
- **Patrimônio** = ativos financeiros + bens (valor cheio) − dívidas.
- **Pontos**: no mínimo da fase ou abaixo, 0; do mínimo ao esperado, de 0 a 15; do esperado ao máximo, de 15 a 18;
  acima, 18.

### Consciência (16)

- Noção da reserva: (reserva que a pessoa julga adequada ÷ reserva ideal, até 1) × 5.
- Objetivo: tem objetivo, avaliou quanto precisa, tem plano concreto: um terço de 5 para cada.
- Aposentadoria: se já pensou na renda futura, 4 se a resposta inclui "fruto dos meus investimentos"; senão
  4 × (número de fontes marcadas ÷ 3).
- Coerência do orçamento: 2 × (1 − distância entre a poupança declarada e renda − custo de vida, em proporção da
  sobra).

## 2. Quanto pesa cada tema na nota geral

Somando os componentes por assunto, e não por pilar:

| Tema | Pontos em 100 | De onde vêm |
|---|---|---|
| Poupança | 24 | pilar Poupança |
| Reserva de emergência | 18 | Proteção 10, Consciência 5, Atitude 3 |
| Patrimônio para a fase | 18 | pilar Patrimônio |
| Seguros | 12 | Proteção |
| Objetivos | 9 | Consciência 5, Atitude 4 |
| Aposentadoria | 9 | Consciência 4, Atitude 5 |
| Orçamento | 7 | Atitude 5, Consciência 2 |
| Validação profissional | 3 | Atitude |
| Dívidas | 0 | só entram abatendo o patrimônio |
| Investimentos, impostos, sucessão | 0 | o exame não pergunta |

Das 33 perguntas, a autoavaliação de 1 a 5, o estado civil e o gênero não entram na conta.

## 3. O que encontrei na conta

### Degraus que mudam a nota de uma vez

1. **Patrimônio zera na troca de fase.** Abaixo do mínimo da fase a nota é zero, e o mínimo salta de 0 para 9 e de 9
   para 70 vezes a base. Quem termina o Início de carreira com 8 vezes a renda tem 13 dos 18 pontos; no dia em que
   entra na Consolidação, cai para 0. Quem chega aos 49 anos com 60 vezes a renda (R$ 600 mil para quem ganha R$ 10
   mil) tem 12,5 pontos; ao entrar na Plenitude, 0.
2. **Liberdade financeira é tudo ou nada.** Mínimo, esperado e máximo são todos 250 vezes a base: até 250 vezes a nota
   é 0; acima, 18. Vale também para quem passou da idade-alvo que declarou e continua trabalhando.
3. **No começo de cada fase, um real acima do mínimo vale 15 pontos**, porque o esperado coincide com o mínimo.

### Coisas que a nota premia ou ignora sem querer

4. **A frequência vale tanto quanto o valor.** Quem guarda R$ 50 por mês, dez vezes no ano, com renda de R$ 10 mil,
   tira 51% em Poupança.
5. **Gastar mais do que ganha não tira ponto.** O código calcula um fator para isso (`cashflowBurnFactor`) e não o usa.
6. **Dívida não pesa por si.** Só reduz o patrimônio. Uma dívida cara de cartão e um financiamento de imóvel têm o
   mesmo efeito, e quem já está abaixo do mínimo da fase não perde nada por dever.
7. **A base do patrimônio é o maior entre renda e custo de vida.** Quem ganha muito e vive com pouco é cobrado pela
   renda, embora a liberdade financeira dependa do custo de vida.
8. **Os bens entram pelo valor cheio** no patrimônio que mede o preparo para a aposentadoria: a casa onde a pessoa
   mora conta como se gerasse renda.
9. **Noção da reserva só pune quem estima de menos.** Quem responde um valor absurdo de alto ganha os 5 pontos.
10. **Sem objetivo declarado, perde 9 pontos** (5 em Consciência, 4 em Atitude), mesmo que isso seja coerente com o
    momento da pessoa.
11. **Seguros dão pontos por padrão.** Servidor sem dependentes e sem bens só precisa de plano de saúde para tirar os
    12. Nos bens, cada categoria vale o mesmo: o carro pesa tanto quanto a casa.
12. **Aposentadoria conta fontes, não suficiência.** Marcar INSS, previdência privada e investimentos dá o máximo;
    nada pergunta se o valor basta.

### Prováveis defeitos de código

13. **Acidentes pessoais compara o custo de vida, não a renda, com R$ 3.300.** A constante e o comentário falam em
    renda; a renda é recebida pela função e não é usada.
14. **A reserva em Atitude depende da ordem das chamadas.** Usa uma variável global (`SHARED_idealReserve`) que só é
    preenchida por Consciência ou Proteção. Se Atitude rodar antes, a reserva ideal é 0 e todo mundo ganha os 3 pontos.
15. **Aposentadoria em Atitude depende da ordem das respostas.** O laço fica com o resultado do último item marcado;
    funciona porque "investimentos" é a última opção da lista.
16. **Custo de vida zero** leva a divisão por zero na reserva ideal (nota inválida ou reserva cheia).
17. **R$ 3.300 está fixo no código** e não acompanha a inflação.

## 4. Diferenças para o que a ferramenta nova usa hoje

- A `notaDoExame()` de `area-cliente.html` é uma conta provisória minha: cinco pilares com peso igual e componentes
  diferentes. Não reproduz a nota de produção.
- A régua da fase de vida na área (e, pelo comentário, no motor) usa outros múltiplos: 0,5 a 18, 18 a 60, 60 a 200 e
  200, sobre o custo de vida. Produção usa 0 a 9, 9 a 70, 70 a 250 e 250, sobre o maior entre renda e custo. Precisa
  de uma decisão sobre qual vale.
- A reserva ideal de quem está sem renda é 7 meses na área e 3 em produção.
