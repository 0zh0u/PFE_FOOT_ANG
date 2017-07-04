import angular from "angular";
import angularMeteor from "angular-meteor";
import {Teams} from "../../api/Teams";

import template from "./navig.html";

class Navig {
    constructor($scope, currentteam) {
        $scope.viewModel(this);

        //$reactive(this).attach($scope);

        this.subscribe('teams');

        this.currentteam = {};

        this.helpers({
            currentteam() {
                return currentteam;
            },
            teams() {
                return Teams.find({
                        _id: { $ne: this.getReactively('currentteam._id') }
                    }
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
        bindings: {
            currentteam: '='
        }
    });
