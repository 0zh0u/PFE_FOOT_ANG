import angular from "angular";
import angularMeteor from "angular-meteor";

import template from "./trainingUpdate.html";

class TrainingUpdateCtrl {
    constructor($scope, $mdDialog, $timeout) {
        $scope.viewModel(this);

        this.closeDialog = function() {
            $mdDialog.hide();
        };

        $timeout(() => {
            this.trainingUpd = angular.copy(this.training);
        });

        this.deleteTraining = () => {
            var confirm = $mdDialog.confirm()
                .title('Êtes-vous sûr de vouloir supprimer cet entraînement ?')
                .textContent("Cet entraînement sera supprimé de l'équipe.")
                .ariaLabel('Confirmer la suppression')
                .ok('Je suis sûr, supprimer cet entraînement')
                .cancel('Annuler');

            $mdDialog.show(confirm).then(() => Meteor.call('teams.deleteTraining', this.teamId, this.training._id));
        };

        this.updateTraining = () => Meteor.call('teams.updateTraining', this.teamId, angular.copy(this.trainingUpd));

    }
}

const name = 'trainingUpdate'

export default angular.module(name)
    .component(name, {
        templateUrl: template,
        controllerAs : name,
        controller: ['$scope', '$mdDialog', '$timeout', TrainingUpdateCtrl],
        bindings: {
            teamId: "<",
            training: "<"
        }
    });
