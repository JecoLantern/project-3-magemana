const ranNames = require('./randomNames.json');

export default (race) => {
    //Math.Random() through an array of fantasy ass fantasy names if the nameInput === null;
    let ran = Math.floor((Math.random() * 20) + 1);

    switch (race) {
        case "elf" || "half-elf":
            return ranNames.elfNames[ran]

        case "human":
            return ranNames.humanNames[ran]

        case "dwarf":
            return ranNames.dwarfNames[ran]

        case "halfling":
            return ranNames.halflingNames[ran]

        case "dragonborn":
            return ranNames.dragonbornNames[ran]

        case "half-orc":
            return ranNames.orcNames[ran]

        case "tiefling":
            return ranNames.tieflingNames[ran]

        default: return ranNames.humanNames[ran]

    }
};