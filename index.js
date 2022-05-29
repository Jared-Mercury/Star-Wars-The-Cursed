document.getElementById("openStoreButton").addEventListener("click", openStoreList)
document.getElementById("useMedPacButton").addEventListener("click", useMedPack)

function waterUse(heat, water) {
    console.log("water: " + items.water)
    if (items.water > 0) {
        if (items.map >= 1) {
            items.water = Math.round((items.water - (partyMembers.length * heat / 4)) + water + 5)
            document.getElementById("openMapButton").classList.remove("hiddenVisibility") //with a map you travel faster and safer so you lose less water than withouut it 
        } else {
            items.water = Math.round((items.water - (partyMembers.length * heat / 4)) + water)

            console.log("party members: " + partyMembers.length)
            console.log("heat: " + heat)
            console.log("water in the giuven location: " + water)
        }
    } else {
        for (let i = 0; i < partyMembers.length; i++) {
            partyMembers[i].health -= 1
        }
    }
    console.log("water left: " + items.water)
}

function reloadInfo() {
    document.getElementById("itemsList").innerHTML = `<p>NECCESITIES: <br> 
water: ${items.water} <br>
credits: ${items.credits} <br>
map: ${items.map} <br>
first aid kit: ${items.firstAid}<br>
parts: ${items.parts}<br></p>
<p>WEAPONS:<br>
armor: ${items.armor}<br>
stick: ${items.stick}<br>
blaster: ${items.blaster}<br>
lightsaber: ${items.lightsaber}<br></p>
`

    document.getElementById("partyMembers").innerHTML = "<p>YOUR PARTY: <br>"

    for (let i = 0; i < partyMembers.length; i++) {
        document.getElementById("partyMembers").innerHTML += `${partyMembers[i].name} : ${partyMembers[i].health} hp<br>`

    }

}

function gettingTheKid() {
    let kiddo = {
        name: "Jared",
        health: 20
    }


    let randomEvent = document.getElementById("anEventHappened")

    let randomEventInside = document.createElement('div')
    randomEventInside.setAttribute("id", "randomEventInside")

    randomEventInside.innerHTML = `
    <button id="eventExitButton">X</button>
    <div id="eventText">
           
      As you pass the crossroads you notice something on the side of one of the smaller paths. As you walk closer you notice that it's not something but someone! You actually feel quite a strong source of the force in the young boy. Tatooine is far from Coruscant and in the Hutt Space so it's possible that the boy has not been found by Jedi scouts when he was a baby. As you kneel by him, you feel that his connection with the force is much stronger than in most younglings or even Jedi Knights. You decide to take the boy along and bring him to the temple to hopefully begin his training. You give him some water, so that he regasins some strength. You learn that his name is Jared.
                </div>
    `
    items.water -= 1

    document.getElementById("main").classList.add("hiddenVisibility")

    randomEvent.appendChild(randomEventInside)
    document.getElementById("randomEventInside").style.backgroundColor = "rgba(0,128,0.4)"

    document.getElementById("eventExitButton").addEventListener("click", function() {
        document.getElementById("main").classList.remove("hiddenVisibility")
        document.getElementById("anEventHappened").classList.add("hiddenVisibility")
    })

    partyMembers.push(kiddo)
}

let picture = document.getElementById("displayPic")

let partyMembers = [{
        name: "Obi-Wan Kenobi",
        health: 80,
        force: 5,
    },
    {
        name: "Anakin Skywalker",
        health: 60,
        force: 8,
    },
    {
        name: "Ahsoka Tano",
        health: 50,
        force: 4,
    },
    {
        name: "Jason Thorne",
        health: 60,
        force: 5,
    }
]

let items = {
    water: 100, //each member of the party uses a certaain amount of water per place, depending on the heat and water parameters of the location
    map: 0,
    credits: 100, //with credits you can buy weapons and water
    firstAid: 0,
    armor: 0,
    lightsaber: 0,
    blaster: 0,
    stick: 0,
    parts: 0, //2 parts - you  can make a stick, 6 parts - blaster, 12 - lightsaber  
}

let mosEisleyArr = {
    name: "Mos Eisley",
    pic: "images/moseisley.png",
    water: 8,
    heat: 7,
    danger: 6,
    resources: 2,
}

let crossRoadsArr = {
    name: "Crossroads",
    pic: "images/crossRoads.png",
    water: 0,
    heat: 9,
    danger: 7,
    resources: 3,
}

let sarlacPitArr = {
    name: "Sarlac's Pit",
    pic: "images/sarlacpit.png",
    water: 1,
    heat: 9,
    danger: 8,
    resources: 5,
}

let jabbaPalaceArr = {
    name: "Jabba's Palace",
    pic: "images/jabbaspalace.png",
    water: 6,
    heat: 5,
    danger: 7,
    resources: 4,
}

let duneSeaArr = {
    name: "Dune Sea",
    pic: "images/dunesea.png",
    water: 0,
    heat: 10,
    danger: 7,
    resources: 4,
}

let jundlandWastesArr = {
    name: "Jundland Wastes",
    pic: "images/jundlandwastes.png",
    water: 0,
    heat: 10,
    danger: 9,
    resources: 4,
}

let tuskenCampArr = {
    name: "Tusken Raiders' Camp",
    pic: "images/tuskencamp.png",
    water: 4,
    heat: 9,
    danger: 10,
    resources: 6,
}

let moistureFarm1Arr = {
    name: "Abandoned Moisture Farm",
    pic: "images/moisturefarm1.png",
    water: 6,
    heat: 6,
    danger: 3,
    resources: 8,
}

let moistureFarm2Arr = {
    name: "Functioning Moisture Farm",
    pic: "images/moisturefarm2.png",
    water: 10,
    heat: 4,
    danger: 2,
    resources: 5,
}

let shipWreckArr = {
    name: "Ship Wreck",
    pic: "images/shipwreck.png",
    water: 1,
    heat: 7,
    danger: 7,
    resources: 10,
}

let mosEspaArr = {
    name: "Mos Espa",
    pic: "images/mosespa.png",
    water: 7,
    heat: 7,
    danger: 7,
    resources: 3,
}

let tocheStationArr = {
    name: "Toche Station",
    pic: "images/toschestation.png",
    water: 6,
    heat: 6,
    danger: 6,
    resources: 3,
}

let dragonCaveArr = {
    name: "Crayt Dragon Cave",
    pic: "images/dragoncave.png",
    water: 1,
    heat: 6,
    danger: 10,
    resources: 6,
}

function showButtons() {
    if (items.firstAid >= 1) {
        document.getElementById("useMedPacButton").classList.remove("hiddenVisibility")
    } else {
        document.getElementById("useMedPacButton").classList.add("hiddenVisibility")

    }

    if (items.map >= 1) {
        document.getElementById("openMapButton").classList.remove("hiddenVisibility")
    } else {
        document.getElementById("openMapButton").classList.add("hiddenVisibility")

    }
}

let north = document.getElementById("north-button")
let south = document.getElementById("south-button")
let east = document.getElementById("east-button")
let west = document.getElementById("west-button")

north.addEventListener("click", MosEisley)


function MosEisley() {
    document.getElementById("openStoreButton").classList.remove("hiddenVisibility")

    document.getElementById("missionsButton").classList.remove("hiddenVisibility")

    document.getElementById("buyWater").classList.remove("hiddenVisibility")
    document.getElementById("buystick").classList.remove("hiddenVisibility")
    document.getElementById("buyParts").classList.remove("hiddenVisibility")
    document.getElementById("buyMap").classList.remove("hiddenVisibility")
    document.getElementById("buyMedPac").classList.remove("hiddenVisibility")
    document.getElementById("buylightSaber").classList.remove("hiddenVisibility")
    document.getElementById("buyArmor").classList.remove("hiddenVisibility")
    document.getElementById("buyBlaster").classList.remove("hiddenVisibility")

    showButtons()

    let goodOrBad = Math.random()

    if (goodOrBad <= 0.5) {
        randomBadEvent(mosEisleyArr)
    } else {
        randomGoodEvent(mosEisleyArr)
    }

    picture.src = mosEisleyArr.pic
    document.getElementById("placeName").innerHTML = mosEisleyArr.name
    waterUse(mosEisleyArr.heat, mosEisleyArr.water)
    console.log(items.water)
    reloadInfo()

    west.classList.remove("hiddenVisibility")
    east.classList.remove("hiddenVisibility")
    north.classList.remove("hiddenVisibility")
    south.classList.add("hiddenVisibility")


    console.log("Mos Eisley")

    north.removeEventListener("click", MosEisley)

    north.addEventListener("click", () => {
        DuneSea(); // want to remove this after the first click
        north.removeEventListener("click", DuneSea);
    });
    east.addEventListener("click", () => {
        JundlandWastes(); // want to remove this after the first click
        east.removeEventListener("click", JundlandWastes);
    });
    west.addEventListener("click", () => {
        SarlacPit(); // want to remove this after the first click
        west.removeEventListener("click", SarlacPit);
    });
}

function SarlacPit() {

    document.getElementById("openStoreButton").classList.add("hiddenVisibility")

    showButtons()

    let goodOrBad = Math.random()

    if (goodOrBad <= 0.5) {
        randomBadEvent(sarlacPitArr)
    } else {
        randomGoodEvent(sarlacPitArr)
    }

    picture.src = sarlacPitArr.pic

    document.getElementById("placeName").innerHTML = sarlacPitArr.name
    waterUse(sarlacPitArr.heat, sarlacPitArr.water)
    console.log(items.water)
    reloadInfo()

    north.classList.remove("hiddenVisibility")
    south.classList.add("hiddenVisibility")
    west.classList.add("hiddenVisibility")
    east.classList.remove("hiddenVisibility")

    console.log("Sarlac Pit")

    north.addEventListener("click", () => {
        JabbasPalace(); // want to remove this after the first click
        north.removeEventListener("click", JabbasPalace);
    });

    east.addEventListener("click", () => {
        MosEisley(); // want to remove this after the first click
        east.removeEventListener("click", MosEisley);
    });
}

function DuneSea() {

    document.getElementById("openStoreButton").classList.add("hiddenVisibility")
    picture.src = duneSeaArr.pic

    showButtons()


    let goodOrBad = Math.random()

    if (goodOrBad <= 0.5) {
        randomBadEvent(duneSeaArr)
    } else {
        randomGoodEvent(duneSeaArr)
    }

    document.getElementById("placeName").innerHTML = duneSeaArr.name
    waterUse(duneSeaArr.heat, duneSeaArr.water)
    console.log(items.water)
    reloadInfo()

    west.classList.remove("hiddenVisibility")
    east.classList.remove("hiddenVisibility")
    north.classList.remove("hiddenVisibility")
    south.classList.remove("hiddenVisibility")

    console.log("Dune Sea")

    north.addEventListener("click", () => {
        crossRoads(); // want to remove this after the first click
        north.removeEventListener("click", crossRoads);
    });
    south.addEventListener("click", () => {
        MosEisley(); // want to remove this after the first click
        south.removeEventListener("click", MosEisley);
    });
    east.addEventListener("click", () => {
        TuskenCamp(); // want to remove this after the first click
        east.removeEventListener("click", TuskenCamp);
    });
    west.addEventListener("click", () => {
        JabbasPalace(); // want to remove this after the first click
        west.removeEventListener("click", JabbasPalace);
    });
}

function TuskenCamp() {

    document.getElementById("openStoreButton").classList.remove("hiddenVisibility")

    document.getElementById("buyWater").classList.remove("hiddenVisibility")
    document.getElementById("buystick").classList.remove("hiddenVisibility")
    document.getElementById("buyParts").classList.remove("hiddenVisibility")
    document.getElementById("buyMap").classList.add("hiddenVisibility")
    document.getElementById("buyMedPac").classList.add("hiddenVisibility")
    document.getElementById("buylightSaber").classList.add("hiddenVisibility")
    document.getElementById("buyArmor").classList.add("hiddenVisibility")
    document.getElementById("buyBlaster").classList.add("hiddenVisibility")

    showButtons()

    let goodOrBad = Math.random()

    if (goodOrBad <= 0.5) {
        randomBadEvent(tuskenCampArr)
    } else {
        randomGoodEvent(tuskenCampArr)
    }

    picture.src = tuskenCampArr.pic
    document.getElementById("placeName").innerHTML = tuskenCampArr.name
    waterUse(tuskenCampArr.heat, tuskenCampArr.water)
    console.log(items.water)
    reloadInfo()

    west.classList.remove("hiddenVisibility")
    east.classList.add("hiddenVisibility")
    north.classList.add("hiddenVisibility")
    south.classList.remove("hiddenVisibility")

    console.log("Tusken Camp")

    south.addEventListener("click", () => {
        JundlandWastes; // want to remove this after the first click
        south.removeEventListener("click", JundlandWastes);
    });
    west.addEventListener("click", () => {
        DuneSea(); // want to remove this after the first click
        west.removeEventListener("click", DuneSea);
    });
}

function JundlandWastes() {

    let goodOrBad = Math.random()

    if (goodOrBad <= 0.5) {
        randomBadEvent(jundlandWastesArr)
    } else {
        randomGoodEvent(jundlandWastesArr)
    }

    showButtons()


    document.getElementById("openStoreButton").classList.add("hiddenVisibility")
    picture.src = jundlandWastesArr.pic
    document.getElementById("placeName").innerHTML = jundlandWastesArr.name
    waterUse(jundlandWastesArr.heat, jundlandWastesArr.water)
    console.log(items.water)
    reloadInfo()

    west.classList.remove("hiddenVisibility")
    east.classList.add("hiddenVisibility")
    north.classList.remove("hiddenVisibility")
    south.classList.add("hiddenVisibility")

    console.log("Jundland Wastes")

    north.addEventListener("click", () => {
        TuskenCamp(); // want to remove this after the first click
        north.removeEventListener("click", TuskenCamp);
    });
    west.addEventListener("click", () => {
        MosEisley(); // want to remove this after the first click
        west.removeEventListener("click", MosEisley);
    });
}

let i = 0

function crossRoads() {

    document.getElementById("openStoreButton").classList.add("hiddenVisibility")

    showButtons()


    if (i == 0) { //add an alert or sth that you found a kid
        gettingTheKid()
    }
    i += 1

    picture.src = crossRoadsArr.pic
    document.getElementById("placeName").innerHTML = crossRoadsArr.name
    waterUse(crossRoadsArr.heat, crossRoadsArr.water)
    console.log(items.water)
    reloadInfo()

    west.classList.remove("hiddenVisibility")
    east.classList.remove("hiddenVisibility")
    north.classList.remove("hiddenVisibility")
    south.classList.remove("hiddenVisibility")

    console.log("crossroads")

    north.addEventListener("click", () => {
        DragonCave(); // want to remove this after the first click
        north.removeEventListener("click", DragonCave);
    });
    south.addEventListener("click", () => {
        DuneSea(); // want to remove this after the first click
        south.removeEventListener("click", DuneSea);
    });
    east.addEventListener("click", () => {
        MosEspa(); // want to remove this after the first click
        east.removeEventListener("click", MosEspa);
    });
    west.addEventListener("click", () => {
        MoistureFarm_1(); // want to remove this after the first click
        west.removeEventListener("click", MoistureFarm_1);
    });
}


function shipWreck() {

    document.getElementById("openStoreButton").classList.add("hiddenVisibility")

    showButtons()


    let goodOrBad = Math.random()

    if (goodOrBad <= 0.5) {
        randomBadEvent(shipWreckArr)
    } else {
        randomGoodEvent(shipWreckArr)
    }
    picture.src = shipWreckArr.pic
    document.getElementById("placeName").innerHTML = shipWreckArr.name
    waterUse(shipWreckArr.heat, shipWreckArr.water)
    console.log(items.water)
    reloadInfo()

    west.classList.add("hiddenVisibility")
    east.classList.remove("hiddenVisibility")
    north.classList.add("hiddenVisibility")
    south.classList.remove("hiddenVisibility")

    console.log("Ship Wreck")



    south.addEventListener("click", () => {
        JabbasPalace(); // want to remove this after the first click
        south.removeEventListener("click", JabbasPalace);
    });
    east.addEventListener("click", () => {
        MoistureFarm_1(); // want to remove this after the first click
        east.removeEventListener("click", MoistureFarm_1);
    });
}


function MoistureFarm_1() {

    document.getElementById("openStoreButton").classList.remove("hiddenVisibility")

    showButtons()

    document.getElementById("buyWater").classList.remove("hiddenVisibility")
    document.getElementById("buyMap").classList.add("hiddenVisibility")
    document.getElementById("buyMedPac").classList.add("hiddenVisibility")
    document.getElementById("buylightSaber").classList.add("hiddenVisibility")
    document.getElementById("buyArmor").classList.add("hiddenVisibility")
    document.getElementById("buyBlaster").classList.add("hiddenVisibility")
    document.getElementById("buystick").classList.add("hiddenVisibility")
    document.getElementById("buyParts").classList.add("hiddenVisibility")

    let goodOrBad = Math.random()

    if (goodOrBad <= 0.5) {
        randomBadEvent(moistureFarm1Arr)
    } else {
        randomGoodEvent(moistureFarm1Arr)
    }

    picture.src = moistureFarm1Arr.pic
    document.getElementById("placeName").innerHTML = moistureFarm1Arr.name
    waterUse(moistureFarm1Arr.heat, moistureFarm1Arr.water)
    console.log(items.water)
    reloadInfo()

    west.classList.remove("hiddenVisibility")
    east.classList.remove("hiddenVisibility")
    north.classList.add("hiddenVisibility")
    south.classList.add("hiddenVisibility")

    console.log("Moisture Farm 1")



    east.addEventListener("click", () => {
        crossRoads(); // want to remove this after the first click
        east.removeEventListener("click", crossRoads);
    });
    west.addEventListener("click", () => {
        shipWreck(); // want to remove this after the first click
        west.removeEventListener("click", shipWreck);
    });
}


function MosEspa() {

    document.getElementById("openStoreButton").classList.remove("hiddenVisibility")

    showButtons()

    document.getElementById("buyWater").classList.remove("hiddenVisibility")
    document.getElementById("buystick").classList.remove("hiddenVisibility")
    document.getElementById("buyParts").classList.remove("hiddenVisibility")
    document.getElementById("buyMap").classList.remove("hiddenVisibility")
    document.getElementById("buyMedPac").classList.remove("hiddenVisibility")
    document.getElementById("buylightSaber").classList.remove("hiddenVisibility")
    document.getElementById("buyArmor").classList.remove("hiddenVisibility")
    document.getElementById("buyBlaster").classList.remove("hiddenVisibility")

    let goodOrBad = Math.random()

    if (goodOrBad <= 0.5) {
        randomBadEvent(mosEspaArr)
    } else {
        randomGoodEvent(mosEspaArr)
    }

    picture.src = mosEspaArr.pic
    document.getElementById("placeName").innerHTML = mosEspaArr.name
    waterUse(mosEspaArr.heat, mosEspaArr.water)
    console.log(items.water)
    reloadInfo()

    west.classList.remove("hiddenVisibility")
    east.classList.add("hiddenVisibility")
    north.classList.remove("hiddenVisibility")
    south.classList.add("hiddenVisibility")

    console.log("Mos Espa")



    north.addEventListener("click", () => {
        TocheStation(); // want to remove this after the first click
        north.removeEventListener("click", TocheStation);
    });
    west.addEventListener("click", () => {
        crossRoads(); // want to remove this after the first click
        west.removeEventListener("click", crossRoads);
    });
}


function MoistureFarm_2() {

    document.getElementById("openStoreButton").classList.remove("hiddenVisibility")

    showButtons()
    document.getElementById("buyWater").classList.remove("hiddenVisibility")
    document.getElementById("buyMap").classList.add("hiddenVisibility")
    document.getElementById("buyMedPac").classList.add("hiddenVisibility")
    document.getElementById("buylightSaber").classList.add("hiddenVisibility")
    document.getElementById("buyArmor").classList.add("hiddenVisibility")
    document.getElementById("buyBlaster").classList.add("hiddenVisibility")
    document.getElementById("buystick").classList.add("hiddenVisibility")
    document.getElementById("buyParts").classList.add("hiddenVisibility")

    let goodOrBad = Math.random()

    if (goodOrBad <= 0.5) {
        randomBadEvent(moistureFarm2Arr)
    } else {
        randomGoodEvent(moistureFarm2Arr)
    }

    picture.src = moistureFarm2Arr.pic
    document.getElementById("placeName").innerHTML = moistureFarm2Arr.name
    waterUse(moistureFarm2Arr.heat, moistureFarm2Arr.water)
    console.log(items.water)
    reloadInfo()

    west.classList.add("hiddenVisibility")
    east.classList.remove("hiddenVisibility")
    north.classList.add("hiddenVisibility")
    south.classList.add("hiddenVisibility")

    console.log("Moisture Farm 2")


    east.addEventListener("click", () => {
        DragonCave(); // want to remove this after the first click
        east.removeEventListener("click", DragonCave);
    });
}


function DragonCave() {

    document.getElementById("openStoreButton").classList.add("hiddenVisibility")

    showButtons()


    let goodOrBad = Math.random()

    if (goodOrBad <= 0.5) {
        randomBadEvent(dragonCaveArr)
    } else {
        randomGoodEvent(dragonCaveArr)
    }

    picture.src = dragonCaveArr.pic
    document.getElementById("placeName").innerHTML = dragonCaveArr.name
    waterUse(dragonCaveArr.heat, dragonCaveArr.water)
    console.log(items.water)
    reloadInfo()

    west.classList.remove("hiddenVisibility")
    east.classList.remove("hiddenVisibility")
    north.classList.add("hiddenVisibility")
    south.classList.remove("hiddenVisibility")

    console.log("Dragon Cave")


    south.addEventListener("click", () => {
        crossRoads(); // want to remove this after the first click
        south.removeEventListener("click", crossRoads);
    });
    east.addEventListener("click", () => {
        TocheStation(); // want to remove this after the first click
        east.removeEventListener("click", TocheStation);
    });
    west.addEventListener("click", () => {
        MoistureFarm_2(); // want to remove this after the first click
        west.removeEventListener("click", MoistureFarm_2);
    });
}


function TocheStation() {

    document.getElementById("openStoreButton").classList.remove("hiddenVisibility")

    showButtons()

    document.getElementById("buyWater").classList.remove("hiddenVisibility")
    document.getElementById("buystick").classList.remove("hiddenVisibility")
    document.getElementById("buyParts").classList.remove("hiddenVisibility")
    document.getElementById("buyMap").classList.remove("hiddenVisibility")
    document.getElementById("buyMedPac").classList.remove("hiddenVisibility")
    document.getElementById("buylightSaber").classList.remove("hiddenVisibility")
    document.getElementById("buyArmor").classList.remove("hiddenVisibility")
    document.getElementById("buyBlaster").classList.remove("hiddenVisibility")

    let goodOrBad = Math.random()

    if (goodOrBad <= 0.5) {
        randomBadEvent(tocheStationArr)
    } else {
        randomGoodEvent(tocheStationArr)
    }

    picture.src = tocheStationArr.pic
    document.getElementById("placeName").innerHTML = tocheStationArr.name
    waterUse(tocheStationArr.heat, tocheStationArr.water)
    console.log(items.water)

    west.classList.remove("hiddenVisibility")
    east.classList.add("hiddenVisibility")
    north.classList.remove("hiddenVisibility")
    south.classList.remove("hiddenVisibility")

    console.log("Toche Station")


    north.addEventListener("click", () => {
        BossFight(); // want to remove this after the first click
        north.removeEventListener("click", BossFight);
    });
    south.addEventListener("click", () => {
        MosEspa(); // want to remove this after the first click
        south.removeEventListener("click", MosEspa);
    });
    west.addEventListener("click", () => {
        DragonCave(); // want to remove this after the first click
        west.removeEventListener("click", DragonCave);
    });
}

function JabbasPalace() {

    document.getElementById("openStoreButton").classList.remove("hiddenVisibility")

    showButtons()

    document.getElementById("buyWater").classList.add("hiddenVisibility")
    document.getElementById("buystick").classList.add("hiddenVisibility")
    document.getElementById("buyParts").classList.add("hiddenVisibility")
    document.getElementById("buyMap").classList.add("hiddenVisibility")
    document.getElementById("buyMedPac").classList.add("hiddenVisibility")
    document.getElementById("buylightSaber").classList.remove("hiddenVisibility")
    document.getElementById("buyArmor").classList.remove("hiddenVisibility")
    document.getElementById("buyBlaster").classList.remove("hiddenVisibility")


    let goodOrBad = Math.random()

    if (goodOrBad <= 0.5) {
        randomBadEvent(jabbaPalaceArr)
    } else {
        randomGoodEvent(jabbaPalaceArr)
    }

    picture.src = jabbaPalaceArr.pic
    document.getElementById("placeName").innerHTML = jabbaPalaceArr.name
    waterUse(jabbaPalaceArr.heat, jabbaPalaceArr.water)
    console.log(items.water)

    west.classList.add("hiddenVisibility")
    east.classList.remove("hiddenVisibility")
    north.classList.remove("hiddenVisibility")
    south.classList.remove("hiddenVisibility")

    console.log("Jabbas Palace")


    north.addEventListener("click", () => {
        shipWreck(); // want to remove this after the first click
        north.removeEventListener("click", shipWreck);
    });
    south.addEventListener("click", () => {
        SarlacPit(); // want to remove this after the first click
        south.removeEventListener("click", SarlacPit);
    });
    east.addEventListener("click", () => {
        DuneSea(); // want to remove this after the first click
        east.removeEventListener("click", DuneSea);
    });
}

function BossFight() {
    console.log("boss fight")
}



function shopping(price, item, amount) {
    let shoppingDiv = document.getElementById("popUp")

    let shoppingInside = document.createElement('div')
    shoppingInside.setAttribute("id", "shoppingInside")

    document.getElementById("main").classList.add("hiddenVisibility")

    shoppingInside.innerHTML = "<p>Hello! It seems like you are interested in buying some products from me. That is great! Please confirm your purchase and/or exit the building.</p>" //works but css is ehh not so good - correct that, all in all call the shopping function with the right parameters when the user clicks a button ('buy water','buy blaster' etc.) make this buttons appear in the locations that you've decided to be selling the given item

    //make a button that opens a popup with avaliable purchases in the given location (a div with every possible item to buy and depending on location some items will be visible and some not), when any of the purchase buttons is clicked - the popup with items list is automtically closed (made invisible) and the new popup appears - call the shopping function - PERFECT!

    let buttonOK = document.createElement('button')
    buttonOK.setAttribute("id", "buttonOK")
    buttonOK.innerHTML = "PURCHASE"

    let buttonCANCEL = document.createElement('button')
    buttonCANCEL.setAttribute("id", "buttonCANCEL")
    buttonCANCEL.innerHTML = "EXIT"

    shoppingInside.appendChild(buttonOK)
    buttonOK.addEventListener("click", function() {
        items.credits -= price
        items[item] += amount
        console.log("I work")
        reloadInfo()
    })

    shoppingInside.appendChild(buttonCANCEL)
    buttonCANCEL.addEventListener("click", function() {
        document.getElementById("popUp").style.display = "none"
        document.getElementById("main").classList.remove("hiddenVisibility")
    })

    shoppingDiv.appendChild(shoppingInside)

    document.getElementById("popUp").style.display = "block"
}

//add a function that will calculate the probability of finding something in the given location
//add a function that calculates possibility of a dangerous event - using the danger parameter in the given location, dangerous events: - an accident - takes away health points, ambush - opens a fught engine, obstacle on the road - takes away force points from the character you choose, so that he can use the force to move the object away
let fiftyPercent = Math.random()


function openStoreList() {

    // work on the .css 

    let storeDiv = document.getElementById("store")


    document.getElementById("main").classList.add("hiddenVisibility")

    document.getElementById("store").classList.remove("hiddenVisibility")


    document.getElementById("storeExitButton").addEventListener("click", function() {
        document.getElementById("main").classList.remove("hiddenVisibility")
        document.getElementById("store").classList.add("hiddenVisibility")
    })

    document.getElementById("buyWater").addEventListener("click", function() {
        shopping(5, 'water', 100)
        document.getElementById("store").classList.add("hiddenVisibility")
    })

    document.getElementById("buyMap").addEventListener("click", function() {
        shopping(20, 'map', 1)
        document.getElementById("store").classList.add("hiddenVisibility")
        console.log("BUY MAP")
    })

    document.getElementById("buyMedPac").addEventListener("click", function() {
        shopping(10, 'firstAid', 1)
        document.getElementById("store").classList.add("hiddenVisibility")
        console.log("FIRST AID")
    })

    document.getElementById("buyParts").addEventListener("click", function() {
        shopping(6, 'parts', 1)
        document.getElementById("store").classList.add("hiddenVisibility")
    })

    document.getElementById("buystick").addEventListener("click", function() {
        shopping(20, 'stick', 1)
        document.getElementById("store").classList.add("hiddenVisibility")
    })

    document.getElementById("buyBlaster").addEventListener("click", function() {
        shopping(50, 'blaster', 1)
        document.getElementById("store").classList.add("hiddenVisibility")
    })

    document.getElementById("buylightSaber").addEventListener("click", function() {
        shopping(100, 'lightsaber', 1)
        document.getElementById("store").classList.add("hiddenVisibility")
    })

    document.getElementById("buyArmor").addEventListener("click", function() {
        shopping(70, 'armor', 1)
        document.getElementById("store").classList.add("hiddenVisibility")
    })
}



function randomBadEvent(place) {
    console.log("Ok so, I've been called - the randombad event function")

    // let random = Math.random()

    // if (place.danger / 10 <= random) {
    //     let event = Math.random() // get a random number from 0 to 1
    //     let oneOfTwoEvents = Math.random()

    //     let randomEvent = document.getElementById("anEventHappened")

    //     let randomEventInside = document.createElement('div')
    //     randomEventInside.setAttribute("id", "randomEventInside")

    //     if (event <= 0.4) {
    //         if (0.5 <= fiftyPercent) {
    //             //obstacle 

    //             randomEventInside.innerHTML = `
    // <button id="eventExitButton">X</button>
    // <div id="eventText">

    //        Woops! Is that a giant rock that appeared on your way? How did it... oh, right... IT'S A TRAP! Trap set up by the Tuskens, if you want to go on with your journey, you will have to use the force to move the obstacles out of your way. One of your characters loses a force point.

    //             </div>
    // `

    //             let loseForcePoint = Math.floor(Math.random() * (partyMembers.length))

    //             partyMembers[loseForcePoint].force -= 1

    //             document.getElementById("main").classList.add("hiddenVisibility")

    //             randomEvent.appendChild(randomEventInside)

    //             document.getElementById("eventExitButton").addEventListener("click", function() {
    //                 document.getElementById("main").classList.remove("hiddenVisibility")
    //                 document.getElementById("anEventHappened").classList.add("hiddenVisibility")
    //             })
    //         }
    //     } else if (event <= 0.8) {
    //         if (0.5 <= fiftyPercent) {
    //             //accident - if you've got armor on, accident doesnt take away your health - add an option to own an armor  
    //             if (0.5 <= oneOfTwoEvents) {
    //                 randomEventInside.innerHTML = `
    // <button id="eventExitButton">X</button>
    // <div id="eventText">
    //        <h2>

    //        Can you hear that? Are these... YES! These are the Sand People's sounds! Your party got caught in an ambush while passing through a canyon. The Sand People got you surrounded and start to shoot at you from their rifles!

    //             </div>
    // `

    //                 document.getElementById("main").classList.add("hiddenVisibility")

    //                 randomEvent.appendChild(randomEventInside)

    //                 document.getElementById("eventExitButton").addEventListener("click", function() {
    //                     document.getElementById("main").classList.remove("hiddenVisibility")
    //                     document.getElementById("anEventHappened").classList.add("hiddenVisibility")
    //                 })

    //                 if (items.armor >= 1) {
    //                     randomEventInside.innerHTML += '<p> Seems like you were lucky! You had your party equipped in some good quality armor, so thye got out with nothing more than a few scraches!'
    //                 } else {
    //                     randomEventInside.innerHTML += `<p> You've managed to run away, but definitely not unharmed! Each member of your party loses 8 health points!`

    //                     for (let i = 0; i < partyMembers.length; i++) {
    //                         partyMembers[i].health -= 8
    //                     }
    //                 }


    //             } else {
    //                 randomEventInside.innerHTML = `
    // <button id="eventExitButton">X</button>
    // <div id="eventText">
    //        <h2> Watch ! ...out... Oh no, seems like you got caught up in a bad sandstorm! No way to get back or get through, so you'll have to wait it out. Each member of your party loses 5 health points and five sacks are taken away from your water supplies.
    //             </div>
    // `
    //                 items.water -= 5

    //                 for (let i = 0; i < partyMembers.length; i++) {
    //                     partyMembers[i].health -= 5
    //                 }

    //                 document.getElementById("eventExitButton").addEventListener("click", function() {
    //                     document.getElementById("main").classList.remove("hiddenVisibility")
    //                     document.getElementById("anEventHappened").classList.add("hiddenVisibility")
    //                 })
    //             }
    //         }
    //     } else {
    //         if (0.5 <= fiftyPercent) {
    //             //fight
    //         }
    //     }
    // }


}



function useMedPack() {
    console.log("use medpack has been called")

    items.firstAid -= 1
    for (let i = 0; i < partyMembers.length; i++) {
        partyMembers[i].health += 10
    }
    reloadInfo()

}

function randomGoodEvent(place) {
    console.log("Ok so, I've been called - the randomgood event function")

    //     let random = Math.random()

    //     if (place.resources / 10 <= random) {
    //         let event = Math.random() // get a random number from 0 to 1

    //         let oneOfTwoEvents = Math.random()

    //         let randomEvent = document.getElementById("anEventHappened")

    //         let randomEventInside = document.createElement('div')
    //         randomEventInside.setAttribute("id", "randomEventInside")

    //         if (event <= 0.4) {
    //             if (0.5 <= fiftyPercent) {


    //                 randomEventInside.innerHTML = `
    //     <button id="eventExitButton">X</button>
    //     <div id="eventText">

    //            Hey! What is that burried in the sand...? I think it's... yeah, it's 20 credits! That is definitely your lucky day!

    //                 </div>
    //     `

    //                 items.credits += 20

    //                 document.getElementById("main").classList.add("hiddenVisibility")

    //                 randomEvent.appendChild(randomEventInside)

    //                 document.getElementById("eventExitButton").addEventListener("click", function() {
    //                     document.getElementById("main").classList.remove("hiddenVisibility")
    //                     document.getElementById("anEventHappened").classList.add("hiddenVisibility")
    //                 })
    //             }
    //         } else if (event <= 0.8) {
    //             if (0.5 <= fiftyPercent) {

    //                 if (0.5 <= oneOfTwoEvents) {
    //                     randomEventInside.innerHTML = `
    //     <button id="eventExitButton">X</button>
    //     <div id="eventText">


    //            Look at this! I think someone dropped a useful part, why don't you take it and see if it comes in handy?

    //                 </div>
    //     `
    //                     items.blaster += 1

    //                     document.getElementById("main").classList.add("hiddenVisibility")

    //                     randomEvent.appendChild(randomEventInside)

    //                     document.getElementById("eventExitButton").addEventListener("click", function() {
    //                         document.getElementById("main").classList.remove("hiddenVisibility")
    //                         document.getElementById("anEventHappened").classList.add("hiddenVisibility")
    //                     })

    //                 }


    //             } else {
    //                 randomEventInside.innerHTML = `
    //     <button id="eventExitButton">X</button>
    //     <div id="eventText">
    //            It looks like someone left this campsite really quickly! Let's check if they left something useful. Hey! It's a 50 sacks worth gallon of water, lucky you!
    //                 </div>
    //     `
    //                 items.water += 50

    //             }

    //             document.getElementById("eventExitButton").addEventListener("click", function() {
    //                 document.getElementById("main").classList.remove("hiddenVisibility")
    //                 document.getElementById("anEventHappened").classList.add("hiddenVisibility")
    //             })
    //         }
    //     } else {
    //         if (0.5 <= fiftyPercent) {
    //             if (items.parts >= 1) {
    //                 randomEventInside.innerHTML = `
    //     <button id="eventExitButton">X</button>
    //     <div id="eventText">
    //            This looks like a blaster? Yeah, seems like someone dropped it, would you like to use one of your parts to fix it?
    //                 </div>
    //                 <button id="eventYesButton">YES</button>
    //                 <button id="eventNoButton">NO</button>
    //     `


    //             }

    //             document.getElementById("eventExitButton").addEventListener("click", function() {
    //                 document.getElementById("main").classList.remove("hiddenVisibility")
    //                 document.getElementById("anEventHappened").classList.add("hiddenVisibility")
    //             })

    //             document.getElementById("eventNoButton").addEventListener("click", function() {
    //                 document.getElementById("main").classList.remove("hiddenVisibility")
    //                 document.getElementById("anEventHappened").classList.add("hiddenVisibility")
    //             })

    //             document.getElementById("eventYesButton").addEventListener("click", function() {
    //                 items.parts -= 1
    //                 items.blaster += 1
    //                 document.getElementById("main").classList.remove("hiddenVisibility")
    //                 document.getElementById("anEventHappened").classList.add("hiddenVisibility")
    //             })

    //         }

    //     }
    //     document.getElementById("randomEventInside").style.backgroundColor = "rgba(0,128,0.4)"

}
