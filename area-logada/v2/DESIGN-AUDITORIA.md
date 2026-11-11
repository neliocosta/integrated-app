# Auditoria de design da 2.0

11/11/2026. Todas as telas da seção 7 do [ARQUITETURA.md](ARQUITETURA.md), em 1440 e em 390 px, antes e depois. O que
valia como referência: a montagem (`tela-consultor.html`), a agenda (`agendamento.html`) e a área do cliente no Livro. As
telas novas (a base de clientes, a ficha, a casca do consultor e, na área do cliente, Mais, Relatório, Utilitários,
Research, Como usar, a régua dos níveis e a tarefa avulsa) eram a prioridade.

## O que divergia

| Tema | Onde | O que havia | Estado |
|---|---|---|---|
| Botões | `index.html` | "+ Novo cliente" com texto branco no laranja (o DESIGN.md proíbe); ação principal em marinho quadrado; três "Abrir a ficha" marinho na mesma tela, disputando com a ação principal | corrigido: pílula laranja com texto marinho, uma por tela; "Abrir a ficha" em pêssego; "Emular o acesso" branco |
| Cores de estado | `index.html` | verde `#E8F4EC`/`#2F6B45` e atenção `#B4520F`, diferentes do resto (`#E3F3E9`/`#22794A`, `#964400`); etiqueta marinho `#E6EBF1` em vez da ardósia | corrigido |
| Foco | `index.html`, casca | nenhum `:focus-visible`; ligações da casca sem anel | corrigido (anel laranja de 2 px, como na agenda e no acompanhamento) |
| "Em breve" | `index.html` | cartão branco com sombra, com o mesmo peso do que existe; "Metas do semestre" com quatro caixas tracejadas dentro de um cartão cheio | corrigido: contorno tracejado sem sombra, como o `.card.vago` da área do cliente |
| Estados vazios | `index.html` | uma linha de texto cinza | corrigido na base sem clientes e em "Espera por mim" (ilustração, título, o que fazer); nos cartões pequenos fica a linha de texto |
| Celular | `index.html` | "Abrir a ficha" por baixo dos atalhos na linha do cliente; nome cortado com reticências; a linha da tarefa da ficha espremida ao lado da etiqueta | corrigido |
| Pipeline | `index.html#pipeline` | colunas vazias a 55% de opacidade (o nome perdia o contraste) e da mesma largura das cheias | corrigido: vazias estreitas, só o contorno, texto em cinza legenda |
| Casca do consultor | as quatro telas | faixa em marinho noite sobre o cabeçalho marinho da agenda e do acompanhamento: dois tons e o ícone da marca duas vezes | corrigido: a faixa no marinho do menu do portal, com fio, e sem repetir o ícone quando a tela já tem o seu |
| Raios | `index.html` | 9, 10 e 11 px misturados | corrigido: 16 cartão, 12 bloco, 11 botão, 8 item pequeno |
| Texto pequeno | `index.html` | etiqueta "exemplo" em 10,5 px | corrigido (11 px) |
| Números | `index.html` | sem algarismos tabulares | corrigido |
| Movimento | `index.html`, casca | sem `prefers-reduced-motion` (e sem transições) | transições curtas nos botões, desligadas com menos movimento |
| Mais | área do cliente, 1440 | lista de 560 px com a metade direita da tela vazia | corrigido: os cinco grupos em duas colunas no computador |
| Capa das áreas | área do cliente | só a Liberdade tinha capa; as outras dez áreas abriam direto na régua | corrigido: toda área tem a faixa; a imagem entra quando existir |
| Relatório, Como usar, Jornada | área do cliente | páginas sem abertura, com muito vazio abaixo | a mesma faixa de capa |

## O que ficou como estava, e por quê

- **Dois papéis.** O consultor trabalha no creme `#FDFCFA` com sombra neutra; a área do cliente, no Livro (`#F8F4EE`, fio
  marinho a 6%). É a diferença aprovada entre "mesa de trabalho" e "livro"; as cores da marca, os estados, os raios, os tipos
  e os botões são os mesmos. Unificar o papel mudaria telas aprovadas pelo dono do produto: fica para ele decidir.
- **Foco na área do cliente** em marinho (no resto, laranja). O marinho contrasta mais com o papel do Livro; não mexi.
- **Montagem e coleta** (`tela-consultor.html`): em 1440 px a página tem 22 a 144 px de rolagem lateral (a captura acusa
  1462 e 1584 px de largura). Já era assim antes desta rodada; não investiguei a causa. O botão "Apresentar ao cliente"
  do menu usa texto branco no laranja, também anterior.
- **A casca no menu do portal** (`data-casca="lateral"`): as ligações em fichas quebram em linhas desiguais. Uma lista em
  duas colunas não coube nos 192 px do menu; ficou como estava, só com o anel de foco.
- **Painel do visitante**: "Com a Nord" fica na coluna direita com a esquerda vazia. É tela antiga; não mexi.
- **Ficha do cliente**: a coluna da esquerda termina bem antes da direita, e o formulário "Nova tarefa" é longo. É estrutura
  (arquitetura), não acabamento.
- **Utilitários, Research, tarefa avulsa, régua dos níveis**: já usavam os componentes do Livro; sem mudança além do fundo
  transparente do item "em breve".

## Ilustrações

24 lugares, todos com o espaço reservado funcionando (céu da série em `aspect-ratio`) e a imagem entrando sozinha quando
`ilustras/v2/<nome>.webp` existir. Lista, tamanhos e prompts em [ilustras/PROMPTS-MIDJOURNEY.md](../../ilustras/PROMPTS-MIDJOURNEY.md).
Enquanto o arquivo não existe, o navegador registra um 404 de rede para cada imagem pedida (não é erro de script).
