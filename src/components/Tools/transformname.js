 function transformName(name, transformation) {
    return name.split('').map(char => transformation[char.toUpperCase()] || char).join('');
}

const transformations = {
    // Previous transformations...
    russian: {
        'A': 'А', 'B': 'Б', 'C': 'Ц', 'D': 'Д', 'E': 'Е', 'F': 'Ф', 'G': 'Г',
        'H': 'Х', 'I': 'И', 'J': 'Й', 'K': 'К', 'L': 'Л', 'M': 'М', 'N': 'Н',
        'O': 'О', 'P': 'П', 'Q': 'К', 'R': 'Р', 'S': 'С', 'T': 'Т', 'U': 'У',
        'V': 'В', 'W': 'В', 'X': 'Х', 'Y': 'Ы', 'Z': 'З'
    },
    big_russian: {
        'A': 'А', 'B': 'Б', 'C': 'С', 'D': 'Д', 'E': 'Е', 'F': 'Ф', 'G': 'Г',
        'H': 'Н', 'I': 'И', 'J': 'Ж', 'K': 'К', 'L': 'Л', 'M': 'М', 'N': 'Н',
        'O': 'О', 'P': 'П', 'Q': 'К', 'R': 'Р', 'S': 'С', 'T': 'Т', 'U': 'У',
        'V': 'В', 'W': 'Ш', 'X': 'Х', 'Y': 'Ы', 'Z': 'З'
    },
    squiggle1: { // Example of decorative symbols
        'A': 'α', 'B': 'в', 'C': '¢', 'D': '∂', 'E': 'ε', 'F': 'ƒ', 'G': 'g',
        'H': 'н', 'I': 'ι', 'J': 'נ', 'K': 'к', 'L': 'ℓ', 'M': 'м', 'N': 'η',
        'O': 'σ', 'P': 'ρ', 'Q': 'q', 'R': 'я', 'S': 'ѕ', 'T': 'т', 'U': 'υ',
        'V': 'ν', 'W': 'ω', 'X': 'χ', 'Y': 'у', 'Z': 'z'
    },
    squiggle2: { // Another decorative symbol set
        'A': 'ꍏ', 'B': 'ᖘ', 'C': 'ᑢ', 'D': 'ꀷ', 'E': 'ꏂ', 'F': 'Բ', 'G': 'ᘐ',
        'H': 'ꋫ', 'I': '꒒', 'J': 'ᒎ', 'K': 'ꀘ', 'L': '꒒', 'M': 'ꎭ', 'N': 'ꋊ',
        'O': 'ꂦ', 'P': 'ᖘ', 'Q': 'ᖳ', 'R': 'ꋪ', 'S': 'ᔕ', 'T': '꓄', 'U': 'ꀎ',
        'V': '꒦', 'W': 'ꅐ', 'X': 'ꊼ', 'Y': 'ꌩ', 'Z': 'ꁴ'
    },
    asian: {
        'A': 'ㄚ', 'B': '乃', 'C': '匚', 'D': '刀', 'E': '乇', 'F': '下', 'G': '厶',
        'H': '卄', 'I': '工', 'J': '丁', 'K': '口', 'L': 'ㄥ', 'M': '爪', 'N': '几',
        'O': 'ㄖ', 'P': '尸', 'Q': 'ㄒ', 'R': '尺', 'S': '丂', 'T': '丅', 'U': '凵',
        'V': 'リ', 'W': '山', 'X': '乂', 'Y': '丫', 'Z': '乙'
    },
    indian: {
        // Example, assuming some stylistic choices
        'A': 'આ', 'B': 'બ', 'C': 'ચ', 'D': 'દ', 'E': 'એ', 'F': 'ફ', 'G': 'ગ',
        'H': 'હ', 'I': 'ઇ', 'J': 'જ', 'K': 'ક', 'L': 'લ', 'M': 'મ', 'N': 'ન',
        'O': 'ઓ', 'P': 'પ', 'Q': 'ક્યુ', 'R': 'ર', 'S': 'સ', 'T': 'ત', 'U': 'ઉ',
        'V': 'વ', 'W': 'વડોદરા', 'X': 'ક્સ', 'Y': 'ય', 'Z': 'ઝ'
    },
    arabic: {
        'A': 'ا', 'B': 'ب', 'C': 'ج', 'D': 'د', 'E': 'ه', 'F': 'ف', 'G': 'غ',
        'H': 'ح', 'I': 'ي', 'J': 'ج', 'K': 'ك', 'L': 'ل', 'M': 'م', 'N': 'ن',
        'O': 'و', 'P': 'پ', 'Q': 'ق', 'R': 'ر', 'S': 'س', 'T': 'ت', 'U': 'ع',
        'V': 'ڤ', 'W': 'و', 'X': 'اكس', 'Y': 'ي', 'Z': 'ز'
    },
    urdu: {
        'A': 'ا', 'B': 'ب', 'C': 'ث', 'D': 'د', 'E': 'ے', 'F': 'ف', 'G': 'گ',
        'H': 'ھ', 'I': 'ئ', 'J': 'ج', 'K': 'ک', 'L': 'ل', 'M': 'م', 'N': 'ن',
        'O': 'او', 'P': 'پ', 'Q': 'ق', 'R': 'ر', 'S': 'س', 'T': 'ت', 'U': 'ء',
        'V': 'و', 'W': 'و', 'X': 'کس', 'Y': 'ی', 'Z': 'ز'
    },
    // Additional squiggle styles could be added as needed...
};

function generateVariations(name, style, count) {
    let results = [];
    if (!transformations[style]) {
        return [`No style found for: ${style}`]; // If no transformation exists for the style
    }
    for (let i = 0; i < count; i++) {
        let transformedName = transformName(name, transformations[style]);
        results.push(`${style.toUpperCase()}: ${transformedName}`);
    }
    return results;
}





export { transformName, generateVariations, transformations };