import angular from "angular";
import angularMeteor from "angular-meteor";

import template from "./playerRow.html";

class PlayerRow {
}

const name = 'playerRow'

export default angular.module(name, [
    angularMeteor
])
    .component(name, {
        templateUrl: template,
        bindings: {
            player: "="
        }
    });