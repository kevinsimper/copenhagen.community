import React from 'react'

export default ({children}) => {
  return (
    <div>

    <style>{`
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
    <table className="table">
      {children}
    </table>
  </div>
  )
}
