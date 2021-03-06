import {Meteor} from "meteor/meteor";
import {Teams} from "../imports/api/Teams.js";
import "../imports/api/Teams.js";

Meteor.startup(() => {
    Teams.remove({});

    const teams = [{
        "_id": "PSG",
        "name": "Paris Saint Germain",
        "Events": [
            {
                "_id":"psgevt1",
                "type": "match",
                "date": new Date().getTime(),
                "city": "Paris",
                "location": "Stade de France",
                "score_a": 3,
                "team_b": "OM",
                "score_b": 2,
                "duration": 5520,
                "Players": [
                    {
                        "player": "psgJ1",
                        "confirmed": 'wait'
                    },
                    {
                        "player": "psgJ2",
                        "confirmed": 'will'
                    },
                    {
                        "player": "psgJ3",
                        "confirmed": 'wont'
                    }
                ],
            },
            {
                "_id":"psgevt2",
                "type": "training",
                "date": new Date().getTime(),
                "city": "Paris",
                "location": "Stade de France",
                "duration": 9000,
                "Players": [
                    {
                        "player": "psgJ1",
                        "confirmed": false
                    },
                    {
                        "player": "psgJ2",
                        "confirmed": true
                    },
                    {
                        "player": "psgJ2",
                        "confirmed": true
                    }
                ]
            },
            {
                "_id":"psgevt3",
                "type": "training",
                "date": new Date().getTime(),
                "city": "Paris",
                "location": "Parc des Princes",
                "duration": 7200,
                "Players": [
                    {
                        "player": "psgJ1",
                        "confirmed": false
                    },
                    {
                        "player": "psgJ2",
                        "confirmed": true
                    },
                    {
                        "player": "psgJ2",
                        "confirmed": true
                    }
                ]
            },
            {
                "_id":"psgevt4",
                "type": "training",
                "date": new Date().getTime(),
                "city": "Paris",
                "location": "Gymnase Pierre Lagravère",
                "duration": 3600,
                "Players": [
                    {
                        "player": "psgJ1",
                        "confirmed": false
                    },
                    {
                        "player": "psgJ2",
                        "confirmed": true
                    },
                    {
                        "player": "psgJ2",
                        "confirmed": true
                    }
                ]
            }
        ],
        "Players": [
            {
                "_id": "psgJ1",
                "firstname": "Toto",
                "lastname": "Titi",
                "condition": "OK",
                "condition_type": "good",
                "post" : "C_GK",
                "Stats": [
                    {name: "speed", value: 30},
                    {name: "control", value: 40},
                    {name: "teamwork", value: 50},
                    {name: "attack", value: 60},
                    {name: "defense", value: 70}
                ],
                "isDisabled": false
            },
            {
                "_id": "psgJ2",
                "firstname": "Tata",
                "lastname": "Tutu",
                "condition": "Fracture à la jambe",
                "condition_type": "hurt",
                "post" : "L_B",
                "Stats": [
                    {name: "speed", value: 30},
                    {name: "control", value: 40},
                    {name: "teamwork", value: 50},
                    {name: "attack", value: 60},
                    {name: "defense", value: 70}
                ],
                "isDisabled": false
            },
            {
                "_id": "psgJ3",
                "firstname": "Lolo",
                "lastname": "Lili",
                "condition": "Une semaine de repos",
                "condition_type": "tired",
                "post" : "R_B",
                "Stats": [
                    {name: "speed", value: 30},
                    {name: "control", value: 40},
                    {name: "teamwork", value: 50},
                    {name: "attack", value: 60},
                    {name: "defense", value: 70}
                ],
                "isDisabled": false
            }
        ]
    }, {
        "_id": "OM",
        "name": "Olympiques de Marseille",
        "Events": [
            {
                "_id":"omevt1",
                "type": "match",
                "date": new Date().getTime(),
                "city": "Paris",
                "location": "Stade de France",
                "score_a": 2,
                "team_b": "PSG",
                "score_b": 3,
                "duration": 5520,
                "Players": [
                    {
                        "player": "omJ1",
                        "confirmed": false
                    },
                    {
                        "player": "omJ2",
                        "confirmed": true
                    },
                    {
                        "player": "omJ2",
                        "confirmed": true
                    }
                ]
            },
            {
                "_id":"omevt2",
                "type": "training",
                "date": new Date().getTime(),
                "city":"Marseille",
                "location": "Stade Velodrome",
                "duration": 7200,
            }
        ],
        "Players": [
            {
                "_id": "omJ1",
                "firstname": "Toto",
                "lastname": "Titi",
                "condition": "OK",
                "condition_type": "good",
                "Stats": [
                    {name: "speed", value: 30},
                    {name: "control", value: 40},
                    {name: "teamwork", value: 50},
                    {name: "attack", value: 60},
                    {name: "defense", value: 70}
                ],
                "isDisabled": false
            },
            {
                "_id": "omJ2",
                "firstname": "Tata",
                "lastname": "Tutu",
                "condition": "Fracture à la jambe",
                "condition_type": "hurt",
                "Stats": [
                    {name: "speed", value: 30},
                    {name: "control", value: 40},
                    {name: "teamwork", value: 50},
                    {name: "attack", value: 60},
                    {name: "defense", value: 70}
                ],
                "isDisabled": false
            },
            {
                "_id": "omJ3",
                "firstname": "Lolo",
                "lastname": "Lili",
                "condition": "Une semaine de repos",
                "condition_type": "tired",
                "Stats": [
                    {name: "speed", value: 30},
                    {name: "control", value: 40},
                    {name: "teamwork", value: 50},
                    {name: "attack", value: 60},
                    {name: "defense", value: 70}
                ],
                "isDisabled": false
            }
        ]
    }, {
        "_id": "OL",
        "name": "Olympiques de Lyon",
        "Players": [
            {
                "firstname": "Toto",
                "lastname": "Titi",
                "isDisabled": false
            },
            {
                "firstname": "Tata",
                "lastname": "Tutu",
                "isDisabled": false
            },
            {
                "firstname": "Lolo",
                "lastname": "Lili",
                "isDisabled": false
            }
        ]
    }];

    teams.forEach((team) => {
        Teams.insert(team)
    });
});