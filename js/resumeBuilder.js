var charEscape = function(_html) {
  var newHTML = _html;

  newHTML = _html.replace(/</g, "&lt;");
  newHTML = newHTML.replace(/>/g, "&gt;");

  return newHTML;
};

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

function locationizer(work_obj) {
  var locationArray = [];

  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }

  return locationArray;
}

// var work = {};
// work.position = "Front End Ninja";
// work.employer = "Jokket";
// work.years = 0.3;

// var education = {
//   "schools": [
//     {
//       "name": "University of Pittsburgh",
//       "cityState": "Pittsburgh, PA",
//       "degree": "BS",
//       "majors": ["Electrical Engineering"],
//       "dates": xx,
//       "url": "https://www.pitt.edu"
//     }
//   ],
//   "onlineCoureses": [
//     {
//       "title": "Front-End Web Developer Nanodegree",
//       "school": "Udacity",
//       "dates": [2014, 2015],
//       "url": "https://www.udacity.com/"
//     },
//     {
//       "title": "**Production Ready Ruby on Rails",
//       "school": "Tealeaf Academy",
//       "dates": [2013, 2014],
//       "url": "https://www.gotealeaf.com/"
//     }
//   ]
// }

var education = {};
education.name = "Udacity";
education.years = "2014-2015";
education.city = "New York, NY, US";

// var projects = {
//   "projects": [
//     {
//       "title": "dlivr",
//       "dates": "2014-2015",
//       "description": "Neighborhood delivery social network",
//       "images": "/Users/esskay/code/vcs/frontend-nanodegree-resume/images/
//       dlivr_android.png"
//     }
//   ]
// }

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
// var formattedWorkStart = HTMLworkStart;
// var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.position);
// var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
// var formattedWorkDates = HTMLworkDates.replace("%data%", work.years);
// var formattedSchoolStart = HTMLschoolStart;

$("#header").prepend(formattedWelcomeMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedGithub);
// $("#workExperience").prepend(formattedWorkStart);
// $("#workExperience").append(formattedWorkEmployer);
// $("#workExperience").append(formattedWorkTitle);
// $("#workExperience").append(formattedWorkDates);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
  $("#skills").append(formattedSkill);
}

function displayWork() {
  for (job in work.jobs) {
    // create a new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedWorkEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function inName(name) {
  name = bio.name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);
/// ** EXAMPLES ** ///////////

// function feedCat() {
//     console.log("kibble, tinned food and water");
// }

// function batheCat() {
//     console.log("tub, soap and water");
// }

// var dailyChores = [feedCat,batheCat];

// console.log(feedCat instanceof Object);

// feedCat.food = "kibble";
// console.log(feedCat.food);
// console.log(feedCat.constructor);

// batheCat.soap = "ivory";
// console.log(batheCat.soap);
// console.log(batheCat.constructor);

// var eveningChore = feedCat;eveningChore();
// console.log(eveningChore);

// function doEveningChores(chores) {
//     for(var x = 0; x < chores.length; x++)
//         chores[x]();
// }

// doEveningChores(dailyChores);

// function tonightChores() {
//     return dailyChores;
// }

// var tonight = tonightChores();
// console.log(tonight);

// var tyler = {};
// tyler.job = "lunatic";

// var makeCourse = function(){
//   // make a course
//   console.log("Made a course");
// }

// var courses = 0;
// while(tyler.job === "lunatic") {
//   makeCourse();
//   courses = courses + 1;
//   if(courses === 10) {
//     tyler.job = "liberator";
//   }
// }

//console.log(tyler.job);
// var countries = [ "Germany", "Argentina", "Brazil", "Netherlands"];
// for (country in countries) { console.log(countries[country]) }

// for (var i = 0; i < 9; i++) { console.log(i); }

// var kenner = {};
// kenner.job = "front-end dev";

// var makeApp = function () {
//   // make an app
//   console.log("Made an app");
// }

// var apps = 0;
// while (kenner.job === "front-end dev") {
//   makeApp();
//   apps = apps + 1;
//   if (apps === 10) {
//     kenner.job = "back-end dev";
//    }
// }

// console.log(kenner.job);

// var skills =
//   ["awesomeness", "programming", "teaching", "JS"];

// var bio = {
//   "name" : "tyler",
//   "age" : 32,
//   "skills" : skills
// };

// $("#main").append(bio.name);

// var name = "AlbERt EINstEiN";

// function nameChanger(oldName) {
//   var finalName = oldName;
//   // Your code goes here!
//   var names = oldName.split(" ");
//   names[1] = names[1].toUpperCase();
//   names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//   finalName = names.join(" ");
//   // Don't delete this line!
//   return finalName;
// };

// // Did your code work? The line below will tell you!
// console.log(nameChanger(name));


// var sampleArray = [0,0,7];

// var incrementlastArrayElement = function(_array) {
//   var newArray = [];
//   newArray = _array.slice(0);

//   var lastNumber = newArray.pop();
//   newArray.push(lastNumber + 1);

//   return newArray;
// }

// console.log(incrementlastArrayElement(sampleArray));

// var arr = ['this is the first element', 'this is the second element'];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[arr.length - 1]);

// var skills =
//   ["awesomeness", "programming", "teaching", "JS"];

//   $("#main").append(skills.length);

    // $("#main").append(skills[0]);

// var formattedName = HTMLheaderName.replace("%data%", "santana kenner");

// var role = "Full Stack Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);


// var email = "sskenner@gmail.com";

// var newEmail =
//     email.replace("gmail", "udacity");

// console.log(email);
// console.log(newEmail);

// var awesomeThoughts = "i am ssk and i am awesome!";

// var funThoughts =
//     awesomeThoughts.replace("awesome", "fun");

// $("#main").append(funThoughts);

// console.log(funThoughts);

// var firstName = "ssk";

// var age = 32;

// console.log(firstName);

// $("#main").append("santana kenner");
