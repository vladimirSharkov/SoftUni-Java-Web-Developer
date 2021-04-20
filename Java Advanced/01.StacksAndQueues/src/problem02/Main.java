package problem02;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] data = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        int[] number = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();

        int n = data[0];
        int s = data[1];
        int x = data[2];

        ArrayDeque<Integer> stack = new ArrayDeque<>();

        for (int i : number) {
            stack.push(i);
        }
        while (s > 0 && !stack.isEmpty()) {
            stack.pop();
            s--;
        }

        if (stack.contains(x)) {
            System.out.println("true");
        }else if (stack.isEmpty()){
            System.out.println("0");
        }else {
            System.out.println(Collections.min(stack));
        }
    }
}
