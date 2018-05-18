import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class WebpageView extends Component{
    

    renderImage(web,i){
        return(
            <div className="webpageImg">
                <a href={web.Link} target="blank">
                <img className="d-block img-fluid" src={"./img/webpages/" + web.Img} /> </a>
            </div>
        );
    }

    renderName(web, i){
        return(
            <div className="col-md-3 col-6 py-4" key={web.Id}>
                <div className="row">
                    <a href={web.Link} target="blank"><p className=" lead text-center">{web.Name}</p></a>
                </div>
                <div className="row">
                    {this.renderImage(web, i)}
                </div>
            </div>
        );
    }

    render(){
        let web = this.props.web;

        return(
            <div className="py-4 bg-light">
                <div className="container">
                    <div className="row">
                        {
                            web.map((w,i) =>{
                                return(this.renderName(w,i));
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        web: state.WebPagesData
    };
}

// Actions
function matchDispatchToProps(dispatch){
    return bindActionCreators(
        {
        },
         dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(WebpageView);