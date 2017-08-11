describe('the canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  let fahrenheit2celsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
  let celsius2fahrenheit = (celsius) => (celsius * 1.8) + 32;
  describe('fahrenheit2celsius', () => {
    it('fahrenheit2celsius returns 0 given 32', () => {
      fahrenheit2celsius(32).should.equal(0);
    });

    it('fahrenheit2celsius returns 10 given 50', () => {
      fahrenheit2celsius(50).should.equal(10);
    });

    it('fahrenheit2celsius returns 100 given 212', () => {
      fahrenheit2celsius(212).should.equal(100);
    });
  });
  describe('celsius2fahrenheit', () => {
    it('celsius2fahrenheit returns 32 given 0', () => {
      celsius2fahrenheit();
    });
  });
});

