var timerEl = document.getElementById('countdown');

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time Left: " + timeLeft;
        timeLeft--;
        if (timeLeft === -1) {
            clearInterval(timeInterval);
            // don't forget this console.log
            nextPage();
        }
    }, 1000);
}

var startQuiz = function() {
    var page =document.getElementById('main-page');

    if (page.style.display === 'none') {
        page.style.display = 'block';
    } else {
        page.style.display = 'none';
    }

    firstQues();
};

var firstQues = function() {

    var firstAsk = document.getElementById('first');
    firstAsk.className = "wrapper";
    firstAsk.textContent = "What type of special character in JavaScript should surround an array?";

    var firstAnsw = document.createElement("button");
    firstAnsw.className = "button";
    firstAnsw.textContent = "Curly braces {}";
    firstAsk.appendChild(firstAnsw); 

    var secAnsw = document.createElement("button");
    secAnsw.className = "button";
    secAnsw.textContent = "Parentheses ()";
    firstAsk.appendChild(secAnsw); 

    var thirdAnsw = document.createElement("button");
    thirdAnsw.className = "button";
    thirdAnsw.textContent = "Square brackets []";
    firstAsk.appendChild(thirdAnsw); 

    var fourthAnsw = document.createElement("button");
    fourthAnsw.className = "button";
    fourthAnsw.textContent = "Less than/greater than signs <>";
    firstAsk.appendChild(fourthAnsw); 

    firstAnsw.addEventListener("click", nextQues);
    secAnsw.addEventListener("click", nextQues);
    thirdAnsw.addEventListener("click", nextQues);
    fourthAnsw.addEventListener("click", nextQues);
};

var secondQues = function() {
    var secondAsk = document.getElementById('second');
    secondAsk.className = "wrapper";
    secondAsk.textContent = "What git function allows you to make a new branch in the terminal and go to that branch at the same time?";

    var firstAnswB = document.createElement("button");
    firstAnswB.className = "button";
    firstAnswB.textContent = "git merge";
    secondAsk.appendChild(firstAnswB); 

    var secAnswB = document.createElement("button");
    secAnswB.className = "button";
    secAnswB.textContent = "git checkout";
    secondAsk.appendChild(secAnswB); 

    var thirdAnswB = document.createElement("button");
    thirdAnswB.className = "button";
    thirdAnswB.textContent = "git commit -m";
    secondAsk.appendChild(thirdAnswB); 

    var fourthAnswB = document.createElement("button");
    fourthAnswB.className = "button";
    fourthAnswB.textContent = "git checkout -b";
    secondAsk.appendChild(fourthAnswB); 

    firstAnswB.addEventListener("click", nextQuesTwo);
    secAnswB.addEventListener("click", nextQuesTwo);
    thirdAnswB.addEventListener("click", nextQuesTwo);
    fourthAnswB.addEventListener("click", nextQuesTwo);
};

var thirdQues = function() {
    var thirdAsk = document.getElementById('third');
    thirdAsk.className = "wrapper";
    thirdAsk.textContent = "question";

    var firstAnswC = document.createElement("button");
    firstAnswC.className = "button";
    firstAnswC.textContent = "answer";
    thirdAsk.appendChild(firstAnswC); 

    var secAnswC = document.createElement("button");
    secAnswC.className = "button";
    secAnswC.textContent = "answer";
    thirdAsk.appendChild(secAnswC); 

    var thirdAnswC = document.createElement("button");
    thirdAnswC.className = "button";
    thirdAnswC.textContent = "answer";
    thirdAsk.appendChild(thirdAnswC); 

    var fourthAnswC = document.createElement("button");
    fourthAnswC.className = "button";
    fourthAnswC.textContent = "answer";
    thirdAsk.appendChild(fourthAnswC); 

    firstAnswC.addEventListener("click", nextQuesThree);
    secAnswC.addEventListener("click", nextQuesThree);
    thirdAnswC.addEventListener("click", nextQuesThree);
    fourthAnswC.addEventListener("click", nextQuesThree);
};

var fourthQues = function() {
    var fourthAsk = document.getElementById('fourth');
    fourthAsk.className = "wrapper";
    fourthAsk.textContent = "question?";

    var firstAnswD = document.createElement("button");
    firstAnswD.className = "button";
    firstAnswD.textContent = "answer";
    fourthAsk.appendChild(firstAnswD); 

    var secAnswD = document.createElement("button");
    secAnswD.className = "button";
    secAnswD.textContent = "answer";
    fourthAsk.appendChild(secAnswD); 

    var thirdAnswD = document.createElement("button");
    thirdAnswD.className = "button";
    thirdAnswD.textContent = "answer";
    fourthAsk.appendChild(thirdAnswD); 

    var fourthAnswD = document.createElement("button");
    fourthAnswD.className = "button";
    fourthAnswD.textContent = "answer";
    fourthAsk.appendChild(fourthAnswD); 

    firstAnswD.addEventListener("click", nextPage);
    secAnswD.addEventListener("click", nextPage);
    thirdAnswD.addEventListener("click", nextPage);
    fourthAnswD.addEventListener("click", nextPage);
};

var endQuiz = function() {
    var lastPage = document.getElementById('end');
    lastPage.className = "wrapper";
    lastPage.textContent = "The quiz is over! Your score is (this)";

    var highScore = document.createElement("button");
    highScore.className = "button";
    highScore.textContent = "High Scores";
    lastPage.appendChild(highScore);

    var returnHome = document.createElement("button");
    returnHome.className = "button";
    returnHome.textContent = "Start Over";
    lastPage.appendChild(returnHome);
};


var nextQues = function() {
    var nextOne =document.getElementById('first');

    if (nextOne.style.display === 'none') {
        nextOne.style.display = 'block';
    } else {
        nextOne.style.display = 'none';
    }
    console.log("it did the thing");

    secondQues();
};

var nextQuesTwo = function() {
    var nextOneB =document.getElementById('second');

    if (nextOneB.style.display === 'none') {
        nextOneB.style.display = 'block';
    } else {
        nextOneB.style.display = 'none';
    }
    console.log("it did the thing");

    thirdQues();
};

var nextQuesThree = function() {
    var nextOneC =document.getElementById('third');

    if (nextOneC.style.display === 'none') {
        nextOneC.style.display = 'block';
    } else {
        nextOneC.style.display = 'none';
    }
    console.log("it did the thing");

    fourthQues();
};

var nextPage = function() {
    var endPage =document.getElementById('first', 'second', 'third', 'fourth');

    if (endPage.style.display === 'none') {
        endPage.style.display = 'block';
    } else {
        endPage.style.display = 'none';
    }
    console.log("it did the thing");

    endQuiz();
};


var startBtn = document.querySelector("#start");

startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", startQuiz);
