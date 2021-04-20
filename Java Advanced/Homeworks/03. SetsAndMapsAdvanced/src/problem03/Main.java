package problem03;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        Set<String> set = new TreeSet<>();

        for (int i = 0; i < n; i++) {
            String[] token = scanner.nextLine().split("\\s+");
            for (String element : token) {
                set.add(element);
            }
        }
        System.out.println(String.join(" ",set));
    }
}
