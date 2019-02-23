import java.io.*;
import java.net.*;

class ConnectDemo{
    public static void main(String args[]) {
        try{
            Socket s = new socket("10.5.18.213", 225)
            DataInputStream inp = new DataInputStream(s.getInputStream());
            boolean more_data = true;

            System.out.println("Established connection");
            while (more_data)
            {
                String line = inp.readLine();
                if (line == null) more_data = false;
                else System.out.println (line);
            }
        }
        catch (IOException e)
        {
            System.out.println ("IO error" + e)
        }
    }
}