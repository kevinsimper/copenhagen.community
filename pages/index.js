import { meetups } from "./meetups";
import Head from "next/head";

const images = [
  "https://images.unsplash.com/photo-1526056316312-ed419ce34a05?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=235a8dea6dc46624996665b953e152f6&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1491596841158-6079a111f87d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d88273ee244036c8c4813ff416ca7a5&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1523352054314-d33af9fdf6ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6a250c3192845b9c40adc7f4ac8bfd64&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1519143587129-d7ae992bc44c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41cb269cddd7dbd66a0b85266f65a5c2&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1515838574152-6d83f6064351?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0afc73577781479d65292c6eef5190a0&auto=format&fit=crop&w=800&q=60"
];

const colors = ["#f2849e", "#7ecaf6", "#7bd0c1", "#c75b9b", "#ae85ca"];

export default () => {
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
          .whatis {
            margin: 40px auto 0;
            max-width: 500px;
          }
        `}
      </style>
    </div>
  );
};
