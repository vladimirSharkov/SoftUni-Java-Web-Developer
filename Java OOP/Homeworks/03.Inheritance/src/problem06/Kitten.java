package problem06;

public class Kitten extends Cat {
    final static String CAT_GENDER = "Female";

    public Kitten(String name, int age) {
        super(name, age, CAT_GENDER);
    }

    @Override
    public String produceSound() {
        return "Meow";
    }
}
