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

import Settings from '../../Settings.json';

class OlMap extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;

    this.addLayer = this.addLayer.bind(this);
    this.addAlertsToMap = this.addAlertsToMap.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
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
          center: fromLonLat(Settings.centerLongLat),
          zoom: Settings.mapInitialZoom,
        }),
    });

    this.map.on('click', this.onMapClick, false);

    this.props.alerts.length > 0 && this.addAlertsToMap(this.props.alerts);
  }

  onMapClick(evt) {
    const feature = this.map.forEachFeatureAtPixel(evt.pixel, f => f, { hitTolerance: 3 });
    if (feature) {
      const name = feature.get('name');
      this.props.onAlertClick(name);
    }
  }

  addAlertsToMap(alerts) {
    const features = [];
    alerts.forEach(a => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([a.long,a.lat])),
        name: a.name,
      });
      const style = new Style({
        text: '',
        image: new Icon(/** @type {olx.style.IconOptions} */ ({
          anchor: [0.5, 1],
          anchorXUnits: 'fraction',
          anchorYUnits: 'fraction',
          scale: 0.5,
          // color: '#FF8000',
          src: `${window.location.origin}/img/alert.svg`
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
      <div id="olmap" className="olmap" style={{ height: '100%' }} />
    );
  };
}

export default OlMap;