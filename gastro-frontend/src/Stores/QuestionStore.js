import {action, observable} from "mobx";


class QuestionStore {
    @observable data = {
        id: 1
    }
    
    @action next() {
        this.data.id += 1
        this.data.continue = this.data.id >= 3 ? true : false;
    }
}

export default new QuestionStore();