const ipaToSSML = require('./../../dist/index');

const expected = 
`<?xml version="1.0"?>
<speak version="1.1"
    xmlns="http://www.w3.org/2001/10/synthesis"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.w3.org/2001/10/synthesis
        http://www.w3.org/TR/speech-synthesis11/synthesis.xsd"
    xml:lang="en-US">
    <phoneme alphabet="ipa" ph="/həˈləʊ/">hello</phoneme>
</speak>`;

test('IPA for hello (/həˈləʊ/) to SSML (polly)', async () => {
    expect(
        await ipaToSSML.convertToSSML('hello', '/həˈləʊ/', 'polly')
    ).toBe(
        expected
    );
});