package problem08;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Map<String, LinkedHashSet<String>> map = new LinkedHashMap<>();

        String input = "";
        while (!(input = scanner.nextLine()).equals("JOKER")) {
            String[] token = input.split(": ");
            String name = token[0];
            String[] card = token[1].split(", ");
            if (!map.containsKey(name)) {
                map.put(name, new LinkedHashSet<>());
            }
            LinkedHashSet<String> strings = map.get(name);
            strings.addAll(Arrays.asList(card));
        }


        map.forEach((k, v) -> {
            int sum = 0;
            for (String s : v) {
                int power1 = getPower(s.substring(0,s.length()-1));
                int multipliers = getMultipliers(s.substring(s.length()-1));
                int cardPower = power1*multipliers;
                sum += cardPower;

            }
            System.out.printf("%s: %d%n", k, sum);
        });
    }

    private static int getMultipliers(String mil) {
        switch (mil) {
            case "S":
                return 4;
            case "H":
                return 3;
            case "D":
                return 2;
            case "C":
                return 1;
            default:
                return 0;
        }
    }

    private static int getPower(String power) {
        switch (power) {
            case "2":
                return 2;
            case "3":
                return 3;
            case "4":
                return 4;
            case "5":
                return 5;
            case "6":
                return 6;
            case "7":
                return 7;
            case "8":
                return 8;
            case "9":
                return 9;
            case "10":
                return 10;
            case "J":
                return 11;
            case "Q":
                return 12;
            case "K":
                return 13;
            case "A":
                return 14;
            default:
                return 0;
        }
    }

}
