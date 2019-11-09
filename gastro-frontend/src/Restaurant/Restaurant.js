import React from "react";
import { inject } from "mobx-react";

@inject('MainComponentStore')
class Restaurant extends React.Component {

    constructor(props) {
        super(props);
    }

    createItems(data) {
        return data.map(this.createItem);
    }

    createItem(item) {
        return (
            <div>
                {item.name}
            </div>
        )
    }

    render() {
        const { MainComponentStore } = this.props;

        let data = [
            {name: 'Result 1'},
            {name: 'Result 2'},
        ]


        return (
            <div>
                <h1>Restaurant</h1>
                <button className='btn-primary' onClick={() => MainComponentStore.nextPage()}>Continue</button>
            </div>
        )
    }
}

export default Restaurant;