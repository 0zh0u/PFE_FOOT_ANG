import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import {Teams} from "../../api/Teams";

import template from "./teamUpdate.html";

class teamUpdateCtrl {
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
}

const name = 'teamUpdate'

export default angular.module(name, [
    angularMeteor,
    uiRouter
])
    .component(name, {
        templateUrl: template,
        controllerAs : name,
        controller: ['$scope', teamUpdateCtrl]
    }).config(function ($stateProvider) {
    'ngInject';

    $stateProvider
        .state('playerView', {
            url: '/update-team',
            template: '<team-update></team-update>'
        });
});