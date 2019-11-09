import {action, observable} from "mobx";


class MainComponentStore {
    @observable page = 1
    
    constructor() {

    }

    @action setpage(newPage) {
        this.page = newPage;
    }
}

export default new MainComponentStore();