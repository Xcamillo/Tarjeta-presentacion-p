const firstOption = document.querySelector(".option-1");
const maskBody = document.querySelector(".mask-body");
const qrModal = document.querySelector(".qr-modal");
const btnExit = document.querySelector(".btn-exit");

firstOption.addEventListener("click", ()=>{
    maskBody.style.display = "block";
    qrModal.style.display = "flex";
    qrModal.style.flexDirection = "column"
});

btnExit.addEventListener("click", ()=>{
    maskBody.style.display = "none";
    qrModal.style.display = "none";
})