import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import {Teams} from "../../api/Teams";

import template from "./teamCreate.html";

class teamCreateCtrl {
    constructor($scope) {

        $scope.viewModel(this);
        this.team = {};
        this.subscribe('teams');
        this.helpers({
            team(){
                return $scope.getReactively('$ctrl.team');
            }
            });
    }
    addTeam(newTeam){
        Teams.insert({
            _id : newTeam._id,
            name : newTeam.name,
            age : newTeam.age
        });
    }
}

const name = 'teamCreate'

export default angular.module(name, [
    angularMeteor,
    uiRouter
])
    .component(name, {
        templateUrl: template,
        controllerAs : name,
        controller: ['$scope', teamCreateCtrl]
    }).config(function ($stateProvider) {
    'ngInject';

    $stateProvider
        .state('playerView', {
            url: '/create-team',
            template: '<team-create></team-create>'
        });
});

