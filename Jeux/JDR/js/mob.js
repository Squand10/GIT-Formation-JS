export default class Mob{
    constructor(nom, vie, force, xp, gold){
        this.nom = nom;
        this.vie = vie;
        this.force = force;
        this.xp = xp;
        this.gold = gold;
    }

    decrire(){
        return `${this.nom} a ${this.vie} pv, ${this.force} force, rapportera ${this.xp} points d'experience et ${this.gold} pièces d'or.`
    }
}