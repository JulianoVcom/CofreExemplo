$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/CofreFeatures/Destravado.feature");
formatter.feature({
  "name": "Destravado",
  "description": "  Como um usuario do cofre\n  eu quero saber como o cofre se comporta ao operar com a porta destravada\n  para evitar erros triviais",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Informar senha com a porta aberta",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que a porta estiver aberta",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoStep.que_a_porta_estiver_aberta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com a string \"152336\"",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.entrei_com_a_string(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionei OK",
  "keyword": "When "
});
formatter.match({
  "location": "TravadoStep.eu_pressionei_OK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem \"Feche a porta antes de digitar a senha\" deve aparecer",
  "keyword": "Then "
});
formatter.match({
  "location": "TravadoStep.a_mensagem_deve_aparecer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Informar um caractere com a porta fechada",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que a porta estiver fechada",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoStep.que_a_porta_estiver_fechada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.entrei_com(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionei OK",
  "keyword": "When "
});
formatter.match({
  "location": "TravadoStep.eu_pressionei_OK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o valor \"0\" deve aparecer no display",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.o_valor_deve_aparecer_no_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Gravar senha com a porta fechada",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que a porta estiver fechada",
  "keyword": "Given "
});
formatter.match({
  "location": "DestravadoStep.que_a_porta_estiver_fechada()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com a senha \"193566\"",
  "keyword": "And "
});
formatter.match({
  "location": "DestravadoStep.entrei_com_a_senha(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionei OK",
  "keyword": "When "
});
formatter.match({
  "location": "TravadoStep.eu_pressionei_OK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem \"Senha salva. Cofre trancado\" deve aparecer no display",
  "keyword": "Then "
});
formatter.match({
  "location": "DestravadoStep.a_mensagem_deve_aparecer_no_display(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/CofreFeatures/Travado.feature");
formatter.feature({
  "name": "Travado",
  "description": "  Como um usuario do cofre\n  eu quero saber como o cofre se comporta ao informar numero de entrada\n  para evitar erros simples",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Informar um numero diferente do esperado 123456",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que eu inicializei o cofre",
  "keyword": "Given "
});
formatter.match({
  "location": "TravadoStep.que_eu_inicializei_o_cofre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoA 1",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoA(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoB 2",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoB(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoC 3",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoC(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoD 4",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoD(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoE 6",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoE(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoF 6",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoF(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionei OK",
  "keyword": "When "
});
formatter.match({
  "location": "TravadoStep.eu_pressionei_OK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem \"senha errada. Tente novamente\" deve aparecer",
  "keyword": "Then "
});
formatter.match({
  "location": "TravadoStep.a_mensagem_deve_aparecer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Informar um numero menor do que o minimo esperado",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que eu inicializei o cofre",
  "keyword": "Given "
});
formatter.match({
  "location": "TravadoStep.que_eu_inicializei_o_cofre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoA 1",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoA(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoB 2",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoB(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionei OK",
  "keyword": "When "
});
formatter.match({
  "location": "TravadoStep.eu_pressionei_OK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem \"senha errada. Tente novamente\" deve aparecer",
  "keyword": "Then "
});
formatter.match({
  "location": "TravadoStep.a_mensagem_deve_aparecer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Informar um numero igual ao esperado 123456",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que eu inicializei o cofre",
  "keyword": "Given "
});
formatter.match({
  "location": "TravadoStep.que_eu_inicializei_o_cofre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoA 1",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoA(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoB 2",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoB(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoC 3",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoC(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoD 4",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoD(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoE 5",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoE(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com argumentoF 6",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.entrei_com_argumentoF(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionei OK",
  "keyword": "When "
});
formatter.match({
  "location": "TravadoStep.eu_pressionei_OK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Cofre é destravado",
  "keyword": "Then "
});
formatter.match({
  "location": "TravadoStep.cofre_é_destravado()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem \"senha correta. Cofre aberto\" deve aparecer",
  "keyword": "And "
});
formatter.match({
  "location": "TravadoStep.a_mensagem_deve_aparecer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/CofreFeatures/Validacao.feature");
formatter.feature({
  "name": "Validacao",
  "description": "  Como um usuario do cofre\n  eu quero saber se os numeros informados para senha são numeros validos\n  para evitar erros simples",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Informar caracteres numericos",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que eu entrei com \"123\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ValidacaoStep.que_eu_entrei_com(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado deve ser True",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidacaoStep.o_resultado_deve_ser_True()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Informar caracteres nao numericos",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que eu entrei com \"123aaaa\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ValidacaoStep.que_eu_entrei_com(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado deve ser False",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidacaoStep.o_resultado_deve_ser_False()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Informar senha valida",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que eu entrei com \"123456\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ValidacaoStep.que_eu_entrei_com(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado deve ser True",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidacaoStep.o_resultado_deve_ser_True()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Informar senha não valida",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que eu entrei com \"12f45a\"",
  "keyword": "Given "
});
formatter.match({
  "location": "ValidacaoStep.que_eu_entrei_com(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado deve ser False",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidacaoStep.o_resultado_deve_ser_False()"
});
formatter.result({
  "status": "passed"
});
});