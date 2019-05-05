/*
1. 공격방법이 다른 오크가 추가 되는 경우.
2. 새로운 공격방법을 가진 오크와 동일한 공격방법을 가진 오크가를 추가하는 경우.
*/

// @ts-ignore
abstract class Monster {
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

class OrcNoArm extends Monster {
  constructor(s: string = 'green', w: string = 'arm') {
    super(s, w);
  }
}

class OrcArcher extends Monster {
  constructor(s: string = 'green', w: string = 'arm') {
    super(s, w);
  }
  // 재사용성 감소
  attack() {
    console.log(`${this.weapon} shot!`);
  }
}

class OrcGunner extends Monster {
  constructor(s: string = 'green', w: string = 'arm') {
    super(s, w);
  }
  // OrcArcher와 동일한 
  attack() {
    console.log(`${this.weapon} shot!`);
  }
}

const orcWithNoArm = new OrcNoArm();
orcWithNoArm.attack();
const orcArcher = new OrcArcher();
orcArcher.attack();
const orcGunner = new OrcGunner();
orcArcher.attack();