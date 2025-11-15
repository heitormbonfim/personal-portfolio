import { IoIosArrowForward } from "react-icons/io";

interface InfoArrowProps {
  title: string;
  content: string;
}

export function InfoArrow({ title, content }: InfoArrowProps) {
  const renderContent = () => {
    // Check if content is an email
    if (content.includes("@") && content.includes(".")) {
      return (
        <a
          href={`mailto:${content}?subject=I%20checked%20your%20website&body=Hello,%20Heitor`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-green-500 hover:text-green-500 transition-colors"
        >
          {content}
        </a>
      );
    }

    // Check if content is a phone number (starts with +)
    if (content.startsWith("+")) {
      const phoneNumber = content.replace(/\s/g, "");
      return (
        <a
          href={`https://api.whatsapp.com/send/?phone=${phoneNumber}&text&type=phone_number&app_absent=0`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-green-500 hover:text-green-500 transition-colors"
        >
          {content}
        </a>
      );
    }

    return content;
  };

  return (
    <div className="flex w-full items-center gap-1">
      <IoIosArrowForward className="w-full max-w-[20] text-green-500" />
      <span>
        <strong className="text-zinc-50">{title}:</strong> {renderContent()}
      </span>
    </div>
  );
}
