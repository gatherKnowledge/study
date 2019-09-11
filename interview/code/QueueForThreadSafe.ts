// queue for thread safety
class QueueForThreadSafe {
  isUsable: boolean;
  private targetInput: number;
  private arr: number[];

  constructor() {
    this.isUsable = true;
    this.targetInput = 0;
    this.arr = [];
  }

  private invertKey() {
    this.isUsable != this.isUsable;
  }
  
  insert(n: number) {
    try { 
      if (!this.isUsable || this.targetInput === 10) {
        throw new Error('failed to insert');
      }
    } catch (e) { console.log(e.message); }
    this.invertKey();
    this.arr[this.targetInput] = n;
    this.targetInput++;
    this.printCurrent();
    this.invertKey();
  }

  pick() {
    try {
      if (!this.isUsable || this.targetInput === 0) {
        throw new Error('failed to pick');
      }
    } catch (e) { console.log(e.message); }
    this.invertKey();
    const picked = this.arr[0];
    this.arr[0] = 0;
    this.arrange();
    this.printCurrent();
    this.invertKey();
    return picked;
  }

  private printCurrent() {
    let arrString = '';
    for (let i = 0; i < 10; i++) {
      if (this.arr[i]) {
        arrString += `${this.arr[i]} | `;
      } else {
        arrString += `0 | `;
      }
    }
    console.log(arrString + ' < insert');
    console.log('- - - - - - - - - - - - - -');
  }

  private arrange() {
    for(let i = 0; i < this.targetInput; i++) {
      this.arr[i] = this.arr[i+1];
    }
    this.arr[this.targetInput-1] = 0;
  }
}

function test() {
  const q1 = new QueueForThreadSafe();
  q1.insert(1);
  q1.insert(2);
  q1.insert(3);
  q1.insert(4);
  q1.insert(5);
  q1.insert(6);
  q1.insert(7);
  q1.insert(8);
  q1.insert(9);
  q1.insert(10);
  console.log('pick end');
  
  console.log(q1.pick());
}

test();