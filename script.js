const ability = ["strScore", "dexScore", "conScore", "intScore", "wisScore", "chaScore"];
const slot = [];
const box = [];
const careerList = "Acolyte,Acrobat,Actor,Alchemist,Antiquarian,Arcanist,Architect,Assassin,Astrologer,Baker,Bandit,Barber,Beast Tamer,Beekeeper,Blacksmith,Boatman,Bookbinder,Brewer,Burglar,Butcher,Candlemaker,Carpenter,Charlatan,Cobbler,Coachman,Cook,Courier,Courtier,Cultist,Cutpurse,Dyer,Explorer,Falconer,Fence,Fisherman,Folklorist,Gambler,Gamekeeper,Gardener,Grave Robber,Gravedigger,Groom,Guard,Headsman,Herbalist,Hermit,Hunter,Innkeeper,Inquisitor,Investigator,Jailer,Jester,Jeweler,Knight,Kidnapper,Lawyer,Locksmith,Mason,Merchant,Miner,Musician,Naturalist,Officer,Oracle,Orator,Painter,Peddler,Philosopher,Physician,Pilgrim,Pirate,Pit Fighter,Playwright,Poacher,Poet,Priest,Prospector,Puppeteer,Catcher,Saboteur,Sailor,Scout,Scribe,Sculptor,Servant,Shepherd,Shipwright,Singer,Smuggler,Soldier,Spy,Squire,Tailor,Tattooist,Thieftaker,Thug,Torturer,Trapper,Watchman,Woodcutter";
const careerArray = Array.from(careerList.split(","));
const select1 = document.getElementById("career1");
const select2 = document.getElementById("career2");
let abTotal = 0;

//Populate the slot and checkbox arrays with element ids
for (let i = 1; i <= 20; i++) {
    slot.push("slot-" + i);
    box.push("check-" + i);
}

//Populate the career dropdown menus with elements
for (let i = 0; i < 100; i++) {
    let opt = careerArray[i];
    let el1 = document.createElement("option");
    let el2 = document.createElement("option");
    el1.textContent = opt;
    el2.textContent = opt;
    el1.value = i;
    el2.value = i;
    select1.appendChild(el1);
    select2.appendChild(el2);
}

// Set all input elements to defaults and refresh page
function initializePage() {
    document.getElementById("charName").value = localStorage.getItem("");
    document.getElementById("playerName").value = localStorage.getItem("");
    document.getElementById("level").value = "1";
    document.getElementById("xp").value = "0";
    document.getElementById("maxHp").value = "1";
    document.getElementById("ac").value = "11";
    document.getElementById("speed").value = "30";
    document.getElementById("career1").selectedIndex = 0;
    document.getElementById("career2").selectedIndex = 0;

    ability.forEach(abilityItem);
    function abilityItem(item) {
        document.getElementById(item).value = "0";
    }

    slot.forEach(slotItem);
    function slotItem(item) {
        document.getElementById(item).value = "";
    }

    for (let i = 0; i < 10; i++) {
        document.getElementById(box[i]).checked = true;
        document.getElementById(box[i + 10]).checked = false;
    }

    setLocalStorage();
    window.location.reload();
}

// Get document field values from localStorage values
function getStoredValues() {
    document.getElementById("charName").value = localStorage.getItem("charName");
    document.getElementById("playerName").value = localStorage.getItem("playerName");
    document.getElementById("level").value = localStorage.getItem("level");
    document.getElementById("xp").value = localStorage.getItem("xp");
    document.getElementById("maxHp").value = localStorage.getItem("maxHp");
    document.getElementById("ac").value = localStorage.getItem("ac");
    document.getElementById("speed").value = localStorage.getItem("speed");
    document.getElementById("career1").selectedIndex = localStorage.getItem("career1");
    document.getElementById("career2").selectedIndex = localStorage.getItem("career2");

    ability.forEach(abilityItem);
    function abilityItem(item) {
        document.getElementById(item).value = localStorage.getItem(item);
    }

    slot.forEach(slotItem);
    function slotItem(item) {
        document.getElementById(item).value = localStorage.getItem(item);
    }

    box.forEach(boxItem);
    function boxItem(item) {
        document.getElementById(item).checked = localStorage.getItem(item) === 'true' ? true : false;
    }
}

// Set localStorage values from document field values
function setLocalStorage() {
    localStorage.setItem("charName", document.getElementById("charName").value);
    localStorage.setItem("playerName", document.getElementById("playerName").value);
    localStorage.setItem("level", document.getElementById("level").value);
    localStorage.setItem("xp", document.getElementById("xp").value);
    localStorage.setItem("maxHp", document.getElementById("maxHp").value);
    localStorage.setItem("ac", document.getElementById("ac").value);
    localStorage.setItem("speed", document.getElementById("speed").value);
    localStorage.setItem("career1", document.getElementById("career1").selectedIndex);
    localStorage.setItem("career2", document.getElementById("career2").selectedIndex);

    ability.forEach(abilityItem);
    function abilityItem(item) {
        localStorage.setItem(item, document.getElementById(item).value);
    }

    //Check ability score total
    abTotal = 0;
    for (let i = 0; i < 6; i++) {
        abTotal = abTotal + Number(localStorage.getItem(ability[i]));
    }
    console.log(abTotal)

    slot.forEach(slotItem);
    function slotItem(item) {
        localStorage.setItem(item, document.getElementById(item).value);
    }

    box.forEach(boxItem);
    function boxItem(item) {
        localStorage.setItem(item, document.getElementById(item).checked);
    }
}

// Roll and assign level 1 (only) ability scores
function rollAbilities() {
    const abSlots = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 3; i++) {
        const rndInt = Math.floor(Math.random() * 6) + 1;
        abSlots[rndInt - 1]++;
    }
    if (localStorage.getItem("level") == "1") {
        for (let i = 0; i < 6; i++) {
            localStorage.setItem(ability[i], Number(abSlots[i]));
            document.getElementById(ability[i]).value = localStorage.getItem(ability[i]);
        }
    } else {
        Swal.fire({
            title: "Notice:",
            text: "Character must be Level 1 to use this button.",
            confirmButtonColor: 'green',
            confirmButtonText: "OK",
            allowOutsideClick: false
        });
    }
}

// Roll and assign max hitpoints value (1d6 per level, rerolled at each level)
function rollHP() {
    let total = 0;
    for (let i = 0; i < localStorage.getItem("level"); i++) {
        const rndInt = Math.floor(Math.random() * 6) + 1;
        total = total + rndInt;
    }
    localStorage.setItem("maxHp", total);
    document.getElementById("maxHp").value = localStorage.getItem("maxHp");
}

// Export JSON character sheet data to local file
function exportChar() {
    // Get data from local storage
    const data = JSON.stringify(localStorage);

    // Parse data
    const jsonData = JSON.parse(data);

    // Write data to JSON string
    const jsonString = JSON.stringify(jsonData, null, 3);

    // Export string data to JSON file
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'char_sheet.json';
    a.click();
}

// Import JSON character sheet data from local file
const fileInput = document.getElementById('importChar');
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
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
