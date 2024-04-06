import { FaGithub, FaLinkedin, FaSpotify, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const content = {
  name: "Heitor M Bonfim",
  description: `I'm a passionate <span 
  class="text-zinc-50 underline underline-offset-8 decoration-green-500">software developer</span>,
  a hobbyist <span class="text-zinc-50 underline underline-offset-8 decoration-green-500"
  >ethical hacker</span> and <span class="text-zinc-50 underline underline-offset-8 decoration-green-500"
  >writer</span>`,
  socials: [
    {
      url: "https://api.whatsapp.com/send/?phone=5588993205605&text&type=phone_number&app_absent=0",
      icon: FaWhatsapp,
    },
    {
      url: "https://github.com/heitormbonfim",
      icon: FaGithub,
    },
    {
      url: "https://www.linkedin.com/in/heitormbonfim",
      icon: FaLinkedin,
    },
    {
      url: "https://x.com/HeitorMBonfim",
      icon: FaXTwitter,
    },
    {
      url: "https://open.spotify.com/user/315cxioc3ykggqrh6b7q2hvqwvnu",
      icon: FaSpotify,
    },
  ],
};
