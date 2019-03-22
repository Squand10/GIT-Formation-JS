

fetch('tux.json')
    .then(response => response.json())
    .then(data=>{
        const promise = new Promise(function(resolve,reject){
            if (typeof data !== Array) {
                reject('data must be an array');
            }
            else {
                resolve(data);
            }
        });
    return promise;
    })
    .then(data => console.log(data))
    .catch(error=>console.log(error));
