import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import "fullcalendar";
import "fullcalendar/dist/fullcalendar.min.css";
import "fullcalendar/dist/fullcalendar.print.min.css";
import {name as Navig} from "../navig/navig";
import {name as PlayerRow} from "../playerRow/playerRow";
import {Teams} from "../../api/Teams";

import template from "./dashboard.html";

class DashboardCtrl {
    constructor($scope, $timeout, $stateParams, $mdMedia, $mdDialog) {
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

        $timeout(function() {
            $scope.$watch('dashboard.team', function() {
                console.log("test watch : ");
                console.log(JSON.stringify(team));

                if(team)
                    $("#calendar").fullCalendar({
                        events( start, end, timezone, callback ) {
                            console.log("inside test : " + team);
                                callback( team.Events );
                        },
                        eventRender( event, element ) {
                            console.log("test render :");
                            console.log(JSON.stringify(event));
                            element.find( '.fc-content' ).html(
                                `<span class="fc-title ${ event.type }">${ event.type }</span>`
                            );
                        }
                    });
            });
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
        controller: ['$scope', "$timeout", "$stateParams", '$mdMedia', '$mdDialog', DashboardCtrl]
    })
    .config(function ($stateProvider) {
            'ngInject';
            $stateProvider.state('dashboard', {
                url: '/:teamId/dashboard',
                template: '<dashboard flex layout="column"></dashboard>'
            });
        }
    );