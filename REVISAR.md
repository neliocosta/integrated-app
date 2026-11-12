# O que revisar e decidir (Nélio)

Situação em 12/11/2026, no branch `claude/versao-2-integrada`. Este arquivo lista o que foi feito e você ainda não
avaliou, o que espera uma decisão sua e o que espera material seu. O que é trabalho por fazer está no backlog, em
`PENDENCIAS.md`; as ideias, em `IDEIAS.md`.

## Para retomar em outro computador

1. `git fetch` e `git checkout claude/versao-2-integrada`.
2. `node ux/servir.cjs . 8137` (ou, no Claude, a configuração `integrated-app` de `.claude/launch.json`).
3. Abrir `http://localhost:8137/area-cliente.html?cliente=exemplo-completo&demo` (cliente) e
   `http://localhost:8137/index.html?demo=120` (consultor, base cheia).
4. `node verificar.js` e `node verificar-agenda.js` devem terminar com "Tudo certo".

Os dados do exemplo ficam no navegador de cada máquina: no computador novo o exemplo abre limpo. `&reiniciar` no
endereço recarrega o exemplo. As pastas `.agents/`, `.claude/skills/`, `.taste-skill/` e `skills-lock.json` não estão
no repositório, de propósito.

O que o Claude guarda de uma sessão para a outra (as suas preferências) fica na máquina, não no repositório. O que
importa para continuar está resumido na seção 5.

## 1. Feito e ainda não avaliado por você

Marque o que aprovar; o que não, diga o que incomoda.

### Painel do cliente (segunda rodada, 12/11)

- [ ] O alto só com "O plano de vida de vocês" e a linha, grande, com o valor na liberdade e aos 100 no gráfico.
- [ ] "Os próximos passos mais importantes": o passo em cartão escuro, a tarefa da vez e a pendência do plano, sem
      janela de semana.
- [ ] Sinais vitais com número e estado na mesma altura.
- [ ] O cartão de agendar dentro de "Com a Nord".
- [ ] Sem plano publicado (visitante, cadastrado, clínica) o alto continua com o propósito, o patrimônio e o passo.
      Faz sentido, ou esses perfis também merecem uma linha da vida?

### Painel do cliente (você disse que vai reavaliar)

- [ ] **Ferramentas rápidas**: se estas quatro (simular os objetivos, Semanadas, as duas calculadoras) são as mais
      úteis para mostrar ali.
- [ ] **Cartões dos objetivos**: o que falta neles.
- [ ] **Os cinco sinais vitais**: se são os cinco mais importantes.

### Aba Plano

- [ ] Os cartões em resumo no mesmo formato dos sinais vitais.
- [ ] O seletor Resumo / Em detalhe alinhado, e a troca animada (no navegador do Claude toca a versão curta;
      `&movimento=sim` no endereço mostra o carrossel inteiro).
- [ ] O nome da terceira faixa: "Como chegamos lá".
- [ ] "Detalhar esta área", com a seta, no cartão em detalhe.
- [ ] A página de cada área sem a régua 1-2-3: resumo em cima, planejamento embaixo, informações recolhidas.
- [ ] O planejamento da área ainda é o relatório num quadro embutido (só saiu o "anterior/próximo"). Você disse que
      ia explorar e mandar mais feedback.

### Cor

- [ ] A primeira dose de laranja: aba ativa do menu, ícones das áreas, traço das faixas do Plano, a semana de hoje e
      a etiqueta nas Semanadas. Se ainda estiver tímido: o cabeçalho do cartão das Semanadas e o seletor do Plano.

### Portal do consultor (nada disso você comentou ainda)

- [ ] Base de clientes em escala (`index.html?demo=120`): busca, filtro por etapa, filtros rápidos, ordenação.
- [ ] Metas do semestre com nível e explicação de cada uma.
- [ ] Pipeline com busca, "vencidos" e 12 por coluna.
- [ ] Montagem do plano sem rolagem lateral e o menu "Ir para outra tela".
- [ ] O ciclo completo: deixar uma tarefa no portal, ver chegar na área, marcar como feita, conferir na ficha.

### Roteiro de auditoria

| # | Abra | Confira |
|---|---|---|
| 1 | `area-cliente.html?cliente=exemplo-completo&demo` | O Painel de cima a baixo; cada cartão leva ao lugar certo |
| 2 | Aba Plano, depois cada uma das onze áreas | O resumo, o detalhe, a página da área e as abas do planejamento |
| 3 | Barra de perfis do modo demo: visitante, cadastrado, clínica | A mesma estrutura com menos profundidade |
| 4 | Os itens 1 a 3 na largura de celular | Nada cortado, nada com rolagem lateral |
| 5 | `index.html?demo=120` | Achar um cliente em segundos; filtros; metas; pipeline |
| 6 | `tela-consultor.html?cliente=exemplo-completo` | Sem rolagem lateral; o menu abre |
| 7 | `acompanhamento.html?cliente=exemplo-completo&area` | As Semanadas com os dois cartões |

## 2. Decisões que esperam você

1. **Regra de nível das metas do semestre.** Hoje é provisória: 20 pontos percentuais por nível. NPS e Indicações
   não têm dado. Qual é a regra real do bônus?
2. **Números que divergem entre telas** (poupança 17% e 20%, R$ 450 e R$ 354, a nota de proteção). As causas estão em
   `area-logada/v2/FEEDBACK-APLICADO.md`; cada uma pede uma definição sua.
3. **Régua da fase de vida.** A de produção (exame) usa 0 a 9, 9 a 70, 70 a 250 e 250 vezes o maior entre renda e
   custo; a do motor usa 0,5 a 18, 18 a 60, 60 a 200 e 200 vezes o custo. Qual vale?
4. **"Deveria ter hoje" nos cartões dos objetivos.** A conta é provisória (aporte constante do mês em que o objetivo
   entrou no plano até a data-alvo). Qual é a regra do planejamento?
5. **Para onde vai "O mês e o ano"** (teto do mês, ritmo dos aportes, o ano em uma linha). Saiu do Painel e hoje não
   aparece em lugar nenhum.
6. **"Um imprevisto?"** saiu do Painel. A ação ainda existe no código; fica em algum lugar (a área Reserva, a
   conversa com a planejadora) ou sai de vez?
7. **Referências da Origin** (`area-logada/referencias/ORIGIN-2026-11-11.md`, seção 9): quais aplicar e em que ordem.
8. **Agenda ligada à base de clientes**: você adiou; quando retomar.
9. **Ilustrações**: os 24 prompts estão em `ilustras/PROMPTS-MIDJOURNEY.md`; enquanto as imagens não existem em
   `ilustras/v2/`, as capas aparecem como uma faixa vazia.
10. **Push e merge**: o branch está no GitHub; nada foi para a `main`.

## 3. Material que você ficou de mandar

- **Exame de saúde financeira**: as dúvidas e confusões dos clientes ao responder, e a confirmação de como a nota
  geral sai dos cinco pilares. A fórmula atual e os 17 achados estão em
  `area-logada/referencias/EXAME-FORMULA-ATUAL.md`.

## 4. Imperfeições conhecidas

- A página "Renda ativa e renda passiva" mantém rolagem própria dentro da área.
- A aba ativa da área não acompanha quando se navega por dentro do relatório.
- O gráfico de evolução do relatório não foi ajustado para celular.
- `notaDoExame()` na área é provisória e não reproduz a nota de produção (você pediu para esperar a revisão).
- `blocoMesAno()` e a ação do imprevisto estão no código sem uso, esperando as decisões 5 e 6.

## 5. O que você já disse e vale para as próximas sessões

- O Painel é para a pessoa sentir que a vida financeira está no controle: a linha da vida é a protagonista do alto,
  sozinha. Quando você pede destaque para um elemento, é para tirar o que disputa com ele.
- O cliente não entra toda semana nem entra para lançar uma mudança: entra para se inspirar, entender o momento e
  talvez agir. Nada de "esta semana" nem de "um imprevisto?" na casa.
- Linhas de status e frases de propósito geradas ("Para a viagem a Fortaleza…") são poluição.
- Ferramenta rápida é uma coisa; seção grande (plano completo, Saber) é outra hierarquia, com a aba dela.
- Cartões de um mesmo bloco têm a mesma estrutura e os textos começam na mesma altura.
- As três profundidades (exame, clínica ou trilha, planejamento completo) são suaves, não uma régua numerada.
- O planejamento de cada área deve ser nativo da página, só com o que é do tema.
- O laranja é a cor da marca: aparece nos detalhes, sem sobrecarregar.
- Avaliar como usuário real: clicar tudo, testar com 120 clientes, comparar com a produção.
- Toda ideia de produto entra em `IDEIAS.md`, com estado e data.
