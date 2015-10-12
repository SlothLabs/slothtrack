var app = app || angular.module('slothtrack', [], function($provide) {
  $provide.decorator('$window', function($delegate) {
    $delegate.history = null;
    return $delegate;
  });
});
