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

    send(answerId) {
        const { QuestionStore } = this.props;

        Controller.postQuestion(QuestionStore.id, answerId);
        QuestionStore.next()

    }

    render() {
        const { MainComponentStore } = this.props;
        const { QuestionStore } = this.props;

        console.log(QuestionStore.id)
        if (!QuestionStore.id) {
            QuestionStore.next()
            return null
        }
        console.log(QuestionStore.continue)
        if (!QuestionStore.continue) {
            MainComponentStore.nextPage()
        }

        console.log(QuestionStore.id)
        return (
            <div>
                <h1>Question : {QuestionStore.id} </h1>
                <div className="card" >
                    <div className="card-body">
                        <p>{QuestionStore.question}</p>
                        <a className="btn btn-light" onClick={() => this.send(0)}>{QuestionStore.answer[0]}</a>
                        <a className="btn btn-light" onClick={() => this.send(0)}>{QuestionStore.answer[1]}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Interragation;