import React from "react";
import Controller from '../Controller'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHamburger, faPizzaSlice, faFish } from '@fortawesome/free-solid-svg-icons'

library.add(faHamburger, faPizzaSlice, faFish);


class Items extends React.Component {

    constructor(props) {
        super(props);
        this.data = {};
    }

    componentDidMount() {
        this.data = Controller.getProfileGeneral(this.props.art)
    }

    getHeader() {
        switch (this.props.name) {
            case "ILove":
                return <h1>I love</h1>;
            case "IHate":
                return <h1>I hate</h1>
            case "ICant":
                return <h1>I can't eat</h1>
            default:
                return;
        }
    }

    send(item) {
        Controller.postProfileGeneral(item.id, item.art)
    }

    createItems(data) {
        //return data.map(this.createItem);
    }

    createItem(item) {
        return (
            <div key={item.id} style={{ display: 'inline-block' }}>
                <FontAwesomeIcon icon={item.name} />
            </div>
        )
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    {this.getHeader()}
                    {this.createItems(this.data)}
                </div>
            </div>
        )
    }
}

export default Items;