'use client';

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import {
  experiences,
  education,
  projects,
  certificates,
  skillCategories,
  roles
} from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  const { visibleElements, experienceVisible } = useScrollReveal(experiences.length);

  return (
    <div className="relative bg-gray-900">
      <HeroSection roles={roles} visibleElements={visibleElements} />
      <AboutSection visibleElements={visibleElements} />
      <EducationSection education={education} visibleElements={visibleElements} />
      <ExperienceSection
        experiences={experiences}
        visibleElements={visibleElements}
        experienceVisible={experienceVisible}
      />
      <ProjectsSection projects={projects} visibleElements={visibleElements} />
      <SkillsSection skillCategories={skillCategories} visibleElements={visibleElements} />
      <CertificationsSection certificates={certificates} visibleElements={visibleElements} />
    </div>
  );
}
