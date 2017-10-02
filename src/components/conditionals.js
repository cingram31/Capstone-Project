import React, { Component } from 'react';
import Codepen from 'react-codepen';

class Conditionals extends Component {
	render() {
		return (

			<div className="Condis">
				<h3 className="Condis-title">Conditionals</h3>
					<p>Conditionals control behavior (or flow) in JavaScript and determine 
					whether or not pieces of code can run. The most common type 
					of conditional is the if statement, which only runs if the 
					condition enclosed in parentheses () is true.</p>
				<h3>The if...else Statement</h3>
					<p>This statement consist of two parts: a condition and an action.</p>
				<h4>Example 1</h4>
					<p>If my cup is empty, fill it.</p>
					<p>if(a == 1)alert("My cup is empty!");</p>
				<h4>Example 2</h4>
					<p>The second half of the condition is the else keyword. Else tells
					JavaScript what to do if the condition is not true.</p>
					<p>if (a == 1) {
						alert("My cup is empty!")
					}else{
						alert("Yay, my cup is full!")
					}</p>

				
				<hr />
			<Codepen user="christianingram" hash="XegxOa" />
			</div>
		

		);
	}
}

export default Conditionals;