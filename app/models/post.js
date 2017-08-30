// Called by Node (/server.js) 
// This is our api model that connects us to mongoose (see /db.js)
var db = require('../db')
var Post = db.model('Post', {
  part_name: { type: String, required: true},       
  cost_per_unit: { type: String, required: true },    
  part_description: { type: String, required: true },
  vendor_name: { type: String, required: true },
  vendor_address: { type: String, required: true },
  vendor_phone: { type: String, required: true }    
});
module.exports = Post

