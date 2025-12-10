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
            I transitioned from teaching English in 2019 to software development in 2022, specializing in full-stack development with TypeScript, React, Node.js, and Golang.
            Currently working as a Full-Stack Developer, I contributed across development, infrastructure, and business strategy. I'm continuously expanding my skills in cybersecurity, DevOps, and backend architecture.
          `,
        content: `
          <ul class="list-disc list-inside">
            <li>Brazil, CE</li>
            <li>
              <a href="mailto:heitormbonfim@gmail.com?subject=I%20checked%20your%20website&body=Hello,%20Heitor" target="_blank" class="underline underline-offset-4 decoration-green-500">
                heitormbonfim@gmail.com
              </a>
            </li>
          </ul>
        `,
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Java10x",
        dates: "November 2024 - November 2025",
        description:
          "Java10x is a comprehensive course covering Java fundamentals through advanced concepts including Arrays, Ternary operators, OOP concepts, Interfaces, Abstract Classes, Enums, Generics, Exceptions, Collections (Queue, Stack, HashMap), Memory Management, and BigO Notation. The Spring Boot track covers Spring Boot fundamentals, S.O.L.I.D principles, Clean Architecture concepts, Docker containerization, Thymeleaf templating, Security implementations, JWT authentication, Redis caching, and advanced architecture patterns. The program emphasizes practical object-oriented programming, modern enterprise development practices, and business logic implementation.",
        content: `
          <ul class="list-disc list-inside underline underline-offset-4 decoration-green-500">
            <li>
              <a href="https://aluno.java10x.dev/certificates/xEDm1v" target="_blank">
                Java from Zero to Advanced
              </a>
            </li>
            <li>
              <a href="https://aluno.java10x.dev/certificates/GXDL0V" target="_blank">
                Spring Boot Track
              </a>
            </li>
          </ul>
          `,
      },
      {
        title: "Introduction to Cybersecurity",
        dates: "April 2025 - May 2025",
        description:
          "Introduction to Cybersecurity is a foundational course covering core security fundamentals including the CIA Triad (Confidentiality, Integrity, Availability) and the modern threat landscape. Key topics include recognizing various malware types, social engineering, and phishing. The course details essential digital hygiene practices, Multi-Factor Authentication (MFA), strong password creation, and device hardening. It introduces basic network security components like firewalls and encryption, outlines risk management, and provides an overview of security incident response and the career roles of cybersecurity professionals.",
        content: `
          <ul class="list-disc list-inside underline underline-offset-4 decoration-green-500">
            <li>
              <a href="https://github.com/heitormbonfim/certifications/blob/main/I2CSUpdate20250506-27-whwjig.pdf" target="_blank">
                Introduction to Cybersecurity
              </a>
            </li>
          </ul>
          `,
      },
      {
        title: "Rocketseat",
        dates: "June 2022",
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
      {
        title: "FreeCodeCamp",
        dates: "August 2021 - Octuber 2022",
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
        title: "Web Full Stack",
        dates: "November 2020 - April 2024",
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
        title: "English Language",
        dates: "January 2016 - December 2018",
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
    ],
  },
  {
    title: "Professional Experience",
    items: [
      {
        title: "One Panel",
        dates: "May 2025 - Present",
        description: `
        At One Panel, I work as a Full-Stack Developer contributing across multiple areas of the business. I developed new features for VPS automation using <strong>Go-Ansible</strong>, <strong>Ansible</strong>, and <strong>React</strong>, enabling customers to manage their virtual private servers directly through our dashboard. I created the company's new landing page to improve brand presence and customer acquisition. I worked on a Docker management system project using <strong>Golang</strong>, <strong>Gin</strong>, and <strong>GORM</strong> with <strong>PostgreSQL</strong> and <strong>MySQL</strong>, significantly improving customer container management capabilities. I led a team of developers, participated in the hiring and selection process for new developers, and provided ongoing support to the development team. I worked closely with the company leader on strategic business decisions, acting as his right-hand. Additionally, I contributed to the sales and marketing sector by creating and managing <strong>Google Ads</strong> and <strong>Facebook Ads</strong> campaigns to boost sales. I provided technical support for customers, identified and fixed bugs across our systems, and continuously improved user experience through strategic ideas and implementations.
          `,
        content: `
        <ul class="list-disc list-inside">
          <li>Full-Stack Developer</li>
          <li>
            <a href="https://onepanel.com.br" target="_blank" class="underline underline-offset-4 decoration-green-500">
              One Panel
            </a>
          </li>
        </ul>

        <h3 class="text-lg text-green-500 font-semibold mt-5">Tech Stack:</h3>

        <ul class="list-inside list-disc grid md:grid-cols-2 gap-x-3">
          <li>React</li>
          <li>Golang</li>
          <li>Gin</li>
          <li>GORM</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>Docker</li>
          <li>Portainer</li>
          <li>GitHub Actions</li>
          <li>Ansible</li>
          <li>Proxmox</li>
          <li>Networking</li>
          <li>Google Ads</li>
          <li>Facebook Ads</li>
        </ul>
        `,
      },
      {
        title: "Freelance Developer",
        dates: "November 2023 - April 2025",
        description: `
        I worked as a Freelance Software Developer, building web applications and providing solutions for various clients using modern technologies.
          `,
        content: `
        <ul class="list-disc list-inside">
          <li>Freelance Software Developer</li>
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
        title: "LL Software",
        dates: "December 2022 - Octuber 2023",
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
        title: "Freelance English Teacher",
        dates: "August 2020 - November 2021",
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
        title: "Mundo HB - English Teacher",
        dates: "January 2019 - July 2019",
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
    ],
  },
];
