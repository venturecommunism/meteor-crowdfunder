meteor-crowdfunder
==================

Meteor.js crowdfunding platform built on Stripe.js

Installation
==================

curl https://install.meteor.com | sh

apt-get install -y npm

curl https://raw.github.com/creationix/nvm/master/install.sh | sh

(close and reopen your terminal or the next command will fail)

nvm install 0.8

nvm alias default 0.8

nvm use 0.8

npm install -g meteorite



git clone https://github.com/venturecommunism/meteor-crowdfunder.git

mrt create yourapp

cd yourapp

cp ../meteor-crowdfunder/* .

mrt add force-ssl

mrt add stripe

mrt add router

mrt -port 80&

(follow the instructions for meteor or meteorite for moving from staging to a live site)
(you must do the "meteor add force-ssl" command to be PCI compliant)

It should now be running on port 3000. For now deploy to Heroku for SSL certificate. Instructions on how to proxy with Nginx coming soon. This will only be PCI compliant while running on SSL. Otherwise you may use only the test API keys and fake credit card numbers like 424242424242 but not the live API keys.

Instructions will be coming soon. Remember to remove the insecure and autopublish packages. This is installed using meteorite. You have to put your public API key on the client and secret API key on the server.
