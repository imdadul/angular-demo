angular.module('management.controllers',[]);
angular.module('management.services',[]);
angular.module('management.directives',[]);
angular.module('app.management', [
  'ui.router',
  'management.controllers',
  'management.services',
  'management.directives'
])

.config(function config($stateProvider,ROUTE_INFO) {
  $stateProvider.state(ROUTE_INFO.MANAGEMENT.STATE, {
    url: ROUTE_INFO.MANAGEMENT.URL,
    templateUrl: ROUTE_INFO.MANAGEMENT.TEMPLATE_URL,
    title:ROUTE_INFO.MANAGEMENT.TITLE
  });
});