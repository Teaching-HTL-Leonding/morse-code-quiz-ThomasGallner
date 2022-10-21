import { Injectable } from '@angular/core';
import { MorseCodeService } from '../morse-code.service';

@Injectable({
  providedIn: 'root',
})
export class EncodeService {
  constructor(private morseCordeService: MorseCodeService) {}

  public encode(text: string) {
    text = this.validateText(text);
    let result = '';

    for (let letter of text) {
      if (letter === ' ') {
        result += ' / ';
      } else {
        result += this.morseCordeService.getMorseCodeByLetter(letter);
      }

      result += ' ';
    }

    return result;
  }

  private validateText(textToValidate: string): string{
    let validatedText = '';
    textToValidate = textToValidate.trim();
    validatedText = textToValidate.replace(/  +/g, ' ');

    return validatedText;
  }
}
