package problem02;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] data = Arrays.stream(scanner.nextLine().split("\\s+")).mapToInt(Integer::parseInt).toArray();
        int row = data[0];
        int col = data[1];

        initMatrix(row,col);
    }

    private static String[][] initMatrix(int row, int col) {

        return new String[0][];
    }
}
