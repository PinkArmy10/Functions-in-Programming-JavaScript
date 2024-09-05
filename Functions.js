let totalCost = 0;

const updateTotals = (cost) => {
    // Get a handle for the furniture paragraph
    let totalsArea = document.querySelector(".totalCost");
    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;
    console.log(`Totals ${cost}`)
}

function addPaintAndSupplies(totalCost, callback) {
    let cost = prompt("Enter the cost for the paint and supplies :");
    cost = parseFloat(cost);
    if (cost > 100)
        cost *= 1.1;

    // Get a handle for the paint paragraph
    let paintArea = document.querySelector(".paint");
    paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;
    console.log(`Paint ${cost}`)
    callback(totalCost + cost);
    return (totalCost + cost);

}


function furniture(totalCost, callback) {
    let cost = prompt("Enter the cost for the Furniture :");
    cost = parseFloat(cost);
    if (cost < 500)
        cost = (cost - (cost * .1));

    // Get a handle for the funiture paragraph
    let furniture = document.querySelector(".furniture");
    furniture.innerHTML = `Furniture $ ${cost.toFixed(2)}`;
    console.log(`Furniture ${cost}`)
    callback(totalCost + cost);
    return (totalCost + cost);
}


function floorCoverings(totalCost, callback) {
    let cost = prompt("Enter the cost for the Floor Coverings :");
    cost = parseFloat(cost);
    if (cost < 500)
        cost = (cost - (cost * .15));

    // Get a handle for the floor coverings paragraph
    let floorCoverings = document.querySelector(".floorCoverings");
    floorCoverings.innerHTML = `Floor coverings $ ${cost.toFixed(2)}`;
    console.log(`Floor ${cost}`)
    callback(totalCost + cost);
    return (totalCost + cost);
}


totalCost = addPaintAndSupplies(totalCost, updateTotals);
console.log(`${totalCost} out of paint`)

totalCost = furniture(totalCost, updateTotals);
console.log(`${totalCost} out of Furniture`)

totalCost = floorCoverings(totalCost, updateTotals);
console.log(`${totalCost} out of Floor`)