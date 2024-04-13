// GlitchNameStyles.js
function randomGlitchEffect(name) {
    const combiningMarks = [
        '\u030D', '\u030E', '\u0304', '\u0305',
        '\u033F', '\u0311', '\u0306', '\u0310',
        '\u0352', '\u0357', '\u0351', '\u0307',
        '\u0308', '\u030A', '\u0342', '\u0343',
        '\u0344', '\u034A', '\u034B', '\u034C',
        '\u0303', '\u0302', '\u030C', '\u0350',
        '\u0300', '\u0301', '\u030B', '\u030F',
        '\u0312', '\u0313', '\u0314', '\u033D',
        '\u0309', '\u0363', '\u0364', '\u0365',
        '\u0366', '\u0367', '\u0368', '\u0369',
        '\u036A', '\u036B', '\u036C', '\u036D',
        '\u036E', '\u036F', '\u033E', '\u035B',
        '\u0346', '\u031A'
    ];

    // Apply random combining marks to each character
    const glitchedName = name.split('').map(char => {
        const marksCount = Math.floor(Math.random() * 4) + 1; // Randomly choose up to 4 marks per character
        let glitchedChar = char;
        for (let i = 0; i < marksCount; i++) {
            glitchedChar += combiningMarks[Math.floor(Math.random() * combiningMarks.length)];
        }
        return glitchedChar;
    }).join('');

    return glitchedName;
}

export { randomGlitchEffect };