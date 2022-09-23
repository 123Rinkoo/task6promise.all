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

