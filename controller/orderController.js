const fs = require('fs');
const moment = require('moment');
const errorHandler = require('../util/errorHandler');
const {calculatePrice, getData, editData, createData} = require('../util/utils')

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
        try {
            const details = req.body;
            const prices = await getData('prices');
            const orderJson = await getData('orders');
        
            const total = calculatePrice(details.order, prices);
            
            details.id=Math.random().toString(36).slice(-5).toUpperCase();
    
            details.total=total
    
            details.status='pending';
    
            details.createdAt= moment();
    
            if(!orderJson.orders){
                orderJson.orders=[];
            }
            orderJson.orders.push(details)
    
            const jsonString= JSON.stringify(orderJson);
    
            const response = await createData('orders',jsonString );
    
            res.send(response);
        } catch (err) {
            const error =errorHandler(err);
            res.send(error)
        }
       
    }

   async setStatus(req, res) {
        try {
            const order = req.body;
        
            const orderJson = await getData('orders');
            
            orderJson.orders = editData(order, orderJson.orders, 'status');
    
            const jsonString = JSON.stringify(orderJson);
    
            const response = await createData('orders', jsonString)
            if(response.status == '200'){
                res.send(orderJson);
            }
            else{
                const orderJson = await getData('orders');

                res.send(orderJson)
            }
        } catch (err) {
            const error =errorHandler(err);
            res.send(error)
        }
       
    }
}

module.exports = new OrderController
