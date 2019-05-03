/*
행위를 객체화
TODO: Monster-> Orc에 대한 관계 설정 잘못 됐음 수정 필요
*/
interface Attakable { weapon: string, attack: Function; };

class SwingAttack implements Attakable {
  weapon: string;
  constructor(weapon: string) {
    this.weapon = weapon;
  }
  attack(): void {
    this.swing();
  }
  swing(): void {
    console.log(`${this.weapon} swing!`); 
  }
}

class ShotAttack implements Attakable {
  weapon: string;
  constructor(weapon: string) {
    this.weapon = weapon;
  }
  attack(): void {
    this.shot();
  }
  shot(): void {
    console.log(`${this.weapon} shot!`); 
  }
}

class NoActionAttack implements Attakable {
  weapon: string;
  constructor(weapon: string) {
    this.weapon = weapon;
  }
  attack(): void {
    this.shot();
  }
  shot(): void {
    console.log(`${this.weapon} but nothing!`); 
  }
}

class Monster {
  skin: string;
  weapon: string;
  attackAble: Attakable;

  constructor(skin: string, attackAble: Attakable) {
    this.skin = skin;
    this.attackAble = attackAble;
    this.weapon = this.attackAble.weapon;
  }

  // Monster범주에 속하는 모든 것들의 공격은 activeAttack으로 통일
  activeAttack(): void {
    this.attackAble.attack();
  }
}

class OrcNoArm extends Monster {
  constructor(s: string = 'green', w: string = 'arm') {
    const at: Attakable = new NoActionAttack('arm');
    super(s, at);
  }
}

class OrcArcher extends Monster {
  constructor() {
    const attackAble = new ShotAttack('arm');
    super('green', attackAble);
  }
}

class OrcGunner extends Monster {
  constructor() {
    const attackAble = new ShotAttack('arm');
    super('green', attackAble);
  }
}

const noArmOrc = new OrcNoArm();
noArmOrc.activeAttack();
const orcArcher = new OrcArcher();
orcArcher.activeAttack();
const orcGunner = new OrcGunner();
orcGunner.activeAttack();