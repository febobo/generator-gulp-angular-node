app.controller('headController' , [ '$scope' , headController])
function headController($scope){
    var vm = $scope.vm = {};

    vm.nav = [
      {
        name : 'yo',
        url : 'page.yo'
      },
      {
        name : 'node',
        url : 'page.node'
      }
    ]

}
