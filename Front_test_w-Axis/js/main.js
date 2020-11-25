const dropdownPoints = 50;
const productQuantity = 4;
let currentMobileProduct = 1;
let active = new Array(productQuantity);

window.onload = function() {
    for (let productNumber = 1; productNumber <= productQuantity; productNumber++) {
        for (let i = 1; i <= dropdownPoints; i++) {
            var ul = document.getElementById('dropdown' + productNumber);
            var li = document.createElement('li');
            li.className = 'option';
            li.innerHTML = '<a class="quantity" onclick="currentChoice(' + i + ',' + productNumber + ')">' + i + '</a>';
            ul.appendChild(li);
        }
    }
    for (let qa = 0; qa < productQuantity; qa++) {
        active[qa] = true;
    }
}

function showOptions(n) {
    const dropdown = document.getElementById('dropdown' + n);
    if (active[n - 1]) {
        dropdown.style.display = 'block';
        active[n - 1] = false;
    } else {
        dropdown.style.display = 'none';
        active[n - 1] = true;
    }
}

function currentChoice(yourChoice, n) {
    var choice = document.getElementById('choice' + n);
    choice.innerHTML = yourChoice;
}

function changeProduct(idChosenProduct) {
    const preChosenProduct = document.getElementById('productCard' + currentMobileProduct);
    preChosenProduct.style.display = 'none';
    const chosenProduct = document.getElementById('productCard' + idChosenProduct);
    chosenProduct.style.display = 'block';

    const dotNotChoisen = document.getElementById('dotNotChoisen' + idChosenProduct);
    dotNotChoisen.style.display = 'none';
    const dotChoisen = document.getElementById('dotChoisen' + idChosenProduct);
    dotChoisen.style.display = 'inline-block';

    const preDotChoisen = document.getElementById('dotChoisen' + currentMobileProduct);
    preDotChoisen.style.display = 'none';
    const preDotNotChoisen = document.getElementById('dotNotChoisen' + currentMobileProduct);
    preDotNotChoisen.style.display = 'inline-block';

    currentMobileProduct = idChosenProduct;
}