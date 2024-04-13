function randomCuteEffect(name) {
    // Splitting the name into parts for those styles that need to work with individual words
    const nameParts = name.split(' ');

    // Joining all parts for styles that need to manipulate the full name without spaces
    const fullName = nameParts.join('');

    // Define various cute-themed styles, some working on the full name, others on parts
    const cuteStyles = [
        (parts) => `✴ 🎀 ${parts.map(p => p.split('').join('𝒹𝑒𝒻')).join('𝒹𝑒𝒻')}🌞${parts.map(p => p.split('').join('𝓅𝓆𝓇')).join('𝓅𝓆𝓇')}𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏 🎀 ✴`,
        (parts) => `,-*'^'~*-.,_,.-*~ 🎀 ${parts.map(p => p.split('').join('𝒹𝑒𝒻')).join('𝒹𝑒𝒻')}🍑${parts.map(p => p.split('').join('𝓅𝓆𝓇')).join('𝓅𝓆𝓇')}𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏 🎀 ~*-.,_,.-*~'^'*-,`,
        (parts) => `🍓 🎀 ${parts.map(p => p.split('').join('𝒹𝑒𝒻')).join('𝒹𝑒𝒻')}♡${parts.map(p => p.split('').join('𝓅𝓆𝓇')).join('𝓅𝓆𝓇')}𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏 🎀 🍓`,
        (parts) => `🐔 ⋆ 🐠 🎀 ${parts.map(p => p.split('').join('𝒹𝑒𝒻')).join('𝒹𝑒𝒻')}💙${parts.map(p => p.split('').join('𝓅𝓆𝓇')).join('𝓅𝓆𝓇')}𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏 🎀 🐠 ⋆ 🐔`,
        
    ];

    // Randomly pick one cute style
    const index = Math.floor(Math.random() * cuteStyles.length);
    return cuteStyles[index](nameParts);  // Pass nameParts which is an array of words to the function
}

export { randomCuteEffect };