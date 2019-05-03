/*
일반적인 상황 -> 공통을 기능을 꽁유하는 상황1
OrcArcher, OrcSpear
*/

// @ts-ignore
class Monster {
  skin: string;
  weapon: string;
  constructor(skin: string, weapon: string) {
    this.skin = skin;
    this.weapon = weapon;
  }
  attack(): void {
    console.log(`${this.weapon} swing!`);
  }
}

class Orc extends Monster {
  constructor(s: string = 'green', w: string = 'arm') {
    super(s, w);
  }
}

class Troll extends Monster {
  constructor(s: string = 'blue', w: string = 'spear') {
    super(s, w);
  }
}

const orc = new Orc();
orc.attack();

const troll = new Troll();
troll.attack();
