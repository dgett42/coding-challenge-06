// Step 2
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

// Step 3

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    
    describe() {
        return `${super.describe()} They manage a team of ${this.teamSize} people.`;
    }
}

// Step 4 Step 4: Create a few sample employees and managers using new Employee() and new Manager().

const emp1 = new Employee("Alice", "Engineering");
const emp2 = new Employee("Bob", "Marketing");
const mgr1 = new Manager("Charlie", "Engineering", 5);
const mgr2 = new Manager("Diana", "Marketing", 3);

console.log(emp1.describe());
console.log(emp2.describe());
console.log(mgr1.describe());
console.log(mgr2.describe());

