import React from "react";
import {Breadcrumb, Row, BreadcrumbItem} from 'reactstrap';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <Row>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                </Breadcrumb>
            </Row>

        </div>
    )
}

export default Home;