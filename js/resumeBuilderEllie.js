



var bio = 
{
	"name" : "Ellie Kim",
	"role" : "Micro biologist",
	"contacts" : {
		"mobile" : "404-831-8603",
		"email" : "ekim338@gatech.edu",
		"location" : "Atlanta, Georgia"

	},
	"welcomeMessage" : "Welcome to Ellie Kim's webpage",
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
		"degree" : "MS",
		"majors" : ["Bioinformatics"],
		"dates" : "present",
		"url" : "www.gatech.edu"
		},
		{
		"name" : "University of Georgia",
		"city" : "Athens, Georgia",
		"degree" : "BS",
		"majors" : ["Environmental Health Science"],
		"dates" : 2008,
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
			"employer" : "Center for Disease Control and Prevention",
			"title" : "Graduate research assistant",
			"dates" : "August 2008 - present",
			"location" : "Atlanta, Georgia",
			"description" : "•	Participate in research projects administered in the Immunobiology Team under the guidance and supervision of the team lead."
		}
	]
}

var projects = 
{
	"projects": 
	[
		{
			"title" : "Meningococcus",
			"dates" : "2012 - present",
			"description" : 
			"Immunophenotyping of Neisseria Meningitidis B (NmB) strains - Pfizer CRADA" + "<br />" + 
			"&nbsp &nbsp &nbsp &nbsp MEASURE - To quantify the surface expression of FHbp on NmB",
			"images" : 
			[
			]
		},
		{
			"title" : "Pneumococcus",
			"dates" : "2012 - present",
			"description" : 
			"Molecular profile of pneumococcal vaccine response – Collaboration with Emory Vaccine Center" + "<br />" +
			"&nbsp &nbsp &nbsp &nbsp Vaccine immune response in adults quantified using multiplex antibody quantitation assay"  + "<br />" +
			"&nbsp &nbsp &nbsp &nbsp Data reduction, analysis and interpretation" + "<br />" +
			"PsaA based pneumococcal sero diagnosis",
			"images" : 
			[
			]
		},
		{
			"title" : "Pertussis",
			"dates" : "2012 - present",
			"description" : 
			"Development and validation of a microsphere based multiplex antibody capture assay (MMACA) for pertussis antigens "  + "<br />" + 
			"Participating in the development of functional assay for pertussis vaccines" + "<br />" + 
			"Masterplex QT/SAS data reduction and analysis",
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

	$("#education").append(HTMLschoolStart);
	$("#education").append(formattedSchoolName);
	$("#education").append(formattedSchoolDegree);
	$("#education").append(formattedSchoolDates);
	$("#education").append(formattedSchoolLocation);
	$("#education").append(formattedschoolMajor);
}

//add projects
for (i = 0; i < projects.projects.length; i++)
{
	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

	$("#projects").append(HTMLprojectStart);
	$("#projects").append(formattedProjectTitle);
	$("#projects").append(formattedProjectDates);
	$("#projects").append(formattedProjectDescription);
}





var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};