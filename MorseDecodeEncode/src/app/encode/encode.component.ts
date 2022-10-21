import { Component } from '@angular/core';
import { EncodeService } from './encode.service';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css'],
})
export class EncodeComponent {
  public input: string;
  public result: string;

  constructor(private encodeService: EncodeService) {
    this.input = '';
    this.result = '';
  }

  public onEncodeBtn() {
    this.result = this.encodeService.encode(this.input);
  }

  public isValidInput(): boolean {
    if (this.input.trim().length > 0) {
      for (let letter of this.input) {
        if (!(letter >= 'A' && letter <= 'Z' || letter === ' ')) {
          return false;
        }
      }

      return true;
    }

    return false;
  }
}
