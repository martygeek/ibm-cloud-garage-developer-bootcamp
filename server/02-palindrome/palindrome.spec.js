describe('the palindrome canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });
//
//   function isPalindrome(phrase) {
//     if (phrase.trim().length === 0) return false;
//     return phrase === phrase.split('').reverse().join('');
//   }
//
  describe('a palindrome should be', () => {
    it('true for mom');
    it('false for dude');
    it('false for ""');
    it('true for a');
    it('false for he eh');
    it('false for home sweet home');
    it('false for "     "');
  });
//
//     it('is not racecars', () => {
//       isPalindrome('racecars').should.be.false();
//     });
//
//     it('is not race car', () => {
//       isPalindrome('race car').should.be.false();
//     });
//
//     it('"   " is not a palindrome   ', () => {
//       isPalindrome('   ').should.be.false();
//     });
//
//     it('"" is not a palindrome', () => {
//       isPalindrome('').should.be.false();
//     });
//
//     it('is "mom dad mom"', () => {
//       isPalindrome('mom dad mom').should.be.true();
//     });
});
