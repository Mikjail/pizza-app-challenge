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

const getData = (file) =>{
    return new Promise((resolve, reject) =>{
        try {
            fs.readFile(`./data/${file}.json`, 'utf8', (err, response) => {
            
                if (err) {
                    const error = errorHandler(err);
                    resolve(error)
                    
                }else{
                    const data = JSON.parse(response)
            
                    const newData = {...data };
                    
                    resolve(newData);
                }
            
            
            });
        } catch (error) {
            const err = errorHandler(error)
            resolve(err);
        }
    });
}

const createData = (file, jsonString)=>{
    return new Promise((resolve, reject) =>{
        fs.writeFile(`./data/${file}.json`, jsonString, err => {
            if (err) {
                const error = errorHandler(err);
                resolve(error);
            } else {
               resolve({status: 200, message: 'Success!'});
            }
        });
    });
}

const editData = (item, jsonList, property) => {
    jsonList.forEach(element=>{
        if(element.id == item.id){
            element[property] = item[property];
        }
    })
    return jsonList
}

module.exports ={
    calculatePrice,
    getData,
    createData,
    editData
} 