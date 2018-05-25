# language: en
Feature: Validacao
  Como um usuario do cofre
  eu quero saber se os numeros informados para senha são numeros validos
  para evitar erros simples

  Scenario: Informar caracteres numericos
    Given que eu entrei com "123"
    Then o resultado deve ser True

  Scenario: Informar caracteres nao numericos
    Given que eu entrei com "123aaaa"
    Then o resultado deve ser False

  Scenario: Informar senha valida
    Given que eu entrei com "123456"
    Then o resultado deve ser True

  Scenario: Informar senha não valida
    Given que eu entrei com "12f45a"
    Then o resultado deve ser False
