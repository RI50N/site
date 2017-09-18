(function() {
  'use strict';

  angular
    .module('customerRegistration')
    .component('dashboard', {
      controller: Controller,
      templateUrl: 'app//dashboard/dashboard-template.html'
    });

  Controller.$inject = [

  ];

  function Controller() {
    var self = this;
  }
}());
