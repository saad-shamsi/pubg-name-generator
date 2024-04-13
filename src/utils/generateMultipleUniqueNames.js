const tacticalAdjectives = [
    "Stealthy", "Lethal", "Ruthless", "Elite", "Silent", "Deadly", "Rapid", "Fierce", "Invincible", "Unstoppable",
    "Majestic", "Supreme", "Ultimate", "Savage", "Brutal", "Cunning", "Ferocious", "Relentless", "Tactical", "Bold",
    "Vengeful", "Dauntless", "Fearless", "Stalwart", "Valiant",
    // Adding more appealing words from proLegendWords
    "Pro", "Legend", "Master", "Champ", "Ace", "Veteran", "Chief", "Prime", "Alpha", "Epic", 
    "Mythic", "Ultra", "Supreme", "Ultimate", "Grand", "Celestial", "Eternal", "Immortal", "Majestic", "Sovereign"
  ];
  
  const combatNouns = [
    "Sniper", "Assassin", "Commander", "Reaper", "Warrior", "Mercenary", "Gladiator", "Sentinel", "Guardian", "Paladin",
    "Raider", "Pirate", "General", "Captain", "Admiral", "Champion", "Berserker", "Enforcer", "Striker", "Veteran",
    "Scout", "Operative", "Sorcerer", "Knight", "Samurai",
    // Adding titles that fit as nouns or prestigious roles
    "Warlord", "Highlord", "Overlord", "Commander", "Champion", "Slayer", "Guardian", "Paladin", "Knight", "Samurai"
  ];
  
  const prestigeTitles = [
    "of Doom", "the Brave", "the Swift", "Shadow", "the Unseen", "the Bold", "the Great", "the Terrible", "the Victorious", 
    "the Cunning", "the Fearless", "the Mighty", "the Ancient", "the Vengeful", "the Protector", "the Watcher",
    "the Conqueror", "the Heroic", "the Powerful", "the Resilient", "the Legendary", "the Invincible", "the Fierce", 
    "the Defiant", "the Wise", "the Ruthless", "the Quick", "the Furious", "the Skilled", "the Unyielding",
    "the Fearless", "the Guardian", "the Champion", "the Valiant", "the Courageous", "the Renowned", "the Formidable", 
    "the Enlightened", "the Daring", "the Bold", "the Persistent", "the Resolute", "the Noble"
  ];
  
  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function generateName(prefix = "", suffix = "") {
    let parts = [];
  
    if (prefix && suffix) {
        // When both prefix and suffix are provided
        parts.push(prefix, randomElement(tacticalAdjectives), suffix); // Insert only an adjective or noun between
    } else if (prefix) {
        // Only a prefix is provided
        parts.push(prefix);
        if (Math.random() > 0.7) { // Now less likely to add a title
            parts.push(randomElement(prestigeTitles));  // Potentially use a prestigious title
        } else {
            parts.push(randomElement(tacticalAdjectives));
        }
        parts.push(randomElement(combatNouns)); // Always add a noun
    } else if (suffix) {
        // Only a suffix is provided
        if (Math.random() > 0.7) { // Similarly, less likely to start with a title
            parts.push(randomElement(prestigeTitles));
        } else {
            parts.push(randomElement(tacticalAdjectives));
        }
        parts.push(randomElement(combatNouns)); // Always add a noun
        parts.push(suffix);
    } else {
        // No prefix or suffix provided
        parts.push(randomElement(tacticalAdjectives), randomElement(combatNouns));
    }
  
    return parts.join(" ");
  }
  
  export function generateMultipleUniqueNames(count = 10, prefix = "", suffix = "") {
    const names = new Set();
    while (names.size < count) {
        const name = generateName(prefix, suffix);
        names.add(name);
    }
    return Array.from(names);
  }
  
  // Example usage
  const namesWithoutInput = generateMultipleUniqueNames(10);
  const namesWithPrefix = generateMultipleUniqueNames(10, "Elite");
  const namesWithSuffix = generateMultipleUniqueNames(10, "", "Commander");
  const namesWithBoth = generateMultipleUniqueNames(10, "Stealthy", "Warlord");
  
  console.log("Names without input:", namesWithoutInput);
  console.log("Names with Prefix 'Elite':", namesWithPrefix);
  console.log("Names with Suffix 'Commander':", namesWithSuffix);
  console.log("Names with Both 'Stealthy' and 'Warlord':", namesWithBoth);