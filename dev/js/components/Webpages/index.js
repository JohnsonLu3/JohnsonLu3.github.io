import React from 'react';
import WebpageView from '../../containers/WebpageView';

const Webpages = () => (
    <div>
       <div className="py-5">
            <div className="container">
                <div className="py-5">
                    <h1 className="pageTitle text-center display-1">Web page Designs</h1>
                    <hr />
                    <h3 className="pageSub text-center">Just some website designs that I have made, mostly with bootstrap.</h3>
                </div>
            </div>
        </div>


        <WebpageView />

   </div>
);

export default Webpages;