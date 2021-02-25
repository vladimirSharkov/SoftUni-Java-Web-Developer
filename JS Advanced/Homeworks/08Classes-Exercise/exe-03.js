function solve(arr, str) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const container = []

    for (let arrElement of arr) {
        let [destination, price, status] = arrElement.split('|')

        container.push(new Ticket(destination, price, status));

    }

    const comparator = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a.price - b.price,
        status: (a, b) => a.status.localeCompare(b.status)
    }

    return container.sort(comparator[str])

}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|available',
        'Philadelphia|132.20|departed',
        'Chicago|140.20|available',
        'Dallas|144.60|sold',
        'New York City|206.20|sold',
        'New York City|240.20|departed',
        'New York City|305.20|departed'],
    'destination'
))