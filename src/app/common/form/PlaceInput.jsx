import React, { Component } from "react";
import { Form, Label } from "semantic-ui-react";
import Script from "react-load-script";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
  } from "react-places-autocomplete";

  const styles={
      autocompleteContainer:{
          zIndex:100
      }
  }
class PlaceInput extends Component {
  state = {
    scriptLoaded: false
  };
  handleScriptLoaded = () => this.setState({ scriptLoaded: true });
  render() {
    const {
      input,
      width,
      onSelect,
      placeholder,
      options,
      meta: { touched, error }
    } = this.props;
    return (
      <Form.Field error={touched && !!error} width={width}>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYjhvBnLBL-NbvYbKcLbGAZZ7dhXDqBrg&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        {this.state.scriptLoaded && (
          <PlacesAutocomplete 
          inputProps={{ ...input, placeholder }} 
          styles={styles}
          options={options}
          onSelect={onSelect}
          />
        )}
      </Form.Field>
    );
  }
}

export default PlaceInput;
