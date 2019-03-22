const controllers = require("../controllers/items.js");

module.exports = app => {
  app
    .get('/api/items', controllers.getAllItems)
    .get('/api/items/:id', controllers.getItem)
    .post('/api/items', controllers.createItem)
    .delete('/api/items/:id', controllers.deleteItem)
    .put('/api/items/:id', controllers.updateItem)

    .get('/api/item/like/:id', controllers.addLike)
    .post('/api/items/:id', controllers.addThing)
    .put('/api/items/:id/thing/:thingid', controllers.updateThing)
    .delete('/api/items/:id/thing/:thingid', controllers.deleteThing)
}