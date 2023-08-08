export default class Menu {
	constructor() {}
	showMenu(moves) {
       let counter = 0;
       console.log("Available moves:");
       for (let move of moves) {
        ++counter;
        console.log(`${counter} - ${move}`);
       }
       console.log('0 - exit');
       console.log('? - help');
	} 
}

