export class ImageListFetch {
    static obtenirLaListe() {
        return fetch('app/component/tux.json').then(laReponse => laReponse.json())
    
    }
}