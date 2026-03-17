import Pokemon from '@/assets/images/projects/pokemon.png';
import Sphere from '@/assets/images/projects/sphere.png';
import Movosite from '@/assets/images/projects/movosite.jpg';

export const staticData = {
  header: {
    navLinks: [
      { name: 'About', url: '#about' },
      { name: 'Experience', url: '#experience' },
      { name: 'Projects', url: '#projects' },
      { name: 'Contact', url: '#contact' },
    ]
  },
  jumbotron: {
    // preName: 'Hi, my name is',
    name: 'Chelum',
    shortDesc: 'Crafted for your desire',
    quickDesc: "Handcrafted chocolate inspired by Sarawak's rich heritage and bold flavors.",
  },
  about: {
    paragraphs: [
      "CHELUM represents the pinnacle of Malaysian chocolate craftsmanship, where traditional flavors meet modern chocolate artistry. Our name reflects our commitment to excellence and our deep respect for local ingredients and heritage.",
      "Each of our five signature creations tells a unique story, blending premium chocolate with distinctive Malaysian flavors. From the crunch of traditional Tebaloi to the warmth of spices, we celebrate the rich tapestry of Malaysian taste in every bar.",
      "Our master chocolatiers source only the finest ingredients, working with sustainable local farms to create chocolate that honors both tradition and innovation. Every bar is a testament to our dedication to quality and authenticity.",
    ],
    technologies: [
      { name: 'PHP', url: 'https://www.php.net/' },
      { name: 'JavaScript (ES6+)', url: 'https://developer.mozilla.org/en-US/docs/Web/javascript' },
      { name: 'React.js', url: 'https://react.dev/' },
      { name: 'Node.js', url: 'https://nodejs.org/en' },
      { name: 'Next.js', url: 'https://nextjs.org/' },
      { name: 'Express.js', url: 'https://expressjs.com/' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      { name: 'TailwindCSS', url: 'https://tailwindcss.com/' },
      { name: 'MySQL', url: 'https://www.mysql.com/' },
      { name: 'MongoDB', url: 'https://www.mongodb.com/' }
    ]
  },
  experience: [
    {
      tabName: 'edbot.ai',
      role: 'Frontend Engineer',
      company: 'Solve Education!',
      period: 'Aug 2024 - Present',
      jobDesc: [
        "Develop features with 98%+ accuracy in design and functionality at each milestone.",
        "Maintain Jest unit test coverage above 80% to ensure stability and code quality,",
        "Deploy each feature to production on time with a 100% delivery rate,",
        "Collaborate with the backend team to maintain 99% uptime and seamless API integration,",
        "Conduct code reviews for 10+ pull requests per week to ensure best practices are applied,",
        "Monitor and fix bugs with a 95%+ resolution rate to ensure cross-device and browser compatibility."
      ]
    },
    {
      tabName: 'Gikslab',
      role: 'Frontend Developer',
      company: 'Gikslab Talenta Internasional',
      period: 'Jan - Aug 2023',
      jobDesc: [
        "Developed a robust time tracking feature with React.js and React-Redux, ensuring compliance with the 8-hour workday requirement,",
        "Contributed to migrating the codebase to Next.js, resulting in significant SEO improvements and optimizations,",
        "Implemented the company's freelance task manager feature, improving task completion efficiency by 20%",
        "Provide a subsidiary landing page using Next.js, resulting in a 25% increase in traffic."
      ]
    },
    {
      tabName: 'Cheedles',
      role: 'Web Developer',
      company: 'Cheedles Indonesia',
      period: 'Mar - Apr 2022',
      jobDesc: [
        "Developed a minimalist landing page with HTML, CSS, Bootstrap, and Vanilla JavaScript, cutting Linktree SAAS subscription costs by 100% per month,",
        "Integrated the landing page with Google Tag Manager, achieving a 90% code efficiency rate for seamless social media pixel integration,",
        "Orchestrated the integration of Google Tag Manager with Google Analytics 4, enabling meticulous tracking of social media ad-generated traffic and visitor engagement with CTAs, utilized at 100% by the owner for sales strategy optimization.",
      ]
    }
  ],
  projects: [
    {
      featured: true,
      title: 'Pokemon App',
      description: 'A web app to present complete Pokemon data. View information and characteristics of your favorite Pokemon in more detail. Like and save your favorite pokemon.',
      imgUrl: Pokemon,
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
      ],
      links: [ "https://github.com/hellofromiqbal/pokemon-app", "https://pokemon-app-gray-beta.vercel.app/" ]
    },
    {
      featured: true,
      title: 'Sphere',
      description: 'A web application that presents a variety of current articles. Similar to medium.com. See the latest articles on various topics from users, by users and for users. Create an account, follow other user accounts, like and archive articles and more.',
      imgUrl: Sphere,
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS'
      ],
      links: [ "https://github.com/hellofromiqbal/sphere-client", "https://sphere-client.vercel.app/home" ]
    },
    {
      featured: true,
      title: 'Movosite',
      description: 'A website that provides information about millions of films and television programs as well as their cast and crew. The name is an acronym for Movie Site.',
      imgUrl: Movosite,
      technologies: [
        'React.js',
        'Tailwind CSS'
      ],
      links: [ "https://github.com/hellofromiqbal/movostore", "https://movosite.vercel.app/" ]
    },
    {
      featured: false,
      title: 'WeSave',
      description: 'An example landing page website for a cybersecurity company.',
      imgUrl: "",
      technologies: [
        'React.js',
        'Tailwind CSS',
      ],
      links: [ "https://github.com/hellofromiqbal/wesave", "https://wesave.vercel.app/" ]
    },
    {
      featured: false,
      title: 'Nexus',
      description: 'A social media application with several features such as creating a post, liking a post, making account profile changes and more.',
      imgUrl: "",
      technologies: [
        'Next.js',
        'Tailwind CSS',
        'MongoDB',
      ],
      links: [ "https://github.com/hellofromiqbal/nexus", "https://nexus-socialmedia.vercel.app/" ]
    },
    {
      featured: false,
      title: 'MyStore',
      description: 'An e-commerce web application. Create an account, make order and do payment. An admin can add new items, update invoices and more.',
      imgUrl: "",
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS'
      ],
      links: [ "https://github.com/hellofromiqbal/mygrocery", "https://github.com/hellofromiqbal/mygrocery" ]
    }
  ],
  contact: {
    preTitle: "04. What's Next?",
    title: 'Get In Touch',
    paragraph: 'Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!',
    buttonText: 'Say Hello',
    buttonUrl: 'mailto:hellofromiqbal@gmail.com'
  }
};
