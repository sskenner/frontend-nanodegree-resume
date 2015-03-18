var bio = {
  "name" : "santana kenner",
  "role" : "Full Stack Web Developer",
  "contacts" : {
    "mobile" : "347-661-3311",
    "email" : "sskenner@gmail.com",
    "github" : "sskenner",
    "twitter" : "@355ka3",
    "location" : "Brooklyn, NY"
  },
  "welcomeMessage" : "'May I never be complete. May I never be content. May I never be perfect.' ~Fight Club",
  "skills" : [
    "Back-End", "Front-End", "Alogos", "Cloud", "Start-ups"
  ],
  "bioPic" : "images/kennerlogo.jpeg"
  // "bioPic" : "images/kennerlogo.jpeg"
};

var work = {
  "jobs": [
    {
      "employer": "Google",
      "title": "Front-End Ninja",
      "location": "Mountain View, CA",
      "dates": "month 2009 - Current",
      "description": "I program programs that program programs"
    },
    {
      "employer": "Liquid Talent",
      "title": "Web Developer",
      "location": "New York, NY",
      "dates": "month 2014 - month 2015",
      "description": "Design and develop flagship product (freelancer marketplace) and associaed web/mobile properties"
    },
    {
      "employer": "Jokket",
      "title": "Web Developer",
      "location": "Washington, DC",
      "dates": "month 2014 - month 2015",
      "description": "Design and develop flagship product (freelancer marketplace) and associaed web/mobile properties"
    },
    {
      "employer": "iGotITtoo",
      "title": "Co-Founder",
      "location": "Brooklyn, NY",
      "dates": "month 2009 - Current",
      "description": "I program programs that help the underserved leverage technology."
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "dlvr",
      "dates": "2014 - 2015",
      "description": "Neighborhood delivery social network",
      "images": []
    },
    {
      "title": "another",
      "dates": "2014 - 2015",
      "description": "Neighborhood delivery social network",
      "images": ["images/rsz_1dlivr_android.png"]
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "University of Pittsburgh",
      "location": "Pittsburgh, PA",
      "degree": "BS",
      "majors": ["Electrical Engineering"],
      "dates": "1993 - 1996 ",
      "url": "https://www.pitt.edu"
    }
  ],
  "onlineCoureses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "date": 2015,
      "url": "https://www.udacity.com/"
    },
    {
      "title": "**Production Ready Ruby on Rails",
      "school": "Tealeaf Academy",
      "date": 2013,
      "url": "https://www.gotealeaf.com/"
    }
  ]
};

// display bio /////////////////////////////////////////////////////////////////

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedTwitter);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLocation);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);
  $("#header").append(HTMLskillsStart);
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedLocation);

  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $('#header').append(formattedSkill);
  }
}
bio.display();

// display work ////////////////////////////////////////////////////////////////

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedWorkEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();

// display projects ////////////////////////////////////////////////////////////

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
projects.display();

// display education ///////////////////////////////////////////////////////////

education.display = function() {
  $("#education").append(HTMLonlineClasses);

  for (school in education.onlineCoureses) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCoureses[school].title);
    $(".education-entry:last").append(formattedTitle);

    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCoureses[school].school);
    $(".education-entry:last").append(formattedSchool);

    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCoureses[school].date);
    $(".education-entry:last").append(formattedDates);

    var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCoureses[school].url);
    $(".education-entry:last").append(formattedUrl);
  }
  $("#education").append(HTMLschoolTitle);

  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);

    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedMajor);
  }
}
education.display();

// google maps location ////////////////////////////////////////////////////////

function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }

  return locationArray;
}
$("#mapDiv").append(googleMap);

// format name for internalization /////////////////////////////////////////////

function inName(name) {
  name = bio.name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}
$('#main').append(internationalizeButton);

// protection agains malicious scripts /////////////////////////////////////////

var charEscape = function(_html) {
  var newHTML = _html;

  newHTML = _html.replace(/</g, "&lt;");
  newHTML = newHTML.replace(/>/g, "&gt;");

  return newHTML;
};
