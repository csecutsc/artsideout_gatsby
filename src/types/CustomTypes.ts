import { GatsbyImageProps } from 'gatsby-plugin-image';

export interface ImageData {
  gatsbyImageData: GatsbyImageProps;
  altText: string;
  url: string;
}

export interface MeetingData {
  remoteId: string;
  meetingUrl: string;
  meetingPass: string;
}
