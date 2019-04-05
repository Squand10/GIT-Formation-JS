export class User {
    constructor(name){
        this._name = name;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}

