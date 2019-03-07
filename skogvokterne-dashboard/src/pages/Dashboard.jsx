import React from 'react';
import Table from '../components/Table';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount(){

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
          </div>
          <div className="col-sm-6">
            <Table headers={["Time", "Sensor", "Alert"]} rows={[
              {values: [new Date().toTimeString(), "Shrub", "Chainsaw"]},
              {values: [new Date().toTimeString(), "Oak", "Mechanical Woodpecker"]},
              {values: [new Date().toTimeString(), "Pine", "Scout with axe"]}
              ]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;