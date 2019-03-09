import React from 'react';
import "./AlertMenu.scss";

class AlertMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="alertmenu">
        <div className="">
        <div className="alertheader">
          {this.props.alert.area.toUpperCase()}
        </div>
        <div>
          <span>TOTAL ALARMS</span><span style={{ float: 'right' }}>{this.props.alert.amount} STK</span>
        </div>
        <br/>
        <div>
          <div>ALARM DATA</div>
          <hr></hr>

          <div><span>Areas</span><span style={{ textAlign: 'right' }}><ul>{this.props.alert.subareas.map(a => <ol>{a}</ol>)}</ul></span></div>

          <div><span>Radius of area</span><span style={{ float: 'right' }}>{this.props.alert.radius} km</span></div>
          <div><span>Different locations</span><span style={{ float: 'right' }}>{this.props.alert.locations} locations</span></div>
          <br/>
          <div><span>Types of threats</span><span style={{ textAlign: 'right' }}><ul>{this.props.alert.threats.map(a => <ol>{a}</ol>)}</ul></span></div>
        </div>
        <br/>
        <div>
          <div>PROTECTORS</div>
          <hr></hr>
          <div><span>Closest to the threat</span><span style={{ float: 'right' }}>{this.props.alert.closest} stk</span></div>
          <div><span>In {this.props.alert.area.toUpperCase()}</span><span style={{ float: 'right' }}>{this.props.alert.inarea} stk</span></div>
          <div><span>Desired method</span><span style={{ float: 'right' }}>AIR ATTACK</span></div>
          <div>Size of protection</div>
          <div style={{ textAlignLast: 'right' }}><input type="number" className="protectoramount" defaultValue="1" max={this.props.alert.closest || 1}></input> STK</div>
        </div>
        <button className="btn button-primary alertButton">Send protectors!</button>
      </div>
      </div>
    );
  }
}

export default AlertMenu;