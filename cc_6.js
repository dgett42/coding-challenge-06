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

// Step 5: Create a class called Company with a property employees (an array). Add methods: addEmployee(employee) – adds an employee to the array.

class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        console.log("Company Employees:");
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }
}

// Step 6: Instantiate a Company object, add both employee and manager instances, and call listEmployees().

const myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);
myCompany.listEmployees();





