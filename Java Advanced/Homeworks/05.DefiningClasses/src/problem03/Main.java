package problem03;

import javax.security.sasl.SaslClient;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        List<Car> cars = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            String[] token = scanner.nextLine().split("\\s+");
            String model = token[0];
            double fuelAmount = Double.parseDouble(token[1]);
            double fuelCost = Double.parseDouble(token[2]);

            Car car = new Car(model,fuelAmount,fuelCost);
            cars.add(car);
        }

        String input;
        while (!(input=scanner.nextLine()).equals("End")){
            String[] token = input.split("\\s+");
            String model = token[1];
            double distance = Double.parseDouble(token[2]);
            for (Car car : cars) {
                if (car.getModel().equals(model)) {
                    if (car.cantDrive(distance)) {
                        double a = distance*car.getFuelCostForKm();
                        car.setFuelAmount(car.getFuelAmount()-a);
                        car.setDistance(car.getDistance()+distance);
                    }else {
                        System.out.println("Insufficient fuel for the drive%n");
                    }
                }
            }


        }
        cars.forEach(car -> {
            System.out.printf("%s %.2f %.0f%n",car.getModel(),car.getFuelAmount(),car.getDistance());
        });
    }
}
