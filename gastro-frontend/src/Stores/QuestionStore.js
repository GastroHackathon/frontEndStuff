import {action, observable} from "mobx";
import Controller from '../Controller';


class QuestionStore {
    @observable data;
    
    @action next() {
        this.data = Controller.getQuestion()
    }
}

export default new QuestionStore();