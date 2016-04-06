var userHP = 1000000; //My gaw!
var randomNum;
var myAudio;
var number =  prompt("Please enter your number:", "666-666-6666");
var name = prompt("Please enter your name", "Harry Potter");
var enemyHP = 999999999999999999999999999999999999999999999999999999; //Myholyf**ingJesusOurHolyLordAndSaviorWhatIsThisMonstrosityAndIAmFreakingOut!
startGame();

function startGame() {
document.body.style.backgroundColor = "blue";
myAudio = new Audio('battlemusic.mp3');
myAudio.loop = true;
myAudio.play();
myAudio.volume = 0.1;
alert("You wanted to talk to Arceus but it didn't feel like talking, it only wanted to fight....");
}
function healthText() {
        document.getElementById("user").innerHTML = userHP;    
}
function healthText2() {
        document.getElementById("enemy").innerHTML = enemyHP;
}
function endFight() {
    mathRandomizer();
    var useNumber = randomNum;
    $("#bodySlam").hide();
    $("#shusuiHanduken").hide();
    $("#RetroTer0").hide();
    $("#robertM.Huggiston").hide();
    if (enemyHP < 0) {
        win();
    }
    if (useNumber == 1) { //Flail is the best Pokemon Move. Period.
        var healthLost1 = userHP - Math.floor(Math.random() * (1000)) + 1;
        userHP == healthLost1;
        enemyHP == enemyHP - 1;
        alert("Arceus used Flail!");
    }
    else if (useNumber == 2) { //Knock-off (Pun) of Judgement... Duh.
        var healthLost2 = userHP - 66666;
        userHP = healthLost2;
        alert("Arceus used Ultra Judgement!!!!!!!!!:0");
    }
    else if (useNumber == 3) { //Don't you just love to not have air to breathe?
        var healthLost3 = userHP - 100000;
        userHP = healthLost3;
        enemyHP = enemyHP + 1;
        alert("Arcues sucked all of the oxygen out of Earth!");
        
    }
    else if (useNumber == 4) { //Gordon Ramsay!!!!! :3@
         var healthLost4 = userHP - Math.floor(Math.random() * (100)) - 100000;
         userHP = healthLost4;
         alert("Did you have a nice sushi dinner with Chef Ramsay?");
    }
    if (userHP < 0) {
        lose();
    }
    healthText();
    healthText2();
    $("#bodySlam").show();
    $("#shusuiHanduken").show();
    $("#RetroTer0").show();
    $("robertM.Huggiston").show();
}

function userAttackDMG1() { //we obviously need a simple Pokemon move to make OP and to actually have it as a pokemon parady
    var healthLost5 = enemyHP - Math.floor(Math.random() * (99999999999999999)) + 999;
    enemyHP = healthLost5;
    healthText2;
    alert("Why did you want to touch Arceus, the f**ing god of ALL POKEMONS!?");
    endFight();
}

function userAttackDMG2() { //Brave Frontier and Dragon Ball Z.... IDK how to respond
    document.getElementById('explosion').style.visibility='visible';
    var audio2;
    audio2 = new Audio('SonicBoom.mp3');
    audio2.play();
    var healthLost6 = enemyHP - Math.floor(Math.random() * (666)) + 66;
    enemyHP = healthLost6;        
    healthText2;
    setTimeout(alert, 200, "Handwekun!!!!!!!!!!!!!!");
    document.getElementById('explosion').style.visibility='hidden';
    setTimeout(endFight, 300);
}

function userAttackDMG3() { //Ter0, made by my friends Arnov, Seth, Tyler, and Micheal! Go play!
    document.getElementById('say').style.visibility='visible';
    var audio3;
    myAudio.volume = .05;
    audio3 = new Audio('youdontsay.mp3');
    audio3.play();
    var healthLost5 = enemyHP - Math.floor(Math.random() * (999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)) + 9999999999999999999999999999999999999999;
    enemyHP = healthLost5;
    healthText2;
    alert("As Stated from de ALMIGHTY BATMAN DE ARNOV: Your memes ain't spicy enough ");
    if (enemyHP < 0) {
    alert("But Arceus wouldn't give up... +1000000000 HP!!");
    enemyHP = 1000000000;
    }
    document.getElementById('say').style.visibility='hidden';   
    setTimeout(endFight, 300);
    myAudio.volume = .1;
}
function userAttackDMG4() { //A Spanish project of creating a school, this is an akward decision
     var healthLost6 = enemyHP - Math.floor(Math.random() * (3333333333333333)) + 333333;
     enemyHP = healthLost6;         
     userHP = userHP + 100;
     healthText2;
     alert("Robert M. Hugginston gives his love... Although he needs breathmints XOXO Flowey the Flower");
     endFight();
}

function win() {
    alert("I am sorry, Prodigy... But Arceus is too strong for you. You should practice with Pokemon Showdown.");
     setTimeout($(location).attr, 10000, 'href', 'http://play.pokemonshowdown.com');
     myAudio.loop = false;
}

function lose() {
    alert("I am sorry, Prodigy... But Arceus is too strong for you. You should practice with Pokemon Showdown.");
    setTimeout($(location).attr, 10000, 'href', 'http://play.pokemonshowdown.com');
}

function mathRandomizer() {
   randomNum = Math.floor(Math.random() * (3)) + 1;
   return false;
}

function instaWin() {
    win();
}