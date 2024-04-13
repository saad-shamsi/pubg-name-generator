// JoinerNameStyles.js
function randomJoinerEffect(name) {
    const joinerStyles = [
        (char) => `${char}⫶`, // DOT JOINER
        (char) => `${char}⊶`, // CONNECTED JOINER
        (char) => `${char}￫`, // ARROW JOINER
        (char) => `${char}⋆`, // STAR JOINER
        (char) => `${char}⨳`, // HASH JOINER
        (char) => `${char}⦚`, // ZIGZAG JOINER
        (char) => `${char}≋`, // WAVY JOINER
        (char) => `${char}♥`, // HEARTS BETWEEN
        (char) => `${char}〜`, // SINGLE WAVY JOINER
        (char) => `${char}░`, // DOTTY JOINER
        (char) => `${char}▪`, // DOT JOINER
        (char) => `⤷${char}⤶`, // ARROW JOINER
        (char) => `${char}⑊`, // DOUBLE SLASH JOINER
        (char) => `${char}〵`, // SLASH JOINER
        (char) => `⧸${char}⧶`, // SLASH BOX JOINER
        (char) => `${char}𝄆`, // BAR CODE JOINER
        (char) => `◤${char}◢`, // ITALIC BLOCK JOINER
        (char) => `${char}╎`, // LINE SEPARATOR BLOCK JOINER
        (char) => `${char} ❘`, // SINGLE LINE SEPARATOR BLOCK JOINER
    ];

    // Apply a random joiner effect to each character
    const joinerName = name.split('').map(char => {
        const index = Math.floor(Math.random() * joinerStyles.length);
        return joinerStyles[index](char);
    }).join('');

    return joinerName;
}

export { randomJoinerEffect };