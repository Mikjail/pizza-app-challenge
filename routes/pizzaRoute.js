const PizzaController = require('../controller/pizzaController');
const OrderController = require('../controller/orderController');

module.exports = app => {
    app.get('/api/pizzaDetails', PizzaController.getPizzaDetails );

    app.post('/api/pizzaSummary', PizzaController.getSummary);

    app.post('/api/submitOrder', OrderController.setOrder);   

    app.get('/api/getOrders', OrderController.getOrders); 
}
