import React from "react";
import Items from "./Items";
import { inject } from "mobx-react";

@inject('MainComponentStore')
class UserProfileGeneral extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { MainComponentStore } = this.props;

        return (
            <div>
                <Items art="ILove"></Items>
                <br></br>
                <br></br>
                <br></br>
                <button className='btn btn-primary btn-lg' onClick={() => MainComponentStore.nextPage()}>Continue</button>
            </div>
        )
    }
}

export default UserProfileGeneral;