import React from "react";
import {
    Col,
    Container,
    Card,
    CardBody,
    CardTitle,
    CardText,
} from "reactstrap";


const MenuBlocks = (props) => {
    return (
        <Col md={6} className='d-inline-flex justify-content-center mt-3 mb-3'>
            <Card className='menuBlock w-75' role='button'>
                <CardBody>
                    <CardTitle className='text-center fontSizeCardTitle'>{props.name}</CardTitle>
                    <CardText className='text-center fontSizeCardText'>From {props.price}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

const Menu = () => {
    return (
        <Container className='menuContainer mb-1'>
            <div className='text-center fontTitleMenu pt-2'>Menu</div>
            <hr/>
            <MenuBlocks name='Hookah' price='29$'/>
            <MenuBlocks name='Vegan' price='19$'/>
            <MenuBlocks name='Sushi' price='22$'/>
            <MenuBlocks name='Breakfast' price='29$'/>
            <MenuBlocks name='Burgers' price='29$'/>
            <MenuBlocks name='Pizza' price='29$'/>
            <MenuBlocks name='Drink' price='29$'/>
            <MenuBlocks name='Other' price='29$'/>
        </Container>
    )
}

export default Menu;