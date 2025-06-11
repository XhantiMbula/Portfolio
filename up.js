//selecting everything with a class of secion
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
//Added the zero at the end to slove "sections.eventListener is not a function"
const allsections = document.querySelectorAll('.main-content')[0];

function PageTransition(){
    //button click active class
    for(let i = 0; i < sectBtn.length; i++){
        
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }         
    //sections active class
    //the e is for the event
    allsections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id; // the id="" in html
        if(id){
            //remove selected from the other button
            sectBtn.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //Hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    }); 

    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', function(){
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}   


function sendMail(){
    const params = {
    name: document.querySelector('input[name="name"]').value,
    email: document.querySelector('input[name="email"]').value,
    subject: document.querySelector('input[name="subject"]').value,
    message: document.querySelector('textarea[name="message"]').value
    }

    emailjs.send('service_dc3i3r8','template_ij18932', params)
    .then(alert("Email sent.....")).catch(console.log('Failed to send message: '));
}

PageTransition();