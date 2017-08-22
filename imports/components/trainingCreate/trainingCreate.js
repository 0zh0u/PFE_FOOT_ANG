import angular from "angular";
import angularMeteor from "angular-meteor";
// import hammer from 'hammerjs';


import template from "./trainingCreate.html";

const INITIAL_TRAINING = {
    _id: 'tocreate',
    city: 'Ville',
    location: 'Gymnase',
    date: new Date().getTime(),
    duration: 0
};

class TrainingCreateCtrl {
    constructor($scope,$mdDialog) {

        $scope.viewModel(this);

        this.training = INITIAL_TRAINING;

        this.statToAdd = "";

        this.closeDialog = function() {
            $mdDialog.hide();
        };
    }

    createTraining() {
        Meteor.call('teams.createTraining', this.teamId, angular.copy(this.training));

        this.training = INITIAL_TRAINING;
        this.closeDialog();
    }
}

const name = 'trainingCreate'

export default angular.module(name, [
    angularMeteor
])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: ['$scope','$mdDialog', TrainingCreateCtrl],
        bindings: {
            teamId: "<"
        }
    });