
//Work JSON 
var work = {
	"jobs":[
		{
			"employer": "Georgia Institute of Technology",
			"title": "Graduate Research Assistant",
			"location": "Atlanta, GA",
			"dates": "2011 - Present",
			"description": "Developed simulation programs for construction safety checking. Used APIs of commercial software programs (Autodesk Revit, Tekla Structures, etc.) and developed my own Java construction simulator with viewer."
		}
		/*,
		{
			"employer": "College of Saint Elizabeth",
			"title": "Technology Coordinator",
			"location": "Morristown, NJ",
			"dates": "2010 - 2013",
			"description": "Provide one-on-one and in-classroom instructional technology support to faculty and staff members to create and strengthen online learning opportunities for CSE students; assist the Academic Computing department in the development of Blackboard, Moodle and ePortfolio instructor training materials and workshops. Work collaboratively with the Institutional Advancement, Academic Affairs and IT departments on web design/redesign projects; develop and provide technical support for interactive web applications by utilizing various programming languages including Velocity, HTML, CSS and Javascript; use the dotCMS content management system to maintain the website of the four academic areas under the Academic Affairs department; Use InDesign, Photoshop. Illustrator, Publisher and Acrobat to design and publish online documents including postcards, flyers, brochures, web banners and email invitations"
		},
		{
			"employer": "Bloomberg L.P.",
			"title": "Supply Chain Analyst",
			"location": "Skillman, NJ",
			"dates": "2009 - 2010",
			"description": "Discovered global supply chain data and constructed databases detailing the suppliers, intermediaries, third-party service providers and customers of public companies based in China; Utilized supply chain databases to model raw material, component part, product ! and service flows along the supply chains of Chinese corporations"
		}
		*/
	]
	
};
// Display work json info
work.display = function(){
	
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
	}
		
}
// Projects JSON
var projects = {
	"projects": [
		{
			"title": "Neighborhood Map",
			"date worked": "Dec, 2014 - Jan, 2015",
			"description": "Neighborhood Map project for Udacity Front-end Web Development Nanodegree",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/neighborhood-map-seperate-model",
			"demo": "http://lei-clearsky.github.io/neighborhood-map-seperate-model/",
			"progress": 100
		},
		{
			"title": "Arcade Game",
			"date worked": "Nov, 2014",
			"description": "Classic arcade game clone project for Udacity Front-end Web Development Nanodegree",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/p3-arcade-game",
			"demo": "http://lei-clearsky.github.io/p3-arcade-game/",
			"progress": 100
		},
		{
			"title": "Resume",
			"date worked": "Oct, 2014",
			"description": "Resume project for Udacity Front-end Web Development Nanodegree",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/nanodegree-fewd-p2",
			"demo": "http://lei-clearsky.github.io/nanodegree-fewd-p2/",
			"progress": 100
		},
		{
			"title": "Lazy Recipe",
			"date worked": "Oct, 2013 - Dec, 2013",
			"description": "My first Rails project. Search recipes by ingredients, ingredients are sorted from the least to the most.",
			"image": "http://lei-clearsky.github.io/images/2.jpg",
			"github": "https://github.com/lei-clearsky/search-recipes-app",
			"demo": "http://powerful-wildwood-2510.herokuapp.com/",
			"progress": 100
		},
		{
			"title": "Mu Theta At Large",
			"date worked": "Jul, 2014 - Aug, 2014",
			"description": "My first WordPress project. Redesigned a new resonsive WordPress theme and converted a flash based site",
			"image": "http://lei-clearsky.github.io/images/3.jpg",
			"github": "https://github.com/lei-clearsky/muthetaatlarge/tree/master/wp-content/themes/mtal",
			"demo": "http://muthetaatlarge.org/",
			"progress": 100
		},
		{
			"title": "FIFA Matches",
			"date worked": "Sept, 2014 - Oct, 2014",
			"description": "A drag and drop FIFA soccer game. Drag and drop the coutry icons and output and retrive result through a generated json object.",
			"image": "http://lei-clearsky.github.io/images/4.jpg",
			"github": "https://github.com/lei-clearsky/WWC-project-fifa",
			"progress": 100
		},
		{
			"title": "WordPress Twitter Plugin",
			"date worked": "Aug, 2014 - Sept, 2014",
			"description": "A WordPress twitter plugin. Users can input Authentication keys to display their tweets from twitter.",
			"image": "http://lei-clearsky.github.io/images/5.jpg",
			"github": "https://github.com/lei-clearsky/wp-theme-and-plugin/tree/master/wp-content/plugins/wpplugin-test",
			"progress": 90
		},
		{
			"title": "CSE Official Website",
			"date worked": "July, 2013 - Present",
			"description": "I redesigned and created the front-end of the College of Saint Elizabeth's official website. The previous site is in Flash.",
			"image": "http://lei-clearsky.github.io/images/6.jpg",
			"demo": "http://www.cse.edu/",
			"progress": 100
		},
		{
			"title": "CSE WordPress Intranet",
			"date worked": "Jul, 2014 - Sept, 2014",
			"description": "Converted College of Saint Elizabeth website to a WordPress site with custom theme and widgets",
			"image": "http://lei-clearsky.github.io/images/1.jpg",
			"github": "https://github.com/lei-clearsky/wp-theme-and-plugin/tree/master/wp-content/themes/college",
			"progress": 80
		}
	]

};
// Display project json info
projects.display = function(){
	var d3Div = new Array(projects.projects.length);
	var progressDiv = new Array(projects.projects.length);

	for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										.append(HTMLprojectDates.replace("%data%", projects.projects[project]["date worked"]))
										.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
			// display demo or github json info if they exisit
			if (projects.projects[project]["demo"] != undefined )
				$(".project-entry:last").append(HTMLprojectDemo.replace("#", projects.projects[project]["demo"]));
			if (projects.projects[project]["github"] != undefined )
				$(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));
			
			// call d3 progress chart function
			projects.progressChart(d3Div, progressDiv, project, 'div' + project, projects.projects[project]["progress"]);

	}

}
// project d3 progress chart function
projects.progressChart = function(d3Div, progressDiv, project, container, value) {

	d3Div[project] = d3.select(document.getElementById(container));

	progressDiv[project] = radialProgress(document.getElementById(container))
        .diameter(150)
        .value(value)
        .render();
};

//Bio JSON
var bio = {
	"first name": "Kyungki",
	"last name": "Kim",
	"role": "PhD Candidate",
	"welcome message": "Developed simulation programs for construction safety checking. Used APIs of commercial software programs (Autodesk Revit, Tekla Structures, etc.) and developed my own Java construction simulator with viewer.",
	"bio pic": "images/Kyungki.png",
	"contacts": 
		{
			"mobile number": "770-361-2262",
			"email": "kkim369@gatech.edu",
			"github username": "Kyungki",
			"twitter handle": "",
			"location": "Atlanta, GA"
		},
	"skills": ["BIM", "Software development", "Web programming", "Mobile app programming", "Journal publication", "Teaching", "Game AI programming"]

};
bio.display = function(){
	var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"].toUpperCase());
	var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"].toUpperCase());
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile number"]);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github username"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter handle"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio["bio pic"]);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);

	
	
	$("#header_name").prepend(formattedLName);
	$("#header_name").prepend(formattedFName);	
	$("#header").append(formattedRole);
	$("#header").append(formattedWelcomeMsg);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);	
	$("#topContacts").append(formattedLocation);

}
//Education JSON
var education = {
	"schools": [
		{
			"name": "Georgia Institute of Technology",
			"location": "Atlanta, GA",
			"degree": "Ph.D.",
			"majors": ["Ph.D. in Civil Engineering"],
			"dates": "Present",
			"url": "http://www.gatech.edu/"
		},
		{
			"name": "Texas A & M University",
			"location": "College Station, TX",
			"degree": "M.S.",
			"majors": ["M.S. in Civil Engineering"],
			"dates": "July 2011",
			"url": "http://tamu.edu"
		},
		{
			"name": "Dongguk University",
			"location": "Seoul, Korea",
			"degree": "B.S.",
			"majors": ["B.S. in Architectural Engineering"],
			"dates": "February 2009",
			"url": "http://dgu.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end Web Development",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/nanodegrees"
		},
		{
			"title": "HTML5 Game Development",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/nanodegrees"
		}
	],
};
// Display education json info
education.display = function(){
	for (var school in education.schools){	
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
									.append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"]))
									.append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]));
																											
		for(var major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
		}
	}
	$("#education").append(HTMLonlineClasses);
	// Display online courses
	for (var onlineCourse in education.onlineCourses){	
		var num = education.schools.length + parseInt(onlineCourse);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]))
									.append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
									.append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
									.append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));
	}
}
//Map
$("#mapDiv").append(googleMap);
$("#header").append(googleMap);
// chartjs library from: http://www.chartjs.org/docs/#polar-area-chart
var polarData = [
  {
    value: 10,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "HTML",
    labelcolor: "red"
  },
  {
    value: 8,
    color:"#F06613",
    highlight: "#FF5A5E",
    label: "CSS",
    labelcolor: "orange"
  },
  {
    value: 7,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Javascript",
    labelcolor: "green"
  },
  {
    value: 4,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "PHP",
    labelcolor: "yellow"
  },
  {
    value: 6,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "WordPress",
    labelcolor: "gray"
  },
  {
    value: 5,
    color: "#23582b",
    highlight: "#A8B3C5",
    label: "Git",
    labelcolor: "darker-green"
  },
  {
    value: 3,
    color: "#4D5360",
    highlight: "#616774",
    label: "MySQL",
    labelcolor: "darker-gray"
  }

  ];
// Display a list of skill labels
var skillsChartLabels = function(){
	for (skill in polarData){
	  var skillLabel = polarData[skill].label;
	  var skillLabelColor = polarData[skill].labelcolor;
	  var skillHTML = '<span class="label ' + skillLabelColor + '">' + skillLabel + '</span>';
	  $("#skills-list").append(skillHTML);
	}
}

// Call functions
window.onload = function(){
	var ctx = document.getElementById("skills-chart").getContext("2d");
	window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
  		responsive:false
	});
	// Call skillsChartLabels function defined
	skillsChartLabels();
};
// Call bio, work, projects and education functions
bio.display();
work.display();
projects.display();
education.display();






