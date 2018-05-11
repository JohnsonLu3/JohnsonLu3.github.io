import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Bio from '../containers/Bio';
import Skills from '../containers/Skills';
import ShowCase from '../containers/ShowCase';

require('../../scss/style.scss');

const App = () => (
    <div>
        <Header />
        <Bio />
        <br />
        <Skills />
        <br />
        <ShowCase />
        <Footer />
    </div>
);

export default App;