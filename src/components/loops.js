import React, { Component } from 'react';
import Codepen from 'react-codepen';

class Loops extends Component {
	render() {
		return (
			<div className="Loops">
				<h3 className="Loops-title">Loops</h3>
					<p>Loops are groups of statements that repeat a certain number of times. 
					There are three parameters ro the for loop, each seperated by semi-colons:</p>
				<h3 className="Loops-header">The for...loop</h3>
					<ol>
						<li>The first parameter (var = 1 in the example) specifies a variable and
						assigns an initial value to it. This is called the initial expression because
						it sets up the initial state for the loop.</li>
						<li>The second parameter (var  10 in the example) is a condition that must
						remain true to keep the loop running. This is called the condition of the 
						loop.</li>
						<li>The third parameter (var++ in the example) is statement that executes with 
						each iteration of the loop. This is called the imcrement expression because it 
						is typically used to increment the counter. The increment expression executes
						at the end of each loop iteration.</li>
					</ol>





			</div>
		);
	}	
}

export default Loops;