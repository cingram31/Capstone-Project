import React, { Component } from 'react';



 class Home extends Component {
    render() {
      return (
          <div>
          <input type="button" onclick="sayHello()" value="Say Hello" />
          Hello

          <button onclick="Welcome to the library()">
          Welcome to the library
          </button>
          <button onclick={'Welcometothelibraywithreact'}>
          Welcometothelibraywithreact
          </button>

          </div>
        );
    }
 } 

export default Home;