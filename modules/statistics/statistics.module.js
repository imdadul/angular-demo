angular.module('statistics.controllers', []);
angular.module('statistics.services', []);
angular.module('statistics.directives', []);

angular.module('app.statistics', [
  'statistics.controllers',
  'statistics.services',
  'statistics.directives'
])
.config(function config($stateProvider,ROUTE_INFO) {
  $stateProvider.state(ROUTE_INFO.STATISTICS.STATE, {
    url: ROUTE_INFO.STATISTICS.URL,
    templateUrl: ROUTE_INFO.STATISTICS.TEMPLATE_URL,
    title:ROUTE_INFO.STATISTICS.TITLE
  });
});