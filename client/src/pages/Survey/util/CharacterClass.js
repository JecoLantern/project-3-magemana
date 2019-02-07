let axios = require('axios');

class CharacterGen {
    constructor(name, race, className, alignment) {
        this.name = name;
        this.race = race;
        this.level = 1;
        this.class = className;
        this.alignment = alignment;
        this.hitDice = 0;
        this.speed = 30;
        this.attributes = [
            { attr: "STR", val: 10 },
            { attr: "DEX", val: 10 },
            { attr: "CON", val: 10 },
            { attr: "INT", val: 10 },
            { attr: "WIS", val: 10 },
            { attr: "CHA", val: 10 }
        ];
        this.savingThrows = [
            { name: "STR", val: 0, isProficient: false },
            { name: "DEX", val: 0, isProficient: false },
            { name: "CON", val: 0, isProficient: false },
            { name: "INT", val: 0, isProficient: false },
            { name: "WIS", val: 0, isProficient: false },
            { name: "CHA", val: 0, isProficient: false },
        ];
        this.skillProficiencies = [];
        this.proficiencies = [];
        this.startingEquipment = [];
    }

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
    }

    arrayRandSelect(arr, amt) {
        let tempArr = [...arr]
        const newArr = []
        for (let i = 0; i < amt; i++) {
            let choice = Math.floor((Math.random() * tempArr.length) - 1)
            newArr.push(tempArr[choice]);
            return tempArr.splice(choice, 1)
        }
        return newArr
    }

    saveLocatorIndex(attr) {
        if (attr === "STR") return 0;
        if (attr === "DEX") return 1;
        if (attr === "CON") return 2;
        if (attr === "INT") return 3;
        if (attr === "WIS") return 4;
        if (attr === "CHA") return 5;
    }

    //must run these before generating misc stats
    getClassData() {
        //based on the selected Class it will set the character state to the optimized selections for this class, including attribute array, selected skills, proficiencies, and equipment
        axios.get(`/api/e/classes/${this.className}`)
            .then(res => {
                const {
                    proficiencies,
                    proficiency_choices,
                    saving_throws,
                    hit_die,
                } = res;


                let profChoice = proficiency_choices[0].from.map(el => el.name);

                let profChoiceAmt = proficiency_choices[0].choose;

                //need to figure out how to translate this data into our object.
                let saveThrows = saving_throws.map(el => el.name);
                
                let tempSave = [...this.savingThrows]
                //set the isProficient property of the savethrow at the the index of the respective save
                this.savingThrows = tempSave.map(save => {
                    if (save === saveThrows[0]) save.isProficient = true;
                    if (save === saveThrows[1]) save.isProficient = true;
                    return save
                })

                this.hitDice = hit_die;
                this.skillProficiencies = [...this.skillProficiencies, this.arrayRandSelect(profChoice, profChoiceAmt)]
                this.proficiencies = [...this.proficiencies, proficiencies.map(el => {
                    return el.name
                })]
            }).catch(err => console.log(err))

    };

    getRaceData() {
        //based on the selected race it will set the state of the character to the optimized selections for each racial choice
        axios.get(`/api/e/dnd/races/${this.race}`)
            .then(data => {
                const {
                    speed,
                    ability_bonuses,
                    size,
                    starting_proficiencies,
                    starting_proficiencie_options,
                    languages,
                    traits
                } = data;

                // subraces

                if (starting_proficiencie_options) {
                    let startProfOp = starting_proficiencie_options.map(el => el.name)
                    var startOps = this.arrayRandSelect(startProfOp, starting_proficiencie_options.choose)
                    this.proficiencies = [...this.proficiencies, startOps]
                }
                ability_bonuses.map(el => {
                    if (el !== 0) {
                        let pos = ability_bonuses.indexOf(el)
                        return this.attributes[pos].val += el;
                    }
                    else return false;
                })

                this.traits = [...this.traits, traits]
                this.languages = [...this.languages, languages.map(el => el.name)];
                this.speed = speed;
                this.size = size;
                this.proficiencies = [
                    ...this.proficiencies,
                    starting_proficiencies.map(el => el.name)
                ]
            }).catch(err => console.log(err))

    };

    build() {
        this.getClassData();
        this.getRaceData();
        console.log(this)
        // this.handleFinalSubmitPush();
    }
}

// let John = new CharacterGen("John", "Human", "Bard", "CN")
// John.build();
// console.log(John)

export default CharacterGen;