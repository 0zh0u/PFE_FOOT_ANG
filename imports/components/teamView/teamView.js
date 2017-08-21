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
            {column: [{disabled: "true"},{disabled: "true"},{field: "GK"},{disabled: "true"},{disabled: "true"}]},
            {column : [{field: "L_B"},{field: "LC_B"},{field: "C_B"},{field: "RC_B"},{field: "R_B"}]},
            {column : [{field: "L_DM"},{field: "LC_DM"},{field: "C_DM"},{field: "RC_DM"},{field: "R_DM"}]},
            {column : [{field: "L_M"},{field: "LC_M"},{field: "C_M"},{field: "RC_M"},{field: "R_M"}]},
            {column : [{field: "L_AM"},{field: "LC_AM"},{field: "C_AM"},{field: "RC_AM"},{field: "R_AM"}]},
            {column :[{disabled: "true"},{field: "LC_F"},{field: "C_F"},{field: "RC_F"},{disabled: "true"}]}
        ];
        $scope.viewModel(this);
        $scope.currentFormation = 4-4-2;
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
                template: '<team-view flex layout="column"></team-view>'
            });
        });
