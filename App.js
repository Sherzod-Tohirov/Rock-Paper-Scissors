import Key from './Key.js';
import Help from './Help.js';
import Menu from './Menu.js';
import Winner from './Winner.js';
import Prompt from 'prompt-sync';
class App {
  constructor() {}
  key = new Key();
  help = new Help();
  menu = new Menu();
  winner = new Winner();
  run() {
    const prompt = new Prompt();
    let moves_three = ["rock", "paper", "scissors"];
    let moves_five = ["rock", "paper", "scissors", "lizard", "spock"];
    let args = process.argv.slice(2);
    let computer_choice;
   //  Stop the process if there is no arguments 
    if(args.length == 0) {
      console.log("Please give arguments !");
      return;
    }
    // Computer random choice
    if(args.length == 3) {
       computer_choice = moves_three[Math.round(Math.random() * args.length)];
      }else if(args.length == 5) {
         computer_choice = moves_five[Math.round(Math.random() * args.length)];
      }else {
         console.log("Number of given arguments can be 3 or 5 only !");
         return;
      }
    // Generate key for computer choice
    let new_key = this.key.keyGenerate();
    // Generate Hmac for computer choice
    let hmac = this.key.hmacGenerate(computer_choice, new_key);
    console.log(`Hmac: ${hmac}`);
    this.menu.showMenu(args);
    let user_choice = prompt("Enter your choice: ");
    this.validate(args, user_choice, hmac, this.menu, prompt);
   
    while (user_choice == '?') {
      this.help.showHelpTable(args);
      console.log(`Hmac: ${hmac}`);
      this.menu.showMenu(args);
      user_choice = prompt("Enter your choice: ");
      this.validate(args, user_choice, hmac, this.menu, prompt);
    }
    if (user_choice == '0') {
      console.log("You have exited !");
      return;
    }else {
      user_choice = args[Number(user_choice) - 1].toLowerCase();
    }
    
    let res = this.findWinner(computer_choice, user_choice, args, this.winner);
    if(!res) {
      return;
    }

    console.log(`Hmac key: ${new_key} `);
    
    return;
  }

    validate(args, user_choice, hmac, menu, prompt) {
      if(args.length == 3) {
         while (true) {
            if (user_choice != '1' && user_choice != '2' && user_choice != '3' && user_choice != '0' && user_choice != '?') {
            console.log('Wrong Choice ! ');
            console.log('Try with the numbers or (?) in the menu only ! ');
            console.log(`Hmac: ${hmac}`);
            this.menu.showMenu(args);
            user_choice = prompt("Enter your choice: ");
            } else {
            break;
            }
         }
        return;
      } else if(args.length == 5) {
         while (true) {
            if (user_choice != '1' && user_choice != '2' && user_choice != '3' && user_choice != '4' && user_choice != '5' && user_choice != '0' && user_choice != '?') {
            console.log('Wrong Choice ! ');
            console.log('Try with the numbers or (?) in the menu only ! ');
            console.log(`Hmac: ${hmac}`);
            this.menu.showMenu(args);
            user_choice = prompt("Enter your choice: ");
            } else {
            break;
            }
         }
        return;
      }else {
         console.log("Something went wrong in (validate) part");
      }
  }

  findWinner(computer_choice, user_choice, args, winner) {

         if(computer_choice == user_choice) {
            console.log(`Your move: ${user_choice}`);
            console.log(`Computer move: ${computer_choice}`);
            console.log('Draw !');
            return;
         }
         let winner_list = winner.getWinnerData();
         let res = winner_list.find(item => {
            return item.computer_choice == computer_choice && item.user_choice == user_choice;
         });
         // 1 represents that computer win
         // -1 represents that user win
         if(!res) {
            console.log("Some of your arguments are incorrect !");
            console.log("Try again with right arguments !");
            return false;
         }
         console.log(`Your move: ${user_choice}`);
         console.log(`Computer move: ${computer_choice}`);
         if(res.result == 1) {
            console.log("Computer win !");
         }else if(res.result == -1) {
            console.log("You win !");
         }else {
            console.log("Something went wrong in (find winner) part");
         }

         return;
  }

}

const app = new App();

app.run();