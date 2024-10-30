const form = document.querySelector(".Reservasi");
const submitButton = form.querySelector("input[type='submit']");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("name");
    const existingErrorMessage = form.querySelector(".error-message");

    if (existingErrorMessage) {
        existingErrorMessage.remove();
    }

    if (nama.value === "") {
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = "Mohon lengkapi data Anda!";
        errorMessage.classList.add("error-message");
        errorMessage.style.color = "red";
        submitButton.insertAdjacentElement("afterend", errorMessage);
    }
});
