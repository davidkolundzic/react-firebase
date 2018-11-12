import React, { Component } from "react";
import {connect} from 'react-redux';
import { Grid, Button } from "semantic-ui-react";
import cuid from "cuid";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import {createEvent, deleteEvent, updateEvent} from '../eventActions'

const mapState = ( state )=> ({
  events: state.events
})
const actions={
  createEvent,
  deleteEvent,
  updateEvent
}
class EventDashboard extends Component {
  state = {
    // events: eventsDashboard,
    isOpen: false,
    selectedEvent: null
  };
  // this.handleFormOpen = this.handleFormOpen.bind(this);

  /** Na ovaj način prosljeđujem parametar iz html-a ako treba */
  handleFormOpen = () => {    
    this.setState({
      selectedEvent:null, 
      isOpen: true 
    });
  };
  handleCancel = () => {
    this.setState({ isOpen: false });
  };
  handleOpenEvent = (eventToOpen) =>() =>{
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
  }
  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    // const updatedEvents = [...this.state.events, newEvent];
    this.props.createEvent(newEvent);
    this.setState({
      // events: updatedEvents,
      isOpen: false
      
    });
  };

  handleUpdateEvent= (updatedEvent) => {
    this.props.updateEvent(updatedEvent);
    this.setState({
      // events: this.state.events.map(event => {
      //   if (event.id === updatedEvent.id) {
      //     return Object.assign({}, updatedEvent)
      //   }else{
      //     return event
      //   }
       //}),
      // events: this.props.updateEvent(updatedEvent),
      isOpen: false,
      selectedEvent: null
    })
  }

  handleDeleteEvent = (eventId) =>()=>{
    console.log("passed eventId", eventId);
    this.props.deleteEvent(eventId);
    // const updatedEvents = this.state.events.filter(e=>e.id !== eventId);
    // this.setState({
    //   events:updatedEvents
    // });
  }
 
  render() {
    const {selectedEvent}=this.state;
    const {events} = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList 
            deleteEvent= {this.handleDeleteEvent}
            onEventOpen={this.handleOpenEvent} events={events} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button
              positive
              content="Create Event"
              onClick={this.handleFormOpen}
            />
            {this.state.isOpen && (
              <EventForm
                updatedEvent = {this.handleUpdateEvent}
                selectedEvent={selectedEvent}
                createEvent={this.handleCreateEvent}
                handleCancel={this.handleCancel}
              />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(mapState, actions)(EventDashboard) ;
