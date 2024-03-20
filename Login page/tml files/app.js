const loginForm= document.querySelector('#sign-up');
const userNameField= document.querySelector('#username');
const passwordField= document.querySelector('#password')

const url= 'http://localhost:1440/api/users';

loginForm.addEventListener('submit',async (event)=>{
    event.preventDefault();
    const password=passwordField.value;
    const username=userNameField.value;
    try{
        const response= await fetch(url,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                username:username,
                password:password,
                tasks:["reps"]
            })
        })
        const data= response.json();
        if(response.ok){
            console.log('user registered successfully',data);
        }else{
            console.log('failed to register user',data);
        }
    }catch(err){
        console.log('sdfsffff',err);
    }
    
});



