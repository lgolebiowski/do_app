import React from 'react';
import './UserOutput.css';
import * as ReactBootstrap from 'react-bootstrap';


const userOutput = (props) => {
	return (
		<div>
			<div className="header">
				<h2 className="hcard_preview">hcard preview</h2>
			</div>
			<div className="ticket_group">		
				<div className="ticket_header">
					<h3 className="full_name">{props.name}{props.surname}</h3>
				</div>
				<div className="address">
				
	      	<div className="row label_row">
	        	<div className="col-sm-2"> 
	        		<p className="details_label">email</p>
	    			</div>
	        	<div className="col-sm-10"> 
							<p className="details_output">{props.email}</p>
	        	</div>
	      	</div>

	      	<div className="row label_row">
	        	<div className="col-sm-2"> 
	        		<p className="details_label">phone</p>
	    			</div>
	        	<div className="col-sm-10"> 
							<p className="details_output">{props.phone}</p>
	        	</div>
	      	</div>

	      	<div className="row label_row">
	        	<div className="col-sm-2"> 
	        		<p className="details_label">address</p>
	    			</div>
	        	<div className="col-sm-10"> 
							<p className="details_output">{props.house}{props.street}</p>
	        	</div>
	      	</div>

	      	<div className="row label_row">
	        	<div className="col-sm-2"> 
	        		<p className="details_label"></p>
	    			</div>
	        	<div className="col-sm-10"> 
							<p className="details_output">{props.suburb}{props.state}</p>
	        	</div>
	      	</div>

	      	<div className="row label_row">
	        	<div className="col-sm-2"> 
	        		<p className="details_label">postcode</p>
	    			</div>
	        	<div className="col-sm-4"> 
							<p className="details_output">{props.postcode}</p>
	        	</div>
	        	<div className="col-sm-2"> 
	        		<p className="details_label">country</p>
	    			</div>
	        	<div className="col-sm-4"> 
							<p className="details_output">{props.country}</p>
	        	</div>
	      	</div>

				</div>
			</div>
		</div>		
			
	)
};

export default userOutput;

