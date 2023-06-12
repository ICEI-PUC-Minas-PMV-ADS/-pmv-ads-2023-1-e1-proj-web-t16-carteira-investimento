# Plano de Testes de Software

|Caso de Teste: |CT 001 – Cadastro sem campos completos|
|------|-----------------------------------------|
|Pré-Condições: |Estar na tela de cadastro |
|Procedimentos: |1 O ator deve tentar efetuar cadastro de usuário no sitema deixando **qualquer dos campos** da tela de cadastro **vazio** e clicando no botão “Cadastrar” (neste exemplo o campo senha foi deixado em branco) |
|Resultado esperado: |Mensagem de erro |
|Dados de entrada: |Nome Completo: José Silva; Endereço de e-mail: josesilva@gmail.com; Senha: 123; Confirme sua senha: vazio|
|Resultado Obtido: |Mensagem: "Todos os campos devem ser preenchidos."|

|Caso de Teste: |CT 002 – Cadastro com campos completos|
|------|-----------------------------------------|
|Pré-Condições: |Estar na tela de cadastro |
|Procedimentos: |1 O ator deve tentar efetuar cadastro de usuário no sitema preenchendo corretamente todos os campos da tela de cadastro **vazio** e clicando no botão “Cadastrar”|
|Resultado esperado: |Mensagem de sucesso |
|Dados de entrada: |Nome Completo: José Silva; Endereço de e-mail: josesilva@gmail.com; Senha: 123; Confirme sua senha: 123|
|Resultado Obtido: |Mensagem: "Registro efetuado com sucesso!"|

|Caso de Teste: |CT 003 – Login incorreto|
|------|-----------------------------------------|
|Pré-Condições: |Estar na tela de login |
|Procedimentos: |1 O ator deve tentar efetuar login digitando nome incorreto do usuário (e-mail cadastrado) ou senha incorreta |
|Resultado esperado: |Mensagem de erro |
|Dados de entrada: |Endereço de e-mail: josesilva@gmail.com; Senha: 1234|
|Resultado Obtido: |Mensagem: "E-mail ou senha inválidos!"|

|Caso de Teste: |CT 004 – Login correto|
|------|-----------------------------------------|
|Pré-Condições: |Estar na tela de login |
|Procedimentos: |1 O ator deve tentar efetuar login digitando nome do usuário (e-mail cadastrado) e senha corretos |
|Resultado esperado: |Mensagem de sucesso |
|Dados de entrada: |Endereço de e-mail: josesilva@gmail.com; Senha: 123|
|Resultado Obtido: |Mensagem: "Login efetuado com sucesso!"|

|Caso de Teste: |CT 005 – Acesso não logado|
|------|-----------------------------------------|
|Pré-Condições: |Tentar acessar diretamente quaisquer das páginas internas da aplicação sem estar logado |
|Procedimentos: |1 O ator deve digitar o endereço direto da página interna da aplicação sem estar logado |
|Resultado esperado: |Mensagem de erro |
|Dados de entrada: |http://127.0.0.1:5502/src/home.html|
|Resultado Obtido: |Mensagem: "Acesso restrito a usuários logados."|


<!-- <span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7) -->
