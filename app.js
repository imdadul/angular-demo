angular.module('fruit', [

  /**
   * Dependencies must be injected in specific order:
   * 1) AngularJS dependencies
   * 2) Common Services, Directives, Filters and Utilities
   * 3) App Layout component (e.g. Layout or Frame)
   * 4) Other App components (e.g. Sidebar, About, etc)
   */

    // AngularJS dependencies
    'ui.router',

    // Common/shared code
    'app.common',
    'app.layout',
    'app.management',
    'app.statistics',
  ])
  .run(runBlock);

runBlock.$inject = ['$state','ROUTE_INFO'];

function runBlock($state,ROUTE_INFO) {
  $state.go(ROUTE_INFO.MANAGEMENT.STATE);
}
