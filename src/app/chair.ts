export class Chair {
  constructor(name: string, legs: number, id?: string){
    this.id = id;
    this.name = name;
    this.legs = legs;
  }
  name: string;
  legs: number;
  id: string;
}
