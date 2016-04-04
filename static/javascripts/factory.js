angular.module('app')
  .factory('surveyBuilder', [function(){

    var survey = [];

    // need to figure out how to have dynamic input types

    // QUESTION ONE
    new question("Where do you want to bring it?", "radio", ["city", "mountain", "island"])
      //QUESTION TWO
    new question("When do you want to bring it and for how long?", "radio", [])
        //QUESTION THREE
    new question("How many do you think you can bring?")
            //QUESTION FOUR
    new question("I want to be near?: ")
                //QUESTION FIVE
    new question("What do you want to bring? (Music Sports Health/Fitness Information, etc.)")
                    //QUESTION SIX
    new question("Would you like information about: lodging, restaurants, catering?")





    function question(content, datatype, answers){

      this.content = content;
      this.datatype = datatype;
      this.answers = answers;
      survey.push(this)

    }


    return {
      survey : survey,
    }



    //end of factory
  }])
