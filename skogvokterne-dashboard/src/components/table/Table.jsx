import React from 'react';
import './Table.scss';

const Table = props => (
  <table>
    <tr>
      {props.headers.map(h => <th>{h.toString()}</th>)}
    </tr>
      {props.rows.map(r => <tr onClick={props.onClick}>{r.values.map(v => <td>{v.toString()}</td>)}</tr>)}
  </table>
);

export default Table;