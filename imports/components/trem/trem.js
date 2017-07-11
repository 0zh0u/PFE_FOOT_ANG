import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';
import ngDatatable from 'angular-material-data-table';
import 'angular-material-data-table/dist/md-data-table.min.css';
import 'angular-material/angular-material.css';
import {name as SelectTeam} from "../selectTeam/selectTeam";
import {name as DashboardCtrl} from "../dashboard/dashboard";
import {name as PlayersCtrl} from "../players/players";
import {name as playerView} from "../playerView/playerView";
import {name as teamCreate} from "../teamCreate/teamCreate";
import {name as teamView} from "../teamView/teamView";
import {Teams} from "../../api/Teams";

import template from "./trem.html";

class Trem {

}

const name = 'trem'

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ngMessages,
    ngMaterial,
    ngDatatable,
    SelectTeam,
    DashboardCtrl,
    PlayersCtrl,
    playerView,
    teamCreate,
    teamView
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
