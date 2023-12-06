// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:

// attack buttons
const arcaneStepper = document.getElementById("arcane-scepter")
const entangle = document.getElementById("entangle")
const dragonBlade = document.getElementById("dragon-blade")
const starFire = document.getElementById("star-fire")

// hero health progress bar
const yourProgress = document.getElementById("ap-meter")
const yourProgressValue = document.getElementById("ap-text")

// enemy health progress bar
const enemyProgress = document.getElementById("hp-meter")
const enemyHealthValue = document.getElementById("hp-text")

// monster image
const monster = document.getElementById("monster")

function onReady() {
    console.log("Ready to go!")

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

arcaneStepper.addEventListener("click", function () {
    enemyProgress.value -= 14
    enemyHealthValue.innerHTML = enemyProgress.value

    yourProgress.value -= 12
    yourProgressValue.innerHTML = yourProgress.value

    checkHealth()
})
entangle.addEventListener("click", function () {
    enemyProgress.value -= 9
    enemyHealthValue.innerHTML = enemyProgress.value

    yourProgress.value -= 23
    yourProgressValue.innerHTML = yourProgress.value

    checkHealth()
})
dragonBlade.addEventListener("click", function () {
    enemyProgress.value -= 47
    enemyHealthValue.innerHTML = enemyProgress.value

    yourProgress.value -= 38
    yourProgressValue.innerHTML = yourProgress.value

    checkHealth()
})
starFire.addEventListener("click", function () {
    enemyProgress.value -= 25
    enemyHealthValue.innerHTML = enemyProgress.value

    yourProgress.value -= 33
    yourProgressValue.innerHTML = yourProgress.value

    checkHealth()
})

function checkHealth() {
    if (enemyProgress.value <= 0) {
        monster.classList.remove("walk")
        monster.classList.add("dead")
    }
    if (yourProgress.value <= 0) {
        monster.classList.remove("walk")
        monster.classList.add("jump")
    }
}

onReady()