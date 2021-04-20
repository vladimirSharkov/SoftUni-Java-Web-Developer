package problem06;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = "";
        int count = 0;
        Map<String, Integer> miner = new HashMap<>();
        Set<String> materials = new HashSet<>();
        List<Integer> numbers = new ArrayList<>();
        while (!(input = scanner.nextLine()).equals("stop")) {
            String resource = input;
            int quantity = Integer.parseInt(scanner.nextLine());
            if (!miner.containsKey(resource)) {
                miner.put(resource, quantity);
            } else {
                count = miner.get(resource);
                miner.put(resource, quantity + count);
            }
        }

        miner.forEach((k,v)->{
            System.out.printf("%s -> %d%n",k,v);
        });

    }
}
