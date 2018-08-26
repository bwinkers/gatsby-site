import HomeIcon from 'react-feather/dist/icons/home';
import FolderIcon from 'react-feather/dist/icons/folder';
import InfoIcon from 'react-feather/dist/icons/info';
import BlogIcon from 'react-feather/dist/icons/book';

const menu = [
  { label: 'Home', to: '/', icon: HomeIcon },
  { label: 'Blog', to: '/blog', icon: BlogIcon },
  { label: 'Experience', to: '/experience', icon: BlogIcon },
  { label: 'Catalog', to: '/catalog', icon: FolderIcon },
  { label: 'About', to: '/about', icon: InfoIcon },
  { label: 'Counter', to: '/counter', icon: InfoIcon },
  { label: 'Info', to: '/info', icon: InfoIcon }
];

export default menu;
