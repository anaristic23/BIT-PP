function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);

    this.job = job;
    this.salary = salary;
}

function Developer(name, surname, job, salary, specialization) {

    Employee.call(this, name, surname, job, salary);

    this.specialization = specialization;
}

function Manager(name, surname, job, salary, department) {

    Employee.call(this, name, surname, job, salary);

    this.department = department;
}

var person = new Person('John', 'Marks');
var employee = new Employee('Pera', 'Peric', 'Programmer', '300');
var developer = new Developer('Zika', 'Zikic', 'Programmer', '500', 'Frontend');
var manager = new Manager('Laza', 'Lazic', 'Manager', '1000', 'Human resources');

console.log(person);
console.log(employee);
console.log(developer);
console.log(manager);

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}

Manager.prototype.changeDpartment = function (newDepartment) {
    this.department = newDepartment;
}

Employee.prototype.getData = function () {
    return this.name + ' ' + this.surname + ' ' + this.salary + ' eur';
}

Employee.prototype.getSalary = function () {
    console.log(this.salary);
}

Employee.prototype.increaseSalary = function () {
    var lastSalary = parseFloat(this.salary);
    this.salary = (lastSalary + (lastSalary / 100 * 10) + 'eur');

}

employee.increaseSalary();
console.log(employee.salary);