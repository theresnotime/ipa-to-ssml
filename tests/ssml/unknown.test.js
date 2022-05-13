const ipaToSSML = require('./../../dist/index');

test('IPA for hello (/həˈləʊ/) to SSML (unknown)', () => {
    async function unknownVariant() {
        expect(
            await ipaToSSML.convertToSSML('hello', '/həˈləʊ/', 'unknown')
        ).toThrow(
            'Could not read file - unknown variant'
        );
    }
});