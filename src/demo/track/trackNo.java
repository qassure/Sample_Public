package demo.track;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.management.ManagementFactory;
import java.rmi.registry.LocateRegistry;
import javax.management.MBeanServer;
import javax.management.remote.JMXConnectorServer;
import javax.management.remote.JMXConnectorServerFactory;
import javax.management.remote.JMXServiceURL;
/**
 * Servlet implementation class trackNo
 */
@WebServlet("/trackNo")
public class trackNo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public trackNo() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		try{
			LocateRegistry.createRegistry(1098);
		    MBeanServer mbs = ManagementFactory.getPlatformMBeanServer();
		    JMXServiceURL url = new JMXServiceURL("service:jmx:rmi://localhost/jndi/rmi://localhost:1098/jmxrmi");
		    JMXConnectorServer svr = JMXConnectorServerFactory.newJMXConnectorServer(url, null, mbs);
		    svr.start();
			}catch(Exception ex){
				System.out.println("Error          "+ex);
			}

		// TODO Auto-generated method stub
//		System.out.println("track number  : "+request.getParameter("trackNumber"));
//		System.out.println("Screen Width   : "+request.getParameter("screenWidth"));
//		System.out.println("Query String   : "+request.getQueryString());
		System.out.println("header   :"+request.getHeader("user-agent"));
		System.out.println("Address   :"+request.getRemoteHost());
		System.out.println("Port   :"+request.getRemotePort());
//		System.out.println("User   :"+request.getRemoteUser());
		System.out.println("Method   :"+request.getMethod());
		//int screenWidth = Integer.parseInt(request.getParameter("screenWidth"));
		 if(request.getHeader("user-agent").indexOf("Mobile") != -1) {
			    //you're in mobile land
			 System.out.println("Mobile device screen ");
				response.sendRedirect("./page1.html");
			  } else {
			    //nope, this is probably a desktop
				  System.out.println("Desktop device screen ");
				  response.sendRedirect("./General Trace.htm");
			  }
			while(true){
				testMethod1();
				testMethod2();
				}
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	public static void testMethod1(){
		try {
			Thread.sleep(5000);
			System.out.println("testMethod1");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	private static void testMethod2(){
		try {
			Thread.sleep(10000);
			System.out.println("testMethod2");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
