export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Resume", link: "#resume" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Looking to contribute as a Developer in a dynamic team environment ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Ex-Intern at Starkin Solutions; learning advanced SQL and DSA in Java currently.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "GESTURA – Sign Language to Gender-Based Speech System",
    des: "AI-powered accessibility system translating Indian Sign Language gestures to real-time speech. Integrated DeepFace gender detection with FastAPI backend.",
    img: "/Gestura.png",
    iconLists: ["/python.png", "/fastapi.png", "/ml.png"],
    link: "https://github.com/charanpagadala07/Gestura",
    thumbnail: "/Gestura.png",
    skillset: "Python, FastAPI, MediaPipe, DeepFace, Machine Learning",
  },
  {
    id: 2,
    title: "AI-Powered Fitness Recommendation Application",
    des: "Spring Boot microservices architecture with 6 modular services. Token-driven security with Keycloak and RabbitMQ messaging optimization.",
    img: "/Fitmind.png",
    iconLists: ["/java.png", "/springboot.png", "/rabbitmq.png"],
    link: "https://github.com/charanpagadala07/Fitness-Recommendation-Application",
    thumbnail: "/Fitmind.png",
    skillset:
      "Java, Spring Boot, Microservices, Keycloak, RabbitMQ, Google Gemini API",
  },
  {
    id: 3,
    title: "Blogoodle - a Cartoonic Twitter Clone",
    des: "Cartoon-style blogging app inspired by Twitter. Users can write, explore blogs, and connect with people in a fun interface.",
    img: "/blogoodle.png",
    iconLists: ["/node.png", "/tail.svg", "/re.svg", "/jscript.png"],
    link: "https://blogoodle.onrender.com/",
    thumbnail: "/blogoodle.png",
    skillset: "React, Node.js, Tailwind CSS, JavaScript",
  },
  {
    id: 4,
    title: "ChatMate - A Real-time Chat Application",
    des: "Real-time chat application built with MERN stack and Socket.io. Features user authentication, live messaging, and online/offline status indicators.",
    img: "/Chatmate.png",
    iconLists: ["/re.svg", "/tail.svg", "/jscript.png"],
    link: "https://chatmate-pmbj.onrender.com/",
    thumbnail: "/Chatmate.png",
    skillset: "React, Express, Node.js, Socket.io, Tailwind CSS",
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
// ];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Intern @ Starkin Solutions",
    desc: "Gained hands-on experience in optimizing application performance, managing tasks within a team, improving communication skills, and meeting deadlines efficiently.",
    className: "md:col-span-2",
    thumbnail: "./lono.jpeg",
    // },
    // {
    //   id: 2,
    //   title: "Mobile App Dev - JSM Tech",
    //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    //   className: "md:col-span-2", // change to md:col-span-2
    //   thumbnail: "/exp2.svg",
    // },
    // {
    //   id: 3,
    //   title: "Freelance App Dev Project",
    //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    //   className: "md:col-span-2", // change to md:col-span-2
    //   thumbnail: "/exp3.svg",
    // },
    // {
    //   id: 4,
    //   title: "Lead Frontend Developer",
    //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/charanpagadala07",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Charanpagadala7",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/charanpagadala3011",
  },
];
