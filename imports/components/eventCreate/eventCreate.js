import angular from "angular";
import angularMeteor from "angular-meteor";


import template from "./eventCreate.html";

const INITIAL_EVENT = {
    _id: 'tocreate',
    city: 'Ville',
    location: 'Stade de France',
	type: 'Match',
    date: new Date().getTime(),
};

class EventCreateCtrl {
    constructor($scope,$mdDialog) {

        $scope.viewModel(this);

        this.event = INITIAL_EVENT;

        this.closeDialog = function() {
            $mdDialog.hide();
        };
    }

    createEvent() {
        Meteor.call('teams.createEvent', this.teamId, angular.copy(this.event));

        this.event = INITIAL_EVENT;
        this.closeDialog();
    }
}

const name = 'eventCreate'

export default angular.module(name, [
    angularMeteor
])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: ['$scope','$mdDialog', EventCreateCtrl],
        bindings: {
            teamId: "<"
        }
    });