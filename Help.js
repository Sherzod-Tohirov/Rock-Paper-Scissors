export default class Help {
    constructor() {}
  
    showHelpTable(args) {
   
      if (args.length == 3) {
        let list = {
          Computer_Rock: {
            User_Rock: 'Draw',
            User_Paper: 'Win',
            User_Scissors: 'Lose'
          },
          Computer_Paper: {
            User_Rock: 'Lose',
            User_Paper: 'Draw',
            User_Scissors: 'Win'
          },
          Computer_Scissors: {
            User_Rock: 'Win',
            User_Paper: 'Lose',
            User_Scissors: 'Draw'
          }
        }
        console.table(list);
      }
  
      else if (args.length == 5) {
        let list = {
          Computer_Rock: {
            User_Rock: 'Draw',
            User_Paper: 'Win',
            User_Scissors: 'Lose',
            User_Lizard: 'Lose',
            User_Spock: 'Win'
          },
          Computer_Paper: {
            User_Rock: 'Lose',
            User_Paper: 'Draw',
            User_Scissors: 'Win',
            User_Lizard: 'Win',
            User_Spock: 'Lose'
          },
          Computer_Scissors: {
            User_Rock: 'Win',
            User_Paper: 'Lose',
            User_Scissors: 'Draw',
            User_Lizard: 'Lose',
            User_Spock: 'Win'
          },
          Computer_Lizard: {
            User_Rock: 'Win',
            User_Paper: 'Lose',
            User_Scissors: 'Win',
            User_Lizard: 'Draw',
            User_Spock: 'Lose'
          },
          Computer_Spock: {
            User_Rock: 'Lose',
            User_Paper: 'Win',
            User_Scissors: 'Lose',
            User_Lizard: 'Win',
            User_Spock: 'Draw'
          }
        }
        console.table(list);
      }else {
        console.log("Something went wrong !");
      }
  
    }
  }
