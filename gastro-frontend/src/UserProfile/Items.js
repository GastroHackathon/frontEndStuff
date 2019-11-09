import React from "react";
import Controller from '../Controller'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHamburger, faPizzaSlice, faFish } from '@fortawesome/free-solid-svg-icons'

library.add(faHamburger, faPizzaSlice, faFish);


class Items extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Controller.getProfileGeneral(this.props.art).then(data => this.setState(data))
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
        if (data) {
            console.log(data)
            return data.map(this.createItem);
        }

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
                    {this.createItems(this.state)}
                </div>
            </div>
        )
    }
}

export default Items;