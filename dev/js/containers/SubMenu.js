import React, {Component} from 'react';
import { Link } from 'react-router';

class SubMenu extends Component{
    render(){
        return(
            <div className="py-5">
                <div className="container subMenu sticky">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav nav-pills flex-column">
                                <li className="nav-item">
                                <a href="index.html" className="active nav-link"><i className="fa fa-home fa-home"></i>&nbsp;Home</a>
                                </li>
                                <li className="nav-item">
                                <a href="#webApps" className="nav-link">Web Apps</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#software">Software</a>
                                </li>
                                <li className="nav-item">
                                <a href="#games" className="nav-link">Games</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SubMenu;

