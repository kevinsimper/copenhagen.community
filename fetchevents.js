const { meetups } = require("./pages/meetups");
const got = require("got");
const icalparser = require("ical.js");
let responses = [];

(async () => {
  const icals = meetups.map(m => `https://www.meetup.com/${m[2]}/events/ical/`);
  try {
    for (const ical of icals) {
      const response = await got(ical);
      // console.log(response.body);
      responses.push([ical, icalparser.parse(response.body)]);
    }
    console.log(JSON.stringify(responses));
  } catch (error) {
    console.log(error);
    //=> 'Internal server error ...'
  }
})();
