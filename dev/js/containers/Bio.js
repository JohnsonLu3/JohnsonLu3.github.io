import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Bio extends Component{
    render(){
        let Bio = this.props.Bio;
        return(
            <div className="py-5 text-center" style={{backgroundImage: 'url(../../img/cover.png)'}}>
                <div className="container py-5">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-3 mb-4 text-white">{Bio.Name}</h1>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid d-block icon mx-auto" src="../../img/me.png" /> 
                        </div>
                        <div className="col-md-6 py-5">
                            <div className="row">
                                <div className="col-md-12 py-1">
                                <p className="text-white bio text-left">{Bio.Desc}</p>
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
            </div>
        );
    }
}
// Get apps state and pass it as props to notes
//      > whenever state changes, the notes will automatically re-render
function mapStateToProps(state) {
    return {
        Bio: state.Bio,
    };
}

// Actions
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
        },
         dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Bio);