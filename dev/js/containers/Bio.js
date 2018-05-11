import React, {Component} from 'react';
import Cover from "../../img/cover.png";

class Bio extends Component{
    render(){
        return(
            <div className="py-5 text-center" style={{backgroundImage: 'url(${Cover})'}}>
                <div className="container py-5">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-3 mb-4 text-white">Johnson Lu</h1>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid d-block icon mx-auto" src="../../img/me.png" /> 
                        </div>
                        <div className="col-md-6 py-5">
                            <div className="row">
                                <div className="col-md-12 py-1">
                                <p className="text-white bio text-left">Full stack developer, graduated at Suny Stony Brook with a Bachelor of Science in Fall 2017. My interest includes system and web security, as well as machine Learning. I'm currently trying to create a snake game that plays itself using
                                    a shallow neural network. In my free time I enjoy making mock websites, prototype programs and games.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <button className="btn btn-lg btn-primary mx-1" data-target="#modalContact" data-toggle="modal">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Bio;