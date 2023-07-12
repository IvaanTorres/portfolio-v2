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
      // find('javascript'), 
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
      // find('html'),
      // find('css'),
  ],
  },
  {
    id: 2,
    name: 'Real Time Chat App',
    description: `
    "Thunder Link" is a project which seeks to offer a new means of communication to the public. Thanks to it, everyone has the possibility to chat in real time from the same place.

    Concerning the technical side, I aimed the devops part to be the main focus of this project.
    Going a bit further, I decided to use Docker to create different environments working spaces (dev, staging and prod) from the new images that I was creating after each sprint for the UI and API (which are published on Docker Hub) thanks to the stages feature of Dockerfiles.
    When pushing, the code is analyzed by SonarQube and if everything is correct and unit and E2E test passed, the image is built and pushed to the Docker repository thanks to the CI/CD pipelines.
    Finally, the application is deployed on Railway and Netlify, which are linked to the GitHub repository.
    `,
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
    description: `
    "Sol Experience" is the result of a team project which focuses on offering new experiences to tourists who wish to visit the city of Malaga.
These experiences are stored and a PDF invoice is issued which summarizes the order placed.

In terms of functionalities per se, "Sol Experience" is divided into 2 parts:
- Client: The customer has the ability to create an account associated with him, which he will use to create packs with numerous activities, which will be managed and finally purchased. Once the transaction is completed, an invoice is issued with the purchase summary.
- Administrator: In addition to the "Client" functionalities, it allows access to a database view in the app itself where new activities can be created, updated or deleted, among others functionalities.
    `,
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
    description: `
    There are numerous frameworks associated with CSS, such as Bootstrap or TailwindCSS, mainly.

If we analyze them in depth we will realize that they are completely opposite technologies. While the former seeks to focus on creating reusable components, TailwindCSS focuses on creating utility classes directly.
Both options have advantages and disadvantages. That's why I decided to create a CSS framework based on SASS that aims to use the best of both worlds. 

This framework is based on "BEMIT", which leads us to use "ITCSS" as scaffolding structure and the BEM methodology.
In this framework, we have the ability to create our reusable SASS components, which follow the rules of BEM to generate new elements and specific modifiers, in addition to global utilities such as "margin", "padding", among others as they are very useful to use in specific cases.

Thanks to this framework, it's up to us to create our own design system. Classes are short, easy to read and reusable while still allowing some flexibility.
Ex: "c-card c-card--secondary g--margin-xl md:g--margin-xs" or "c-button__text g--height-m".

The best part is that, because it is our own framework, how we name the classes is up to us, as long as BEM is respected.
    `,
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
    description: `
    Sometimes we don't need to create large applications and therefore relying on large frameworks like laravel or symphony can be too much of a chore.

Otherwise, we can simply create our own PHP framework Vanilla, which will do the job for us.

This new PHP framework is based on MVC, so we can find and create new models, views (using server-side templates) and controllers. The result is a simple application with the new architecture model that is being used in other major frameworks.

As additional information, we can also add hidden input tokens in the forms to prevent XSS attacks; block specific paths or methods and make use of the MVC architecture, as I mentionned before.
    `,
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
