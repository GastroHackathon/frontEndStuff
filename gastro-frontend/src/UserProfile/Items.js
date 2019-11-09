import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHamburger, faPizzaSlice, faFish } from '@fortawesome/free-solid-svg-icons'

library.add(faHamburger, faPizzaSlice, faFish);


class Items extends React.Component {

    constructor(props) {
        super(props);
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
        
    }

    createItems(data) {
        return data.map(this.createItem);
    }

    createItem(item) {
        return (
            <div key={item.id} style={{ display: 'inline-block' }}>
                <FontAwesomeIcon icon={item.name} />
            </div>
        )
    }

    render() {
        let data = [
            { id: 1, name: ['fa', 'hamburger'] },
            { id: 2, name: ['fa', 'pizza-slice'] },
            { id: 3, name: ['fa', 'fish'] },
        ]

        return (
            <div className="card">
                <div className="card-body">
                    {this.getHeader()}
                    {this.createItems(data)}
                </div>
            </div>
        )
    }
}

export default Items;