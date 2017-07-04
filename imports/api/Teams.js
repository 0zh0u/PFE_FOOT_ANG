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