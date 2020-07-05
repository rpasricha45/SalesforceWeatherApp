import { LightningElement,track } from 'lwc';
import {apiKey} from './secrets.js';

export default class UserForm extends LightningElement {

    @track myZip;
    @ track myWeather;

    myApiCall = "https://api.openweathermap.org/data/2.5/weather?zip="
    // load from secrets file 
    myApiKey = apiKey;
    getWeather(event){
   
        this.myZip = event.target.value;
        console.log(this.myZip);
        this.myApiCall += this.myZip+",us&appid="+this.myApiKey;
        console.log(this.myApiCall);

        
        fetch(this.myApiCall)
        .then(res =>res.json()).
        then(data => 
            
            this.myWeather= (data['weather'][0]["description"])
                
            )
    }
  
}