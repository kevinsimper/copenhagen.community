import { meetups } from "./meetups";
import Head from "next/head";
import events from "../events.json";

const images = [
  "https://images.unsplash.com/photo-1526056316312-ed419ce34a05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=235a8dea6dc46624996665b953e152f6&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1491596841158-6079a111f87d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d88273ee244036c8c4813ff416ca7a5&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1523352054314-d33af9fdf6ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6a250c3192845b9c40adc7f4ac8bfd64&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1519143587129-d7ae992bc44c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41cb269cddd7dbd66a0b85266f65a5c2&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1515838574152-6d83f6064351?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0afc73577781479d65292c6eef5190a0&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1467627003363-f047333cbf44?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e32cc6ee7556cbea77946138ae543ee2&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1524555197196-a7ef01c3c9d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a0a76e469be273a15f17ba96c225909&auto=format&fit=crop&w=800&q=60"
];

const colors = ["#f2849e", "#7ecaf6", "#7bd0c1", "#c75b9b", "#ae85ca", "#8bc34a", "#ff5722"];

export default () => {
  let all = events
    .map(d => {
      // console.log(d[0]);
      return d[1][2].slice(1).map(event => {
        // console.log(event);
        const start = event[1][1][3];
        const end = event[1][2][3];
        const title = event[1][4][3];
        const url = event[1][10][3];
        return { start, end, title, url };
      });
    })
    .reduce((acc, val) => acc.concat(val), [])
    .sort((a, b) => {
      return new Date(a.start).getTime() - new Date(b.start).getTime();
    });
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style>{`
        html,
        body {
          color: #585858;
          margin: 0;
          font-family: sans-serif;
          line-height: 1.75;
        }
        *, *:before, *:after {
          box-sizing: border-box;
        }
        table {
            border-collapse: collapse;
        }
        `}</style>
      <style jsx>{`
        .bg {
          height: 80vh;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.45),
              rgba(0, 0, 0, 0.65)
            ),
            url("https://images.unsplash.com/photo-1484568707073-c738a6fe8aaf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c210fda44e2f7bee774b9be338ea52a8&auto=format&fit=crop&w=2873&q=80");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: scroll;
          line-height: 80vh;
          text-align: center;
          color: white;
          font-size: 0.8rem;
        }
        @media (min-width: 500px) {
          .bg {
            font-size: 1.2rem;
          }
        }
        @media (min-width: 900px) {
          .bg {
            font-size: 2rem;
          }
        }
        h1 {
          margin: 0;
        }
        .content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }
        .meetups {
          display: flex;
          flex-wrap: wrap;
        }
        .meetup {
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          font-size: 1.5rem;
          color: white;
          width: 100%;
          margin: 2rem 1.5rem 0;
          transition: all 0.5s ease;
          border-radius: 5px;
        }
        .meetup:hover {
          transform: scale(1.1);
        }
        @media (min-width: 600px) {
          .meetup {
            width: calc(50% - 3rem);
            margin: 2rem 1.5rem 0;
          }
        }
        @media (min-width: 880px) {
          .meetup {
            width: calc(33.33333% - 3rem);
            margin: 2rem 1.5rem 0;
          }
        }
        .square {
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          position: relative;
        }
        .text {
          position: absolute;
          top: 45%;
          text-align: center;
          width: 100%;
        }
        .table {
          width: 100%;
          max-width: 100%;
          margin-bottom: 1rem;
        }
        .table td,
        .table th {
          padding: 0.75rem;
          vertical-align: top;
          border-top: 1px solid #dee2e6;
        }

        .table thead th {
          vertical-align: bottom;
          border-bottom: 2px solid #dee2e6;
        }

        .table tbody + tbody {
          border-top: 2px solid #dee2e6;
        }
        .table tbody tr:hover {
          background-color: rgba(0, 0, 0, 0.075);
        }
      `}</style>
      <div className="bg">
        <h1>Copenhagen.community</h1>
      </div>
      <div className="content">
        <div className="meetups">
          {meetups.map((meetup, key) => {
            return (
              <a
                href={meetup[1]}
                key={key}
                className="meetup"
                style={{
                  backgroundImage: `linear-gradient(
                    ${colors[key]}ad,
                    ${colors[key]}d9
                  ),
                  url(${images[key]});`
                }}
              >
                <div className="square">
                  <div className="text">{meetup[0]}</div>
                </div>
              </a>
            );
          })}
        </div>
        <div className="upcoming">
          <h1>Upcoming meetups</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Start</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              {all.map(({ start, title, url }) => (
                <tr>
                  <td>{start}</td>
                  <td>
                    <a href={url}>{title}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="whatis">
          <h2>What is copenhagen.community?</h2>
          <p>
            It is a group of danish meetups that share the same mission of
            making Copenhagen a great community!
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .upcoming {
            margin: 40px auto 0;
          }
          .upcoming h1 {
            text-align: center;
          }
          .whatis {
            margin: 40px auto 0;
            max-width: 500px;
          }
        `}
      </style>
    </div>
  );
};
