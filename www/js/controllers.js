angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('LangsCtrl', function($scope, Langs) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.langs = Langs.all();
  $scope.remove = function(lang) {
    Langs.remove(lang);
  };
})

.controller('LangDetailCtrl', function($scope, $stateParams, Langs, $window) {

    $scope.lang  = Langs.get($stateParams.langId);

    $scope.shareAnywhere = function(){
      message = {
          text: $scope.lang.name,
          image: 'https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-128.png',
          url: $scope.lang.link
      };
      $window.socialmessage.send(message);
    };

    $scope.openBrowser = function() {
      $window.open($scope.lang.link, '_system');
    };
});
