import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    carrent,
    gymApp,
    nikeapp,
    phanox,
    dashboard,
    three,
    weather,
    felixbble,
    mongodb,
    node,
    twitt

  } from "@/assets";

  import next from  "@/assets/next.png"
  
  export const navLinks = [
    {
      id: "#about",
      title: "About",
    },
    {
      id: "#work",
      title: "Work",
    },
    {
      id: "#contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "NextJS Developper",
      icon: creator,
    },
    
    
  ];
  
  const technologies = [
   
   
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
  
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name:"nextJs",
      icon:next
    }
    ,
    {
      name:"mongo",
      icon:mongodb
    },
    {
      name:"nodejs",
      icon:node
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   {
      name: "git",
      icon: git,
    },
     {
      name: "HTML 5",
      icon: html,
    }, {
      name: "CSS 3",
      icon: css,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "",
      icon: reactjs,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
       "Passionate React.js developer based in Algeria, dedicated to creating responsive and dynamic web applications.",
        " Proficient in building user-friendly interfaces to create high-quality products.",
        "Developed and maintained web applications using React.js examples right below .",
        
      ],
    },
    {
      title: "NextJs Developer",
      company_name: "",
      icon: next,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using NEXT.js ",
        "Leveraged Next.js SSR and SSG to create high-performance web applications.",
        "implement nextJs Features to serve fast web apps"
      ],
    },
    {
      title: "Node-Js & MongoDB",
      company_name: "",
      icon: node,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "designing, implementing, and optimizing databases for web applications. ",
        "Implemented custom middleware for request and response processing.",
        "Utilized Mongoose for schema validation and modeling and Storing Data.",
        "Developed server-side applications using Express.js.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Mark christopher ",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "mike Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My Portfolio",
      description:
        "The App you're using now ,it's  Web-app that Show my Work for you and give you the ability to contact me Right Below :) ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      dir:"center",
      image: three,
      
    },
    {next:true,
      name: "Full Stack Dribble clone ",
      description:
        "App inspired from dribble with full stack features => ( CRUD , authentication ) that provide  for users share their projects pictures and source repos and livesites with some description with dark theme version  ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },

        {
          name: "NextJs",
          color: "text-red-800",
        },
        {
          name: "Tailwind",
          color: "text-cyan-400",
        },
        {
          name: "Headless UI",
          color: "text-green-600",
        },
      ],
      dir:"left",
      image: felixbble,
      source_code_link: "https://felixbble-theme.vercel.app/",
    },
    
   
    {next:true,
      name: "E-Commerce App",
      description:
        "Web application that can present your E-Commerce Products and can be easly modified by using sanity studio interface and can accept real orders if needed  by using stripe ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },

        {
          name: "Sanity",
          color: "text-pink-200",
        },
        {
          name: "Stripe",
          color: "text-violet-200",
        },
      ],
      dir:"right",
      image: phanox,
      source_code_link: "https://phanox-theme.vercel.app/",
    },
    {
      next:true,
      name: "threads-clone CRUD app ",
      description:
        "Full-Stack  CRUD App built with nextJs and MongoDB and Clerk with Authentication support and profile cutomization and users search and infinit scroll   ",
      tags: [
        {
          name: "Clerk",
          color: "blue-text-gradient",
        },

        {
          name: "NextJs",
          color: "text-red-800",
        },
        {
          name: "MongoDB",
          color: "text-cyan-400",
        },
      ],
      dir:"left",
      image: twitt,
      source_code_link: "https://twitt-clone-pi.vercel.app/",
    },
        {
      next:true,
      name: "Weather API  App",
      description:
        "Web application that can present for You  live data and Charts of the weather in any place you want with a clean ui ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },

        {
          name: "NextJs",
          color: "text-red-800",
        },
        {
          name: "Trmeor",
          color: "text-cyan-400",
        },
      ],
      dir:"right",
      image: weather,
      source_code_link: "https://weather-git-main-mohamed-younes16.vercel.app/",
    },
    {
      name: "Dashboard App",
      description:
        "Web application that can present for You  live data and Charts if you Bind it with an api or any sort of data and it provide  many tools using syncFusion Libray Components with togglable Theme Presets ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },

        {
          name: "Sanity",
          color: "text-pink-200",
        },
        {
          name: "Stripe",
          color: "text-violet-200",
        },
      ],
      dir:"right",
      image: dashboard,
      source_code_link: "https://dashboard-sample-ten.vercel.app/",
    },
    {next:true,
      name: "Car Rent  App",
      description:
        "Web application that usese cars api to show cars based on search parameters and filters based on server side rendering ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },

        {
          name: "Headless-Ui",
          color: "text-cyan-400",
        },
        {
          name: "NextJs",
          color: "text-red-600",
        },
      ],
      dir:"right",
      image: carrent,
      source_code_link: "https://car-rent-theme-mohamed-younes16.vercel.app/",
    },{
      name: "GYM Presentation",
      description:
        "Web application that can present your gym or commerce to People and share your work",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "pink-text-gradient",
        },
      ],
      dir:"right",
      image: gymApp,
      source_code_link: "https://mohamed-younes16.github.io/gym-app/",
    },

   {
      name: "nike theme template",
      description:
        "A design theme for nike shoes selling shop with stylish items presentation.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        
      ],
      image: nikeapp,
      dir:"center",
      source_code_link: "https://mohamed-younes16.github.io/nike-theme",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };