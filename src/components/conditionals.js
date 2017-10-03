import React, { Component } from 'react';
import Codepen from 'react-codepen';

class Conditionals extends Component {
	render() {
		console.log(this.props);
		return (

			<div className="Condis">
				<h3 className="Condis-title">Conditionals</h3>
					<p>Conditionals control behavior (or flow) in JavaScript and determine 
					whether or not pieces of code can run. The most common type 
					of conditional is the if statement, which only runs if the 
					condition enclosed in parentheses () is true.</p>
				<h3 className="Condis-header">The if...else Statement</h3>
					<p>This statement consist of two parts: a condition and an action.</p>
				

					
					
					
				
				<hr />
			<Codepen user="christianingram" hash="aLyYvE" />
			</div>
		

		);
	}
}

export default Conditionals;