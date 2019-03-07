import React from 'react';
import Table from '../components/table/Table';
import Modal from '../components/modal/Modal';
import OlMap from '../components/map/OlMap';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.map = React.createRef();
  }

  componentDidMount(){
    this.map.current.addAlertsToMap(["Hei"]);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
          <OlMap ref={this.map} />
          {/* <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#sendRangerModal">Send the rangers!</button> */}
          </div>
          <div className="col-sm-6">
            {/* <Modal
              modalId="sendRangerModal"
              title="Send the rangers!"
              btnSecondary="Close"
              btnPrimary="Send"
              onClick={() => console.log("Go Bulbasaur!")}
            >
              <img src="https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/500px-001Bulbasaur.png" alt="Rangers roll" />
            </Modal>
            <Table headers={["Time", "Sensor", "Alert"]} rows={[
              {values: [new Date().toTimeString(), "Shrub", "Chainsaw"]},
              {values: [new Date().toTimeString(), "Oak", "Mechanical Woodpecker"]},
              {values: [new Date().toTimeString(), "Pine", "Scout with axe"]}
              ]}
              onClick={() => console.log(document.getElementById("sendRangerModal"), document.getElementById("sendRangerModal").modal('show'))}
              /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;