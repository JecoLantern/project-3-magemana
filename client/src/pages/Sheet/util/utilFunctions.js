export default {
    health(char) {
        return (char.hitDice * char.level) + (char.attrMod(char.attributes[2]) * char.level)
    },

    initiative(char) {//this.attributes[1]
        return this.attrMod(char.attributes[1])
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

    getSave(save, parentAttr, level) {
        //code to get and associate saving throws, get parrent att, get the mod, add that to the save, check if proficient, if so add proficiency
        let tempSave = {...save}
        tempSave.val += this.attrMod(parentAttr);
        if(tempSave.isProficient){
            tempSave.val += this.proficiencieBonus(level) 
        }
        return tempSave;
    },


    armorClass(dex){//this is not at all how this works, but there are so many differebnt options when it comes to armor (natural, unarmored AC, + shield, light, med, heavy, plate, mage ..... some allow dex some dont) so i will probably come back to make this a little more accurate, but for now this will work on demos
        return 12 + this.attrMod(dex) 
    }

    //things to calculate: passivePerception, equipment, isInitialized? to check if this the first time loading? skills!!!!! those arent getting pushed into the db for some reason
    //skills will probably be the hardest to figure out, might break that up by attribute, make a seperate file to figure all of those bad boys out? include it it the character initialization.


}