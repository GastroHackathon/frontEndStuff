import React from "react";
import Controller from '../Controller'
import { inject, observer } from "mobx-react";

@inject('MainComponentStore')
@inject('UserProfileStore')
@observer
class UserProfileFood extends React.Component {

    constructor(props) {
        super(props);
        this.data = {};
    }

    componentDidMount() {
        const { UserProfileStore } = this.props;

        UserProfileStore.setFood();
    }

    createItems(data) {
        if(data) {
            console.log(data.target)
            return Object.values(data).map(this.createItem);
        }
    }

    createItem(item) {
        return (
            <div className="card"  key={item.id}>
                <img className="card-img-top" src={"/img/" + item.id + ".jpg"} alt="Card image cap"></img>
                <div className="card-body">
                    <a className="btn btn-primary" onClick={() => Controller.postProfileFood(item.id, true)}>Yes</a>
                    <a className="btn btn-danger" onClick={() => Controller.postProfileFood(item.id, false)}>No</a>
                </div>
            </div>
        )
    }

    render() {
        const { MainComponentStore } = this.props;
        const { UserProfileStore } = this.props;

        return (
            <div>
                {this.createItems(UserProfileStore.food)}
                <button className='btn-primary' onClick={() => MainComponentStore.nextPage()}>Continue</button>
            </div>
        )
    }
}

export default UserProfileFood;

