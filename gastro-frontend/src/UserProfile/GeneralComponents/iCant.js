import React from "react";
import data from './icons.json.js';

class ICant extends React.Component {

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
                <h1>I can't eat</h1>
                {this.createIcons(data.icant)}
            </div>
        )
    }
}

export default ICant;