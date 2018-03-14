(function(window) {
  'use strict';
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;

  }
  Truck.prototype.createOrder = function(order) {
    console.log('Adding order for ' + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };

  Truck.prototype.deliverOrder = function(customerID) {
    this.db.remove(customerID);
  };

  Truck.prototype.printOrders = function() {
    var customerIDArray = Object.keys(this.db.getAll());
    console.log('Truck #' + this.truckId + ' has pending orders');
    customerIDArray.forEach(function (id) {
      console.log(this.db.get(id));

    }.bind(this));
  };
  App.Truck = Truck;
  window.App = App;
})(window);
