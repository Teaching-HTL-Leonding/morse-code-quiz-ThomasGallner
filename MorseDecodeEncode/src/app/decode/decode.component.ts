import { Component } from '@angular/core';
import { DecodeService } from './decode.service';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css']
})
//morse -> text
export class DecodeComponent {
  public input: string;
  public result: string;

  constructor(private decodeService: DecodeService) {
    this.input = '';
    this.result = '';
  }

  public onDecodeBtn(){
    this.result = this.decodeService.decode(this.input);
  }

  public isValidInput(): boolean {
    if (this.input.trim().length > 0) {
      for (let letter of this.input) {
        if (!(letter === '.' || letter === '/' || letter === '-' || letter === ' ')) {
          return false;
        }
      }

      return true;
    }

    return false;
  }
}
