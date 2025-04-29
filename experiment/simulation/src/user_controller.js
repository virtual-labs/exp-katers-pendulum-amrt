(function(){
    angular
    .module('users',['FBAngular'])
    .controller('UserController', [
        '$mdSidenav', '$mdBottomSheet', '$log', '$q','$scope','$element','Fullscreen','$mdToast','$animate','$mdDialog',
        UserController
    ]);
	   
    /**
    * Main Controller for the Angular Material Starter App
    * @param $scope
    * @param $mdSidenav
    * @param avatarsService
    * @constructor
    */
    function UserController( $mdSidenav, $mdBottomSheet, $log, $q,$scope,$element,Fullscreen,$mdToast, $animate,$mdDialog) {
        
	    $scope.toastPosition = {
            bottom: true,
            top: false,
            left: true,
            right: false
        };
        $scope.toggleSidenav = function(ev) {
            $mdSidenav('right').toggle();
        };
        $scope.getToastPosition = function() {
            return Object.keys($scope.toastPosition)
            .filter(function(pos) { return $scope.toastPosition[pos]; })
            .join(' ');
        };
        $scope.showActionToast = function() {        
            var toast = $mdToast.simple()
            .content(helpArray[0])
            .action(helpArray[10])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());
        
            var toast1 = $mdToast.simple()
            .content(helpArray[1])
            .action(helpArray[10])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());
		  
            var toast2 = $mdToast.simple()
            .content(helpArray[2])
            .action(helpArray[10])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());
            
            var toast3 = $mdToast.simple()
            .content(helpArray[3])
            .action(helpArray[10])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());
            
            var toast4 = $mdToast.simple()
            .content(helpArray[4])
            .action(helpArray[10])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());
            

            var toast5 = $mdToast.simple()
            .content(helpArray[5])
            .action(helpArray[10])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast6 = $mdToast.simple()
            .content(helpArray[6])
            .action(helpArray[10])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast7 = $mdToast.simple()
            .content(helpArray[7])
            .action(helpArray[10])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());
            
            var toast8 = $mdToast.simple()
            .content(helpArray[8])
            .action(helpArray[10])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());
            
            var toast9 = $mdToast.simple()
            .content(helpArray[9])
            .action(helpArray[11])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());


        $mdToast.show(toast).then(function() {
            $mdToast.show(toast1).then(function() {
                $mdToast.show(toast2).then(function() {
                    $mdToast.show(toast3).then(function() {
                        $mdToast.show(toast4).then(function() {
                            $mdToast.show(toast5).then(function() {
                                $mdToast.show(toast6).then(function() {
                                    $mdToast.show(toast7).then(function() {
                                        $mdToast.show(toast8).then(function() {
                                            $mdToast.show(toast9).then(function() {
                                            
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });		
        };
        $scope.showAlert = function(ev) {console.log('qqqqq',$mdDialog)
           $mdDialog.show (
              $mdDialog.alert()
                 .parent(angular.element(document.querySelector('#dialogContainer')))
                 .clickOutsideToClose(true)
                 .title(alertMessage)
                 .ariaLabel(alertMessage)
                 .ok(alertArray[2])
                 .targetEvent(ev)
                 
           ).finally(function() {console.log(":::>")
                alertFlag = false;
           });
         console.log('qqqqq>>>>>>>>>',$mdDialog)
        };
        var self = this;
        self.selected     = null;
        self.users        = [ ];
        self.toggleList   = toggleUsersList;

        $scope.showValue = true; /** It hides the 'Result' tab */
        $scope.showVariables = false; /** I hides the 'Variables' tab */
        $scope.isActive = true;
        $scope.isActive1 = true;        
		
        $scope.goFullscreen = function () {
            /** Full screen */
            if (Fullscreen.isEnabled())
                Fullscreen.cancel();
            else
                Fullscreen.all();
            /** Set Full screen to a specific element (bad practice) */
            /** Full screen.enable( document.getElementById('img') ) */
        };
        
        $scope.toggle = function () {
            $scope.showValue=!$scope.showValue;
            $scope.isActive = !$scope.isActive;
        };
	
        $scope.toggle1 = function () {
            $scope.showVariables=!$scope.showVariables;
            $scope.isActive1 = !$scope.isActive1;
        };

        /** Function to set environment */
        $scope.changeEnvironment = function(){
            changeEnvironment($scope); /** Function defined in experiment.js file */
        } 
        /** Function to set mass of steel weight */
        $scope.changeSteelMass = function(){
            changeSteelMass($scope); /** Function defined in experiment.js file */
        }
        /** Function to set mass of wooden weight */
        $scope.changeWoodenMass = function(){
            changeWoodenMass($scope); /** Function defined in experiment.js file */
        }
        /** Function to set position of knife edge */
        $scope.changeKnifePosition = function(){
            changeKnifePosition($scope); /** Function defined in experiment.js file */
        } 
        /** Function to set position of wooden weight and steel weight */
        $scope.changeSteelWoodPosition = function(){
            changeSteelWoodPosition($scope); /** Function defined in experiment.js file */
        } 
        /** Function to set position of cylinder  */
        $scope.changeCylinderPosition = function(){
            changeCylinderPosition($scope); /** Function defined in experiment.js file */
        }       
        /** Function to invert the pendulum  */
        $scope.invertPendulum = function(){
            invertPendulum($scope); /** Function defined in experiment.js file */
        }
        /** Function to paly/pause the pendulum  */
        $scope.playPause = function(){
            playPause($scope); /** Function defined in experiment.js file */
        }
        /** Function to stop the motion of pendulum  */
        $scope.stopMotion = function(){
            stopMotion($scope); /** Function defined in experiment.js file */
        } 
        /** Function to the measurement of pendulum  */
        $scope.showMeasurement = function(){
            showMeasurement($scope); /** Function defined in experiment.js file */
        }
        /** Function for reset experiment */
        $scope.resetExperiment = function(){
            $mdToast.cancel();
            resetExperiment($scope); /** Function defined in experiment.js file */
        }
        /**
        * First hide the bottom sheet IF visible, then
        * hide or Show the 'left' sideNav area
        */
        function toggleUsersList() {
            $mdSidenav('right').toggle();
        }
    }
})();