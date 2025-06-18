const ability = ["strScore", "dexScore", "conScore", "intScore", "wisScore", "chaScore",];
const slot = [];
const box = [];
for (let i = 1; i <= 20; i++) {
    slot.push("slot-" + i);
    box.push("check-" + i);
}

function getStoredValues() {
    // Set player level
    // document.getElementById("playerLevel").value = localStorage.getItem("playerLevel");

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

    // Set AC
    // document.getElementById("armorClass").value = localStorage.getItem("armorClass");

    // Set HP
    // document.getElementById("maxHP").value = localStorage.getItem("maxHP");

}

function setLocalStorage() {
    // Save player level
    // localStorage.setItem("playerLevel", document.getElementById("playerLevel").value);

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

    // Save AC
    // localStorage.setItem("armorClass", document.getElementById("armorClass").value);

    // Save HP
    // localStorage.setItem("maxHP", document.getElementById("maxHP").value);

    // debug log
    var i;
    for (i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }

}
