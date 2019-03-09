import React from 'react';
import Table from '../components/table/Table';
import Modal from '../components/modal/Modal';
import OlMap from '../components/map/OlMap';
import RegistrationForm from '../components/registration/RegistrationForm';
import AlertMenu from '../components/alertMenu/AlertMenu';
import Switcher from '../components/switcher/Switcher';
import NorwayStats from '../components/norwaystats/NorwayStats';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showRegistration: false,
      showAlertBox: false,
      currentAlert: null,
      alerts: [{
        name: "Alert",
        lat: 59.984007, 
        long: 10.746817,
        area: "Oslo",
        amount: 4,
        radius: 70,
        locations: 2,
        subareas: ["Maridalsvannet", "Sognsvann"],
        closest: 12,
        inarea: 143,
        threats: ["Chainsaw", "Excavator"],
      }]
    };

    this.map = React.createRef();
    this.onAlertClick = this.onAlertClick.bind(this);
  }

  componentDidMount(){
    this.map.current.addAlertsToMap(this.state.alerts);
  }

  onAlertClick(name) {
    const alert = this.state.alerts.find(e => e.name === name);

    if (alert) {
      console.log("Found alert", alert);
      this.setState({ currentAlert: alert, showAlertBox: true });
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-8">
            <Switcher headers={["ACTIVE ALARMS", "BECOME ONE"]}>
              <div className="row">
                <div className="col-sm-6">
                  <NorwayStats></NorwayStats>
                </div>
                <div className="col-sm-6">
                  <OlMap ref={this.map} onAlertClick={this.onAlertClick} alerts={this.state.alerts} />
                </div>
              </div>
              <div>
                <RegistrationForm
                  onClickSecondary={() => this.setState({ showRegistration: false })}
                  onClickPrimary={() => console.log("Register!")}
                />
              </div>
            </Switcher>
          {/* <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#sendRangerModal">Send the rangers!</button> */}
          </div>
          <div className="col-sm-4">
            {this.state.showAlertBox && (
              <AlertMenu alert={this.state.currentAlert} />
            )}
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