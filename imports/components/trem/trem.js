import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import {name as SelectTeam} from "../selectTeam/selectTeam";
import {name as DashboardCtrl} from "../dashboard/dashboard";
import {name as playerView} from "../playerView/playerView";
import {Teams} from "../../api/Teams";

import template from "./trem.html";

class Trem {
}

const name = 'trem'

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    SelectTeam,
    DashboardCtrl,
    playerView
])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: Trem
    }).config(function ($locationProvider, $urlRouterProvider) {
        'ngInject';

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/teams');
    });
