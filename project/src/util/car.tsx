export class Car {
    static staticProp = 'xxxx'
    static createCar(): Car {
      return new Car()
    } 
  
    name: string = 'aaa'
    run = () => {
  
    }
  }