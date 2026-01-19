"use client";

import { aboutData } from "@/app/[locale]/about/data";
import { resumeData } from "@/app/[locale]/resume/data";
import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 9,
    fontFamily: "Helvetica",
    lineHeight: 1.3,
  },
  header: {
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#15803d",
    paddingBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 3,
  },
  contactItem: {
    fontSize: 8,
    color: "#444",
  },
  link: {
    color: "#15803d",
    textDecoration: "none",
  },
  section: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#15803d",
    textTransform: "uppercase",
  },
  summaryText: {
    fontSize: 9,
    lineHeight: 1.4,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  skill: {
    fontSize: 8,
    backgroundColor: "#f0f0f0",
    padding: "2 5",
    borderRadius: 2,
  },
  experienceItem: {
    marginBottom: 8,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  itemTitle: {
    fontSize: 10,
    fontWeight: "bold",
  },
  itemDates: {
    fontSize: 8,
    color: "#666",
  },
  itemRole: {
    fontSize: 8,
    fontStyle: "italic",
    color: "#444",
    marginBottom: 2,
  },
  bulletContainer: {
    marginLeft: 8,
    marginBottom: 2,
  },
  bulletText: {
    fontSize: 8,
    lineHeight: 1.4,
  },
  techStackLabel: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#15803d",
    marginTop: 2,
  },
  techStack: {
    fontSize: 8,
    color: "#444",
    fontWeight: "normal",
  },
  educationItem: {
    marginBottom: 4,
  },
  educationDescription: {
    fontSize: 8,
    color: "#444",
    fontStyle: "italic",
  },
  twoColumns: {
    flexDirection: "row",
    gap: 15,
  },
  column: {
    flex: 1,
  },
});

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

interface ResumePDFProps {
  translations: ResumeTranslations;
  skillsTitle: string;
}

function parseBullets(description: string): string[] {
  const sentences = description.split(/(?<=[.!?])\s+/);
  const bullets: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    if ((current + " " + sentence).length < 120) {
      current = current ? current + " " + sentence : sentence;
    } else {
      if (current) bullets.push(current);
      current = sentence;
    }
  }
  if (current) bullets.push(current);

  return bullets.slice(0, 4);
}

export function ResumePDF({ translations, skillsTitle }: ResumePDFProps) {
  const t = translations;
  const skills = aboutData.skills;
  const topSkills = skills.filter(s => s.level === "advanced" || s.level === "intermediate");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{t.summary.name}</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>{t.summary.location}</Text>
            <Link style={[styles.contactItem, styles.link]} src={`mailto:${resumeData.email}`}>
              {resumeData.email}
            </Link>
            <Link style={[styles.contactItem, styles.link]} src="https://www.linkedin.com/in/heitormbonfim">
              LinkedIn
            </Link>
            <Link style={[styles.contactItem, styles.link]} src="https://github.com/heitormbonfim">
              GitHub
            </Link>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.summary.title}</Text>
          <Text style={styles.summaryText}>{t.summary.description}</Text>
        </View>

        {/* Skills - Moved up for visibility */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{skillsTitle}</Text>
          <View style={styles.skillsContainer}>
            {topSkills.map((skill) => (
              <Text key={skill.name} style={styles.skill}>
                {skill.name}
              </Text>
            ))}
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.experience.title}</Text>

          {/* One Panel */}
          <View style={styles.experienceItem}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{t.experience.onePanel.title}</Text>
              <Text style={styles.itemDates}>{t.experience.onePanel.dates}</Text>
            </View>
            <Text style={styles.itemRole}>{t.experience.onePanel.role}</Text>
            {parseBullets(t.experience.onePanel.description).map((bullet, i) => (
              <View key={i} style={styles.bulletContainer}>
                <Text style={styles.bulletText}>• {bullet}</Text>
              </View>
            ))}
            <Text style={styles.techStackLabel}>
              Tech: <Text style={styles.techStack}>{resumeData.techStacks.onePanel.join(", ")}</Text>
            </Text>
          </View>

          {/* Freelance */}
          <View style={styles.experienceItem}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{t.experience.freelance.title}</Text>
              <Text style={styles.itemDates}>{t.experience.freelance.dates}</Text>
            </View>
            <Text style={styles.itemRole}>{t.experience.freelance.role}</Text>
            {parseBullets(t.experience.freelance.description).map((bullet, i) => (
              <View key={i} style={styles.bulletContainer}>
                <Text style={styles.bulletText}>• {bullet}</Text>
              </View>
            ))}
            <Text style={styles.techStackLabel}>
              Tech: <Text style={styles.techStack}>{resumeData.techStacks.freelance.slice(0, 10).join(", ")}</Text>
            </Text>
          </View>

          {/* LL Software */}
          <View style={styles.experienceItem}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{t.experience.llSoftware.title}</Text>
              <Text style={styles.itemDates}>{t.experience.llSoftware.dates}</Text>
            </View>
            <Text style={styles.itemRole}>{t.experience.llSoftware.role}</Text>
            {parseBullets(t.experience.llSoftware.description).map((bullet, i) => (
              <View key={i} style={styles.bulletContainer}>
                <Text style={styles.bulletText}>• {bullet}</Text>
              </View>
            ))}
            <Text style={styles.techStackLabel}>
              Tech: <Text style={styles.techStack}>{resumeData.techStacks.llSoftware.slice(0, 10).join(", ")}</Text>
            </Text>
          </View>

          {/* Teaching Experience - Condensed */}
          <View style={styles.experienceItem}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{t.experience.freelanceTeacher.title}</Text>
              <Text style={styles.itemDates}>{t.experience.freelanceTeacher.dates}</Text>
            </View>
            <Text style={styles.itemRole}>{t.experience.freelanceTeacher.role}</Text>
            <View style={styles.bulletContainer}>
              <Text style={styles.bulletText}>• {t.experience.freelanceTeacher.description}</Text>
            </View>
          </View>

          <View style={styles.experienceItem}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{t.experience.mundoHb.title}</Text>
              <Text style={styles.itemDates}>{t.experience.mundoHb.dates}</Text>
            </View>
            <Text style={styles.itemRole}>{t.experience.mundoHb.role}</Text>
            <View style={styles.bulletContainer}>
              <Text style={styles.bulletText}>• {t.experience.mundoHb.description}</Text>
            </View>
          </View>
        </View>

        {/* Education - Two column layout, condensed */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.education.title}</Text>
          <View style={styles.twoColumns}>
            <View style={styles.column}>
              <View style={styles.educationItem}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{t.education.java10x.title}</Text>
                  <Text style={styles.itemDates}>{t.education.java10x.dates}</Text>
                </View>
                <Text style={styles.educationDescription}>Java, Spring Boot, Clean Architecture, Docker</Text>
              </View>
              <View style={styles.educationItem}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{t.education.cybersecurity.title}</Text>
                  <Text style={styles.itemDates}>{t.education.cybersecurity.dates}</Text>
                </View>
                <Text style={styles.educationDescription}>Cisco - CIA Triad, Network Security, Risk Management</Text>
              </View>
              <View style={styles.educationItem}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{t.education.freecodecamp.title}</Text>
                  <Text style={styles.itemDates}>{t.education.freecodecamp.dates}</Text>
                </View>
                <Text style={styles.educationDescription}>JavaScript, Python, Algorithms, Data Structures</Text>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.educationItem}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{t.education.webFullStack.title}</Text>
                  <Text style={styles.itemDates}>{t.education.webFullStack.dates}</Text>
                </View>
                <Text style={styles.educationDescription}>HTML, CSS, React, Node.js, MongoDB, Express</Text>
              </View>
              <View style={styles.educationItem}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{t.education.rocketseat.title}</Text>
                  <Text style={styles.itemDates}>{t.education.rocketseat.dates}</Text>
                </View>
                <Text style={styles.educationDescription}>Programming fundamentals, Frontend/Backend</Text>
              </View>
              <View style={styles.educationItem}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>{t.education.english.title}</Text>
                  <Text style={styles.itemDates}>{t.education.english.dates}</Text>
                </View>
                <Text style={styles.educationDescription}>Fluent - Professional proficiency</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
