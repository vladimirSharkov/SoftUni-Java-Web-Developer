package problem05;

public class Car {
     private String model;
     private Engine engine;
     private int weight;
     private String color;

    public Car(String model, Engine engine) {
        this.model = model;
        this.engine = engine;
    }

    public Car(String model, Engine engine, int weight) {
        this.model = model;
        this.engine = engine;
        this.weight = weight;
    }

    public Car(String model, Engine engine, String color) {
        this.model = model;
        this.engine = engine;
        this.color = color;
    }

    public Car(String model, Engine engine, int weight, String color) {
        this.model = model;
        this.engine = engine;
        this.weight = weight;
        this.color = color;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("%s:%n",this.model));
        sb.append(String.format("%s:%n",this.engine.getModel()));
        sb.append(String.format("Power: %d%n",this.engine.getPower()));
        if (this.engine.getDisplacement()!=0){
            sb.append(String.format("Displacement: %d%n",this.engine.getDisplacement()));
        }else {
            sb.append("Displacement: n/a").append(System.lineSeparator());
        }
        if (this.engine.getEfficiency() == null) {
            sb.append("Efficiency: n/a").append(System.lineSeparator());
        }else {
            sb.append(String.format("Efficiency: %s%n",this.engine.getEfficiency()));
        }
        if (this.weight != 0) {
            sb.append(String.format("Weight: %d%n",this.weight));
        }else {
            sb.append("Weight: n/a").append(System.lineSeparator());
        }
        if (this.color == null) {
            sb.append("Color: n/a").append(System.lineSeparator());
        }else {
            sb.append(String.format("Color: %s%n",this.color));
        }

        return sb.toString().trim();
    }
}
