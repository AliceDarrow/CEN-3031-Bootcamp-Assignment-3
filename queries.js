var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    lisintgjson = require('./listings.json'),
    Listing = require('./ListingSchema.js'),
    config = require('./config');

    mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  Listing.find({ code: 'LBW' }, function(err, listing) {
  if (err) throw err;
  console.log("Found Library West: " + listing);
});
};
var removeCable = function() {

  Listing.findOneAndRemove({ code: 'CABL' }, function(err, listing) {
    if (err) throw err;
    console.log("Deleted this Listing: " + listing);
  });
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
};
var updatePhelpsLab = function() {
  Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { address: 'ABC Sesame Street' }, function(err, listing) {
  if (err) throw err;
  console.log("Updated" + listing);
});
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
};
var retrieveAllListings = function() {
  Listing.find({}, function(err, listing) {
  if (err) throw err;
  console.log(listing);
  mongoose.connection.close();
});
  /*
    Retrieve all listings in the database, and log them to the console.
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
