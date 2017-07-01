import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from 'angular-ui-router';
import "bootstrap/dist/css/bootstrap.css";
import pfeFoot from "../imports/components/pfeFoot/pfeFoot";
import "../imports/startup/accounts-config.js";
import {Teams} from "../imports/api/Teams"

angular.module('pfe-foot', [
    angularMeteor,
    uiRouter,
    pfeFoot.name
]);

function onReady() {
    angular.bootstrap(document, ['pfe-foot']);
}

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}
