function randomHeartEffect(name) {
    // Splitting the name into parts for those styles that need to work with individual words
    const nameParts = name.split(' ');

    // Joining all parts for styles that need to manipulate the full name without spaces
    const fullName = nameParts.join('');

    // Define various heart-themed styles, some working on the full name, others on parts
    const heartStyles = [
        (parts) => `(◍•ᴗ•◍) ミ💖 ${parts.map(p => p.split('').join('꜉')).join(' ')} 💖彡`,
        (parts) => `෴❤️෴ ${parts.join('҉')}`,
        (parts) => `💖´ *•.¸♥¸.•** ${parts.join('͛⦚')} **•.¸♥¸.•*´💖`,
        (parts) => `♡〜ლ(๑癶 ${parts.join('♥')} 癶๑)ლ〜♡`,
        (parts) => `◦•●❤♡ ${parts.join('')} ♡❤●•◦`,
        (parts) => `🌸ξξ(∵❤◡❤∵)ξξ·¯·♩¸ ⧼${parts.map(p => p + '̼').join('⧽ ⧼')}⧽ ¸♩·¯·ξξ(∵❤◡❤∵)ξξ🌸`,
        (parts) => `♥╣[-_-]╠♥ ${parts.join(' ')} ♥╣[-_-]╠♥`,
        (parts) => `ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥ ${parts.join(' ')} ♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡`
    ];

    // Randomly pick one heart style
    const index = Math.floor(Math.random() * heartStyles.length);
    return heartStyles[index](nameParts);  // Pass nameParts which is an array of words to the function
}

export { randomHeartEffect };