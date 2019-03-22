const xhr = new XMLHttpRequest();

xhr.open('GET', '/contact.html');
//this vaut l'objet XMLHttpRequest

xhr.addEventListener('load', function(){

    if(this.statusCode >= 200 & this.statusCode <300){
        console.log(this.responseText);
    }
});

xhr.setRequestHeader('Accept', 'text.html');

xhr.send();