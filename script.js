// const container = document.querySelector(".container");
// qrInput = container.querySelector(".form input");
// genrateBtn = container.querySelector(".form button");

// genrateBtn.addEventListener("click", () => {
//     let qrValue = qrInput.value;
//     console.log(qrValue);
//     container.classList.add("active")
// })
const container = document.querySelector(".container");
const qrInput = container.querySelector(".form input");
const generateBtn = container.querySelector(".form button");
const qrCodeDiv = container.querySelector(".qr-code");
const qrImg = container.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();

    if (qrValue === "") {
        alert("Please enter a valid URL");
        return;
    }
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    console.log(qrValue);
    container.classList.add("active");
    qrCodeDiv.style.display = "block";  
});