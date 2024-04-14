import { transformName, transformations } from './transformname';
import * as Effects from './Effects';  // Assuming this imports all your effects correctly

function applySecondaryEffect(name, effect) {
    const effectFunctions = {
        'sad': Effects.randomSadEffect,
        'happy': Effects.randomHeartEffect,
        'decorative': name => `*${name}*`,  // Simple inline effect
        // 'mystic': Effects.randomMysticEffect,  // Example: Add this if you have a mystic effect
        // 'retro': Effects.randomRetroEffect,  // Example: Add this if you have a retro effect
        // 'futuristic': Effects.randomFuturisticEffect,  // Example: Add this if you have a futuristic effect
        'gothic': Effects.randomGothicEffect,  // Assuming you have a Gothic style effect
        'glitch': Effects.randomGlitchEffect,  // Assuming you have a Glitch style effect
        'emoticon': Effects.randomEmoticonEffect,  // Assuming you have an Emoticon style effect
        'heart': Effects.randomHeartEffect,  // Assuming another heart effect or rename if similar to happy
        'pugG': Effects.randomPugGNameGenerator,  // Assuming a PUBG style name effect
        'squiggle': Effects.randomSquiggleEffect,  // Assuming a Squiggle style effect
        'weird': Effects.randomWeirdEffect,  // Assuming a Weird style effect
        'joiner': Effects.randomJoinerEffect,  // Assuming a Joiner style effect
        'thankyou': Effects.randomThankyouEffect,  // Assuming a Thank You style effect
        'starDynamic': Effects.starDynamic,  // Assuming a dynamic star effect
        // Continue adding other effects as necessary
    };

    // Check if the effect is in the map and apply it if it is
    if (effectFunctions[effect]) {
        return effectFunctions[effect](name);
    }

    // Default to no effect if the effect isn't found
    return name;
}
export function getEffectVariationCount(effect) {
    // Define the number of variations for each effect
    const effectsWithCount = {
        'glitch': 1,       // Glitch effect only has 1 variation
        'sad': 12,         // Sad effect has 12 variations
        'happy': 5,        // Example: Happy effect has 5 variations
        'decorative': 3,   // Example: Decorative effect has 3 variations
        'gothic': 4,       // Example: Gothic effect has 4 variations
        'emoticon': 3,     // Example: Emoticon effect has 3 variations
        'heart': 3,        // Example: Heart effect has 3 variations
        'pugG': 2,         // Example: PugG effect has 2 variations
        'squiggle': 2,     // Example: Squiggle effect has 2 variations
        'weird': 3,        // Example: Weird effect has 3 variations
        'joiner': 2,       // Example: Joiner effect has 2 variations
        'thankyou': 8,     // Example: Thank You effect has 8 variations
        'starDynamic': 4   // Example: Star Dynamic effect has 4 variations
        // Add counts for other effects as necessary
    };
    return effectsWithCount[effect] || 1;  // Default to 1 if no specific count is defined
}


function generateVariations(name, primaryStyle, secondaryStyle, count) {
    let results = [];
    if (!transformations[primaryStyle]) {
        return [`No style found for: ${primaryStyle}`];
    }

    for (let i = 0; i < count; i++) {
        let transformedName = transformName(name, transformations[primaryStyle]);
        transformedName = applySecondaryEffect(transformedName, secondaryStyle);
        results.push(`${primaryStyle.toUpperCase()} + ${secondaryStyle.toUpperCase()}: ${transformedName}`);
    }
    return results;
}

export { generateVariations };
