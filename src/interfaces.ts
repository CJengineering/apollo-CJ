import { StaticImageData } from 'next/image'

export interface ButtonCJProps {
  children: React.ReactNode
}
export interface CardProgrammeProps {
  imageUrl: StaticImageData | string
  programmeTitle: string
  programmeType: string
}
export type CardHorizontalImageProps = {
  imageUrl: StaticImageData | string
}

export interface ListContentProps {
  title: string
  source: string
  date: string | Date
}
export interface ListSmallProps {
  data?: { [key: string]: string[] | undefined } | undefined;
}

export interface StatProps {
  title: string
  content: string
}
export interface SocialMediaLink {
  url: string
  name: string
}
export interface SocialMediaLinks {
  instagram?: SocialMediaLink
  youtube?: SocialMediaLink
  linkedin?: SocialMediaLink
  facebook?: SocialMediaLink
  twitter?: SocialMediaLink
}
export interface Image {
  url: string
}
export interface ListSmallData {
  [key: string]: string[]
}

export interface RowTopData {
  name: string
  description: string
  mission: string
  year: string
  partners: string[]
}
export interface RowContentData {
 
  research?: ListSmallProps
  established?: ListSmallProps
  headquarters?: ListSmallProps
  leadership?: ListSmallProps
  'key initiatives'?: ListSmallProps
  'key partners'?: ListSmallProps
  fullDescription: string
  socialMediaLinks: SocialMediaLinks
  stats: StatProps[]
  listContent: ListContentProps[]
  features: [
    {
      image: CardHorizontalImageProps
      title: string
    },
  ] | []
}

export interface RowData {
  repository: {
    top: RowTopData
    content: RowContentData
  }
  
}
export interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  current: boolean;
  children?: NavSubItem[];
}

export interface NavSubItem {
  name: string;
  href: string;
  current?: boolean; // Optional, as not all subItems might use it
}
