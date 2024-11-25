export class Move{
    constructor(moveName, ammo, damage, element){
        this.moveName = moveName;
        this.ammo = ammo;
        this.damage = damage;
        this.element = element;
    }
    setMoveName(moveName){
        this.moveName = moveName;
    }
    setAmmo(ammo){
        this.ammo = ammo;
    }
    setDamage(damage){
        this.damage = damage;
    }
    setElement(element){
        this.element = element;
    }
}