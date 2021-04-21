package problem07;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        try {
            FileWriter fileWriter = new FileWriter(new File("src/resources/output.txt"));
            List<String> fileOne = Files.readAllLines(Path.of("src/resources/inputOne.txt"));
            List<String> fileTwo = Files.readAllLines(Path.of("src/resources/inputTwo.txt"));

            for (String word : fileOne) {
                fileWriter.write(word + "\n");
                fileWriter.flush();
            }

            for (String word : fileTwo) {
                fileWriter.write(word + "\n");
                fileWriter.flush();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
