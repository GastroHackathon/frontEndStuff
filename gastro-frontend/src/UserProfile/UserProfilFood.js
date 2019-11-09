import React from "react";
import { inject } from "mobx-react";

@inject('MainComponentStore')
class UserProfileFood extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { MainComponentStore } = this.props;

        return (
            <div>
                <button className='btn-primary' onClick={() => MainComponentStore.nextPage()}>Continue</button>
            </div>
        )
    }
}

export default UserProfileFood;