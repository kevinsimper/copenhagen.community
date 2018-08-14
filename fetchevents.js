const { meetups } = require("./pages/meetups");
const got = require("got");
const icalparser = require("ical.js");
let responses = [];

(async () => {
  const icals = meetups.filter(m => m.meetupslug !== "").map(m => [
    m.name,
    `https://www.meetup.com/${m.meetupslug}/events/ical/`
  ]);
  try {
    for (const ical of icals) {
      const response = await got(ical[1]);
      // console.log(response.body);
      responses.push([ical[0], icalparser.parse(response.body)]);
    }
    console.log(JSON.stringify(responses));
  } catch (error) {
    console.log(error);
    //=> 'Internal server error ...'
  }
})();
