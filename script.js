const ability = ["strScore", "dexScore", "conScore", "intScore", "wisScore", "chaScore",];
const slot = [];
const box = [];
for (let i = 1; i <= 20; i++) {
    slot.push("slot-" + i);
    box.push("check-" + i);
}

function initializePage() {
    // Set names and careers to defaults
    document.getElementById("charName").value = localStorage.getItem("");
    document.getElementById("playerName").value = localStorage.getItem("");
    document.getElementById("career1").value = localStorage.getItem("");
    document.getElementById("career2").value = localStorage.getItem("");

    //Set ability scores to defaults
    ability.forEach(abilityItem);
    function abilityItem(item) {
        document.getElementById(item).value = "0";
    }

    //Set inventory fields to defaults
    for (let i = 0; i < 10; i++) {
        document.getElementById(box[i]).checked = true;
        document.getElementById(box[i + 10]).checked = false;
        document.getElementById(slot[i]).value = "";
        document.getElementById(slot[i + 10]).value = "";
    }

    //Set remaining fields to defaults
    document.getElementById("level").value = "1";
    document.getElementById("xp").value = "0";
    document.getElementById("maxHp").value = "3";
    document.getElementById("ac").value = "11";
    document.getElementById("speed").value = "30";

    setLocalStorage();
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
    document.getElementById("level").value = localStorage.getItem("level");
    document.getElementById("xp").value = localStorage.getItem("xp");
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
    localStorage.setItem("level", document.getElementById("level").value);
    localStorage.setItem("xp", document.getElementById("xp").value);
    localStorage.setItem("maxHp", document.getElementById("maxHp").value);
    localStorage.setItem("ac", document.getElementById("ac").value);
    localStorage.setItem("speed", document.getElementById("speed").value);

}

function exportChar() {
    // Get data from local storage
    const data = JSON.stringify(localStorage);

    // Parse data
    const jsonData = JSON.parse(data);

    // Export data to a JSON file
    const jsonString = JSON.stringify(jsonData, null, 3);

    // Write data to JSON file
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'char_sheet.json';
    a.click();
}

function importChar() {

}

document.querySelector("#read-button").addEventListener('click', function () {
    let file = document.querySelector("#import-char").files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function (e) {
        let res = e.target.result;
        const obj = JSON.parse(res);
        Object.keys(obj).forEach(function (k) {
            localStorage.setItem(k, obj[k]);
        });
        window.location.reload();
    });
    reader.readAsText(file);
});
