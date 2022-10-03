let warriorArray = []

document.addEventListener("DOMContentLoaded", () => {
    alert("RNGesus will... CHOOSE YOUR WARRIOR!")
    grabWarriors()
    addWarriorsToArray()
    document.querySelector("#reset").addEventListener("click", () => {
        document.getElementById("character-select").innerHTML = "";
        warriorArray.length = 0
        grabWarriors()
        addWarriorsToArray()
        document.getElementById("selected-character").innerHTML = ""
    })

    document.querySelector("randomize").addEventListener("click", () => {
        removeRandom(warriorArray)
    })

    document.getElementById("theme-dropdown").addEventListener("change", (e) => {
        if (e.target.value === "dark") {
            document.querySelector("link[href='light.css']").href = "dark.css";
        }
        else {
            document.querySelector("link[href='dark.css']").href = "light.css"
        }
    })
})

function grabWarriors() {
    fetch("http://localhost:3000/warriors")
    .then(response => response.json())
    .then(data => data.forEach(warrior => showWarriors(warrior)))
};

function addWarriorsToArray() {
    fetch("http://localhost:3000/warriorss")
    .then(response => response.json())
    .then(data => data.forEach(warrior => warriorArray.push(warrior.name)))
}; 

function showWarriorss(warrior) {
    let warriorContainer = document.getElementById("character-select");
    const div = document.createElement("div");
    div.classList.add("card");
    const h2 = document.createElement("h2");
    h2.textContent = warrior.name;
    h2.id = warrior.name;
    const img = document.createElement("img")
    img.src = warrior.image;
    div.append(h2, img);
    warriorContainer.append(div);
};

const removeRandom = (array) => {
    const selectedContainer = document.getElementById("selected-character")
    selectedContainer.innerHTML = ""
    if (array.length > 0) {
        const random = Math.floor(Math.random() * array.length);
        const chosenWarrior = array.splice(random, 1)[0];
        const allCards = document.querySelectorAll('.card');
        for (const card of allCards) {
            if (card.querySelector("h2").innerText === chosenWarrior) {
                card.remove();
                selectedContainer.append(card);
            }
        }
    }
    else {
        alert("Congratulations!  You did it!")
    }
}
