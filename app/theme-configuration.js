(function() {
    'use strict';

    angular
        .module('customerRegistration')
        .config(Configuration);

    Configuration.$inject = [
        '$mdThemingProvider',
        '$mdIconProvider'
    ];

    function Configuration($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default': '700',
                'hue-1': '600',
                'hue-2': 'A400'
            })
            .accentPalette('teal', {
                'default': 'A400',
                'hue-2': '700'
            })
            .warnPalette('red', {
                'default': '400',
                'hue-2': 'A400'
            })
            .backgroundPalette('grey');

        $mdIconProvider
            .defaultIconSet('app/static-resource/img/icons/mdi-icons.svg', 24)
            .iconSet('social','app/static-resource/img/icons/social-icons.svg', 24);
    }
}());
