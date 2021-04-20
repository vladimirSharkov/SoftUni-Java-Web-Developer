package problem01;

import java.text.DecimalFormat;

public abstract class VehicleImpl implements Vehicle {
    private double fuelQuantity;
    private double fuelConsumption;

    public VehicleImpl(double fuelQuantity, double fuelConsumption) {
        this.setFuelQuantity(fuelQuantity);
        this.setFuelConsumption(fuelConsumption);
    }


    protected double getFuelQuantity() {
        return fuelQuantity;
    }

    public void setFuelConsumption(double fuelConsumption) {
        this.fuelConsumption = fuelConsumption;
    }

    protected void setFuelQuantity(double fuelQuantity) {
        this.fuelQuantity = fuelQuantity;
    }

    protected double getFuelConsumption() {
        return fuelConsumption;
    }


    @Override
    public String driving(double distance) {
        double fuel = distance * this.fuelConsumption;
        DecimalFormat df = new DecimalFormat("#.##");
        String result = "needs refueling";
        if (fuel <= this.fuelQuantity) {
            result = String.format("travelled %s km", df.format(distance));
            this.fuelQuantity -= fuel;
        }
        return result;
    }

    @Override
    public void refueling(double liters) {
        this.fuelQuantity += liters;
    }

    @Override
    public String toString() {
        return String.format("%s: %.2f", this.getClass().getSimpleName(), this.getFuelQuantity());
    }
}
