// PROMISE
arr= [
    { title: 'Post one', body: 'this is post one' },
    { title: 'Post two', body: 'this is post two' }
];


function getposts() {

    setTimeout(() => {
        let output = '';
        arr.forEach((post) => {
            output+= `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;  //agar ye plus ni lagata to hello world ko overwrite kr deta.
    }, 1000);
}

function createposts(post) //agar callback ni likhna to hum promises bhi daal skte hain...
{
    return new Promise((resolve, reject)=>{ //YE RHA PROMISE AGAR YE HOTA HAI TO RESOLVE()  FUNTION CALL HOGA AUR AGAR NAHI HOTA HAI TO REJECT() FUNCTION CALL HOGA AUR NICHE DO BAITHE HAI ALAG ALAG NAAAM KE JO INKO LENGE, NAMED=> .THEN() AND .CATCH();
        setTimeout(() => {
            arr.push(post);
            const error= false;
            if(!error)
            {
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
        }, 1000);
    });
}

function create4thposts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            arr.push(post);
            const err=false;
            if(!err)
            {
                resolve();
            }
            else{
                reject("error");
            }
        }, 6000);

    })
}
function deletepost()
{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(arr.length>0)
            {
                arr.pop();
                resolve();
            }
            else{
                reject('Array is empty know')
            }
        }, 1000);
    })
}
createposts({ title: 'Post three', body: 'this is post three'})
.then(()=>{
    getposts()                   //lets suppose agar hum getposts .then se bahar likhte to create post hone se pehle hi vo delete post kar dega
    deletepost().then(()=>{
        getposts()
        deletepost().then(()=>{
            getposts()
            deletepost().then(()=>{
                getposts()
                deletepost().then(()=>{ })
                    .catch((err)=>{
                        console.log("hello this is error", err)
                    })                     
            })
        })
    })
})
.catch(err=> console.log(err))
// getposts();

create4thposts({ title: 'Post four', body: 'this is post four'})
.then(()=>{
    getposts()
    deletepost().then(()=>{
        getposts()
        deletepost().then(()=>{})
        .catch(()=>console.log("4th element is also deleted"))
    })
    
})
.catch((err)=>console.log("err"))

//.............................................................................................................
//PROMISE.ALL
const user=[
    {usern: 'rinkoo', lastactivitytime: 'Date Mon February 02 2022 02:32:47 GMT+0530'},
    {usern: 'Beena', lastactivitytime: 'Date Sat March 25 2022 09:12:36 GMT+0530'}
]

let updateLastUserActivityTime=
    new Promise((resolve,reject)=>{
        setTimeout(() => {
            lastactivitytime =new Date;
            resolve(lastactivitytime);
        }, 1000);
    })


function createposts(post) 
{
    return new Promise((resolve, reject)=>{ 
        setTimeout(() => {
            user.push(post);
            const oooh=post.lastactivitytime
            // lastactivitytime="Date Mon March 20 2022 10:48:47 GMT+0530"
            const error= false;
            if(!error)
            {
                resolve(oooh);
            }
            else{
                reject('Error: Something went wrong');
            }
        }, 1000);
    });
}

function deletepost(){
    setTimeout(() => {
        return new Promise((resolve,reject)=>{
            user.pop();
            resolve(user);
        })
    }, 2000);
}

const deletionPromise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        user.pop();
        resolve(user);
    }, 5000);
})



Promise.all([createposts({usern: 'Hina', lastactivitytime: 'Date Mon April 15 2022 12:36:47 GMT+0530'}), updateLastUserActivityTime,deletionPromise,updateLastUserActivityTime]).then(([a,b,c,d])=>{
    console.log(`Before creating this post, user last time: ${a}`);
    console.log(`User last activity time before deleting post is: ${b}`);
    console.log(user);
    console.log(`User last activity time after deleting post is: ${d}`);

})



