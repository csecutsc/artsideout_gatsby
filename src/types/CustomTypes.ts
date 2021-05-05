import { GatsbyImageProps } from 'gatsby-plugin-image';

/* Does not include other reference fields */

export interface ImageType {
  gatsbyImageData: GatsbyImageProps;
  altText: string;
}

export interface MeetingType {
  remoteId: string;
  meetingUrl: string;
  meetingPass: string;
}
