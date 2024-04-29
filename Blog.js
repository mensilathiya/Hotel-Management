const CardData = [
{
    image:'./images/blog1.jpg',
    date:'December 20,2024 Comment (5)',
    title:'A Night in Norway',
    descrption:'Embark on a journey through the world of hospitality.'
},
{
    image:'./images/blog4.jpg',
    date:'December 20,2024 Comment (5)',
    title:'Standard Room',
    descrption:'Discover the art and science behind effective hotel management.'
},
{
    image:'./images/blog2.jpg',
    date:'December 20,2024 Comment (5)',
    title:'A Night in Norway',
    descrption:'Embark on a journey through the world of hospitality.'
},
{
    image:'./images/single-room-2-1170x780.jpg',
    date:'December 20,2024 Comment (5)',
    title:'A Night in Norway',
    descrption:'Embark on a journey through the world of hospitality.'
},
{
    image:'./images/about-rooms-2-1170x791.jpg',
    date:'December 20,2024 Comment (5)',
    title:'Standard Room',
    descrption:'Discover the art and science behind effective hotel management.'
},
{
    image:'./images/safe-secure.jpg',
    date:'December 20,2024 Comment (5)',
    title:'A Night in Norway',
    descrption:'Embark on a journey through the world of hospitality.'
},
]
function cardData(){
    let str = ''
    CardData.map((p)=>{
        str+=`
          <div class="col-xl-3 col-lg-2 col-md-4 col-sm-4 card">
            <img src="${p.image}" class="card-img-top" alt="...">
            <div class="card-body">
             <Pre class="btext2 card-title">${p.date}</Pre>
             <P class="btext3">${p.title}</P>
              <p class="btext4 card-title">${p.descrption}</p>
            </div>
            </div>`
    })
    return str
}
let data = document.getElementById('myData')
data.innerHTML = cardData()

