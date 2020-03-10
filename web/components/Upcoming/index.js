import React, { useState, useEffect } from 'react';
import Table from '../Table';

export default () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('https://cphcomgraphql-xevahmjeya-ew.a.run.app/graphql', {
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        operationName: null,
        variables: {},
        query: `{
          upcomingEvents {
            name
            link
            time
            group
          }
        }
      `,
      }),
      method: 'POST',
    })
      .then(r => r.json())
      .then(data => {
        setEvents(data.data.upcomingEvents);
      });
  }, []);
  return (
    <div className="upcoming">
      <style jsx>
        {`
          .upcoming {
            margin: 40px auto 0;
          }
          .upcoming h1 {
            text-align: center;
          }
        `}
      </style>
      <h1>Upcoming meetups</h1>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Time</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {events.map(({ name, link, time, group }, key) => (
            <tr key={key}>
              <td>
                <a href={link}>{name}</a>
              </td>
              <td>{new Date(parseInt(time)).toLocaleString()}</td>
              <td>{group}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
