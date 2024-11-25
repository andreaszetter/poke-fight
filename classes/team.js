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
        this.monsters.push(monster)
    }
}