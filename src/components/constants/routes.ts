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
  { name: '404', route: '/404' }
];

const SocialLinks: Routes[] = [
  { name: 'Instagram', route: 'https://www.instagram.com/artsideout_/' },
  { name: 'Facebook', route: 'https://www.facebook.com/ARTSIDEOUT/' },
  { name: 'Twitter', route: 'https://twitter.com/ARTSIDEOUT' },
  { name: 'Website', route: 'https://artsideout.ca/' },
  { name: 'CSEC Website', route: 'https://csec.club' }
];

export { NavLinks, SocialLinks };
