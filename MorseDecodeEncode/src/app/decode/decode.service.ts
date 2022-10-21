import { Injectable } from '@angular/core';
import { MorseCodeService } from '../morse-code.service';

@Injectable({
  providedIn: 'root',
})
export class DecodeService {
  constructor(private morseCordeService: MorseCodeService) {}

  public decode(morseCodeInput: string) {
    let result = '';
    let morseCodeLetter = '';

    // for (let char of morseCodeInput) {
    //   if(char === ' '){
    //     result += this.morseCordeService.getLetterByMorseCode(morseCodeLetter);

    //     morseCodeLetter = '';
    //   }else if(char === '.' || char === '/' || char === '-'){
    //     morseCodeLetter += char;
    //   }
    // }
    // result += this.morseCordeService.getLetterByMorseCode(morseCodeLetter);

    for (let i = 0; i < morseCodeInput.length; i++) {
      let char = morseCodeInput[i];
      if (char === ' ') {
        result += this.morseCordeService.getLetterByMorseCode(morseCodeLetter);

         if(morseCodeInput[i+1] === '/' && morseCodeInput[i+2] === ' '){
          morseCodeLetter = ' / ';
          result += this.morseCordeService.getLetterByMorseCode(morseCodeLetter)
        }

        morseCodeLetter = '';
      } else if (char === '.' || char === '-') {
        morseCodeLetter += char;
      }
    }
    result += this.morseCordeService.getLetterByMorseCode(morseCodeLetter);

    return result;
  }
}
