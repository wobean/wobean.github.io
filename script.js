const ability = ["strScore", "dexScore", "conScore", "intScore", "wisScore", "chaScore",];
const slot = [];
const box = [];
for (let i = 1; i <= 20; i++) {
    slot.push("slot-" + i);
    box.push("check-" + i);
}

function initializePage() {
    localStorage.clear();
    window.location.reload();
}


function getStoredValues() {
    // Set names and careers
    document.getElementById("charName").value = localStorage.getItem("charName");
    document.getElementById("playerName").value = localStorage.getItem("playerName");
    document.getElementById("career1").value = localStorage.getItem("career1");
    document.getElementById("career2").value = localStorage.getItem("career2");

    // Set ability scores
    ability.forEach(abilityItem);
    function abilityItem(item) {
        document.getElementById(item).value = localStorage.getItem(item);
    }

    // Set inventory slots
    slot.forEach(slotItem);
    function slotItem(item) {
        document.getElementById(item).value = localStorage.getItem(item);
    }

    //Set checkbox states
    box.forEach(boxItem);
    function boxItem(item) {
        document.getElementById(item).checked = localStorage.getItem(item) === 'true' ? true : false;
    }

    // Set combat stats
    document.getElementById("maxHp").value = localStorage.getItem("maxHp");
    document.getElementById("ac").value = localStorage.getItem("ac");
    document.getElementById("speed").value = localStorage.getItem("speed");

}

function setLocalStorage() {
    // Save names and careers
    localStorage.setItem("charName", document.getElementById("charName").value);
    localStorage.setItem("playerName", document.getElementById("playerName").value);
    localStorage.setItem("career1", document.getElementById("career1").value);
    localStorage.setItem("career2", document.getElementById("career2").value);

    // Save ability scores
    ability.forEach(abilityItem);
    function abilityItem(item) {
        localStorage.setItem(item, document.getElementById(item).value);
    }

    // Save inventory slots
    slot.forEach(slotItem);
    function slotItem(item) {
        localStorage.setItem(item, document.getElementById(item).value);
    }

    // Save checkbox states
    box.forEach(boxItem);
    function boxItem(item) {
        localStorage.setItem(item, document.getElementById(item).checked);
    }

    // Save combat stats
    localStorage.setItem("maxHp", document.getElementById("maxHp").value);
    localStorage.setItem("ac", document.getElementById("ac").value);
    localStorage.setItem("speed", document.getElementById("speed").value);

    // debug log
    var i;
    for (i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }

}
