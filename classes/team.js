export class Team{
    constructor(teamName){
        this.monsters = [];
        this.teamName = teamName;
    }
    getMonsters(){
        return this.monsters;
    }
    setMonsters(monsters){
        this.monsters = monsters;
    }
    setTeamName(teamName){
        this.teamName = teamName;
    }
    addMonster(monster){
        if(this.monsters.length < 6){
            this.monsters.push(monster);
        }
        else{
            console.log("your team is full");
        }
    }

}