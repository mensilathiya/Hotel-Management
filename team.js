
const first_rowdata = [{
    image:'./images/m9.jpg' ,
    name:'Valentina Karla',
    departmant:'General Manager',
    },
    {
        image:'./images/m8.jpg',
        name:'Micheal White',
        departmant:'Guest Service Department'
    },
    {
        image:'./images/m4.jpg',
        name:'Olivia Martin',
        departmant:'Reservations Manager'
    }
]
function data(){
    let str= ''
    first_rowdata.map((f)=>{
        str+=`
        <div class="col-xl-3 col-md-3 col-sm-12">
        <img src="${f.image} "  alt="..." class="img-thumbnail">
        <div>
        <h6 class="ctext">${f.name}</h6>
        <P class="ctext1">${f.departmant}</P>
        </div>
      </div>
        `
    })
    return str;
}
let container = document.getElementById('first_rowdata')
container.innerHTML = data()

const second_rowdata = [{
    image:'./images/m6.jpg  ',
    name:'Mariana Dana',
    departmant:'F&B Manager',
    },
    {
        image:'./images/m.jpg ',
        name:'Enrico Brown',
        departmant:'Head Chef'
    },
    {
        image:'./images/m10.jpg ',
        name:'Victoria Dan',
        departmant:'Meetings and Events Manager'
    }
]

function data2 (){
    let str = ''
       second_rowdata.map((s)=>{
        str+=`
        <div class="col-xl-3 col-md-3 col-sm-12">
        <img src="${s.image} "  alt="..." class="img-thumbnail">
        <div >
        <h6 class="ctext">${s.name}</h6>
        <P class="ctext1">${s.departmant}</P>
        </div>
      </div>
        `
    })
    return str
}
let second = document.getElementById('second_rowdata')
second.innerHTML = data2()