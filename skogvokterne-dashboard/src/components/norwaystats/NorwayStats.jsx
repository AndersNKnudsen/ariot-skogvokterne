import React from 'react';
import "./NorwayStats.scss";

const NorwayStats = props => (
  <div className="statStyle">
    <h2>NORWAY</h2>
    <div><span>PROTECTED BY</span><span style={{ float: 'right' }}>2232 protectors</span></div>
    <hr></hr>
    <br></br>
    <div><span>ACTIVE ALARMS</span><span style={{ float: 'right' }}><img src="/img/alert.svg"></img>1 STK</span></div>
    <br></br>
    <div>TOTAL STATUS OF INCIDENTS</div>
    <hr></hr>
    <div><span>CHAINSAW</span><span style={{ float: 'right' }}>1 stk</span></div>
    <div><span>FIRES</span><span style={{ float: 'right' }}>0 stk</span></div>
    <div><span>EXCAVATOR</span><span style={{ float: 'right' }}>1 stk</span></div>
    <div><span>TOXIC WASTE</span><span style={{ float: 'right' }}>0 stk</span></div>  
    <br></br>
    <div>TREES RESCUED IN MAY 2019</div>
    <hr></hr>
    <div><h2 style={{ display: 'inline-block' }}>2041</h2><span>TREES</span></div>
    <div>EQUALS TOTAL VALUE OF</div>
    <div><span>TONS OF OXYGEN</span><span style={{ float: 'right' }}>120 tons</span></div>
    <div><span>ANNUAL OXYGEN NEED OF</span><span style={{ float: 'right' }}>540 people</span></div>
  </div>
);

export default NorwayStats;