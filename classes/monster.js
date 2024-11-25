export class Monster{
    constructor(monsterName, health, attack){
        this.monsterName = monsterName;
        this.health = health;
        this.attack = attack;
        this.moveList = [];

    }
    setMoveList(moveList){
        
        this.moveList = moveList;
    }
    addMove(move){
        if(this.moveList.length < 4){
            this.moveList.push(move);
        }
        else{
            return "Already have 4 moves"
        }
    }
    changeMove(){
        
    }
    setHealth(health){
        this.health = health;
    }
    setAttack(attack){
        this.attack = attack;
    }
}