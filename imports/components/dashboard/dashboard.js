import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import {name as Navig} from "../navig/navig";
import {name as PlayerRow} from "../playerRow/playerRow";
import {Teams} from "../../api/Teams";

import template from "./dashboard.html";

class DashboardCtrl {
    constructor($scope, $stateParams, $mdMedia, $mdDialog) {
        'ngInject';

        $scope.viewModel(this);

        //$reactive(this).attach($scope);

        this.subscribe('teams');

        this.team = {};

        this.helpers({
            $mdMedia() {
              return $mdMedia;
            },
            teams: function () {
                return Teams.find();
            },
            team() {
                return team = Teams.findOne({_id: $stateParams.teamId});
            }
        });

        this.showDialog = function (ev, id) {
            $mdDialog.show({
                contentElement: '#' + id + '-Pop',
                parent: angular.element(document.body),
                clickOutsideToClose: true
            });
        };

        this.findPlayer = player => this.team.Players.filter(e => e._id == player)[0];

        this.updateParticipation = (eventIndex, playerIndex, participation) => {
            Meteor.call('teams.updatePlayerParticipation', this.team._id, eventIndex, playerIndex, participation);
        }
    }
}

const name = 'dashboard'

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    PlayerRow,
    Navig
])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller: ['$scope', "$stateParams", '$mdMedia', '$mdDialog', DashboardCtrl]
    })
    .config(function ($stateProvider) {
            'ngInject';
            $stateProvider.state('dashboard', {
                url: '/:teamId/dashboard',
                template: '<dashboard flex layout="column"></dashboard>'
            });
        }
    );