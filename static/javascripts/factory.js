angular.module('app')
  .factory('surveyBuilder', [function(){

    var survey = [];

    // need to figure out how to have dynamic input types

    // QUESTION ONE
    new question("Where do you want to bring it?", ["city", "rural", "mountains","other"])
      //QUESTION TWO
    new question("When do you want to bring it and for how long?", ["1 day", "3-5 days", "7+ days"])
        //QUESTION THREE
    new question("How many do you think you can bring?", ["50-100","100-300","300-700", "1000+"])
            //QUESTION FOUR
    new question("I want to be near?", ["transportation","recreation","arts & music"])
                //QUESTION FIVE
    new question("What do you want to bring?",["information", "fitness","music"])
                    //QUESTION SIX
    new question("Would you like information about lodging, restaurants, and catering?", ["yes","no"])


    function question(content, answers){

      this.content = content;
      this.answers = answers;
      survey.push(this)

    }


    return {
      survey : survey,
    }



    //end of factory
  }])
