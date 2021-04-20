package problem03;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        int[][] matrix = new int[n][n];

        for (int row = 0; row < matrix.length; row++) {
            matrix[row] = Arrays.stream(scanner.nextLine().split("\\s+")).mapToInt(Integer::parseInt).toArray();
        }

        int sumDiagonal1 = 0;
        int sumDiagonal2 = 0;


        int row = 0;
        int col = 0;
        for (int i = 0; i < n; i++) {
            sumDiagonal1 += matrix[row++][col++];
        }


    }


}
