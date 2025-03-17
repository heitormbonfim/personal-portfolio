export interface ContentFormat {
  title: string;
  items: {
    title: string;
    dates?: string;
    description?: string;
    content?: string;
  }[];
}

export const content: ContentFormat[] = [
  {
    title: "SUMMARY",
    items: [
      {
        title: "Heitor Macedo Bonfim",
        description: `
            I transitioned from teaching English in 2019 to web development in 2022, specializing in ReactJS, NodeJS, ExpressJS, and MongoDB. 
            I've since been involved in various projects, expanding my skills. Currently, I'm delving into NextJS and cybersecurity, 
            while also learning Mandarin to broaden my horizons. I'm eager to connect and explore opportunities in the tech industry.
          `,
        content: `
          <ul class="list-disc list-inside">
            <li>Brazil, CE</li>
            <li>+55 88 993205605</li>
            <li>heitormbonfim@gmail.com</li>
          </ul>
        `,
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "English Language",
        dates: "2016 - 2018",
        description:
          "I attained fluency in English through dedicated study and practice.",
        content: `
        <ul class="list-disc list-inside">
          <li>Fluent English</li>
          <li>
            <a href="https://www.instagram.com/meumundohb/" target="_blank" class="underline underline-offset-4 decoration-green-500">
              Mundo HB
            </a>
          </li>
        </ul>
        `,
      },
      {
        title: "Web Full Stack",
        dates: "2020 - 2024",
        description:
          "In 'ProgramadorBR Web Full Stack' by Igor Oliveira, you will learn the fundamentals of full-stack web development, covering both front-end technologies like HTML, CSS, JavaScript, and ReactJS alongside back-end concepts including a server-side techs such as Node.js with Express, database management with MongoDB, and how to build complete web applications from start to finish, essentially encompassing the entire process of designing, developing, and deploying a website or web application",
        content: `
          <ul class="list-disc list-inside underline underline-offset-4 decoration-green-500">
            <li>
              <a href="https://programadorbr.com/certificado/DVWBHMB20HT21473" target="_blank">
                HTML, CSS and JavaScript
              </a>
            </li>
            <li>
              <a href="https://programadorbr.com/certificado/DVWBHMB20FI21473" target="_blank">
                Firebase, JQuery and Bootstrap
              </a>
            </li>
            <li>
              <a href="https://programadorbr.com/certificado/DVWBHMB20RE21473" target="_blank">
                ReactJS
              </a>
            </li>
            <li>
              <a href="https://programadorbr.com/certificado/DVWBHMB20NO21473" target="_blank">
                NodeJS and MongoDB
              </a>
            </li>
          </ul>
          `,
      },
      {
        title: "FreeCodeCamp",
        dates: "2021 - 2022",
        description:
          "The lessons in the freeCodeCamp certifications cover various topics such as web development, HTML, CSS, responsive web design, information security, machine learning, and functional programming languages like Python and JavaScript. FreeCodeCamp teaching style combines both text and videos.",
        content: `
          <ul class="list-disc list-inside underline underline-offset-4 decoration-green-500">
            <li>
              <a href="https://www.freecodecamp.org/certification/heitorthewizard/javascript-algorithms-and-data-structures" target="_blank">
                JavaScript Algoriths and Data Structures
              </a>
            </li>

            <li>
              <a href="https://www.freecodecamp.org/certification/heitorthewizard/scientific-computing-with-python-v7" target="_blank">
                Scientific Computing with Python
              </a>
            </li>
          </ul>
          `,
      },
      {
        title: "Rocketseat",
        dates: "2021 - 2022",
        description:
          "Conectar is an introductory programming course that teaches the fundamental concepts of computing, including hardware, software, the internet, servers, and the distinction between frontend and backend development",
        content: `
          <ul class="list-disc list-inside underline underline-offset-4 decoration-green-500">
            <li>
              <a href="https://app.rocketseat.com.br/certificates/c35b5da5-ef24-4011-b9bd-cad9f7b9bab8" target="_blank">
                Conectar
              </a>
            </li>
          </ul>
          `,
      },
    ],
  },
  {
    title: "Professional Experience",
    items: [
      {
        title: "Mundo HB",
        dates: "2019",
        description: `
        I worked at MUNDO HB, where I previously studied, to teach English classes at all levels, from basic to advanced. In the advanced classes, I conducted the classes entirely in English, demonstrating fluency and promoting total immersion in the language.
        `,
        content: `
        <ul class="list-disc list-inside">
          <li>English Teacher</li>
          <li>
            <a href="https://www.instagram.com/p/ByijOGRHdM8/" target="_blank" class="underline underline-offset-4 decoration-green-500">
              Mundo HB
            </a>
          </li>
        </ul>
        `,
      },
      {
        title: "English Teacher",
        dates: "2020 - 2021",
        description: `
        I freelanced as a private English teacher online during the pandemic
        `,
        content: `
        <ul class="list-disc list-inside">
          <li>Private English teacher</li>
          <li>Freelancer</li>
        </ul>
        `,
      },
      {
        title: "LL Software",
        dates: "2022 - 2023",
        description: `
       I performed maintenance on the company's main software, fixing bugs and adding new features, such as creating plans and defining user permissions according to the plan contracted. The technologies used included <strong>TypeScript</strong>, <strong>ReactJS</strong>, <strong>Tailwind CSS</strong>, <strong>ExpressJS</strong>, <strong>MongoDB</strong>, <strong>Socket.io</strong> and <strong>Docker</strong>. I developed an improved dashboard to manage customers, affiliates and other platform features. I also developed desktop applications with <strong>Electron JS</strong> to manage bots integrated with the <strong>Telegram API</strong> and bet automation, in addition to creating web scrapers and automations using <strong>Puppeteer</strong>, <strong>Cheerio</strong> and <strong>Socket.io</strong>. I updated applications originally developed in <strong>JavaScript</strong>, implementing <strong>TypeScript</strong> to improve security and facilitate code maintenance. At the same time, I created several <strong>PWAs</strong> (<strong>Progressive Web Apps</strong>) with <strong>VitePWA</strong> and <strong>ReactJS</strong>, integrated with an API built with <strong>ExpressJS</strong> and <strong>Postgres</strong>, which connected to the affiliates' betting houses. I transformed some of these PWAs into native applications with <strong>React Native</strong>. Finally, I migrated serverless applications, previously hosted on <strong>Heroku</strong> and <strong>Vercel</strong>, to a private <strong>VPS</strong> in Brazil, optimizing response speed and significantly reducing hosting costs.

          `,
        content: `
        <ul class="list-disc list-inside">
          <li>Software Developer</li>
          <li>
            <a href="https://cnpj.biz/45437131000179" target="_blank" class="underline underline-offset-4 decoration-green-500">
              LL Software
            </a>
          </li>
        </ul>  

        <h3 class="text-lg text-green-500 font-semibold mt-5">Tech Stack:</h3>

        <ul class="list-inside list-disc grid md:grid-cols-2 gap-x-3">
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>Tailwind CSS</li>
          <li>ExpressJS</li>
          <li>MongoDB</li>
          <li>Socket.io</li>
          <li>Docker</li>
          <li>Electron JS</li>
          <li>Telegram API</li>
          <li>Puppeteer</li>
          <li>Cheerio</li>
          <li>JavaScript</li>
          <li>PWAs (Progressive Web Apps)</li>
          <li>VitePWA</li>
          <li>Postgres</li>
          <li>React Native</li>
          <li>Heroku</li>
          <li>Vercel</li>
          <li>VPS</li>
        </ul>
        `,
      },
      {
        title: "Web Developer",
        dates: "2023 - Present",
        description: `
        I'm currently working as a Software Developer freelancer
          `,
        content: `
        <ul class="list-disc list-inside">
          <li>Software Developer</li>
        </ul>  

        <h3 class="text-lg text-green-500 font-semibold mt-5">Tech Stack:</h3>

        <ul class="list-inside list-disc grid md:grid-cols-2 gap-x-3">
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>Tailwind CSS</li>
          <li>ExpressJS</li>
          <li>MongoDB</li>
          <li>Socket.io</li>
          <li>Docker</li>
          <li>Electron JS</li>
          <li>Telegram API</li>
          <li>Puppeteer</li>
          <li>Cheerio</li>
          <li>JavaScript</li>
          <li>PWAs (Progressive Web Apps)</li>
          <li>VitePWA</li>
          <li>Postgres</li>
          <li>React Native</li>
          <li>Heroku</li>
          <li>Vercel</li>
          <li>VPS</li>
        </ul>
        `,
      },
    ],
  },
];
