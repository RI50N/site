(function() {
  'use strict';

  angular
    .module('customerRegistration')
    .component('dashboardToolbar', {
      controller: Controller,
      templateUrl: 'app/UX/dashboard/dashboard-toolbar/dashboard-toolbar-template.html',
    });

  Controller.$inject = [
      '$filter'
  ];

  function Controller($filter) {
    var self = this;

    /* Public methods */
    self.$onInit = onInit;

    function onInit() {
      self.date = $filter('date')(new Date, 'dd/MM/yyyy');
    }
  }
}());
