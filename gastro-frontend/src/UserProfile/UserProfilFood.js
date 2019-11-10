import React from "react";
import Controller from '../Controller'
import {inject, observer} from "mobx-react";
import './UserProfileFood.css';


@inject('UserProfileStore', 'MainComponentStore', 'ImageStore')
@observer
class UserProfileFood extends React.Component {

    constructor(props) {
        super(props);
        this.data = {};
        this.sendResponse = this.sendResponse.bind(this);
    }

    componentDidMount() {
        const {UserProfileStore} = this.props;

        UserProfileStore.setFood();
    }

    createItems(data) {
        if (data) {
            console.log(data.target)
            return Object.values(data).map(this.createItem);
        }
    }

    sendResponse = (id) => {
        const {ImageStore} = this.props;
        ImageStore.setImage(id);
        Controller.postProfileFood(id, ImageStore.image);
    }


    createItem = (item) => {
        const {ImageStore} = this.props;

        let source;
        if (ImageStore.images[item.id]) {
            source = '/img/' + item.id + '_heart.jpg';
        } else {
            source = '/img/' + item.id + '.jpg';
        }

        return (
            <div className="card" key={item.id}>
                <img className="card-img-top" src={source} alt="Card image cap" onClick={
                    () => this.sendResponse(item.id)}></img>
                <div className="card-body">
                    <a className="btn btn-primary" onClick={() => Controller.postProfileFood(item.id, true)}>Yes</a>
                    <a className="btn btn-danger" onClick={() => Controller.postProfileFood(item.id, false)}>No</a>
                </div>
            </div>
        )
    }

    render() {
        const {MainComponentStore} = this.props;
        const {UserProfileStore} = this.props;

        return (
            <div>
                {this.createItems(UserProfileStore.food)}
                <button className='btn-primary' onClick={() => MainComponentStore.nextPage()}>Continue</button>
            </div>
        )
    }
}

export default UserProfileFood;

