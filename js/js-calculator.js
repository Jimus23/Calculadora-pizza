var totalFlour = document.getElementById('totalFlour');
var totalWater = document.getElementById('totalWater');
var totalYeast = document.getElementById('totalYeast');
var totalSalt = document.getElementById('totalSalt');

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
    var pizzas = document.getElementById('number-of-pizzas').value;
    var weight = document.getElementById('weight').value;
    var hydration = document.getElementById('hydration').value;
    var saltPercentage = document.getElementById('salt').value;
    var poolish = document.getElementById('poolish').value;
    var total = pizzas*weight;
    var flour = Math.round(total/(1+(hydration/100)+(saltPercentage/100)));
    var water = Math.round(flour*(hydration/100));
    var salt = (flour*(saltPercentage/100));
    var yeast = flour*.002;
    // alert('Flour: '+flour+'\r'+water+'\r'+salt.toFixed(2));
    totalFlour.textContent = flour;
    totalWater.textContent = water;
    totalYeast.textContent = yeast.toFixed(2);
    totalSalt.textContent = salt.toFixed(2);
    // alert(totalFlour.textContent);
}

