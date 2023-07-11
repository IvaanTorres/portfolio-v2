import { find } from '~/services/Skill'

const projects = [
  {
    id: 1,
    name: 'E-Commerce - DXP',
    description: `
    "Sweet Candy" is an ambitious E-Commerce project which is characterized by offering a front-office (online store), which allows the purchase of products that the store itself provides, in this case candy, as well as giving access to many other functions such as the wish list, customer order management, payment gateway ...
    
    Plus, the administrator has access to the back-office (management panel) where you can organize the store quickly and accurately. It offers functionalities such as the management of products, categories, brands and catalogs, as well as their respective discounts. In addition, retailers, suppliers and other logistics are custom-configured and order management can be organized in a simple way thanks to its statuses.
    Finally, a system of statistics and results is provided in order to know which products work best, the most successful catalogs or the number of sales and profits acquired in the last days, months and years.`,
    image: '',
    video: '',
    url: 'https://ecommerce-dxp.vercel.app/',
    github: 'https://github.com/IvaanTorres/ecommerce-dxp',
    isFeatured: true,
    type: 'web2',
    createdAt: 'Currently in development',
    order: 6,
    skills: [
      find('nextjs'), 
      find('reactjs'), 
      find('typescript'), 
      find('laravel'), 
      find('javascript'), 
      find('sass'), 
      find('php'), 
      find('postgresql'), 
      find('storybook'), 
      find('testing-library'),
      find('jest'),
      find('phpunit'),
      find('playwright'),
      find('githubactions'),
      find('apolloclient'),
      find('graphql'),
      find('html'),
      find('css'),
  ],
  },
  {
    id: 2,
    name: 'Real Time Chat App',
    description: `This project consists on a simple APP which offers the possibility to chat with other users in real time.
    Featured:
    - Devops Culture by using Docker environments (Dev > Staging > Prod).
    - CI/CD Pipelines and releases.
    - Unit, Integration and E2E tests.
    - Best practices: SonarQube, Husky, linters.
    
    Achivements: While the APP is quite simple functionally, It helped me to get to know the devops culture, best practices and the Socket.IO API.`,
    image: '',
    video: 'https://www.youtube.com/embed/4q-aYWbOQ1M',
    url: 'https://thunder-link.netlify.app/',
    github: 'https://github.com/IvaanTorres/ui-real-time-chat-app',
    isFeatured: true,
    type: 'web2',
    createdAt: '20/05/2022',
    order: 1,
    skills: [
      find('tailwindcss'),
      find('typescript'),
      find('vuejs'),
      find('pinia'),
      find('docker'),
      find('nodejs'),
      find('expressjs'),
      find('mongodb'),
      find('socketio'),
      find('sonarqube'),
      find('husky'),
      find('jest'),
      find('vuetestutils'),
      find('cypress'),
      find('bash'),
      find('githubactions'),
    ],
  },
  {
    id: 3,
    name: 'Travel Agency',
    description: `Final project developed in team - Associate Degree (ASc)
    Sol Experience consists in creating packs and experiences for every user who wants to travel to Málaga.
    It has its own admin menu, logging & role system and also, it can create a PDF ticket when a pack is purchased.
    
    Achivement: I learned how to use Java on desktop apps, fetching data using MySQL with it.`,
    image: '',
    video: 'https://www.youtube.com/embed/OrZ6JGzr0sQ',
    url: '',
    github: 'https://github.com/IvaanTorres/daw-travel-agency',
    isFeatured: true,
    type: 'web2',
    createdAt: '07/06/2021',
    order: 2,
    skills: [find('java'), find('css'), find('postgresql')],
  },
  {
    id: 4,
    name: 'CSS Framework',
    description: `I made this CSS Framework with the objective of learning how SASS & BEM Methodology work together.
    I'm updating this project constantly, adding new features everytime.
    
    Achivement: I learned how SASS works using variables, conditions, loops, functions and mixins.
    Also, I appreciate the use of BEM for CSS classes. I already know how to name them without making a mess everywhere !`,
    image: '',
    video: 'https://www.youtube.com/embed/iEjb2Fo4Vj0',
    url: '',
    github: 'https://github.com/IvaanTorres/css-framework',
    isFeatured: false,
    type: 'web2',
    createdAt: '16/12/2021',
    order: 3,
    skills: [find('sass'), find('bem')],
  },
  {
    id: 5,
    name: 'Web Portfolio',
    description: `I developed this web portfolio in order to show my progress in web development.`,
    image: '',
    video: 'https://www.youtube.com/embed/vw79PcZPusw',
    url: 'https://www.ivantorresweb.com',
    github: 'https://github.com/IvaanTorres/portfolio-v1',
    isFeatured: false,
    type: 'web2',
    createdAt: '05/01/2022',
    order: 4,
    skills: [find('tailwindcss'), find('vuejs'), find('typescript')],
  },
  {
    id: 6,
    name: 'PHP Framework',
    description: `I've created a personalized framework using just PHP Vanilla, which is based on MVC and has its own routing system.
    It uses different external libraries such as:
    - League/plates
    - Nikic/fast-route
    - Vlucas/phpdotenv
    
    Achivement: Thanks to this project I know how to use PHP correctly (MVC).
    Also, thanks to it, Laravel wasn't that complicated to learn due to the fact I created a complete framework based on it.`,
    image: '',
    video: 'https://www.youtube.com/embed/Yq_oC7YOFcM',
    url: '',
    github: 'https://github.com/IvaanTorres/php-framework',
    isFeatured: false,
    type: 'web2',
    createdAt: '05/11/2021',
    order: 5,
    skills: [find('php'), find('postgresql')],
  },
  // {
  //   id: 6,
  //   name: 'PHP Forum',
  //   description: `Travel Earth is a simple project developed personally in 2019 with the objective of starting to learn PHP and the use of JQuery library.
  //   I developed this project using PHP in Front-End side, fetching data from the database using MySQL.
  //   This project helped me to understand the goal of the language and the fantastic idea of dynamically change the web retrieving data from the database.
    
  //   Achivement: Thanks to this project, I learned how I can use PHP in Front-End side to develop a dynamic website.
  //   It has been my first approach to PHP and MySQL.`,
  //   image: '',
  //   video: 'https://www.youtube.com/embed/D9FQCTZVtcY',
  //   url: '',
  //   github: 'https://github.com/IvaanTorres/smr-php-forum',
  //   isFeatured: false,
  //   type: 'web2',
  //   createdAt: '16/01/2020',
  //   order: 6,
  //   skills: [find('php'), find('css')],
  // },
]

export default projects
