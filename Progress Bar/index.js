const progress = document.querySelector(".progress")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const circles = document.querySelectorAll(".circle")


let currActive = 1;

nextBtn.addEventListener("click", () => {
    prevBtn.disabled = false;
    currActive++;
    update();
});

prevBtn.addEventListener("click", () => {
    nextBtn.disabled = false;
    currActive--;
    update();
});

const update = () => {
    circles.forEach((circle, idx) => {
    
        if (idx < currActive) {
            circle.classList.add("active")
        }
        else {
            circle.classList.remove("active")
        }
    });

    const activeBtns = document.querySelectorAll(".active")
    let width = ((activeBtns.length - 1) / (circles.length -1)) * 100 + "%"
    progress.style.width = width;

    if (currActive === 1) {
        prevBtn.disabled = true;
    }

    if (currActive === 4) {
        nextBtn.disabled = true;
    }
}

