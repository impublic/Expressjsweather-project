const cityname = document.getElementById("cityname");
const submitbtn = document.getElementById("submitbtn");
const city_name= document.getElementById('city_name');
const temp = document.getElementById('temp');
 const temp_status=document.getElementById("temp_status");
 const getinfo = async(event)=>{
     event.preventDefault();
     let cityval = cityname.value;
if(cityval == ""){
    city_name.innerText ='plz write the name before search';
}else{
     try{
let url='http://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=28e38ba8964dc930e5eaea0c276bd72f'
    const response= await fetch(url);
    const data = await response.json();
    const arrData = [data];
    city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
    temp.innerText =arrData[0].main.temp;
    temp_status.innerText= arrData[0].weather[0].main;
     console.log(data);
   }catch{
    city_name.innerText =`plz write the name before search`;
   }
}
 }
submitbtn.addEventListener('click',getinfo);
 
