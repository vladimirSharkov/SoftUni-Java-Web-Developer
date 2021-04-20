package problem01;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] carInfo = scanner.nextLine().split("\\s+");
        String[] truckInfo = scanner.nextLine().split("\\s+");

        Car car = new Car(Double.parseDouble(carInfo[1]), Double.parseDouble(carInfo[2]));
        Truck truck = new Truck(Double.parseDouble(truckInfo[1]), Double.parseDouble(truckInfo[2]));

        int n = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < n; i++) {
            String[] tokens = scanner.nextLine().split("\\s+");
            switch (tokens[0]) {
                case "Drive":
                    if (tokens[1].equals("Car")){
                        System.out.println(car.driving(Double.parseDouble(tokens[2])));
                    }else {
                        System.out.println(truck.driving(Double.parseDouble(tokens[2])));
                    }
                    break;
                case "Refuel":
                    double liters = Double.parseDouble(tokens[2]);
                    if (tokens[1].equals("Car")){
                        car.refueling(liters);
                    }else {
                        truck.refueling(liters);
                    }
                    break;
            }
        }

        System.out.println(car.toString());
        System.out.println(truck.toString());
    }
}
