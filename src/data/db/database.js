import Mock from "../mock";

const database = {
  information: {
    name: 'Conner Chessmore',
    aboutContent: "I am a full stack web developer. I have a drive to constantly learn new things and challenge myself, and have a passion for always trying to improve myself and anything I work on.",
    nationality: 'American',
    email: 'connerchessmore@gmail.com',
    freelanceStatus: 'Available',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/conner-chessmore',
      github: 'https://github.com/CChessmore/'
    },
    brandImage: '/images/brand-image.png',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/CodingResume.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "I can give you suggestions on improving the flow of your website, deciding on a theme, touching up rough spots, or finding a totally new design."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "With my knowledge of PHP, SQL, JavaScript, HTML, CSS, and other modern web languages, I can build your site from the ground up to meet your business needs."
    },
  ],
  reviews: [
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 90
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "PHP",
      value: 80
    },
    {
      title: "Python",
      value: 80
    },
    {
      title: "SQL",
      value: 70
    },
    {
      title: "ReactJS",
      value: 50
    },
  ],
  projects: [
    {
      id:1,
      title:"Hays Gym and Dojo Page",
      subtitle: "A website designed for the 24 hour gym in Hays, Kansas and the Tae Kwon Do academy they run. A real website for my first freelance client. Utilizes HTMl and CSS templates.",
      imageUrl: "images/projects-haysgym.JPG",
      largeImageUrl: ["images/projects-haysgymbig.JPG"],
      url: "#"
    },
   {
     id:2,
     title: "Shape Builder",
     subtitle: "Create custom shapes on Google Maps. A project that started as a class project but grew into a fellow student's capstone final. This is my piece of that capstone.",
     imageUrl: "images/projects-mapshapes.JPG",
     largeImageUrl: ["images/projects-mapshapesbig.JPG"],
     url: 'https://github.com'
   },
   {
     id:3,
     title:"Fibonacci Finder",
     subtitle: "Enter a number and see if it's in the Fibonacci sequence. This was a project for one of my development courses.",
     imageUrl: "images/projects-fibonacci.JPG",
     largeImageUrl: ["images/projects-fibonaccibig.JPG"],
     url: 'https://github.com'
   },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2020 - 2021",
        position: "Front End Web Developer",
        company: "Hays Main Street Gym",
        details: "Worked on a freelance basis as sole developer of a new website for Hays Main Street Gym in Hays, Kansas. Created a page to fulfill basic informative needs for the gym and attached Tae Kwon Do dojo and utilized SEO practices to reach new customers."
      },
      {
        id: 2,
        year: "2019 - 2020",
        position: "Graduate Teaching Assistant",
        company: "Fort Hays State University",
        details: "Assisted faculty in proctoring and grading classes. Tutored students as needed and organized department trips to potential student employers. Participated in hiring process for new faculty as student representative and outlined an introductory course for data visualization."
      },
      {
        id: 3,
        year: "2019 - 2019",
        position: "Web Developer (Intern)",
        company: "Paperleap",
        details: "Worked to establish basic website structure and routing for startup company's project. Utilized a proprietary PHP framework and SQL to establish user account and task creation. Worked under guidance of senior developer to ensure quality of commits to GitHub."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - 2021",
        graduation: "Master of Professional Studies",
        university: "Fort Hays State University",
        details: "I continued my education in Web and Mobile Application Development by exploring the MEAN stack, Android Studio app development, and designing an introductory data visualization course as well as creating a web page for a local business. "
      },
      {
        id: 2,
        year: "2016 - 2019",
        graduation: "Bachelor of Science",
        university: "Fort Hays State University",
        details: "I transferred to Fort Hays State University to change majors and began learning front end development languages such as HTML, CSS, JavaScript, and back end languages such as PHP, Python, and SQL, as well as studying how to make intuitive, usable designs, and efficient, functional database schemas."
      },
      {
        id: 3,
        year: "2014 - 2016",
        graduation: "Incomplete(Transferred)",
        university: "South Dakota School of Mines and Technology",
        details: "My college career began with studying Computer Science at South Dakota School of Mines and Technology. I was part of the eSports club as Secretary and Treasurer before deciding I wanted a different direction with my education."
      }
    ]
  },
  blogs: [
    
  ],
  contactInfo: {
    phoneNumbers: ['308-520-3724'],
    emailAddress: ['connerchessmore@gmail.com'],
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/projects").reply(config => {
  const response = database.projects;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});
