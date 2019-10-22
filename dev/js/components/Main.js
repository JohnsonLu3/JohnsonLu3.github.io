import React from 'react';
import Bio from '../containers/Bio';
import Skills from '../containers/Skills';
import ShowCase from '../containers/ShowCase';

const Main = () => (
    <div>
        <Bio />
        <br />
        <Skills />
        <br />
        <ShowCase />
        
        <div id="madeWithReact">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React Logo" title="This Site is made with React Redux" />
        </div>
    </div>
);

export default Main;