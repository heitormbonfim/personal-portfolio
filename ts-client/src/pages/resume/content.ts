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
        title: "Heitor M Bonfim",
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
        description: "Programador Br Web Full Stack",
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
          "FreeCodeCamp is an online platform offering free coding courses and tutorials founded in 2014.",
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
          "Rocketseat is a  brazilian company focused on teaching programming remotely.",
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
        I instructed English classes ranging from basic to advanced proficiency levels.
        `,
        content: `
        <ul class="list-disc list-inside">
          <li>English Teacher</li>
          <li>
            <a href="https://www.instagram.com/meumundohb/" target="_blank" class="underline underline-offset-4 decoration-green-500">
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
        A Brazilian company providing software solutions focused on the area of online gambling, 
        online games, automations and telegram bots
          `,
        content: `
        <ul class="list-disc list-inside">
          <li>Software Developer</li>
          <li>
            <a href="https://llbots.com.br" target="_blank" class="underline underline-offset-4 decoration-green-500">
              LLBots
            </a>
          </li>
          <li>
            <a href="https://cnpj.biz/45437131000179" target="_blank" class="underline underline-offset-4 decoration-green-500">
              LL Software
            </a>
          </li>
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

        <ul class="list-inside list-disc">
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>ExpressJS</li>
          <li>MongoDB</li>
          <li>NodeJS</li>
          <li>Python</li>
        </ul>
        `,
      },
    ],
  },
];
