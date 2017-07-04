import angular from "angular";
import angularMeteor from "angular-meteor";

import template from "./playerUpdate.html";

class PlayerUpdateCtrl {
    constructor($scope) {

    }
}

const name = 'playerUpdate'

export default angular.module(name, [
    angularMeteor

])
    .component(name, {
        templateUrl: template,
        controller: ['$scope', PlayerUpdateCtrl],
        bindings: {
            player: "="
        }
    });