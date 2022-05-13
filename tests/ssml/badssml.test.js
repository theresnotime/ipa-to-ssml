const ipaToSSML = require('./../../dist/index');

const ssml = 
`<?xml version="1.0"?>
<speak version="1.1">
    <phoneme alphabet="ipa" ph="/həˈləʊ/">h
</speak>`;

test('IPA for hello (/həˈləʊ/) to SSML (broken SSML)', async () => {
    async function brokenSSML() {
        expect(
            await ipaToSSML.validateSSML(ssml)
        ).toThrow(
            'Generated SSML is invalid'
        );
    }
});