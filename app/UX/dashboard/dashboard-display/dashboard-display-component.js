(function() {
'use strict';

    angular
        .module('customerRegistration')
        .component('dashboardDisplay', {
        controller: Controller,
        templateUrl: 'app/UX/dashboard/dashboard-display/dashboard-display-template.html'
        });

    Controller.$inject = [
        '$element',
        '$log'
    ];

    function Controller($element,$log) {
        var self = this;
        
        self.$onInit=onInit;
        self.querySearch   = querySearch;
        self.newState = newState;

        function newState(state) {
            alert("Sorry! You'll need to create a Constitution for " + state + " first!");
        }

        function querySearch (query) {
            var results = query ? self.users.filter( createFilterFor(query) ) : self.users,
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function loadAll() {
            var allUsers = 'Adriano, Adonis, Wal';

            return allUsers.split(/, +/g).map( function (user) {
                return {
                    value: user.toLowerCase(),
                    display: user
                };
            });
        }

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };

        }

        function onInit() {
            self.simulateQuery = false;
            self.isDisabled    = false;
            self.users        = loadAll();

            self.groups = ['grupo1' ,'grupo2' ,'grupo3' ,'grupo4' ,'grupo5', 'grupo6'];
            self.searchTerm;
            self.clearSearchTerm = function() {
                self.searchTerm = '';
            };

            $element.find('input').on('keydown', function(ev) {
                console.log();
                ev.stopPropagation();
            });
        }

    }
}());
