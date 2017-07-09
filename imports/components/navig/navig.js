import angular from "angular";
import angularMeteor from "angular-meteor";
import {Teams} from "../../api/Teams";

import template from "./navig.html";

class Navig {
    constructor($scope) {
        $scope.viewModel(this);

        this.subscribe('teams');

        this.helpers({
            teams() {
                return Teams.find(
                    // {
                    //     _id: { $ne: this.getReactively('currentTeam._id') }
                    // }
                );
            }
        });
    }
}

const name = 'navig'

export default angular.module(name, [
    angularMeteor
])
    .component(name, {
        templateUrl: template,
        controller: ['$scope', Navig],
        controllerAs: name,
        bindings: {
            currentTeam: '=',
            menuOpened: '='
        }
    });
