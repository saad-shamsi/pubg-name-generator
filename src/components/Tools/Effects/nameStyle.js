// PubGNameStyles.js
function randomPubGNameEffect(name) {
    const nameParts = name.split(' ');
    const fullName = nameParts.join('');

    // SUPER SCRIPT (SMALL) variations
    const superScriptStyles = [
        name => name.split('').map(char => `ᶦ${char}`).join(''),
        name => name.split('').map(char => `ᶜ${char}`).join(''),
        name => name.split('').map(char => `ᵍ${char}`).join(''),
        name => name.split('').map(char => `ᵛ${char}`).join(''),
        name => name.split('').map(char => `ᶜ${char}`).join(''),
        name => name.split('').map(char => `ᶠ${char}`).join(''),
        name => name.split('').map(char => `ᵏ${char}`).join(''),
        name => name.split('').map(char => `ᶦ${char}`).join(''),
        name => name.split('').map(char => `ᵏ${char}`).join(''),
        name => name.split('').map(char => `ᵖ${char}`).join('')
    ];

    // SUB SCRIPT (SMALL) variations
    const subScriptStyles = [
        name => name.split('').map(char => `ₚ${char}`).join(''),
        name => name.split('').map(char => `ₕ${char}`).join(''),
        name => name.split('').map(char => `ₘ${char}`).join(''),
        name => name.split('').map(char => `ₛ${char}`).join(''),
        name => name.split('').map(char => `ₗ${char}`).join(''),
        name => name.split('').map(char => `ₖ${char}`).join(''),
        name => name.split('').map(char => `ₖ${char}`).join(''),
        name => name.split('').map(char => `ₚ${char}`).join(''),
        name => name.split('').map(char => `ₚ${char}`).join(''),
        name => name.split('').map(char => `ₛ${char}`).join('')
    ];

    // LUNI TOOL STINY variations
    const luniToolStyles = [
        name => name.split('').map(char => `ᴀ${char}`).join(''),
        name => name.split('').map(char => `ᴄ${char}`).join(''),
        name => name.split('').map(char => `ʙ${char}`).join(''),
        name => name.split('').map(char => `ᴅ${char}`).join(''),
        name => name.split('').map(char => `ᴇ${char}`).join(''),
        name => name.split('').map(char => `ɢ${char}`).join(''),
        name => name.split('').map(char => `ʜ${char}`).join(''),
        name => name.split('').map(char => `ɪ${char}`).join(''),
        name => name.split('').map(char => `ᴊ${char}`).join(''),
        name => name.split('').map(char => `ᴋ${char}`).join('')
    ];

    // Combine all styles into one array
    const allStyles = [...superScriptStyles, ...subScriptStyles, ...luniToolStyles];
    // Randomly pick one style from all styles
    const randomStyle = allStyles[Math.floor(Math.random() * allStyles.length)];
    return randomStyle(fullName);  // Apply the chosen style to the full name
}

export { randomPubGNameEffect };
