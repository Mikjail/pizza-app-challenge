const fs = require('fs');
const moment = require('moment');
const errorHandler = require('../util/errorHandler');
const {calculatePrice, getData} = require('../util/utils')

ORDER_STATUS={
    PENDING:'pending',
    COMPLETED: 'completed',
    IN_TRANSIT: 'in-transit'
}

 class OrderController {
   
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

        details.status='pending';

        details.createdAt= moment();

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

module.exports = new OrderController
