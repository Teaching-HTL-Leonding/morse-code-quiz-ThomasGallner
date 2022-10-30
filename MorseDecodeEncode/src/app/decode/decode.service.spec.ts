import { MorseCodeService } from '../morse-code.service';

import { DecodeService } from './decode.service';

describe('DecodeService', () => {
  describe('EncodeService', () => {
    const decodeService = new DecodeService(new MorseCodeService());

    it('can get the correct decoded text, that should contain no blanks', () => {
      expect(decodeService.decode('.... . .-.. .-.. ---')).toBe('HELLO');
    });

    it('can get the correct encoded text from a text, that should contain blanks', () => {
      expect(decodeService.decode('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')).toBe('HELLO WORLD');
    });
  });
});
