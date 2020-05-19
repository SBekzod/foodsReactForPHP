import React from 'react';

function RenderComments({ ele }) {
    return (
        <div key={ele.feedbacks_id}>
            <h4 className="colortextthree"><span className="fa fa-user"></span> Author: {ele.firstname}</h4>
            <h5>{ele.message}</h5>
            <h6>email: {ele.email}</h6>
        </div>
    );
}

function Feedbacks(props) {

    const feedbacking = props.feedbacks.feedbacks.map(ele => {
        return (
            <div>
                <RenderComments ele={ele} />
            </div>)
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {feedbacking}
                </div>
            </div>
        </div>
    );

}
export default Feedbacks;

