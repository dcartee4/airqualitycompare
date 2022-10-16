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




Question 2:
You are modifying a human resources application. The current Employee class looks like
this:

Employee
- managerFlag : boolean
- name : String
- dateHired : Date
- id : int
+ getName() : String
+ getID() : String
+ getDateHired() : Date
+ isManager() : boolean

ComponentWise Advanced Java Language

Assessment 1.2

Currently everyone is an Employee and some of those are Managers, which is
determined by calling the isManager() method. The company has now started hiring part-
time employees, so the system must be modified to keep track of them.
Describe a new implementation of the Employee class which provides the flexibility
required to support the new part-time employee notion. You are free to refactor this class
as required and add additional classes if needed. You need not code the class, but are
free to do so if you feel it’s the easiest way to describe your solution.


My answer
There a couple of different options.  
Quick and dirty: add fullOrPartTime field of char[1] with getter/setter enforcing only 'F' or 'P' representing Full time or Part time respectively.
Another option(thinking Java) would be same field name but of type Enumerator with having the values "FTE" and "PTE" or whatever desired text.
from an SQL perpective, the solution is nearly idnetical but would have an FK to a type table defining full time or part time.
The PK/FK could then be any datatype with the type table continng appropriate text.
Another consideration out side the scope of the requirement would be the addition of Contract, Temporary or Permenant types.
Last thought, the answer may be obviuos, but the question should be asked before going to production wether a manager can be part time or not.
It is possible, not likely, that a manager could be part time temp/contract.  However, the ojbect should be able to accomadate such properties.
