import React from 'react';
import Table from '../Table';

class FetchEvents extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      eventsData: [],
    };
  }
  componentDidMount() {
    fetch('https://cphcomevents.storage.googleapis.com/events.json')
      .then(r => r.json())
      .then(data => {
        this.setState({
          eventsData: data,
          loading: false,
        });
      });
  }
  parseIcal(data) {
    return data
      .map(d => {
        return d[1][2].map(event => {
          const start = event[1][1][3];
          const end = event[1][2][3];
          const title = event[1][4][3];
          const url = event[1].find(i => i[0] === 'url')[3];
          const group = d[0];
          return { start, end, title, url, group };
        });
      })
      .reduce((acc, val) => acc.concat(val), []);
  }
  sortByTime(data) {
    return data.sort((a, b) => {
      return new Date(a.start).getTime() - new Date(b.start).getTime();
    });
  }
  render() {
    if (this.state.loading) {
      return (
        <tr>
          <td>Loading...</td>
        </tr>
      );
    }
    const { render } = this.props;
    let filtered = this.sortByTime(this.parseIcal(this.state.eventsData));
    return render(filtered);
  }
}

export default ({ events }) => {
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
          <FetchEvents
            render={filtered => {
              return filtered.map(({ start, title, group, url }, key) => (
                <tr key={key}>
                  <td>{start.split('T').join(' - ')}</td>
                  <td>{group}</td>
                  <td>
                    <a href={url}>{title}</a>
                  </td>
                </tr>
              ));
            }}
          />
        </tbody>
      </Table>
    </div>
  );
};
