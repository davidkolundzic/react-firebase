import React, { Component } from "react";
import {connect} from 'react-redux';
import { Grid} from "semantic-ui-react";
import EventList from "../EventList/EventList";
import {deleteEvent} from '../eventActions'

const mapState = ( state )=> ({
  events: state.events
})
const actions={
  deleteEvent
}
class EventDashboard extends Component {

  handleDeleteEvent = (eventId) =>()=>{
    console.log("passed eventId", eventId);
    this.props.deleteEvent(eventId);
    // const updatedEvents = this.state.events.filter(e=>e.id !== eventId);
    // this.setState({
    //   events:updatedEvents
    // });
  }
 
  render() {
    const {events} = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList 
            deleteEvent= {this.handleDeleteEvent}
            events={events} />
          </Grid.Column>
          <Grid.Column width={6}>
          
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(mapState, actions)(EventDashboard) ;
