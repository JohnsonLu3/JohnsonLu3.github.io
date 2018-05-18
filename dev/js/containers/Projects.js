import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Projects extends Component{

    renderProjectView(proj){
        return(
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <a href= {proj.SourceLink} target="_blank">
                                        <h1 className="">{proj.Name}</h1>
                                    </a>
                                </div>
                            </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row langIcon">
                                    <div className="col-md-4 d-flex"><i className="d-block mx-auto fa fa-3x devicon-java-plain d-flex"></i></div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 projDetails">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <img className="d-block img-fluid w-100" src={"./img/projects/" + proj.Img} /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }


    render(){
        let proj = this.props.Proj;

        return(
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                            <h1 className="display-1 py-2">Projects</h1>
                        </div>
                    </div>
                </div>
                
                <hr /> 

                <div>
                    <div className="row" id="webApps">
                        <h1 className="style subHeader"><b>Web Apps</b></h1>
                    </div>
                </div>

                {   proj.map((Project) =>{
                        if(Project.Section === "WEBAPP"){
                            return(this.renderProjectView(Project));
                        }
                    })
                }

                 <hr /> 

                <div>
                    <div className="row" id="software">
                        <h1 className="style subHeader"><b>Software</b></h1>
                    </div>
                </div>

                {   proj.map((Project) =>{
                        if(Project.Section === "SOFTWARE"){
                            return(this.renderProjectView(Project));
                        }
                    })
                }

                <hr /> 

                <div>
                    <div className="row" id="games">
                        <h1 className="style subHeader"><b>Games</b></h1>
                    </div>
                </div>

                {   proj.map((Project) =>{
                        if(Project.Section === "GAME"){
                            return(this.renderProjectView(Project));
                        }
                    })
                }

            </div>
        );
    }
}
// Get apps state and pass it as props to notes
//      > whenever state changes, the notes will automatically re-render
function mapStateToProps(state) {
    return {
        Proj: state.ProjectsData
    };
}

// Actions
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
        },
         dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Projects);