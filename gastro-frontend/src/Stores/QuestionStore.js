import {action, observable} from "mobx";
import Controller from '../Controller';


class QuestionStore {
    @observable data;
    @observable cnt = 1
    
    @action next() {
        this.data = Controller.getQuestion(this.cnt)
        this.cnt += 1
    }
}

export default new QuestionStore();