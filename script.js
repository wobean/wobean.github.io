function getStoredValues() {
    // Set player level
    // document.getElementById("playerLevel").value = localStorage.getItem("playerLevel");

    // Set ability scores
    document.getElementById("strScore").value = localStorage.getItem("strScore");
    document.getElementById("dexScore").value = localStorage.getItem("dexScore");
    document.getElementById("conScore").value = localStorage.getItem("conScore");
    document.getElementById("intScore").value = localStorage.getItem("intScore");
    document.getElementById("wisScore").value = localStorage.getItem("wisScore");
    document.getElementById("chaScore").value = localStorage.getItem("chaScore");

    // Set AC
    // document.getElementById("armorClass").value = localStorage.getItem("armorClass");

    // Set HP
    // document.getElementById("maxHP").value = localStorage.getItem("maxHP");

}

function setLocalStorage() {
    // Save player level
    // localStorage.setItem("playerLevel", document.getElementById("playerLevel").value);

    // Save ability scores
    localStorage.setItem("strScore", document.getElementById("strScore").value);
    localStorage.setItem("dexScore", document.getElementById("dexScore").value);
    localStorage.setItem("conScore", document.getElementById("conScore").value);
    localStorage.setItem("intScore", document.getElementById("intScore").value);
    localStorage.setItem("wisScore", document.getElementById("wisScore").value);
    localStorage.setItem("chaScore", document.getElementById("chaScore").value);

    // Save AC
    // localStorage.setItem("armorClass", document.getElementById("armorClass").value);

    // Save HP
    // localStorage.setItem("maxHP", document.getElementById("maxHP").value);

    // debug log
    var i;
    console.log("local storage");
    for (i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }

}
