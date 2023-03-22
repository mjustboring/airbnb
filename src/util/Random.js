export default class Random {

  constructor(n) {
        
    this.m = 0;
    this.a = [];
    this.n = Math.floor(n/2);
        
    for (let i = 0; i < n; ++i) {
      this.a.push(i);
    }
  }
    
  static init(n) {
    const random = new Random(n);
    return () => {
      return random._use();
    }
  }
    
  _use() {

    let x = this.n + Math.
      floor(Math.random() * this.n);
    
    [this.a[x], this.a[this.m]]
      = [this.a[this.m], this.a[x]];
    
    x = this.a[this.m++];
    this.m %= this.n;
    
    return x;
  }
}