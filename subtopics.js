const params = new URLSearchParams(window.location.search);

const selectedTopic = params.get("topic") || "JavaScript";

const subtopics = {

    "JavaScript": [
        "Variables & Data Types",
        "Functions",
        "Arrays & Objects",
        "DOM Manipulation",
        "Events",
        "Promises & Async/Await",
        "Closures",
        "ES6 Features",
        "Error Handling",
        "Advanced JavaScript"
    ],

    "React": [
        "Components",
        "JSX",
        "Props",
        "State",
        "useState Hook",
        "useEffect Hook",
        "Event Handling",
        "Conditional Rendering",
        "React Router",
        "Performance Optimization"
    ],

    "Python": [
        "Variables & Data Types",
        "Lists & Tuples",
        "Dictionaries",
        "Functions",
        "Loops",
        "Exception Handling",
        "OOP",
        "Modules",
        "File Handling",
        "Decorators"
    ],

    "Java": [
        "Variables & Data Types",
        "Classes & Objects",
        "Constructors",
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Abstraction",
        "Interfaces",
        "Exception Handling",
        "Collections"
    ],

    "DSA": [
        "Arrays",
        "Strings",
        "Linked Lists",
        "Stacks",
        "Queues",
        "Searching",
        "Sorting",
        "Trees",
        "Graphs",
        "Time Complexity"
    ],

    "Web Development": [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "Flexbox",
        "CSS Grid",
        "DOM",
        "APIs",
        "HTTP & HTTPS",
        "REST API"
    ]
};

const selectedSubtopics =
    subtopics[selectedTopic] || [
        "Basics",
        "Core Concepts",
        "Important Features",
        "Functions",
        "Applications",
        "Advantages",
        "Common Problems",
        "Practical Examples",
        "Best Practices",
        "Advanced Concepts"
    ];

const subtopicContainer =
    document.getElementById("subtopicContainer");

const topicTitle =
    document.getElementById("topicTitle");

topicTitle.textContent = selectedTopic;

selectedSubtopics.forEach((subtopic, index) => {

    const card = document.createElement("label");

    card.className = "subtopic-card";

    card.innerHTML = `
        <input 
            type="checkbox" 
            value="${subtopic}"
        >

        <div class="subtopic-number">
            ${String(index + 1).padStart(2, "0")}
        </div>

        <div class="subtopic-info">
            <div class="subtopic-name">
                ${subtopic}
            </div>

            <div class="subtopic-text">
                Practice questions on ${subtopic}
            </div>
        </div>

        <div class="subtopic-check">
            ✓
        </div>
    `;

    subtopicContainer.appendChild(card);
});

function startPractice() {

    const selected = [
        ...document.querySelectorAll(
            "#subtopicContainer input:checked"
        )
    ].map(input => input.value);

    if (selected.length === 0) {
        alert("Please select at least one subtopic.");
        return;
    }

    const data = {
        topic: selectedTopic,
        subtopics: selected
    };

    localStorage.setItem(
        "interviewData",
        JSON.stringify(data)
    );

    window.location.href =
        "questions.html";
}

document
    .getElementById("startPractice")
    .addEventListener(
        "click",
        startPractice
    );