export const posts = {
  'the-relation-between-wall-clocks-and-processors': {
    banner: {
      url: 'https://images.pexels.com/photos/2955704/pexels-photo-2955704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
      author: 'Dani Muchow',
      original_url:
        'https://www.pexels.com/photo/asphalt-highway-time-lapse-photography-at-nighttime-2955704/',
      provider_name: 'Pexels',
      provider_url: 'https://www.pexels.com/',
      icon_url: '/cpu.svg',
    },
    heading: {
      title: 'The relation between wall clocks and processors',
      publicationDate: 'April 19, 2024',
      tags: ['Hardware', 'Potato', 'Apple II', 'PC', 'CPU'],
    },
    content: [
      { type: 'h2', text: 'What are States on React?' },
      {
        type: 'p',
        text: "In React, a component's state refers to objects that determine the component's behavior and how it renders in the interface.",
      },
      {
        type: 'p',
        text: 'States are essential for handling data that changes over time, such as user input, API responses, interaction events, and more.',
      },
      {
        type: 'p',
        text: 'The main characteristic of state is that it is local and encapsulated within the component, that is, it is not directly accessible by other components unless it is passed explicitly.',
      },
      {
        type: 'picture',
        image: {
          image_url:
            'https://images.unsplash.com/photo-1713403955914-b938e1bd1b2f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          image_alt: 'the golden gate bridge is silhouetted against the sunset',
          image_author: 'Kellen Riggin',
          image_original_url:
            'https://unsplash.com/photos/the-golden-gate-bridge-is-silhouetted-against-the-sunset-To4-hsfiA3A',
          provider_name: 'Unsplash',
          provider_url: 'https://unsplash.com',
        },
      },
      { type: 'h2', text: 'Using useState with React' },
      {
        type: 'p_a',
        content: [
          { type: 'text', text: 'The ' },
          { type: 'link', text: 'useState', href: '/' },
          {
            type: 'text',
            text: " Hook is the simplest and most common way to add state to a functional component. Let's see how it can be implemented:",
          },
        ],
      },
    ],
  },
  'whats-wrong-with-assembly-language': {
    banner: {
      url: 'https://images.pexels.com/photos/2955704/pexels-photo-2955704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
      author: 'Dani Muchow',
      original_url:
        'https://www.pexels.com/photo/asphalt-highway-time-lapse-photography-at-nighttime-2955704/',
      provider_name: 'Pexels',
      provider_url: 'https://www.pexels.com/',
      icon_url: '/cpu.svg',
    },
    heading: {
      title: "What's Wrong With Assembly Language",
      publicationDate: 'April 15, 1936',
      tags: ['Hardware', 'ASM', 'Apple II', 'PC', 'CPU'],
    },
    content: [
      {
        type: 'h2',
        text: 'Assembly language has a pretty bad reputation',
      },
      {
        type: 'p',
        text: 'The common impression about assembly language programmers today is that they are all hackers or misguided individuals who need enlightenment.',
      },
      {
        type: 'p',
        text: 'Here are the reasons people give for not using assembly',
      },
      {
        type: 'ul',
        list: [
          'Assembly is hard to learn.',
          'Assembly is hard to read and understand.',
          'Assembly is hard to debug.'
        ],
      },
    ],
  },
  'the-binary-numbering-system': {
    banner: {
      url: 'https://images.pexels.com/photos/2955704/pexels-photo-2955704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1',
      author: 'Dani Muchow',
      original_url:
        'https://www.pexels.com/photo/asphalt-highway-time-lapse-photography-at-nighttime-2955704/',
      provider_name: 'Pexels',
      provider_url: 'https://www.pexels.com/',
      icon_url: '/cpu.svg',
    },
    heading: {
      title: 'The Binary Numbering System',
      publicationDate: 'September 25, 2012',
      tags: ['Math', 'Binary', 'ASM', 'CPU', 'PC'],
    },
    content: [],
  },
}
