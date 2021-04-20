package problem01;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] input = scanner.nextLine().split(", ");
        int n = Integer.parseInt(input[0]);
        String pattern = input[1];
        int number = 0;

        if ("A".equals(pattern)) {
            int[][] matrixA = initMatrixA(n);
            printMatrix(matrixA);

        } else if ("B".equals(pattern)) {
            int[][] matrixB = initMatrixB(n);
            printMatrix(matrixB);
        }

    }

    private static int[][] initMatrixB(int n) {
        int[][] matrix = new int[n][n];
        int number = 1;
        for (int row = 0; row < matrix.length; row++) {
            if (row % 2 == 0) {
                for (int col = 0; col < matrix[row].length; col++) {
                    matrix[col][row] = number++;
                }
            } else {
                for (int col = matrix[row].length-1; col >=0 ; col--) {
                    matrix[col][row] = number++;
                }
            }

        }
        return matrix;
    }

    private static void printMatrix(int[][] matrixA) {

        for (int row = 0; row < matrixA.length; row++) {
            for (int col = 0; col < matrixA[row].length; col++) {
                System.out.print(matrixA[row][col] + " ");
            }
            System.out.println();
        }
    }

    private static int[][] initMatrixA(int n) {
        int[][] matrix = new int[n][n];
        int number = 1;
        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                matrix[col][row] = number++;
            }
        }
        return matrix;
    }
}
