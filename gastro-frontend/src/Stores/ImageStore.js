import {action, observable} from "mobx";

class ImageStore {
    @observable images = [false, false, false, false, false, false, false, false, false, false];

    @action setImage(id) {
        this.images[id] = !this.images[id]
    }
}

export default new ImageStore();