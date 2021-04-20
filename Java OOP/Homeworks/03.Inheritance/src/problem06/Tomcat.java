package problem06;

public class Tomcat extends Cat {
    final static String CAT_GENDER = "Male";

    public Tomcat(String name, int age) {
        super(name, age, CAT_GENDER);
    }

    @Override
    public String produceSound() {
        return "MEOW";
    }
}
