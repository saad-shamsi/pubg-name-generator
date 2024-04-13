function randomSquiggleEffect(name) {
    const squiggleStyles = [
        // Mapping for each squiggle style
        { // SQUIGGLE
            'a': 'ค', 'b': '๒', 'c': 'ς', 'd': '๔', 'e': 'є', 'f': 'Ŧ', 'g': 'ﻮ',
            'h': 'ђ', 'i': 'เ', 'j': 'ן', 'k': 'к', 'l': 'ɭ', 'm': '๓', 'n': 'ภ',
            'o': '๏', 'p': 'ק', 'q': 'ợ', 'r': 'г', 's': 'ร', 't': 'Շ', 'u': 'ย',
            'v': 'ש', 'w': 'ฬ', 'x': 'א', 'y': 'ץ', 'z': 'չ'
        },
        // SQUIGGLE2 and so forth...
        { // SQUIGGLE2
            'a': 'α', 'b': 'Ⴆ', 'c': 'ƈ', 'd': 'ԃ', 'e': 'ҽ', 'f': 'ϝ', 'g': 'ɠ',
            'h': 'ԋ', 'i': 'ι', 'j': 'ʝ', 'k': 'ƙ', 'l': 'ʅ', 'm': 'ɱ', 'n': 'ɳ',
            'o': 'σ', 'p': 'ρ', 'q': 'ϙ', 'r': 'ɾ', 's': 'ʂ', 't': 'ƚ', 'u': 'υ',
            'v': 'ʋ', 'w': 'ɯ', 'x': 'x', 'y': 'ყ', 'z': 'ȥ'
        },
        
        {
            'a': 'ä', 'b': 'ḅ', 'c': 'ç', 'd': 'ḍ', 'e': 'ë', 'f': 'ḟ', 'g': 'ġ',
            'h': 'ḧ', 'i': 'ï', 'j': 'ĵ', 'k': 'ḳ', 'l': 'ḷ', 'm': 'ṃ', 'n': 'ṇ',
            'o': 'ö', 'p': 'ṗ', 'q': 'q̈', 'r': 'ṛ', 's': 'ṡ', 't': 'ṭ', 'u': 'ü',
            'v': 'ṿ', 'w': 'ẅ', 'x': 'ẍ', 'y': 'ÿ', 'z': 'ẓ'
        },
        // SQUIGGLE18
        {
            'a': 'α', 'b': 'в', 'c': '¢', 'd': '∂', 'e': 'ε', 'f': 'ғ', 'g': 'ɢ',
            'h': 'н', 'i': 'ι', 'j': 'נ', 'k': 'к', 'l': 'ℓ', 'm': 'м', 'n': 'η',
            'o': 'σ', 'p': 'ρ', 'q': 'φ', 'r': 'я', 's': 's', 't': 'τ', 'u': 'υ',
            'v': 'ν', 'w': 'ω', 'x': 'χ', 'y': 'ү', 'z': 'z'
        },
        // SQUIGGLE19
        {
            'a': 'Ⓐ', 'b': 'Ⓑ', 'c': 'Ⓒ', 'd': 'Ⓓ', 'e': 'Ⓔ', 'f': 'Ⓕ', 'g': 'Ⓖ',
            'h': 'Ⓗ', 'i': 'Ⓘ', 'j': 'Ⓙ', 'k': 'Ⓚ', 'l': 'Ⓛ', 'm': 'Ⓜ', 'n': 'Ⓝ',
            'o': 'Ⓞ', 'p': 'Ⓟ', 'q': 'Ⓠ', 'r': 'Ⓡ', 's': 'Ⓢ', 't': 'Ⓣ', 'u': 'Ⓤ',
            'v': 'Ⓥ', 'w': 'Ⓦ', 'x': 'Ⓧ', 'y': 'Ⓨ', 'z': 'Ⓩ'
        },
    ];

    // Randomly pick one style
    const styleIndex = Math.floor(Math.random() * squiggleStyles.length);
    const selectedStyle = squiggleStyles[styleIndex];

    // Apply the selected style to the name
    const styledName = name.toLowerCase().split('').map(char => selectedStyle[char] || char).join('');
    return styledName;
}

export { randomSquiggleEffect };