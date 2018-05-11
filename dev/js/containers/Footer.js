import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
                <div className="py-5 bg-dark text-white">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-9">
                            <div className="row"></div>
                        </div>
                        <div className="col-4 col-md-1 align-self-center">
                            <a href="https://github.com/JohnsonLu3" target="_blank"><i className="fa fa-fw fa-3x text-white fa-github-square"></i></a>
                        </div>
                        <div className="col-4 col-md-1 align-self-center">
                            <a href="https://www.linkedin.com/in/johlu1/" target="_blank"><i className="fa fa-fw fa-3x text-white fa-linkedin-square"></i></a>
                        </div>
                        <div className="col-4 col-md-1 align-self-center">
                            <a data-target="#modalContact" data-toggle="modal"><i className="fa fa-fw text-white fa-3x fa-envelope-square"></i></a>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12 mt-3 text-center">
                            <p>© Copyright 2017 - All rights reserved.</p>
                        </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Footer;