let ciphers = ["caesar", "vigenere", "hieroglyphics", "morse"]

// Morse Code
function MorseCodeTranslate(morseCode) {
    var ref = { 
      '.-':     'a',
      '-...':   'b',
      '-.-.':   'c',
      '-..':    'd',
      '.':      'e',
      '..-.':   'f',
      '--.':    'g',
      '....':   'h',
      '..':     'i',
      '.---':   'j',
      '-.-':    'k',
      '.-..':   'l',
      '--':     'm',
      '-.':     'n',
      '---':    'o',
      '.--.':   'p',
      '--.-':   'q',
      '.-.':    'r',
      '...':    's',
      '-':      't',
      '..-':    'u',
      '...-':   'v',
      '.--':    'w',
      '-..-':   'x',
      '-.--':   'y',
      '--..':   'z',
      '.----':  '1',
      '..---':  '2',
      '...--':  '3',
      '....-':  '4',
      '.....':  '5',
      '-....':  '6',
      '--...':  '7',
      '---..':  '8',
      '----.':  '9',
      '-----':  '0',
    };
  
    return morseCode
      .split('   ')
      .map(
        a => a
          .split(' ')
          .map(
            b => ref[b]
          ).join('')
      ).join(' ');
  }
  
  var output = MorseCodeTranslate(".-- --- .-. -..   .-- --- .-. -..");
  console.log(output);

// Caesar
function cipherRot(str, amnt) {
  str = str.toUpperCase();
  return str.replace(/[A-Z]/g, rot);

  function rot(correspondance) {
    const charCode = correspondance.charCodeAt();
    //A = 65, Z = 90
    return String.fromCharCode(
            ((charCode + amnt) <= 90) ? charCode + amnt
                                    : (charCode + amnt) % 90 + 64
           );
    
  }
}
console.log(cipherRot("Your Mom", 14))
