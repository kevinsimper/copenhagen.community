import React from 'react'
import Table from '../Table'

export default ({events}) => {
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
            <th>Start</th>
            <th>Group</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {events.map(({ start, title, group, url }, key) => (
            <tr key={key}>
              <td>{start.split("T").join(" - ")}</td>
              <td>{group}</td>
              <td>
                <a href={url}>{title}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
