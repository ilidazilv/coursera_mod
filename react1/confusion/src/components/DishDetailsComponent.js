import React, {Component} from 'react';
import {
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    BreadcrumbItem,
    Breadcrumb,
    ModalBody,
    Modal,
    ModalHeader,
    Button,
    Label
} from "reactstrap";
import {Link} from "react-router-dom";
import {LocalForm, Errors, Control} from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props) {
        super(props);
        this.state =({
            CommentIsOpen: false
        })
        this.toggleModalComment = this.toggleModalComment.bind(this);
    }

    handleComments(values){
        console.log("Current state is " + JSON.stringify(values));
        alert("Current state is " + JSON.stringify(values));
    }

    toggleModalComment(){
        this.setState({
            CommentIsOpen: !this.state.CommentIsOpen
        })
    }

    render() {

        return(
            <div>
                <Button onClick={this.toggleModalComment}>Add comment</Button>
                <Modal isOpen={this.state.CommentIsOpen} toggle={this.toggleModalComment}>
                    <ModalHeader toggle={this.toggleModalComment}>
                        Add comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleComments(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating">
                                    Rating
                                </Label>
                                <Control.select className="form-control" id="rating" name="rating" model=".rating">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="name">
                                    Your name
                                </Label>
                                <Control.text validators={{required, minLength: minLength(2), maxLength: maxLength(15)}} className="form-control" id="name" name="name" model=".name"/>
                                <Errors className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: ' Required',
                                            minLength: ' Must be greater than 2 characters',
                                            maxLength: ' Must be 15 characters or less'
                                        }}/>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="comment">
                                    Your comment
                                </Label>
                                <Control.textarea className="form-control" rows={12} id="comment" name="comment" model=".comment"/>
                            </div>
                            <div className="form-group">
                                <Button type="submit" color="primary">Submit</Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
function RenderCard({dish}){
        return (
            <div>
            <CardImg  src={dish.image}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </div>)
    }
function RenderComments({comments}){
        const CommentsComponent = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-Us', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </div>)
        });
        return (
            <div>
                <h3>Comments</h3>
                {CommentsComponent}
            </div>
        )
    }
const DishDetails = (props) => {
        if(props.dish) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderCard dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                            <CommentForm/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<div/>)
        }
    }


export default DishDetails;