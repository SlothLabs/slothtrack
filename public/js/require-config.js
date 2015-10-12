requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: '../vendor/jquery/dist/jquery.min',
    bootstrap: '../vendor/bootstrap/dist/js/bootstrap.min',
    angular: '../vendor/angular/angular.min',
    angularRoute: '../vendor/angular-route/angular-route.min'
  }
});

require(['app/main']);
