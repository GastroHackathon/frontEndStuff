import { action, observable } from "mobx";
import Controller from '../Controller';


class UserProfileStore {
    @observable ILove;
    @observable IHate;
    @observable ICant;
    @observable food;

    @action setIlove() {
        Controller.getProfileGeneral('ILove').then(data => { this.ILove = data })
    }

    @action setIhate() {
        Controller.getProfileGeneral('IHate').then(data => { this.IHate = data })
    }

    @action setIcant() {
        Controller.getProfileGeneral('ICant').then(data => { this.ICant= data })
    }

    @action setFood() {
        Controller.getProfileFood().then(data => { this.food = data })
    }
}

export default new UserProfileStore();