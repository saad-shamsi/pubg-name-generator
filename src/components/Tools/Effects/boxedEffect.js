function boxedPubGFont(name) {
    const nameParts = name.split(' ');
    const fullName = nameParts.join('');

    const boxedStyles = [
        (parts) => `⧼${parts.join('̼⧽⧼')}̼⧽`,
        (parts) => `[${parts.join('̲̅][')}̲̅]`,
        (parts) => `🇦 ${parts.join(' 🇧 ')} 🇿`,
        (parts) => `⟦${parts.join('⟧⟦')}⟧`,
        (parts) => `${parts.join('꜉꜍')}꜍`,
        (parts) => `⦏${parts.join('⦎⦏')}⦎`,
        (parts) => `⦑${parts.join('⦒⦑')}⦒`,
        (parts) => `${parts.join('⃣   ')}`,
        (parts) => `【${parts.join('】【')}】`,
        (parts) => `『${parts.join('』『')}』`,
        (parts) => `╟${parts.join('╢╟')}╢`,
        (parts) => `⎡${parts.join('⎦⎡')}⎦`,
        (parts) => `⁅${parts.join('⁆⁅')}⁆`,
    ];

    const index = Math.floor(Math.random() * boxedStyles.length);
    return boxedStyles[index](nameParts);
}

export { boxedPubGFont };