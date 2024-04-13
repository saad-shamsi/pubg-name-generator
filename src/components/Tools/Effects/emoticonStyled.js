function randomEmoticonEffect(name) {
    // Splitting the name into parts for those styles that need to work with individual words
    const nameParts = name.split(' ');

    // Joining all parts for styles that need to manipulate the full name without spaces
    const fullName = nameParts.join('');

    // Define various emoticon-themed styles, some working on the full name, others on parts
    const emoticonStyles = [
        (parts) => `彡(✿╹◡╹) ${parts.map(p => p.split('').join('𝘢𝘣𝘤𝘥𝘦𝘧')).join('𝘢𝘣𝘤𝘥𝘦𝘧')}𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻 (｀∀´)Ψ`,
        (parts) => `щ（ﾟДﾟщ） < ${parts.map(p => p.split('').join('卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙')).join('卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙')} )`,
        (parts) => `☞ó ͜つò☞ ${parts.map(p => p.split('').join('𝓪𝓫𝓬𝓭𝓮𝓯𝓰')).join('𝓪𝓫𝓬𝓭𝓮𝓯𝓰')}𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃`,
        (parts) => `(☝◞‸◟)☞ ${parts.map(p => p.split('').join('𝚊𝚋𝚌𝚍𝚎𝚏𝚐')).join('𝚊𝚋𝚌𝚍𝚎𝚏𝚐')}𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣`,
        (parts) => `(づ｡◕‿‿◕｡)づ ${parts.map(p => p.split('').join('αв¢∂єƒ')).join('αв¢∂єƒ')}gнιנкℓмησρqяѕтυνωχуz ٩(˘◡˘)۶`,
        (parts) => `🌘‿🌘 ⧼${parts.map(p => p.split('').join('a̼')).join('a̼')}⧽${parts.map(p => p.split('').join('b̼')).join('b̼')}⧽${parts.map(p => p.split('').join('c̼')).join('c̼')}⧽${parts.map(p => p.split('').join('d̼')).join('d̼')}⧽${parts.map(p => p.split('').join('e̼')).join('e̼')}⧽${parts.map(p => p.split('').join('f̼')).join('f̼')}⧽${parts.map(p => p.split('').join('g̼')).join('g̼')}⧽${parts.map(p => p.split('').join('h̼')).join('h̼')}⧽${parts.map(p => p.split('').join('i̼')).join('i̼')}⧽${parts.map(p => p.split('').join('j̼')).join('j̼')}⧽${parts.map(p => p.split('').join('k̼')).join('k̼')}⧽${parts.map(p => p.split('').join('l̼')).join('l̼')}⧽${parts.map(p => p.split('').join('m̼')).join('m̼')}⧽${parts.map(p => p.split('').join('n̼')).join('n̼')}⧽${parts.map(p => p.split('').join('o̼')).join('o̼')}⧽${parts.map(p => p.split('').join('p̼')).join('p̼')}⧽${parts.map(p => p.split('').join('q̼')).join('q̼')}⧽${parts.map(p => p.split('').join('r̼')).join('r̼')}⧽${parts.map(p => p.split('').join('s̼')).join('s̼')}⧽${parts.map(p => p.split('').join('t̼')).join('t̼')}⧽${parts.map(p => p.split('').join('u̼')).join('u̼')}⧽${parts.map(p => p.split('').join('v̼')).join('v̼')}⧽${parts.map(p => p.split('').join('w̼')).join('w̼')}⧽${parts.map(p => p.split('').join('x̼')).join('x̼')}⧽${parts.map(p => p.split('').join('y̼')).join('y̼')}⧽${parts.map(p => p.split('').join('z̼')).join('z̼')} (✿ヘᴥヘ)`,
        (parts) => `(^▽^) ${parts.map(p => p.split('').join('₳฿₵')).join('₳฿₵')}₫Ɇ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ (✿^▽^)`,
        (parts) => `(人◕‿◕) ${parts.map(p => p.split('').join('𝕒𝕓𝕔𝕕𝕖')).join('𝕒𝕓𝕔𝕕𝕖')}𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫 (•◡•)`,
    ];

    // Randomly pick one emoticon style
    const index = Math.floor(Math.random() * emoticonStyles.length);
    return emoticonStyles[index](nameParts);  // Pass nameParts which is an array of words to the function
}

export { randomEmoticonEffect };