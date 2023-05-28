const quiz_data = [
    {
        question: 'Who is the creator of javascript?',
        a: 'Brendan Eich',
        b: 'Charles Babbage',
        c: 'Bill Gates',
        d: 'My Uncle Jason',
        ans: 'a'

    },
    {
        question: 'What is the use of javascript',
        a: 'make browser page interactive',
        b: 'help user process data dynamically',
        c: 'create great animations',
        d: 'all the above',
        ans: 'd'
    },
    {
        question: 'Pick the odd datatype out',
        a: 'Integer',
        b: 'Float',
        c: 'Letters',
        d: 'Boolean',
        ans: 'c'
    },
    {
        question: 'what does html stands for?',
        a: 'Hype Train Making Language',
        b: 'Hyperactive Training Meditation Levels',
        c: 'Hydrogen Titanium Manganese Lithium',
        d: 'Hypertext Markup Language',
        ans: 'd'
    },
    {
        question: 'Pick the odd frameworks.',
        a: 'React',
        b: 'Mongo',
        c: 'Svelte',
        d: 'Angular',
        ans: 'b'
    }
];

const quiz_heading = document.getElementById('quiz-container')
const questionEl = document.getElementById('cur-question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit-btn');

let currentQue = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    const currentQuiz = quiz_data[currentQue];
    questionEl.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a
    b_text.innerText = currentQuiz.b
    c_text.innerText = currentQuiz.c
    d_text.innerText = currentQuiz.d
}

function getSelectedOptions() {
    let selectedValue = document.querySelectorAll('.answer')
    let ans = undefined;
    selectedValue.forEach((selectedValue) => {
        if (selectedValue.checked) {
            ans = selectedValue.id;
        }
    });
    return ans;
}

function deselectAnswers() {
    let selectedValue = document.querySelectorAll('.answer')
    selectedValue.forEach((selectedValue) => {
        selectedValue.checked = false
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelectedOptions();
    deselectAnswers();
    if (answer) {

        if (answer === quiz_data[currentQue]['ans']) {
            score++;
        }

        currentQue++;

        if (currentQue < quiz_data.length) {
            loadQuiz();
        }
        else {
            quiz_heading.innerHTML = `<h1 class='quiz-header'>Congratulations!! You have scored ${score}/5</h1><button id="submit-btn" onclick="location.reload()">submit</button>`
        }
    }
    else {
        alert("Select an option");
    }
}
)
