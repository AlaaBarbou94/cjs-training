@footer
Feature: Footer
  In order to provide some mandatory information to the user in the footer
  As a user
  I want to see footer mandatory elements and access to the pages and their content

  @linksAndPages
  Scenario: Links and pages content
    Given a user coming to Betclic
    When the user goes to the link in footer
      | regul | linkName          | button              | expectedDescription                                                                                                                                                                                                                                                                                                                                                                           |
      | fr    | about             | À propos de Betclic | Betclic possède une offre de paris sportifs complète sur l'ensemble des sports autorisés par l'ANJ.\nVous pouvez également miser sur toutes les courses hippiques françaises et sur une sélection des meilleures courses internationales.\nEnfin, Betclic vous propose également l'un des logiciels poker les plus fiables du marché. Jouez sur nos tables facile d'accès et 100% sécurisées. |
      | fr    | responsibleGaming | Jeu responsable     | La pratique des jeux d’argent est récréative quand elle est avant tout une source de divertissement et d’amusement.                                                                                                                                                                                                                                                                           |
      # we add here a step for terms and conditions check
      | fr    | termsAndConditions | Conditions générales d'utilisation | Les présentes Conditions Générales d’Utilisation                                                                                                                                                                                                                                                                                                                                                                               |
    Then the user sees text content in the page
