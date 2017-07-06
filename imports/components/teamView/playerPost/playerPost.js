import angular from "angular";
import angularMeteor from "angular-meteor";

import template from "./playerPost.html";

class PlayerPost {
    constructor($scope,player) {

        $scope.viewModel(this);

        //$reactive(this).attach($scope);

        this.player={};

        this.helpers({
            player : function(){
                return player;
            }

        });
    }
}

const name = 'playerPost'

export default angular.module(name, [
    angularMeteor

])
    .component(name, {
        templateUrl: template,
        controllerAs: name,
        controller : ["$scope",PlayerPost]
    });
