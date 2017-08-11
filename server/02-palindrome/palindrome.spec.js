/* eslint-disable no-trailing-spaces */
describe('the palindrome canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  function isPalindrome(word) {
    if (word.trim().length < 1) {
      return false;
    } else {
      return word === word.split('').reverse().join('');
    }
  }

  describe('a palindrome should be', () => {
    it('true for mom', () => {
      isPalindrome('mom').should.be.true();
    });

    it('false for dude', () => {
      isPalindrome('dude').should.be.false();
    });

    it('false for ""', () => {
      isPalindrome('').should.be.false();
    });

    it('true for a', () => {
      isPalindrome('a').should.be.true();
    });

    it('true for he eh', () => {
      isPalindrome('he eh').should.be.true();
    });

    it('false for home sweet home', () => {
      isPalindrome('home sweet home').should.be.false();
    });

    it('false for "     "', () => {
      isPalindrome('"    "').should.be.true();
    });
  });
});
