// console.log("Hello World");

let trainer1 = {
	name: "Lance",
	gender: "male",
	region: "Johto",
	commend: function(target) {
		console.log(`Lance: I now see why you're ${target.region}'s champion.\n`);
	},
	congrats: function(target) {
		console.log(`Lance: I did not expect this. A worthy opponent indeed! Congratulations ${target.name}.`)
	}

}

let trainer2 = {
	name: "Cynthia",
	gender: "female",
	region: "Sinnoh",
	praise: function(target) {
		console.log(`Cynthia: As expected in ${target.region}'s champion!\n`)
	}
}

// POKEMON CONSTRUCTOR
function Pokemon(name, hp, atk, def, level, exp, moves) {
	this.name = name;
	this.hp = 2 * hp;
	this.atk = atk;
	this.def = def;
	this.level = level;
	this.exp = exp;
	this.moves = moves;

	this.used = function(moveIndex, target) {
        let move = this.moves[moveIndex];
        console.log(`${this.name} used ${move.name}!`);

    	let damage = Math.floor((this.atk * move.power) / target.def);
    	target.hp -= damage;
    	if (target.hp <= 0) {
    		target.hp = 0;
    		console.log(`${target.name}'s health is now reduced to ${target.hp}.\n`);
    		console.log(`${target.name} has fainted.`)

    		this.exp += 100;
    		// console.log(this.exp);
    	} else {
    		console.log(`${target.name}'s health is now reduced to ${target.hp}.\n`);
    	}

    	if (this.exp >= 100) {
    		this.level += 1;
    		console.log(`${this.name} has leveled up to ${this.level}\n`);
    		this.exp = 0;
		}
    } 
}

// MOVE CONSTRUCTOR
function Move(name, power) {
	this.name = name;
	this.power = power;
}

// MOVESETS
// LANCE's
let dragonClaw = new Move("Dragon Claw", 80);
let thunder = new Move("Thunder", 110);
let waterPulse = new Move("Water Pulse", 80);
let hydroCannon = new Move("Hydro Cannon", 110);
let movesLance = [dragonClaw, thunder, waterPulse, hydroCannon];
// CYNTHIA's
let iceBeam = new Move("Ice Beam", 90);
let aquaTail = new Move("Aqua Tail", 90);
let earthquake = new Move("Earthquake", 100);
let fireBlast = new Move("Fire Blast", 110);
let movesCynthia = [iceBeam, aquaTail, earthquake, fireBlast];

// POKEMONS
// LANCE POKEMONS
let t1pkmn1 = new Pokemon("Dragonite", 91, 134, 100, 45, 0, movesLance);
let t1pkmn2 = new Pokemon("Kingdra", 92, 125, 90, 43, 0, movesLance);

// CYNTHIA POKEMONS
let t2pkmn1 = new Pokemon("Milotic", 95, 100, 125, 45, 0, movesCynthia);
let t2pkmn2 = new Pokemon("Garchomp", 108, 140, 115, 46, 0, movesCynthia);


function displayStats(target) {
	console.log(`Name: ${target.name}`);
	console.log(`Health: ${target.hp}`);
	console.log(`Attack: ${target.atk}`);
	console.log(`Defense: ${target.def}`);
	console.log(`Level: ${target.level}\n`);
}

// DIALOGUE
console.log(`\n${trainer1.region}'s champion, ${trainer1.name} was challenged by ${trainer2.region}'s champion, ${trainer2.name}!`);
console.log("*music intensifies*\n");

console.log(`${trainer1.name} sent out ${t1pkmn1.name}.`);
displayStats(t1pkmn1);

console.log(`${trainer2.name} sent out ${t2pkmn1.name}.`);
displayStats(t2pkmn1);

t2pkmn1.used(0, t1pkmn1);
t1pkmn1.used(0, t2pkmn1);
t2pkmn1.used(1, t1pkmn1);
t1pkmn1.used(1, t2pkmn1);

trainer2.praise(trainer1);

console.log(`${trainer2.name} sent out ${t2pkmn2.name}.`);
displayStats(t2pkmn2);

t2pkmn2.used(3, t1pkmn1);
trainer1.commend(trainer2);

console.log(`${trainer1.name} sent out ${t1pkmn2.name}.`);
displayStats(t1pkmn2);

t1pkmn2.used(2, t2pkmn2);
t2pkmn2.used(2, t1pkmn2);
t1pkmn2.used(3, t2pkmn2);
t2pkmn2.used(2, t1pkmn2);

trainer1.congrats(trainer2);
console.log(`${trainer2.name} won the Pokemon Battle!!!\n`);
console.log(`The End~`);