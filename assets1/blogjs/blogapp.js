const cl =console.log;
const blogContainer= document.getElementById('blogContainer');
const blogId= document.getElementById('blogId');
const blogForm= document.getElementById('blogForm');
const title= document.getElementById('title');
const content= document.getElementById('content');
const submitBtn= document.getElementById('submitBtn');

const sweetAlert =(msg,iconstr)=>{
    Swal.fire({
        title : msg,
        timer:2000,
        icon:iconstr
    })
}


let blogsArr = [

    {
        title : "Angular 18",
        content : "Removes Modular structure, supports standalone components,services...",
        blogId : "1234"
    },
    {
        title : "Async JS - Promises",
        content : "Promises are introduced in es6, it overcome callback hell problem",
        blogId : "1235"
    }
]

const blogData =[];

const createBlog=(blog)=>{
    //API call
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error = Math.random() >= .5 ? false:true;
            if(!error){
                blogsArr.push(blog)
                resolve(`New blog created successfully`)
            }else{
                reject(`Something went wrong while creating new blog`)
            }
        }, 2500);
    })
}


const fetchAllBlogs =()=>{
    //API call to fetch all Blogs
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error =Math.random()>=.5 ? false:true;
            if(!error){
                //API success
                resolve(blogsArr)

            }else{
                reject(`Something went wrong while fetching data`)
            }
        }, 2000);
    })
}

const createCardBlogs =(arr)=>{
    if(arr.length == 0){
        alert(`Plz provide valid data`)
    }
    let result ='';
   arr.forEach((ele)=>{
    result+= 
    `
    <div class="col-md-4">
               <div class="card h-100">
                  <div class="card-header">
                     <h2>${ele.title}</h2>
                  </div>
                  <div class="card-body">
                     ${ele.content}
                  </div>
                  <div class="card-footer">
                     <button class="btn btn-outline-primary btn-sm">Edit</button>
                     <button  class="btn btn-outline-danger btn-sm">Remove</button>
                  </div>
               </div>
            </div>
    `
   })
blogContainer.innerHTML=result;
}


createBlog ({
    
    title :`Rxjs`,
    content :"It is used for state management in Angular",
    id: "456"

})
    .then(res=>{
        cl(res)
        return fetchAllBlogs()
    })
    .then(res1=>{
        cl(res1)
        createCardBlogs(res1)
        sweetAlert('success')
    })
    .catch(err=>{
        cl(err)
        sweetAlert(err,'error')
    })
