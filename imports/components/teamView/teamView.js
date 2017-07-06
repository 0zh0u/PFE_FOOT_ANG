import angular from "angular";
import angularMeteor from "angular-meteor";
import uiRouter from "angular-ui-router";
import drag from "ng-sortable";
import {Teams} from "../../api/Teams";
import {name as Navig} from "../navig/navig";
import {name as playerPost} from "./playerPost/playerPost";

import template from "./teamView.html";

class TeamViewCtrl {
    constructor($scope,$stateParams) {
        'ngInject';


        $scope.Formation =[
            {rows: [{disabled: "true"},{disabled: "true"},{field: "GK"},{disabled: "true"},{disabled: "true"}]},
            {rows : [{field: "L_B"},{field: "LC_B"},{field: "C_B"},{field: "RC_B"},{field: "R_B"}]},
            {rows : [{field: "L_DM"},{field: "LC_DM"},{field: "C_DM"},{field: "RC_DM"},{field: "R_DM"}]},
            {rows : [{field: "L_M"},{field: "LC_M"},{field: "C_M"},{field: "RC_M"},{field: "R_M"}]},
            {rows : [{field: "L_AM"},{field: "LC_AM"},{field: "C_AM"},{field: "RC_AM"},{field: "R_AM"}]},
            {rows :[{disabled: "true"},{field: "LC_F"},{field: "C_F"},{field: "RC_F"},{disabled: "true"}]}
        ];
        $scope.viewModel(this);

        //$reactive(this).attach($scope);

        this.subscribe('teams');

        this.helpers({
            team() {
                return Teams.findOne({_id: $stateParams.teamId});
            },
            Formation(){
                return $scope.Formation;
            }
        });



        $scope.data = [
            {name: 'Gianluigi Buffon', position: 'C_GK'},
            {name: 'Leonardo Bonucci', position: 'LC_B'},
            {name: 'Giorgio Chiellini', position: 'C_B'},
            {name: 'Andrea Barzagli', position: 'RC_B'},
            {name: 'Daniele De Rossi', position: 'C_DM'},
            {name: 'Alessandro Florenzi', position: 'L_M'},
            {name: 'Emanuele Giaccherini', position: 'LC_M'},
            {name: 'Marco Parolo', position: 'RC_M'},
            {name: 'Antonio Candreva', position: 'R_M'},
            {name: 'Éder', position: 'LC_F'},
            {name: 'Graziano Pellè', position: 'RC_F'},
        ];

        $scope.dragControlListeners = {
            accept: function (sourceItemHandleScope, destSortableScope) {return boolean},
            itemMoved: function (event) {},
                orderChanged: function(event) {},
                    containment: '#board',
                    clone: true ,
                    allowDuplicates: false
                };

        $scope.dragControlListeners1 = {
            containment: '#board',
            allowDuplicates: true
        };


        /// SOCCERFIELD
        Tracker.autorun(() => {
            var options = {
                //options for soccer field
                field: {
                    //soccer field width; default: 960px
                    width: "960px",
                    //soccer field height; default: 600px
                    height: "600px",
                    //img for soccer field default: 'img/soccerfield_green.png'
                    img: 'img/soccerfield_green.png',
                    //load page with hidden field; default:false
                    startHidden: true,
                    //animate field appearance with fade; default: false
                    animate: true,
                    //time for fadeIn
                    fadeTime: 1000,
                    //reveal field automatically on load (default:true), if set to false needs extra $selector.data("soccerfield").revealField() call
                    autoReveal: true,
                    //callback on soccer field reveal
                    onReveal: function () {
                    }
                },
                //options for players
                players: {
                    //font size for player names in pixels (default 16)
                    font_size: 16,
                    //reveal players or load with players not hidden; default: true
                    reveal: true,
                    //reveal simultaneously (default: true); if false  - players reveal one by one after selected timeout
                    sim: false,
                    //timeout between players reveal in sim:false mode
                    timeout: 1000,
                    //time for fadeIn players animation
                    fadeTime: 2000,
                    //player img, no img if false (default: false)
                    img: 'img/soccer-player.png',
                    //callback after all players revealed
                    onReveal: function () {
                        alert("players revealed!");
                    }
                }
            };
            $("#soccerfield").soccerfield($scope.data, options);
            /// SOCCERFIELD
        })
    }
}

const name = 'teamView'

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    Navig,
    playerPost
])
    .component(name, {
        templateUrl: template,
        controller: ['$scope',"$stateParams", TeamViewCtrl],
        controllerAs : name
    }).config(function ($stateProvider) {
            'ngInject';
            $stateProvider.state('teamView', {
                url: '/:teamId/team',
                template: '<team-view></team-view>'
            });
        });
