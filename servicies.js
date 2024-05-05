const imagesData =[
    {
        image:'./images/m2.jpg'
    },
   
]
const Data = [
    {
        type:'DISCOVER',
        title:'The Restaurant',
        descrpiton:'At Ocean Restaurant, we believe in more than just serving great food; we believe in creating memorable experiences. Our attentive staff is dedicated to providing impeccable service.',
        time:'Daily: 7.00 am to 9.00 pm'
    },
   
]
const imagesData1 =[
    {
        image:'./images/m7.jpg'
    }
]
const Data1 = [
    {
        type:'EXPERIENCES',
        title:'Spa Center',
        descrpiton:'Indulge in the lap of luxury with our exclusive amenities designed to enhance your spa experience.Relax and unwind in our serene lounge area, complete with plush seating and refreshments.',
        time:'Daily: 7.00 am to 9.00 pm'
    }
]
const imagesData2 =[
    {
        image:'./images/fit.jpg'
    }
]
const Data2 = [
    {
        type:'MODERN',
        title:'Fitness Center',
        descrpiton:'Reach your fitness goals faster with the help of our team of certified fitness professionals dedicated to helping you succeed. Whether youre a seasoned athlete or new to exercise.',
        time:'Daily: 6.00 am to 8.00 pm'
    }
]
const imagesData3 =[
    {
        image:'./images/m3.jpg'
    }
]
const Data3 = [
    {
        type:'EXPERIENCES',
        title:'Fitness Center',
        descrpiton:'Dive into serenity in our sparkling swimming pool, a serene oasis nestled amidst lush greenery and panoramic views. Whether youre seeking a refreshing morning swim, a leisurely afternoon .',
        time:'Daily: 10.00 am to 7.00 pm'
    }
]

function services(){
    let str = ''
    imagesData.map((p)=>{
        str+=`<img class="image" src=${p.image}  data-aos="fade-right"/>`
        
    })
    return str
}
let image = document.getElementById('simage')
image.innerHTML = services()


function servicestext(){
    let str = ''
    Data.map((p)=>{
        str+=`
    
        <P class="stext">${p.type}</P>
        <h1 class="stext1">${p.title}</h1>
        <P class="stext2">${p.descrpiton}</P>
        <i class="bi bi-stopwatch "></i><p class="t"> ${p.time}</p>
        `
        
    })
    return str
}
let text = document.getElementById('stext')
text.innerHTML = servicestext()


function services1(){
    let str = ''
    imagesData1.map((p)=>{
        str+=`<img class="image" src=${p.image}  data-aos="fade-right"/>`
              
    })
    return str
}
let image1 = document.getElementById('simage1')
image1.innerHTML = services1()


function servicestext1(){
    let str = ''
    Data1.map((p)=>{
        str+=`
    
        <P class="stext">${p.type}</P>
        <h1 class="stext1">${p.title}</h1>
        <P class="stext2">${p.descrpiton}</P>
        <i class="bi bi-stopwatch "></i><p class="t"> ${p.time}</p>
        `
        
    })
    return str
}
let text1 = document.getElementById('stext1')
text1.innerHTML = servicestext1()

function services2(){
    let str = ''
    imagesData2.map((p)=>{
        str+=`<img class="image" src=${p.image}  data-aos="fade-right"/>`
        
    })
    return str
}
let image2 = document.getElementById('simage2')
image2.innerHTML = services2()


function servicestext2(){
    let str = ''
    Data2.map((p)=>{
        str+=`
    
        <P class="stext">${p.type}</P>
        <h1 class="stext1">${p.title}</h1>
        <P class="stext2">${p.descrpiton}</P>
        <i class="bi bi-stopwatch "></i><p class="t"> ${p.time}</p>
        `
        
    })
    return str
}
let text2 = document.getElementById('stext2')
text2.innerHTML = servicestext2()


function services3(){
    let str = ''
    imagesData3.map((p)=>{
        str+=`<img class="image" src=${p.image}  data-aos="fade-right"/>`
              
    })
    return str
}
let image3 = document.getElementById('simage3')
image3.innerHTML = services3()


function servicestext3(){
    let str = ''
    Data3.map((p)=>{
        str+=`
    
        <P class="stext">${p.type}</P>
        <h1 class="stext1">${p.title}</h1>
        <P class="stext2">${p.descrpiton}</P>
        <i class="bi bi-stopwatch "></i><p class="t"> ${p.time}</p>
        `
        
    })
    return str
}
let text3 = document.getElementById('stext3')
text3.innerHTML = servicestext3()
