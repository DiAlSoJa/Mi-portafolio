const contenedor = document.querySelector(".contenedor"),
generateBtn = contenedor.querySelector(".form button"),
qrInput = contenedor.querySelector(".form input"),
qrImg = contenedor.querySelector(".qr-code img");

generateBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    let qrValue = qrInput.value;

    if(!qrValue) return;
    generateBtn.innerHTML = "Generando codigo...";
    qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load",() =>{
        contenedor.classList.add("active");
        generateBtn.innerHTML = "Generar codigo QR";
    });
    qrInput.addEventListener("keyup", () =>{
        if(!qrInput.value){
            contenedor.classList.remove("active");
        }
    });
});
