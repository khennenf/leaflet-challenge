<h4>Requirements:</h4>
 * Download and install PostgreSQL, create a database 'squirrel_census' (retain database username and password for later step)<br>
 * Obtain an API Key for Mapbox (https://docs.mylistingtheme.com/article/how-to-generate-a-mapbox-api-key/)
  
<h4>Steps to launch:</h4>
* Use squirrel_census_dataframes.ipynb to convert data from csv to database tables inserted in to the squirel_census PostgreSQL database<br>
* Add PostgreSQL squirrel_census database username and password to config/config.py in Visual Studio Code<br>
* Add Mapbox API key to js/config.js in Visual Studio Code<br>
* Run flask app in app.py to start local server in Visual Studio Code<br>
* Use python -m http.server to open the project in an Integrated Terminal in Visual Studio Code<br>
* Open http://localhost:8000 to view the website
