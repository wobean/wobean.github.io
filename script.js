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
    document.getElementById("career1").selectedIndex = 0;
    document.getElementById("career2").selectedIndex = 0;

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
    document.getElementById("maxHp").value = "1";
    document.getElementById("ac").value = "11";
    document.getElementById("speed").value = "30";

    setLocalStorage();
    window.location.reload();
}

function getStoredValues() {
    // Set names and careers
    document.getElementById("charName").value = localStorage.getItem("charName");
    document.getElementById("playerName").value = localStorage.getItem("playerName");
    document.getElementById("career1").selectedIndex = localStorage.getItem("career1");
    document.getElementById("career2").selectedIndex = localStorage.getItem("career2");

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
    localStorage.setItem("career1", document.getElementById("career1").selectedIndex);
    localStorage.setItem("career2", document.getElementById("career2").selectedIndex);

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

const str = "Acolyte,Acrobat,Actor,Alchemist,Antiquarian,Arcanist,Architect,Assassin,Astrologer,Baker,Bandit,Barber,Beast Tamer,Beekeeper,Blacksmith,Boatman,Bookbinder,Brewer,Burglar,Butcher,Candlemaker,Carpenter,Charlatan,Cobbler,Coachman,Cook,Courier,Courtier,Cultist,Cutpurse,Dyer,Explorer,Falconer,Fence,Fisherman,Folklorist,Gambler,Gamekeeper,Gardener,Grave Robber,Gravedigger,Groom,Guard,Headsman,Herbalist,Hermit,Hunter,Innkeeper,Inquisitor,Investigator,Jailer,Jester,Jeweler,Knight,Kidnapper,Lawyer,Locksmith,Mason,Merchant,Miner,Musician,Naturalist,Officer,Oracle,Orator,Painter,Peddler,Philosopher,Physician,Pilgrim,Pirate,Pit Fighter,Playwright,Poacher,Poet,Priest,Prospector,Puppeteer,Catcher,Saboteur,Sailor,Scout,Scribe,Sculptor,Servant,Shepherd,Shipwright,Singer,Smuggler,Soldier,Spy,Squire,Tailor,Tattooist,Thieftaker,Thug,Torturer,Trapper,Watchman,Woodcutter";
const careers = Array.from(str.split(","));

var select = document.getElementById("career1");

for (var i = 0; i < 100; i++) {
    var opt = careers[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = i;
    select.appendChild(el);
}

var select = document.getElementById("career2");

for (var i = 0; i < 100; i++) {
    var opt = careers[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = i;
    select.appendChild(el);
}

function rollAbilities() {
    const abSlots = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 3; i++) {
        const rndInt = Math.floor(Math.random() * 6) + 1;
        abSlots[rndInt - 1]++;
    }
    for (let i = 0; i < 6; i++) {
        localStorage.setItem(ability[i], Number(localStorage.getItem(ability[i])) + Number(abSlots[i]));
        document.getElementById(ability[i]).value = localStorage.getItem(ability[i]);
    }
}

function rollHP() {
    let total = 0;
    for (let i = 0; i < localStorage.getItem("level"); i++) {
        const rndInt = Math.floor(Math.random() * 6) + 1;
        total = total + rndInt;
    }
    localStorage.setItem("maxHp", total);
    document.getElementById("maxHp").value = localStorage.getItem("maxHp");
}

// Export character sheet data to local file
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

// Import character sheet data from local file
const fileInput = document.getElementById('importChar');
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    // console.log(file);
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
