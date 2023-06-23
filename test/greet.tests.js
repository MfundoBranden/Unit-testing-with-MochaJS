describe('Test my greet function', function () {
    it("it should return 'Hello, Bob' when called with 'Bob'", function () {
        assert.equal("Hello, Bob", greet("Bob"), "this should not be true");
    });

    it("it should return 'Hello, Jennie' when called with 'Jennie'", function () {
        assert.equal("Hello, Jannie", greet("Jannie"), "this should not be true");
    });

});

