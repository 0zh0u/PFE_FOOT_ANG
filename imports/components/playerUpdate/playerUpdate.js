import angular from "angular";
import angularMeteor from "angular-meteor";

import template from "./playerUpdate.html";

class PlayerUpdateCtrl {
    constructor($scope, $mdDialog, $timeout) {
        $scope.viewModel(this);

        this.closeDialog = function() {
            $mdDialog.hide();
        };

        $timeout(() => {
            this.playerUpd = angular.copy(this.player);
        });

        this.deletePlayer = () => {
            var confirm = $mdDialog.confirm()
                .title('Êtes-vous sûr de vouloir supprimer ce joueur ?')
                .textContent("Ce joueur sera supprimé de l'équipe.")
                .ariaLabel('Confirmer la suppression')
                .ok('Je suis sûr, supprimer ce joueur')
                .cancel('Annuler');

            $mdDialog.show(confirm).then(() => Meteor.call('teams.deletePlayer', this.teamId, this.player._id));
        };

        this.updatePlayer = () => Meteor.call('teams.updatePlayer', this.teamId, angular.copy(this.playerUpd));
    }
}

const name = 'playerUpdate'

export default angular.module(name, [
    angularMeteor

])
    .component(name, {
        templateUrl: template,
        controller: ['$scope', '$mdDialog', '$timeout', PlayerUpdateCtrl],
        controllerAs: name,
        bindings: {
            teamId: "<",
            player: "<"
        }
    });