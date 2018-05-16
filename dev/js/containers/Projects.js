import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Projects extends Component{

    render(){

        return(
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-center">
                            <h1 class="display-1 py-2">Projects</h1>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <hr /> 
                </div>
                <div class="container">
                    <div class="row" id="webApps">
                        <h1 class="style subHeader"><b>Web Apps</b></h1>
                    </div>
                </div>

                <div class="container">
                    <hr /> 
                </div>
                <div class="container">
                    <div class="row" id="software">
                        <h1 class="style subHeader"><b>Software</b></h1>
                    </div>
                </div>

                <div class="container">
                    <hr /> 
                </div>
                <div class="container">
                    <div class="row" id="games">
                        <h1 class="style subHeader"><b>Games</b></h1>
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