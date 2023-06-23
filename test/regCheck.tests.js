describe('Test Vehicle registration numbers from Cape Town function', function () {

    it('it should return true if the registration number starts with CA 123 908 is from Cape Town', function () {
        assert.equal(isFromCapeTown('CA 123 908'), true);
    });

    it('it should return false if the registration number starts with CJ 123 908 is from Cape Town', function () {
        assert.equal(isFromCapeTown('CJ 123 908'), false);
    });

});

describe('Test Vehicle registration numbers from Gauteng function', function () {

    it('it should return true if the registration number ends with GP is from Gauteng', function () {
        assert.equal(isFromGauteng('DR 45 LR GP'), true);
    });

    it('it should return false if the registration number ends with CJ is from Gauteng', function () {
        assert.equal(isFromGauteng('CJ 123 908'), false);
    });

});

describe('Test Vehicle registration numbers from Limpopo function', function () {

    it('it should return true if the registration number ends with L is from Limpopo', function () {
        assert.equal(isFromLimpopo('KTR 990 L'), true);
    });

    it('it should return false if the registration number ends with N is from Limpopo', function () {
        assert.equal(isFromLimpopo('W 990 N'), false);
    });

});