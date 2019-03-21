const Item = require('../models/item.js');
const Thing = require('../models/thing.js');

module.exports = {

  getAllItems: (req, res) => {
    Item.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getItem: (req, res) => {
    const ID = req.params.id;
    Item.findOne({_id: ID})
      .then(task => res.json(task))
      .catch(err => res.json(err));
  },
  
  deleteItem: (req, res) => {
    const ID = req.params.id;
    Item.findOneAndDelete({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createItem: (req, res) => {
    const DATA = req.body;
    Item.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateItem: (req, res) => {
    const DATA = req.body;
    Item.findOneAndUpdate({_id:req.params.id}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  addThing: (req, res) => {
    const ID = req.params.id
    const DATA = req.body;
    let newThing = new Thing.model(DATA)
    Item.findOneAndUpdate({_id: ID}, {$push: {things: newThing}}, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));    
  },

  // updateThing: (req, res) => {
  //   const ID = req.params.id;
  //   const DATA = req.body;
  //   Item.findOne({_id:req.params.id})
  //     .then(data => {
  //       for (let thing of data.things) {
  //         if (thing._id == req.params.thingid) {
  //           thing.content = DATA.content
  //         }
  //       }
  //       Item.findOneAndUpdate({_id: req.params.id}, {things: data.things}, {runValidators:true, new:true})
  //         .then(data => res.json(data))
  //         .catch(err => res.json(err));
  //     })
  //     .catch(err => res.json(err));
  // },

  updateThing: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Item.findOneAndUpdate(
      {"_id":req.params.id, "things._id": req.params.thingid},
      { $set: { "things.$.content": DATA.content } },
      {runValidators:true, new:true}
    )
      .then(data => {
        console.log(data);
        res.json(data);
      })
      .catch(err => res.json(err));
  },

  deleteThing: (req, res) => {
    Item.findOneAndUpdate({_id: req.params.id}, {$pull: {things: {_id: req.params.thingid}}})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }

  }
