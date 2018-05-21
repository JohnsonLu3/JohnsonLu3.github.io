import React from 'react';
import SubMenu from '../../containers/SubMenu';
import ProjectPage from '../../containers/Projects';

const Projects = () => (
    <div>
        <SubMenu />
        <div className="py-5">
            <div className="container">
                <div  className="py-5">
                    <h1 className="text-center display-1">Projects</h1>
                    <hr />
                </div>
            </div>
        </div>
        <ProjectPage />
   </div>
);

export default Projects;