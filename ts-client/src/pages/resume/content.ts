interface ContentFormat {
  columnItems: {
    title: string;
    items: {
      title: string;
      dates?: string;
      description?: string;
      content?: string;
    }[];
  }[];
}

export const content: ContentFormat = {
  columnItems: [
    {
      title: "SUMMARY",
      items: [
        {
          title: "Heitor M Bonfim",
          description: `
          <p class="text-justify">
            I transitioned from teaching English in 2019 to web development in 2022, specializing in ReactJS, NodeJS, ExpressJS, and MongoDB. 
            I've since been involved in various projects, expanding my skills. Currently, I'm delving into NextJS and cybersecurity, 
            while also learning Mandarin to broaden my horizons. I'm eager to connect and explore opportunities in the tech industry.
          </p>
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
          title: "FreeCodeCamp",
          dates: "2021 - 2022",
          description: `FreeCodeCamp is an online platform offering free coding courses and tutorials founded in 2014. 
          It features interactive coding challenges and project-based learning in HTML, CSS, JavaScript, and more. 
          Learners can earn certifications and build a portfolio while progressing through its comprehensive curriculum.
        `,
          content: `
          <ul class="list-disc list-inside underline underline-offset-4 decoration-green-400">
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
      ],
    },
  ],
};
