(function(){
  angular.module('common.constants')
  .constant("ROUTE_INFO",{
    MANAGEMENT: {
       STATE:'layout.management',
       URL:'/management',
       TEMPLATE_URL: 'modules/management/views/management.tpl.html',
       TITLE:'Management'
    },
    STATISTICS: {
       STATE:'layout.statistics',
       URL:'/statistics',
       TEMPLATE_URL: 'modules/statistics/views/statistics.tpl.html',
       TITLE:'Statistics'
    },
    LAYOUT: {
       STATE:'layout',
       abstract: true,
       TEMPLATE_URL: 'modules/layout/views/layout.tpl.html'
    }
  })
})();
