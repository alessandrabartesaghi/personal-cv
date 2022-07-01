console.log ("hello world")
function nameTransform(name) {
	var lowerName = name.toLowerCase();
	var firstLetter = lowerName[0];
	var firstCapitalLetter = firstLetter.toUpperCase();
	var nameWithoutFirstLetter = lowerName.substring(1, lowerName.length);
	var correctName = firstCapitalLetter + nameWithoutFirstLetter;
        return correctName
}
function checkAge(age) {
    if(age < 0) { 
            return false;
        } else { 
            return true;
        }
    }
    
function repeatSentence(sentence, times) {
        for(var i = 0; i < times; i = i + 1) { 
                console.log(i + " " + sentence);
            } 
    }
 function listTransform(listOfNames) {
        var transformedNames = [];
    for(var i = 0; i < listOfNames.length; i = i + 1) { 
        var transformedNameI = nameTransform(listOfNames[i]);
            transformedNames.push(transformedNameI);
        } 
        return transformedNames;
    }
    

    function upperName(name) {
        return name.toUpperCase();
    }
   
        
 ////EXERCISES////

//FIFTY CUT 
var stringa = "anna";
var ss = stringa.substring (2,stringa.length);
 function FiftyCut (stringa){
    return ss;
 }


 //ODD OR EVEN NUMBER 
function IsEven(number) {
    var resto = number % 2;
            if(resto == 0) { 
                    return true;
                } else { 
                    return false;
                }
            }

//SQUARED ROOT OF A NUMBER
function Sqrt (number){
    var Sqrt = Math.sqrt(number);
    return Sqrt;
}


//SQUARED LIST
var squaredList = (["1", "2", "3", "4", "5"]);
var squaredNumber = [];
var squaredNumber1 = (Math.pow(squaredList, 2));

function squaredNumberList(squaredList) {
    var squaredNumber = [];
for(var i = 0; i < squaredList.length; i = i + 1) { 
    var squaredNumber1 = (Math.pow(squaredList[i], 2));
		squaredNumber.push(squaredNumber1);
	} 
	return squaredNumber
}

//LAST ONE

function createListItem(ingredient, id) {
    var htmlString = '<li id="ingredient-' + id + '" class="li-ingredient">'
        + ingredient + '</li>';
        return htmlString;
    }
    
    function createList(listOfIngredients) {
        var htmlString = '';
        for(var i = 0; i < listOfIngredients.length; i = i + 1) {
            htmlString = htmlString + createListItem(listOfIngredients[i], i);
        }
        return htmlString;
    }
    
    var listOfIngredients = ["Italian", "English", "Spanish",];
    
    function populateList() {
        var ulElement = document.getElementById('ingredients');
        ulElement.innerHTML = createList(listOfIngredients);
    }
    