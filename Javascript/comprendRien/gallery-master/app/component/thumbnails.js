import {Component} from "./component.js";
//import {ImageListXhr} from "./xmlhttprequest.js";
import {ImageListFetch} from "./fetchhttprequest.js"

export class Thumbnails extends Component{
    init() {
//      const imageListXhr = new ImageListXhr();
        ImageListFetch.obtenirLaListe().then((laReponse) => {
            this.root.innerHTML = Thumbnails.afficherListe(laReponse);
        });
        this.root.innerHTML = '<p>Chargement des miniatures</p>'
    }
    static afficherListe(liste) {
        const tableau = liste.map(img => `<li><img src="img/${img}"/></li>`);
        const texte = tableau.join();
        return `<ul>${texte}</ul>`;

    }
}


