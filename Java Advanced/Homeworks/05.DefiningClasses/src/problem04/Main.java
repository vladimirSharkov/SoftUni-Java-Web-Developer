package problem04;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());

        List<Car> cars = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            String[] token = scanner.nextLine().split("\\s+");
            String model = token[0];
            Engine engine = new Engine(Integer.parseInt(token[1]), Integer.parseInt(token[2]));
            Cargo cargo = new Cargo(Integer.parseInt(token[3]), token[4]);
            List<Tire> tires = new ArrayList<>();
            Tire tire1 = new Tire(Double.parseDouble(token[5]), Integer.parseInt(token[6]));
            Tire tire2 = new Tire(Double.parseDouble(token[7]), Integer.parseInt(token[8]));
            Tire tire3 = new Tire(Double.parseDouble(token[9]), Integer.parseInt(token[10]));
            Tire tire4 = new Tire(Double.parseDouble(token[11]), Integer.parseInt(token[12]));
            tires.add(tire1);
            tires.add(tire2);
            tires.add(tire3);
            tires.add(tire4);

            Car car = new Car(model, engine, cargo, tires);
            cars.add(car);
        }
        String command = scanner.nextLine();

        switch (command) {
            case "fragile":
                for (Car car : cars) {
                    if (car.getCargo().getCargoType().equals("fragile")){
                        boolean isOk = true;
                        for (Tire tire : car.getTires()) {
                            if (tire.getTirePressure() > 1) {
                                isOk = false;
                                break;
                            }
                        }
                        if (isOk) {
                            System.out.println(car.getModel());
                        }
                    }
                }
                break;
            case "flamable":
                for (Car car : cars) {
                    if (car.getCargo().getCargoType().equals("flamable")){
                        if (car.getEngine().getEnginePower() > 250) {
                            System.out.println(car.getModel());
                        }
                    }
                }
                break;
        }
    }
}
