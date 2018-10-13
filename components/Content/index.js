import React from 'react';

export default ({ children }) => (
  <div className="content">
    <style jsx>{`
      .content {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
      }
    `}</style>
    {children}
  </div>
);
