angular.module('app')
  .controller('masterController',['$scope','surveyBuilder', function($scope, surveyBuilder){

    $scope.greeting = 'BringIt!';
    $scope.survey = surveyBuilder.survey;
    console.log($scope.survey)
    $scope.currentQ = 0;
    $scope.symbols = []
    $scope.percentage = 0



    $scope.click = function($index){
      move();
      $scope.currentQ++;
      $scope.symbols.push($index)
      $scope.percentage += 20;
      console.log($scope.symbols);
    }

    function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

    // var glyphiconFinder = function($index){
    //   var glyph = {};
    //   $scope.symbols.push($index);
    // }


  }]);
