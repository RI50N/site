(function() {
  'use strict';

  angular
    .module('customerRegistration')
    .component('dashboardSidenav', {
      controller: Controller,
      templateUrl: 'app/dashboard-sidenav/dashboard-sidenav-template.html',
    });

  Controller.$inject = [

  ];

  function Controller() {
    var self = this;
    var SIDENAV_ORIGIN = 'left';

    /* Public methods */
    self.close = close;
    self.logout = logout;
    self.home = home;
    /* Lifecycle hooks */
    self.$onInit = onInit;

    function close() {
      $mdSidenav(SIDENAV_ORIGIN).toggle();
    }

    function logout() {

    }

    function home() {

    }

    function onInit() {

    }
  }
}());
