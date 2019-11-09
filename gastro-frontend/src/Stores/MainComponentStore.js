import {action, observable} from "mobx";


class MainComponentStore {
    @observable page = 1;
    
    @action setPage(newPage) {
        this.page = newPage;
    }

    @action nextPage() {
        this.page += 1
    }
}

export default new MainComponentStore();