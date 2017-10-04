import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PropsIntro extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h2 className="Gloss-title">Glossary of Terms</h2>
				<p></p>
				
				<p>Term: DOM</p>
				<p>Meaning: Short for Document Object Model, the specification for how
				objects in a Web page (text, images, headers, links, etc.)
				are represented. The DOM defines what attributes are associated with
				each object, and how objects and attributes can be manipulated. Dynamic
				HTML relies on the DOM to dynamically change the appearance of
				Web pages after they have been downloaded to a user's browser. </p>
				<hr />

				<p>Term: Iteration</p>
				<p>Meaning: The repetition of a process in a computer program, usually
				done with the help of loops. A process where a set of instructions are 
				repeated in a sequence a specified number of times or until a condition
				is met. When the first set of instructions is executed again, it is 
				called an iteration.</p>
				<hr />

				<p>Term: Concatenation</p>
				<p>Meaning: A term that describes combining a string, text, or other data 
				in a series without any gaps. The term "Concatenation" literally means to
				merge two things together.</p>
				<hr />

				<p>Term: Persistence</p>
				<p>Meaning: Persistence refers to object and process characteristics that 
				continue to exist even after the process that created it ceases or the 
				machine it is running on is powered off. When an object is created and 
				needs to be persistent, it is saved in a storage location, like a hard drive.
				</p>
				<hr />

				<p>Term: Parameter</p>
				<p>Meaning: An item of information - such as a name, a number, or 
				a selected option - that is passed to a program by a user or another program. 
				The actual information passed is called an argument.</p>
				



				
			</div>
		);
	}
}

export default PropsIntro;









































/*class Glossary extends Component {
	render() {
		return (
			const listgroupInstance = () => (
			<div>
				<ListGroup>
					<ListGroupItem>Persist</ListGroupItem>
					<ListGroupItem>Iterate</ListGroupItem>
					<ListGroupItem>Concatenation</ListGroupItem>
					<ListGroupItem>DOM</ListGroupItem>
					<ListGroupItem>Parameter</ListGroupItem>
					<ListGroupItem>client</ListGroupItem>
					<ListGroupItem>Server</ListGroupItem>
					<ListGroupItem>Database</ListGroupItem>
				</ListGroup>
			</div>
			);
		)
	}
}

export default Glossary;*/