const cl =console.log;

const loginId= document.getElementById('loginId');
const emailControl =document.getElementById('email');
const passwordControl =document.getElementById('password')
const loginform = document.getElementById('loginform')


const sweetAlert =(msg,iconstr)=>{
    Swal.fire({
        title : msg,
        timer:2000,
        icon:iconstr
    })
}

const login =(email,pass)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
          
            if(email==='Jhon@gmail.com' && pass==="ZiqZaq"){
                resolve(`Successfully Login `)
            }else{
                reject (`Invalid Email and Password!!!`)
            }
        }, 2500);
    })
}





const onSignIn =(eve)=>{
    eve.preventDefault()
    let newObj ={
        email :emailControl.value,
        password :passwordControl.value
      
    }
   cl(newObj)
   login(email,password)
   .then(res=>{    
       cl(res)
       sweetAlert('success')
   })
   
   .catch(err=>{
       cl(err)
       sweetAlert('err')
   })
   .finally(()=>{
       formId.reset()
   
   })
}



loginform.addEventListener('submit',onSignIn);