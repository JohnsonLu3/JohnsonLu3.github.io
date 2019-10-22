import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Projects extends Component{

    renderLink(proj){
        if(proj.SourceLink != null){
            return(
                <a href= {proj.SourceLink} target="_blank">
                    <h1 className="">{proj.Name}</h1>
                </a>
            );
        }else{
            return(
                <a href= {proj.Visit} target="_blank">
                    <h1 className="">{proj.Name}</h1>
                </a>
            );
        }
    }

    renderDetails(proj){
        return(
            proj.Details.map((detail)=>{
                return(
                    <p>{detail}</p>
                );
            })
        );
    }


    renderLang(proj){
        return(
            proj.languages.map((lang)=>{
                return(
                    <div className=""><i className={"langIcon " + lang}></i></div>
                );
            })
        );
    }

    renderProjectView(proj){
        return(
            <div className="projectDetails py-5">
                <div id={proj.Name} className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-12">
                                    {this.renderLink(proj)}
                                </div>
                            </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row langBar">
                                    {this.renderLang(proj)}
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 projDetails">
                                        {this.renderDetails(proj)}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <img className="d-block img-fluid w-100" src={"./img/projects/" + proj.Img[0]} /> 
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
                    <div className="row" id="webApps">
                        <h1 className="subHeader"><b>Web Apps</b></h1>
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
                        <h1 className="subHeader"><b>Software</b></h1>
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