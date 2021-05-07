interface Routes {
  name: string;
  route: string;
}

const NavLinks: Routes[] = [
  { name: 'home', route: '/' },
  { name: 'installations', route: '/installations' },
  { name: 'performances', route: '/performances' },
  { name: 'art market', route: '/market' },
  { name: 'artists', route: '/artists' },
  { name: 'map', route: '/map' },
  { name: 'Workshops', route: '/workshops' }
];

const FestivalLinks: Routes[] = [
  { name: 'Special Projects', route: '/installations' },
  { name: 'Installations', route: '/installations' },
  { name: 'Performances', route: '/performances' },
  { name: 'Workshops', route: '/performances' }
];

const AdditionalLinks: Routes[] = [
  { name: 'Artists', route: '/artists' },
  { name: 'Team', route: '/team' },
  { name: 'Map', route: '/map' }
];

const SocialLinks: Routes[] = [
  { name: 'Instagram', route: 'https://www.instagram.com/artsideout_/' },
  { name: 'Facebook', route: 'https://www.facebook.com/ARTSIDEOUT/' },
  { name: 'Twitter', route: 'https://twitter.com/ARTSIDEOUT' },
  { name: 'Website', route: 'https://artsideout.ca/' },
  { name: 'CSEC Website', route: 'https://csec.club' }
];

export { NavLinks, FestivalLinks, AdditionalLinks, SocialLinks };
