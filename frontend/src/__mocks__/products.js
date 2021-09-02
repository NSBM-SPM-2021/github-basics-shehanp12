import { v4 as uuid } from 'uuid';
export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'A legendary masterpiece, this book is synonymous with difficult reading, so why not challenge yourshelf.',
    media: '../static/images/books/avatar_1.png',
    bookName: 'War and Peace',
    bookAuthor: 'Leo Tolstoy'
  },
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'One must always read a novel by this Nobel Prize winning author.',
    media: '../../../public/static/images/books/avatar_1.png',
    bookName: 'Song of Solomon',
    bookAuthor: 'Toni Morrison'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    media: '../../../public/static/images/books/avatar_1.png',
    title: 'Slack',
    totalDownloads: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
    media: '../../../public/static/images/books/avatar_1.png',
    title: 'Lyft',
    totalDownloads: '406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'GitHub is a web-based hosting service for version control of code using Git.',
    media: '../../../public/static/images/books/avatar_1.png',
    title: 'GitHub',
    totalDownloads: '835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
    media: '../../../public/static/images/books/avatar_1.png',
    title: 'Squarespace',
    totalDownloads: '835'
  }
];
