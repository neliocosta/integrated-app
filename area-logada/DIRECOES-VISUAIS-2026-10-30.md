# Área do cliente — quatro direções visuais (30/10/2026)

> **Decisão do dono do produto, 30/10:** ficam **Livro** e **Aurora**; os temas escuros (Noite e Travessia, com o menu
> escuro) saíram, porque o plano pede clareza. Nas duas, o menu fica **no alto** no computador, para o núcleo da página
> ganhar a largura. Entraram também: o **guia do plano no Painel** (as onze áreas com o número principal, na largura
> toda, logo abaixo do passo e da tarefa, cada uma levando à página da área); o **Plano compacto** (só os números
> principais), com o botão **"Ver todos em detalhe"**, que abre os cartões completos numa transição animada; e a
> **transição do cartão para a página da área**, em que o cartão cresce até o resumo da página (View Transitions, sem
> animação para quem pede menos movimento). O Sóbrio continua disponível só para comparação. Ainda falta escolher entre
> Livro e Aurora (ou uma mistura) e levar a escolha ao DESIGN.md.

O esqueleto é o mesmo nas quatro: as mesmas telas, os onze cartões, os textos e os dados. Muda a cor, a tipografia, as
superfícies e a forma da navegação. Todas trazem o logo (o ícone no menu e no cabeçalho do celular) e trocam os rótulos
em mono e caixa alta por títulos de seção em sans. O anel de profundidade passou a ser desenhado como o anel do logo,
aberto no alto, no degradê de cada direção.

Para ver, com o servidor de sempre (`node ux/servir.cjs . 8137`), abra
`http://localhost:8137/area-cliente.html?demo&cliente=exemplo-completo` e troque na segunda linha da barra escura:
Sóbrio, Travessia, Noite, Livro, Aurora. A escolha fica lembrada no navegador; `&visual=<nome>` também funciona sem a
barra. O Sóbrio de 30/10 continua sendo o padrão até a escolha.

| Direção | Em uma frase | Tipografia | Cor e superfície | Navegação | Para quem ela fala melhor |
|---|---|---|---|---|---|
| **Travessia** | O DESIGN.md da Nord levado à área: a identidade do relatório, mais calma | Sora nos títulos e números, DM Sans no texto | Creme de papel, cartões brancos com sombra suave, menu em marinho-noite com o logo, a linha do horizonte (o degradê do anel) sob o cabeçalho, o passo em marinho com a ação em laranja | Menu lateral escuro; barra inferior no celular | Quem já conhece o relatório: a área parece a continuação dele |
| **Noite** | O plano para o fim do dia, no celular, saindo do WhatsApp | Sora e DM Sans | Fundo marinho-noite, cartões em marinho, o laranja do anel como a única luz (o passo, a ação, a profundidade) | A mesma, em escuro | O uso diário no celular, à noite; a mais "produto" das quatro |
| **Livro** | A área como o relatório impresso | Newsreader nos títulos, números e nomes das áreas; DM Sans no texto | Papel quente, fios finos, o fio de capítulo no alto de cada área, o terracota do logo nas ações, sem sombra | No computador, o menu vai para o alto como um sumário; no celular, a barra inferior | O cliente do planejamento completo que lê com calma |
| **Aurora** | A mais calorosa, para quem começa | Sora e DM Sans | Fundo pêssego claro, cada área com a sua cor suave da paleta, cantos largos, sombras quentes, ações no degradê do anel | Menu claro; no celular, a barra flutua | O visitante e o cadastrado, que precisam de ânimo sem virar jogo |

O que vale observar ao comparar:

- **O Plano do Completo** mostra o peso de cada direção com tudo preenchido; **o do Visitante** mostra como cada uma
  trata o cartão vazio (o convite precisa continuar convidando).
- **O Painel no celular**, porque é onde o cliente vive: o passo continua acima da dobra nas quatro.
- **A página de uma área no Completo** (Gestão de riscos, por exemplo): o capítulo embutido do relatório ainda tem o
  visual dele, e a direção escolhida diz quanto os dois precisam se aproximar.

O que ainda não foi feito, de propósito: nenhuma direção mexe no relatório embutido nem no portal do consultor; as
fotos de natureza continuam as mesmas; a escolha vira tokens no `DESIGN.md` só depois da decisão.

## Refinos de 30/10 (tarde), sobre o Livro

- **O dono do produto prefere o Livro** ao Aurora (menos carregado, mais limpo); as fontes ainda em dúvida. Para
  comparar, a barra de demonstração ganhou a linha **Fontes** (só no Livro; `&fonte=` também funciona): Newsreader + DM
  Sans (o atual), Instrument Serif + Instrument Sans, Source Serif 4 + Source Sans 3, Fraunces + Manrope. A escolha fica
  lembrada no navegador. Os pares alternativos carregam do Google Fonts só quando escolhidos.
- **O seletor Resumo | Em detalhe** substitui o botão "Ver todos em detalhe": uma cápsula fina com o pino que desliza
  (no Livro, os rótulos em Newsreader e a cápsula sem fundo).
- **A transformação** do Plano compacto nos cartões completos é um carrossel: cada área passa no centro da tela,
  uma de cada vez, e o gráfico dela se enche (barras crescem da esquerda, a curva se traça, a teia se abre do centro,
  os pontos pingam); as que já passaram recuam para trás, à esquerda, menores e mais apagadas. Depois da última, todas
  vão para o seu lugar na grade. Cerca de 1 s por área com gráfico e 0,6 s por área sem gráfico; um toque ou Esc pula
  para o fim. No Resumo, os cartões se recolhem um a um, rápido (cerca de 0,6 s), e os compactos aparecem em sequência.
  Com "menos movimento" pedido, nada disso anima.
- **O menu no alto mostra só o ícone do logo**, sem o nome escrito ao lado: o nome já é parte do logo. O arquivo do logo
  completo que existe em `marca/` é a versão negativa (nome em branco), que não serve sobre o papel claro; para usar o
  logo inteiro no alto falta a versão positiva.
- **`&movimento=sim`** (só para a demonstração; lembrado no navegador, `&movimento=nao` desfaz): ignora o "menos
  movimento" do sistema, para avaliar as transições num Windows com "Mostrar animações" desligado. O produto continua
  respeitando a preferência do cliente.
