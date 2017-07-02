import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import {name as Header} from "../header/header";
import {Teams} from "../../api/Teams";

import template from "./dashboard.html";

class DashboardCtrl {
    constructor($scope, $stateParams) {
        $scope.viewModel(this);

        $scope.subscribe('teams', function () {
            return [$stateParams.teamId];
        });

        $scope.helpers({
            team: function () {
                return Teams.findOne({_id: $stateParams.teamId});
            }
        });
    }
}

const name = 'dashboard'

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    Header
])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: DashboardCtrl
    })
    .config(function ($stateProvider) {
            $stateProvider.state('dashboard', {
                url: '/:teamId/dashboard',
                template: '<dashboard></dashboard>',
                controller: 'DashboardCtrl'
            });
        }
    );