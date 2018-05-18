import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Skills extends Component{
    skillSection(skill, i){
        return(
             <div className="col-md-4" key={i}>
                <div className="row mb-3">
                    <div className="text-center col-2">
                        <i className={skill.ico + " d-block mx-auto skillIco"}></i>
                    </div>
                    <div className="align-self-center col-10">
                        <h5 className="text-secondary"><b className="text-primary">{skill.id}</b></h5>
                    </div>
                </div>
            </div>
        );
    }

    render(){
        let Skills = this.props.Skills;

        return(
               <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12" id="Skills">
                            <h1 className="mb-4 text-primary">Skills</h1>
                            <p className="lead">Programming related skills that I have gained over the years</p>
                            <div className="row text-left mt-5">
                                {Skills.map((skill, i) =>{
                                    return(this.skillSection(skill, i));
                                })}

                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
// Get apps state and pass it as props to notes
//      > whenever state changes, the notes will automatically re-render
function mapStateToProps(state) {
    return {
        Skills: state.SkillsData
    };
}

// Actions
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
        },
         dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Skills);