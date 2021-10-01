import React from 'react'
import './SimpleForm.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import ThankYou from "../ThankYou/ThankYou";
import { regExprEmail } from '../../assets/consts'

class SimpleForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname:'',
      email: '',
      eventDate: '',
      submitted: false
    }
    this.handler = this.handler.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.createEvent = this.createEvent.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateInput = this.validateInput.bind(this);
  };

  handler(){
    this.setState({
      submitted: false
    });
  };

  getEvents(){
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      });
  }

  createEvent() { 
    //for testing purposes only
    if (this.props.saveData)
      this.props.saveData(this.state);
      
    const {name, surname, email, eventDate} = this.state;
    fetch('http://localhost:3001/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, surname, email, eventDate}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        this.resetForm();
        //this.getEvents();
      })
      .catch(error => {
        alert(`${error.message} - The event couldn't be added to the database`);
      });
  }

  resetForm(){
    this.setState({
      name: '',
      surname: '',
      email: '',
      eventDate: '',
      submitted:true
    });
  }

  validateInput(){
    //make sure that none of the objects are empty
    const {name, surname, email, eventDate} = this.state;
    if (name!=='' && surname!=='' && email!=='' && eventDate!==''){
      //make sure that email has a correct format
      if(regExprEmail.test(String(email).toLowerCase())){
        //make sure that date has a correct format
        if((new Date(eventDate) !== "Invalid Date") && !isNaN(new Date(eventDate))){
          return true;
        }
      }
    }
    return false;
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.validateInput()) {
      //send to the db
      this.createEvent();
    }
    else
      return;
  };

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

  render(){
    if(!this.state.submitted) {
      return (
        <>
          <Form data-testid = "form" id = "simpleForm" onSubmit = {this.handleSubmit} encType = "multipart/form-data" method = "post" >
            <div className = "form-group col-md-6" >
              <FormGroup controlid = "formBasicName" >
                <Label className = "text-muted" > First name <span className = "asterix">&#42;</span></Label>
                <Input data-testid = "name" type = "text" name = "name" value = {this.state.name} className = "text-primary" onChange = {this.handleChange.bind(this, 'name')} placeholder = "James"required />
              </FormGroup>
            </div>
            <div className = "form-group col-md-6" >
              <FormGroup controlid = "formBasicSurname" >
                <Label className = "text-muted" > Last name <span className = "asterx">&#42;</span></Label>
                <Input data-testid = "surname" type = "text" name = "surname" value = {this.state.surname} className = "text-primary" onChange = {this.handleChange.bind(this, 'surname')} placeholder = "Bond" required  />
              </FormGroup>
            </div>
            <div className = "form-group col-md-6">
              <FormGroup controlid = "formBasicEmail">
                <Label className = "text-muted" > Email <span className = "asterix">&#42;</span></Label>
                <Input data-testid = "email" type = "email" name = "email" value = {this.state.email} className = "text-primary" onChange = {this.handleChange.bind(this, 'email')} placeholder = "xyz@gmail.com" required  />
              </FormGroup>
            </div>
            <div className = "form-row" id = "endRow">
              <div className = "form-group col-md-3" id = "dateField" >
                <FormGroup controlid = "formBasicDateOrder" >
                  <Label className = "text-muted" > Event date <span className = "asterix">&#42;</span></Label>
                  <Input data-testid = "eventDate" type = "date" name = "eventDate" value = {this.state.eventDate} onChange = {this.handleChange.bind(this, 'eventDate')} placeholder = "DD/MM/YYYY" required/>
                </FormGroup>
              </div>
              < Button id = 'submitButton' variant = "primary" type = "submit" > Add </Button>
            </div>
          </Form>
        </>
      );
    }
    else{
      return(
        <ThankYou handler = {this.handler}/>
      )
    }
  }
}

export default SimpleForm;