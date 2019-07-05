const fs = require('fs');
const errorHandler = require('../util/errorHandler');
const calculatePrice = require('../util/utils')

 class PizzaController {
    /**
     * This will get the pizza and toppings list
     * with prices
     * @param {*} req
     * @param {*} res
     * @memberof PizzaController
    */
    getPizzaDetails(req, res){
        try{ 

        fs.readFile('./data/pizzaInfo.json', 'utf8', (err, response) => {
            if (err) {
                const error = errorHandler(err);
                res.send(error)
            }

            res.send(response)
        })

        }catch(err){
            const error = errorHandler(err);
            res.send(error)
        }
    }

    /**
     * This will return the prices saved in the file.
     *
     * @param {*} req
     * @param {*} res
     * @memberof PizzaController
     */
    getSummary(req, res){
        try {
            fs.readFile('./data/prices.json', 'utf8', (err, response) => {
                if (err) {
                    const error = errorHandler(err);
                    res.send(error)
                }
                
                const prices = JSON.parse(response)
               
                const responseBody = {...prices };
                
                const total = calculatePrice(req.body, responseBody);
                
                responseBody.total = total
               
                res.send(responseBody)
            })
        } catch (err) {
            const error =errorHandler(err);
            res.sed(error)
        }
    }
   
}

module.exports = new PizzaController
