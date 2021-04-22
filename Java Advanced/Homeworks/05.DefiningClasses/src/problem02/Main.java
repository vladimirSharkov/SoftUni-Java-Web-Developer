package problem02;

import java.util.*;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());


        List<Department> departments = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            String[] input = scanner.nextLine().split("\\s+");
            String name = input[0];
            double salary = Double.parseDouble(input[1]);
            String position = input[2];
            String dep = input[3];

            boolean isFind = false;
            Department department = null;
            for (Department depart : departments) {
                if (depart.getName().equals(dep)) {
                    isFind = true;
                    break;
                }
            }
            if (isFind) {
                for (Department department1 : departments) {
                    if (department1.getName().equals(dep)) {
                        department = department1;
                    }
                }
            } else {
                department = new Department(dep);
                departments.add(department);
            }


            Employee employee;
            switch (input.length) {
                case 4:
                    employee = new Employee(name, salary, position, department);
                    break;
                case 5:
                    try {
                        int age = Integer.parseInt(input[4]);
                        employee = new Employee(name, salary, position, department, age);
                    } catch (Exception e) {
                        employee = new Employee(name, salary, position, department, input[4]);
                    }
                    break;
                default:
                    employee = new Employee(name, salary, position, department, input[4], Integer.parseInt(input[5]));
                    break;
            }
            for (Department depart : departments) {
                if (employee.getDepartment().equals(depart)) {
                    List<Employee> employees = depart.getEmployees();
                    employees.add(employee);
                }
            }
        }



        double avrSum = 0;
        String currentDepartment = null;
        for (Department department : departments) {
            Double collect = department.getEmployees().stream().collect(Collectors.averagingDouble(Employee::getSalary));
            if (collect>avrSum){
                avrSum = collect;
                currentDepartment = department.getName();
            }
        }

        String finalCurrentDepartment = currentDepartment;
         departments.stream().filter(department -> department.getName().equals(finalCurrentDepartment)).forEach(department -> {
             System.out.printf("Highest Average Salary: %s%n",department.getName());
             department.getEmployees().stream().sorted((a,b)->Double.compare(b.getSalary(),a.getSalary())).forEach(employee -> {
                 System.out.printf("%s %.2f %s %d%n",employee.getName(),employee.getSalary(),employee.getEmail(),employee.getAge());
             });
         });

    }
}
