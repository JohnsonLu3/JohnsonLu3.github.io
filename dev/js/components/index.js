import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Contact from '../containers/Contact';
require('../../scss/style.scss');
require('../../scss/mobile.scss');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
        <Contact />
      </div>
    );
  }
}

export default App;