import React from 'react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Bio from '../containers/Bio';

require('../../scss/style.scss');

const App = () => (
    <div>
        <Header />
        <Bio />
        <Footer />
    </div>
);

export default App;