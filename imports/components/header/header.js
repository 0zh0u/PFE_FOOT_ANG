import angular from 'angular';
import angularMeteor from "angular-meteor";

import template from './header.html';

class Header {}

const name = 'navHeader'

export default angular.module(name, [
    angularMeteor
])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: Header
    });
