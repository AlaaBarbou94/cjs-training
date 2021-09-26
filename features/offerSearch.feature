@offering
@search
Feature: Offering Search
  In order to use the search in the offer
  As a user
  I want to find matches or competitions and access to the pages and their content

  @noResult
  Scenario: No result found
    Given a user coming to Betclic
    When the user searches matches or competitions with invalid data
      | regul | input     | expectedTitle   | expectedDescription                                                  |
      #we fix this by deleting an escapement between the ? and the word Peut
      | fr    | Réverbère | Pas de résultat | Est-ce un match ou une compétition ?Peut être une faute de frappe ? |
    Then the user founds no matches or competitions


