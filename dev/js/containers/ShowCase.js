import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';


class ShowCase extends Component{

    projectSrcButtons(project){
        if(project.SourceLink != null){
            return(<a href={project.SourceLink} target="_blank"><button className="btn btn-primary">View Source</button></a>);
        }else{
            return(<button className="btn btn-primary" target="_blank" disabled>View Source</button>);
        }            
    }

    projectViewButtons(project){
        if(project.Visit != null){
            return(<a href={project.Visit} target="_blank"><button className="btn btn-secondary">&nbsp;View Live&nbsp;</button></a>);
        }else{
            return(<button className="btn btn-secondary" target="_blank" disabled>&nbsp;View Live&nbsp;</button>);
        }
    }

    projectSection(project, i){
        return(
            <div className="col-md-4 my-3" key={i}>
                <div className="ShowCaseImage"> 
                    <img className="img-fluid d-block mb-4 img-thumbnail" src={"../../img/projects/" + project.Img[0]} /> 
                </div>
                <h3 className="text-dark"><a href={"/projects/#" + project.Name}>{project.Name}</a></h3>
                <div className="row py-3">
                    <div className="col-md-6">
                        {this.projectSrcButtons(project)}
                    </div>
                    <div className="col-md-6">
                        {this.projectViewButtons(project)}
                    </div>
                </div>
                <p className="mt-1 projectBio"> {project.Description} </p>
   
            </div>
        );
    }

    render(){

        let projects = this.props.Projects;

        return(
            <div>
                <div className="text-dark py-3  bg-light" id="Projects">
                    <div className="container">
                        <div className="row py-3">
                            {
                                projects.map((project, i) =>{
                                    if(project.ShowCase){
                                        return(this.projectSection(project, i));
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            
                <div className="bg-light">
                    <div className="row">
                        <div className="col-md-12 justify-content-center d-flex">
                            <Link to="/Projects" className="btn btn-info text-dark btn-lg moreProjects">More Projects</Link>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        Projects: state.ProjectsData
    };
}

// Actions
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
        },
         dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(ShowCase);