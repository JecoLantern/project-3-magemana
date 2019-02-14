import skills from "./skills.json"

export default {
    health(char) {
        return (char.hitDice * char.level) + (this.attrMod(char.attributes[2]) * char.level)
    },

    initiative(dex) {//this.attributes[1]
        return this.attrMod(dex)
    },

    attrMod(attribute) {//used to calculate attribute mods
        switch (attribute.val) {
            case 1:
                return -5;
            case 2 || 3:
                return -4;
            case 4 || 5:
                return -3;
            case 6 || 7:
                return -2;
            case 8 || 9:
                return -1;
            case 10 || 11:
                return 0;
            case 12 || 13:
                return 1;
            case 14 || 15:
                return 2;
            case 16 || 17:
                return 3;
            case 18 || 19:
                return 4;
            case 20:
                return 5;
            default: return 0;
        }
    },
    //this function determains the users prof level, denoted by their level
    proficiencieBonus(level) {
        switch (level) {
            case 1 || 2 || 3 || 4:
                return 2;
            case 5 || 6 || 7 || 8:
                return 3;
            case 9 || 10 || 11 || 12:
                return 4;
            case 13 || 14 || 15 || 16:
                return 5;
            case 17 || 18 || 19 || 20:
                return 6;
            default: return 2;
        }
    },

    generateSaves(char) {
        return char.savingThrows.map(save => {
            save.val += this.attrMod(save.name);
            if (save.isProficient) {
                save.val += this.proficiencieBonus(char.level)
            }
            return save;
        })
    },


    armorClass(dex) {//this is not at all how this works, but there are so many differebnt options when it comes to armor (natural, unarmored AC, + shield, light, med, heavy, plate, mage ..... some allow dex some dont) so i will probably come back to make this a little more accurate, but for now this will work on demos
        return 12 + this.attrMod(dex);
    },

    //things to calculate equipment? to check if this the first time loading? 

    getSkills(attrArr, level) {
        //make a json document wtih all of the skills, iterate over it and then return it to it can get plugged into the charModel so that it will be uploadedto the db on save

        const [STR, DEX, CON, INT, WIS, CHA] = attrArr;

        return skills.map(skill => {
            if (skill.parentAttr == STR.attr) {
                skill.val += this.attrMod(STR)
            }
            if (skill.parentAttr == DEX.attr) {
                skill.val += this.attrMod(DEX)
            }
            if (skill.parentAttr == CON.attr) {
                skill.val += this.attrMod(CON)
            }
            if (skill.parentAttr == INT.attr) {
                skill.val += this.attrMod(INT)
            }
            if (skill.parentAttr == WIS.attr) {
                skill.val += this.attrMod(WIS)
            }
            if (skill.parentAttr == CHA.attr) {
                skill.val += this.attrMod(CHA)
            }
            if(skill.isProficient) skill.val += this.proficiencieBonus(level)
            return skill;
        });

    },

    hitDiceDisplay(hitDice, level) {
        return `${level}d${hitDice}`;
    },
    generateWeapons(className) {
        //do a axios call to get the weapos that this character would statr out with, select them randomly
        return className;
    },

    passivePerception(wis) {
        return 10 + this.attrMod(wis)
    },

    generateFeatureText(traits) {//will call in the place where you will put the features, 
        return traits.map(tr8 => tr8.name)
    },

    runInitialize(char) {
        //here you will run all the above functions then return the newly generated character to be pushed into the state, then set isInitialized=true
        char.health = this.health(char);
        char.initiative = this.initiative(char.attributes[1]);
        char.armorClass = this.armorClass(char.attributes[1]);
        char.passivePerception = this.passivePerception(char.attributes[4]);
        char.features = this.generateFeatureText(char.traits);
        char.skills = this.getSkills(char.attributes, char.level);
        char.savingThrows = this.generateSaves(char);
        //....run functions listed above....

        char.isInitialized = true;
        return char
    }
}