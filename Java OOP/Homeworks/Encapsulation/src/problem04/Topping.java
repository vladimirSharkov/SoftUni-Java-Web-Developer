package problem04;

public class Topping {
    private String toppingType;
    private double weight;

    public Topping(String toppingType, double weight) {
        this.toppingType = toppingType;
        this.weight = weight;
    }

    private void setToppingType(String toppingType) {
        this.toppingType = toppingType;
    }

    private void setWeight(double weight) {
        if (this.weight<1 || this.weight>50){
            throw new IllegalArgumentException(String.format("%s weight should be in the range [1..50].",
                    this.toppingType));
        }
        this.weight = weight;
    }

    public double calculateCalories(){
        return 0;
    }
}
