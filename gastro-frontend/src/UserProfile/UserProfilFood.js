import React from "react";
import Controller from '../Controller'
import { inject } from "mobx-react";

@inject('MainComponentStore')
class UserProfileFood extends React.Component {

    constructor(props) {
        super(props);
        this.data = {};
    }

    componentDidMount() {
        this.data = Controller.getProfileGeneral(this.props.art)
    }

    createItems(data) {
        // return data.map(this.createItem);
    }

    createItem(item) {
        return (
            <div className="card" style="width: 18rem;">
                <img className="card-img-top" src={item.id + ".jpg"} alt="Card image cap"></img>
                <div className="card-body">
                    <a className="btn btn-primary" onClick={() => Controller.postProfileFood(item.id, true)}>Yes</a>
                    <a className="btn btn-danger" onClick={() => Controller.postProfileFood(item.id, false)}>No</a>
                </div>
            </div>
        )
    }

    render() {
        const { MainComponentStore } = this.props;
    
        return (
            <div>
                {this.createItems(this.data)}
                <button className='btn-primary' onClick={() => MainComponentStore.nextPage()}>Continue</button>
            </div>
        )
    }
}

export default UserProfileFood;

