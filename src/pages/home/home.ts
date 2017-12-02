import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 


declare var google;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: ['./home.scss']
})
export class HomePage {
  options : GeolocationOptions;
  currentPos : Geoposition;
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController,
    private geolocation: Geolocation) {
    this.getUserPosition()
  }
  getUserPosition(){
    this.options = {
        enableHighAccuracy : true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;      
        console.log(this.currentPos);
        // setTimeout(()=> {
          let latLng = new google.maps.LatLng(this.currentPos.coords.latitude, this.currentPos.coords.longitude);
     
          let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }
       
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          this.addMarker()
        // }, 5000)

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    })
  }
  addMarker(){
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

  }
}