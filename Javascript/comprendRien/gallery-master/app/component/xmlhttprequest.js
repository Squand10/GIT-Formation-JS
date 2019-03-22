export class ImageListXhr {
    getList(callback) {

        const xhr = new XMLHttpRequest();

 

        xhr.open('GET', 'app/component/tux.json');
        xhr.addEventListener('load', function(){
            //this vaut l'objet XMLHttpRequest
            console.log('response loaded', this.status);
            if (this.status < 200 || this.status >= 300) {
                throw "problem";
            }
            callback(JSON.parse(this.responseText));
            
        });
        xhr.send();
    }
}



