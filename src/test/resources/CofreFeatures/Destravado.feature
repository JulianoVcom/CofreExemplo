# language: en
Feature: Destravado
  Como um usuario do cofre
  eu quero saber como o cofre se comporta ao operar com a porta destravada
  para evitar erros triviais

  Scenario: Informar senha com a porta aberta 
    Given que a porta estiver aberta
    And entrei com a string "152336"
    When eu pressionei OK
    Then a mensagem "Feche a porta antes de digitar a senha" deve aparecer

Scenario: Informar um caractere com a porta fechada 
    Given que a porta estiver fechada
    And entrei com "0"
    When eu pressionei OK
    Then o valor "0" deve aparecer no display

Scenario: Gravar senha com a porta fechada 
    Given que a porta estiver fechada
    And entrei com a senha "193566"
    When eu pressionei OK
    Then a mensagem "Senha salva. Cofre trancado" deve aparecer no display
