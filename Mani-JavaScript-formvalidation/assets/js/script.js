document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    var inputs = document.querySelectorAll(".inputField");
    for (input of inputs) {
        var inputValue = input.value;
        var inputName = input.getAttribute("name");
        // var radioButton = document.querySelector('input[name="gender"]:checked');
        // var checkbox = document.getElementById("check").checked;
        if(inputValue === "") {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            input.parentElement.querySelector("small").innerText = "* " + inputName + " cannot be blank.";
        } else {
            input.classList.add("is-valid");
            input.classList.remove("is-invalid");
            input.parentElement.querySelector("small").innerText = "";
        }
    }   
});
document.getElementById("reset").addEventListener('click', (e) => {
    var smallTags = document.querySelectorAll(".small");
    for (smallTag of smallTags) {
        smallTag.classList.remove("is-invalid");
        smallTag.classList.remove("is-valid");
        smallTag.innerText = "";
    }
});