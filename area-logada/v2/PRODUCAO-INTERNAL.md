# A área do consultor em produção (`/internal`), levantada em 11/11/2026

Só a estrutura; nenhum dado de cliente real entra aqui. Serve de inventário para a versão 2.0: tudo o que está nesta
lista precisa ter um lugar na ferramenta integrada.

## Casca

- Barra do alto: menu, logo, o selo **"Emulando acesso do cliente"** (nome e ambiente do cliente escolhido), o relógio da
  sessão (3 h) e o menu do consultor.
- Menu lateral (um só, para consultor e cliente): Área do Consultor, Pipeline, Programa Contínuo; depois, marcados como
  "cliente", Meu Orçamento, Minhas Tarefas, Meu Planejamento, Meus Objetivos; depois "Acessar relatórios" (os de research
  da Nord).
- Menu do consultor: Meu Perfil, WhatsApp (serviço à parte), Microsserviços, e, por papel: Consultores e Escritórios
  (direção), Pipeline Admin (admin), NPS (direção), Registro de Ações (admin), Ferramentas Técnicas (direção).

## Painel interno (`/internal`)

Coluna da esquerda, fixa:

- **Visão**: Admin · Escritório · Proprietário, e o seletor de quem (o próprio consultor ou outro, com o escritório).
- **Cliente**: o seletor do cliente em que o consultor está trabalhando, e dois atalhos: **Área do cliente** (abre a área
  logada emulando o cliente) e **Montagem de relatório**.
- **+ Novo Cliente** (`/internalsignup`), Resultados de Campanha, Cotações de Seguros.
- **Link de indicação**, para cadastrar clientes direto na carteira do consultor.

Miolo, em duas abas:

**Aba Consultor** (a carteira inteira)

- **Metas do semestre** (bônus, parte objetiva): quatro cartões com nível de 1 a 5 — Renovação, NPS, Indicações e
  Cobertura da base (acompanhamentos esperados × feitos) — e avisos de dado que falta ("2 clientes sem a data de entrega
  do relatório").
- **Minhas Tarefas Pendentes** (as do consultor).
- **Reuniões**: semana, mês ou semestre, com intervalo de datas.
- **Scores Pendentes**: clientes com o exame de saúde financeira desatualizado há mais de 6 meses.
- **Coletas em Andamento**.
- **NPS em Aberto**.
- **Programa Contínuo**.

**Aba Cliente** (o cliente escolhido na esquerda)

- **Dados do Cliente**, com a etapa do pipeline e o ambiente.
- **Tarefas** (+ Nova): título, data, responsável (cliente, consultor ou reunião), estado pendente/concluída. São as que
  o cliente vê em Minhas Tarefas.
- **Reuniões** (+ Nova): título, descrição, data e hora, quem.
- **Notas** (+ Nova).
- **Pesquisas NPS** (+ Nova).
- **Scores**: histórico do exame, com os cinco pilares.
- **Coletas de Dados** (+ Novo): data, id, estado, continuar ou descartar; e recuperar uma coleta de um arquivo local.

## Pipeline (`/pipeline`)

Quadro (ou lista) com filtro de escritório, proprietário, busca, **Vencidos** (contador), filtros e filtros avançados.
Cada cartão: ambiente (Planejamento…), nome, e-mail, a data da etapa e o aviso "vence em N dias". As etapas, na ordem:

Topo do funil → Reunião agendada → Montar relatório → Apresentar relatório → Aguardando aprovação → Aguardando execução →
Estratégia executada → Agendando A1 → Relatório A1 → Executando A1 → A1 concluído → Agendando A2 → Relatório A2 →
Executando A2 → Aguardando renovação → Agendando A(n) → Relatório A(n) → Executando A(n) → A(n) concluído →
Consultoria concluída.

(A1, A2, A(n) são os acompanhamentos. É a mesma jornada que o cliente vê como Embarque → Entrega do relatório →
Acompanhamento #1 → Acompanhamento #2 → Renovação.)

## Do lado do cliente

- **Minhas Tarefas** (`/minhastarefas`): "Plano de ação", contador "3 de 5 concluídas", cada tarefa com data e estado.
- **Coleta de dados** (`/coletadedados`): o formulário longo da reunião de coleta.
- O resto da área logada do cliente está descrito em `area-logada/README.md`.
