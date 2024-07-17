const cl =console.log;

const sweetAlert =(msg,iconstr)=>{
    Swal.fire({
        title : msg,
        timer:2000,
        icon:iconstr
    })
}
const hrCall =()=>{
    //API call
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            let error = Math.random() >= .3 ? false:true;
            if(!error){
                //success
                resolve(`Candidate is Shortlisted for 1st tech interview`)
            }else{
                //error
                reject('Candidate Does not fit  for Profile')
            }
        }, 2500);
    })
}

const firstTechInt =()=>{
    //API call
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error = Math.random() >= .3 ? false:true;
            if(!error){
                //success
                resolve(`Candidate is Shortlisted for 2st tech interview`)
            }else{
                //error
                reject('Candidate is poor in basics')
            }
        }, 2000);
    })
}

const secondTechInt =()=>{
    //API call
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error = Math.random() >= .3 ? false:true;
            if(!error){
                //success
                resolve(`Candidate is Shortlisted for 3st tech interview`)
            }else{
                //error
                reject('Candidate is failed to write code.')
            }
        }, 1500);
    })
}

const thirdTechInt =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error = Math.random() >= .3 ? false:true;
            if(!error){
                //success
                resolve(`Candidate is Selected for Profile`)
            }else{
                //error
                reject('Candidate is failed to explain prev project')
            }
        }, 500);
    })
}
hrCall()
    .then(res=>{
        cl(res)
       return firstTechInt()
    })
    .then(res1=>{
        cl(res1)
       return secondTechInt()
    })
    .then(res2=>{
        cl(res2)
       return thirdTechInt()
    })
    .then(res3=>{
        sweetAlert(res3,'success')
        cl(res3)
    })
    .catch(err=>{
        cl(err)
        sweetAlert(err,'error')
    })