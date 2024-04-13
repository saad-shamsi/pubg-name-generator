function randomPugGNameGenerator(characters) {
    // Define the styles using the provided characters
    const styles = {
        "RANDOM CUTE": generateRandomCuteName(characters),
        "RANDOM FULLCRAZY": generateRandomFullCrazyName(characters),
        "RANDOM CRAZY SYMBOLS": generateRandomCrazySymbolsName(characters),
        "RANDOM FLOURISH": generateRandomFlourishName(characters)
    };

    // Generate a random index
    const index = Math.floor(Math.random() * Object.keys(styles).length);

    // Get the random style name
    const randomStyle = Object.keys(styles)[index];

    // Return the generated name based on the random style
    return styles[randomStyle];
}

// Function to generate a random cute PugG name
function generateRandomCuteName(characters) {
    // Implement your logic here to generate a random cute name based on the provided characters
    return "╾━╤デ╦︻ " + characters + " ᕕ( ᐛ )ᕗ";
}

// Function to generate a random full crazy PugG name
function generateRandomFullCrazyName(characters) {
    // Implement your logic here to generate a random full crazy name based on the provided characters
    return "↫↫↫↫↫ " + characters + " ︻デ═一";
}

// Function to generate a random crazy symbols PugG name
function generateRandomCrazySymbolsName(characters) {
    // Implement your logic here to generate a random crazy symbols name based on the provided characters
    return "(¯´•._.• " + characters + " •._.•´¯)";
}

// Function to generate a random flourish PugG name
function generateRandomFlourishName(characters) {
    // Implement your logic here to generate a random flourish name based on the provided characters
    return "•´¯`•. " + characters + " .•´¯`•";
}

export { randomPugGNameGenerator };

// Test cases
console.log("RANDOM CUTE:", randomPugGNameGenerator("CUTE"));
console.log("RANDOM FULLCRAZY:", randomPugGNameGenerator("FULLCRAZY"));
console.log("RANDOM CRAZY SYMBOLS:", randomPugGNameGenerator("CRAZYSYMBOLS"));
console.log("RANDOM FLOURISH:", randomPugGNameGenerator("FLOURISH"));