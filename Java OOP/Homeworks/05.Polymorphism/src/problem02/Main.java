package problem02;


import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] carInfo = scanner.nextLine().split("\\s+");
        String[] truckInfo = scanner.nextLine().split("\\s+");
        String[] busInfo = scanner.nextLine().split("\\s+");

        Car car = new Car(Double.parseDouble(carInfo[1]), Double.parseDouble(carInfo[2]), Double.parseDouble(carInfo[3]));
        Truck truck = new Truck(Double.parseDouble(truckInfo[1]), Double.parseDouble(truckInfo[2]),Double.parseDouble(truckInfo[3]));
        Bus bus = new Bus(Double.parseDouble(busInfo[1]), Double.parseDouble(busInfo[2]),Double.parseDouble(busInfo[3]));

        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < n; i++) {
            String[] tokens = scanner.nextLine().split("\\s+");
            switch (tokens[0]) {
                case "Drive":
                    if (tokens[1].equals("Car")) {
                        System.out.println(car.driving(Double.parseDouble(tokens[2])));
                    } else if (tokens[1].equals("Truck")){
                        System.out.println(truck.driving(Double.parseDouble(tokens[2])));
                    }else {
                        System.out.println(bus.driving(Double.parseDouble(tokens[2])));
                    }
                    break;
                case "Refuel":
                    double liters = Double.parseDouble(tokens[2]);
                    if (tokens[1].equals("Car")) {
                        car.refueling(liters);
                    } else if (tokens[1].equals("Truck")) {
                        truck.refueling(liters);
                    }else {

                    }
                    break;
                case "Drive Empty":
                    System.out.println(bus.driving(Double.parseDouble(tokens[2])));
                    break;
            }
        }

        System.out.println(car.toString());
        System.out.println(truck.toString());
    }
}
