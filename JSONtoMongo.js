'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    lisintgjson = require('./listings.json'),
    Listing = require('./ListingSchema.js'),
    config = require('./config');
/* Connect to your database */

  mongoose.connect(config.db.uri);
for(var i=0; i < lisintgjson.entries.length; i++) {
  new Listing({
    name: lisintgjson.entries[i].name,
    code: lisintgjson.entries[i].code,
    address: lisintgjson.entries[i].address,
    coordinates: lisintgjson.entries[i].coordinates

  }).save(function(err, listing){

  });
}
mongoose.connection.close()
console.log("Entries Added to Database");
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */



/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
