class Storage{
  constructor(){
    this.city;
    this.country;
    this.defaultCity='Hisar';
    this.defaultCountry='IN';
  }
  getLocationData(){
    if(localStorage.getItem('city')===null){
      this.city=this.defaultCity;
    }else{
      this.city=localStorage.getItem('city')
    }
    if(localStorage.getItem('country')===null){
      this.country=this.defaultCountry;
    }else{
      this.country=localStorage.getItem('country');
    }
    return {
      city:this.city,
      country:this.country
    }
  }
  setLocationData(city, country){
    localStorage.setItem('city',city);//we are saving as a string so no need of JSON.stringify and other
    localStorage.setItem('country',country);//we are saving as a string so no need of JSON.stringify and other
  }
}