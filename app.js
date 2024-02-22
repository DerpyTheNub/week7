const heroNameArea = document.querySelector("#fighter");
const heroWeaponArea = document.querySelector("#weaponFighter");
const heroDmgArea = document.querySelector("#damageFighter");
const heroStatRand = document.querySelector("#fighterRand");
const villainNameArea = document.querySelector("#enemy");
const villainWeaponArea = document.querySelector("#weaponEnemy");
const villainDmgArea = document.querySelector("#damageEnemy");
const fightBtn = document.querySelector("#fight");
const figherBox = document.querySelector(".fighter");
const enemyBox = document.querySelector(".enemy");
const feedbackArea = document.querySelector(".feedbackArea");

// Arrays
const weapons = ["sword", "katana", "lightsaber", "large hammer", "skateboard", "slingshot", "railgun", "shurikens", "rocket launcher", "staff", "landmine", "boombox"];
const heroes = ["Aleksandr", "Sergei", "Vladimir", "Andrei", "Martin", "Aleksei", "Andres", "Dmitri", "Igor", "Toomas", "Viktor", "Margus", "Roman", "Jüri", "Oleg", "Kristjan", "Maksim", "Rein", "Urmas", "Aivar", "Alexander", "Marko", "Jaan", "Artur", "Nikolai", "Ivan", "Tarmo", "Peeter", "Jevgeni", "Indrek", "Priit", "Sander", "Juri", "Meelis", "Mihhail", "Aleksander", "Nikita", "Andrus", "Raivo", "Jaanus", "Pavel", "Mati", "Rasmus", "Siim", "Valeri", "Marek", "Mihkel", "Oliver", "Artjom", "Tiit"];
const villains = ["Tõnu", "Sergey", "Anton", "Markus", "Tanel", "Karl", "Oleksandr", "Madis", "Robert", "Eduard", "Taavi", "Janek", "Lauri", "Mart", "Kaspar", "Mark", "Kevin", "Daniil", "Erik", "Kalev", "Kirill", "Vadim", "Kaido", "Raul", "Ants", "Vladislav", "Vitali", "Konstantin", "Kalle", "Ilja", "Anatoli", "Vello", "Silver", "Kristo", "Daniel", "Henri", "Aare", "Ain", "Robin", "Vjatšeslav", "Stanislav", "Tõnis", "Toivo", "Denis", "Arvo", "Lembit", "Enn", "Rainer", "Jaak", "Oskar"];

// // Random name
// const randHero = heroes[Math.floor(Math.random() * heroes.length)];
// const randVillain = villains[Math.floor(Math.random() * villains.length)];
// // Random weapon
// const heroWeapon = weapons[Math.floor(Math.random() * weapons.length)];
// const villainWeapon = weapons[Math.floor(Math.random() * weapons.length)];
// // Random damage
// const heroDmg = Math.floor(Math.random() * 10) * (heroWeapon.length + randHero.length);
// const villainDmg = Math.floor(Math.random() * 10) * (villainWeapon.length + randVillain.length);

var heroDmg = 0;

heroStatRand.addEventListener("click", () => {
    const randHero = heroes[Math.floor(Math.random() * heroes.length)];
    const heroWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    heroDmg = Math.floor((Math.random() + 1) * 5) * (heroWeapon.length + randHero.length);
    
    heroNameArea.innerHTML = randHero;
    heroWeaponArea.innerHTML = `Weapon: ${heroWeapon}`;
    heroDmgArea.innerHTML = `Damage: ${heroDmg}`;

    setTimeout(() => figherBox.style.transition = "0.25s", 0);
    figherBox.style.backgroundColor = "rgba(50, 50, 50, 0.333)";
    setTimeout(() => figherBox.style.backgroundColor = "rgba(100, 100, 100, 0.333)", 100);
    figherBox.style.transition = "0s";
});

fightBtn.addEventListener("click", () => {
    if(heroNameArea.innerHTML === "???") {
        console.log("Hero area can't be empty!");
        feedbackArea.innerHTML = "You can't fight without a hero!";
        return;
    };
    
    const randVillain = villains[Math.floor(Math.random() * villains.length)];
    const villainWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    const villainDmg = Math.floor((Math.random() + 1) * 5) * (villainWeapon.length + randVillain.length);

    villainNameArea.innerHTML = randVillain;
    villainWeaponArea.innerHTML = `Weapon: ${villainWeapon}`;
    villainDmgArea.innerHTML = `Damage: ${villainDmg}`;

    if(heroDmg > villainDmg) {
        feedbackArea.innerHTML = `You win!`;
        setTimeout(() => figherBox.style.transition = "0.25s", 0);
        setTimeout(() => enemyBox.style.transition = "0.25s", 0);
        figherBox.style.backgroundColor = "rgba(50, 250, 50, 0.333)";
        enemyBox.style.backgroundColor = "rgba(250, 50, 50, 0.333)";
        setTimeout(() => figherBox.style.backgroundColor = "rgba(100, 100, 100, 0.333)", 200);
        setTimeout(() => enemyBox.style.backgroundColor = "rgba(100, 100, 100, 0.333)", 200);
        figherBox.style.transition = "0s";
        enemyBox.style.transition = "0s";
    } else {
        feedbackArea.innerHTML = `You lose!`;
        setTimeout(() => figherBox.style.transition = "0.25s", 0);
        setTimeout(() => enemyBox.style.transition = "0.25s", 0);
        figherBox.style.backgroundColor = "rgba(250, 50, 50, 0.333)";
        enemyBox.style.backgroundColor = "rgba(50, 250, 50, 0.333)";
        setTimeout(() => figherBox.style.backgroundColor = "rgba(100, 100, 100, 0.333)", 200);
        setTimeout(() => enemyBox.style.backgroundColor = "rgba(100, 100, 100, 0.333)", 200);
        figherBox.style.transition = "0s";
        enemyBox.style.transition = "0s";
    };
});