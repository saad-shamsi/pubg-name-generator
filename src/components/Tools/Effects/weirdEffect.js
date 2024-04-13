function randomWeirdEffect(name) {
    const weirdStyles = [
        (char) => `${char}҉`, // FIRE WORK
        (char) => `${char}̼`, // BAT MAN
        (char) => `${char}͆`, // TOP BORDER
        (char) => `${char}̺`, // BOTTOM BORDER
        (char) => `${char}͙`, // BOTTOM STAR
        (char) => `${char}̟`, // BOTTOM PLUS
        (char) => `${char}͎`, // BOTTOM ARROW
        (char) => `${char}͓̽`, // CROSS TOP & BOTTOM
        (char) => `${char}̾`, // STINKY
        (char) => `${char}͓̽`, // CROSS ABOVE BELOW
        (char) => `${char}͎`, // ARROW BELOW
    ];

    // Apply a random weird effect to each character
    const weirdName = name.split('').map(char => {
        const index = Math.floor(Math.random() * weirdStyles.length);
        return weirdStyles[index](char);
    }).join('');

    return weirdName;
}

export { randomWeirdEffect };