export class Move{
    constructor(moveName, ammo, damage, status){
        this.moveName = moveName;
        this.ammo = ammo;
        this.damage = damage;
        this.status = status;
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
    
    setStatus(status){
        this.status = status;
    }
}