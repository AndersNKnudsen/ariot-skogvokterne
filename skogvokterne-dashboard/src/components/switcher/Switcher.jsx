import React from 'react';
import './Switcher.scss';

class Switcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 0,
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.props.headers.map((h,i) => <button onClick={() => this.setState({ view: i })} className={'btn btnHeader ' + (this.state.view === i && ' active')}>{h}</button>)}
        </div>
        <div className="switcherBody">
          {this.props.children[this.state.view]}
        </div>
      </div>
    );
  }
}

export default Switcher;