Create a simple Air Quality Assessment Tool using React with Material Ui ( https://mui.com/ ) that
utilizes Open AQ Platform API ( https://docs.openaq.org/ )
It will have the ability to compare the Air Quality of two cities on the same page.
The tool must:: 

1.       Use MUI -- npm install @mui/material @emotion/react @emotion/styled
2.       Utilize OpenAQ platform API
3.       Allow the user to input two cities
4.       Display the air quality of the corresponding cities, allowing the user to
compare the two cities air quality on the same page
5.       Gracefully handle any API or user errors
6.       Be easily used by the general public

Additional info
npm install @mui/material @emotion/react @emotion/styled
npm install axios

Commentary:
I began this project with only a beginner's knowledge from taking coursework from CodeAcadmy and on the job overseeing and 
rewiewing offshore develoment of a project for Presbrytirian Health Services.  My choice of Axios come from this project.
I learned all this on my own with only googling skills and digesting various stack exchange posts, w3schools and blog posts.

Due to the large number of cities in the OpenAQ data, in addition to the inconsistent case senesitive nature of the data, I opted to have 
the user select country 1st, but default is US with Boston and Los Angeles as default cities.

I only scratched the surface of what MUI is able to accomplish for styling and presentation.
I do believe error and message handling couild be better taught and implementd by the dev community at large.  
"Good error feedback" samples are very difficult to find.

I'm sure some good code review would result in several improvments.
