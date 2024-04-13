// GothicEffects.js
function randomGothicEffect(name) {
    const nameParts = name.split(' ');
    const fullName = nameParts.join('');

    const gothicStyles = [
        (parts) => `✞${parts.join(' ')}✞`,
        (parts) => `${parts.map(p => p.toUpperCase()).join(' ')} 🔥`,
        (parts) => `🖤${fullName.split('').reverse().join('')}🖤`,
        (parts) => `${parts.map(p => p.split('').map(c => `${c}༒`).join('')).join(' ')}`,
        (parts) => `⚜️${fullName.toUpperCase()}⚜️`,
        (parts) => `☠️${fullName.split('').map(c => `${c}☠️`).join('')}`,
        (parts) => `${parts.map(p => p.toLowerCase()).join(' ')} from the shadows`,
        (parts) => `⛓️${fullName.split('').map(c => `${c}⛓️`).join('')}`,
        (parts) => `🌑${parts.map(p => p).join(' ')}🌑`,
        (parts) => `🕷️${parts.join('🕸️')}🕷️`
    ];

    const index = Math.floor(Math.random() * gothicStyles.length);
    return gothicStyles[index](nameParts);
}

export { randomGothicEffect };