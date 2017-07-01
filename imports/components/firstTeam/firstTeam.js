import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from 'angular-ui-router';

import template from './firstTeam.html';

class FirstTeam {}

const name = 'firstTeam'

export default angular.module(name, [
    angularMeteor,
    uiRouter
])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: FirstTeam
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('create-first-team', {
            url: '/create-first-team',
            template: '<first-team></first-team>'
        });
}
