package problem04;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        Map<Character, Integer> map = new TreeMap<>();

        for (int i = 0; i < input.length(); i++) {
            if (!map.containsKey(input.charAt(i))) {
                map.put(input.charAt(i), 1);
            } else {
                int count = map.get(input.charAt(i)) + 1;
                map.put(input.charAt(i), count);
            }

        }

        map.forEach((k,v)->{
            System.out.printf("%c: %d time/s%n",k,v);
        });
    }
}
