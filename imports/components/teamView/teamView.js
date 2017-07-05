import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import drag from "meteor/s2corp:angular-drag-and-drop-lists";
import {Teams} from "../../api/Teams";
import {name as Navig} from "../navig/navig";

import template from "./teamView.html";

class TeamViewCtrl {
    constructor($scope,$stateParams) {
        'ngInject';

        $scope.viewModel(this);

        //$reactive(this).attach($scope);

        this.subscribe('teams');

        this.helpers({
            team() {
                return Teams.findOne({_id: $stateParams.teamId});
            }
        });
    }
}

const name = 'teamView'

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    Navig
])
    .component(name, {
        templateUrl: template,
        controller: ['$scope',"$stateParams", TeamViewCtrl],
        controllerAs : name
    }).config(function ($stateProvider) {
            'ngInject';
            $stateProvider.state('teamView', {
                url: '/:teamId/team',
                template: '<team-view></team-view>'
            });
        });