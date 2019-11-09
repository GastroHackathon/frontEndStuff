import React from "react";

class CreateBox extends React.Component {

	constructor(props) {
        super(props);
    }

    saveBox = () => {
    }

    render() {

    	}

export default CreateBox;
import {action, observable} from "mobx";


class Store {
    @observable var = false;
    
    constructor() {

    }

    @action setVar(newVar) {
        this.var = newVar;
    }
}

export default new Store();
import React from 'react';
import {inject, observer} from "mobx-react";



@inject('Store')
@observer
class View extends React.Component {
    render() {
        const {Store} = this.props;

        let display;

        if (Store.var === "blablabla") {
            display = <LoadingSpinner/>;
        } else {
            display = null;
        }

        return (
            <div>
                {display}
            </div>
        );
    }
}

export default View;
https://stackoverflow.com/questions/52641907/how-to-get-mobx-decorators-to-work-with-create-react-app-v2
{
  "presets": [
    "react-app",
    ["@babel/preset-env", { "modules": false }],
    "@babel/preset-react"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ]
  ]
}
.babelrc
@action loadBoxData(boxId, type) {
        this.setIsLoading(true);
        this.setDisplay(true);

        axios.get(this.dataUrl, {
            params: {
                boxId: boxId
            }
        }).then(response => {
            console.log(response.data)
            this.boxData = [];
            //load humidity
            if (type === 1) {
                response.data.map(item => {
                    this.boxData.push({x: new Date(item.time), y: item.airHumidity});
                });
            } else if (type === 2) {
                response.data.map(item => {
                    this.boxData.push({x: new Date(item.time), y: item.airTemperature});
                });
            }

        }).catch(err => {
            console.error("loa…
import axios from 'axios';

class _PlantService {


    constructor() {
        this.url = 'http://localhost:8080/plant';
        this.testUrl = this.url + '/test';
        this.getUrl = this.url + '/all';
        this.createUrl = this.url + '/new';
        this.dataUrl = this.url + '/data';
        this.waterUrl = this.url + '/water';
        this.updateUrl = this.url + '/update';

        this.getTest = this.getTest.bind(this);

        this.getPlants = this.getPlants.bind(this);
        this.postPlant = this.postPlant.bind(this);
        this.getPlantData = this.getPlantData.bind(this);
        this.waterPlant = this.waterPlant.bind(this);
    }

    getTest() {
        axios.get(this.testUrl)
            .then(res => {
                console.log(res);
            })
    }

    getPlants(box_id) {
        return axios.get(this.getUrl, {
            params: {
                boxId: box_id
            }
        });
    }

    postPlant(plantData) {
        return axios.post(this.createUrl, plantData);
    }

    updatePlant(plantData) {
        return axios.post(this.updateUrl, plantData);
    }

    getPlantData(plantId) {
        return axios.get(this.dataUrl, {
            params: {
                plantId: plantId
            }
        });
    }

    waterPlant(plantId) {
        return axios.get(this.waterUrl, {
            params: {
                plantId: plantId
            }
        });
    }
}

const PlantService = new _PlantService();

export default PlantService;