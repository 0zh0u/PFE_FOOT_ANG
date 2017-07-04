import angular from "angular";
import angularMeteor from "angular-meteor";
import "bootstrap/dist/css/bootstrap.css";
import "../imports/external-lib/soccer/css/soccerfield.css";
import "../imports/external-lib/soccer/js/jquery.soccerfield.js";
import trem from "../imports/components/trem/trem";
import {Teams} from "../imports/api/Teams";

angular.module('pfe-foot', [
    angularMeteor,
    trem.name
]);

function onReady() {
    angular.bootstrap(document, ['pfe-foot']);
}

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}
