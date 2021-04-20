package problem02;

public class Car extends VehicleImpl {
    public Car(double fuelQuantity, double fuelConsumption,double tankCapacity) {
        super(fuelQuantity, fuelConsumption,tankCapacity);
    }

    @Override
    public void setFuelConsumption(double fuelConsumption) {
        super.setFuelConsumption(fuelConsumption + 0.9);
    }

    @Override
    public String driving(double distance) {
        return "Car " + super.driving(distance);
    }

    @Override
    public void refueling(double liters) {
        super.refueling(liters);
    }
}
