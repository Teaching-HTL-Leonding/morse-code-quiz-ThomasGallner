import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MorseCodeService {
  private morseCode: { [id: string]: string } = {};

  constructor() {
    this.morseCode = {
      'A': '.-',
      'B': '-...',
      'C': '-.-.',
      'D': '-..',
      'E': '.',
      'F': '..-.',
      'G': '--.',
      'H': '....',
      'I': '..',
      'J': '.---',
      'K': '-.-',
      'L': '.-..',
      'M': '--',
      'N': '-.',
      'O': '---',
      'P': '.--.',
      'Q': '--.-',
      'R': '.-.',
      'S': '...',
      'T': '-',
      'U': '..-',
      'V': '...-',
      'W': '.--',
      'X': '-..-',
      'Y': '-.--',
      'Z': '--..',
      ' ': '/'
    };
  }

  public getMorseCodeByLetter(letter: string): string {
    return this.morseCode[letter];
  }

  public getLetterByMorseCode(morseCodeInput: string): string {
    let result = '';
    for (let key in this.morseCode) {
      let value = this.morseCode[key];
      if (value === morseCodeInput) {
        result += key;
      }
    }

    return result;
  }
}
