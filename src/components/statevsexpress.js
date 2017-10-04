	import React, { Component } from 'react';

	 class Statevsexpress extends Component {
		render() {
			return (
			<div>
				<div className="StvsEx">
					<h3 className="StvsEx-title">Statements vs Expressions</h3>
					<hr />

					<h4 className="StvsEx-header">Statements</h4>
						<p>A Statement is a section of code that performs a single action. 
						It is possible to break a Statement into multiple lines. 
						A semi-colon marks the end of a statement. </p>
					<h4 className="StvsEx-sub">Example 1</h4>
						<p>now = new Date();</p>
						<p>hours = now.getHours();</p>
						<p>mins = now.getMinutes();</p>
						<p>secs = now.getSeconds();</p>

					<h4 className="StvsEx-sub">Example 2</h4>
						<p>It is also possible to combine statements on a single line as long
						as you place a semi-colon between each statement.</p>
						<p>hours = now.getHours(); mins = now.getMinutes(); secs = now.getSeconds();</p>
					<hr />

				
					<h4 className="StvsEx-header">Expressions</h4>
						<p>An Expression is a combination of variables and values that the Javascript 
						interpreter can evaluate to a single value, like 2+2=4. The characters that are 
						used to combine these values are called operators.
						An Expression produces a value.</p>
					</div>



					<div class="card">
			  			<ul class="list-group list-group-flush">
			    			<li class="list-group-item">Expressions compute to values.</li>
			    			<li class="list-group-item">x = 7</li>
			    			<li class="list-group-item">3 + 4</li>
			  			</ul>
					</div>
				</div>

				);
			}
		}
					
				
				
				
export default Statevsexpress;
