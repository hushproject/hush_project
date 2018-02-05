// To run it, just
// node dump.js

const SiteClient = require('datocms-client').SiteClient;
const fs = require('fs');

const client = new SiteClient('c06907247d8ed097f4b7d78f11257a');

client.items.all()
.then(response => {
  fs.writeFileSync('./backup.json', JSON.stringify(response, null, 2));
})
