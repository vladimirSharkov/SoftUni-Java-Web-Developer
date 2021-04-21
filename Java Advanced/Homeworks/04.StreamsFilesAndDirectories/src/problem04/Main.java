package problem04;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {


        try {
            FileWriter fileWriter = new FileWriter(new File("src/resources/output.txt"));
            String strings = String.join("", Files.readAllLines(Path.of("src/resources/input.txt")));

            int countVowels = 0;
            int countConsonants = 0;
            int countPunctuation = 0;
            for (int i = 0; i < strings.length(); i++) {
                char charAt = strings.charAt(i);
                if (charAt == 'a' || charAt == 'e' || charAt == 'o' || charAt == 'i' || charAt == 'u') {
                    countVowels++;
                } else if (Character.isLetter(charAt) || charAt == '-' || charAt == '\'' || Character.isDigit(charAt)) {
                    countConsonants++;
                } else if (charAt == ',' || charAt == '?' || charAt == '.' || charAt == '!') {
                    countPunctuation++;
                }

            }
           fileWriter.write(String.format("Vowels: %d%n",countVowels));
           fileWriter.write(String.format("Consonants: %d%n",countConsonants));
           fileWriter.write(String.format("Punctuation: %d%n",countPunctuation));
           fileWriter.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
