Feature: Rock Paper Scissor

  Scenario: Having a Match
    Given "Player1" with score 0
    And "Player2" with score 0
    When "Player1" play "scissor"
    And "Player2" play "rock"
    Then "Player1" should have score 0
    And "Player2" should have score 1