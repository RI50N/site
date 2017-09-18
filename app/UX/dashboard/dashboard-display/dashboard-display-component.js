(function() {
  'use strict';

  angular
    .module('customerRegistration')
    .component('dashboardDisplay', {
      controller: Controller,
      templateUrl: 'app/UX/dashboard/dashboard-display/dashboard-display-template.html'
    });

  function Controller() {
    var self = this;
  }
}());
