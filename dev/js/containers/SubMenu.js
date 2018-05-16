import React, {Component} from 'react';
import { Link } from 'react-router';

class SubMenu extends Component{
    render(){
        return(
            <div class="py-5">
                <div class="container subMenu sticky">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="nav nav-pills flex-column">
                                <li class="nav-item">
                                <a href="index.html" class="active nav-link"><i class="fa fa-home fa-home"></i>&nbsp;Home</a>
                                </li>
                                <li class="nav-item">
                                <a href="#webApps" class="nav-link">Web Apps</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#software">Software</a>
                                </li>
                                <li class="nav-item">
                                <a href="#games" class="nav-link">Games</a>
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

