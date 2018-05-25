# language: en
Feature: Travado
  Como um usuario do cofre
  eu quero saber como o cofre se comporta ao informar numero de entrada
  para evitar erros simples

  Scenario: Informar um numero diferente do esperado 123456
    Given que eu inicializei o cofre
    And entrei com argumentoA 1
    And entrei com argumentoB 2
    And entrei com argumentoC 3
    And entrei com argumentoD 4
    And entrei com argumentoE 6
    And entrei com argumentoF 6
    When eu pressionei OK
    Then a mensagem "senha errada. Tente novamente" deve aparecer

  Scenario: Informar um numero menor do que o minimo esperado
    Given que eu inicializei o cofre
    And entrei com argumentoA 1
    And entrei com argumentoB 2
    When eu pressionei OK
    Then a mensagem "senha errada. Tente novamente" deve aparecer

  Scenario: Informar um numero igual ao esperado 123456
    Given que eu inicializei o cofre
    And entrei com argumentoA 1
    And entrei com argumentoB 2
    And entrei com argumentoC 3
    And entrei com argumentoD 4
    And entrei com argumentoE 5
    And entrei com argumentoF 6
    When eu pressionei OK
    Then Cofre é destravado
    And a mensagem "senha correta. Cofre aberto" deve aparecer
