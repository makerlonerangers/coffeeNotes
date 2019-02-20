const matchers = value => ({
  toEqual(expectation) {
    console.log(value == expectation);
  },
  toContain(expectation) {
    console.log(value.includes(expectation));
  }
});
