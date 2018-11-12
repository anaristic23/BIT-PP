class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;

    }

}

class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }

}

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }

    getSpecialization() {
        console.log(this.specialization);
    }

}

class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }

    getDepartment() {
        console.log(this.department);
    }

    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }
}


const pera = new Person("Pera", "Peric");
// console.log(pera);

const employee = new Employee("Zika", "Zikic", "programmer", 500);
// console.log(programmer);

const developer = new Developer("Mika", "Mikic", "programmer", 700, "JS");
console.log(developer);
developer.getSpecialization();

const manager = new Manager("Laza", "Lazic", "manager", 300, "sale manager");
// console.log(manager);



