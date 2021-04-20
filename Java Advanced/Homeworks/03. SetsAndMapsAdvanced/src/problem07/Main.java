package problem07;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = "";
        Map<String,String> map = new LinkedHashMap<>();
        while (!(input=scanner.nextLine()).equals("stop")){
            String name = input;
            String email = scanner.nextLine();
            if (email.endsWith("us")||email.endsWith("uk")||email.endsWith("com")){
            }else{
                map.put(name,email);
            }

        }
        map.forEach((k,v)->{
            System.out.printf("%s -> %s%n",k,v);
        });
    }
}
