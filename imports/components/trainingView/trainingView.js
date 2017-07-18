import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import {name as Navig} from "../navig/navig";
import {Teams} from "../../api/Teams";

import template from "./trainingView.html";

class TrainingViewCtrl {
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

const name = 'trainingView'

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    Navig

])
    .component(name, {
        templateUrl: template,
        controllerAs : name,
        controller: ['$scope','$stateParams', TrainingViewCtrl]
    })
    .config(function ($stateProvider) {
            'ngInject';
            $stateProvider.state('trainingView', {
                url: '/:teamId/trainings/:trainingId',
                template: '<training-view flex layout="column"></training-view>'
            });
        }
    );
