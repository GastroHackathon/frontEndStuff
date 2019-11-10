import React from "react";
import { inject, observer } from "mobx-react";

@inject('MainComponentStore')
@inject('QuestionStore')
@observer
class Results extends React.Component {

    constructor(props) {
        super(props);
    }

    submit(id) {
        const { MainComponentStore } = this.props;
    }

    createItems(data) {
        return Object.values(data).map(this.createItem);
    }

    createItem(item) {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 clasName="card-title">{item.name}</h5>
                        <p className="card-text">{item.allergens.join(" ")}</p>
                        <a href="#" class="btn btn-primary">Restaurant</a>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { QuestionStore } = this.props;
        if (!QuestionStore.results) {
            QuestionStore.setResults()
            return null
        }


        return (
            <div>
                <h1>Results</h1>
                {this.createItems(QuestionStore.results)}
            </div>
        )
    }
}

export default Results;