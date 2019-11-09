import React from "react";

import { inject, observer } from "mobx-react";

@inject('MainComponentStore')
@inject('QuestionStore')
@observer
class Interragation extends React.Component {

    constructor(props) {
        super(props);
    }

    continue() {
        const { MainComponentStore } = this.props;
        const { QuestionStore } = this.props;

        if (!QuestionStore.data.continue) {
            QuestionStore.next()
        } else {
            MainComponentStore.nextPage()
        }
    }
    
    render() {
        const { QuestionStore } = this.props;

        return (
            <div>
                <h1>Question : {QuestionStore.data.id} </h1>
                <button className='btn-primary' onClick={() => this.continue()}>Continue</button>
            </div>
        )
    }
}

export default Interragation;