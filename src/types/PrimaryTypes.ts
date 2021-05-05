import { ImageType } from './CustomTypes';

/* Does not include other reference fields */

export interface InstallationType {
  remoteId: string;
  title: string;
  description: {
    markdownNode: {
      childMdx: {
        body: string;
      };
    };
  };
  images: ImageType[];
  profiles: ProfileType[];
}

export interface ProfileType {
  name: string;
  description: {
    markdownNode: {
      childMdx: {
        body: string;
      };
    };
  };
  image: ImageType[];
  installations: InstallationType[];
  performances: PerformanceType[];
}

export interface PerformanceType {
  remoteId: string;
  description: {
    markdownNode: {
      childMdx: {
        body: string;
      };
    };
  };
  images: ImageType[];
  videoUrl: string;
  profiles: ProfileType[];
}

export interface VendorType {
  remoteId: string;
  title: string;
  description: {
    markdownNode: {
      childMdx: {
        body: string;
      };
    };
  };
  images: ImageType[];
}
