package problem02;

public class Citizen implements Identifiable,Birthable,Person{
    private String name;
    private  int age;
    private String id;
    private String birthDate;

    public Citizen(String name, int age, String id, String birdDate) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.birthDate = birdDate;
    }

    @Override
    public String getBirthDate() {
        return this.birthDate;
    }

    @Override
    public String getId() {
        return this.id;
    }

    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public int getAge() {
        return this.age;
    }

    @Override
    public String toString() {
        return "Citizen{" +
                "name='" + name + '\'' +
                '}';
    }
}
