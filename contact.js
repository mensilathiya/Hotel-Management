let contactData=[{
      email:'Feel free to write on ocean123@gmail.com',
      description:'Ready to take the next step in your hospitality journey? Were here to help! Whether you have questions about our services.',
      phone:'Call us +31 555 777 83',
      phoneDes:'Our dedicated team is committed to providing prompt and personalized assistance to meet your needs.',
      visit:'Visit us on Via Venti Settembre, Canada',
      visitdes:'Contact us today to start a conversation about how we can collaborate to elevate your hotels performance.'
}]
function contact(){
    let str=''
    contactData.map((p)=>{
        str+=`<h3 class="ctext">${p.email}</h3>
        <P class="ctext1">${p.description}</P>
        <hr> 
        <h3 class="ctext">${p.phone}</h3>
        <P class="ctext1">${p.phoneDes}</P>
        <hr>    
        <h3 class="ctext">${p.visit}</h3>
        <P class="ctext1">${p.visitdes}</P>
        <hr> 
       <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14877.469711075995!2d72.8869815!3d21.21727375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711797228981!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> `
    })
    return str
}
let contactdata = document.getElementById('contact')
contactdata.innerHTML=contact()
function handleSubmit(event){
    event.preventDefault()
    console.log("here");
    let obj={
        'name':document.getElementById('name').value,
        'Email':document.getElementById('email').value,
        'Subject':document.getElementById('subjectName').value,
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
    if(!obj.Subject){
        isSuccess = false
        document.getElementById('errorSubject').innerText="please Enter Subject"   
      }
    else{
          isSuccess = true
          document.getElementById('errorSubject').innerText=""     
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