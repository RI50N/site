(function() {
  'use strict';

  angular
    .module('customerRegistration')
    .component('dashboardSidenavLauncher', {
      controller: Controller,
      templateUrl: 'app/UX/dashboard/dashboard-toolbar/dashboard-sidenav-launcher/dashboard-sidenav-launcher-template.html'
    });

  Controller.$inject = [
    '$mdSidenav'
  ];

  function Controller($mdSidenav) {
    var self = this;

    var SIDENAV_ORIGIN = 'left';

    /* Public methods */
    self.launchSidenav = launchSidenav;
    /* Lifecycle hooks */
    self.$onInit = onInit;

    function launchSidenav() {
      $mdSidenav(SIDENAV_ORIGIN).toggle();
    }

    function onInit() {
    }
  }
}());
