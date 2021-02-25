function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    let divP = document.querySelector('#bestRestaurant>p')
    let divWorkers = document.querySelector('#workers>p');

    function onClick() {
        let inputText = document.querySelector('textarea').value;

        let restaurant = {};

        let strArr = JSON.parse(inputText)

        strArr.forEach(entry => {
            let tokens = entry.split(' - ');
            let restaurantName = tokens[0];
            let workers = tokens[1].split(', ')
            let worker = [];
            for (const worker1 of workers) {
                let tokenWor = worker1.split(' ')
                let name = tokenWor[0];
                let salary = Number(tokenWor[1]);
                worker.push({name, salary});
            }
            if (restaurant[restaurantName]) {
                worker = worker.concat(restaurant[restaurantName].worker);
            }
            worker.sort((a, b) => b.salary - a.salary);
            let bestSalary = worker[0].salary;
            let avgSalary = worker.reduce((acc, cur) => {
                return acc + cur.salary / worker.length;
            }, 0)

            restaurant[restaurantName] = {
                worker, bestSalary, avgSalary
            }
        })
        let bestRestaurantSalary = 0;
        let bestRestaurant = undefined;

        for (const name in restaurant) {
            if (restaurant[name].avgSalary > bestRestaurantSalary) {
                bestRestaurantSalary = restaurant[name].avgSalary
                bestRestaurant = {
                    name,
                    workers: restaurant[name].worker,
                    bestSalary: restaurant[name].bestSalary,
                    avgSalary: restaurant[name].avgSalary
                }
            }
        }
        divP.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`

        let result = [];
        bestRestaurant.workers.forEach(worker => {
            result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
        })
        divWorkers.textContent = result.join(' ');
    }
}