import { MorseCodeService } from '../morse-code.service';
import { EncodeService } from './encode.service';

describe('EncodeService', () => {
  const encodeService = new EncodeService(new MorseCodeService());

  it('can get the correct encoded text from a text without blanks', () => {
    expect(encodeService.encode("HELLO")).toBe('.... . .-.. .-.. ---');
  });

  it('can get the correct encoded text from a text with blanks', () => {
    expect(encodeService.encode("HELLO WORLD")).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
  });
});
