package problem02;

import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] number = Arrays.stream(scanner.nextLine().split("\\s+")).mapToInt(Integer::parseInt).toArray();

        int n = number[0];
        int m = number[1];

        Set<String> firstNumber = new LinkedHashSet<>();
        Set<String> secondNumber = new LinkedHashSet<>();
        Set<String> result = new LinkedHashSet<>();

        for (int i = 0; i < n; i++) {
            String num = scanner.nextLine();
            firstNumber.add(num);
        }

        for (int i = 0; i < m; i++) {
            String num = scanner.nextLine();
            secondNumber.add(num);
        }
        if (firstNumber.size() > secondNumber.size()) {
            for (String integer : firstNumber) {
                if (secondNumber.contains(integer)){
                    result.add(integer);
                }
            }
        }else {
            for (String integer : secondNumber) {
                if (firstNumber.contains(integer)){
                    result.add(integer);
                }
            }
        }

        String str = String.join(" ",result);
        System.out.println(str);
    }
}
