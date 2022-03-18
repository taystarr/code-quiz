var timerEl = document.querySelector('#countdown');

var timeLeft = 80;
var timeInterval = setInterval(function() {
    timerEl.textContent = "Time Left: " + timeLeft;
    timeLeft--;

    if (timeLeft === -1) {
        clearInterval(timeInterval);
        endQuiz();
    }
}, 1000);

var tenLess = function() {
    timeLeft -= 10;
};

var resultOne = function() {
    var correct = document.getElementById('result');
    correct.className = "result";
    correct.textContent = "Correct!";
};

var resultTwo = function() {
    var incorrect = document.getElementById('result');
    incorrect.className = "result";
    incorrect.textContent = "Incorrect!";
};

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

    var firstAsk = document.getElementById('next');
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

    firstAnsw.addEventListener("click", secondQues);
    firstAnsw.addEventListener("click", tenLess);
    firstAnsw.addEventListener("click", resultTwo);

    secAnsw.addEventListener("click", secondQues);
    secAnsw.addEventListener("click", tenLess);
    secAnsw.addEventListener("click", resultTwo);

    thirdAnsw.addEventListener("click", secondQues);
    thirdAnsw.addEventListener("click", resultOne);

    fourthAnsw.addEventListener("click", secondQues);
    fourthAnsw.addEventListener("click", tenLess);
    fourthAnsw.addEventListener("click", resultTwo);
};

var secondQues = function() {
    var secondAsk = document.getElementById('next');
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

    firstAnswB.addEventListener("click", thirdQues);
    firstAnswB.addEventListener("click", tenLess);
    firstAnswB.addEventListener("click", resultTwo);


    secAnswB.addEventListener("click", thirdQues);
    secAnswB.addEventListener("click", tenLess);
    secAnswB.addEventListener("click", resultTwo);


    thirdAnswB.addEventListener("click", thirdQues);
    thirdAnswB.addEventListener("click", tenLess);
    thirdAnswB.addEventListener("click", resultTwo);


    fourthAnswB.addEventListener("click", thirdQues);
    fourthAnswB.addEventListener("click", resultOne);
};

var thirdQues = function() {
    var thirdAsk = document.getElementById('next');
    thirdAsk.className = "wrapper";
    thirdAsk.textContent = "What JavaScript function allows you to iterate through a block of code a set number of times?";

    var firstAnswC = document.createElement("button");
    firstAnswC.className = "button";
    firstAnswC.textContent = "if/then statement";
    thirdAsk.appendChild(firstAnswC); 

    var secAnswC = document.createElement("button");
    secAnswC.className = "button";
    secAnswC.textContent = "for loop";
    thirdAsk.appendChild(secAnswC); 

    var thirdAnswC = document.createElement("button");
    thirdAnswC.className = "button";
    thirdAnswC.textContent = "boolean() function";
    thirdAsk.appendChild(thirdAnswC); 

    var fourthAnswC = document.createElement("button");
    fourthAnswC.className = "button";
    fourthAnswC.textContent = "Math.random() function";
    thirdAsk.appendChild(fourthAnswC); 

    firstAnswC.addEventListener("click", fourthQues);
    firstAnswC.addEventListener("click", tenLess);
    firstAnswC.addEventListener("click", resultTwo);

    secAnswC.addEventListener("click", fourthQues);
    secAnswC.addEventListener("click", resultOne);

    thirdAnswC.addEventListener("click", fourthQues);
    thirdAnswC.addEventListener("click", tenLess);
    thirdAnswC.addEventListener("click", resultTwo);

    fourthAnswC.addEventListener("click", fourthQues);
    fourthAnswC.addEventListener("click", tenLess);
    fourthAnswC.addEventListener("click", resultTwo);
};

var fourthQues = function() {
    var fourthAsk = document.getElementById('next');
    fourthAsk.className = "wrapper";
    fourthAsk.textContent = "What method is JavaScript is used for testing purposes to make sure code is running as intended?";

    var firstAnswD = document.createElement("button");
    firstAnswD.className = "button";
    firstAnswD.textContent = "localStorage";
    fourthAsk.appendChild(firstAnswD); 

    var secAnswD = document.createElement("button");
    secAnswD.className = "button";
    secAnswD.textContent = "console.log()";
    fourthAsk.appendChild(secAnswD); 

    var thirdAnswD = document.createElement("button");
    thirdAnswD.className = "button";
    thirdAnswD.textContent = "querySelector";
    fourthAsk.appendChild(thirdAnswD); 

    var fourthAnswD = document.createElement("button");
    fourthAnswD.className = "button";
    fourthAnswD.textContent = "getElementById()";
    fourthAsk.appendChild(fourthAnswD); 

    firstAnswD.addEventListener("click", tenLess);
    firstAnswD.addEventListener("click", endQuiz);
    firstAnswD.addEventListener("click", resultTwo);

    secAnswD.addEventListener("click", endQuiz);
    secAnswD.addEventListener("click", resultOne);

    thirdAnswD.addEventListener("click", tenLess);
    thirdAnswD.addEventListener("click", endQuiz);
    thirdAnswD.addEventListener("click", resultTwo);

    fourthAnswD.addEventListener("click", tenLess);
    fourthAnswD.addEventListener("click", endQuiz);
    fourthAnswD.addEventListener("click", resultTwo);
};

var endQuiz = function() {
    clearInterval(timeInterval);

    var lastPage = document.getElementById('next');
    lastPage.className = "wrapper";
    lastPage.textContent = "The quiz is over! Your score is " + timeLeft + ". Enter your initials to save your score!";

    var initials = document.createElement("input");
    initials.setAttribute("type", "text");
    initials.setAttribute("id", "text-box");
    initials.className = "text-box";
    lastPage.appendChild(initials);

    var submitScore = document.createElement("button");
    submitScore.className = "button";
    submitScore.textContent = "Submit Score";
    lastPage.appendChild(submitScore);

    // var returnHome = document.createElement("button");
    // returnHome.className = "button";
    // returnHome.textContent = "Start Over";
    // lastPage.appendChild(returnHome);

    // returnHome.addEventListener("click", )
};





// High score text box and submit button
// Connect high score to localstorage
// Start over button

var startBtn = document.querySelector("#start");

// startBtn.addEventListener("click", setInterval);
startBtn.addEventListener("click", startQuiz);
