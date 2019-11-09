import React from 'react';
import { inject, observer } from "mobx-react";
import MainComponentStore from "./Stores/MainComponentStore"
import UserProfileGeneral from './UserProfile/UserProfileGeneral';
import UserProfileFood from './UserProfile/UserProfilFood';
import Interragation from './Interrogation/Interragation';
import Results from './Results/Results';
import Restaurant from './Restaurant/Restaurant';


@inject('MainComponentStore')
@observer
class MainComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { MainComponentStore } = this.props;

        let display;

        switch (MainComponentStore.page) {
            case 1:
                display = <UserProfileGeneral></UserProfileGeneral>
                break;
            case 2:
                display = <UserProfileFood></UserProfileFood>
                break;
            case 3:
                display = <Interragation></Interragation>
                break;
            case 4:
                display = <Results></Results>
                break;
            case 5:
                display = <Restaurant></Restaurant>
                break;
            default:
                display = <UserProfileGeneral></UserProfileGeneral>
                MainComponentStore.setPage(1);
        }

        return (
            <div>
                {display}
            </div>
        );
    }
}


export default MainComponent;
