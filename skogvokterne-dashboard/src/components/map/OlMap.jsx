import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import LayerVector from 'ol/layer/Vector';
import SourceVector from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

class OlMap extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;

    this.addLayer = this.addLayer.bind(this);
    this.addAlertsToMap = this.addAlertsToMap.bind(this);
  }
  
  componentDidMount() {
    this.map = new Map({
        target: 'olmap',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([11,63]),
          zoom: 5,
        }),
    });
  }

  addAlertsToMap(alerts) {
    const features = [];
    alerts.forEach(a => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([11,63])),
        name: 'Alert',


      });
      const style = new Style({
        text: '',
        image: new Icon(/** @type {olx.style.IconOptions} */ ({
          anchor: [0.5, 1],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          scale: 0.4,
          src: `${window.location.origin}/img/alert.png`
        })),
      });
      feature.setStyle(style);
      features.push(feature);
    });
    
    const layer = new LayerVector({
      source: new SourceVector({ features }),
      name: 'Alerts',
      visible: true,
    });
    
    this.addLayer(layer);
  }

  addLayer(layer) {
    this.map.addLayer(layer);
  }

  render() {
    return (
      <div id="olmap" className="olmap" />
    );
  };
}

export default OlMap;