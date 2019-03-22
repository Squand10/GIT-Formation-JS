import {Component} from "./component.js"

export class Login extends Component {

    init() {
        this.root.innerHTML = `
                            <form>
                                <div>
                                    <label for="username"> Nom Utilisateur</label>
                                    <input type="text" id="username" name="username">
                                </div>
                                <div>
                                    <label for="password"> Mot de passe</label>
                                    <input type="password" id="password" name="password">
                                </div>
                                <button>Se connecter</button>
                            </form>
                            `

        this.root.querySelector('form').addEventListener('submit', function(event){
        event.preventDefault();

        const data = {
            username: this[0].value,
            password: this[1].value
        };
        console.log(data);

        fetch('login', {
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                contentType: 'application/json'
            }
        })
        })
    }
}