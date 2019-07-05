const PizzaController = require('../controller/pizzaController');

module.exports = app => {
    app.get('/api/pizzaDetails', PizzaController.getPizzaDetails );

    app.post('/api/pizzaSummary', PizzaController.getSummary);

    // app.post('/api/placeOrder', PizzaController.setOrder);   
}
