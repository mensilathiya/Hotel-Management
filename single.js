const data = [
    {
     image: './images/single.jpg',
    
    },
    
]
const data2 = [{
  image: './images/singlesimple.jpg',
}]
const data1 = [
    {
        title: 'Laxury Super Delux',
        descrpition:'Drift into a restful slumber on our sumptuous king-sized bed outfitted with premium linens and fluffy pillows, ensuring a night of unparalleled comfort.Step out onto your private balcony and savor the .',
        price: '$100 per night',
        button:'Book NOW'
    },
    
]

const data3= [
    {
        title: 'Simple Single Delux',
        descrpition:'Drift  Indulge in a spa-like experience in the ensuite bathroom equipped with a deep soaking tub, rainfall shower, and deluxe amenities, offering the perfect sanctuary to unwind and rejuvenate .',
        price: '$50 per night',
        button:'Book NOW'
    }
] 
function roomimage(){
    let str = ''
    data.map((r)=>{
        str+=`<img class="col-5 room"  src="${r.image}"/>`
    })
    return str
  
}
let container = document.getElementById('dataimage')
container.innerHTML = roomimage()


function roomData(){
    let str = ''
    data1.map((r)=>{
        str+=`
        <i class="bi bi-star-fill icon1"></i>
        <i class="bi bi-star-fill icon1"></i>
        <i class="bi bi-star-fill icon1"></i>
        <i class="bi bi-star-fill icon1"></i>
        <i class="bi bi-star-fill icon1"></i>
        <h2 class="t">${r.title}</h2>
        <p class="t1">${r.descrpition}</p>
        <p class="t2">${r.price}</p>
        <button class="bu">${r.button}</button>`
     
    })
    return str
  
}
let mydata = document.getElementById('data')
mydata.innerHTML = roomData()


function singleroomimage(){
    let str = ''
    data2.map((r)=>{
        str+=`<img class="col-5 room3"  src="${r.image}"/>`
    })
    return str
  
}
let image = document.getElementById('data1image')
image.innerHTML = singleroomimage()


function singleroomData(){
    let str = ''
    data3.map((r)=>{
        str+=`
        <i class="bi bi-star-fill icon1"></i>
        <i class="bi bi-star-fill icon1"></i>
        <i class="bi bi-star-fill icon1"></i>
        <i class="bi bi-star-fill icon1"></i>
        <i class="bi bi-star-fill icon1"></i>
        <h2 class="t">${r.title}</h2>
        <p class="t1">${r.descrpition}</p>
        <p class="t2">${r.price}</p>
        <button class="bu">${r.button}</button>`
     
    })
    return str
  
}
let mydata2 = document.getElementById('myData')
mydata2.innerHTML = singleroomData()

