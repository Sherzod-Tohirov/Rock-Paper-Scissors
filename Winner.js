export default class Winner {
    constructor(){}
    // 1 represents that computer win
    // -1 represents that user win
    winner_list = [     
        {
           computer_choice: "rock",
           user_choice: "paper", 
           result: -1
        },
        {
           computer_choice: "rock",
           user_choice: "scissors", 
           result: 1
        },
        {
           computer_choice: "rock",
           user_choice: "lizard", 
           result: 1
        },
        {
           computer_choice: "rock",
           user_choice: "spock", 
           result: -1
        },
        {
           computer_choice: "rock",
           user_choice: "spock", 
           result: -1
        },
        {
           computer_choice: "paper",
           user_choice: "rock", 
           result: 1
        },
        {
           computer_choice: "paper",
           user_choice: "scissors", 
           result: -1
        },
        {
           computer_choice: "paper",
           user_choice: "lizard", 
           result: -1
        },
        {
           computer_choice: "paper",
           user_choice: "spock", 
           result: 1
        },
        {
           computer_choice: "scissors",
           user_choice: "rock", 
           result: -1
        },
        {
           computer_choice: "scissors",
           user_choice: "paper", 
           result: 1
        },
        {
           computer_choice: "scissors",
           user_choice: "lizard", 
           result: 1
        },
        {
           computer_choice: "scissors",
           user_choice: "spock", 
           result: -1
        },
        {
           computer_choice: "lizard",
           user_choice: "rock", 
           result: -1
        },
        {
           computer_choice: "lizard",
           user_choice: "paper", 
           result: 1
        },
        {
           computer_choice: "lizard",
           user_choice: "scissors", 
           result: -1
        },
        {
           computer_choice: "lizard",
           user_choice: "spock", 
           result: 1
        },
        {
           computer_choice: "spock",
           user_choice: "rock", 
           result: 1
        },
        {
           computer_choice: "spock",
           user_choice: "paper", 
           result: -1
        },
        {
           computer_choice: "spock",
           user_choice: "scissors", 
           result: 1
        },
        {
           computer_choice: "spock",
           user_choice: "lizard", 
           result: -1
        }
     ];

    getWinnerData() {
        return this.winner_list; 
    }


}