const calculatePrice = (items, prices) => {
    let total=0;
    items.forEach(item => {
        total += prices.size[item.size];
        item.toppings.forEach(price =>{
            total += prices.toppings[price]
        })
    });
    return total.toFixed(2);
}

module.exports = calculatePrice