function randomThankyouEffect(name) {
    // Splitting the name into parts for those styles that need to work with individual words
    const nameParts = name.split(' ');

    // Joining all parts for styles that need to manipulate the full name without spaces
    const fullName = nameParts.join('');

    // Define various "thank you" styles, some working on the full name, others on parts
    const thankyouStyles = [
        (parts) => `꜍a꜉꜍b꜉꜍c꜉꜍d꜉꜍e꜉꜍f꜉꜍g꜉꜍h꜉꜍i꜉꜍j꜉꜍k꜉꜍l꜉꜍m꜉꜍n꜉꜍o꜉꜍p꜉꜍q꜉꜍r꜉꜍s꜉꜍t꜉꜍u꜉꜍v꜉꜍w꜉꜍x꜉꜍y꜉꜍z꜉♪(･ω･)ﾉ`,
        (parts) => `(*ˊᗜˋ*)/${parts.map(p => p.split('').join('a҉b҉c҉d҉e҉f҉g҉')).join('a҉b҉c҉d҉e҉f҉g҉')}h҉i҉j҉k҉l҉m҉n҉o҉p҉q҉r҉s҉t҉u҉v҉w҉x҉y҉z҉*`,
        (parts) => `(*ゝω・)ﾉ${parts.map(p => p.split('').join('a͛⦚b͛⦚c͛⦚d͛⦚e͛⦚f͛⦚g͛⦚')).join('a͛⦚b͛⦚c͛⦚d͛⦚e͛⦚f͛⦚g͛⦚')}h͛⦚i͛⦚j͛⦚k͛⦚l͛⦚m͛⦚n͛⦚o͛⦚p͛⦚q͛⦚r͛⦚s͛⦚t͛⦚u͛⦚v͛⦚w͛⦚x͛⦚y͛⦚z͛⦚`,
        (parts) => `＼(´∀｀●)／${parts.map(p => p.split('').join('a♥b♥c♥d♥e♥f♥g♥')).join('a♥b♥c♥d♥e♥f♥g♥')}h♥i♥j♥k♥l♥m♥n♥o♥p♥q♥r♥s♥t♥u♥v♥w♥x♥y♥z♥!`,
        (parts) => `<(_ _*)> ${parts.map(p => p.split('').join('åß¢Ðê£ghïjklmñðþqr§†µ')).join('åß¢Ðê£ghïjklmñðþqr§†µ')}vwx¥z.`,
        (parts) => `★⌒(●ゝω・)ｂ${parts.map(p => p.split('').join('a̼⧽⧼b̼⧽⧼c̼⧽⧼d̼⧽⧼e̼⧽⧼f̼⧽')).join('a̼⧽⧼b̼⧽⧼c̼⧽⧼d̼⧽⧼e̼⧽⧼f̼⧽')}⧽g̼⧽⧼h̼⧽⧼i̼⧽⧼j̼⧽⧼k̼⧽⧼l̼⧽⧼m̼⧽⧼n̼⧽⧼o̼⧽⧼p̼⧽⧼q̼⧽⧼r̼⧽⧼s̼⧽⧼t̼⧽⧼u̼⧽⧼v̼⧽⧼w̼⧽⧼x̼⧽⧼y̼⧽⧼z̼⧽`,
        (parts) => `ﾟ･:,｡★＼(^-^ )♪${parts.map(p => p.split('').join('₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱')).join('₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱')}QⱤ₴₮ɄV₩ӾɎⱫ♪( ^-^)/★,｡･:･ﾟ`,
        (parts) => `+｡:.ﾟヽ(*´∀)ﾉﾟ${parts.map(p => p.split('').join('𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲')).join('𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲')}𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃.:｡+ﾟ`
    ];

    // Randomly pick one thank you style
    const index = Math.floor(Math.random() * thankyouStyles.length);
    return thankyouStyles[index](nameParts);  // Pass nameParts which is an array of words to the function
}

export { randomThankyouEffect };