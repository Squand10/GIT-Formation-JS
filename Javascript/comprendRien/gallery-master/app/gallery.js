import {Viewer} from "./component/viewer.js";
import {Thumbnails} from "./component/thumbnails.js";
import {Component} from "./component/component.js";
import {Login} from "./component/login.js";

export class Gallery extends Component{ 
    
        init() {
        this.root.innerHTML = `
                            <h1>Ma super galerie!</h1>
                            <div class="component login-component"></div>
                            <div class="component viewer-component"></div>
                            <div class="component thumbnails-component"></div>
                            
                            `;

        const viewerElt = this.root.querySelector('.viewer-component');
        const viewer = new Viewer(viewerElt);
        viewer.init();
        
        const thumbnailsElt = this.root.querySelector('.thumbnails-component');
        const thumbnails = new Thumbnails(thumbnailsElt);
        thumbnails.init();

        const loginElt = this.root.querySelector('.login-component');
        const login = new Login(loginElt);
        login.init();
    }
}
