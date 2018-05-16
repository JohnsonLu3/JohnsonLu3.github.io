import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Contact extends Component{

    render(){
        let Bio = this.props.Bio;
        return(
            <div className="modal fade" id="modalContact" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Contact Info</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                            <div className="col-md-12">
                                <p className="lead">{Bio.Name}</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-12">
                                <p className="">Email: {Bio.Email}}</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6 d-flex justify-content-center">
                                <a className="btn btn-primary" href={Bio.Github}>GitHub</a>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                                <a className="btn btn-primary" href={Bio.LinkedIn}>LinkedIn</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        Bio: state.BioData
    };
}

// Actions
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
        },
         dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(Contact);