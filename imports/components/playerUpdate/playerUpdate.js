import angular from "angular";
import angularMeteor from "angular-meteor";

import template from "./playerUpdate.html";

class PlayerUpdateCtrl {
    constructor($scope, $mdDialog) {
        $scope.viewModel(this);

        this.closeDialog = function() {
            $mdDialog.hide();
        };
    }
}

const name = 'playerUpdate'

export default angular.module(name, [
    angularMeteor

])
    .component(name, {
        templateUrl: template,
        controller: ['$scope', '$mdDialog', PlayerUpdateCtrl],
        controllerAs: name,
        bindings: {
            player: "<"
        }
    });