describe('the canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  let fahrenheit2celsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
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
});

