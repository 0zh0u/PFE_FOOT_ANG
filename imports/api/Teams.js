import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Teams = new Mongo.Collection('teams');

if (Meteor.isServer) {

    Teams.allow({
        'insert': function (userId,doc) {
            /* user and doc checks ,
             return true to allow insert */
            return true;
        }
    });
}

Meteor.methods({
    'teams.updatePlayerParticipation'(teamId, eventIndex, playerIndex, participation) {
        var upd = {};
        upd['Events.'+ eventIndex +'.Players.'+ playerIndex +'.confirmed'] = participation;
        Teams.update(teamId, {
                $set: upd
            }
        );
    },
    'teams.updatePlayer'(teamId, player) {
        Teams.update({"_id" : teamId, "Players._id" : player._id}, {
                $set: {"Players.$" : player}
            }
        );
    },
    'teams.createPlayer'(teamId, player) {
        Teams.update(teamId, {
                $push: {"Players" : player}
            }
        );
    },
    'teams.deletePlayer'(teamId, playerId) {
        Teams.update(teamId, {
            $pull: {"Players" : {"_id" : playerId}}
            }
        );
    }
});