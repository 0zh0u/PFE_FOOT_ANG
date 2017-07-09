import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import {name as PlayerUpdateCtrl} from "../playerUpdate/playerUpdate";
import {name as PlayerCreateCtrl} from "../playerCreate/playerCreate";
import {Teams} from "../../api/Teams";
import {name as Navig} from "../navig/navig";

import template from "./players.html";

class PlayersCtrl {
    constructor($scope,$stateParams,$mdDialog) {

        $scope.viewModel(this);

        //$reactive(this).attach($scope);

        this.helpers({
            team() {
                return Teams.findOne({_id: $stateParams.teamId});
            }
        });

        this.showDialog = function(ev, id) {
            $mdDialog.show({
                contentElement: '#'+ id +'-Pop',
                parent: angular.element(document.body),
                clickOutsideToClose: true
            });
        };
    }
}

const name = 'players'

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    PlayerUpdateCtrl,
    PlayerCreateCtrl,
    Navig
])
    .component(name, {
        templateUrl: template,
        controller : ["$scope","$stateParams",'$mdDialog',PlayersCtrl],
        controllerAs: name,
        bindings: {
            player: "="
        }
    }).config(function ($stateProvider) {
        'ngInject';

        $stateProvider
            .state('players', {
                url: '/:teamId/players',
                template: '<players></players>'
            });
    });