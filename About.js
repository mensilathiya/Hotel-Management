let data = [{
    servicies:'BEST PRICES',
    Extra :'Extra Services',
    des:'The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.',
    desData:'Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.',
    contact:'880 987 654 765',
}]
function Data(){
    let str = ''
    data.map((p)=>{
      str+=`  
              <div class=" service1">
                <p class="atext9">${p.servicies}</p>
                <h1 class="atext10">${p.Extra}</h1>
                <p class="atext11">${p.des}</p>
                <p class="atext12">
                ${p.desData}</p>
                <i class="bi bi-telephone "></i><p class="atext13">${p.contact}</p>  <p  class="atext14">For More Information</p>
              
              </div>
              
            >`
    })
    return str
}
let myData = document.getElementById('servicies')
myData.innerHTML=Data()