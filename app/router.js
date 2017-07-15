angular.module('mwLeagueApp').config(
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html'
      })
      .state('events', {
        url: '/events',
        templateUrl: 'app/events/events.html'
      })
      .state('rankings', {
        url: '/rankings',
        templateUrl: 'app/rankings/rankings.html'
      })
      .state('gallery', {
        url: '/gallery',
        templateUrl: 'app/gallery/gallery.html'
      })
      .state('aboutUs', {
        url: '/aboutUs',
        templateUrl: 'app/aboutUs/aboutUs.html'
      })
      .state('contactUs', {
        url: '/contactUs',
        templateUrl: 'app/contactUs/contactUs.html'
      });
    });
