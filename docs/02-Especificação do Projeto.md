# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

## Personas

Para levantamento das Personas, foi realizadada a [Pesquisa - Perfil de investidor](https://docs.google.com/forms/d/e/1FAIpQLSfjqRgOiBQSQ025G97otpiJ7b3VG3CxzBuqh_xigACh5arYlA/closedform), por meio do Google Forms, no período de 24/03/2023 a 28/03/2023.

Abaixo são apresentados alguns dos perfis que responderam ao questionário, e que são representativos da amostra coletada.

|                                                                             |                                                                                 |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| <img src="img/lucas_guimaraes.jpg" width="150" height="150">                | **Lucas Guimarães**                                                             |
| **Idade:**<br>Entre 19 e 24 anos<br>**Ocupação:**<br>Empregado no setor privado   | **Aplicativos:**<br>Redes sociais<br>Comunicação<br>Transporte<br>Serviços Financeiros   |
| **Motivações:**<br>Reserva de emergência<br>Fonte de renda extra<br>Aposentadoria | **Frustrações:**<br>Instabilidade política prejudicar investimentos       |
| <img src="img/pedro_william.jpg" width="150" height="150">                  | **Pedro Willian**                                                               |
| **Idade:**<br>Entre 19 e 24 anos<br>**Ocupação:**<br>Empregado no setor privado   | **Aplicativos:**<br>Serviços Financeiros<br>Outros                        |
| **Motivações:**<br>Lazer                                                    | **Frustrações:**<br>Não informou                                                |
| <img src="img/barbara_sena.jpg" width="150" height="150">                   | **Bárbara Sena**                                                                |
| **Idade:**<br>Entre 25 e 39 anos<br>**Ocupação:**<br>Empregado no setor privado   | **Aplicativos:**<br>Redes sociais<br>Comunicação<br>Transporte<br>Serviços Financeiros   |
| **Motivações:**<br>Lazer<br>Reserva de emergência<br>Viagens<br>Aposentadoria     | **Frustrações:**<br>Investir errado e perder dinheiro                     |
| <img src="img/fernando_alves.jpg" width="150" height="150">                 | **Fernando Alves**                                                              |
| **Idade:**<br>Entre 25 e 39 anos<br>**Ocupação:**<br>Profissional Liberal         | **Aplicativos:**<br>Comunicação<br>Serviços Financeiros|
| **Motivações:**<br>Comprar/reformar imóvel ou comprar/trocar o carro<br>Fonte de renda extra<br>Aposentadoria| **Frustrações:**<br>Instabilidade política prejudicar investimentos|
| <img src="img/Luciano%20pesquisa.jpeg" width= "150" heigth = "150">           | **Luciano Bragatto**                                                          |     
| **Idade:**<br>Entre 40 e 59 anos<br>**Ocupação:**<br>Empregado do setor público    | **Aplicativos:**<br>Comunicação<br>Serviços Financeiros                  |       
| **Motivações:**<br>Lazer<br>Consumo de bens e serviço<br>Reserva de emergência<br>Viajens   | **Frustrações:**<br>Variaçao de mercado                         |
| <img src="img/Ahyla__Cabral.jpg" width="150"  height="150">                 | **Ahyla Cabral**                                                                |       
| **Idade:**<br>Entre 19 e 24 anos<br>**Ocupação:**<br>Empregado no setor privado     | **Aplicativos:**<br>Redes<br>Comunicação sociais<br>Comunicação<br>Transporte<br>Serviços Financeiros  |
| **Motivações:**<br>Lazer<br>Reserva de emergência<br>Viagens<br>Aposentadoria       | **Frustrações:**<br>Investir errado e perder dinheiro e o cenário político atrapalhar|
 
## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO ... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR` |
|---|---|---|
| Usuário do sistema | Cadastrar meus investimentos na aplicação | Gerenciá-los e acompanhar seu desempenho ao longo do tempo |
| Usuário do sistema | Que a aplicação calcule automaticamente a rentabilidade dos meus investimentos | Avaliar seu desempenho de forma precisa e eficiente |
| Usuário do sistema | Visualizar gráficos e relatórios de desempenho dos meus investimentos | Tomar decisões mais informadas sobre onde investir meu dinheiro |
| Usuário do sistema | Receber alertas e notificações sobre mudanças significativas nos meus investimentos, como vencimento próximo | Tomar decisões oportunas e relevantes |
| Usuário do sistema | Simular investimentos futuros em diferentes cenários de mercado | Avaliar o potencial de retorno e risco em diferentes circunstâncias |
| Usuário do sistema | Cadastrar todos os meus investimentos em diferentes corretoras | Gerenciá-los de forma centralizada |
| Usuário do sistema | Apurar meus tributos | Geração da guia de recolhimento e demonstrativos de resultados para o imposto de renda |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID | Descrição do Requisito | Prioridade |
|---|---|---|
| RF-001 | A aplicação deve permitir que o usuário cadastre e gerencie seus investimentos, com informações como valor investido, tipo de investimento, data de vencimento, taxa de juros, etc. | ALTA |
| RF-002 | A aplicação deve ser capaz de calcular a rentabilidade dos investimentos cadastrados pelo usuário. | ALTA |
| RF-003 | A aplicação deve fornecer ferramentas para análise de desempenho dos investimentos, como dashboards, gráficos e relatórios. | MÉDIA |
| RF-004 | A aplicação deve permitir que o usuário configure alertas e notificações para acompanhar o desempenho dos seus investimentos, como avisos de vencimento, mudanças nas taxas de juros, etc. | MÉDIA |
| RF-005 | A aplicação deve permitir que o usuário simule investimentos futuros, de acordo com diferentes cenários de mercado. | MÉDIA |
| RF-006 | A aplicação deve permitir que o usuário visualize seus investimentos realizados em diferentes corretoras. | ALTA |
| RF-007 | A aplicação deve permitir que o usuário gere a guia de recolhimento e relatórios de demonstrativos de resultados para fins de declaração de imposto de renda. | ALTA |

### Requisitos não Funcionais

| ID | Descrição do Requisito |
|---|---|
| RNF-001 | Usabilidade: a aplicação deve ser fácil de usar e intuitiva, com interface amigável e boa experiência do usuário. |
| RNF-002 | Segurança: a aplicação deve garantir a segurança das informações do usuário, utilizando protocolos de segurança, criptografia e autenticação adequados. |
| RNF-003 | Confiabilidade: a aplicação deve ser confiável, com baixa probabilidade de erros ou falhas. |
| RNF-004 | Performance: a aplicação deve ser rápida e responsiva, com boa performance mesmo em situações de alta carga de uso. |
| RNF-005 | Escalabilidade: a aplicação deve ser capaz de lidar com um grande número de usuários e investimentos cadastrados, sem comprometer sua performance ou segurança. |
| RNF-006 | Manutenibilidade: a aplicação deve ser facilmente mantida e atualizada, com código organizado e documentação clara. |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 07/07/2023 |
|RE-02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend |
|RE-03| A equipe não pode subcontratar o desenvolvimento do trabalho.   |
