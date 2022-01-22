const nav = document.querySelector('.navbar');
fetch('../navbar/nav.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
    // const parser = new DOMParser()
    // const doc = parser.parseFromString(data, 'text/html')
    // eval(doc.querySelector('script').textContent)



})





// 43217800e9b2304cb46eb8ce5181fa4c


////location=>

// let located = document.getElementById("locate");

// located.addEventListener("click", ()=>{
//     alert();
// })

function getLocation(){



        if( 'geolocation' in navigator){
            console.log("geolocation is ava");

            navigator.geolocation.getCurrentPosition(async (position) =>{
              // console.log(position);
              // console.log(position.coords.latitude);
              // console.log(position.coords.longitude);

              const res = await fetch(
                `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${position.coords.longitude},${position.coords.latitude}`
              );

              const data = await res.json();

              let located = document.getElementById("locate");

              located.textContent =
                data.address.City + "," + data.address.RegionAbbr;


              // console.log(data);
            });
        }else{
                console.log("geolocation is not ava");

        }
}

getLocation();


// `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${position.coords.longitude},${position.coords.latitude}`;