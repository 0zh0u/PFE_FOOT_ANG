import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";

import template from "./dashboard.html";

class DashboardCtrl {
}

const name = 'dashboard'

export default angular.module(name, [
    angularMeteor,
    uiRouter
])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: DashboardCtrl
    });
    // .config(function ($stateProvider) {
    //         $stateProvider.state('dashboard', {
    //             url: '/:teamId/dashboard',
    //             templateUrl: template,
    //             controller: 'DashboardCtrl'
    //         });
    //     }
    // )
    // .controller('DashboardCtrl', function ($scope, $stateParams) {
    //     $scope.subscribe('teams', function () {
    //         return [$stateParams.teamId];
    //     });
    //     $scope.helpers({
    //         teams: function () {
    //             return Teams.findOne({_id: $stateParams.teamId});
    //         }
    //     });
    // });