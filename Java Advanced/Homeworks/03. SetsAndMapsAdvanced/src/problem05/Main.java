package problem05;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = "";
        Map<String, String> phonebook = new HashMap<>();

        while (!(input = scanner.nextLine()).equals("search")) {
            String[] token = input.split("-");
            String name = token[0];
            String number = token[1];
            phonebook.put(name, number);
        }

        while (!(input=scanner.nextLine()).equals("stop")){
            String name = input;
            if (phonebook.containsKey(name)){
                System.out.printf("%s -> %s%n",name,phonebook.get(name));
            }else {
                System.out.printf("Contact %s does not exist.%n",name);
            }
        }
    }
}
