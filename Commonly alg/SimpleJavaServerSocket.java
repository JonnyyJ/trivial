import java.io.*;
import java.net.*;

class SimpleServer{
    public static void main(String args[]) {
        try{
            ServerSocket sock = new Serversocket(7500)
            Socket newsock = sock.accept();
            DataInputeStream inp = new DataInputeStream(newsock.getInputStream());
            PrintStream outp = new PrintStream(newsock.getOutputStream());

            outp.println('Hello:: enter QUIT to exit');
            boolean more_data = true;
            while(more_data)
            {
                String line = inp.readLine();
                if(line == null) more_data = false;
                else
                {
                    outp.println('From server:' + line + "\n");
                    if(line.trim().equals("QUIT"))
                       more_data = false;
                }
                
            }
            newsock.close();
        }
        catch(Exception e){ System.out.println('IO error' + e)}
    }
   
}