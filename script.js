let btn = document.querySelectorAll(".buttons button")
let input = document.getElementById("display")

btn.forEach(button => {
    button.addEventListener("click", function () {
        let value = button.textContent
        if (value == "C") {
            input.value = ""
        } else if (value == "=") {
            try {
                input.value = eval(input.value)
            } catch (e) {
                input.value = "Error"
            }
        } else {
            input.value += value
        }

    })
});