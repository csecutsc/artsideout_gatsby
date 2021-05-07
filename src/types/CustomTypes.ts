import { GatsbyImageProps } from 'gatsby-plugin-image';

export interface ImageType {
  gatsbyImageData: GatsbyImageProps;
  altText: string;
  url: string;
}

export interface MeetingType {
  remoteId: string;
  meetingUrl: string;
  meetingPass: string;
}
