export default class Perso {
    constructor(lvl, nom, vie, armor, force, agi, inte){
        this.lvl = lvl;
        this.nom = nom;
        this.vie = vie;
        this.armor = armor;
        this.force = force;
        this.agi = agi;
        this.inte = inte;
        this.xp = 0;
        this.gold = 0;
}

decrire(){
        return `${this.nom} est de niveau ${this.lvl} a ${this.vie} vie, ${this.armor} d'armure, ${this.force} force, ${this.agi} agilité, ${this.inte} intelligence, ${this.xp} points d'expérience et ${this.gold} pièces d'or`;
}

attaquer(cible){
        console.log(`${this.nom} attaque ${cible.nom}`);
        cible.vie -= this.force;
    if (cible.vie <= 0){
            this.gold += cible.gold;
            this.xp += cible.xp;
            console.log(`${cible.nom} a été vaincu`);

        } else {
        console.log(`${cible.nom} a subit ${this.force} points de dégats`)
    }
}

equip(item){
        console.log(`${this.nom} a equipé ${item.nom}`);
        this.armor += item.armor;
        this.force += item.force;
        this.agi += item.agi;
        this.inte += item.inte;
}

}