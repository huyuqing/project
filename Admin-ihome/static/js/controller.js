
adminApp.controller('LoginCtrl', ['$scope', '$http', '$state',function ($scope, $http, $state) {

    $scope.login = {};
        
    //表单验证+提交
	$scope.submitLogin = function(isValid) {
        // check to make sure the form is completely valid
        if (isValid) {
            alert('our form is amazing');
            $state.go("home");
        };

        // $http({
        //     method  : 'POST',
        //     url     : 'process.php',
        //     data    : $.param($scope.login),  // pass in data as strings
        //     headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        // })
    };
}]);
