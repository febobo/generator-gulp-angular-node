app.config(function($stateProvider , $urlRouterProvider){

  var dir = 'client/public/modules/'
  var commonDir = 'client/components/'
  $stateProvider
     .state('page' , {
       url : '/',
       views : {
         '' : {
           templateUrl : commonDir + 'page/page.html',
         },
         '@page' : {
           templateUrl : dir + 'home/home.html'
         }
       }
     })
     .state('page.yo' , {
        url : 'yo',
        templateUrl : dir + 'yo/yo.html'
     })
     .state('page.node' , {
        url : 'node',
        templateUrl : dir + 'node/node.html'
     })

     $urlRouterProvider.otherwise('/');
})
