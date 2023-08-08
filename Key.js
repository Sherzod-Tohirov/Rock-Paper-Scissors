// import CryptoJs from 'crypto-js';

import * as Crypto from 'crypto'; 

export default class Key {
    
    constructor() {}
    
    hmacGenerate(str, key) {        
        return Crypto.createHmac('sha256', key).update(str.toString()).digest('hex').toUpperCase();
    }
     

    keyGenerate() {
        let hex ='';
        let new_val ='';
        const hex_elements = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        while(hex.length != 64) {
            new_val = hex_elements[Math.round(Math.random() * hex_elements.length)]; 
            if(new_val) {
                hex += new_val;
            }
        }

        return String(hex);
    }
}



















// import sha3_256 from 'js-sha3';
// const createHmac = require('create-hmac');
// hmac = createHmac('sha256', Buffer.from('abc123we'));
// hmac.update("Hello World");
// hmac.digest();