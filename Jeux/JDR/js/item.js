import dice from './dice.js';
const generator1 = ['en bois flotté', 'en collier de nouilles', 'arracheur de dents', 'en plastique sale','mangeur de morts', 'baiseur de maman', 'en vieille glaise', 'en jambon braisé' ,'en meringue rose', 'en mousse', 'eclateur de boutons'];
const generator2 = ['de la marmelade', 'de la catapulte', 'de la grand-mère', 'de la grande muraille', 'du tout puissant Mortisse', 'des anciens', 'de la gratitude éternelle', 'de la sandale maudite', 'du courroux vengeur', 'de Hitler', 'de Mussolini' ];

export default class Item{



    constructor(type, armor, force, agi, inte){
        this.type = type;
        this.armor = armor*dice(3);
        this.force = force*dice(4);
        this.agi = agi*dice(4);
        this.inte = inte*dice(4);
        this.nom = this.type + ' ' + generator1[dice(generator1.length-1)] + ' ' + generator2[dice(generator2.length-1)];
}

decrire(){
        return`le ${this.nom} a ${this.armor} armure, ${this.force} force, ${this.agi} agilité et ${this.inte} intelligence`;
}






}

