describe('Test How many years ago function', function () {

    it('it should return true if the registration number ends with L is from Limpopo', function () {
        assert.equal(isFromLimpopo('KTR 990 L'), true);
    });

    it('it should return false if the registration number ends with N is from Limpopo', function () {
        assert.equal(isFromLimpopo('W 990 N'), false);
    });

});