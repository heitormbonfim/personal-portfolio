"use client";

import { Button } from "@/components/ui/button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useSyncExternalStore } from "react";
import { FiDownload } from "react-icons/fi";
import { ResumePDF } from "./resume-pdf";

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

interface ResumeTranslations {
  summary: {
    title: string;
    name: string;
    description: string;
    location: string;
  };
  education: {
    title: string;
    java10x: { title: string; dates: string; description: string };
    cybersecurity: { title: string; dates: string; description: string };
    rocketseat: { title: string; dates: string; description: string };
    freecodecamp: { title: string; dates: string; description: string };
    webFullStack: { title: string; dates: string; description: string };
    english: { title: string; dates: string; description: string };
  };
  experience: {
    title: string;
    onePanel: {
      title: string;
      dates: string;
      description: string;
      role: string;
    };
    freelance: {
      title: string;
      dates: string;
      description: string;
      role: string;
    };
    llSoftware: {
      title: string;
      dates: string;
      description: string;
      role: string;
    };
    freelanceTeacher: {
      title: string;
      dates: string;
      description: string;
      role: string;
    };
    mundoHb: {
      title: string;
      dates: string;
      description: string;
      role: string;
    };
  };
}

interface DownloadResumeButtonProps {
  locale: string;
  translations: ResumeTranslations;
  skillsTitle: string;
  buttonText: string;
  loadingText: string;
}

export function DownloadResumeButton({
  locale,
  translations,
  skillsTitle,
  buttonText,
  loadingText,
}: DownloadResumeButtonProps) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  if (!mounted) {
    return (
      <Button
        variant="outline"
        disabled
        className="flex items-center gap-2 rounded-lg border-green-500 bg-transparent text-green-500"
      >
        <FiDownload size={16} />
        {buttonText}
      </Button>
    );
  }

  return (
    <PDFDownloadLink
      document={
        <ResumePDF translations={translations} skillsTitle={skillsTitle} />
      }
      fileName={`heitor-bonfim-resume-${locale}.pdf`}
    >
      {({ loading }) => (
        <Button
          variant="outline"
          disabled={loading}
          className="flex items-center gap-2 rounded-lg border-green-500 bg-transparent text-green-500 transition-all hover:bg-green-500 hover:text-zinc-900"
        >
          <FiDownload size={16} />
          {loading ? loadingText : buttonText}
        </Button>
      )}
    </PDFDownloadLink>
  );
}
