import { meetups } from "./meetups";
import Head from "next/head";
import events from "../events.json";

const images = [
  "https://images.unsplash.com/photo-1526056316312-ed419ce34a05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=235a8dea6dc46624996665b953e152f6&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1491596841158-6079a111f87d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d88273ee244036c8c4813ff416ca7a5&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1523352054314-d33af9fdf6ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6a250c3192845b9c40adc7f4ac8bfd64&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519143587129-d7ae992bc44c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41cb269cddd7dbd66a0b85266f65a5c2&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1515838574152-6d83f6064351?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0afc73577781479d65292c6eef5190a0&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1467627003363-f047333cbf44?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e32cc6ee7556cbea77946138ae543ee2&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1524555197196-a7ef01c3c9d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a0a76e469be273a15f17ba96c225909&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1515749968044-d1d417bf629c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ba0724278aad6ee5e0e68f58c3178c7&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1521819868521-19ccbf804cf0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e949869ae3f5da1a32c1152cb466af2&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1522535918752-9ce93d3f65f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c580d490993a2d269304d45a7824c3da&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1499689496495-5bdf4421b725?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ec9ff7da4a4f5e788843453112f2fcd&auto=format&fit=crop&w=500&q=60"
];

const colors = [
  "#f2849e",
  "#7ecaf6",
  "#7bd0c1",
  "#c75b9b",
  "#ae85ca",
  "#8bc34a",
  "#ff5722",
  "#ffc107",
  "#009688",
  "#3f51b5",
  "#607d8b"
];

export default () => {
  let all = events
    .map(d => {
      return d[1][2].slice(1).map(event => {
        // console.log(event);
        const start = event[1][1][3];
        const end = event[1][2][3];
        const title = event[1][4][3];
        const url = event[1][9][3];
        const group = d[0];
        return { start, end, title, url, group };
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
        <meta
          name="google-site-verification"
          content="9JC3L_rBtJ6beLFcSH0RlAN2XUL48JknUcS09uvGEWU"
        />
        <meta
          name="google-site-verification"
          content="9JC3L_rBtJ6beLFcSH0RlAN2XUL48JknUcS09uvGEWU"
        />
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
          padding: 0 10px;
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
                  url(${images[key]})`
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
                <th>Group</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              {all.map(({ start, title, group, url }, key) => (
                <tr key={key}>
                  <td>{start.split("T").join(" - ")}</td>
                  <td>{group}</td>
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
        <div className="whatis github">
          <h2>Find it on Github</h2>
          <p>
            You are very welcome to look at the code and make a pull request
            with changes.
            <a href="https://github.com/kevinsimper/copenhagen.community">
              https://github.com/kevinsimper/copenhagen.community
            </a>
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
