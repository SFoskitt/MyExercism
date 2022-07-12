import { throws } from "assert";

class SimpleCipher {
    key : string; 
    encode( key : string ) {
        this.key = 'ftcrcritgisbihftuoqwgayktpoffxpcociqwmmiwradxbplyxvyimmlpmsslpucnphamxvivfhsqqcktqzrrhuuhfmxguivyqcsz';
        if(!key.match(/^[a-z]+$/)) return new Error('Bad key');

        return '';
    }

    decode( decodeThis : string ) {

        return decodeThis;
    }

    generateKey(){
        let a = 'abcdefghijklmnopqrstuvwxyz';
        let generatedKey = Array(101).join().split(',').map(function() { return a.charAt(Math.floor(Math.random() * a.length)); }).join('');
        return generatedKey;
    }
}

export default SimpleCipher
