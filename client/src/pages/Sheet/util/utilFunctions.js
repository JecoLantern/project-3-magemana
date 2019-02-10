export default {
    health() {
        return (this.hitDice * this.level) + (this.attrMod(this.attributes[2]) * this.level)
    },

    initiative() {
        return this.attrMod(this.attributes[1])
    },

    attrMod(attribute) {
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

    proficiencieBonus(char) {
        switch (char.level) {
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
    }
}