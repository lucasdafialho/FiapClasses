package fiap.logs;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static Logger logger = LogManager.getLogger(Main.class);
    public static void main(String[] args) {
        try{
         logger.info("Sistema Iniciando...");
         var scanner = new Scanner(System.in);
            System.out.println("Digite um número: ");
            int numero = scanner.nextInt();
        }
        catch (Exception e){

            logger.fatal("Erro Fatal: " + e.getMessage() + "-" + Arrays.toString(e.getStackTrace()));

        }
    }
}