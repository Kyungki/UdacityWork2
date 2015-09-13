
var bio = 
{
	"name" : "Kyungki Kim",
	"role" : "Web Developer",
	"contacts" : {

	},
	"welcomeMessage" : "Welcome to Kyungki Kim's webpage",
	"skills" : [
	"C# programming", "Java programming", "Web programming"
	],
	"bioPic" : "images/Kyungki.png"
}

var education = 
{
	"schools": 
	[
		{
		"name" : "Georgia Institute of Technology",
		"city" : "Atlanta, Georgia",
		"degree" : "PhD",
		"majors" : ["Civil Engineering", "Computer Science"],
		"dates" : 2016,
		"url" : "www.gatech.edu"
		},
		{
		"name" : "Texas A&M University",
		"city" : "College Station, Texas",
		"degree" : "MS",
		"majors" : ["Civil Engineering"],
		"dates" : 2011,
		"url" : "www.tamu.edu"	
		}
	],

	"onlineCourse" : 
	[
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title" : "Intro to Relational Databases",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/intro-to-relational-databases--ud197"
		},
		{
			"title" : "HTML5 Game Development",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/html5-game-development--cs255"
		},
		{
			"title" : "Web Development",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/web-development--cs253"
		},
	]
}

var works = 
{
	"jobs": 
	[
		{
			"employer" : "Civil Engineering, Georgia Institute of Technology",
			"title" : "Graduate research assistant",
			"dates" : "August 2011 - present",
			"description" : "Developed simulation programs for construction safety checking. Used APIs of commercial software programs (Autodesk Revit, Tekla Structures, etc.) and developed my own Java construction simulator with viewer."
		}
	]
}

var projects = 
{
	"projects": 
	[
		{
			"title" : "project 1",
			"dates" : "2015",
			"description" : "",
			"images" : 
			[
			]
		},
		{
			"title" : "project 2",
			"dates" : "2015",
			"description" : "",
			"images" : 
			[
			]
		},
		{
			"title" : "project 3",
			"dates" : "2015",
			"description" : "",
			"images" : 
			[
			]
		},
	]
}





var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};