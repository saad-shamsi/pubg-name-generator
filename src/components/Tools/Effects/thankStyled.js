function randomThankyouEffect(name, styleIndex = null) {
    const thankyouStyles = [
        (name) => name.split('').map(c => `꜍${c}꜉`).join(''),
        (name) => `(*ˊᗜˋ*)/${name.split('').map(c => `${c}҉`).join('')}*`,
        (name) => `(*ゝω・)ﾉ${name.split('').map(c => `${c}͛⦚`).join('')}`,
        (name) => `＼(´∀｀●)／${name.split('').map(c => `${c}♥`).join('')}`,
        (name) => `<(_ _*)> ${name.split('').map(c => `${c}¢`).join('')}`,
        (name) => `★⌒(●ゝω・)ｂ${name.split('').map(c => `${c}̼`).join('')}`,
        (name) => `ﾟ･:,｡★＼(^-^ )♪${name.split('').map(c => `${c}₵`).join('')}♪( ^-^)/★,｡･:･ﾟ`,
        (name) => `+｡:.ﾟヽ(*´∀)ﾉﾟ${name.split('').map(c => `${c}𝓪`).join('')}.:｡+ﾟ`
    ];

    // Choose a style randomly if no index is provided or index is out of range
    if (styleIndex === null || styleIndex < 0 || styleIndex >= thankyouStyles.length) {
        styleIndex = Math.floor(Math.random() * thankyouStyles.length);
    }

    // Apply the selected style
    return thankyouStyles[styleIndex](name);
}

// Example usage:
const name = "Ahmed";
const variation = randomThankyouEffect(name); // Random style
console.log(variation);

const specificVariation = randomThankyouEffect(name, 2); // Specific style
console.log(specificVariation);

export { randomThankyouEffect };