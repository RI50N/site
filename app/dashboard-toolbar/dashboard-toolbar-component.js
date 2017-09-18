(function() {
  'use strict';

  angular
    .module('customerRegistration')
    .component('dashboardToolbar', {
      controller: Controller,
      templateUrl: 'app/dashboard-toolbar/dashboard-toolbar-template.html',
    });

  Controller.$inject = [
  ];

  function Controller() {
    var self = this;

    /* Public methods */
    self.$onInit = onInit;

    function onInit() {

    }
  }
}());
