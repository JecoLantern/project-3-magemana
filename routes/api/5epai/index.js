const axios = require('axios');

module.exports = function (app) {
    const url = 'http://dnd5eapi.co/api/';

    app.get("api/dnd/classes/:id", function (req, res) {
        switch (req.params.id) {
            case 'Barbarian':
                let index = 1;
                break;
            case 'Bard':
                let index = 2;
                break;
            case 'Cleric':
                let index = 3;
                break;
            case 'Druid':
                let index = 4;
                break;
            case 'Fighter':
                let index = 5;
                break;
            case 'Monk':
                let index = 6;
                break;
            case 'Paladin':
                let index = 7;
                break;
            case 'Ranger':
                let index = 8;
                break;
            case 'Sorcerer':
                let index = 10;
                break;
            case 'Warlock':
                let index = 11;
                break;
            case 'Wizard':
                let index = 12;
                break;
            case 'Rogue':
                let index = 9;
                break;
        }

        axios.get(`${url}/classes/${index}`)
        .then(function (data) {
            return res.json(data)
        })
    });

    app.get("api/dnd/subclasses/:id", function(req, res){
        switch (req.params.id) {
            case 'Barbarian':
                let index = 1;
                break;
            case 'Bard':
                let index = 2;
                break;
            case 'Cleric':
                let index = 3;
                break;
            case 'Druid':
                let index = 4;
                break;
            case 'Fighter':
                let index = 5;
                break;
            case 'Monk':
                let index = 6;
                break;
            case 'Paladin':
                let index = 7;
                break;
            case 'Ranger':
                let index = 8;
                break;
            case 'Sorcerer':
                let index = 10;
                break;
            case 'Warlock':
                let index = 11;
                break;
            case 'Wizard':
                let index = 12;
                break;
            case 'Rogue':
                let index = 9;
                break;
        }

        axios.get(`${url}/subclasses/${index}`)
        .then(function (data) {
            return res.json(data)
        })
    })

    app.get("api/dnd/races/:id", function(req, res){
        switch (req.params.id) {
            case"Dwarf":
            let index = 1
                break;
            case"Elf":
            let index = 2
                break;
            case"Halfling":
            let index = 3
                break;
            case"Human":
            let index = 4
                break;
            case"Dragonborn":
            let index = 5
                break;
            case"Gnome":
            let index = 6
                break;
            case"Half-Elf":
            let index = 7
                break;
            case"Half-Orc":
            let index = 8
                break;
            case"Tiefling":
            let index = 9
                break;
        }
        
        axios.get(`${url}/races/${index}`)
        .then(function (data) {
            return res.json(data)
        })
    })


}