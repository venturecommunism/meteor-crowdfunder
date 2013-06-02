var stripeAPIKey = '';
var stripeAPIKeyTesting = '';
var Stripe = StripeAPI(stripeAPIKey);

Meteor.methods({
  savetoken: function (token_id, name, address_1, address_2, city, state, zip) {
    var timestamp = (new Date()).getTime();
//console.log("token id is " + token_id);
Tokens.insert({"token_id": token_id, "name": name, "address_1": address_1, "address_2": address_2, "city": city, "zip": zip, "timest$
  }
});

Meteor.publish("tokens", function () {
  return Tokens.find({}, {fields: {name: 0, address_1: 0, address_2: 0, city: 0, zip: 0, token_id: 0}});
});



