import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import {Teams} from "../../api/Teams";

import template from "./pfeFoot.html";

class PfeFoot {
}

const name = 'pfeFoot'

export default angular.module(name, [
    angularMeteor,
    uiRouter
])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: PfeFoot
    })
    .config(config);

function config($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    console.log("test !! : " + Teams.find().count());

    if (Teams.find().count() == 0)
        $urlRouterProvider.otherwise('/create-first-team');
    else
        $urlRouterProvider.otherwise('/:team-id/dashboard');
}
