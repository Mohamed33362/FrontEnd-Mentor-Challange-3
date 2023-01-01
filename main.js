let btn = document.getElementById("btn");
let rate = document.getElementById("rate");
let thankYou = document.getElementById("thanku");
let lis = document.querySelectorAll("li");
let lisArray = Array.from(lis);
let i = 1;
let smallDiv = document.getElementById("small");

lisArray.forEach((li) => {
    li.innerHTML = i;
    i++;
});


btn.addEventListener("click", () => {
    rate.style.display = "none"
    thankYou.style.display = "block"
    setTimeout(() => {
        rate.style.display = "block"
        thankYou.style.display = "none"
    }, 4000);
});

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        lisArray.forEach((li) => {
            li.classList.remove("active")
        });
        e.currentTarget.classList.add("active")
        smallDiv.innerHTML = `You selected ${e.currentTarget.innerHTML} out of ${lisArray.length}`
    });
});