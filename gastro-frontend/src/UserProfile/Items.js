import React from "react";
import Controller from '../Controller'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHamburger, faPizzaSlice, faFish, faCarrot, faSeedling, faBreadSlice, faBlender } from '@fortawesome/free-solid-svg-icons'
import { inject, observer } from "mobx-react";

library.add(faHamburger, faPizzaSlice, faFish, faCarrot, faSeedling, faBreadSlice, faBlender);

@inject('UserProfileStore')
@observer
class Items extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { UserProfileStore } = this.props;

        UserProfileStore.setIlove();

        UserProfileStore.setIhate();

        UserProfileStore.setIcant();
    }

    send(item) {
        Controller.postProfileGeneral(item.id, item.art)
    }

    createItems(data) {
        if (data) {
            console.log(data)
            return Object.values(data).map(this.createItem);
        }

    }

    createItem(item) {
        return (
            <div key={item.id} onClick={() => Controller.postProfileGeneral(item.id, item.art)} style={{ display: 'inline-block', padding: '2em' }}>
                <FontAwesomeIcon icon={item.name} />
            </div>
        )
    }

    render() {
        const { UserProfileStore } = this.props;


        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h1>I love</h1>
                        {this.createItems(UserProfileStore.ILove)}
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h1>I hate</h1>
                        {this.createItems(UserProfileStore.IHate)}
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h1>I can't eat</h1>
                        {this.createItems(UserProfileStore.ICant)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Items;