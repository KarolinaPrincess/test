const Player = (nam,level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getNam = () => nam;
    const die = () => {
        //mostrar algo
    };
    const damage = x => {
        health -= x;
        if (health <= 0) {
            die();
        }
    }
    const attack = enemy => {
        if (level < enemy.getLevel) {
            damage(1);
            console.log(`${enemy.getName()} has damage ${nam}`);
        }
        if(level >= enemy.getLevel()){
            enemy.damage(1);
            console.log(`${nam} has damage ${enemy.getNam()}`);
        }
    };
    return{attack,damage,getLevel,getNam};
};

const carlos = Player('carlos',10);
const enemigo = Player('Saitama',5);

carlos.attack(enemigo);
//enemigo.attack(carlos);

