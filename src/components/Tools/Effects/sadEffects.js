function randomSadEffect(name) {
    // Splitting the name into parts for those styles that need to work with individual words
    const nameParts = name.split(' ');

    // Joining all parts for styles that need to manipulate the full name without spaces
    const fullName = nameParts.join('');

    // Define various "sad" styles, some working on the full name, others on parts
    const sadStyles = [
        (parts) => `(◕︿◕✿) ${parts.map(p => p.split('').join('꜉꜍')).join(' ')} (๑′°︿°๑)`,
        (parts) => `┏༼ ◉ ╭╮ ◉༽┓ ${parts.map(p => p.split('').map(c => `${c}҉`).join('')).join(' ')} (︶︹︺)`,
        (parts) => `( ⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀) ${parts.map(p => p.split('').map(c => `${c}͛⦚`).join('')).join(' ')} ( ⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)`,
        (parts) => `( ◔ ʖ̯ ◔ ) ${parts.map(p => p.split('').join('♥')).join(' ♥')} ( ◔ ʖ̯ ◔ )`,
        (parts) => `(oꆤ︵ꆤo) ${parts.join(' ')} ●︿●`,  // Directly use joined parts for simpler styles
        (parts) => `(′︿‵｡) ${parts.map(p => p.split('').join('♥')).join(' ♥')} (|||❛︵❛.)`,
        (parts) => `(.﹒︠₋﹒︡.) ﾟ🏆😺 ${parts.join(' ')} 🐚😝 （（●´∧｀●））`, // Use joined parts for styles that don't need individual word manipulation
        (parts) => `【T_T】 ${parts.map(p => p.toUpperCase()).join(' ')} 【T_T】`,
        (_) => `(ಥ﹏ಥ) ${fullName.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('')} (ಥ﹏ಥ)`,
        (parts) => `(ノಠ益ಠ)ノ彡┻━┻ ${parts.map(p => p.split('').map(c => `*${c}*`).join('')).join(' ┻━┻ ')}`,
        (parts) => `༼ つ ◕_◕ ༽つ ${parts.map(p => p.split('').map(c => `${c}~`).join('')).join(' ༽つ')}`,
        (parts) => `(✖╭╮✖) ${parts.map(p => p.split('').map(c => `${c}_`).join('')).join(' (✖╭╮✖)')}`
    ];

    // Randomly pick one sad style
    const index = Math.floor(Math.random() * sadStyles.length);
    return sadStyles[index](nameParts);  // Pass nameParts which is an array of words to the function
}

export { randomSadEffect };