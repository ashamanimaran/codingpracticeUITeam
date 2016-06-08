describe("verify string functions in myMethods", function () {
    var myMethods=require('../src/app');
    it("should echo input", function () {
        var testObj = new myMethods();
        var result = testObj.echo("Hello");
        expect(result).toBe("Hello");
    });
    it("should capitalize input", function () {
        var testObj = new myMethods();
        var result = testObj.capitalize("Hello");
        expect(result).toBe("HELLO");
    });
    it("should lowercase input", function () {
        var testObj = new myMethods();
        var result = testObj.lowercase("Hello");
        expect(result).toBe("hello");
    });
});