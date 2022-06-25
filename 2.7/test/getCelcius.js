const chai = require("chai");
const expect = chai.expect;
const test = require("../src/getCelcius");
describe("getCelcius", () => {
  it("should convert farenheit to celcius for all values in an array", () => {
    expect(test.getCelcius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5]);
    expect(test.getCelcius([-58, -22, -4, 14])).to.deep.equal([-50, -30, -20, -10]);
    expect(test.getCelcius([104, 122, 158, 176])).to.deep.equal([40, 50, 70, 80]);
  });
});

