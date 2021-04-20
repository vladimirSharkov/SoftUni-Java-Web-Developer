package problem04;

import java.util.ArrayList;
import java.util.List;

public class Pizza {
    private String name;
    private double Dough;
    private List<Topping> toppings;

    public Pizza(String name, int numberOfToppings) {
        this.setName(name);
        this.toppings = new ArrayList<>();
        setToppings(numberOfToppings);
    }

    private void setName(String name) {

        if (this.name.trim().isEmpty() || this.name.length() > 15) {
            throw new IllegalArgumentException("Pizza name should be between 1 and 15 symbols.");
        }
        this.name = name;
    }

    private void setToppings(int toppings) {
        if (toppings < 0 || toppings > 10) {
            throw new IllegalArgumentException("Number of toppings should be in range [0..10].");
        }

    }

    public void setDough(double dough) {
        Dough = dough;
    }

    public String getName() {
        return name;
    }

    public void addTopping(Topping topping) {
        this.toppings.add(topping);
    }

    public double getOverallCalories() {
        return 0;
    }
}
