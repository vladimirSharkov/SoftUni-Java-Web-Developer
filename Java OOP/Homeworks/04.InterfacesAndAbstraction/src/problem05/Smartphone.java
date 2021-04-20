package problem05;

import java.util.ArrayList;
import java.util.List;

public class Smartphone implements Callable,Browsable{
    private List<String> numbers;
    private List<String> urls;

    public Smartphone(List<String> numbers, List<String> urls) {
        this.numbers = new ArrayList<>();
        this.urls = new ArrayList<>();
    }

    @Override
    public String browse() {
        return this.urls.get(0);
    }

    @Override
    public String call() {
        return null;
    }
}
