import React from "react";
import ILove from "./GeneralComponents/ILove";
import IHate from "./GeneralComponents/IHate";
import ICant from "./GeneralComponents/iCant";
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
                <ILove></ILove>
                <IHate></IHate>
                <ICant></ICant>
                <button className='btn-primary' onClick={() => MainComponentStore.setPage(1)}>Continue</button>
            </div>
        )
    }
}

export default UserProfileGeneral;