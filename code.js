var logo = document.querySelector("#logoId");
var nightBtn = document.querySelector("#night");
function showgs4() {
  logo.innerHTML = `<div id="logoId" onclick="location.reload()" class="logo">G. Science Class 4 <span style = "color: white; margin-left: 20px;  padding: 2px 5px; border: 1px solid white; border-radius: 5px; font-size: 20px; cursor: pointer">X</span></div>`;
  var gs4 = document.getElementById("gs4");
  if (gs4.style.display === "none") {
    gs4.style.display = "block";
    mainWelcomeScreen.style.display = "none";
    gs5.style.display = "none";
    gs6.style.display = "none";
  } else {
    mainWelcomeScreen.style.display = "flex";
    gs4.style.display = "none";
  }

  closeMenu();
}

function showgs5() {
  logo.innerHTML = `<div id="logoId" onclick="location.reload()" class="logo">G. Science Class 5 <span style = "color: white; margin-left: 20px;  padding: 2px 5px; border: 1px solid white; border-radius: 5px; font-size: 20px; cursor: pointer">X</span></div>`;
  var gs5 = document.getElementById("gs5");
  closeMenu();
  if (gs5.style.display === "none") {
    gs5.style.display = "block";
    mainWelcomeScreen.style.display = "none";
    gs4.style.display = "none";
    gs6.style.display = "none";
  } else {
    mainWelcomeScreen.style.display = "flex";
    gs5.style.display = "none";
  }
}
function showgs6() {
  logo.innerHTML = `<div id="logoId" onclick="location.reload()" class="logo">G. Science Class 6 <span style = "color: white; margin-left: 20px;  padding: 2px 5px; border: 1px solid white; border-radius: 5px; font-size: 20px; cursor: pointer">X</span></div>`;
  var gs6 = document.getElementById("gs6");
  closeMenu();
  if (gs6.style.display === "none") {
    gs6.style.display = "block";
    mainWelcomeScreen.style.display = "none";
    gs5.style.display = "none";
    gs4.style.display = "none";
  } else {
    mainWelcomeScreen.style.display = "flex";
    gs6.style.display = "none";
  }
}
var welcomeNote = document.getElementById("mainnn");
welcomeNote.innerHTML = `<b class = "welcomeHeading">Welcome, Science Explorers!</b> 🌍✨<br><br>

Step into the fascinating world of General Science with our interactive quiz! Get ready to embark on a journey of curiosity, discovery, and knowledge. Whether you're a seasoned scientist or just starting your exploration, this quiz is designed for you.<br>
<div class="dropdown">
  <button class="btn" style="color: yellow; margin-top: 10px; margin-left: -0.2px;" id="openNavbar">Start Quiz</button>
<div class="dropdown-content">
  <button class="dropdown-button btn" onclick="showgs4()">Class 4</button>
  <button class="dropdown-button btn" onclick="showgs5()">Class 5</button>
  <button class="dropdown-button btn" onclick="showgs6()">Class 6</button>
</div>
</div>
<br />
<br />
Let the quest for wisdom and scientific wonders begin! Best of luck, and may your curiosity lead you to new heights of understanding.<br><br>

Happy quizzing!; <br /> <br />
<a href="https://drive.google.com/drive/u/5/folders/1F0Mf6VOfjuMhEWpBCPeFRD_9B4pP2M-d" style="color: yellow; text-decoration: underline;" target="_blank">Click to Get Notes</a>
<br />
`
// window.onload = function () {
//   // showgs4();
//   // showgs5();
//   // showgs6();
//   showlogoOriginal()
//   showAllContent()
// };

// function showlogoOriginal() {
//   logo.innerText = 'General Science'
// }
// Data for GS6


const gs6chapter1Data = quizDatags6ch1;
//class 4
const chapter1Data = quizDatags4ch1;
const chapter1part2Data = quizDatags4ch1part2;
const chapter2Data = quizDatags4ch2;
const chapter3Data = quizDatagn4ch3;
const chapter4Data = quizDatagn4ch4;
const chapter5Data = quizDatagn4ch5;
const chapter6Data = quizDatagn4ch6;
const chapter7Data = quizDatagn4ch7;
const chapter8Data = quizDatagn4ch8;
const chapter9Data = quizDatagn4ch9;
const chapter10Data = quizDatagn4ch10; //add chapter: here to add for every chaapter
const chapterallData = quizDatagn4chall; //add chapter: here to add for every chaapter

// chapters for GS-4 ended and started for GS-5
const gs5chapter1Data = quizDatags5ch1;
const gs5chapter2Data = quizDatags5ch2;
const gs5chapter3Data = quizDatags5ch3;
const gs5chapter4Data = quizDatags5ch4;
const gs5chapter5Data = quizDatags5ch5;
// const gs5chapter6Data = quizDatags5ch6;
const gs5chapter7Data = quizDatags5ch7;
const gs5chapter8Data = quizDatags5ch8;
const gs5chapter9Data = quizDatags5ch9;
const gs5chapter10Data = quizDatags5ch10; //add chapter for GS-4 : here to add for every chaapter
const quizContainer = document.getElementById("quiz");
const mainWelcomeScreen = document.getElementById("mainn");
const submitButton = document.getElementById("submit");
const back_to_home = document.getElementById("retry");
const scoreContainer = document.getElementById("score");

var questionNumber = 0;
var currentData;

function buildQuiz(chapterData) {
  document.getElementById("goto-submit").style.display = "block";
  document.getElementById("chapterTotalQuesstion").style.display = "block";
  const output = [];

  currentData = chapterData;
  questionNumber = 0;
  // shuffle the chapterData array randomly
  chapterData = chapterData.sort(() => Math.random() - 0.5);
  chapterData.forEach((questionData, questionIndex) => {
    questionNumber++;
    const answers = [];

    // create an array of options with key value pairs
    const options = [
      { key: "a", value: questionData.a },
      { key: "b", value: questionData.b },
      { key: "c", value: questionData.c },
      { key: "d", value: questionData.d },
    ];

    // shuffle the options array randomly
    options.sort(() => Math.random() - 0.5);

    options.forEach((option, index) => {
      answers.push(`
    <div class="section" style ="margin-left: 10px;">
      <label style = "display: flex;">${String.fromCharCode(index + 65)}. 
        <input type="radio" name="question${questionIndex}" value="${
        option.key
      }">
        <div><span style = " padding-top:-30px; text-transform: capitalize;">${
          option.value
        }</span></div>
      </label>
    </div>
  `);
    });
    var chapterTotalQuesstion = document.getElementById(
      "chapterTotalQuesstion"
    );
    chapterTotalQuesstion.innerHTML = `Total Question : ${chapterData.length}`;
    // ****Question portion****
    output.push(` 
<div class = "section">
<div class="questionSection"><p style = "width:43px">Q. ${questionNumber}</p><p id='questionstatement'>${
      questionData.question
    }</p></div>
    
<div class="answers">
${answers.join("")}
</div>
</div>
          
`);
    document.getElementById("menue").style.display = "none";
    submitButton.style.display = "block";
  });

  quizContainer.innerHTML = output.join("");
}

const chapter1Button = document.getElementById("gs4chp-1");
const chapter1part2Button = document.getElementById("gs4chp1part-2"); //add chapter: here to add for ever chapter
const chapter2Button = document.getElementById("gs4chp-2"); //add chapter: here to add for ever chapter
const chapter3Button = document.getElementById("gs4chp-3"); //add chapter: here to add for ever chapter
const chapter4Button = document.getElementById("gs4chp-4"); //add chapter: here to add for ever chapter
const chapter5Button = document.getElementById("gs4chp-5"); //add chapter: here to add for ever chapter
const chapter6Button = document.getElementById("gs4chp-6"); //add chapter: here to add for ever chapter
const chapter7Button = document.getElementById("gs4chp-7"); //add chapter: here to add for ever chapter
const chapter8Button = document.getElementById("gs4chp-8"); //add chapter: here to add for ever chapter
const chapter9Button = document.getElementById("gs4chp-9"); //add chapter: here to add for ever chapter
const chapter10Button = document.getElementById("gs4chp-10"); //add chapter: here to add for ever chapter
const chapterallButton = document.getElementById("gs4chp-all"); //add chapter: here to add for ever chapter

// for GS-5

const gs5chapter1Button = document.getElementById("gs5chp-1");
const gs5chapter2Button = document.getElementById("gs5chp-2");
const gs5chapter3Button = document.getElementById("gs5chp-3");
const gs5chapter4Button = document.getElementById("gs5chp-4");
const gs5chapter5Button = document.getElementById("gs5chp-5");
const gs5chapter6Button = document.getElementById("gs5chp-6");
const gs5chapter7Button = document.getElementById("gs5chp-7");
const gs5chapter8Button = document.getElementById("gs5chp-8");
const gs5chapter9Button = document.getElementById("gs5chp-9");
const gs5chapter10Button = document.getElementById("gs5chp-10"); //add chapter: here to add for ever chapter GS-5 end

//for GS-6
const gs6chapter1Button = document.getElementById("gs6chp-1");
const gs6chapter2Button = document.getElementById("gs6chp-2");
const gs6chapter3Button = document.getElementById("gs6chp-3");
const gs6chapter4Button = document.getElementById("gs6chp-4");
const gs6chapter5Button = document.getElementById("gs6chp-5");
const gs6chapter6Button = document.getElementById("gs6chp-6");
const gs6chapter7Button = document.getElementById("gs6chp-7");
const gs6chapter8Button = document.getElementById("gs6chp-8");
const gs6chapter9Button = document.getElementById("gs6chp-9");
const gs6chapter10Button = document.getElementById("gs6chp-10"); //add chapter: here to add for ever chapter GS-5 end
const gs6chapter11Button = document.getElementById("gs6chp-11"); //add chapter: here to add for ever chapter GS-5 end
const gs6chapter12Button = document.getElementById("gs6chp-12"); //add chapter: here to add for ever chapter GS-5 end

chapter1Button.addEventListener("click", () => {
  buildQuiz(chapter1Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 1: Understanding Ourselves. Part 01";
  document.getElementById("chapterName").style.display = "block";
});
chapter1part2Button.addEventListener("click", () => {
  buildQuiz(chapter1part2Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 1: Understanding Ourselves. Part 02";
  document.getElementById("chapterName").style.display = "block";
});
chapter2Button.addEventListener("click", () => {
  buildQuiz(chapter2Data);
  document.getElementById("chapterName").innerHTML = "Chapter 2: Ecosystem";
  document.getElementById("chapterName").style.display = "block";
});
//add chapter: here to add for ever chapter
chapter3Button.addEventListener("click", () => {
  buildQuiz(chapter3Data);
  document.getElementById("chapterName").innerHTML = "Chapter 3: Human Health";
  document.getElementById("chapterName").style.display = "block";
});
chapter4Button.addEventListener("click", () => {
  buildQuiz(chapter4Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 4: Matter and Its Characteristics";
  document.getElementById("chapterName").style.display = "block";
});
chapter5Button.addEventListener("click", () => {
  buildQuiz(chapter5Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 5: Forms of Energy and Energy Transfer";
  document.getElementById("chapterName").style.display = "block";
});
chapter6Button.addEventListener("click", () => {
  buildQuiz(chapter6Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 6: Force and Motion";
  document.getElementById("chapterName").style.display = "block";
});
chapter7Button.addEventListener("click", () => {
  buildQuiz(chapter7Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 7: Earth and its Resources";
  document.getElementById("chapterName").style.display = "block";
});
chapter8Button.addEventListener("click", () => {
  buildQuiz(chapter8Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 8: Earth's Weather and Climate";
  document.getElementById("chapterName").style.display = "block";
});
chapter9Button.addEventListener("click", () => {
  buildQuiz(chapter9Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 9: Solar System and Our Earth";
  document.getElementById("chapterName").style.display = "block";
});
chapter10Button.addEventListener("click", () => {
  buildQuiz(chapter10Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 10: Technology in Everyday Life";
  document.getElementById("chapterName").style.display = "block";
});
chapterallButton.addEventListener("click", () => {
  buildQuiz(chapterallData);
  document.getElementById("chapterName").innerHTML =
    "General Science # 04. Complete Quiz";
  document.getElementById("chapterName").style.display = "block";
});
// Event listoner for GS-5
gs5chapter1Button.addEventListener("click", () => {
  buildQuiz(gs5chapter1Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 1: Classification of Living Organisms";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter2Button.addEventListener("click", () => {
  buildQuiz(gs5chapter2Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 2: Micro Organisms";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter3Button.addEventListener("click", () => {
  buildQuiz(gs5chapter3Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 3: Flowers and Seeds";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter4Button.addEventListener("click", () => {
  buildQuiz(gs5chapter4Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 4: Environmental Pollution";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter5Button.addEventListener("click", () => {
  buildQuiz(gs5chapter5Data);
  document.getElementById("chapterName").innerHTML =
    "Chapter 5: Physical and Chemical Changes of Matter";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter6Button.addEventListener("click", () => {
  buildQuiz(quizDatags5ch6);
  document.getElementById("chapterName").innerHTML =
    "Chapter 6: Light and Sound";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter7Button.addEventListener("click", () => {
  buildQuiz(quizDatags5ch7);
  document.getElementById("chapterName").innerHTML =
    "Chapter 7: Electricity and Magnetism";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter8Button.addEventListener("click", () => {
  buildQuiz(quizDatags5ch8);
  document.getElementById("chapterName").innerHTML =
    "Chapter 8: Structure of Earth";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter9Button.addEventListener("click", () => {
  buildQuiz(quizDatags5ch9);
  document.getElementById("chapterName").innerHTML =
    "Chapter 9: Space and Satellites";
  document.getElementById("chapterName").style.display = "block";
});
gs5chapter10Button.addEventListener("click", () => {
  buildQuiz(quizDatags5ch10);
  document.getElementById("chapterName").innerHTML =
    "Chapter 10: Technology in Everyday Life";
  document.getElementById("chapterName").style.display = "block";
});

// for GS-6
gs6chapter1Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch1);
  document.getElementById("chapterName").innerHTML =
    "Chapter 1: Cellular Organization of Plants and Animals";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter2Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch2);
  document.getElementById("chapterName").innerHTML = "Chapter 2: Sense Organs";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter3Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch3);
  document.getElementById("chapterName").innerHTML =
    "Chapter 3: PHOTOSYNTHESIS AND RESPIRATION IN PLANTS";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter4Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch4);
  document.getElementById("chapterName").innerHTML =
    "Chapter 4: ENVIRONMENT AND INTERACTIONS";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter5Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch5);
  document.getElementById("chapterName").innerHTML =
    "Chapter 5: Atom, Molecules, Mixture and Compounds";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter6Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch6);
  document.getElementById("chapterName").innerHTML = "Chapter 6: Air";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter7Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch7);
  document.getElementById("chapterName").innerHTML =
    "Chapter 7: SOLUTIONS AND SUSPENSIONS";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter8Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch8);
  document.getElementById("chapterName").innerHTML =
    "Chapter 8: Energy and its Forms";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter9Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch9);
  document.getElementById("chapterName").innerHTML =
    "Chapter 9: Forces and Machines";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter10Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch10);
  document.getElementById("chapterName").innerHTML =
    "Chapter 10: Properties of Light";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter11Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch11);
  document.getElementById("chapterName").innerHTML =
    "Chapter 11: Investigating Sound";
  document.getElementById("chapterName").style.display = "block";
});
gs6chapter12Button.addEventListener("click", () => {
  buildQuiz(quizDatags6ch12);
  document.getElementById("chapterName").innerHTML =
    "Chapter 12: SPACE AND SATELLITES";
  document.getElementById("chapterName").style.display = "block";
});


function closeMenu() {
  // mainWelcomeScreen.style.display = 'none'
  const checkbox = document.getElementById("checkbox_toggle");
  if (checkbox) {
    checkbox.checked = false;
  }
}

function showAllContent() {
  document.getElementById("mainn").style.display = "flex";
}
// function showcurrentanswer(questionNumber) { // work for answer button function
//       const answerElement = document.querySelector(`.oneans-${questionNumber}`);
//       answerElement.style.display = 'block';
//       setTimeout(() => {
//         answerElement.style.display = 'none';
//       }, 1000);
//     }

function showResults(currentData) {
  const answerContainers = quizContainer.querySelectorAll(".answers");

  let score = 0;
  let Nscore = 0;

  currentData.forEach((questionData, questionIndex) => {
    const answerContainer = answerContainers[questionIndex];
    const options = answerContainer.querySelectorAll("input[type=radio]");
    let answeredCorrectly = false;

    options.forEach((option) => {
      const optionValue = option.value;
      const isCorrect = optionValue === questionData.correct;

      if (option.checked) {
        if (isCorrect) {
          score++;
          answeredCorrectly = true;
          option.parentNode.style.backgroundColor = "rgb(144, 238, 144)"; //true
          option.parentNode.style.padding = "4px 0 4px 4px";
          option.parentNode.style.borderRadius = "10px";
          option.parentNode.style.color = "black";
        } else if (answeredCorrectly === false) {
          option.parentNode.style.backgroundColor = "rgb(248, 131, 121)"; //false
          option.parentNode.style.padding = "4px 0 4px 4px";
          option.parentNode.style.borderRadius = "10px";
          option.parentNode.style.color = "black";
          Nscore++;
        }
      } else if (isCorrect) {
        option.parentNode.style.backgroundColor = "rgb(144, 238, 144)"; //true
        option.parentNode.style.padding = "4px 0 4px 4px";
        option.parentNode.style.borderRadius = "10px";
        option.parentNode.style.color = "black";
      }
    });
  });

  
  
  var percentage = (score / currentData.length) * 100;
  var Nscorepercentage = (Nscore / currentData.length) * 100;
  var skippedquestions = currentData.length - (score + Nscore);
  scoreContainer.innerHTML = `<div>You scored ${score} out of ${currentData.length}.</div>
  <div>Skipped Questions:&nbsp;${skippedquestions}</div>
<div class="progress-container">
<div class="progress-bar"><p id="scoreshow" style = "display: none; color: black; padding-left: 40%; width: 98%;">${Math.floor(percentage)}%</p></div></div>
<div id="Nprogress-container" class="Nprogress-container">
  <div class="Nprogress-bar"><p id="Nscoreshow" style = "display: none; color: black; padding-left: 40%; width: 98%;">${Math.floor(Nscorepercentage)}%</p></div>
  </div> 
  <p id="storedAverage"></p>
  <button class='btn text-black' onclick="clearStorage()">Clear Score</button>
  <button class='btn text-black' onclick="viewHistory()">Progress Chart</button>
  </div>`;
  
  
  var previousScores = JSON.parse(localStorage.getItem('previousScores')) || [];
  
  previousScores.push(score);
  localStorage.setItem('previousScores', JSON.stringify(previousScores));
  displayStoredScore();
  
  // Function to display the stored score
  function displayStoredScore() {
    const previousScores = JSON.parse(localStorage.getItem('previousScores')) || [];
    const storedScoreElement = document.getElementById('storedAverage');
    storedScoreElement.textContent = `Score History: ${previousScores.join(', ') || 'None'}`;
  }
  displayStoredScore();

  submitButton.style.display = "none";
  back_to_home.style.display = "block";
  document.getElementById("score").style.display = "block";
  // update progress bar
  const progressBar = document.querySelector(".progress-bar");
  const NprogressBar = document.querySelector(".Nprogress-bar");
  for (let i = 1; i <= percentage; i++) {
    setTimeout(() => (progressBar.style.width = i + "%"), 1500);
    setTimeout(
      () => (document.getElementById("scoreshow").style.display = "block"),
      1500
    );
  }
  for (let i = 1; i <= Nscorepercentage; i++) {
    setTimeout(() => (NprogressBar.style.width = i + "%"), 1500);
    setTimeout(
      () => (document.getElementById("Nscoreshow").style.display = "block"),
      1500
    );
  }
  if (score === 0) {
    document.getElementById("scoreshow").style.display = "block";
    scoreContainer.innerHTML = `Unattempted OR Not-Prepared <br> OR <br>you want to see Answer only...!`;
  }
}
function viewHistory() {
  var previousScores = JSON.parse(localStorage.getItem('previousScores')) || [];
  
  // Convert the array to a JSON string
  var scoresString = JSON.stringify(previousScores);

  // Redirect to score.html with scores as a query parameter
  window.location.href = "score.html?scores=" + encodeURIComponent(scoresString);

  console.log('Working');
}

function clearStorage() {
  localStorage.removeItem('previousScores');
  document.getElementById('storedAverage').innerHTML = 'Score Cleared';
}

submitButton.addEventListener("click", () => {
  showResults(currentData);
  window.scrollTo(0, document.body.scrollHeight);
});
back_to_home.addEventListener("click", () => {
  location.reload();
});

let mybutton = document.getElementById("goto-top");

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth",
        });
        mybutton.style.display = 'none'
        document.getElementById("goto-submit").style.display = "block";
}
function toBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
  mybutton.style.display = 'block'
  document.getElementById("goto-submit").style.display = "none";
}

const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});