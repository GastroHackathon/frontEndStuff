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
            <img className="card-img-top col-6 my-2 rounded border-secondary" src={source} alt="Card image cap" onClick={
                () => this.sendResponse(item.id)}></img>
        )
    }

    render() {
        const {MainComponentStore} = this.props;
        const {UserProfileStore} = this.props;

        return (
            <div>
                <div className="row align-items-center border">
                    {this.createItems(UserProfileStore.food)}
                </div>
                <br></br>
                <button className='btn-primary btn align-self-center' onClick={() => MainComponentStore.nextPage()}>Continue</button>
            </div>
        )
    }
}

export default UserProfileFood;

