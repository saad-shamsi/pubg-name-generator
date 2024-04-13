function starDynamic(name, characters) {
    const nameParts = name.split(' ');
    const fullName = nameParts.join('');

    const starStyles = [
        (parts) => `ミ★ ${parts.join(characters)} ★彡`,
        (parts) => `╰•★★ ${parts.join(characters)} ★★•╯`,
        (parts) => `꧁•⊹٭${parts.join(characters)}٭⊹•꧂`,
        (parts) => `ıllıllı⭐🌟 ${parts.join(characters)} 🌟⭐ıllıllı`,
        (parts) => `¸.·✩·.¸¸.·¯⍣✩ ${parts.join(characters)} ✩⍣¯·.¸¸.·✩·.¸`,
        (parts) => `\`✵•.¸,✵°✵.｡.✰ ${parts.join(characters)} ✰.｡.✵°✵,¸.•✵´`,
        
        (parts) => `¨˜ˆ”°⍣~•✡⊹٭„¸ ${parts.join(characters)} ¸„٭⊹✡•~⍣°”ˆ˜¨`,
        (parts) => `★¸.•☆•.¸★ ${parts.join(characters)} ★⡀.•☆•.★`,
        (parts) => `٭⊹¤.•⨳•.*☆✬ ${parts.join(characters)} ✬☆*.•⨳•.¤⊹٭`,
         
    ];

    const index = Math.floor(Math.random() * starStyles.length);
    return starStyles[index](nameParts);
}

export { starDynamic };

const styledName = starDynamic("User", "abcd");
console.log(styledName);