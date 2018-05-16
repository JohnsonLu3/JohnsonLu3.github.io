import React from 'react';
import Bio from '../containers/Bio';
import Skills from '../containers/Skills';
import ShowCase from '../containers/ShowCase';


require('../../scss/style.scss');

const Main = () => (
    <div>
        <Bio />
        <br />
        <Skills />
        <br />
        <ShowCase />
    </div>
);

export default Main;