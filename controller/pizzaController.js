const fs = require('fs');
const errorHandler = require('../util/errorHandler');
const {calculatePrice, getData} = require('../util/utils')

 class PizzaController {
    /**
     * This will get the pizza and toppings list
     * with prices
     * @param {*} req
     * @param {*} res
     * @memberof PizzaController
    */
    async getPizzaDetails(req, res){
        try{ 
            
            const response = await getData('pizzaInfo');
            
            res.send(response)


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
    async getSummary(req, res){
        try {
            const prices = await  getData('prices');
            
            const total = calculatePrice(req.body, prices);
            
            prices.total = total
            
            res.send(prices)
        
        } catch (err) {
            const error =errorHandler(err);
            res.send(error)
        }
    }

    async getOrders(req,res){
        try {
            const orderJson = await getData('orders');

            res.send(orderJson)
            
        } catch (err) {
            const error =errorHandler(err);
            res.send(error)
        }
        
    }

    async setOrder(req, res){

        const details = req.body;
        const prices = await getData('prices');
        const orderJson = await getData('orders');
    
        const total = calculatePrice(details.order, prices);
        
        details.id=Math.random().toString(36).slice(-5);

        details.total=total
        if(!orderJson.orders){
            orderJson.orders=[];
        }
        orderJson.orders.push(details)

        const jsonString= JSON.stringify(orderJson);

        fs.writeFile('./data/orders.json', jsonString, err => {
            if (err) {
                const error = errorHandler(err);
                res.send(error)
            } else {
                res.send({status: 200, message: 'Success!'})
            }

       })
    }
}

module.exports = new PizzaController
