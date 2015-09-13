



var bio = 
{
	"name" : "Kyungki Kim",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "770-361-2262",
		"email" : "kkim369@gatech.edu",
		"location" : "Atlanta, Georgia"

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
			"location" : "Atlanta, Georgia",
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


//add information to header
var formattedName = HTMLheaderName.replace ("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//add contact information
var formattedContactEmail = HTMLemail.replace ("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedMobile = HTMLlocation.replace("%data%", bio.contacts.location);


$("#footerContacts").append(formattedContactEmail);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

//add work experience

for (i = 0; i < works.jobs.length; i++)
{
	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", works.jobs[i].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%", works.jobs[i].title);
	var formattedWorkDates = HTMLworkDates.replace("%data%", works.jobs[i].dates);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", works.jobs[i].location);
	var formattedWworkDescription = HTMLworkDescription.replace("%data%", works.jobs[i].description);

	$("#workExperience").append(HTMLworkStart);
	$("#workExperience").append(formattedWorkEmployer);
	$("#workExperience").append(formattedWorkTitle);
	$("#workExperience").append(formattedWorkDates);
	$("#workExperience").append(formattedWorkLocation);
	$("#workExperience").append(formattedWworkDescription);
}


//add education

for (i = 0; i < education.schools.length; i++)
{
	var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].city);
	var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

	$("#education").append(formattedSchoolName);
	$("#education").append(formattedSchoolDegree);
	$("#education").append(formattedSchoolDates);
	$("#education").append(formattedSchoolLocation);
	$("#education").append(formattedschoolMajor);
}





var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};