import React from "react";
import Controller from "../Controller"
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
        if(!QuestionStore.data) {
            QuestionStore.next()
        }

        return (
            <div>
                <h1>Question : {QuestionStore.data.id} </h1>
                <div className="card" style="width: 18rem;">
                <div className="card-body">
                    <p>{QuestionStore.data.question}</p>
                    <a className="btn btn-light" onClick={() => Controller.postProfileFood(QuestionStore.data.id, 1)}>{QuestionStore.data.answer[0]}</a>
                    <a className="btn btn-light" onClick={() => Controller.postProfileFood(QuestionStore.data.id, 1)}>{QuestionStore.data.answer[1]}</a>
                </div>
            </div>
                <button className='btn-primary' onClick={() => this.continue()}>Continue</button>
            </div>
        )
    }
}

export default Interragation;