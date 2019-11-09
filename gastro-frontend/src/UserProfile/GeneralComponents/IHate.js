import React from "react";
import data from './icons.json.js';

class IHate extends React.Component {

	constructor(props) {
        super(props);
    }

    createIcon(icon) {
        return <img source={icon} key={icon} />;
    }

    createIcons(icons) {
        return icons.map(this.createIcon);
    }

    render() {
        return (
            <div>
                <h1>I hate</h1>
                {this.createIcons(data.ihate)}
            </div>
        )
    }
}

export default IHate;