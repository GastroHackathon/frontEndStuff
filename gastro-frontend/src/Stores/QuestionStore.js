import {action, observable} from "mobx";
import Controller from '../Controller';


class QuestionStore {
    @observable id;
    @observable question;
    @observable answer = ['', '']
    @observable continue = true;
    @observable results;
    @observable cnt = 1
    
    @action next() {
        Controller.getQuestion(this.cnt).then(data => {
            this.id = data.id;
            this.question =  data.question;
            this.answer = data.answer;
            this.continue = !!data.continue;
        })
        this.cnt += 1
    }

    @action setResults() {
        Controller.getResults().then(data => {
            this.results = data
        })
        this.cnt += 1
    }
}

export default new QuestionStore();