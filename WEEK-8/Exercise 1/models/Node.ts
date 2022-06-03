export default class Main<T> {
    public next: Main<T> | null = null;
    private data: T;
  
    get value(): T {
      return this.data;
    }
  
    constructor(data: T) {
      this.data = data;
    }
  }