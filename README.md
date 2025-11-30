# S206_L1
Códigos feitos ao longo das aulas de laboratória da disciplina de Qualidade de Software.

A ferramenta utilizada para a realização de teste de UI (Testes de Interface de Usuário) é a Cypress. Os relatórios estão sendo criados pelo muchawesome.

Para os testes de API Rest, a ferramenta é a Postman e os relatórios são criados a partir do Newman. Para gerar os relatórios newman, é só usar o comando "newman run "nome_da_coleção" -e "nome_do_ambiente" -r htmlextra" no cmd, dentro da pasta que você deseja que o newman crie os relatórios.

Durante a realização da Lista 2, foram utilizadas as APIs Reqres e JSONPlaceholder para o desenvolvimento de casos de teste de APIs na ferramenta Postman.

1: Quantas suítes de testes você desenvolveu?
Resposta: Duas suítes de teste, uma para a Reqres e a outra para JSONPlaceholder.

2: Os testes desenvolvidos são manuais ou automatizados?
Resposta: Quando executados no Postman, os testes são manuais, mas com auxílio do Newman, é possível automatiza-los.

3: Onde os testes se localizam na pirâmide apresentada?
Resposta: Teste de API se localizam na camada intermediária da pirâmide.

4: Os testes desenvolvidos são funcionais ou não-funcionais?
Resposta: São todos funcionais, pois validam comportamentos das APIs REST.

5: Alguns dos testes de desenvolvidos são testes Fim-a-Fim (End-To-End)?
Resposta: Não, todos são testes isolados de endpoints para validar a maneira como as APIs lidam com as requisições dos clientes.

6: O que se deve fazer para que os testes desenvolvidos funcionem em modo regressão?
Resposta: É preciso que eles sejam executados pelo Newman, com ambientes de variáveis limpas e com um script seguindo boas práticas de programação, a fim de garantir que os dados não entrem em colizão.