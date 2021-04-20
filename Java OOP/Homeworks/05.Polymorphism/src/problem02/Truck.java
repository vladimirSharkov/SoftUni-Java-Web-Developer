package problem02;

public class Truck extends VehicleImpl {
    public Truck(double fuelQuantity, double fuelConsumption, double tankCapacity) {
        super(fuelQuantity, fuelConsumption, tankCapacity);
    }


    @Override
    public void setFuelConsumption(double fuelConsumption) {
        super.setFuelConsumption(fuelConsumption + 1.6);
    }


    @Override
    public String driving(double distance) {
        return "Truck " + super.driving(distance);
    }

    @Override
    public void refueling(double liters) {
        super.refueling(liters * 0.95);
    }
}
