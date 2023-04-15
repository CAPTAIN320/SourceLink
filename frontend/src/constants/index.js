import { createProject, dashboard, profile } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createProject,
    link: '/create-project',
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  }
];
