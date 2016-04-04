angular.module('app')
  .controller('masterController',['$scope','surveyBuilder', function($scope, surveyBuilder){

    $scope.greeting = 'BringIt!';
    $scope.survey = surveyBuilder.survey;
    console.log($scope.survey)
    $scope.currentQ = 0;

    console.log($scope.survey[0].answers)

    $scope.symbols = []
    $scope.meter = []



    $scope.click = function($index){
      $scope.currentQ++;
      $scope.symbols.push($index)
      $scope.meter.push($index)
      console.log($scope.symbols);
    }

    // var glyphiconFinder = function($index){
    //   var glyph = {};
    //   $scope.symbols.push($index);
    // }


  }]);
