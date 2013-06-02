var publicStripeAPIKey = '';
var publicStripeAPIKeyTesting = '';

Meteor.subscribe("tokens");

Stripe.setPublishableKey(publicStripeAPIKey);

  function stripeResponseHandler(status, response) {
    console.log(status);
    console.log(response);
    if (status == 200){
    var name = document.getElementsByClassName("buyer-name").item(0).value;
    var address_1 = document.getElementsByClassName("address-1").item(0).value;
    var address_2 = document.getElementsByClassName("address-2").item(0).value;
    var city = document.getElementsByClassName("city").item(0).value;
    var state = document.getElementsByClassName("state").item(0).value;
    var zip = document.getElementsByClassName("zip").item(0).value;
    Meteor.call("savetoken", response.id, name, address_1, address_2, city, state, zip);
    }
    else {
    alert("Error. Please check your credit card information");
    }
  }

Template.bulletin.entries = function () {
  return Tokens.find({});
};

Template.bulletin.total = function () {
  return Tokens.find({}).count() * 600;
};

Template.paymentform.events({
  'click .submit-button': function (e) {
    console.log("hit the button");
    var cardnumber = document.getElementsByClassName("card-number").item(0).value;
    var cardcvc = document.getElementsByClassName("card-cvc").item(0).value;
    var cardexpirymonth = document.getElementsByClassName("card-expiry-month").item(0).value;
    var cardexpiryyear = document.getElementsByClassName("card-expiry-year").item(0).value;
  Stripe.createToken({
    number: cardnumber,
    cvc: cardcvc,
    exp_month: cardexpirymonth,
    exp_year: cardexpiryyear
  }, stripeResponseHandler);
  }
});


