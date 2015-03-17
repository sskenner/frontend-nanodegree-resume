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
      "dates": "1993 - 1996",
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

  $("#header").prepend(formattedWelcomeMsg);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").prepend(formattedBioPic);
  $("#header").append(HTMLskillsStart);
  $("#topContacts").prepend(formattedMobile);
  $("#topContacts").prepend(formattedLocation);
  $("#topContacts").prepend(formattedEmail);
  $("#topContacts").prepend(formattedTwitter);
  $("#topContacts").prepend(formattedGithub);
  $('#footerContacts').append(formattedMobile);
  $('#footerContacts').append(formattedEmail);
  $('#footerContacts').append(formattedGithub);
  $('#footerContacts').append(formattedTwitter);
  $('#footerContacts').append(formattedLocation);

  for (skill in bio.skills){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $('#skills').append(formattedSkill);
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

/// ** EXAMPLES ** ///////////


// function Pet(name, species, hello) {
//   this.name = name;
//   this.species = species;
//   this.hello = hello;
//   this.sayHello = function() {
//     console.log(this.hello);
//   }
// }

// var rufus = new Pet("Rufus", "cat", "miaow");
// console.log(rufus.constructor.toString());

// var pets = [];
// pets.push(new Pet("Rufus", "cat", "miaow"));
// pets.push(new Pet("Casper", "bird", "squark!"));
// pets.push(new Pet("Sabby", "dog", "woof"));

// for(var x=0; x<pets.length; x++) {
//   console.log(pets[x].name + " is a " + pets[x].species);
//   pets[x].sayHello();
//   console.log(pets[x].constructor.toString());
// }

// var onTheMoon = true;

// var thingsToDoToday = function flyToTheMoon() {
//   if(!onTheMoon)
//     flyToTheMoon();
//   else
//     console.log("1 small step ..");
// }
// thingsToDoToday();

// for(var x=0; x<=900; x++) {
//   var myFunction = function() {
//     console.log("when " + x + " years old .. u will not.");
//   }
//   myFunction();
// }

// var skywalker = "luke skywalker"
// // var skywalker = "someone else"

// var chooseSide;

// if(skywalker === "luke skywalker") {
//   chooseSide = function() {
//     return "jedi";
//   }
// }
// else {
//   chooseSide = function() {
//     return "sith";
//   }
// }
// alert(chooseSide());

// $(document).ready(function() {
//   console.log("page has loaded.");
// });

// function itIsATrap(theTrap) {
//   theTrap();
// }

// itIsATrap(function() { console.log("many have died for this info"); });

// var toDoToday = [
//   function() { console.log("shortie storm trooper?") },
//   function() { console.log("boring") }
// ];
// for(var x=0; x<toDoToday.length; x++) {
//   toDoToday[x];
// }

// var jabbaTheHut = {
//   laugh : function() { console.log("hoes!"); }
// }
// jabbaTheHut.laugh();

// function destroyDeathStar() {
//   console.log("stay on target, stay on target");
// }
// destroyDeathStar();

// var destroyDeathStar2 = function() {
//   console.log("stay on target, stay on target");
// }
// destroyDeathStar2();

// var destroyDeathStar;
// var pilot = "luke skywalker"
// // var pilot = "someone else"

// if(pilot === "luke skywalker") {
//   destroyDeathStar = function() {
//     console.log("may the force be with u");
//   }
// }
// else {
//   destroyDeathStar = function() {
//     console.log("gold 5 to red leader, lost tiree, lost dutch");
//   }
// }
// destroyDeathStar();

// var destroyDeathStar = function() {
//   console.log("stay on target, stay on target");
// }
// destroyDeathStar();

// destroyDeathStar();

// function destroyDeathStar() {
//   console.log("stay on target, stay on target");
// }

// var ArrayUtil = {
//   contains : function(array, element) {
//     for(var x=0; x<array.length; x++) {
//       if(array[x] == element)
//         return true;
//     }
//     return false;
//   },
//   exclude : function(list, items) {
//     //
//   },
//   makeList : function(list) {

//   }
// }

// var list = ["A", "B", "C"];
// console.log("Has A? " + ArrayUtil.contains(list, "A"));

// var navigationElement = {};

// this.fireElement({element: navigationElement, state : "active"});

// function onNavigationStateChange(e) {
//   // do something
//   console.log(e.element.id + " is " + e.state);
// }

// var sabby = {
//   name : "Sabby",
//   species : "cat",
//   hello : function() { console.log("hisses"); }
// };

// console.log(sabby.name + " is a " + sabby.species);
// sabby.hello();

// var empty1 = {};
// var empty2 = new Object();



// var casper = new Object();
// casper["name"] = "casper";
// casper["species"] = "bird";
// casper["hello"] = function() { console.log("squark! squark!") }

// console.log(casper.name + " is a " + casper.species);
// casper.hello();

// var rufus = new Object();
// rufus.name = "rufus";
// rufus.species = "cat";
// rufus.hello = function() {console.log("miaow"); }

// for(var property in rufus)
//   console.log(rufus[property].toString());

// var myObject = {
//   property1: "chocolate",
//   property2: "cake",
//   property3: "brownies"
// }

// for(var x=1; x<4;x++)
//   console.log(myObject["property" + x]);

// console.log(rufus.name + " is a " + rufus.species);
// rufus.hello();

// var sabby = {
//   name: "Sabby",
//   species: "cat",
//   hello : function() { console.log("hisses"); }
// };

// // var chocolateBars = [
// //   {name: "Galaxy", manufacturer: "Mars"},
// //   {name: "Snickers", manufacturer: "Mars"},
// //   {name: "Crunchie", manufacturer: "Cadbury"},
// //   {name: "Aero", manufacturer: "Nestle"},
// //   {name: "M&Ms", manufacturer: "Mars"},
// //   {name: "Chunky", manufacturer: "Nestle"},
// //   {name: "Double Decker", manufacturer: "Cadbury"}
// //   ]

// var childrenOfTheWorld = [
//   {name: "George", naughtiness: 1},
//   {name: "Sam", naughtiness: 5},
//   {name: "Chris", naughtiness: 2},
//   {name: "Adam", naughtiness: 6},
//   {name: "Michie", naughtiness: 3},
//   {name: "Clarissa", naughtiness: 7},
//   {name: "Denise", naughtiness: 4}
//   ]

// // var marsChocolate = [];

// // for(var x = 0; x < chocolateBars.length; x++) {
// //   if(chocolateBars[x].manufacturer === "Mars")
// //     marsChocolate.push(chocolateBars[x]);
// // }

// // for(var x = 0; x < marsChocolate.length; x++) {
// //   console.log(marsChocolate[x].name);
// // }

// var array_helper = {
//   filter: function(list, filter) {
//     var matches = [];

//     for(var x = 0; x < list.length; x++) {
//       if(filter(list[x]))
//         matches.push(list[x]);
//     }
//     return matches;
//   }
// };

// // var marsChocolate2 = array_helper.filter(chocolateBars,
// //   function(item) {
// //     return item.manufacturer === "Mars"
// //   });

// var naughtyList = array_helper.filter(childrenOfTheWorld,
//   function(item) {
//     return item.naughtiness > 4;
//   });

// var niceList = array_helper.filter(childrenOfTheWorld,
//   function(item) {
//     return item.naughtiness <= 4;
//   });

// console.log(naughtyList);
// console.log(niceList);


//  var chocolateBars = [
//   {name: "Galaxy", manufacturer: "Mars"},
//   {name: "Hershey", manufacturer: "Hershey"},
//   {name: "Twix", manufacturer: "Mars"}
//   ];

// var marsChocolate = [];
// for(var x = 0; x < chocolateBars.length; x++) {
//   console.log(chocolateBars[x]);

//   if(chocolateBars[x].manufacturer == "Mars")
//     marsChocolate.push(chocolateBars[x]);
// };

// console.log(marsChocolate);

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
