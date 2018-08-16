import { meetups } from "./meetups";
import Head from "next/head";
import Upcoming from "../components/Upcoming";
import ImageHeader from "../components/ImageHeader";

export default () => {
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
        .meetup-image {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 20%;
        }
        .meetup-image img {
          width: 60%;
          height: 60%;
          display: block;
          border-radius: 5px;
        }
      `}</style>
      <ImageHeader />
      <div className="content">
        <div className="meetups">
          {meetups.map((meetup, key) => {
            return (
              <a
                href={meetup.url}
                key={key}
                className="meetup"
                style={{
                  backgroundImage: `linear-gradient(
                    ${meetup.color}4d,
                    ${meetup.color}8c
                  ),
                  url(${meetup.image})`
                }}
              >
                <div className="square">
                  {meetup.logo ? (
                    <div className="meetup-image">
                      <img src={meetup.logo} />
                    </div>
                  ) : (
                    <div className="text">{meetup.name}</div>
                  )}
                </div>
              </a>
            );
          })}
        </div>
        <Upcoming />
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
          .whatis {
            margin: 40px auto 0;
            max-width: 500px;
          }
        `}
      </style>
    </div>
  );
};
