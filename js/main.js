'use strict';

angular.module('app',[])

.controller('MainCtrl', function ($scope, $q, $timeout) {

    var promise = $q(function (resolve, reject) {
        doSomething(function (num) {
            resolve(num);
        }, function (num) {
            reject(num);
        });
    });

    promise.then(function (num) {
        $scope.result = 'success';
        console.info( 'success', num );
    }, function (num) {
        $scope.result = 'error';
        console.info( 'error', num );
    });

    // Async fn
    function doSomething(success, error) {
        $timeout(function () {
            success(1);
        }, randomNumber());

        $timeout(function () {
            error(0);
        }, randomNumber());
    }

    // Random number fn
    function randomNumber() {
        return Math.floor((Math.random() * 3000) + 1000);
    }

});
