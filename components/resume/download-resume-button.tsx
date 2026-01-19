"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { ResumePDF } from "./resume-pdf";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        disabled
        className="flex items-center gap-2 rounded-lg border border-green-500 bg-transparent px-4 py-2 text-sm font-medium text-green-500 opacity-50"
      >
        <FiDownload size={16} />
        {buttonText}
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<ResumePDF translations={translations} skillsTitle={skillsTitle} />}
      fileName={`heitor-bonfim-resume-${locale}.pdf`}
    >
      {({ loading }) => (
        <button
          disabled={loading}
          className="flex items-center gap-2 rounded-lg border border-green-500 bg-transparent px-4 py-2 text-sm font-medium text-green-500 transition-all hover:bg-green-500 hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FiDownload size={16} />
          {loading ? loadingText : buttonText}
        </button>
      )}
    </PDFDownloadLink>
  );
}
