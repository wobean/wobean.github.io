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

    // Set inventory slots
    document.getElementById("slot-1").value = localStorage.getItem("slot-1");
    document.getElementById("slot-2").value = localStorage.getItem("slot-2");
    document.getElementById("slot-3").value = localStorage.getItem("slot-3");
    document.getElementById("slot-4").value = localStorage.getItem("slot-4");
    document.getElementById("slot-5").value = localStorage.getItem("slot-5");
    document.getElementById("slot-6").value = localStorage.getItem("slot-6");
    document.getElementById("slot-7").value = localStorage.getItem("slot-7");
    document.getElementById("slot-8").value = localStorage.getItem("slot-8");
    document.getElementById("slot-9").value = localStorage.getItem("slot-9");
    document.getElementById("slot-10").value = localStorage.getItem("slot-10");
    document.getElementById("slot-11").value = localStorage.getItem("slot-11");
    document.getElementById("slot-12").value = localStorage.getItem("slot-12");
    document.getElementById("slot-13").value = localStorage.getItem("slot-13");
    document.getElementById("slot-14").value = localStorage.getItem("slot-14");
    document.getElementById("slot-15").value = localStorage.getItem("slot-15");
    document.getElementById("slot-16").value = localStorage.getItem("slot-16");
    document.getElementById("slot-17").value = localStorage.getItem("slot-17");
    document.getElementById("slot-18").value = localStorage.getItem("slot-18");
    document.getElementById("slot-19").value = localStorage.getItem("slot-19");
    document.getElementById("slot-20").value = localStorage.getItem("slot-20");

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

    // Save inventory slots
    localStorage.setItem("slot-1", document.getElementById("slot-1").value);
    localStorage.setItem("slot-2", document.getElementById("slot-2").value);
    localStorage.setItem("slot-3", document.getElementById("slot-3").value);
    localStorage.setItem("slot-4", document.getElementById("slot-4").value);
    localStorage.setItem("slot-5", document.getElementById("slot-5").value);
    localStorage.setItem("slot-6", document.getElementById("slot-6").value);
    localStorage.setItem("slot-7", document.getElementById("slot-7").value);
    localStorage.setItem("slot-8", document.getElementById("slot-8").value);
    localStorage.setItem("slot-9", document.getElementById("slot-9").value);
    localStorage.setItem("slot-10", document.getElementById("slot-10").value);
    localStorage.setItem("slot-11", document.getElementById("slot-11").value);
    localStorage.setItem("slot-12", document.getElementById("slot-12").value);
    localStorage.setItem("slot-13", document.getElementById("slot-13").value);
    localStorage.setItem("slot-14", document.getElementById("slot-14").value);
    localStorage.setItem("slot-15", document.getElementById("slot-15").value);
    localStorage.setItem("slot-16", document.getElementById("slot-16").value);
    localStorage.setItem("slot-17", document.getElementById("slot-17").value);
    localStorage.setItem("slot-18", document.getElementById("slot-18").value);
    localStorage.setItem("slot-19", document.getElementById("slot-19").value);
    localStorage.setItem("slot-20", document.getElementById("slot-20").value);

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
