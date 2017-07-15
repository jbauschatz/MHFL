angular.module('mwLeagueApp')
.directive('eventThumbnail', function () {
  return {
    restrict: 'E',
    templateUrl: 'component/event/eventThumbnail.html',
    scope: {
      name: '@',
      location: '@',
      date: '@',
      imagePath: '@'
    },
    link: function (scope, element, attrs) {
      console.log("path: " + scope.imagePath);
    }
  };
});