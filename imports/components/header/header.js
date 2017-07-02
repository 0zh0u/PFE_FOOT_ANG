import angular from 'angular';
import angularMeteor from "angular-meteor";
import {Teams} from "../../api/Teams";

import template from './header.html';

class Header {
    constructor($scope) {
        $scope.viewModel(this);

        this.subscribe('teams');

        this.helpers({
            teams() {
                return Teams.find();
            }
        });
    }
}

const name = 'navHeader'

export default angular.module(name, [
    angularMeteor
])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: ['$scope', Header],
        bindings: {
            currentTeam: '='
        }
    });
