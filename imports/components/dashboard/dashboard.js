import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import {name as Header} from "../header/header";
import {name as PlayerRow} from "../playerRow/playerRow";
import {Teams} from "../../api/Teams";

import template from "./dashboard.html";

class DashboardCtrl {
    constructor($scope,$stateParams) {

        $scope.viewModel(this);

        //$reactive(this).attach($scope);

        this.subscribe('teams');

        this.helpers({
            teams : function(){
                return Teams.find();
            },
            team() {
                return Teams.findOne({_id: $stateParams.teamId});
            }
        });
    }
}

const name = 'dashboard'

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    Header,
    PlayerRow
])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: ['$scope',"$stateParams",DashboardCtrl]
    })
    .config(function ($stateProvider) {
        'ngInject';
            $stateProvider.state('dashboard', {
                url: '/:teamId/dashboard',
                template: '<dashboard></dashboard>'
            });
        }
    );