import { StaticImageData } from "next/image";

// Social Media Links
export type SocialMediaLinksProps = {
  shrinkOnMobileView?: boolean;
};

// Section Title
export type SectionTitleProps = {
  number: string;
  title: string;
  numberColor?: string;
  titleColor?: string;
  lineColor?: string;
};

// Featured Project Card
export type ProductType = {
  featured: boolean;
  title: string;
  description: string;
  imgUrl: string | StaticImageData;
  price: number;
  piece?: boolean;
}

export type SignatureProductCard = {
  product: ProductType;
  reversed: boolean;
};

// External Links
export type ExternalLinksProps = {
  links: string[];
  reversed?: boolean;
};