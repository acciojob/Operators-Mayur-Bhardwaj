//your JS code here. If required.
const calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", function () {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    let ans;

    switch (operator) {
        case "+":
            ans = num1 + num2;
            break;
        case "-":
            ans = num1 - num2;
            break;
        case "*":
            ans = num1 * num2;
            break;
        case "/":
            ans = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
    }

    document.getElementById("result").textContent = ans;
});

const changeBtn = document.getElementById("change_text");

changeBtn.addEventListener("click", function () {
    const newText = [
        "Bye",
        "Good Bye",
        "To",
        "Your",
        "Class"
    ];

    const divisions = document.querySelectorAll(".division");

    divisions.forEach((div, index) => {
        div.textContent = newText[index];
    });
});