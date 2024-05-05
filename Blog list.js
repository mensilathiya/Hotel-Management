// const BlogData = [{
//     image:'./image/blog1.jpg',
//     date:'December 20,2024   Comment (5)',
//     title:'A Night in Norway',
//     desc:'Welcome to the heart of our hospitality hub! Dive into a treasure trove of industry insights, expert advice, and captivating stories through our meticulously curated blog list. At Ocean, we believe that knowledge is the key to unlocking limitless potential in hotel management.From front-of-house finesse to behind-the-scenes strategies, our blog list covers a spectrum of topics designed to inspire, educate, and empower hospitality enthusiasts at every level. Whether youre a seasoned hotelier, an aspiring professional, or an avid traveler with an eye for detail, theres something for everyone within our collection of articles.',
//     images:'blog_1.jpg',
//     imagess:'blog_2.jpg',
//     description:'Delve into the latest trends shaping the hospitality landscape, glean valuable tips for enhancing guest satisfaction, and discover innovative approaches to revenue management and operational efficiency. Our blog list is your gateway to staying informed, staying inspired, and staying ahead in the dynamic world of hotel management.',
// }]


// function Data(){
//     let str = ''
//     BlogData.map((p)=>{
//         str+=`<div class="col-lg-5 col-sm-5  bg1">
//         <div class="row">
//           <div class="col-12">
//                  <div class="card" style="width: 630px;border: none; ">
//                      <img src="./images/blog1.jpg" class="card-img-top" alt="...">
//                      <div class="card-body">
//                       <Pre class="btext2 card-title">December 20,2024   Comment (5)</Pre>
//                       <P class="btext3"> A Night in Norway</P>
//                        <p class="btext4 ">Welcome to the heart of our hospitality hub! Dive into a treasure trove of industry insights, expert advice, and captivating stories through our meticulously curated blog list. At Ocean, we believe that knowledge is the key to unlocking limitless potential in hotel management.From front-of-house finesse to behind-the-scenes strategies, our blog list covers a spectrum of topics designed to inspire, educate, and empower hospitality enthusiasts at every level. Whether you're a seasoned hotelier, an aspiring professional, or an avid traveler with an eye for detail, there's something for everyone within our collection of articles.</p>
//                      </div>
//                    </div>
//                  </div>
               
//                <div class="clarfix">
//                  <div class="hotal"></div>
//                  <div class="hotal1"></div>
//                </div>
//                <P class="hotal2">Delve into the latest trends shaping the hospitality landscape, glean valuable tips for enhancing guest satisfaction, and discover innovative approaches to revenue management and operational efficiency. Our blog list is your gateway to staying informed, staying inspired, and staying ahead in the dynamic world of hotel management.</P>
//                <nav aria-label="...">
//                  <ul class="pagination">
                   
//                    <li class="page-item"><i class="fa-brands fa-facebook-f"></i></li>
//                    <li class="page-item"><i class="fa-brands fa-twitter"></i></li>
//                    <li class="page-item"><i class="fa-brands fa-pinterest"></i></li>
//                    <li class="page-item"><i class="fa-brands fa-dribbble"></i></li>
//                    <li class="page-item"><i class="fa-brands fa-linkedin-in"></i></li>
//                    <li class="page-item"><i class="fa-brands fa-square-reddit"></i></li>
//                  </ul>
//                </nav>
//                <form method="post">
//                  <label for="name">Name:</label>
//                  <input type="text" id="name" name="name" >
             
//                  <label for="email">Email:</label>
//                  <input type="email" id="email" name="email" >
//                  <label for="comment">Your Comment:</label>
//                  <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
             
//                  <input type="submit" value="Post Comment">
//                </div>
//               </div>
//               <!-- end -->
   
//               <div class="col-lg-3 col-sm-3 bg2">
//                <div class="row">
//                  <div class="col-11 side">
//                    <form class="row row-cols-lg-auto g-3 align-items-center">
//                      <div class="col-12">
//                        <label class="visually-hidden" for="inlineFormInputGroupUsername">Search Here</label>
                      
//                          <input type="tel" class="form-control" id="inlineFormInputGroupUsername" placeholder="Search Here">
                      
//                    </form>
//                  </div>
//                </div>  
//          </div>`
//     })
//     return str
// }
// let data=document.getElementById('data')
// data.innerHTML = Data()


function handleSubmit(event){
    event.preventDefault()
    console.log("here");
    let obj={
        'name':document.getElementById('name').value,
        'Email':document.getElementById('email').value,
       
        'Comment':document.getElementById('comment').value,
        
    }
    let emailRegex=/^[a-zA-Z0-9.]+@[a-zA-z]+[.][a-zA-Z]{2,3}$/
    let nameRegex=/^[ A-Za-z]+$/
    let isSuccess = true
    if(!obj.name){
      isSuccess = false
      document.getElementById('errorName').innerText="please Enter name"   
    }
    else if(!nameRegex.test(obj.name)){
       isSuccess = false
       document.getElementById('errorName').innerText="please Enter valid name"    
    }
    else{
        isSuccess = true
        document.getElementById('errorName').innerText=""     
    }
    if(!obj.Email){
        isSuccess = false
        document.getElementById('errorEmail').innerText="please Enter Email"   
    }
    else if(!emailRegex.test(obj.Email)){
        isSuccess = false
        document.getElementById('errorEmail').innerText="please Enter valid Email"   
    }
    else{
          isSuccess = true
          document.getElementById('errorEmail').innerText=""     
    }
   
    if(!obj.Comment){
        isSuccess = false
        document.getElementById('errorComment').innerText="please Enter Comment"   
    }
    else{
          isSuccess = true
          document.getElementById('errorComment').innerText=""     
    }
}