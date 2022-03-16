var timerEl = document.getElementById('countdown');

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time Left: " + timeLeft;
        timeLeft--;
        if (timeLeft === -1) {
            clearInterval(timeInterval);
            // don't forget this console.log
            console.log("Show times up message here")
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
    firstAsk.className = "header";
    firstAsk.textContent = "This is the first question!";

    var firstAnsw = document.createElement("button");
    firstAnsw.className = "button";
    firstAnsw.innerHTML = "<ol class='button'>One</ol>";
    firstAsk.appendChild(firstAnsw); 

    var secAnsw = document.createElement("button");
    secAnsw.className = "button";
    secAnsw.innerHTML = "<ol class='button'>One</ol>";
    firstAsk.appendChild(secAnsw); 

    var thirdAnsw = document.createElement("button");
    thirdAnsw.className = "button";
    thirdAnsw.innerHTML = "<ol class='button'>One</ol>";
    firstAsk.appendChild(thirdAnsw); 

    var fourthAnsw = document.createElement("button");
    fourthAnsw.className = "button";
    fourthAnsw.innerHTML = "<ol class='button'>One</ol>";
    firstAsk.appendChild(fourthAnsw); 

}

var startBtn = document.querySelector("#start");

startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", startQuiz);