import React from "react";

export default () => {
  return (
    <div className="bg">
      <style jsx>{`
        h1 {
          margin: 0;
        }
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
      `}</style>
      <h1>Copenhagen.community</h1>
    </div>
  );
};
