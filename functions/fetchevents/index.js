const { fetchEvents } = require('./fetchevents.js');
const { upload } = require('./upload.js');
const { writeFileSync, unlink } = require('fs');

async function main(req, res) {
  const events = await fetchEvents();
  const file = '/tmp/' + Math.random();
  writeFileSync(file, events);
  await upload(file);
  unlink(file, () => {
    console.log('Done');
    res.send('Done');
  });
}

exports.index = main;
