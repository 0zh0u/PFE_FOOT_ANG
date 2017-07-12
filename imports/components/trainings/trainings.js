import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import {name as Navig} from "../navig/navig";
import {Teams} from "../../api/Teams";

import template from "./trainings.html";

class TrainingsCtrl {
    constructor($scope,$stateParams) {
        $scope.viewModel(this);

        this.subscribe('teams');

        this.helpers({
            teams : function(){
                return Teams.find();
            },
            team() {
                return team = Teams.findOne({_id: $stateParams.teamId});
            }
        });
    }
}

const name = 'trainings'

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    Navig

])
    .component(name, {
        templateUrl: template,
        controllerAs : name,
        controller: ['$scope','$stateParams', TrainingsCtrl]
    })
    .config(function ($stateProvider) {
            'ngInject';
            $stateProvider.state('trainings', {
                url: '/:teamId/trainings',
                template: '<trainings flex layout="column"></trainings>'
            });
        }
    );
