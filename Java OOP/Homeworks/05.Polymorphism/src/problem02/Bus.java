package problem02;

public class Bus extends VehicleImpl {
    private static final boolean DEFAULT_IS_EMPTY = true;
    private boolean isEmpty;

    public Bus(double fuelQuantity, double fuelConsumption, double tankCapacity) {
        super(fuelQuantity, fuelConsumption, tankCapacity);
        setEmpty(DEFAULT_IS_EMPTY);
    }

    public void setEmpty(boolean empty) {
        isEmpty = empty;
    }

    @Override
    public void setFuelConsumption(double fuelConsumption) {
        if (!this.isEmpty) {
            super.setFuelConsumption(fuelConsumption + 1.4);
        }
    }

    @Override
    public String driving(double distance) {
        return "Bus " + super.driving(distance);
    }
}
