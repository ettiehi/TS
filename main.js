
class Container {
    constructor(item) {
        this.item = item;
    }
    serializeItem() {
        return this.item.serialize();
    }
}

class Employee {
    constructor(name, education) {
        this.name = name;
        this.education = education;
    }
    serialize() {
        return JSON.stringify({ name: this.name, education: this.education });
    }
}

function serializeEmployee() {
    const name = document.getElementById('name').value;
    const education = document.getElementById('education').value;
    const employee = new Employee(name, education);
    const container = new Container(employee);
    document.getElementById('output').innerText = container.serializeItem();
}
