import React, { Component } from 'react';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import UploadImage from './UploadImage/UploadImage';


class App extends Component {

  // Firstly I create an empty object as an initial state to use it later for multiple input fields


  state = {
    contact: {},
  }

  // The handleChange function takes two arguments to create just one function for all the input fields

  handleChange (propertyName, event) {
    const contact = this.state.contact;
    contact[propertyName] = event.target.value;
    this.setState({ contact: contact });
  }
  
  // Asthe imput field is going to be reused multiple times it's a good candidate to make it a component
  // I create a reference to the handleChange method and pass it to the UserInput component
  // Later in the render function I use the UploadImage component which comes with buttons for upload and submit
  // The users input text gets rendered later in the UserOutput component to which I pass propertyNames and can use them as props

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-6 col-xs-12 left">
            <h1 className="title">hCard Builder</h1>
            <h2 className="input_details">personal details</h2>
             
              <div className="row">
                <div className="col-sm-6 co-xs-12"> 
                  <label for="name">GIVEN NAME</label>
                  <UserInput 
                    changed = {this.handleChange.bind(this, 'name')}
                    value={this.state.contact.name}
                  />
                </div> 
                <div className="col-sm-6 co-xs-12"> 
                  <label for="name">SURNAME</label>
                  <UserInput 
                    changed = {this.handleChange.bind(this, 'surname')}
                    value={this.state.contact.surname}
                  />      
                </div> 
              </div> 

              <div className="row">
                <div className="col-sm-6 co-xs-12"> 
                  <label for="name">EMAIL</label>
                  <UserInput 
                    changed = {this.handleChange.bind(this, 'email')}
                    value={this.state.contact.email}
                  />
                </div> 
                <div className="col-sm-6 co-xs-12"> 
                  <label for="name">PHONE</label>
                  <UserInput 
                    changed = {this.handleChange.bind(this, 'phone')}
                    value={this.state.contact.phone}
                  />      
                </div> 
              </div> 

              <div className="row">
                <div className="col-sm-6 co-xs-12"> 
                  <label for="name">HOUSE</label>
                  <UserInput 
                    changed = {this.handleChange.bind(this, 'house')}
                    value={this.state.contact.house}
                  />
                </div> 
                <div className="col-sm-6 co-xs-12"> 
                  <label for="name">STREET</label>
                  <UserInput 
                    changed = {this.handleChange.bind(this, 'street')}
                    value={this.state.contact.street}
                  />      
                </div> 
              </div> 

              <div className="row">
                <div className="col-sm-6 co-xs-12"> 
                  <label for="name">SUBURB</label>
                  <UserInput 
                    changed = {this.handleChange.bind(this, 'suburb')}
                    value={this.state.contact.suburb}
                  />
                </div> 
                <div className="col-sm-6 co-xs-12"> 
                  <label for="name">STATE</label>
                  <UserInput 
                    changed = {this.handleChange.bind(this, 'state')}
                    value={this.state.contact.state}
                  />      
                </div> 
              </div> 

              <div className="row">
                <div className="col-sm-6 co-xs-12"> 
                  <label for="name">POSTCODE</label>
                  <UserInput 
                    changed = {this.handleChange.bind(this, 'postcode')}
                    value={this.state.contact.postcode}
                  />
                </div> 
                <div className="col-sm-6 co-xs-12"> 
                  <label for="name">COUNTRY</label>
                  <UserInput 
                    changed = {this.handleChange.bind(this, 'country')}
                    value={this.state.contact.country}
                  />      
                </div> 
              </div>            

              <UploadImage />

              </div>
              
            <div className="col-sm-6 col-xs-12 right">            
               <UserOutput 
                name={this.state.contact.name} 
                surname={this.state.contact.surname} 
                email={this.state.contact.email} 
                phone={this.state.contact.phone} 
                house={this.state.contact.house} 
                street={this.state.contact.street} 
                suburb={this.state.contact.suburb} 
                state={this.state.contact.state} 
                postcode={this.state.contact.postcode} 
                country={this.state.contact.country} 
              />
            </div>
          </div>
        </div>
      
    );
  } 
}

export default App;
