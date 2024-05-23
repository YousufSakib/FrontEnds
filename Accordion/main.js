const qas = document.getElementById("qas");

qas.addEventListener("click", (e) => {
    let a = e.target;
    while (a.getAttribute("id") !== "qa") {
        //In case: use clicks on qas element
        //Thats way no possibility of infinite loop
        if (a === document.body) break;
        a = a.parentElement;
    }
    a.querySelector("#a").classList.toggle("hidden");
    const plus_minus = a.querySelector("#q span:nth-child(2)");
    plus_minus.innerText = plus_minus.innerText === "+" ? "-" : "+";
});
