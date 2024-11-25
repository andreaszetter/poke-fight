import { Monster } from "../classes/monster.js";
import { Team } from "../classes/team.js";
import { Move } from "../classes/move.js";

const renderBtn = document.getElementById("renderBtn");
const teamsContainer = document.getElementById("teamsContainer");

const nameList = ["abb", "beb", "geb", "fin", "gob", "sneb", "sol"];
const moveNameList = ["slash", "tackle", "punch", "hit", "flail", "shoot"];
const elementList = ["water", "earth", "lightning", "fire"];

const team1 = new Team("team1");
const team2 = new Team("team2");
const teams = [];

addTeam(team1);
addTeam(team2);

addRandomMonster(team1);
addRandomMonster(team2);


console.log(team1,team2);

renderBtn.addEventListener("click", ()=>{
    generateRandomMoveset(team1);
    renderTeams();
})

function randomInt(max){
    return Math.floor(Math.random() * max);
}

function addTeam(team){
    const teamContainer = document.createElement("div");
    const teamText = document.createElement("p");

    teamText.innerText = team.teamName;

    teamContainer.appendChild(teamText);

    teamsContainer.appendChild(teamContainer);
    teams.push(team);
    console.log("added team", team);
}
function addRandomMonster(team){
    const monster = new Monster(nameList[Math.floor(Math.random()*nameList.length)], randomInt(100), randomInt(100),elementList[Math.floor(Math.random()*elementList.length)])
    team.addMonster(monster);
    console.log(monster);
}
function addRandomMove(monster){
    const move = new Move(moveNameList[Math.floor(Math.random()*moveNameList.length)], randomInt(20), randomInt(50), elementList[Math.floor(Math.random()*elementList.length)])
    monster.addMove(move)
}
function renderTeams(){
    teamsContainer.innerHTML = "";
    teams.forEach((team)=>{
        const teamContainer = document.createElement("div");
        const teamText = document.createElement("p");

        teamText.innerText = team.teamName;

        teamContainer.appendChild(teamText);
        teamContainer.setAttribute("class", "teamContainer");
       

        team.monsters.forEach((monster)=>{
            const monsterName = monster.monsterName;
            const health = monster.health;
            const attack = monster.attack;
            const moveList = monster.moveList;
            const element = monster.element;

            const monsterContainer = document.createElement("div");
            const moveListContainer = document.createElement("div");
            const statContainer = document.createElement("div");

            monsterContainer.setAttribute("class", "monserContainer");
            moveListContainer.setAttribute("class", "moveListContainer");
            statContainer.setAttribute("class", "statContainer");

            const nameText = document.createElement("h2");
            const healthText = document.createElement("p");
            const attackText = document.createElement("p");
            const elementText = document.createElement("p");

            nameText.innerText = monsterName;
            healthText.innerText = health;
            attackText.innerText = attack;
            elementText.innerText = element;

            if(moveList.length > 0){
                moveList.forEach((move)=>{
                    const moveContainer = document.createElement("div");
                    const moveName = document.createElement("p");
                    const damageText = document.createElement("p");
                    const ammoText = document.createElement("p");
                    const elementText = document.createElement("p");
                    
                    moveContainer.setAttribute("class", "moveContainer");

                    moveName.innerText = move.moveName;
                    damageText.innerText = move.damage;
                    ammoText.innerText = move.ammo;
                    elementText.innerText = move.element;
                    
                    moveContainer.appendChild(moveName);
                    moveContainer.appendChild(damageText);
                    moveContainer.appendChild(ammoText);
                    moveContainer.appendChild(elementText);
                    moveListContainer.appendChild(moveContainer);
                });
            }
            else{
                const noMovesText = "This monster has no moves";
                const noMoves = document.createElement("p");
                noMoves.innerText = noMovesText;
                moveListContainer.appendChild(noMoves);
            }
            
            
            statContainer.appendChild(healthText);
            statContainer.appendChild(attackText);
            statContainer.appendChild(elementText);

            monsterContainer.appendChild(nameText);
            monsterContainer.appendChild(statContainer);
            monsterContainer.appendChild(moveListContainer);
            teamContainer.appendChild(monsterContainer);
            
        });
        teamsContainer.appendChild(teamContainer);
    });
    
}
function generateRandomMoveset(team){
    team.monsters.forEach((monster)=>{
        addRandomMove(monster);
        addRandomMove(monster);
        addRandomMove(monster);
        addRandomMove(monster);
    });
}