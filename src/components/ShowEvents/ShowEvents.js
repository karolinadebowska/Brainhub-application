import React from 'react'
import './ShowEvents.css';
import { Button, Table} from 'reactstrap'

class ShowEvents extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showEvents: false,
      events: []
    }
    this.getEvents = this.getEvents.bind(this);
    this.showEvents = this.showEvents.bind(this);
  };

  componentDidUpdate(){
    this.getEvents();
  }

  showEvents(){
    this.setState({
      showEvents: !this.state.showEvents
    })
  }

  async getEvents(){
    await fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        data = JSON.parse(data);
        console.log("data:",data);
        console.log("type",typeof(data));
        this.setState({
          events: data
        })
      })
  }

  render(){
    const {showEvents, events} = this.state;
    console.log(typeof(events));
    let table;
    if (showEvents) {
      table = 
        <div className="table-responsive">
          <Table className="table col-sm-12 table-bordered table-striped table-condensed cf" >
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Event date</th>
              </tr>
            </thead>
          <tbody>
            {events.map((event, index) => {
              return (
                <tr key={event.id}>
                  <td>{event['name']} {event.surname}</td>
                  <td>{event.email}</td>
                  <td>{event.date}</td>
                </tr>
              )
            })}     
          </tbody>
        </Table>
      </div>
    }
    return (
      <div>
        <Button onClick={this.showEvents} variant = "primary" id = "showButton" > Show all events </Button>
        {table}
      </div>
    );
  }
}

export default ShowEvents;