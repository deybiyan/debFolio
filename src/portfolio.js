/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set true to use animated Lottie illustrations
};

const greeting = {
  username: "daveIan",
  title: "Hi, I'm Dave Ian",
  subTitle:
    "Solution-Driven Software Engineer 🚀 with experience designing, developing, and supporting enterprise desktop and web applications.",
  subtext:
    "Skilled in C# .NET, ASP.NET, WPF, SQL Server, JavaScript, React, and modern web technologies, with a strong focus on building reliable, scalable, and user-friendly solutions.",

  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/deybiyan",
  linkedin: "https://www.linkedin.com/in/dave-ian-olicia/",
  gmail: "ianolicia@gmail.com",
  gitlab: "https://gitlab.com/deybiyan",
  facebook: "https://www.facebook.com/dave.ian.olicia",
  medium: "https://medium.com/@daveianolicia",
  stackoverflow: "https://stackoverflow.com/users/10422806/dave-ian-olicia",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Tech Stack",
  subTitle:
    "Driven by curiosity and a passion for software engineering, I enjoy working across the entire development stack—from crafting intuitive user interfaces to building reliable backend systems.",
  skills: [
    emoji("⚡ Develop modern, responsive, and accessible user experiences"),
    emoji(
      "⚡ Build APIs and backend services with maintainability and performance in mind"
    ),
    emoji("⚡ Work with cloud services, databases, and deployment pipelines"),
    emoji(
      "⚡ Explore emerging technologies and best practices to deliver better solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Copilot",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/github-copilot/default.svg"
    },
    {
      skillName: "Ollama",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/ollama/default.svg"
    },
    {
      skillName: "Azure OpenAI",
      fontAwesomeClassname: "fab fa-openai"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "devicon-csharp-plain"
    },
    {
      skillName: ".Net Core",
      fontAwesomeClassname: "devicon-dotnetcore-plain"
    },
    {
      skillName: "Entity Framework",
      fontAwesomeClassname: "devicon-entityframeworkcore-plain"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "devicon-microsoftsqlserver-plain"
    },
    {
      skillName: "GraphQL",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/graphql/default.svg"
    },
    {
      skillName: "DatoCMS",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/datocms/default.svg"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "fab fa-typescript"
    },
    {
      skillName: "WinForms",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "MSTest",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "NUnit",
      fontAwesomeClassname: "fas fa-check-double"
    },
    {
      skillName: "Playwright",
      fontAwesomeClassname: "devicon-playwright-plain"
    },
    {
      skillName: "Azure Services",
      fontAwesomeClassname: "devicon-azure-plain"
    },
    {
      skillName: "Azure DevOps",
      fontAwesomeClassname: "devicon-azuredevops-plain"
    },
    {
      skillName: "IIS Hosting",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
  display: true, //Set it to true to show workExperiences Section
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
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "A collection of projects I've designed, developed, and contributed to throughout my journey as a software engineer.",
  subtext:
    "Each project represents a unique challenge, an opportunity to learn, and a chance to build solutions that deliver real value to users and businesses.",
  projects: [
    {
      // image: require("./assets/images/fdmhub.gif"),
      video: require("./assets/images/fdmhub.mp4"),
      projectName: "FDM Hub",
      projectDesc:
        "FDM Hub is a full-stack AI-powered diagnostic platform with an ASP.NET Core (.NET 10) API and a Next.js TypeScript frontend that ingests AMS workspace artifacts, stores ticket snapshot data, and evaluates compatibility rules against versioned matrix requirements.",
      footerLink: [
        {
          name: "Internal Company Website"
          // url: "http://fdmhub.com/" --- IGNORE ---
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/persol.gif"),
      video: require("./assets/images/persol.mp4"),
      projectName: "Persol Outsourcing Website",
      projectDesc:
        "PERSOL Outsourcing is a leading outsourcing and managed services provider that delivers customer experience, corporate support, and technical solutions. By integrating people, processes, and technology, they help businesses streamline operations, enhance service delivery, and scale efficiently across diverse industries.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.persoloutsourcing.com/"
        }
      ]
    },
    {
      // image: require("./assets/images/tdc.gif"),
      video: require("./assets/images/tdc.mp4"),
      projectName: "TREX Data Collector",
      projectDesc:
        "Windows Forms desktop application (targeting .NET 10) that collects and exports configuration data from AMS Trex Device Communicator, integrating with devices over a network and writing the results to structured output files. ",
      footerLink: [
        {
          name: "Internal Company Tool"
          // url: "http://nextu.se/" --- IGNORE ---
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
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
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
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
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
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's Connect! ☎️"),
  subtitle: "Let's build something great together.",
  subtext:
    "My inbox is always open for discussions, collaborations, and opportunities.",
  number: "+63-967-319-0974",
  email_address: "ianolicia@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
