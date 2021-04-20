package problem06;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);


        List<Animal> animals = new ArrayList<>();
        String animalType = "";
        while (!"Beast!".equals(animalType = scanner.nextLine())) {
            String[] animalInfo = scanner.nextLine().split("\\s+");
            String name = animalInfo[0];
            int age = Integer.parseInt(animalInfo[1]);
            String gender = animalInfo[2];
            Animal animal = null;
            try {


                switch (animalType) {
                    case "Dog":
                        animal = new Dog(name, age, gender);
                        break;
                    case "Cat":
                        animal = new Cat(name, age, gender);
                        break;
                    case "Frog":
                        animal = new Frog(name, age, gender);
                        break;
                    case "Kitten":
                        animal = new Kitten(name, age);
                        break;
                    case "Tomcat":
                        animal = new Tomcat(name, age);
                        break;

                }
            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());
            }
            animals.add(animal);
        }

        animals.forEach(System.out::println);
    }
}
