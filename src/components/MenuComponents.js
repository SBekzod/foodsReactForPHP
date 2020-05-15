import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({ eles }) {
    return (
        <Card key={eles.dishes_id}>
            <Link to={`/menu/${eles.dishes_id}`}>
                <CardImg width="100%" src={baseUrl + eles.image} alt={eles.name} />
                <CardImgOverlay>
                    <CardTitle>{eles.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

class Menu extends Component {

    constructor(props) {
        super(props);
    }
 
    render() {
        const menu = this.props.dishlar.dishes.map((ele) => {
            return (
                <div className="col-12 col-md-6">
                    <RenderMenuItem eles={ele} />
                </div>);
        });

        if (this.props.dishlar.isLoading) {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 offset-5">
                                <Loading />
                            </div>
                        </div>
                    </div>

                </div>
            );
        }
        else if (this.props.dishlar.errMess) {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 offset-5">
                                <h4>{this.props.dishlar.errMess}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="aboutus">About us</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Menu</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>Menu</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            {menu}
                        </div>
                    </div>
                </div>

            );
        }

    }


}
export default Menu;