// 동적으로 해결 전략을 변경할 수 있는 스타일
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

  constructor(skin: string) {
    this.skin = skin;
  }

  setAttackable(attackAble: Attakable) {
    this.attackAble = attackAble;
    this.weapon = this.attackAble.weapon;
  }

  activeAttack(): void {
    if (this.attackAble) {
      this.attackAble.attack();
    }
  }
}

class OrcNoArm extends Monster {
  constructor(s: string = 'green') {
    super(s);
    const at: Attakable = new NoActionAttack('arm');
    this.setAttackable(at);
  }
}

const noArmOrc = new OrcNoArm();
noArmOrc.activeAttack();
noArmOrc.setAttackable(new ShotAttack('bow'));
noArmOrc.activeAttack();
