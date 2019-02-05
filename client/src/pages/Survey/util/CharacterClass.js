import axios from 'axios';

class CharacterGen {
    constructor(name, race, className, alignment) {
        this.name = name;
        this.race = race;
        this.subrace = "";
        this.class = className;
        this.alignment = alignment;
        this.health = 0;
        this.hitDice = "";
        this.speed = 30;
        this.initiative = 0;
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
        this.skillProfiencies = [];
        this.proficencies = [];
        this.startingEquipment = [];
    }
    handleClassPush = (choice) => {
        //based on the selected Class it will set the character state to the optimized selections for this class, including attribute array, selected skills, proficiencies, and equipment
        axios.get(`/api/e/classes/${choice}`)
            .then(res => {

                const {
                    proficiencies,
                    proficiency_choices,
                    saving_throws,
                    hit_die,
                } = res

                let profChoice = proficiency_choices[0].from.map(el => {
                    return el.name
                });
                let profChoiceAmt = proficiency_choices[0].choose;

                let saveThrows = saving_throws.map(el => {
                    return el.name
                })

            })

    };

    handleRacePush = () => {
        //based on the selected race it will set the state of the character to the optimized selections for each racial choice

    };

    handleFinalSubmitPush = () => {
        //here we will make the finall submit to the database for the character then we will load the charactersheet with the unique id of the selected character
    };

}

export default CharacterGen;