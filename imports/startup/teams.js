import { Teams } from '../imports/api/Teams.js';

if (Teams.find().count() === 0) {
    const teams = [{
        'name': 'Paris Saint Germain',
        "Players": [
            {
                "firstname" : "Toto",
                "lastname" : "Titi",
                "isDisabled": false,
            },
            {
                "firstname" : "Tata",
                "lastname" : "Tutu",
                "isDisabled": false,
            },
            {
                "firstname" : "Lolo",
                "lastname" : "Lili",
                "isDisabled": false,
            },
        ]
    }, {
        'name': 'Olympiques de Marseille',
        "Players": [
            {
                "firstname" : "Toto",
                "lastname" : "Titi",
                "isDisabled": false,
            },
            {
                "firstname" : "Tata",
                "lastname" : "Tutu",
                "isDisabled": false,
            },
            {
                "firstname" : "Lolo",
                "lastname" : "Lili",
                "isDisabled": false,
            },
        ]
    }, {
        'name': 'Olympiques de Lyon',
        "Players": [
            {
                "firstname" : "Toto",
                "lastname" : "Titi",
                "isDisabled": false,
            },
            {
                "firstname" : "Tata",
                "lastname" : "Tutu",
                "isDisabled": false,
            },
            {
                "firstname" : "Lolo",
                "lastname" : "Lili",
                "isDisabled": false,
            },
        ]
    }];

    teams.forEach((team) => {
        Teams.insert(team)
    });
}