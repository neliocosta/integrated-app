# Agendamento de reuniões — especificação

Documento de direção para começar o desenvolvimento. Escrito em 10/11/2026 a partir de um levantamento da conta da
Nord no OnceHub (configuração real, página pública e central de ajuda) e do que já está decidido para a área logada
([README.md](README.md), [UX.md](UX.md), [ETAPAS.md](ETAPAS.md)).

**Como este documento é usado.** A construção tem duas fases. Primeiro, um **protótipo funcional neste
repositório**, no padrão das telas atuais, com os calendários e o WhatsApp simulados, para validar a experiência e
as regras (seção "O protótipo"; o prompt para abrir a sessão está em [PROMPT-AGENDAMENTO.md](PROMPT-AGENDAMENTO.md)).
Depois, o **sistema real dentro da plataforma Nord Liberta**, feito pelo desenvolvedor da plataforma, que recebe
este documento, o protótipo e o modelo de dados (seção "Na plataforma"). As regras são as mesmas nas duas fases.

## O objetivo em uma frase

O cliente (logado) e o cliente em potencial (sem login, por um link no WhatsApp) escolhem um horário que já está livre
na agenda de quem vai atendê-lo, a reunião entra no calendário do consultor e no pipeline, e os lembretes saem por
WhatsApp. Sem o OnceHub no meio.

**A ferramenta começa zerada.** Não há tipo de reunião, pessoa, peso, duração, lembrete nem número de WhatsApp
escrito no código: o admin cadastra, edita, troca e move tudo pelo painel. O que este documento chama de coleta,
acompanhamento, clínica, aprofundamento, check-up e comercial são os tipos que a Nord vai cadastrar, e servem aqui de
exemplo.

## O que o OnceHub faz e como a Nord usa hoje

### As quatro peças do OnceHub

| Peça do OnceHub | O que é | Na nossa ferramenta |
|---|---|---|
| **Event type** | O tipo de reunião: duração, regras de horário, formulário, notificações, política de cancelamento | **Tipo de reunião** |
| **Booking page** | A agenda de uma pessoa: calendário conectado, disponibilidade semanal, exceções por data, videoconferência | **Agenda do consultor** |
| **Resource pool** | Um grupo de agendas que divide os agendamentos, com um método de distribuição e as estatísticas | **As pessoas habilitadas do tipo**, com os pesos (o "grupo", neste documento) |
| **Master page** | O link público que junta tipos e grupos, com a regra "este tipo vai para este grupo" | **O link público do tipo** |

### A configuração da conta, em 10/11/2026

- **9 agendas** (uma por consultor), **16 grupos**, **9 links** públicos e 5 categorias de tipos (Apresentação,
  Olhadinha, Check-ups, Clínica Bayer, Reunião Individual).
- **O link comercial** (`NordWealthSchedule`) oferece 19 tipos numa lista só: Apresentação e Olhadinha para cada faixa
  (Planejamentos, Plus de 500 mil a 1 MM, Prime de 1 a 2 MM, \*Prime\* de 2 a 5 MM, Privilege de 5 a 10 MM, Private
  acima de 10 MM) e as variações "com Sócio", "com Breia", "com a Marilia", "com Ronaldo". Cada tipo aponta para um
  grupo; quatro deles levam um **participante adicional** (o sócio entra junto, e o horário só aparece se ele também
  estiver livre).
- **O tipo "Reunião Individual":** 50 minutos; agendamento automático (sem aprovação); um cliente por sessão;
  horários começando em :00 e :30; sem intervalo entre reuniões; sem limite por dia ou por semana; sem antecedência
  mínima; janela de até 18 meses; fuso do cliente detectado, com opção de trocar.
- **Formulário:** nome, e-mail, celular (com DDD e autorização de SMS) e informações adicionais.
- **Cancelar e remarcar:** a qualquer momento antes da reunião, com motivo obrigatório.
- **Lembretes ao cliente:** e-mail 24 horas, 2 horas e 30 minutos antes (modelo "Lembrete da Reunião"); confirmação
  na hora; o cliente entra como convidado no evento do calendário. A mensagem de depois da reunião está desligada.
- **Aviso ao consultor:** e-mail a cada agendamento (modelo "Confirmação - Usuário").
- **Calendário:** Google Workspace, **um calendário por pessoa** (para ligar o Microsoft 365 é preciso desligar o
  Google). Videoconferência por Zoom, Meet ou texto fixo.
- **Disponibilidade:** grade semanal (ex.: 11h às 12h e 13h às 18h, de segunda a sexta) mais exceções por data, e o
  que estiver ocupado no calendário sai da oferta.

### Como o OnceHub distribui (e o que ele não faz)

O OnceHub tem três métodos, e **nenhum deles aceita percentual**:

1. **Rodízio (round robin):** o próximo da fila recebe; só aparecem os horários dele. Com "correção automática", quem
   perdeu um agendamento (cancelamento, remarcação, reatribuição, não comparecimento) volta para a frente da fila.
2. **Disponibilidade somada (pooled availability):** o cliente vê a união dos horários de todos; ao escolher, recebe
   quem está há **mais tempo sem receber** entre os livres naquele horário.
3. **Disponibilidade somada com prioridade:** igual, mas recebe quem tem a maior **prioridade (de 1 a 10)** entre os
   livres; o tempo sem receber só desempata.

Todos os grupos da Nord usam o terceiro, com todo mundo em "Média - 5". Na prática, é o segundo método. O resultado
no grupo Apresentação Prime, desde maio de 2024: **627 agendamentos, 336 para um consultor (54%), 261 para outro
(42%) e 30 para o terceiro** (que entrou em julho de 2026); 96 foram removidos por cancelamento ou remarcação. Quem
tem mais horário livre recebe mais, e não há como dizer "60%, 25%, 15%". **A distribuição por peso é a principal coisa
que a nossa ferramenta faz e o OnceHub não.**

### O que manter, o que mudar

| Manter (boa prática) | Mudar |
|---|---|
| A união das agendas: o cliente vê todo horário em que pelo menos um do grupo está livre | Peso em percentual por pessoa, com correção, no lugar da prioridade de 1 a 10 |
| Conferir o calendário de novo no instante de confirmar | Um link por tipo, com o nome público que o admin escrever e **sem a faixa de patrimônio**, no lugar de uma lista com 19 opções em que o cliente escolhe a própria faixa e vê nomes internos |
| O agendamento removido (cancelado, remarcado, reatribuído, não compareceu) não conta na distribuição | Lembretes por WhatsApp, com resposta, no lugar do e-mail |
| Três lembretes: 24 h, 2 h e 30 min | O agendamento move o pipeline e a jornada do cliente sozinho |
| Cancelar e remarcar por link, sem login, com motivo | Mais de um calendário por pessoa para checar conflito (Google e Microsoft ao mesmo tempo) |
| Fuso detectado e mostrado, com opção de trocar | O cliente logado não preenche formulário |
| Quem tem o calendário desconectado sai do grupo sozinho | Página no celular primeiro (o link chega pelo WhatsApp) |
| Participante adicional (o sócio entra junto) | Ciclo mensal de distribuição, que pode ser alterado (no OnceHub é fixo depois de criado) |

## Quem pode agendar o quê

São três públicos, e cada tipo de reunião é cadastrado para um deles:

| Público | Como a ferramenta sabe | O que pode agendar | Com quem |
|---|---|---|---|
| **Ainda não é cliente** e não está ligado a nenhuma empresa | Chegou por um link público, sem login | Só as reuniões do **time comercial**, e só a do link que recebeu | As pessoas habilitadas do tipo, por peso |
| **Pessoa de uma empresa** (programa de bem-estar financeiro) | Login ligado a uma empresa | **Clínica financeira**, **reunião de aprofundamento** e **check-up** | As pessoas habilitadas do tipo, por peso; ou quem fez a clínica dela |
| **Cliente** | Login com consultor atribuído | **Coleta de dados** e as **reuniões de acompanhamento**, que são liberadas a cada semestre | Só o consultor ou a consultora que já atende a pessoa |

Não há link geral no site: quem não é cliente só agenda pelo link que o comercial mandou.

**A liberação.** Um tipo pode ser "sempre disponível" para o seu público ou "disponível quando liberado". A coleta e
o acompanhamento são do segundo jeito: o botão "Agendar" só aparece quando aquela reunião está liberada para aquele
cliente, e some depois de agendada. O acompanhamento é liberado sozinho a cada semestre (o intervalo é um campo do
tipo) ou à mão, pelo consultor ou pelo admin, na ficha do cliente. O aprofundamento é liberado quando o consultor o
pede no registro da clínica; o check-up, 12 meses depois da clínica.

Os tipos de exemplo:

| Tipo | Quem agenda | Com quem | Por onde | Efeito na plataforma |
|---|---|---|---|---|
| **Coleta inicial** | Cliente que contratou o planejamento | O consultor do cliente | Área logada; link pessoal no WhatsApp | Pipeline do planejamento → "Reunião agendada"; data do Embarque na Jornada |
| **Acompanhamento** | Cliente Completo | O consultor do cliente | Área logada (Jornada e "Falar com alguém"); link pessoal no lembrete | Data do Acompanhamento #1, #2 ou Renovação na Jornada |
| **Clínica financeira** | Pessoa de uma empresa | As pessoas habilitadas para a clínica, por peso | Área logada; link pessoal | Pipeline da clínica; **custa 5 tokens** (ver abaixo) |
| **Aprofundamento** | Pessoa de uma empresa que já fez a clínica, quando liberado | Quem fez a clínica dela | Área logada; link pessoal | Pipeline da clínica → "Conversa de aprofundamento" |
| **Check-up** | Pessoa de uma empresa, 12 meses depois da clínica | Quem fez a clínica dela, ou as pessoas habilitadas | Área logada; link pessoal | Pipeline da clínica → check anual |
| **Comercial** | Cliente em potencial, **sem login** | As pessoas habilitadas do tipo, por peso; sócio como participante adicional, quando o tipo pedir | Link público | Cria ou acha o contato; pipeline → "Topo do funil" com reunião marcada |

### O comercial é uma família de tipos

"Comercial" não é um tipo só. O admin cadastra um tipo para cada combinação que precisa tratar diferente: Olhadinha
de 1 a 2 milhões, Olhadinha de 2 a 5 milhões, Olhadinha de 5 a 10 milhões, Apresentação de 1 a 2 milhões,
Apresentação de 2 a 5 milhões, Apresentação de planejamento de investimentos, e assim por diante. Cada um tem a sua
duração, os seus intervalos, as suas pessoas e pesos e o seu link.

**A faixa é só interna.** Cada tipo tem dois nomes:

- o **nome interno**, que o admin e a equipe veem no painel e nos avisos ao consultor ("Apresentação · 2 a 5 MM");
- o **nome público** e a descrição, que o admin escreve e o cliente vê na página, na confirmação, nos lembretes e no
  convite do calendário ("Conversa com a Nord Wealth").

O endereço do link também é escrito pelo admin (ou gerado, sem significado) e nunca leva a faixa. O painel avisa se o
nome público, a descrição ou o endereço tiverem valores ou palavras de faixa ("milhões", "MM", "Prime", "Private").
O cliente não vê outros tipos nem tem como chegar a eles a partir do link que recebeu.

### O que se configura em cada tipo

O essencial, que o admin preenche para ter um link funcionando:

- nome interno, nome público e descrição pública;
- **duração**;
- **intervalo antes** e **intervalo depois**, cada um com o seu valor (ou nenhum): travam a agenda de quem atende em
  volta da reunião;
- **as pessoas habilitadas e o peso de cada uma**;
- o endereço do **link público**, com "copiar" e "mandar por WhatsApp".

E também, tudo do admin, tipo a tipo: o público (não cliente, pessoa de empresa, cliente) e a liberação; quem atende
(as pessoas habilitadas com pesos, ou "o consultor do cliente"); horários de início (:00, :30…); antecedência mínima;
janela máxima; limite de reuniões por dia e por semana por pessoa; local (Meet, Teams, telefone, endereço);
formulário; política de cancelamento e de remarcação; participante adicional; custo em tokens; e as mensagens (o
número que envia, os lembretes e o modelo de cada um, descritos em "Mensagens por WhatsApp").

Nenhum desses campos tem valor fixo no código. Um tipo novo nasce desligado, com os campos obrigatórios em branco
(duração e quem atende), e só pode ser ligado quando estão preenchidos. O número de WhatsApp e os modelos são
desejáveis, não obrigatórios (decidido em 10/11/2026): sem eles, as mensagens saem por e-mail, com um texto padrão. Editar um tipo
vale para os agendamentos novos; os já marcados ficam como foram marcados. Um tipo com agendamentos futuros não é
apagado: é desligado, e os agendamentos seguem.

"Duplicar" cria um tipo novo a partir de outro, com as mesmas pessoas e pesos, para montar a família sem redigitar.

### A clínica custa 5 tokens

Para tirar o barco da água: agendar uma clínica financeira custa **5 tokens**. Com 5 ou mais, o botão "Agendar uma
clínica" funciona, e os tokens são descontados na confirmação. Com menos, o botão aparece apagado, com "faltam N
tokens". Como a pessoa ganha tokens, como a empresa os distribui e as demais regras ficam para depois; a ferramenta de
agendamento só precisa perguntar o saldo e descontar. O custo é um campo do tipo (zero nos outros), e ao lado dele
ficam dois interruptores: "cancelar no prazo devolve os tokens" e "não comparecer devolve os tokens".

## Como a ferramenta funciona

### As peças

- **Agenda do consultor.** Uma por pessoa da equipe: as conexões de calendário, o calendário em que os eventos são
  gravados, os calendários em que se confere conflito, a grade semanal, as exceções por data (folga, um sábado de
  plantão), o fuso e a videoconferência padrão. Um tipo pode ter uma grade própria (o comercial só à tarde).
- **As pessoas habilitadas do tipo (o grupo).** Dentro de cada tipo, a lista de quem pode atender, cada um com um
  **peso em %** e um interruptor "participando". Os pesos somam 100; ao tirar alguém, o peso dele se reparte na
  proporção dos outros. A mesma pessoa pode estar em vários tipos, com pesos diferentes, e a conta da distribuição é
  separada por tipo.
- **Link de agendamento.** Um endereço curto que leva a um tipo. Três espécies:
  - **público**, reutilizável: `/agendar/conversa-nord` ou `/agendar/k7m2xq`, sem a faixa. É o que vai no WhatsApp
    para o cliente em potencial;
  - **pessoal**, de uso único, com código: `/agendar?id=…&code=…`, no padrão do `/taskChecker`. Já sabe quem é o
    cliente, pula o formulário e deixa de valer depois de usado ou depois do prazo;
  - **interno**: o botão "Agendar" dentro da área logada, que usa o cliente e o consultor da sessão.
- **Agendamento.** Cliente (ou contato), tipo, início e fim, quem atende, participantes adicionais, o link de origem,
  o estado (marcado, remarcado, cancelado, realizado, não compareceu), o motivo quando cancelado, o evento criado em
  cada calendário e o histórico de quem mudou o quê.

### O cálculo dos horários livres

Para um tipo, um conjunto de pessoas e um intervalo de datas:

1. Monta os horários candidatos de cada pessoa: a grade semanal mais as exceções, cortados pela antecedência mínima e
   pela janela máxima, nos horários de início do tipo.
2. Tira o que bate com um período ocupado em qualquer calendário conferido daquela pessoa (livre/ocupado do Google e
   do Microsoft), contando o intervalo antes e depois.
3. Tira os dias em que a pessoa já chegou ao limite de reuniões do tipo.
4. Com participante adicional, o horário só vale se ele também estiver livre.
5. Num grupo, o horário aparece se **pelo menos um** participante estiver livre. No calendário, o cliente vê os
   horários, nunca os nomes nem quantos estão livres.

A página mostra o mês com os dias que têm horário, abre no primeiro dia livre e lista os horários do dia em manhã e
tarde, sempre no horário de Brasília (decidido em 10/11/2026: sem escolha de fuso, por simplicidade; quem está fora
lê "Horários de Brasília").

### A distribuição por peso

Na hora em que o cliente **escolhe** um horário de um grupo (a reserva já distribui, para a página mostrar quem vai
atender; decidido em 10/11/2026):

1. **Quem pode:** os participantes livres naquele horário, conferidos de novo no calendário.
2. **Quem recebe:** o que está **mais abaixo da sua cota** no ciclo. A cota é o peso; o realizado é a parte dele nos
   agendamentos do grupo no ciclo, **sem contar** cancelados, remarcados para fora, reatribuídos e não
   comparecimentos. Recebe quem tem a maior diferença entre o peso e o realizado.
3. **Empate:** quem está há mais tempo sem receber; depois, sorteio.
4. **Só um livre:** recebe, mesmo acima da cota. É a regra que o time já conhece: a ferramenta **busca** a
   distribuição, mas não deixa de marcar. Os próximos agendamentos compensam sozinhos, porque ele passa a estar acima
   da cota e os outros, abaixo.

Exemplo, com A = 60%, B = 25% e C = 15%, e 20 agendamentos no mês (A com 12, B com 5, C com 3, todos na cota). O
21º cliente escolhe um horário em que só B e C estão livres: B está em 25,0% e C em 15,0%, empatados na cota; recebe
quem recebeu há mais tempo. Se o 22º escolhe um horário em que os três estão livres, A (12 de 21 = 57%, 3 pontos
abaixo) recebe.

A escolha é pela diferença, e não por sorteio com pesos, porque converge mais rápido e é explicável ("recebeu porque
estava 4 pontos abaixo"). O painel mostra, por grupo, a cota e o realizado de cada pessoa.

- **Ciclo:** mês do calendário, em horário de Brasília, como padrão; trimestre ou contínuo como opção. O ciclo conta
  pela data em que o agendamento foi **feito**, não pela data da reunião.
- **Quem entra no meio do ciclo** começa na média do grupo, proporcional ao peso, para não receber tudo até
  "alcançar" os outros (no OnceHub, o novato vai para a frente da fila).
- **Remarcação:** a reunião continua com a mesma pessoa, e só aparecem os horários dela. Se não houver nenhum em 7
  dias, oferece os do grupo e avisa que o consultor pode mudar.
- **Reatribuição manual:** o admin passa a reunião para outro; sai da conta de um e entra na do outro.
- **O cliente que já tem dono:** se o contato do link comercial já tem um consultor no pipeline, a reunião vai para
  ele, fora da distribuição (se estiver livre; senão, segue a regra do grupo e avisa o dono).

### Dois clientes no mesmo horário

O horário é reservado por 5 minutos quando o cliente o escolhe (antes do formulário), já com a pessoa que vai
atender, e liberado se ele desistir. A reserva segura aquela pessoa naquele horário: para o próximo cliente, o horário
continua aparecendo se outra pessoa do grupo estiver livre. A confirmação é uma transação só: confere a reserva,
confere o calendário, fica com a pessoa da reserva se ela continuar livre (senão, distribui de novo), grava o
agendamento e cria o evento. Se o horário foi tomado nesse meio-tempo, a página diz e mostra os mais próximos, sem perder o que foi
preenchido. Confirmar duas vezes (toque duplo, volta do navegador) não cria dois agendamentos.

## A experiência de quem agenda

### Pelo link público (sem login, no celular)

1. **Abre o link.** Vê a marca Nord, o nome da reunião, a duração, uma linha do que vai acontecer e o calendário já
   aberto no primeiro dia com horário. Sem lista de tipos e sem botão "Reserve já" antes.
2. **Escolhe o dia e o horário.** Ao escolher, vê com quem vai falar: o nome, a foto e a mini bio do consultor que a
   distribuição escolheu (decidido em 10/11/2026).
3. **Diz quem é:** nome, WhatsApp (com DDD, é para onde vão a confirmação e os lembretes) e e-mail; as perguntas do
   tipo, que o admin configura com o tipo de resposta (texto curto, texto longo, escolha única, várias escolhas, lista
   ou data), obrigatórias ou não. O aceite de receber mensagens fica junto ao botão.
4. **Confirmação:** dia, hora, com quem, como entrar, "Adicionar ao calendário" e os links de remarcar e cancelar. A
   mesma coisa chega no WhatsApp em segundos.

A página pública não mostra agenda de ninguém nem dados de outros clientes. No calendário, só horários livres; o
consultor aparece depois que o cliente escolhe o horário.
Tem limite de consultas e de agendamentos por número e por origem, e o link público pode ser desligado no painel.

### Na área logada

- **Onde aparece:** só os tipos do público da pessoa e, entre eles, só os liberados. Para o cliente, na Jornada (a
  etapa liberada ganha "Agendar") e em "Falar com alguém", com a coleta e o acompanhamento do seu consultor. Para a
  pessoa de uma empresa, "Agendar uma clínica" e, quando liberados, o aprofundamento e o check-up. Quem tem login
  sem empresa e sem consultor não vê agendamento na área logada.
- **Sem formulário:** nome, WhatsApp e e-mail vêm do cadastro. São dois toques: o horário e confirmar.
- **A próxima reunião** aparece no Painel, com dia, hora, entrar, remarcar e cancelar.
- **O casal:** quem agenda escolhe se o outro membro do domicílio também recebe a confirmação e os lembretes.

### Remarcar e cancelar

Por link pessoal, sem login, na mensagem de confirmação e em cada lembrete. Cancelar pede o motivo (uma lista curta
e "outro"). Cada tipo define até quando o cliente pode fazer isso sozinho (por exemplo, até 2 horas antes; depois disso, a
página mostra o WhatsApp do consultor).

## Calendários da equipe

Cada pessoa da equipe conecta os próprios calendários em "Minha agenda", com um botão por provedor.

| | Google Calendar | Outlook / Microsoft 365 |
|---|---|---|
| Entrada | OAuth 2.0 do Google | OAuth 2.0 da Microsoft (Graph) |
| Ler livre/ocupado | `freeBusy.query` | `calendar/getSchedule` |
| Gravar o evento | `events.insert`, com o cliente como convidado | `POST /events` |
| Videoconferência | Link do Meet criado com o evento | Link do Teams criado com o evento |
| Saber de mudanças | Notificações por canal (`events.watch`), renovadas antes de vencer | Assinaturas de mudança do Graph, renovadas antes de vencer |

- **Permissão mínima:** ler livre/ocupado e criar, alterar e apagar **os eventos que a ferramenta criou**. A
  ferramenta nunca lê o título nem os participantes dos outros compromissos.
- **Mais de um calendário por pessoa:** o consultor marca em quais se confere conflito (o do trabalho e o pessoal,
  por exemplo) e em qual o evento é gravado.
- **Atualização:** o livre/ocupado fica em memória por poucos minutos e é invalidado pelo aviso de mudança; na
  confirmação, a consulta é sempre direta ao calendário.
- **O evento:** título "Nome público do tipo — Nome do cliente", o link da videoconferência e os links de remarcar
  e cancelar. Como o cliente é convidado e vê o mesmo evento, o título e a descrição **não levam o nome interno nem
  a faixa**; o consultor vê a faixa, o WhatsApp do cliente e o que ele escreveu no aviso que recebe e no painel. Apagar ou mover o evento no calendário **não** cancela
  nem remarca o agendamento: o consultor recebe um aviso e decide no painel.
- **Conexão quebrada** (senha trocada, permissão revogada): a pessoa sai dos grupos na hora, para não haver reunião
  em horário ocupado; ela e o admin são avisados por WhatsApp; ao reconectar, volta sozinha. Uma agenda individual
  com a conexão quebrada para de oferecer horários e diz isso ao cliente logado, com o WhatsApp do consultor.
- **Segurança:** os tokens ficam cifrados no servidor e nunca chegam ao navegador; desconectar apaga o token e as
  assinaturas.
- **A publicação dos aplicativos** no Google e na Microsoft (verificação do consentimento, domínio) tem prazo próprio
  e precisa começar junto com o desenvolvimento.

## Mensagens por WhatsApp

Saem pelo serviço `liberta-whatsapp`, o mesmo dos lembretes de tarefas, e seguem as mesmas regras de convivência
(horário de envio, quantas por dia). Como o cliente em potencial nunca escreveu para a Nord, toda mensagem é um
**modelo aprovado** na Meta.

### Números e modelos

- **Vários números.** O admin cadastra cada número de envio (um do planejamento, um do wealth, outros que vierem),
  todos já registrados na API da Meta. O `liberta-whatsapp` precisa aceitar "enviar por este número".
- **Os modelos vêm da Meta.** A ferramenta lista os modelos aprovados de cada número, com o texto e as variáveis, e
  não edita o texto: mudar o texto é criar um modelo novo na Meta e escolhê-lo aqui. Um modelo pausado ou rejeitado
  aparece marcado no tipo que o usa, e o admin é avisado.
- **Cada tipo escolhe o seu número**, e, para cada mensagem, **o modelo**. O admin liga cada variável do modelo a
  um dado do agendamento (nome do cliente, nome público da reunião, data, hora, quem atende, link para entrar, link
  de remarcar, link de cancelar), com uma prévia da mensagem pronta.
- **A resposta do cliente** chega pelo mesmo número e cai nas Conversas de quem atende a reunião.

### Mensagens de evento e lembretes

Cada tipo tem dois conjuntos de mensagens, todos configurados pelo admin:

- **De evento:** agendou, remarcou, cancelou, não compareceu. Cada uma tem um interruptor, um modelo para o cliente
  e, se o admin quiser, um aviso para quem atende.
- **Lembretes:** uma lista livre. O admin acrescenta quantos quiser, e cada um diz **quando** (tantos minutos, horas
  ou dias antes ou depois da reunião), **para quem** (o cliente, quem atende ou os dois) e **qual modelo**. Um tipo
  pode ter "um dia antes" e "uma hora antes"; outro, um lembrete a mais; outro, nenhum. Um lembrete "depois" serve de
  agradecimento ou de próximo passo.

Um lembrete cujo horário já passou quando o cliente agenda não é enviado. A tabela abaixo é um exemplo de como um
tipo pode ficar, e não um padrão da ferramenta:

| Momento | Para o cliente | Para o consultor |
|---|---|---|
| Agendou | Confirmação: dia, hora, com quem, como entrar, remarcar, cancelar | Novo agendamento: quem, tipo, quando, o que escreveu no formulário, link do cliente |
| 24 h antes | Lembrete com dois botões: **Confirmo** e **Preciso remarcar** | Se o cliente não respondeu até 3 h antes: "ainda não confirmou" |
| 2 h antes | Lembrete com o link para entrar | — |
| 30 min antes | — | Lembrete com o link e o resumo do cliente |
| Remarcou | Nova data, e a antiga cancelada | Mesmo aviso |
| Cancelou | Confirmação do cancelamento e o link para marcar de novo | Aviso com o motivo |
| Não compareceu (marcado pelo consultor) | "Sentimos sua falta", com o link para remarcar | — |
| Depois da reunião | Opcional por tipo: agradecimento e próximo passo | — |
| Todo dia, de manhã | — | Resumo: as reuniões do dia, junto com o resumo diário da fila |

- **A resposta volta:** "Confirmo" marca a reunião como confirmada; "Preciso remarcar" responde com o link pessoal.
  Uma resposta livre cai nas Conversas do consultor.
- **Agendou para dali a menos de 24 h:** não recebe o lembrete de 24 h; a confirmação já cumpre.
- **Sem WhatsApp, ou falha no envio:** vai por e-mail, com o arquivo de calendário anexo. O e-mail de confirmação
  sai sempre, porque é o que põe a reunião no calendário do cliente.
- **Os botões** ("Confirmo", "Preciso remarcar") existem quando o modelo escolhido os tem; o admin diz o que cada
  botão faz (confirmar a presença, mandar o link de remarcar).
- **Consentimento:** o aceite fica gravado com data e origem; "parar" interrompe os lembretes, e não o agendamento.

## O painel interno

### O admin

A plataforma pressupõe um papel de **admin**, e o agendamento depende dele. O mínimo que precisa existir (verificar
com o desenvolvedor o que já está pronto):

- um usuário da equipe é consultor ou admin; o admin faz tudo o que o consultor faz;
- o primeiro admin é definido na implantação; daí em diante, **um admin torna outra pessoa admin** (e tira), numa
  tela "Equipe", com a lista das pessoas, o papel de cada uma e o estado do calendário;
- sempre há pelo menos um admin: o último não pode ser removido;
- toda mudança de papel, de peso e de tipo fica registrada com quem fez e quando.

### O cadastro das pessoas (admin)

Na tela "Equipe", o admin acrescenta quem atende reuniões:

- **nome** e **e-mail**: ao salvar, a pessoa recebe um e-mail com o convite para entrar e **conectar o calendário**;
- **WhatsApp**, para os avisos e os lembretes dela;
- **foto**, **mini bio** e **descrição**, que o cliente vê na confirmação (e na página, nos tipos de uma pessoa só);
- o papel (consultor ou admin).

A lista mostra o estado de cada um: convite enviado, entrou, calendário conectado, conexão quebrada. Dá para
reenviar o convite. A pessoa só passa a receber agendamentos depois de conectar o calendário; antes disso, pode ser
posta num tipo, com peso, mas aparece como "ainda não participa". Desativar uma pessoa a tira de todos os tipos (o
peso se reparte entre os outros) e mostra as reuniões futuras dela, para o admin reatribuir.

### A aba "Links de agendamento" (admin)

É onde o admin configura tudo. Abre na lista dos tipos de reunião, com o nome interno (com a faixa), o nome público,
a duração, quantas pessoas atendem, o link e um interruptor "aceitando agendamentos". Ao abrir um tipo:

- **Reunião:** nome interno, nome público, descrição, duração, intervalo antes, intervalo depois e o restante das
  regras.
- **Pessoas e pesos:** quem está habilitado, o peso de cada um, o interruptor "participando" e, no ciclo, a **cota ×
  o realizado**, com recebidos, removidos e o motivo de cada agendamento ("recebeu porque estava 4 pontos abaixo",
  "era o único livre"). Quem está com o calendário desconectado aparece marcado.
- **Mensagens:** o número que envia, as mensagens de evento e a lista de lembretes, cada um com o modelo e a prévia.
- **Link:** o endereço público, "copiar", "mandar por WhatsApp", "ver como o cliente vê", quantos abriram e quantos
  agendaram; e gerar um link pessoal para um cliente.

### O resto do painel

- **Minha agenda** (cada consultor): calendários conectados, grade semanal, exceções, videoconferência, os links dos
  tipos em que atende e uma prévia de como o cliente vê os seus horários.
- **Agendamentos:** a lista com filtros (tipo, consultor, estado, período); abrir um para remarcar, cancelar, marcar
  "realizado" ou "não compareceu"; o admin também reatribui. O consultor pode **agendar pelo cliente**, na ficha dele.
- **Indicadores** (admin): agendamentos por tipo, taxa de comparecimento, cancelamentos e motivos, tempo entre
  agendar e a reunião, horários mais pedidos e dias sem nenhum horário livre.

Quem vê o quê: o consultor vê a sua agenda, os seus agendamentos e os links dos tipos em que atende, sem mexer em
pesos; o admin vê tudo e é o único que mexe em tipos, pessoas, pesos e papéis.

## Modelo de dados

Vale para o protótipo (documentos no armazém) e para a plataforma (tabelas). Os nomes são uma sugestão; os campos,
não. Durações e prazos em minutos; datas e horas em UTC, com o fuso guardado à parte.

| Documento | Campos |
|---|---|
| `agPessoas/<id>` | `nome`, `email`, `whatsapp`, `foto`, `bio`, `descricao`, `papel` (consultor, admin), `ativo`, `convite` (`enviadoEm`, `aceitoEm`), `fuso`, `video` (meet, teams), `calendarios[]` (`provedor`, `conta`, `estado`: conectado ou quebrado, `confere`, `grava`), `grade` (por dia da semana, a lista de blocos início–fim), `excecoes[]` (`data`, `folga` ou `blocos`) |
| `agTipos/<id>` | `nomeInterno`, `nomePublico`, `descricaoPublica`, `endereco`, `ligado`, `publico` (naoCliente, empresa, cliente), `liberacao` (sempre, liberado), `liberaACadaMeses`, `atende` (pessoas, consultorDoCliente), `pessoas[]` (`pessoa`, `peso`, `participando`), `adicionais[]`, `ciclo` (mes, trimestre, continuo), `duracao`, `antes`, `depois`, `inicios[]` (minutos da hora), `antecedencia`, `janelaDias`, `limiteDia`, `limiteSemana`, `local`, `formulario[]` (`rotulo`, `obrigatorio`), `cancelarAte`, `remarcarAte`, `motivoObrigatorio`, `tokens`, `devolveAoCancelar`, `devolveNaFalta`, `remetente`, `mensagens` (por evento: `ligada`, `modeloCliente`, `modeloAtende`, `variaveis`), `lembretes[]` (`quando` em minutos, negativo antes e positivo depois; `para`: cliente, atende, ambos; `modelo`; `variaveis`) |
| `agRemetentes/<id>` | `nome`, `numero`, `modelos[]` (`id`, `nome`, `texto`, `variaveis[]`, `botoes[]`, `estado`: aprovado, pausado, rejeitado) |
| `agAgendamentos/<id>` | `tipo`, `regras` (cópia de nomes, duração e intervalos do tipo no momento de agendar), `cliente` (`id` ou vazio, `nome`, `whatsapp`, `email`, `respostas`), `inicio`, `fim`, `fusoCliente`, `atende`, `adicionais[]`, `origem` (publico, pessoal, interno, consultor), `estado` (marcado, cancelado, realizado, naoCompareceu), `confirmado`, `remarcadoDe`, `motivo`, `feitoEm`, `distribuicao` (`porque`, a cota e o realizado de cada um na hora), `eventos[]` (`pessoa`, `calendario`, `idEvento`), `tokens`, `historico[]` (`em`, `quem`, `oQue`) |
| `agLiberacoes/<cliente>` | `itens[]` (`tipo`, `liberadoEm`, `por`, `usadoEm`) |
| `agLinks/<codigo>` | o link pessoal: `tipo`, `cliente`, `expiraEm`, `usadoEm` |
| `agReservas/<id>` | a reserva de 5 minutos: `tipo`, `inicio`, `fim`, `pessoa` (quem a distribuição escolheu), `distribuicao` (`porque`, a cota e o realizado na hora), `expiraEm` |
| `agMensagens/<id>` | a fila de envio: `agendamento`, `para`, `remetente`, `modelo`, `texto`, `enviarEm`, `enviadoEm`, `estado`, `resposta` |

A conta da distribuição não é guardada: sai de `agAgendamentos`, pelo tipo, pelo ciclo e pelo estado.

**Campos que a construção do motor acrescentou** (10/11/2026; o porquê está em "Decidido na construção do protótipo"):

| Documento | Acréscimo |
|---|---|
| `agTipos` | `grade` (opcional: a grade própria do tipo, cruzada com a de cada pessoa); `pessoas[].desde` (quando entrou ou voltou a participar, para o crédito de entrada); `mensagens.<evento>.variaveis` dividido em `cliente` e `atende`, um mapa para cada modelo; `lembretes[].seNaoConfirmado` (o "ainda não confirmou": só sai se o cliente não confirmou) |
| `agAgendamentos` | `estado` ganha `remarcado` (o antigo, quando há um novo); `remarcadoPara`; `reatribuidoDe[]` (quem perdeu a reunião); `codigo` (o segredo dos links de remarcar e cancelar: `agendar.html?ag=<id>&code=<codigo>`); `chave` (contra a confirmação duplicada); `linkVideo`; `link` (o link pessoal usado); `cliente.aceite` (`em`, `origem`) e `cliente.parou`; `cliente.contato` |
| `agLinks/<id>` | `code` (o segredo do `?id=…&code=…`), `quem` (público, consultor), `criadoEm`, `agendamento` |
| `agTipos.formulario[]` | `tipo` (curto, longo, unica, multipla, lista, data; sem tipo, longo) e `opcoes[]`; as respostas de várias escolhas são listas |
| `agMensagens` | `evento` (agendou, remarcou, cancelou, naoCompareceu, lembrete, resposta), `canal` (whatsapp, email), `destino`, `botoes[]` (`rotulo`, `acao`: confirmar, remarcar), `anexo` (o convite .ics do e-mail), `seNaoConfirmado` |
| `agPessoas`, `agTipos` | `historico[]` (`em`, `quem`, `oQue`): toda mudança de papel, de peso e de tipo, com quem fez e quando |
| `agTipos` (painel) | `aberturas` (quantos abriram o link público); `pessoas[].peso` inteiro |
| `agTipos` (passo 6) | `liberaAposTipo` e `liberaAposMeses` (liberar N meses depois de uma reunião realizada de outro tipo: o check-up, 12 meses depois da clínica) |
| `agClientes/<id>` (só no protótipo) | `nome`, `whatsapp`, `email`, `publico` (empresa, cliente), `empresa`, `consultor`: quem é cada cliente, no lugar do login; os ids são os dos exemplos da área do cliente |
| Só no protótipo | `agCalendarios/<pessoa>` (o calendário simulado: `ocupados[]` e `eventos[]`); `agContatos/<id>` (o contato de quem não é cliente, com o `dono`, no lugar do pipeline); `agSaldos/<cliente>` (os tokens); `agConfig/relogio` (`deslocamento` em milissegundos: o "avançar o tempo") |
| Variáveis (`mensagens.<evento>.variaveis`, `lembretes[].variaveis`) | cada valor é o nome de um dado (`nomeCliente`…), `{ texto }` (fixo) ou `{ porReuniao: rótulo }` (escrito a cada reunião) |
| `agAgendamentos` (passo 4) | `textos` (`{ rótulo: texto }`, os campos escritos a cada reunião) |
| `agMensagens` (passo 4) | `variaveis` (o mapa, para refazer o texto), `aguarda[]` (os campos ainda em branco); `estado` ganha `aguardando` |
| `agMensagens` (painel) | eventos `convite` (o e-mail da pessoa nova) e `modelo` (o aviso aos admins de um modelo fora do ar); `resposta` (`texto`, `em`) |

## O protótipo (primeira fase, neste repositório)

Um protótipo **funcional**, não um mock de telas: o admin cadastra de verdade, o cliente agenda de verdade, a
distribuição e os lembretes rodam. Só o que está fora do navegador é simulado.

### Arquivos

| Arquivo | O que é |
|---|---|
| `agendamento.html` | O painel interno: Equipe, Links de agendamento, Minha agenda, Agendamentos, Indicadores e as três simulações (calendários, caixa de saída, relógio). No alto, "entrar como" troca entre as pessoas cadastradas, para ver o painel do admin e o do consultor. |
| `agendar.html` | A página de quem agenda, primeiro no celular: `agendar.html?t=<endereço>` (link público) e `agendar.html?id=…&code=…` (link pessoal); a confirmação, o remarcar e o cancelar. |
| `area-cliente.html` | Só o encaixe: o botão "Agendar" e "A próxima reunião", lendo os mesmos documentos. Entra por último, depois que as duas telas novas estiverem validadas. |
| `verificar-agenda.js` | Roda em Node o motor da agenda e confere as invariantes, como o `verificar.js`. |

O motor fica num bloco só (`<script id="motor-agenda">`), sem tocar em tela: `horariosLivres`, `distribuir`,
`cotaERealizado`, `lembretesDe`, `podeAgendar`, e as operações que as usam (`confirmar`, `reservar`, `remarcar`,
`cancelar`, `reatribuir`, `responder`, `relogio`, `simular`, `pendencias`). Cada operação muda o estado em memória e
devolve as `escritas`, os documentos que a tela grava no armazém. O bloco mora no `agendamento.html`; o
`sync-motor.js` o copia para o `agendar.html` e para o `area-cliente.html` quando eles já o têm, e é esse bloco que o
desenvolvedor leva para a plataforma como referência das regras.

Os dados ficam no armazém, como os planos: no link publicado, o banco do link, com as telas abertas num quadro e
falando com a página principal pela ponte; em localhost, o armazenamento do navegador (README.md › "Quem vê o quê e
onde os dados ficam"). O visual segue o DESIGN.md.

### O que é simulado

- **O calendário.** "Conectar Google" e "Conectar Microsoft" só marcam a conexão. Cada pessoa tem um calendário
  simulado, que se vê e se edita no painel: os compromissos ocupados (com "preencher uma semana típica") e os
  eventos que a ferramenta criou. "Quebrar a conexão" testa a saída do grupo.
- **O WhatsApp e o e-mail.** Nada é enviado. Uma "caixa de saída" mostra cada mensagem como chegaria (o modelo com
  as variáveis preenchidas, o número que enviou, a hora), inclusive o convite por e-mail da pessoa nova. Os botões
  da mensagem funcionam ("Confirmo", "Preciso remarcar"). Os números e os modelos aprovados são cadastrados à mão na
  tela de remetentes, no lugar da leitura da Meta.
- **O relógio.** `?hoje=AAAA-MM-DDTHH:MM`, e um controle "avançar o tempo" no painel, disparam os lembretes, a
  expiração das reservas e a liberação semestral.
- **Quem está logado.** Em `area-cliente.html`, o público sai dos exemplos que já existem (o cliente com consultor,
  a pessoa de empresa); na plataforma, sai do login, que já existe para os dois.
- **Os tokens.** Um saldo por pessoa, editável no painel.

### Começa zerado, com um exemplo à mão

Aberto pela primeira vez, o painel não tem nada, e a primeira pessoa a entrar se torna o admin. Um botão "Carregar
exemplo" (e "Apagar tudo") monta uma equipe fictícia, dois números com modelos, um tipo de cada público e uma semana
de calendários ocupados, para demonstrar sem cadastrar. Nomes inventados, nunca os da equipe real.

Na aba de pessoas e pesos de cada tipo, "Simular 100 agendamentos" sorteia horários entre os livres e mostra a cota
e o realizado, sem gravar: é como o admin vê o efeito dos pesos antes de divulgar o link.

### O que o `verificar-agenda.js` confere

1. Um horário só aparece se alguém habilitado está livre nele, contando os intervalos antes e depois, a
   antecedência, a janela e os limites.
2. Com participante adicional, só os horários em que ele também está livre.
3. Recebe sempre alguém livre no horário; com um só livre, é ele.
4. Com todos livres o tempo todo, 200 agendamentos fecham com cada pessoa a até 1 ponto da cota.
5. Cancelado, remarcado, reatribuído e não compareceu saem da conta de quem perdeu.
6. Quem entra no meio do ciclo não recebe uma sequência só dele.
7. Dois pedidos para o mesmo horário e a mesma pessoa: um só é gravado; confirmar duas vezes não duplica.
8. Os lembretes de um agendamento são os da lista do tipo, e os que já passaram não são criados.
9. Cada público só agenda os tipos dele, e um tipo "quando liberado" só com a liberação em aberto.
10. O nome interno e a faixa não aparecem em nenhum texto que o cliente recebe.

### Ordem dentro do protótipo

1. O motor e o `verificar-agenda.js`.
2. `agendamento.html`: Equipe e Links de agendamento (o tipo com os três blocos), calendário simulado.
3. `agendar.html`: link público, formulário, confirmação, remarcar e cancelar.
4. Mensagens: remetentes e modelos, mensagens de evento, lembretes, caixa de saída, relógio.
5. Pessoas e pesos: distribuição, cota × realizado, a simulação, reatribuir.
6. Públicos e liberação, link pessoal, tokens; o encaixe em `area-cliente.html`.

**Pronto quando:** partindo do zero, o admin cadastra três pessoas e um tipo comercial com pesos 60, 25 e 15, copia
o link, abre no celular, agenda, vê o evento no calendário simulado de quem recebeu, a confirmação e os lembretes na
caixa de saída, e a tela de cota × realizado explicando por que aquela pessoa recebeu.

## Na plataforma (segunda fase)

O servidor fica na plataforma Nord Liberta. O desenvolvedor troca o que o protótipo simula, sem mudar as regras:

| No protótipo | Na plataforma |
|---|---|
| Armazém | As tabelas do modelo de dados e a API da plataforma |
| Calendário simulado | Google Calendar e Microsoft Graph (seção "Calendários da equipe") |
| Caixa de saída | `liberta-whatsapp`, com vários números e os modelos lidos da Meta; e-mail |
| Relógio | Um agendador de tarefas, para os lembretes, as reservas e a liberação semestral |
| "Entrar como" e os exemplos | O login da plataforma, que já existe para o cliente e para a pessoa de empresa |
| O motor no navegador | O mesmo motor no servidor: a confirmação e a distribuição nunca rodam no navegador |

A ordem de construção na plataforma:

| Etapa | Entrega | Pronto quando |
|---|---|---|
| **1. Agenda de uma pessoa** | O papel de admin e a tela Equipe; conexão com o Google; grade e exceções; um tipo (acompanhamento); agendar na área logada; evento no calendário com o Meet; confirmação por WhatsApp | Um cliente logado marca o acompanhamento com a consultora dele, e o evento aparece nos dois calendários |
| **2. Link público e lembretes** | Página pública no celular; formulário; link pessoal de uso único; remarcar e cancelar sem login; lembretes de 24 h e 2 h com resposta; reserva de 5 minutos | Um cliente em potencial marca pelo link do WhatsApp, confirma pelo botão do lembrete e remarca sozinho |
| **3. Pessoas e pesos** | A aba "Links de agendamento" completa: tipos com nome interno e público, pessoas e pesos, duplicar; união das agendas, distribuição por peso, participante adicional, reatribuição, cota × realizado | Um mês de agendamentos comerciais fecha com cada pessoa a até 5 pontos da cota, quando a agenda dela permitiu |
| **4. Os três públicos na plataforma** | Público e liberação por tipo (coleta, acompanhamento semestral, clínica, aprofundamento, check-up); vários números e modelos da Meta; lembretes em lista livre; botões na Jornada e em "Falar com alguém"; o pipeline e a Jornada andam sozinhos; tokens da clínica | Agendar a coleta move o cliente para "Reunião agendada" sem ninguém tocar no pipeline |
| **5. Microsoft 365 e indicadores** | Outlook e Teams; vários calendários por pessoa; indicadores; resumo diário | Uma pessoa com Outlook entra num grupo e recebe como as outras |
| **6. Sair do OnceHub** | Recriar os tipos e grupos em uso; trocar os links divulgados (site, assinaturas, mensagens salvas); redirecionar os antigos; duas semanas com os dois ligados | Nenhum agendamento novo no OnceHub em 30 dias |

O Microsoft 365 sobe para a etapa 1 se alguém da equipe já usa só Outlook.

## Decidido em 10/11/2026

- **Quem define os pesos:** o admin, na aba "Links de agendamento", dentro de cada tipo. Um admin torna outras
  pessoas admin.
- **O link comercial:** um tipo por combinação (Olhadinha ou Apresentação × faixa), cada um com o seu link público.
  A faixa aparece só internamente; o nome público e o endereço são escritos pelo admin. O comercial manda o link
  certo depois de qualificar o cliente.
- **A clínica:** custa 5 tokens. Como se ganham e como a empresa os distribui fica para depois.

- **Começa zerada:** tipos, pessoas, pesos, durações, antecedência, janela, intervalos, lembretes e regra de
  devolução dos tokens são cadastro do admin, sem valores no código.
- **Videoconferência:** só Meet e Teams.
- **Lembretes:** lista livre por tipo (quando, para quem, qual modelo).
- **WhatsApp:** vários números cadastrados na API da Meta; cada tipo escolhe o número e o modelo aprovado de cada
  mensagem.
- **Três públicos:** quem não é cliente só agenda com o comercial, pelo link; pessoa de empresa agenda clínica,
  aprofundamento e check-up; cliente agenda coleta e acompanhamento (liberado a cada semestre) com o seu consultor.
  Sem link geral no site.

## Decidido na construção do protótipo

Onde a especificação não decidia, na construção do motor (`<script id="motor-agenda">`, 10/11/2026). As mesmas
decisões estão no comentário do alto do `agendamento.html`.

- **Remarcar** cria um agendamento novo (`remarcadoDe`) e o antigo fica `remarcado`, fora da conta. O novo herda o
  `feitoEm` do antigo: a reunião conta uma vez só, no ciclo em que foi feita. Com a mesma pessoa, a conta dela não
  muda; com outra pessoa do grupo (só quando a remarcação aceita o grupo), sai de uma e entra na da outra.
- **Reatribuir** troca quem atende no próprio agendamento e guarda quem perdeu em `reatribuidoDe[]`; os lembretes
  pendentes são refeitos com a pessoa nova. Para alguém ocupado, só forçando.
- **Os intervalos não se somam.** A reunião nova, com os intervalos dela, não pode bater numa reunião da ferramenta,
  nem a reunião nova nos intervalos da que já existe. Compromissos de fora do agendamento não têm intervalo.
- **"Antes" conta do início e "depois" conta do fim** da reunião, nos lembretes.
- **Participante adicional** só precisa estar livre no calendário, com os intervalos do tipo; a grade e os limites
  são de quem atende. Com a conexão do adicional quebrada, o tipo não oferece horário.
- **A grade própria do tipo** é cruzada com a de cada pessoa, no fuso da pessoa.
- **Quem entra no meio do ciclo** (ou volta a participar) ganha um crédito que o põe exatamente na cota naquele
  instante: `peso × agendamentos do ciclo até ali ÷ (1 − peso)`. Na conferência, com A e B a 50% em 100 agendamentos
  e C entrando com 20% (A e B vão a 40%), C recebe 10 dos 50 seguintes e nunca dois seguidos. A cota se reparte só
  entre quem está participando e com o calendário em ordem.
- **A faixa impede ligar o tipo**, e não é só aviso: palavras ou valores de faixa no nome público, na descrição, no
  endereço ou no texto de um modelo que vai ao cliente; e uma variável "só da equipe" (nome interno, WhatsApp e
  e-mail do cliente, o que ele escreveu) ligada a uma mensagem do cliente. Mesmo mal ligada, ela sai em branco: os
  dados montados para o cliente nem a contêm.
- **O endereço público só abre tipos de quem ainda não é cliente.** Os outros públicos agendam pela área logada, por
  link pessoal ou pelo consultor.
- **O consultor que agenda pelo cliente** dispensa a liberação: o gesto dele já é a liberação.
- **Tokens:** cancelar pela equipe sempre devolve; pelo cliente, só no prazo de cancelamento e com o interruptor
  "cancelar no prazo devolve" ligado.
- **A liberação a cada N meses** conta da última liberação daquele cliente para aquele tipo, quando a anterior já foi
  usada; a primeira é à mão (ou pelo registro da clínica).
- **O e-mail de confirmação**, com o convite .ics, sai sempre que houver e-mail, mesmo com o WhatsApp; nas outras
  mensagens, o e-mail só substitui o WhatsApp (sem número, sem aceite ou modelo pausado).
- **Reserva no grupo:** a reserva escolhe quem vai atender e segura essa pessoa; o horário some só quando todas as
  pessoas livres nele estão seguradas por reservas de outros clientes.
- **O cliente que já tem dono** vai para ele só se o dono for uma das pessoas habilitadas do tipo e estiver livre.
- **Ciclo em branco** é o mês, como a especificação diz que é o padrão.

No painel (passo 2):

- **Os pesos são inteiros.** Ao mudar um, os outros se ajustam na proporção deles, e a sobra do arredondamento vai
  para quem tinha o maior resto: ir de 60/25/15 a 70 dá 70/19/11, e voltar a 60 devolve 60/25/15. Tirar ou desativar
  alguém reparte o peso dele na proporção dos outros (60/25/15 sem o de 15 vira 71/29).
- **"Patrimônio" não é palavra de faixa.** É o assunto da Nord e aparece em descrições legítimas; a faixa é barrada
  pelos valores e pelas palavras que a nomeiam (milhões, MM, mil, Prime, Private, Privilege, Plus, "faixa", R$ com
  número).
- **Um tipo ligado que deixa de cumprir o essencial** (por uma edição, ou por desativar a única pessoa dele) desliga
  sozinho, com o aviso do que falta.
- **"Minha agenda" entra já no passo 2**, com calendários, grade semanal, exceções, fuso e videoconferência: sem a
  grade não há horário livre para mostrar.
- **"Entrar como"** fica no navegador de quem usa (`nl-ag-eu`); a primeira pessoa cadastrada é admin e já entra. O
  consultor vê "Minha agenda", os links dos tipos em que atende (sem abrir o tipo) e os calendários; o admin vê tudo.
  A última admin não pode virar consultora nem ser desativada.
- **O convite** vai para a fila de mensagens (`agMensagens`, evento `convite`), para a caixa de saída do passo 4.
  "Simular: aceitar" faz o papel do primeiro login, e conectar um calendário também conta como ter entrado.
- **O armazém da agenda** é um bloco próprio (`<script id="armazem-agenda">`), copiado pelo `sync-motor.js` como o
  motor: um documento por registro (`nl-db:agPessoas/<id>`… em localhost; no link publicado, o banco do próprio
  link, ouvido coleção a coleção). A ponte com a página Clientes, para o painel abrir num quadro no link publicado,
  entra com o encaixe do passo 6: a ponte de hoje só ouve documentos soltos.
- **`?hoje=AAAA-MM-DDTHH:MM`** é horário de Brasília, e o relógio anda a partir dali.
- **Antecedência e prazos** se escrevem em minutos, horas ou dias e se guardam em minutos.
- **Toda edição grava na hora**, campo a campo, e entra no histórico do documento com quem fez e quando.
- **Só a própria pessoa conecta os calendários** (pedido do dono do produto em 10/11/2026): conectar, reconectar,
  desconectar e escolher em quais conferir conflito e em qual gravar ficam em "Minha agenda", com a conta dela. O admin
  vê o estado de cada calendário na agenda da pessoa, mas não mexe; a grade, as exceções e o fuso o admin pode ajustar.
- **O calendário simulado** se edita como um calendário de verdade: com o mouse, arrastar numa coluna marca um bloco
  ocupado de qualquer tamanho, em passos de 15 minutos; um clique sem arrastar, ou um toque no celular (onde arrastar
  rola a tela), abre a janela com "das" e "às" de 15 em 15 minutos e o que é; tocar num ocupado abre a mesma janela
  para ajustar ou tirar.

Na página de quem agenda (passo 3, `agendar.html`):

- **O limite por número:** pelo link público, um WhatsApp tem no máximo uma reunião futura de cada tipo. Quem tenta
  de novo vê a que já tem, com remarcar e cancelar, e a reserva do horário novo é solta. A regra mora no motor
  (`confirmar` devolve `ja_marcado`) e o `verificar-agenda.js` a confere.
- **Quem atende aparece ao escolher o horário** (pedido do dono do produto em 10/11/2026): o calendário não mostra
  ninguém; a reserva distribui pelo peso e a página mostra o nome, a foto, a mini bio e a descrição da pessoa acima do
  formulário. A confirmação fica com ela se continuar livre. Só o dono do contato no pipeline, livre no horário, passa
  à frente (a confirmação mostra quem ficou). Abandonar a reserva não conta na distribuição.
- **Horários sempre de Brasília** (pedido do dono do produto em 10/11/2026): a página diz "Horários de Brasília
  (GMT−3)" e não deixa trocar o fuso; as mensagens e o convite saem no mesmo horário.
- **O formulário:** nome, WhatsApp com DDD (formatado sozinho) e e-mail são obrigatórios, porque o e-mail com o
  convite do calendário sai sempre; as perguntas do tipo vêm depois. O aceite do WhatsApp é opcional, junto ao botão;
  sem ele, as mensagens vão por e-mail.
- **As perguntas do tipo** (pedido do dono do produto em 10/11/2026) têm tipo de resposta: texto curto, texto longo,
  escolha única (botões de rádio), várias escolhas (caixas de marcar), lista suspensa e data; cada uma pode ser
  obrigatória, e o admin muda a ordem. As de escolha precisam de ao menos duas opções para o tipo ligar (opções em
  branco e repetidas são descartadas). A validação mora no motor (`validarRespostas`), e o `confirmar` recusa sem as
  obrigatórias. No aviso a quem atende, as várias escolhas vêm separadas por vírgula.
- **O calendário** começa no domingo e abre no primeiro dia com horário, procurando mês a mês até o fim da janela; os
  horários do dia vêm em manhã (até 12h), tarde (até 18h) e noite. No celular, enquanto preenche, a página mostra só o
  horário escolhido, a pessoa e o formulário.
- **Escolher um horário já o reserva por 5 minutos**, com a contagem à vista. Se a reserva vence, nada se perde: ao
  confirmar, o calendário é conferido de novo. Fechar a página solta a reserva.
- **O horário tomado** no meio do caminho mostra os seis mais próximos, e o que foi preenchido continua lá.
- **A reunião marcada** tem endereço próprio (`agendar.html?ag=<id>&code=<código>`), que é o mesmo dos links de
  remarcar e cancelar das mensagens. O endereço do link antigo de uma reunião remarcada diz para quando ela foi.
- **Cancelar** pede o motivo numa lista curta ("Mudou a minha agenda", "Não preciso mais da reunião", "Vou marcar em
  outro momento", "Outro motivo" com texto); depois do prazo do tipo, a página mostra o WhatsApp de quem atende.
- **"Adicionar ao calendário"** tem o Google Agenda (link) e o convite .ics (Outlook, Apple e os outros).
- **As aberturas** contam uma vez por visita; "Ver como o cliente vê", no painel, abre com `&ver=equipe`, com uma
  faixa de aviso, e não conta.

Nas mensagens (passo 4):

- **Números e modelos** (aba do admin): cada número com nome e telefone; cada modelo com o nome na Meta, o texto, as
  variáveis (lidas do texto, `{{1}}`, `{{2}}`…), até três botões (cada um confirma a presença, manda o link de remarcar ou
  só registra) e a situação na Meta. Na simulação, o admin faz o papel da Meta; na plataforma, os modelos são lidos de
  lá e o texto não se edita. Um número só se apaga se nenhum tipo o usa.
- **Modelo pausado ou rejeitado não desliga o tipo:** aparece marcado no tipo ("Atenção") e na lista ("modelo fora do
  ar"); a mensagem do cliente vai por e-mail e o aviso à equipe não sai até o modelo voltar. Ao pausar ou rejeitar um
  modelo em uso, os admins recebem um e-mail (na caixa de saída) com os tipos afetados. A regra está no motor
  (`avisos`) e não mais nas pendências.
- **Lembretes** no bloco Mensagens de cada tipo: quanto tempo (minutos, horas ou dias) antes do início ou depois do
  fim, para o cliente, para quem atende ou para os dois, o modelo com o dado de cada variável, "só se o cliente ainda
  não confirmou" e a prévia. **Um lembrete incompleto não impede o tipo:** fica nos avisos e não sai (incluir um
  lembrete num tipo ligado não o desliga).
- **"Parar" é do cliente:** interrompe os lembretes dele, e os de quem atende seguem (antes, o motor cancelava todos).
- **A caixa de saída** mostra cada mensagem como chegaria (WhatsApp ou e-mail, o número que enviou, o modelo, a hora,
  enviada, agendada ou cancelada), com os botões funcionando e um campo para responder como o cliente ("parar"
  incluído). O admin vê todas; o consultor, as dele.
- **O relógio:** "+1 hora", "+1 dia", "+1 semana", "até o próximo envio" e "voltar ao horário de verdade". O
  deslocamento fica em `agConfig/relogio`, lido pelo armazém das duas telas, e aparece no cabeçalho do painel
  ("relógio +1 dia"). O painel faz o papel do agendador de tarefas: ao abrir, a cada 20 segundos e ao avançar o tempo,
  envia o que venceu e solta as reservas vencidas. Com o painel fechado, nada sai; ao abrir, sai o que venceu.
- **Cada variável de um modelo tem três jeitos de ser preenchida** (pedido do dono do produto em 10/11/2026): um dado
  do agendamento (escolhido numa lista), um **texto fixo** escrito ali, no tipo, ou um campo **escrito a cada
  reunião**, com um nome (por exemplo, "Tarefas em aberto"). O consultor escreve o campo uma vez por reunião, na caixa
  de saída (filtro "Para escrever"; a lista de Agendamentos do passo 5 também terá o campo), e todas as mensagens
  daquela reunião que usam um campo com o mesmo nome o recebem. Uma mensagem com o campo em branco fica
  "aguardando" na hora de sair e sai assim que o texto é salvo. Texto fixo ou escrito que vai ao cliente não pode ter
  a faixa (o tipo não liga com texto fixo com faixa; o motor recusa o texto escrito com faixa). As regras moram no
  motor (`preencherTextos`, `camposDaReuniao`).
- **As mensagens de depois saem com a reunião realizada:** antes, o relógio cancelava toda mensagem de uma reunião
  que não estivesse "marcada", e o agradecimento e as tarefas em aberto sumiriam ao marcar "realizado".
- **Fica para depois:** a regra de horário de envio do `liberta-whatsapp` (não mandar de madrugada) e o resumo diário
  de cada consultor; marcar "realizado" e "não compareceu" entra com a lista de Agendamentos, no passo 5.

Em pessoas e pesos (passo 5):

- **Os pesos se preenchem de cima para baixo:** ao mudar um peso, a diferença sai de quem está abaixo na lista, na
  proporção deles (e, se não houver ninguém abaixo, de quem está acima). Antes, mudar um peso reajustava todos os outros,
  e com três pessoas não dava para chegar a 60, 25 e 15 digitando. A regra está no motor (`ajustarPeso`) e na
  conferência.
- **Cota × realizado**, no bloco "Pessoas e pesos" de cada tipo: a barra é o realizado no ciclo e a marca tracejada, a
  cota; ao lado, os pontos abaixo ou acima, os recebidos, os removidos por motivo e o crédito de quem entrou no meio do
  ciclo. Quem está fora da distribuição aparece apagado. "Por que cada um recebeu" lista os agendamentos do ciclo com
  o motivo da distribuição.
- **Simular 100 agendamentos** sorteia entre os horários livres de verdade, com os calendários de hoje, somados aos
  agendamentos reais do ciclo, e mostra o quadro; nada é gravado. Leva alguns segundos (no exemplo, 100 agendamentos
  com 60, 25 e 15 terminaram em 58,4, 25,7 e 15,8).
- **A lista de Agendamentos** (aba de todos; o consultor vê os dele): próximas, passadas ou todas, com filtro de tipo,
  pessoa e estado. Cada reunião abre numa página com: remarcar (horários da mesma pessoa nas próximas três semanas, ou
  os do grupo), cancelar (com o motivo), passar para outra pessoa (só o admin; mostra quem está livre, quem está fora
  da grade e quem está com o calendário com problema; com compromisso no horário, só forçando), e, depois do início,
  "Realizada" e "Não compareceu" (antes do início, só remarcar, cancelar e passar). Ali também se escrevem os campos
  "a cada reunião", e aparecem o porquê da distribuição (com a cota e o realizado na hora), o cliente com as
  respostas, as mensagens e o histórico. A regra de quem pode receber está no motor (`disponibilidade`).

Nos públicos, na liberação e no encaixe (passo 6):

- **Quem é cada cliente** vem, no protótipo, de `agClientes` (o público, a empresa, o consultor), com os mesmos ids dos
  exemplos da área do cliente: `exemplo-completo` é a cliente com a consultora Patrícia Lemos; `exemplo` (a clínica) e
  `exemplo-cadastrado` são a mesma família como pessoa de uma empresa, depois e antes da clínica. A área do cliente não
  tem um perfil "pessoa de empresa" à parte, e estes dois são o caminho dela. Na plataforma, isto vem do login. O
  painel ganhou a aba **Clientes** (simulação), com o que cada um pode agendar, os tokens, as liberações, o link pessoal e
  "agendar pelo cliente".
- **O que aparece para cada um** sai do motor (`tiposParaCliente`): os tipos do público, ligados; um "quando liberado" só
  com a liberação em aberto (e some depois de agendado); sem tokens, apagado, dizendo quantos faltam; com a agenda do
  consultor fora do ar, o motivo e o WhatsApp. Cliente sem consultor não vê nada.
- **O aprofundamento** é liberado pelo consultor na página da reunião ("Próximo passo: liberar"), como o registro da
  clínica pede; **o check-up** é liberado sozinho 12 meses depois da clínica realizada (um campo novo do tipo: liberar N
  meses depois de uma reunião de outro tipo); **o acompanhamento**, a cada 6 meses da última liberação.
- **Quem já é conhecido não preenche formulário**, nos três jeitos: logado (`agendar.html?interno=<tipo>&cliente=<id>`),
  pelo link pessoal (`?id=…&code=…`, de uso único e com prazo, gerado na aba Clientes) e pelo consultor
  (`?pelo=<cliente>&tipo=<tipo>`, que dispensa a liberação). Nome, WhatsApp e e-mail vêm do cadastro, o aceite das
  mensagens é o do cadastro, e só as perguntas do tipo aparecem. O custo em tokens é dito antes de confirmar.
- **O encaixe na área do cliente** é um bloco à parte (`agenda-area`), mais as cópias do motor e do armazém da agenda
  (o `sync-motor.js` as mantém, respeitando o CRLF do arquivo). No Painel, no Atendimento e na Jornada aparecem
  "A próxima reunião" (dia, hora, com quem, entrar, remarcar, cancelar) e "Para agendar" (cada tipo com o botão). A Jornada
  mostra os cartões no alto, em vez de pôr o botão numa etapa: as etapas da Jornada são fixas da área, e os tipos são do
  admin, sem um vínculo entre eles. "Agendar", "Remarcar" e "Cancelar" abrem a página de agendar por cima da área (no
  celular, a tela toda), com "Voltar à sua área"; ao voltar, a área já mostra a mudança. Com a agenda no ar para aquela
  pessoa, o botão antigo, que só avisava o que faria no produto, sai. Sem cadastro na agenda (o visitante), a área fica
  como era.
- **Fica para depois:** o casal (escolher se o outro membro do domicílio também recebe a confirmação e os lembretes) e a
  ponte com a página Clientes no link publicado (a área do cliente aberta num quadro ainda não lê a agenda, porque a
  ponte de hoje só ouve documentos soltos; em localhost, tudo funciona).

- **O número de WhatsApp e os modelos são desejáveis, não obrigatórios** (pedido do dono do produto em 10/11/2026: às
  vezes não há número ou modelo cadastrado para aquilo). O tipo liga só com o essencial (nomes, duração, horários de
  início, público e quem atende), e o que falta de WhatsApp vira aviso no tipo. Sem número ou sem o modelo de uma
  mensagem, ela sai por e-mail, com um texto padrão: para o cliente, o do e-mail de confirmação (dia, hora, com quem,
  como entrar, remarcar e cancelar); para quem atende, o nome interno, o cliente, o horário, o WhatsApp e o que ele
  escreveu. O e-mail de confirmação, com o convite do calendário, sai sempre. Um lembrete precisa só de quando e para
  quem; sem modelo, vai por e-mail. Modelo pausado ou rejeitado também cai para o e-mail, inclusive o aviso a quem atende.

## A verificar com o desenvolvedor

1. **O papel de admin** já existe na plataforma? Se não, entra na etapa 1.
2. **O `liberta-whatsapp`** já envia por mais de um número e lê os modelos aprovados da Meta?
3. **O público de cada login.** O cliente e a pessoa de empresa já entram com login; falta confirmar onde a
   plataforma guarda a empresa da pessoa e o consultor que atende o cliente, que é o que o agendamento lê.
4. **O saldo de tokens:** onde fica e como se desconta.

## Fora da primeira versão

Pagamento na hora de agendar; pacote de sessões; sessão em grupo (um horário, vários clientes), que as Clínicas Bayer
podem pedir depois; agendamento com aprovação do consultor; iCloud e Exchange local; incorporar a página em outros
sites; integração com CRM externo; SMS; Zoom; link geral de agendamento no site.

## Referências do levantamento

- Conta OnceHub da Nord: Booking pages, Resource pools (Apresentação Prime), Master page "Nord Wealth
  (Agendamentos)", Event type "Reunião Individual", agenda "Nélio Costa", User Integrations.
- Página pública: `go.oncehub.com/NordWealthSchedule`.
- Central de ajuda do OnceHub (`help.oncehub.com`): Pooled availability with priority; Pooled availability
  algorithm: Longest idle time; Resource pools: Automatic correction; Resource pool statistics: Bookings removed;
  Resource pools: Reporting cycle.
