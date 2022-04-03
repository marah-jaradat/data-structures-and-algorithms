const stackBracket = require("../js/brackets");

describe("testing stack-queue-brackets", () => {
  it("testing if the string is empty", () => {
    let str = "";
    expect(stackBracket(str)).toBeTruthy();
  });

  it("testing wrong bracket", () => {
    let str = "}{][)(";
    expect(stackBracket(str)).toBeFalsy();
  });
  it("testing closing brackets", () => {
    let str = "}])";
    expect(stackBracket(str)).toBeFalsy();
  });
  it("testing openning brackets ", () => {
    let str = "([{";
    expect(stackBracket(str)).toBeFalsy();
  });
});
