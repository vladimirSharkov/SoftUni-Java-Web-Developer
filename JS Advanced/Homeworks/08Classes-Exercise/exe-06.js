class Company {
    constructor(departments) {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {
        class Employee {
            constructor(username, salary, position, department) {
                this.username = username;
                this.salary = Number(salary);
                this.position = position;
                this.department = department;
            }

            set username(value) {
                this._validate(value)
                this._username = username;
            }

            set salary(value) {
                if (value < 0) {
                    throw new Error('Invalid input!')
                }
                this._validate(value)
                this._salary = salary;
            }

            set position(value) {
                this._validate(value)
                this._position = position
            }

            set department(value) {
                this._validate(value)
                this._department = department
            }

            _validate(value) {
                if (value === '' || value === undefined || value === null) {
                    throw new Error('Invalid input!')
                }
            }
        }

        this.departments.push(new Employee(username, salary, position, department))

    }

    bestDepartment() {

        const container = {
            dep:(username,salary, position)
        }

        this.departments.filter(x => x._department);
        console.log(this.departments)
    }


}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

class Company {
    constructor() {
        this.departments = [];
        this.info = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department) {
            throw Error("Invalid input!");
        } else if (salary < 0) {
            throw Error("Invalid input!");
        }

        if (!this.info[department]) {
            this.info[department] = {}
        }

        this.info[department][name] = { salary, position };
        this.departments.push(name);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let result = "";
        let avgSalary = 0;
        const bestDpt = Object.keys(this.info).sort((d1, d2) => {
            let d1AvgSalary = 0;
            let d2AvgSalary = 0;

            Object.keys(this.info[d1]).forEach(e => {
                d1AvgSalary += this.info[d1][e].salary;
            });

            d1AvgSalary /= Object.keys(this.info[d1]).length;

            Object.keys(this.info[d2]).forEach(e => {
                d2AvgSalary += this.info[d2][e].salary;
            });

            d2AvgSalary /= Object.keys(this.info[d2]).length;

            const bestAvg = Math.max(d1AvgSalary, d2AvgSalary);

            if (avgSalary < bestAvg) {
                avgSalary = bestAvg;
            }

            return d2 - d1;
        })[0];

        result += `Best Department is: ${bestDpt}\nAverage salary: ${avgSalary.toFixed(2)}\n`;

        Object
            .keys(this.info[bestDpt])
            .sort((e1, e2) => {
                return this.info[bestDpt][e2].salary - this.info[bestDpt][e1].salary || e1.localeCompare(e2);
            })
            .forEach(e => result += `${e} ${this.info[bestDpt][e].salary} ${this.info[bestDpt][e].position}\n`);

        return result.trim();
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());





class Company {
    #departments;
    constructor() {
        this.#departments = [];
    }

    addEmployee(username, salary, position, department) {
        if (!username || !position || !department || !salary || salary < 0) {
            throw new Error("Invalid input!");
        }

        let newEmploy = {
            username: username,
            salary: Number(salary),
            position: position
        }

        if (!this.#departments[department]) {
            this.#departments[department] = [];
        }
        this.#departments[department].push(newEmploy);
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {
        let department = '';
        let maxSalary = 0;
        Object.entries(this.#departments).forEach(([key, value]) => {
            let salary = 0;
            value.forEach(e => {
                salary += e.salary;
            })
            salary = salary / value.length;
            if (salary > maxSalary) {
                department = key;
                maxSalary = salary;
            }
        });
        if (department != '') {
            let res = `Best Department is: ${department}\nAverage salary: ${maxSalary.toFixed(2)}\n`;
            Object.values(this.#departments[department]).sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username)).forEach(e => {
                let em = `${e.username} ${e.salary} ${e.position}\n`;
                res += em;
            })
            return res.trim();
        }
    }
}
