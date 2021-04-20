package problem04;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] commands = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        int[] data = Arrays.stream(scanner.nextLine().split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();

        int n = commands[0];
        int s = commands[1];
        int x = commands[2];

        ArrayDeque<Integer> enqueue = new ArrayDeque<>();

        for (int i : data) {
            enqueue.offer(i);
        }

        while (s > 0 && !enqueue.isEmpty()) {
            enqueue.poll();
            s--;
        }
        if (enqueue.contains(x)) {
            System.out.println("true");
        } else if (enqueue.isEmpty()) {
            System.out.println("0");
        }else {
            System.out.println(Collections.min(enqueue));
        }
    }
}
