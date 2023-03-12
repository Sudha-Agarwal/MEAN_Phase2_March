var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        Employee._headcount++;
    }
    Object.defineProperty(Employee, "headcount", {
        get: function () {
            return Employee._headcount;
        },
        enumerable: false,
        configurable: true
    });
    Employee.getHeadcount = function () {
        return Employee._headcount;
    };
    Employee._headcount = 0;
    return Employee;
}());
var emp1 = new Employee("ABC", "DEF");
var emp2 = new Employee("ABC1", "DEF1");
console.log(Employee.headcount);
