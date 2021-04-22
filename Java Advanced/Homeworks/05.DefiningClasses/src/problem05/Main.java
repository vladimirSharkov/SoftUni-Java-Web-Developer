package problem05;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());


        Map<String,Engine> engines = new HashMap<>();
        List<Car> cars = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            String[] token = scanner.nextLine().split("\\s+");
            String model = token[0];
            int power = Integer.parseInt(token[1]);

            Engine engine;
            switch (token.length) {
                case 3:
                    try {
                        int displacement = Integer.parseInt(token[2]);
                        engine = new Engine(model, power, displacement);
                    } catch (Exception e) {
                        String efficiency = token[2];
                        engine = new Engine(model, power, efficiency);
                    }
                    break;
                default:
                    engine = new Engine(model, power, Integer.parseInt(token[2]), token[3]);
                    break;
            }
            engines.put(model,engine);

        }
        int m = Integer.parseInt(scanner.nextLine());
        for (int i = 0; i < m; i++) {
            String[] token = scanner.nextLine().split("\\s+");

            String model = token[0];
            String engine = token[1];
            Engine currentEngine = engines.get(engine);


            Car car;
            switch (token.length) {
                case 2:
                    car = new Car(model, currentEngine);
                    break;
                case 3:
                    try {
                        int weight = Integer.parseInt(token[2]);
                        car = new Car(model, currentEngine, weight);
                    } catch (Exception e) {
                        car = new Car(model, currentEngine, token[2]);
                    }
                    break;
                default:
                    car = new Car(model,currentEngine,Integer.parseInt(token[2]),token[3]);
                    break;
            }
            cars.add(car);
        }

        cars.stream().forEach(car -> {
            System.out.println(car.toString());
        });

    }
}
