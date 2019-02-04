const axios = require('axios');
const express = require('express');
const app = express()
module.exports = function (){
    const url = 'http://dnd5eapi.co/api';

    app.get("dnd/classes/:id", function (req, res) {
        switch (req.params.id) {
            case 'Barbarian': {
                var index = 1;
                break;
            }
            case 'Bard': {
                var index = 2;
                break;
            }
            case 'Cleric': {
                var index = 3;
                break;
            }
            case 'Druid': {
                var index = 4;
                break;
            }
            case 'Fighter': {
                var index = 5;
                break;
            }
            case 'Monk': {
                var index = 6;
                break;
            }
            case 'Paladin': {
                var index = 7;
                break;
            }
            case 'Ranger': {
                var index = 8;
                break;
            }
            case 'Sorcerer':
                var index = 10;
                break;
            case 'Warlock': {
                var index = 11;
                break;
            }
            case 'Wizard': {
                var index = 12;
                break;
            }
            case 'Rogue': {
                var index = 9;
                break;
            }
        }

        axios.get(`${url}/classes/${index}`)
            .then(function (data) {
                return res.json(data)
            })
    });

    app.get("dnd/subclasses/:id", function (req, res) {
        switch (req.params.id) {
            case 'Barbarian': {
                var index = 1;
                break;
            }
            case 'Bard': {
                var index = 2;
                break;
            }
            case 'Cleric': {
                var index = 3;
                break;
            }
            case 'Druid': {
                var index = 4;
                break;
            }
            case 'Fighter': {
                var index = 5;
                break;
            }
            case 'Monk': {
                var index = 6;
                break;
            }
            case 'Paladin': {
                var index = 7;
                break;
            }
            case 'Ranger': {
                var index = 8;
                break;
            }
            case 'Sorcerer':
                var index = 10;
                break;
            case 'Warlock': {
                var index = 11;
                break;
            }
            case 'Wizard': {
                var index = 12;
                break;
            }
            case 'Rogue': {
                var index = 9;
                break;
            }
        }

        axios.get(`${url}/subclasses/${index}`)
            .then(function (data) {
                return res.json(data)
            })
    })

    app.get("dnd/races/:id", function (req, res) {
        switch (req.params.id) {
            case "Dwarf": {
                var index = 1
                break;
            }
            case "Elf": {
                var index = 2
                break;
            }
            case "Halfling": {
                var index = 3
                break;
            }
            case "Human": {
                var index = 4
                break;
            }
            case "Dragonborn": {
                var index = 5
                break;
            }
            case "Gnome": {
                var index = 6
                break;
            }
            case "Half-Elf": {
                var index = 7
                break;
            }
            case "Half-Orc": {
                var index = 8
                break;
            }
            case "Tiefling": {
                var index = 9
                break;
            }
        }

        axios.get(`${url}/races/${index}`)
            .then(function (data) {
                return res.json(data)
            })
    })


}