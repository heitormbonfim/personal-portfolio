export const content = {
  title: "Software Developer & Ethical Hacker",
  description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Aliquam repellat debitis nemo aliquid dolores dolorem aperiam
  suscipit odio, nam vero temporibus quos tempore, repudiandae
  laborum reprehenderit cumque praesentium perferendis maiores.`,
  arrowInfos: [
    {
      title: "Birthday",
      content: "Jan/27/2000",
    },
    {
      title: "Age",
      content: calculateDate("2000-01-27").toString(),
    },
    {
      title: "Phone",
      content: "+55 (88) 9.9320-5605",
    },
    {
      title: "City",
      content: "Ubajara - CE",
    },
    {
      title: "Degress",
      content: "High School",
    },
    {
      title: "Years of Experience",
      content: calculateDate("2022-01-01").toString(),
    },
    {
      title: "Freelance",
      content: "Available",
    },
    {
      title: "Email",
      content: "heitormbonfim@gmail.com",
    },
  ],
  description2: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Aliquam repellat debitis nemo aliquid dolores dolorem aperiam
  suscipit odio, nam vero temporibus quos tempore, repudiandae
  laborum reprehenderit cumque praesentium perferendis maiores.
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Aliquam repellat debitis nemo aliquid dolores dolorem aperiam
  suscipit odio, nam vero temporibus quos tempore, repudiandae
  laborum reprehenderit cumque praesentium perferendis maiores.`,
};

function calculateDate(year: string): number {
  const dob = new Date(year); // yy-dd-mm;
  const today = new Date();
  const diffMs = today.getTime() - dob.getTime();
  const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years);
}
