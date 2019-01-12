const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
const bucket = storage.bucket('cphcomevents');

exports.upload = function(file) {
  return bucket.upload(file, {
    destination: 'events.json',
  });
};
