import { Meteor } from 'meteor/meteor';
import { Teams } from '../imports/api/Teams.js';
import '../imports/api/Teams.js';

Meteor.startup(() => {
        Teams.remove({});


        const teams = [{
            "_id" : "PSG",
            "name": "Paris Saint Germain",
            "Events" : [
                {
                    "type" : "match",
                    "date" : 1499108400,
                    "location" : "Paris",
                    "score_a" : 3,
                    "team_b": "OM",
                    "score_b" : 2,
                    "duration" : 5520,
                    "Players": [
                        {
                            "player" : "psgJ1",
                            "confirmed" : false
                        },
                        {
                            "player" : "psgJ2",
                            "confirmed" : true
                        },
                        {
                            "player" : "psgJ2",
                            "confirmed" : true
                        }
                    ]
                },
                {
                    "type" : "training",
                    "date" : 1499367600,
                    "location" : "Paris",
                    "duration" : 7200,
                    "Players": [
                        {
                            "player" : "psgJ1",
                            "confirmed" : false
                        },
                        {
                            "player" : "psgJ2",
                            "confirmed" : true
                        },
                        {
                            "player" : "psgJ2",
                            "confirmed" : true
                        }
                    ]
                }
            ],
            "Players": [
                {
                    "_id" : "psgJ1",
                    "firstname" : "Toto",
                    "lastname" : "Titi",
                    "condition" : "OK",
                    "condition_type" : "good",
                    "Stats": {
                        "speed": 30,
                        "control": 40,
                        "teamwork": 50,
                        "attack": 60,
                        "defense": 70
                    },
                    "isDisabled": false
                },
        {
            "_id" : "psgJ2",
            "firstname" : "Tata",
            "lastname" : "Tutu",
            "condition" : "Fracture à la jambe",
            "condition_type" : "hurt",
            "Stats": {
                "speed" :  30,
                "control" : 50,
                "teamwork" : 40,
                "attack" : 80,
                "defense" : 30
            },
            "isDisabled": false
        },
        {
            "_id" : "psgJ3",
            "firstname" : "Lolo",
            "lastname" : "Lili",
            "condition" : "Une semaine de repos",
            "condition_type" : "tired",
            "Stats": {
                "speed": 40,
                "control": 60,
                "teamwork": 40,
                "attack": 60,
                "defense": 70
            },
            "isDisabled": false
        }
    ]
    }, {
            "_id" : "OM",
                "name": "Olympiques de Marseille",
                "Events" : [
                {
                    "type" : "match",
                    "date" : 1499108400,
                    "location" : "Paris",
                    "score_a" : 2,
                    "team_b": "PSG",
                    "score_b" : 3,
                    "duration" : 5520,
                    "Players": [
                        {
                            "player" : "omJ1",
                            "confirmed" : false
                        },
                        {
                            "player" : "omJ2",
                            "confirmed" : true
                        },
                        {
                            "player" : "omJ2",
                            "confirmed" : true
                        }
                    ]
                },
                {
                    "type" : "training",
                    "date" : 1499367600,
                    "location" : "Paris",
                    "duration" : 7200,
                    "Players": [
                        {
                            "player" : "psgJ1",
                            "confirmed" : false
                        },
                        {
                            "player" : "psgJ2",
                            "confirmed" : true
                        },
                        {
                            "player" : "psgJ2",
                            "confirmed" : true
                        }
                    ]
                }
            ],
                "Players": [
                {
                    "_id" : "omJ1",
                    "firstname" : "Toto",
                    "lastname" : "Titi",
                    "condition" : "OK",
                    "condition_type" : "good",
                    "Stats": {
                        "speed": 30,
                        "control": 40,
                        "teamwork": 50,
                        "attack": 60,
                        "defense": 70
                    },
                    "isDisabled": false
        },
            {
                "_id" : "omJ2",
                "firstname" : "Tata",
                "lastname" : "Tutu",
                "condition" : "Fracture à la jambe",
                "condition_type" : "hurt",
                "Stats": {
                    "speed" : 30,
                    "control" : 40,
                    "teamwork" : 50,
                    "attack" : 60,
                    "defense" : 70
                },
                "isDisabled": false
            },
            {
                "_id" : "omJ3",
                "firstname" : "Lolo",
                "lastname" : "Lili",
                "condition" : "Une semaine de repos",
                "condition_type" : "tired",
                "Stats": {
                    "speed": 30,
                    "control": 40,
                    "teamwork": 50,
                    "attack": 60,
                    "defense": 70
                },
                "isDisabled": false
            }
        ]
        }, {
            "_id" : "OL",
                "name": "Olympiques de Lyon",
                "Players": [
                {
                    "firstname" : "Toto",
                    "lastname" : "Titi",
                    "isDisabled": false
                },
                {
                    "firstname" : "Tata",
                    "lastname" : "Tutu",
                    "isDisabled": false
                },
                {
                    "firstname" : "Lolo",
                    "lastname" : "Lili",
                    "isDisabled": false
                }
            ]
        }];

        teams.forEach((team) => {
            Teams.insert(team)
        });
});