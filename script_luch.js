function calculateDefects(procentb, verb, verb2) {
    var summ = 0;
    var summ2 = 0;

    // расчет вероятности брака от поставщиков
    for (var t = 0; t < procentb.length; t++) {
        summ = summ + (verb[t] * (procentb[t]/100));
        summ2 = summ2 + (verb2[t] * (procentb[t]/100));
    }

    document.getElementById("procent1").value = summ;
    document.getElementById("procent2").value = summ2;

    // Сравнение вероятности брака. Возврат номера поставщика с наименьшей вероятностью
    if (summ < summ2) {
        return 1;

    } else {
        return 2;
    }
}

function getParam(param) {
    var itemsCount = document.getElementsByClassName('input-group').length;
    var items = [];

    for (var i = 0; i < itemsCount; i++) {
        var itemParam = document.querySelectorAll("." + param)[i].value;
        items.push(Number(itemParam));
    }

    return items;
}

document.getElementById("button").addEventListener("click", function () {
    var procentb = getParam("ProductRejectionRate");
    var verb = getParam("ProbabilityOfDefectiveProduct");
    var verb2 = getParam("ProbabilityOfDefectiveProduct2");

    var itemsCount = document.getElementsByClassName('input-group').length;

    for (var i = 0; i < itemsCount; i++) {
        document.getElementsByClassName('input-group')[i].style.border = '1px solid #000000';
    }

    document.getElementById("result").value = calculateDefects(procentb, verb, verb2);
});

document.getElementById("increment").addEventListener("click", function () {
    var original = document.getElementsByClassName("input-group")[0];
    var clone = original.cloneNode(true);
    clone.querySelector(".ProductRejectionRate").value = "";
    clone.querySelector(".ProbabilityOfDefectiveProduct").value = "";
    clone.style.border = '1px solid #ced4da';
    original.parentNode.appendChild(clone);
});
