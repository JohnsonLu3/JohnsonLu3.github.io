import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <div>
              <nav className="navbar navbar-expand-md bg-primary navbar-dark sticky" id="myNav">
                <a className="navbar-brand" href="index.html"><b>Johnson Lu</b></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                <div className="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#Skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="projects.html">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="webPages.html">Web Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/johlu1/" target="_blank"><i className="fa d-inline fa-lg fa-linkedin-square"></i>&nbsp;LinkedIn</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/JohnsonLu3" target="_blank"><i className="fa d-inline fa-lg fa-git-square"></i>&nbsp;Github</a>
                    </li>
                    </ul>
                </div>
            </nav>
            </div>
        );
    }
}
export default Header;