import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';


const userInput = (props) => {
	debugger;
	return (
    <div class="form-group">
      <input type="email" onChange={props.changed} value={props.value}
      class="form-control" id="name" aria-describedby="emailHelp"/>
    </div>
	)
};		

export default userInput;