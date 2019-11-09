import axios from 'axios';

class _Controller {

    constructor() {
        this.url = 'http://localhost:5000';
        this.profileGeneralUrl = this.url + '/profileGeneral';
        this.profileFoodUrl = this.url + '/profileFood';
        this.questionUrl = this.url + '/question';
        this.resultsUrl = this.url + '/results';
        this.restauerantUrl = this.url + '/restaurant';


        this.getProfileGeneral = this.getProfileGeneral.bind(this);
        this.postProfileGeneral = this.postProfileGeneral.bind(this);
        this.getProfileFood = this.getProfileFood.bind(this);
        this.getQuestion = this.getQuestion.bind(this);
        this.getResults = this.getResults.bind(this);
        this.getRestaurant = this.getRestaurant.bind(this);
    }

    getProfileGeneral(art) {
        return axios.get(this.profileGeneralUrl, {
            params: {
                art: art
            }
        }).then(res => res.data);
    }

    postProfileGeneral(id, art) {
        return axios.post(this.profileGeneralUrl, {
            id: id,
            art: art
        }).then(res => true);
    }

    getProfileFood() {
        return axios.get(this.profileFoodUrl).then(res => res.body);
    }

    postProfileFood(id, fav) {
        return axios.post(this.profileFoodUrl, {
            id: id,
            fav: fav
        }).then(res => true);
    }

    getQuestion() {
        return axios.get(this.questionUrl).then(res => res.body);
    }

    postQuestion(id, answerId) {
        return axios.post(this.questionUrl, {
            id: id,
            answerId: answerId
        }).then(res => true);
    }

    getResults() {
        return axios.get(this.resultsUrl).then(res => res.body);
    }
    getRestaurant() {
        return axios.get(this.restauerantUrl).then(res => res.body);
    }
}

const Controller = new _Controller();

export default Controller;