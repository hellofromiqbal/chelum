import { StaticImageData } from "next/image";

// Social Media Links
export type SocialMediaLinksProps = {
  shrinkOnMobileView?: boolean;
};

// Section Title
export type SectionTitleProps = {
  number: string;
  title: string;
};

// Featured Project Card
export type ProjectType = {
  featured: boolean;
  title: string;
  description: string;
  imgUrl: string | StaticImageData;
  technologies: string[];
  links: string[];
}

export type FeaturedProjectCardProps = {
  project: ProjectType;
  reversed: boolean;
};

// External Links
export type ExternalLinksProps = {
  links: string[];
  reversed?: boolean;
};