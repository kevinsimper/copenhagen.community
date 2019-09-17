import { meetups } from './meetups';
import Head from 'next/head';
import Upcoming from '../components/Upcoming';
import Layout from '../components/Layout';
import ImageHeader from '../components/ImageHeader';
import Content from '../components/Content';

export default () => {
  return (
    <Layout>
      <style jsx>{`
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
      <Content>
        <Upcoming />
        <div className="meetups">
          {meetups
            .filter(meetup => meetup.active !== false)
            .map((meetup, key) => {
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
                  url(${meetup.image})`,
                  }}>
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
      </Content>
      <style jsx>
        {`
          .whatis {
            margin: 40px auto 0;
            max-width: 500px;
          }
        `}
      </style>
    </Layout>
  );
};
