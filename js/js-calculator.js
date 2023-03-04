var totalFlour = document.getElementById('totalFlour');
var totalWater = document.getElementById('totalWater');
var totalYeast = document.getElementById('totalYeast');
var totalSalt = document.getElementById('totalSalt');

var firstMixFlour = document.getElementById('firstMixFlour');
var secondMixFlour = document.getElementById('secondMixFlour');
var firstMixWater = document.getElementById('firstMixWater');
var secondMixWater = document.getElementById('secondMixWater');
var poolishMixYeast = document.getElementById('poolishMixYeast');
var poolishMixSalt = document.getElementById('poolishMixSalt');

function showPoolish(){
    var checkPoolish = document.getElementById('checkPoolish');
    var poolishContainer = document.getElementById('poolish');
    if(checkPoolish.checked == true){
        poolishContainer.style.visibility="visible";
    } else{
        poolishContainer.style.visibility="hidden";
    }
}

function pizza(){

    if(directMix.style.display=="flex"){
        directMix.style.display="none";
    }

    if(poolishMix.style.display="flex"){
        poolishMix.style.display="none";
    }

    var pizzas = document.getElementById('number-of-pizzas').value;
    var weight = document.getElementById('weight').value;
    var hydration = document.getElementById('hydration').value;
    var saltPercentage = document.getElementById('salt').value;
    var poolish = document.getElementById('poolish').value;
    // var poolishStatus = document.getElementById('checkPoolish').value;

    var total = pizzas*weight;
    var flour = Math.round(total/(1+(hydration/100)+(saltPercentage/100)));
    var water = Math.round(flour*(hydration/100));
    var salt = (flour*(saltPercentage/100));
    var yeast = flour*.002;
    
    var poolishFlourOne = Math.round(flour*(poolish/100));
    var poolishFlourTwo = Math.round(flour-poolishFlourOne);
    var poolishWaterOne = Math.round(poolishFlourOne);
    var poolishWaterTwo = Math.round(water-poolishWaterOne);

    if(checkPoolish.checked == true){
        poolishMix.style.display="flex";
        firstMixFlour.textContent = poolishFlourOne;
        secondMixFlour.textContent = poolishFlourTwo;
        firstMixWater.textContent = poolishWaterOne;
        secondMixWater.textContent = poolishWaterTwo;
        poolishMixYeast.textContent = yeast.toFixed(2);
        poolishMixSalt.textContent = salt.toFixed(2);
    } else{
        directMix.style.display="flex";
        totalFlour.textContent = flour;
        totalWater.textContent = water;
        totalYeast.textContent = yeast.toFixed(2);
        totalSalt.textContent = salt.toFixed(2);
    }
    
    // alert(totalFlour.textContent);
}

