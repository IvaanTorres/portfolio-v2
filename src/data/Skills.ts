const skills = {
  /* Front-End featured skills */
  front: [
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      order: 3,
      backgroundColor: '#F7DF1E',
      color: '#000000'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      order: 4,
      backgroundColor: '#007ACC',
      color: '#FFFFFF'
    },
    {
      id: 'vuejs',
      name: 'VueJS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      order: 2,
      backgroundColor: '#4FC08D',
      color: '#FFFFFF'
    },
    {
      id: 'reactjs',
      name: 'ReactJS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      order: 1,
      backgroundColor: '#61DAFB',
      color: '#000000'
    },
    {
      id: 'sass',
      name: 'Sass',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      order: 5,
      backgroundColor: '#CC6699',
      color: '#FFFFFF'
    },
    {
      id: 'tailwindcss',
      name: 'TailwindCSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      order: 7,
      backgroundColor: '#38B2AC',
      color: '#FFFFFF'
    },
    {
      id: 'materialui',
      name: 'MaterialUI',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
      order: 6,
      backgroundColor: '#0081CB',
      color: '#FFFFFF'
    }
  ],
  /* Back-End featured skills */
  back: [
    {
      id: 'graphql',
      name: 'GraphQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
      order: 6,
      backgroundColor: '#E10098',
      color: '#FFFFFF'
    },
    {
      id: 'php',
      name: 'PHP',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      order: 2,
      backgroundColor: '#777BB4',
      color: '#FFFFFF'
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      order: 4,
      backgroundColor: '#336791',
      color: '#FFFFFF'
    },
    {
      id: 'laravel',
      name: 'Laravel',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
      order: 3,
      backgroundColor: '#FF2D20',
      color: '#FFFFFF'
    },
    {
      id: 'nodejs',
      name: 'NodeJS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      order: 1,
      backgroundColor: '#339933',
      color: '#FFFFFF'
    },
  ],
  /* Testing featured skills */
  testing: [
    {
      id: 'jest',
      name: 'Jest',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      order: 1,
      backgroundColor: '#C21325',
      color: '#FFFFFF'
    },
    {
      id: 'playwright',
      name: 'Playwright',
      icon: 'https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png',
      order: 3,
      backgroundColor: '#1F1F1F',
      color: '#FFFFFF'
    },
    {
      id: 'testing-library',
      name: 'Testing Library',
      icon: 'https://testing-library.com/img/octopus-128x128.png',
      order: 2,
      backgroundColor: '#E33332',
      color: '#FFFFFF'
    },
    {
      id: 'phpunit',
      name: 'PHPUnit',
      icon: 'https://cdn.worldvectorlogo.com/logos/phpunit.svg',
      order: 4,
      backgroundColor: '#E34F26',
      color: '#FFFFFF'
    }
  ], 
  /* Devops featured skills */
  devops: [
    {
      id: 'git',
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      order: 3,
      backgroundColor: '#F05032',
      color: '#FFFFFF'
    },
    {
      id: 'docker',
      name: 'Docker',
      icon: 'https://blog.systerel.fr/images/docker/docker-logo.png',
      order: 1,
      backgroundColor: '#2496ED',
      color: '#FFFFFF'
    },
    {
      id: 'githubactions',
      name: 'GitHub Actions',
      icon: 'https://avatars.githubusercontent.com/u/44036562?s=280&v=4',
      order: 2,
      backgroundColor: '#2088FF',
      color: '#FFFFFF'
    },
    {
      id: 'bash',
      name: 'Shell Scripting / Bash',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
      order: 4,
      backgroundColor: '#4EAA25',
      color: '#FFFFFF'
    }
  ],
  /* Tags/Skills which are not featured in the skills section */
  others: [
    {
      id: 'html',
      name: 'HTML',
      backgroundColor: '#E34F26',
      color: '#FFFFFF'
    },
    {
      id: 'css',
      name: 'CSS',
      backgroundColor: '#1572B6',
      color: '#FFFFFF'
    },
    {
      id: 'java',
      name: 'Java',
      backgroundColor: '#007396',
      color: '#FFFFFF'
    },
    {
      id: 'socketio',
      name: 'Socket.io',
      backgroundColor: '#010101',
      color: '#FFFFFF'
    },
    {
      id: 'vuetestutils',
      name: 'Vue Test Utils',
      backgroundColor: '#41B883',
      color: '#FFFFFF'
    },
    {
      id: 'railwaycd',
      name: 'Railway CD',
      backgroundColor: '#F24D2C',
      color: '#FFFFFF'
    },
    {
      id: 'sonarqube',
      name: 'SonarQube',
      backgroundColor: '#4E9BCD',
      color: '#FFFFFF'
    },
    {
      id: 'husky',
      name: 'Husky',
      backgroundColor: '#F05032',
      color: '#FFFFFF'
    },
    {
      id: 'pinia',
      name: 'Pinia',
      backgroundColor: '#10B981',
      color: '#FFFFFF'
    },
    {
      id: 'bem',
      name: 'BEM',
      backgroundColor: '#000000',
      color: '#FFFFFF'
    },
    {
      id: 'cypress',
      name: 'Cypress',
      backgroundColor: '#17202C',
      color: '#FFFFFF'
    },
    {
      id: 'mongodb',
      name: 'Mongo DB',
      backgroundColor: '#47A248',
      color: '#FFFFFF'
    },
    {
      id: 'expressjs',
      name: 'ExpressJS',
      backgroundColor: '#000000',
      color: '#FFFFFF'
    },
    {
      id: 'nextjs',
      name: 'NextJS',
      backgroundColor: '#000000',
      color: '#FFFFFF'
    },
    {
      id: 'storybook',
      name: 'Storybook',
      backgroundColor: '#FF4785',
      color: '#FFFFFF'
    },
    {
      id: 'apolloclient',
      name: 'Apollo Client',
      backgroundColor: '#311C87',
      color: '#FFFFFF'
    },
  ]
}

export default skills