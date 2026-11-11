# Prompts das ilustrações (Midjourney)

11/11/2026. A série de ilustrações da Nord Liberta 2.0: 24 imagens, num estilo só. Cada bloco diz onde a imagem entra,
por quê, o tamanho e o prompt pronto para colar. A ferramenta já tem o lugar de cada uma reservado: salve o arquivo com o
nome indicado em `ilustras/v2/` e a imagem aparece, sem mexer no código.

## O estilo, igual em todas

A referência é [referencia/vetor-plano.webp](referencia/vetor-plano.webp), gerada com:

```
contemporary flat illustration of a person relaxing on a floating platform with a plant and a coffee cup, laptop closed beside them, a kite flying above, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, space on the left for text --ar 16:9
```

O trecho fixo, que não muda de uma imagem para a outra:

```
open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful
```

E o final, também fixo:

```
--sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

Só mudam a cena (logo depois de "contemporary flat illustration of"), a frase de composição e o `--ar`.

## Para a série ficar coesa

- **`--sref`**: troque `<link da referência>` pelo endereço da imagem de referência no midjourney.com (job
  `c31e42a1-9fbc-4b43-9003-c69b33d54caf`, opção 2). É ele que mantém todas na mesma família. `--sw 200` diz o quanto seguir;
  se alguma sair diferente demais, suba para 300.
- **Mesma semente**: escolha um `--seed` e repita em todas, para a luz e o traço ficarem ainda mais parecidos.
- **Pessoas variadas**: os prompts já alternam idade e gênero. Ao escolher entre as quatro opções de cada geração, varie
  também a cor de pele e o tipo de cabelo, para a série inteira parecer o Brasil.
- **Casal quando o texto fala "vocês"**: objetivos, liberdade, gestão, jornada e passos cumpridos mostram duas pessoas (ou a
  família).
- **Nada de símbolo de dinheiro**: sem moedas, cifrões, cofrinho, gráfico de barras ou setas subindo. A cena fala da vida,
  não do dinheiro.
- **Sem texto na imagem**: nenhuma letra, número ou placa escrita. Se aparecer, gere de novo ou apague no editor.
- **Sem contorno e sem degradê**: formas chapadas e arredondadas, como na referência.
- **Exportação**: `.webp`, qualidade 85, no tamanho em pixels de cada bloco (corte a partir do upscale do Midjourney).

## Os dois formatos

| Formato | `--ar` | Exportar em | Como aparece |
|---|---|---|---|
| **Faixa** (abre a página) | 3:1 | 1620×540 px | até 1080×220 px no computador, mostrando a faixa central (uns 60% da altura); 358×119 px no celular, inteira |
| **Cena** (estado vazio, comemoração) | 4:3 | 800×600 px | 240×180 px, centrada acima do título; menor em dois lugares (148×111 e 168×126 px) |

Na faixa, o assunto fica no terço direito e no meio da altura, com céu livre à esquerda; não há corte diferente para o
celular, o mesmo arquivo serve. O DESIGN.md pedia 16:9 com um foco por imagem no código; em 3:1 o foco deixa de ser preciso.

## Resumo

| Nº | Ilustração | Lugar | `--ar` | Pixels | Prioridade |
|---|---|---|---|---|---|
| 1 | `capa-saude` | Capa: Saúde financeira | 3:1 | 1620×540 | essencial |
| 2 | `capa-gestao` | Capa: Gestão financeira | 3:1 | 1620×540 | essencial |
| 3 | `capa-dividas` | Capa: Dívidas | 3:1 | 1620×540 | boa |
| 4 | `capa-objetivos` | Capa: Objetivos | 3:1 | 1620×540 | essencial |
| 5 | `capa-reserva` | Capa: Reserva e liquidez | 3:1 | 1620×540 | essencial |
| 6 | `capa-riscos` | Capa: Gestão de riscos | 3:1 | 1620×540 | boa |
| 7 | `capa-patrimonio` | Capa: Patrimônio e ativos | 3:1 | 1620×540 | boa |
| 8 | `capa-politica` | Capa: Investimentos | 3:1 | 1620×540 | boa |
| 9 | `capa-tributario` | Capa: Impostos e sucessão | 3:1 | 1620×540 | opcional |
| 10 | `capa-liberdade` | Capa: Liberdade financeira | 3:1 | 1620×540 | essencial |
| 11 | `capa-evolucao` | Capa: Evolução patrimonial | 3:1 | 1620×540 | boa |
| 12 | `capa-relatorio` | Capa: Relatório | 3:1 | 1620×540 | boa |
| 13 | `capa-comousar` | Capa: Como usar | 3:1 | 1620×540 | essencial |
| 14 | `capa-jornada` | Capa: Jornada | 3:1 | 1620×540 | essencial |
| 15 | `boas-vindas` | Boas-vindas: criar a conta | 3:1 | 1620×540 | essencial |
| 16 | `capitulo-concluido` | Comemoração: capítulo concluído | 3:1 | 1620×540 | boa |
| 17 | `vazio-relatorio` | Vazio: o relatório ainda não chegou | 4:3 | 800×600 | essencial |
| 18 | `vazio-tarefas` | Vazio: ainda sem tarefas | 4:3 | 800×600 | boa |
| 19 | `vazio-objetivos` | Vazio: ainda sem objetivos | 4:3 | 800×600 | boa |
| 20 | `passos-cumpridos` | Comemoração: passos cumpridos | 4:3 | 800×600 | boa |
| 21 | `vazio-reuniao` | Vazio: ainda sem reunião marcada | 4:3 | 800×600 | opcional |
| 22 | `vazio-semanadas` | Vazio: semanadas ainda não combinadas | 4:3 | 800×600 | opcional |
| 23 | `consultor-base-vazia` | Consultor: nenhum cliente ainda | 4:3 | 800×600 | boa |
| 24 | `consultor-nada-esperando` | Consultor: nada esperando por você | 4:3 | 800×600 | boa |

Essenciais: 9. Boas: 12. Opcionais: 3.

## Onde não entra ilustração, e por quê

- **Painel**: a tela inicial mostra só o essencial e já tem a foto de natureza no alto (decisão de 31/10). Uma ilustração
  ali disputaria com a foto e com o passo.
- **Objetivo do cliente**: cada objetivo é pessoal e leva a foto dele, nunca uma ilustração.
- **Plano (a grade das onze áreas), Tarefas com tarefas, Realizado, Utilitários, Research**: são telas de trabalho e de
  consulta rápida; imagem ali só empurra o conteúdo para baixo.
- **Atendimento e conversas**: a pessoa veio falar com alguém; a foto de quem atende já está lá.
- **Relatório (o livro)**: tem a sua própria linguagem, com gráficos desenhados; as capas de capítulo dele não mudam aqui.
- **Consultor: ficha do cliente, pipeline, coleta, montagem e agenda**: telas densas de trabalho. Só os dois estados vazios
  da base levam imagem.
- **Estados vazios pequenos dentro de cartões** ("Nenhuma tarefa cadastrada", "Nenhuma coleta aberta"): uma linha de texto
  basta.

## As ilustrações

### 1. Capa: Saúde financeira

- **Onde entra:** Plano › Saúde financeira, no alto da página (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#cartao/saude`)
- **Por que ali:** É onde a pessoa vê a nota do exame. Chega com um pouco de medo do resultado; a imagem diz que é um check-up tranquilo, não uma prova.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-saude.webp`
- **Prioridade:** essencial

```
contemporary flat illustration of a woman in her forties stretching calmly on a floating platform next to a large round orange gauge shaped like a sun, a small plant beside her, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 2. Capa: Gestão financeira

- **Onde entra:** Plano › Gestão financeira (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#cartao/gestao`)
- **Por que ali:** O orçamento do mês: o que entra, o que a vida custa e o que vai para o futuro. A imagem mostra ordem leve, sem planilha.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-gestao.webp`
- **Prioridade:** essencial

```
contemporary flat illustration of a young couple on a floating platform calmly sorting three rounded jars of different sizes, the smallest jar orange and glowing, a coffee cup beside them, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 3. Capa: Dívidas

- **Onde entra:** Plano › Dívidas (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#cartao/dividas`)
- **Por que ali:** Assunto que pesa. A imagem mostra o peso indo embora: alívio, não culpa.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-dividas.webp`
- **Prioridade:** boa

```
contemporary flat illustration of a man in his thirties on a floating platform letting go of a cluster of heavy round weights that turn into orange balloons drifting up, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 4. Capa: Objetivos

- **Onde entra:** Plano › Objetivos (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#cartao/objetivos`)
- **Por que ali:** Os sonhos com valor e data. A pessoa está escolhendo para onde ir; a imagem mostra vários destinos possíveis no horizonte.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-objetivos.webp`
- **Prioridade:** essencial

```
contemporary flat illustration of a couple with a small child on a floating platform looking through a round telescope at several small floating islands, each with an orange flag, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 5. Capa: Reserva e liquidez

- **Onde entra:** Plano › Reserva e liquidez (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#cartao/reserva`)
- **Por que ali:** O colchão para o imprevisto. A sensação a passar é a de estar abrigado e tranquilo.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-reserva.webp`
- **Prioridade:** essencial

```
contemporary flat illustration of an older woman resting on a big soft orange cushion on a floating platform under a large rounded umbrella, a cat sleeping beside her, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 6. Capa: Gestão de riscos

- **Onde entra:** Plano › Gestão de riscos (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#cartao/riscos`)
- **Por que ali:** Seguros e proteção da família. Sem drama: a família está segura e brincando.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-riscos.webp`
- **Prioridade:** boa

```
contemporary flat illustration of a family of three playing on a floating platform protected by a soft translucent rounded dome, one small grey cloud passing far away, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 7. Capa: Patrimônio e ativos

- **Onde entra:** Plano › Patrimônio e ativos (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#cartao/patrimonio`)
- **Por que ali:** Tudo o que a família construiu. A imagem mostra o conjunto, como um pequeno mundo próprio.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-patrimonio.webp`
- **Prioridade:** boa

```
contemporary flat illustration of a man in his fifties watering a plant on a floating island that holds a small rounded house, a tree and a tiny car, seen from a distance, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 8. Capa: Investimentos

- **Onde entra:** Plano › Investimentos (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#cartao/politica`)
- **Por que ali:** As caixinhas e a carteira. Investir como cultivar: cada vaso no seu tempo.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-politica.webp`
- **Prioridade:** boa

```
contemporary flat illustration of a young woman tending a row of potted plants of different heights on a floating platform, the tallest one with round orange fruits, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 9. Capa: Impostos e sucessão

- **Onde entra:** Plano › Impostos e sucessão (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#cartao/tributario`)
- **Por que ali:** Assunto árido. A imagem fala de cuidar do que passa de uma geração para a outra.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-tributario.webp`
- **Prioridade:** opcional

```
contemporary flat illustration of a grandfather and a granddaughter on a floating platform planting a small tree together, a watering can beside them, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 10. Capa: Liberdade financeira

- **Onde entra:** Plano › Liberdade financeira (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#cartao/liberdade`). Hoje aparece ali a ilustração "porta-3"; esta a substitui sozinha.
- **Por que ali:** O dia em que o trabalho vira escolha. É a imagem mais próxima da referência: descanso merecido.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-liberdade.webp`
- **Prioridade:** essencial

```
contemporary flat illustration of a couple in their late fifties relaxing on a floating platform with an orange beanbag, a plant and two coffee cups, a closed laptop beside them, a kite flying above, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 11. Capa: Evolução patrimonial

- **Onde entra:** Plano › Evolução patrimonial (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#cartao/evolucao`)
- **Por que ali:** A curva do patrimônio ao longo da vida. A imagem mostra o caminho subindo, degrau a degrau.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-evolucao.webp`
- **Prioridade:** boa

```
contemporary flat illustration of a woman walking up a gentle path of rounded floating stepping stones that rise toward a big soft orange sun, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 12. Capa: Relatório

- **Onde entra:** Mais › Relatório, acima das versões (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#relatorio`)
- **Por que ali:** A pessoa vem reler o planejamento com calma. A imagem mostra leitura tranquila.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-relatorio.webp`
- **Prioridade:** boa

```
contemporary flat illustration of a man reading a large open book on a floating platform, rounded pages drifting gently into the sky like birds, a coffee cup beside him, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 13. Capa: Como usar

- **Onde entra:** Mais › Como usar, no alto (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#comousar`)
- **Por que ali:** Primeiros passos na ferramenta. Quem chega está se localizando; a imagem dá as boas-vindas e aponta o caminho.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-comousar.webp`
- **Prioridade:** essencial

```
contemporary flat illustration of a friendly young woman waving from a floating platform next to a rounded signpost with three blank arrows, a small plant at her feet, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 14. Capa: Jornada

- **Onde entra:** Jornada, no alto (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#jornada`)
- **Por que ali:** As reuniões com a Nord e a escalada dos passos. A travessia inteira numa imagem.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capa-jornada.webp`
- **Prioridade:** essencial

```
contemporary flat illustration of a couple crossing a row of small floating platforms linked by rounded bridges, the last platform far ahead with an orange flag, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 15. Boas-vindas: criar a conta

- **Onde entra:** Folha "Criar a sua conta", acima do título (`http://localhost:8137/area-cliente.html?demo#painel`, botão "Criar a minha conta")
- **Por que ali:** O visitante decide ficar. É o momento de acolher: uma porta aberta.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/boas-vindas.webp`
- **Prioridade:** essencial

```
contemporary flat illustration of a smiling person stepping through an open rounded doorway onto a floating platform, a welcome mat, a plant and a cup of coffee waiting, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 16. Comemoração: capítulo concluído

- **Onde entra:** Saber › prova do capítulo, no cartão "Capítulo concluído" (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#saber`, concluir uma prova com 4 de 5)
- **Por que ali:** A pessoa acabou de acertar a prova de um capítulo. Comemorar sem infantilizar.
- **Tamanho:** `--ar 3:1`, exportar em 1620×540 px. Faixa na largura da página: até 1080×220 px no computador (aparece a faixa central, uns 60% da altura) e 358×119 px no celular (inteira). O assunto precisa caber no meio da altura.
- **Espaço livre:** Dois terços da esquerda só com céu e nuvens. Não vai texto por cima; o vazio dá respiro e deixa o corte funcionar.
- **Arquivo:** `ilustras/v2/capitulo-concluido.webp`
- **Prioridade:** boa

```
contemporary flat illustration of a woman in her thirties jumping with joy on a floating platform, orange and peach confetti circles in the air, a closed book at her feet, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, wide panoramic composition, subject small on the right third, vertically centered, empty sky on the left --ar 3:1 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 17. Vazio: o relatório ainda não chegou

- **Onde entra:** Mais › Relatório sem plano (`http://localhost:8137/area-cliente.html?cliente=exemplo-cadastrado&demo#relatorio`) e, em 148×111 px, no bloco "3 · No relatório" de cada área (`http://localhost:8137/area-cliente.html?cliente=exemplo&demo#cartao/gestao`)
- **Por que ali:** O relatório vem com o planejamento completo. A imagem mostra algo sendo preparado com cuidado, a caminho.
- **Tamanho:** `--ar 4:3`, exportar em 800×600 px. Cena pequena acima do título do estado vazio: 240×180 px (no celular, até 72% da largura). Exportar em 800×600 para telas de alta densidade.
- **Espaço livre:** Nenhum: a cena fica centrada, com céu em volta; o texto vem embaixo, fora da imagem.
- **Arquivo:** `ilustras/v2/vazio-relatorio.webp`
- **Prioridade:** essencial

```
contemporary flat illustration of a paper airplane carrying a small rounded book flying toward a person waiting on a floating platform, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, centered composition, generous empty sky around the subject --ar 4:3 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 18. Vazio: ainda sem tarefas

- **Onde entra:** Tarefas sem nenhuma tarefa (`http://localhost:8137/area-cliente.html?demo#tarefas`). Hoje aparece um desenho de traço; a imagem o substitui sozinha.
- **Por que ali:** Nada a fazer ainda. Leve: uma lista em branco esperando, sem cobrança.
- **Tamanho:** `--ar 4:3`, exportar em 800×600 px. Cena pequena acima do título do estado vazio: 240×180 px (no celular, até 72% da largura). Exportar em 800×600 para telas de alta densidade.
- **Espaço livre:** Nenhum: a cena fica centrada, com céu em volta; o texto vem embaixo, fora da imagem.
- **Arquivo:** `ilustras/v2/vazio-tarefas.webp`
- **Prioridade:** boa

```
contemporary flat illustration of a person sitting cross-legged on a floating platform next to a big blank rounded checklist board with one orange check mark, a plant beside it, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, centered composition, generous empty sky around the subject --ar 4:3 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 19. Vazio: ainda sem objetivos

- **Onde entra:** Objetivos sem nenhum objetivo (`http://localhost:8137/area-cliente.html?demo#objetivos`). Substitui o desenho de traço.
- **Por que ali:** Convite a sonhar: para onde vai o dinheiro? A imagem mostra alguém olhando o horizonte.
- **Tamanho:** `--ar 4:3`, exportar em 800×600 px. Cena pequena acima do título do estado vazio: 240×180 px (no celular, até 72% da largura). Exportar em 800×600 para telas de alta densidade.
- **Espaço livre:** Nenhum: a cena fica centrada, com céu em volta; o texto vem embaixo, fora da imagem.
- **Arquivo:** `ilustras/v2/vazio-objetivos.webp`
- **Prioridade:** boa

```
contemporary flat illustration of a young man on a floating platform holding an orange flag, looking at an empty floating island in the distance, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, centered composition, generous empty sky around the subject --ar 4:3 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 20. Comemoração: passos cumpridos

- **Onde entra:** "O passo agora" quando não há passo pendente (`http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo#passo`, com todos os passos cumpridos). Substitui o desenho de traço.
- **Por que ali:** Tudo o que foi combinado está feito. Descanso merecido no alto.
- **Tamanho:** `--ar 4:3`, exportar em 800×600 px. Cena pequena acima do título do estado vazio: 240×180 px (no celular, até 72% da largura). Exportar em 800×600 para telas de alta densidade.
- **Espaço livre:** Nenhum: a cena fica centrada, com céu em volta; o texto vem embaixo, fora da imagem.
- **Arquivo:** `ilustras/v2/passos-cumpridos.webp`
- **Prioridade:** boa

```
contemporary flat illustration of a couple sitting on top of a rounded hill on a floating island with an orange flag planted beside them, a big soft sun behind, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, centered composition, generous empty sky around the subject --ar 4:3 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 21. Vazio: ainda sem reunião marcada

- **Onde entra:** "Preparar a reunião" quando ainda não há reunião marcada (`http://localhost:8137/area-cliente.html?cliente=exemplo-cadastrado&demo#preparar`)
- **Por que ali:** Convite a marcar a conversa com o planejador. Duas cadeiras esperando.
- **Tamanho:** `--ar 4:3`, exportar em 800×600 px. Cena pequena acima do título do estado vazio: 240×180 px (no celular, até 72% da largura). Exportar em 800×600 para telas de alta densidade.
- **Espaço livre:** Nenhum: a cena fica centrada, com céu em volta; o texto vem embaixo, fora da imagem.
- **Arquivo:** `ilustras/v2/vazio-reuniao.webp`
- **Prioridade:** opcional

```
contemporary flat illustration of two rounded armchairs facing each other on a floating platform with a small table, two coffee cups and a plant, nobody sitting yet, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, centered composition, generous empty sky around the subject --ar 4:3 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 22. Vazio: semanadas ainda não combinadas

- **Onde entra:** Acompanhamento › Semanadas sem os cartões cadastrados, à esquerda do aviso, em 168×126 px (`http://localhost:8137/acompanhamento.html?cliente=exemplo-completo&area`)
- **Por que ali:** A família ainda espera o consultor combinar os marcos. Calma: a semana está em branco.
- **Tamanho:** `--ar 4:3`, exportar em 800×600 px. Cena pequena acima do título do estado vazio: 240×180 px (no celular, até 72% da largura). Exportar em 800×600 para telas de alta densidade.
- **Espaço livre:** Nenhum: a cena fica centrada, com céu em volta; o texto vem embaixo, fora da imagem.
- **Arquivo:** `ilustras/v2/vazio-semanadas.webp`
- **Prioridade:** opcional

```
contemporary flat illustration of a rounded wall calendar with seven blank circles floating beside a person relaxing in a hammock on a floating platform, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, centered composition, generous empty sky around the subject --ar 4:3 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 23. Consultor: nenhum cliente ainda

- **Onde entra:** Base de clientes sem nenhum cliente (`http://localhost:8137/index.html`, num navegador sem os exemplos)
- **Por que ali:** O consultor abre a ferramenta pela primeira vez. A imagem convida a receber o primeiro cliente.
- **Tamanho:** `--ar 4:3`, exportar em 800×600 px. Cena pequena acima do título do estado vazio: 240×180 px (no celular, até 72% da largura). Exportar em 800×600 para telas de alta densidade.
- **Espaço livre:** Nenhum: a cena fica centrada, com céu em volta; o texto vem embaixo, fora da imagem.
- **Arquivo:** `ilustras/v2/consultor-base-vazia.webp`
- **Prioridade:** boa

```
contemporary flat illustration of a friendly consultant woman standing on a floating platform beside an empty rounded armchair and a small table with two coffee cups, waving, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, centered composition, generous empty sky around the subject --ar 4:3 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```

### 24. Consultor: nada esperando por você

- **Onde entra:** Base › Espera por mim, vazia (`http://localhost:8137/index.html#espera`)
- **Por que ali:** Pendências zeradas. Um pequeno prêmio: o dia está em ordem.
- **Tamanho:** `--ar 4:3`, exportar em 800×600 px. Cena pequena acima do título do estado vazio: 240×180 px (no celular, até 72% da largura). Exportar em 800×600 para telas de alta densidade.
- **Espaço livre:** Nenhum: a cena fica centrada, com céu em volta; o texto vem embaixo, fora da imagem.
- **Arquivo:** `ilustras/v2/consultor-nada-esperando.webp`
- **Prioridade:** boa

```
contemporary flat illustration of a man leaning back in a rounded chair on a floating platform with his feet up, a closed laptop and a coffee cup on a clean small desk, a kite flying above, open bright sky, friendly modern SaaS illustration style with simple rounded shapes, palette of warm white, light blue, soft peach and vivid orange #FA7A35, minimal navy #20344C details, airy and joyful, centered composition, generous empty sky around the subject --ar 4:3 --sref <link da referência> --sw 200 --no text, letters, numbers, outlines, gradients, photorealistic, coins, dollar signs, piggy bank
```
