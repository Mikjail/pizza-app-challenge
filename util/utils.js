const errorHandler = require('./errorHandler');
const fs = require('fs');

const calculatePrice = (items, prices) => {
    let total=0;
    items.forEach(item => {
        total += prices.size[item.size];
        if(item.toppings){
            item.toppings.forEach(price =>{
                total += prices.toppings[price]
            })
        }
    });
    return total.toFixed(2);
}

const getData = async (file) =>{
    return new Promise((resolve, reject) =>{
        fs.readFile(`./data/${file}.json`, 'utf8', (err, response) => {
           try {
                if (err) {
                    const error = errorHandler(err);
                    resolve(error)
                    
                }else{
                    const data = JSON.parse(response)
            
                    const newData = {...data };
                    
                    resolve(newData);
                }
           } catch (error) {
                const err = errorHandler(error)
                resolve(err);
           }
           
        });
    });
}

module.exports ={
    calculatePrice,
    getData,
} 