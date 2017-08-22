import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";

export const Teams = new Mongo.Collection('teams');

if (Meteor.isServer) {

    Teams.allow({
        'insert': function (userId, doc) {
            /* user and doc checks ,
             return true to allow insert */
            return true;
        }
    });

    Meteor.methods({
        'teams.updatePlayerParticipation'(teamId, eventIndex, playerIndex, participation) {
            var upd = {};
            upd['Events.' + eventIndex + '.Players.' + playerIndex + '.confirmed'] = participation;
            Teams.update(teamId, {
                    $set: upd
                }
            );
        },
        'teams.updatePlayer'(teamId, player) {
            Teams.update({"_id": teamId, "Players._id": player._id}, {
                    $set: {"Players.$": player}
                }
            );
        },
        'teams.createPlayer'(teamId, player) {
            Teams.update(teamId, {
                    $push: {"Players": player}
                }
            );
        },
        'teams.deletePlayer'(teamId, playerId) {
            Teams.update(teamId, {
                    $pull: {"Players": {"_id": playerId}}
                }
            );
        },
        'teams.deletePlayers'(teamId, playersId) {
            Teams.update(teamId, {
                    $pull: {"Players": {"_id": {$in: playersId } } }
                }
            );
        },
        'teams.updateTraining'(teamId, training) {
            Teams.update({"_id": teamId, "Events._id": training._id}, {
                    $set: {"Events.$": training}
                }
            );
        },
        'teams.createTraining'(teamId, training) {
            Teams.update(teamId, {
                    $push: {"Events": training}
                }
            );
        },
        'teams.deleteTraining'(teamId, trainingId) {
            Teams.update(teamId, {
                    $pull: {"Events": {"_id": trainingId}}
                }
            );
        },
        'teams.deleteTrainings'(teamId, trainingId) {
            Teams.update(teamId, {
                    $pull: {"Events": {"_id": {$in: trainingId } } }
                }
            );
        }
        // ,
        // 'teams.players.aggregate'(teamId, queryParams) {
        //     var rawTeams = Teams.rawCollection();
        //
        //     var formattedSort = {};
        //     if(queryParams.order.charAt(0) == "-")
        //         formattedSort["Players." + queryParams.order.substring(1)] = -1;
        //     else
        //         formattedSort["Players." + queryParams.order] = 1;
        //
        //     console.log("testagg : " + teamId +" / " + JSON.stringify(queryParams));
        //
        //     return Meteor.wrapAsync(rawTeams.aggregate, rawTeams)([
        //         {$match: {"_id": teamId}, formattedSort},
        //         // {$unwind: "$Players"},
        //         // {$group: {
        //         //
        //         // }},
        //
        //         // {$sort: formattedSort},
        //         // {$skip: queryParams.page-1},
        //         // {$limit: queryParams.limit}
        //     ]);
        // }
    });
}