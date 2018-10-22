var navBar = document.createElement('div');
navBar.className = "row pb-5";
navBar.id = "navbar";
document.body.appendChild(navBar);

var logoSpace = document.createElement('div');
logoSpace.className = "col-4 pb-5"
navBar.appendChild(logoSpace);

var logo = document.createElement('div');
logo.innerHTML = "<img src='../img/logo.png' width='100px' height='auto'>";
logo.className = "logo px-3";
logoSpace.appendChild(logo);

var title = document.createElement('div');
title.className = "col-6 pt-3"
title.id = "title";
title.innerText = "Botanical Corner"
navBar.appendChild(title);

var shoppingCart = document.createElement('div');
shoppingCart.className = "col-1 pt-5 pb-5";
shoppingCart.innerHTML = "<p class='d-inline checkout'>Checkout</p><i class='d-inline fas fa-cart-arrow-down'></i>";
navBar.appendChild(shoppingCart);


function Plant(someArray, name, image, size, lightLevel, petFriendly, airCleaner) {
    this.name = name;
    this.image = image;
    this.size = size;
    this.lightLevel = lightLevel;
    this.petFriendly = petFriendly;
    this.airCleaner = airCleaner;
    someArray.push(this);
    this.populateHTML = function () {
        var name = document.createElement('h6');
        var container = document.createElement('div');
        name.innerText = this.name;
        name.className = "text-center p-2"
        name.style.fontFamily = "'Josefin Slab', serif";
        name.style.fontSize = "20px";
        container.className = "container-fluid d-inline-block col-xs-12 col-sm-6 col-md-4 col-xl-3 animated fadeIn text-center";
        container.id = "container";
        document.body.appendChild(container);
        var item = document.createElement('div');
        item.style.backgroundImage = "url(" + this.image + ")";
        item.style.backgroundRepeat = "no-repeat";
        item.style.backgroundSize = "cover";
        item.style.boxShadow = "5px 5px 10px lightgrey";
        item.id = "item";
        item.className = "mx-auto";
        var moreInfoBtn = document.createElement('div');
        moreInfoBtn.innerHTML = '<button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal">Find Out More</button>';
        var modalHeader = document.getElementById('modal-header');
        modalHeader.innerText = this.name;
        container.appendChild(item);
        container.appendChild(name);
        container.appendChild(moreInfoBtn);
    }
}


var myArray = [];

//Plant(myArray,name,image,size,lightLevel,petFriendly,airCleaner){


var birdOfParadise = new Plant(myArray, 'Bird Of Paradise', '../img/birdOfParadise.jpg', 'X-Large', 'bright indirect to bright light', 'can cause mouth irritation and digestive reaction', true);

var birdsNestFern = new Plant(myArray, 'Birds Nest Fern', '../img/birdsNestFern.jpg', '', '', '');

var crotonPetra = new Plant(myArray, 'Croton Petra', '../img/CrotonPetra.jpg', '', '', '');

var cutlassAglaonema = new Plant(myArray, 'Cutlass Aglaonema', '../img/cutlassAglaonema.jpg', '', '', '');

var dracaenaJanetCraig = new Plant(myArray, 'Dracaena Janet Craig', '../img/dracaenaJanetCraig.jpg', '', '', '');

var dracaenaLemonLime = new Plant(myArray, 'Dracaena Lemon Lime', '../img/dracaenaLemonLime.jpg', '', '', '');

var dracaenaMarginataBush = new Plant(myArray, 'Dracaena Marginata Bush', '../img/dracaenaMarginataBush.jpg', '', '', '');

var ficusDanielle = new Plant(myArray, 'Ficus Danielle', '../img/ficusDanielle.jpg', '', '', '');

var fiddleLeafFig = new Plant(myArray, 'Fiddle Leaf Fig', '../img/fiddleLeafFig.jpg', '', '', '');

var floorPalm = new Plant(myArray, 'Floor Palm', '../img/floorPalm.jpg', '', '', '');

var freddiePlant = new Plant(myArray, 'Freddie Plant', '../img/freddiePlant.jpg', '', '', '');

var hedgehogAloe = new Plant(myArray, 'Hedgehog Aloe', '../img/hedgehogAloe.jpg', '', '', '');


var kimberlyQueenFern = new Plant(myArray, 'Kimberly Queen Fern', '../img/kimberlyQueenFern.jpg', '', '', '');


var majestyPalm = new Plant(myArray, 'Majesty Palm', '../img/majestyPalm.jpg', '', '', '');


var orbifoliaPlant = new Plant(myArray, 'Orbifolia Plant', '../img/orbifoliaPlant.jpg', '', '', '');


var parlorPalm = new Plant(myArray, 'Parlor Palm', '../img/parlorPalm.jpg', '', '', '');


var pilea = new Plant(myArray, 'Pilea', '../img/pilea.jpg', '', '', '');


var PottedBromeliad = new Plant(myArray, 'Potted Bromeliad', '../img/PottedBromeliad.jpg', '', '', '');


var redPrayerPlant = new Plant(myArray, 'Red Prayer Plant', '../img/redPrayerPlant.jpg', '', '', '');


var sansevieria = new Plant(myArray, 'Sansevieria', '../img/sansevieria.jpg', '', '', '');

var silverBay = new Plant(myArray, 'Silver Bay', '../img/silverBay.jpg', '', '', '');

var zzPlant = new Plant(myArray, 'ZZ Plant', '../img/zzPlant.jpg', '', '', '');



for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i].image);
    myArray[i].populateHTML();
};
