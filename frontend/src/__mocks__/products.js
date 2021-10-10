import { v4 as uuid } from 'uuid';

import book1 from "../../src/static/images/books/1.jpeg";
import book2 from "../../src/static/images/books/2.jpeg";
import book3 from "../../src/static/images/books/3.jpeg";
import book4 from "../../src/static/images/books/4.jpeg";
import book5 from "../../src/static/images/books/5.jpeg";
import book7 from "../../src/static/images/books/7.jpeg";

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description:  "The Lincoln Highway was the province of “tin can tourists” ushering in a bold new era in RV history. Today, you can still drive parts of the original Lincoln Highway or its same general route along I-80, and camp along the way",
    media: book1,
    title: "The Lincoln Highway",
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Her debut novel Animal has instantly established her as one of the most confident fiction writers of our time. In Animal, Taddeo tells the story of a young woman who attempts to reassert control over her life after multiple traumas inflicted by men.',
    media: book2,
    title: 'Animal',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'As one of the greatest writers of her generation — and the 20th century in general — it’s an event any time a Joan Didion book is released. Here we have a collection that characteristically spans a diverse range of topics, from Gamblers Anonymous to Martha Stewart.',
    media: book3,
    title: 'Let Me Tell You What I Mean',
    totalDownloads: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'When a woman invites a renowned artist to stay with her family at their remote home, she becomes fixated on the idea that his work provides some clue to a mystery that’s been plaguing her. This examination of art, family, and fate is a must-read from Rachel Cusk, who many already know from The Outline trilogy.',
    media: book4,
    title: 'Second Place',
    totalDownloads: '406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Five years ago, Viet Thanh Nguyen won the Pulitzer Prize for his debut novel The Sympathizer, which followed the experiences of a refugee and double agent from the Vietnam War grappling with the fallout from the conflict. In his thrilling sequel The Committed, Nguyen picks up the narrative to take a hard look at the consequences of colonialism.',
    media: book7,
    title: 'The Committed',
    totalDownloads: '835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'When Blythe is pregnant, she promises herself that she will bond with her daughter in a way that she and her own mother never did. Once Violet is born, however, Blythe begins to suspect that there is something horribly wrong with her. In this audacious psychological thriller, writer Ashley Audrain puts a new twist on a classic story.',
    media: book5,
    title: 'The Push',
    totalDownloads: '835'
  }
];
