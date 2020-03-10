import fetch from "isomorphic-unfetch";

type Event = {
  name: string;
  link: string;
  time: number;
};

// status "upcoming" or "past"
export async function fetchEvents(meetup, status = "upcoming") {
  let events: Event[] = [];
  const headerPagination = [
    encodeURI(`https://api.meetup.com/${meetup}/events?status=${status}`)
  ];
  async function fetchPage(url) {
    const linkres = await fetch(url);
    const json = await linkres.json();
    events = events.concat(json);
    // we have fetched all events
    if (
      parseInt(linkres.headers.get("X-Total-Count") || "0") <=
      events.flat().length + 1
    ) {
      return true;
    }

    let linkHeader = linkres.headers.get("link");
    if (linkHeader) {
      const splitted = linkHeader.split("<")[1].split(">")[0];
      headerPagination.push(splitted);
    }
    if (headerPagination.length > 0) {
      await fetchPage(headerPagination.pop());
    }
  }
  await fetchPage(headerPagination.pop());
  return events;
}
