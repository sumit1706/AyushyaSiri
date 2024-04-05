**RUNNING THE APPLICATION**

**---------------------------------**

Step 1: Installing softwares
	a. Xampp
	b. STS-4 (IDE) [Spring Tool Suite 4]
	c. VS Code (IDE)
	d. Browser (Chrome/Edge)
	
Step 2: Download the project files
	a. siri-frontend.zip
	b. siri-backend.zip
	c. ayushya_siri.sql
	d. Streamlit File- MDPS.zip

Step 3: Extract the files
	a. siri-frontend
	b. siri-backend
	c. Streamlit File- MDPS

Step 4: Opening the files in IDE's
	a. Open siri-backend in STS-4
	b. Open siri-frontend in VS Code
	c. Open Streamlit File- MDPS in new window in VS Code
	
Step 5: Run Xampp (Apache & MySQL) and click Admin of MySQL.

Step 6: Create a database named 'ayushya_siri' and import the given 'ayushya_siri.sql' file here

Step 7: For running Streamlit File- MDPS, install python libraries using [pip install <library_name>]
	a. streamlit
	b. streamlit_option_menu
	
Step 8: a. In the 'multiple_disease_pred.py' file inside Streamlit File- MDPS,
	   Change the path name for the saved models as per the folder location in your system
	   [At line number 8, 10, 12]
	b. Run this multiple_disease_pred.py file, then you will get a command 
	   like 'streamlit run <path_of_file>' which has to be executed in VS Code terminal or CMD
	c. Make sure that path of file be in double quotes while running [streamlit run "<path>"].

Step 9: To run the siri-frontend first install 'live server' extension in VS Code,
	then run 'index.html' file using 'go live' option in status bar of VS Code

Step 10: First Run the Xampp server (Apache & MySQL) and then run siri-backend in STS-4 as (Spring Boot App).

Step 11: After completing all these steps, the project has been launched sucessfully,
	 You can now interact with the frontend and explore.
