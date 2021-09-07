/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Nisha Holloway",
  title: "Nisha Holloway",
  subTitle: emoji(
    "Hi 👋🏽, I am a passionate Software Engineer based in Virginia. I love building Web Apps, learning new skills and technologies, cloud technologies, and releasing reliable applications. "
  ),
  resumeLink:
    "https://docs.google.com/file/d/183cMfnNxK4pgi2obddpYb3kmgsL3BmPa_2hY6t9kV7E/view?usp=sharing",

  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nanifour",
  linkedin: "https://www.linkedin.com/in/darnisha-holloway-013/",
  gmail: "nholloway013@gmail.com",
  // Instagram, Twitter, Facebook, gitlab, medium, stackoverflow, are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: emoji("What I Do 👩🏽‍💻"),
  subTitle: "CRAZY FULL STACK ENGINEER WHO ALWAYS WANTS TO LEARN",
  skills: [
    emoji("🚀 Develop well-designed object-oriented programs in C++, Java, etc."),
    emoji("🚀 Software development, design, debugging, and testing of the C++, Java, and Python"),
    emoji(
      "🚀 Integrate third party services such as Firebase / AWS / API's"
    ),
    emoji("🚀 Learn new tech skills, languages, and frameworks in a short time")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: emoji("Old Dominion University 🦁"),
      logo: require("./assets/images/oduLogo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2016 - August 2020",
      desc: "Minor: Cybersecurity",
      descBullets: [
        "Relevant Coursework: Software Engineering, Web Security, Data Structures and Algorithms, Operating Systems"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: emoji("💻 Projects 🎯"),
  subtitle: "SOME PROJECTS THAT I'VE WORKED ON",
  projects: [
    {
      image: require("./assets/images/screenshots/tesla-home.webp"),
      imageCover: emoji("> Tesla's Landing Page 🚗 _ "),
      projectName: "Tesla Landing Page Clone",
      projectDesc: "A front-end application that mimics Tesla's landing page. Built with React + Redux, Styled Components, and Material UI icons",
      footerLink: [
        {
          name: "Demo",
          url: "https://nanifour.github.io/tesla-clone/"
        },
        {
          name: "Github",
          url: "https://github.com/nanifour/tesla-clone"
        }
        //  you can add extra buttons here.
      ],
      languageTag: [
        {
          tagname: "React" 
        }, 
        {
          tagname: "Redux"
        },
        {
          tagname: "CSS"
        },
        {
          tagname: "Styled Components"
        },        
        {
          tagname: "MaterialUI"
        }
      ]
    },
    {
      image: require("./assets/images/screenshots/member-home.webp"),
      imageCover: emoji("> PHP Registration & Login 🐶_ "),
      projectName: "Royal Pups",
      projectDesc: "A full Stack PHP login and registration form built with PHP, Bootstrap5, Javascript, and SQLite. This project contains two data entry forms, one for registrations and one for events. Only users who are logged in are able to add events. ",
      footerLink: [
        {
          name: "Demo",
          url: "https://royal-pup-php.herokuapp.com/"
        },
        {
          name: "Github",
          url: "https://github.com/nanifour/php-registration"
        }
        //  you can add extra buttons here.
      ],
      languageTag: [
        {
          tagname: "PHP" 
        }, 
        {
          tagname: "HTML"
        },
        {
          tagname: "Boostrap5"
        },        
        {
          tagname: "CSS"
        },
        {
          tagname: "SQLite3"
        }
      ]
    },
    {
      image: require("./assets/images/screenshots/red-player.webp"),
      imageCover: emoji("> 6x6 Checkers 🔴⚫️ _ "),
      projectName: "C++ Checkers",
      projectDesc: "Multiplayer 6x6 Checkers board game. Implemented solely in C++. Players earn points for jumping their opponent pieces. The first player that gets to 3 points wins.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/nanifour/cpp-checkers"
        }
      ],
      languageTag: [
        {
          tagname: "C++" 
        }, 
        {
          tagname: "Board Game"
        }, 
        {
          tagname: "Multiplayer"
        },  
        {
          tagname: "Checkers"
        }     
      ]
    },
    {
      image: require("./assets/images/screenshots/hospital-cpp.webp"),
      imageCover: emoji(">🏥 Hospital Management System 👩🏽‍⚕️ _ "),
      projectName: "C++ Hospital Management System",
      projectDesc: "A Hospital Management System that allows you to manage appointments, slots, doctors, patients, patient records. This project uses OOP, Classes, Encapsulation, Data Abstraction, and Input and Output files",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/nanifour/hospital-management"
        }
        //  you can add extra buttons here.
      ],
      languageTag: [
        {
          tagname: "C++" 
        }, 
        {
          tagname: "Object-Oriented-Programming"
        },
        {
          tagname: "Data Structures"
        }       
      ]
    },
    {
      image: require("./assets/images/screenshots/search-form.webp"),
      projectName: "Search Forms",
      imageCover: emoji("> Search Forms 🔎 _ "),
      projectDesc: "Search six websites from one. This project was practice with html form actions, input, and identifying the query (search) strings of different websites. Made with HTML and CSS.  ",
      footerLink: [
        {
          name: "Demo",
          url: "https://nanifour.github.io/search-forms/"
        },
        {
          name: "Github",
          url: "https://github.com/nanifour/search-forms"
        }
        //  you can add extra buttons here.
      ],
      languageTag: [
        {
          tagname: "HTML" 
        }, 
        {
          tagname: "CSS"
        },
        {
          tagname: "Query Strings"
        }      
      ]
    },
    {
      image: require("./assets/images/screenshots/double-hex.webp"),
      projectName: "Color Flippers",
      imageCover: emoji("> Color Flippers 🙂🦎 _ "),
      projectDesc: " Three simple color flippers that allow the user to change the background to a random color when a button is clicked. The three color flippers in this project are: RGB, hex, side by side hex (double hex). ",
      footerLink: [
        {
          name: "Demo",
          url: "https://nanifour.github.io/multi-color-flippers/"
        },
        {
          name: "Github",
          url: "https://github.com/nanifour/multi-color-flippers"
        }
        //  you can add extra buttons here.
      ],
      languageTag: [
        {
          tagname: "HTML" 
        }, 
        {
          tagname: "CSS"
        },
        {
          tagname: "Javascript"
        }      
      ]
    }

  ],

  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "AWS Cloud Practitioner Certification",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project, opportunity, or just want to say hi? My Inbox is open for all!",
  number: "8043328306",
  email_address: "nholloway013@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
