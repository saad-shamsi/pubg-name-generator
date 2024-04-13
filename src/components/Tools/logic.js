// import { transformName, transformations } from './transformname';
// import { randomSadEffect } from './Effects/sadEffects';  
// function generateVariations(name, primaryStyle, secondaryStyle, count) {
//     let results = [];
//     if (!transformations[primaryStyle]) {
//         return [`No style found for: ${primaryStyle}`];
//     }

//     for (let i = 0; i < count; i++) {
//         let transformedName = transformName(name, transformations[primaryStyle]);
//         transformedName = applySecondaryEffect(transformedName, secondaryStyle);
//         results.push(`${primaryStyle.toUpperCase()} + ${secondaryStyle.toUpperCase()}: ${transformedName}`);
//     }
//     return results;
// }

// function applySecondaryEffect(name, effect) {
//     switch (effect) {
//         case 'sad':
//             return randomSadEffect(name);
//         case 'happy':
//             return `${name}😊`;
//         case 'decorative':
//             return `*${name}*`;
//         default:
//             return name; // No effect applied if not matched
//     }
// }

// export { generateVariations };

// Assuming you export this from another module





import Effects from './Effects'; // Assuming Effects are exported from index.js

// Function to call generateVariations with different effects
function callGenerateVariations(name, primaryStyle, secondaryStyle, count) {
    // Mapping the provided case names to the actual effect functions
    const effectMap = {
        "boxedEffect": Effects.boxedEffect,
        "randomCuteEffect": Effects.randomCuteEffect,
        "randomEmoticonEffect": Effects.randomEmoticonEffect,
        "randomGlitchEffect": Effects.randomGlitchEffect,
        "randomGothicEffect": Effects.randomGothicEffect,
        "randomHeartEffect": Effects.randomHeartEffect,
        "randomJoinerEffect": Effects.randomJoinerEffect,
        "randomPubGNameEffect": Effects.randomPubGNameEffect,
        "sadEffects": Effects.sadEffects,
        "randomSquiggleEffect": Effects.randomSquiggleEffect,
        "randomThankyouEffect": Effects.randomThankyouEffect,
        "randomWeirdEffect": Effects.randomWeirdEffect,
        "starDynamic": Effects.starDynamic,
        "randomPugGNameGenerator": Effects.randomPugGNameGenerator
    };

    // Check if the provided primary style exists in the effect map
    if (!effectMap[primaryStyle]) {
        return [`No effect found for: ${primaryStyle}`];
    }

    // Call generateVariations function with the selected effect and secondary style
    return generateVariations(name, effectMap[primaryStyle], secondaryStyle, count);
}

// Example usage
const name = "John";
const primaryStyle = "randomPugGNameGenerator"; // Change this to the desired effect
const secondaryStyle = "sad"; // Change this to the desired secondary effect
const count = 5;

const variations = callGenerateVariations(name, primaryStyle, secondaryStyle, count);
console.log(variations);

export { callGenerateVariations}