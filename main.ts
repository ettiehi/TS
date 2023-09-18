

**Exercise 1: Complex Custom Type Guard**

type Vehicle = {
  type: 'car' | 'truck' | 'motorcycle' | 'bicycle';
  wheels: number;
};

function isVehicle(obj: any): obj is Vehicle {
  return (
    obj &&
    (obj.type === 'car' ||
      obj.type === 'truck' ||
      obj.type === 'motorcycle' ||
      obj.type === 'bicycle') &&
    typeof obj.wheels === 'number'
  );
}

**Exercise 2: Complex Custom Type Guard**

function isError(obj: any): obj is Error {
  return (
    obj &&
    typeof obj.name === 'string' &&
    typeof obj.message === 'string' &&
    (typeof obj.stack === 'string' || typeof obj.stack === 'undefined')
  );
}

**Exercise 3: Static Class**

class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

**Exercize 4**

interface Serializable {
  serialize(): string;
}

class Container<T extends Serializable> {
  private item: T;

  constructor(item: T) {
    this.item = item;
  }

  serializeItem(): string {
    return this.item.serialize();
  }
}

class Employee implements Serializable {
  constructor(private name: string, private education: string) {}

  serialize(): string {
    return JSON.stringify({ name: this.name, education: this.education });
  }
}

// Testing the implementation
const employee = new Employee('John Doe', 'Bachelor’s degree');
const container = new Container(employee);

console.log(container.serializeItem()); 
// Outputs: "{\"name\":\"John Doe\",\"education\":\"Bachelor’s degree\"}"

