import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import { incrementCounter, decrementCounter } from "./testActions";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import GoogleMapReact from "google-map-react";

const actions = {
  incrementCounter,
  decrementCounter
};
const Marker = () => <Icon name="marker" size="big" color="red" />;

class TestComponent extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  state = {
    address: "",
    scriptsLoaded: false
  };

  handleScriptLoad = () => {
    this.setState({ scriptsLoaded: true });
  };
  handleChange = address => {
    this.setState({ address });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };
  onChange = address => this.setState({ address });

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYjhvBnLBL-NbvYbKcLbGAZZ7dhXDqBrg&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <br />
        <br />
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptsLoaded && (
            <PlacesAutocomplete inputProps={inputProps} />
          )}
          <button type="submit">Submit</button>
        </form>

        <div style={{ height: "300px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDYjhvBnLBL-NbvYbKcLbGAZZ7dhXDqBrg" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker
              lat={59.955413}
              lng={30.337844}
              text={"Kreyser Avrora"}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default TestComponent;
