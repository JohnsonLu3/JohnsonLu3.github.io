import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Bio from '../containers/Bio';
import Skills from '../containers/Skills';
require('../../scss/style.scss');

const App = () => (
    <div>
        <Header />
        <Bio />
        <br />
        <Skills />
        <Footer />
    </div>
);

export default App;