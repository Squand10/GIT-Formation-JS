async function randomResult() {
    const randError = Math.floor(Math.random() * 3 + 1);

    if (randError > 1) {
        return 'Super !';
    }
    throw new Error('Erreur ...');
}

randomResult()
    .then(console.log)
    .catch(console.log);


/* await */

async function getAsyncNumber() {
    const randTime = Math.floor(Math.random() * 3000 + 1000);
    const randValue = Math.floor(Math.random() * 10);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(randValue);
        }, randTime);
    });
}

async function addition(){
    const n1 = await getAsyncNumber();
    const n2 = await getAsyncNumber();

    console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

addition();


//module pattern

(function(){
    console.log('Module Pattern');
}());

