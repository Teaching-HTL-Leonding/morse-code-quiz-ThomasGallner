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

    for (let i = 0; i < text.length; i++) {
      result += this.morseCordeService.getMorseCodeByLetter(text[i]);
      if (i !== text.length - 1) {
        result += ' ';
      }
    }

    return result;
  }

  private validateText(textToValidate: string): string {
    let validatedText = '';
    textToValidate = textToValidate.trim();
    validatedText = textToValidate.replace(/  +/g, ' ');

    return validatedText;
  }
}
