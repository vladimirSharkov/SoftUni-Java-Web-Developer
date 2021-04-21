package problem05;

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
            List<String> strings = Files.readAllLines(Path.of("src/resources/inputLineNumbers.txt"));
            int count = 1;
            for (String string : strings) {
               fileWriter.write(count++ +"." + string + "\n");
               fileWriter.flush();
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
