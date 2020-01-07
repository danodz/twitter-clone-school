const users = {
  larry: {
    bio: 'Chief Mouser to the Cabinet Office',
    url: '',
  },
  diplomog: {
    handle: 'diplomog',
    displayName: 'Palmerston',
    avatarSrc: '/assets/diplomog-avatar.jpg',
    bannerSrc: '/assets/diplomog-banner.jpeg',
    location: 'Whitehall',
    url: 'http://fco.gov.uk',
    joined: '2016-02-02T12:00',
    bio: 'Best friends with @treasurymog.',
    followingIds: ['treasurymog'],
    followerIds: ['treasurymog'],
    likeIds: ['1212689921057665024'],
  },
  treasurymog: {
    handle: 'treasurymog',
    displayName: 'Gladstone, Esq.',
    avatarSrc: '/assets/treasurymog-avatar.jpg',
    bannerSrc: '/assets/treasurymog-banner.jpeg',
    location: 'Whitehall, London',
    url: undefined,
    joined: '2016-10-12T12:00',
    bio:
      'I live and work at the Treasury as a mouser but I also have a paw in the finances. Here to help lighten up the political world. Unofficial.',
    url: 'https://twitter.com/diplomog',
    followingIds: ['diplomog'],
    followerIds: ['diplomog'],
    likeIds: ['1209791721099411456'],
  },
};

const tweets = [
  {
    id: '1209791721099411456',
    authorHandle: 'diplomog',
    timestamp: '2019-12-26T14:38',
    body:
      "If you're a 🇬🇧 diplomat abroad today, let me know where you are and what you're up to!",
  },
  {
    id: '1212689921057665024',
    authorHandle: 'treasurymog',
    timestamp: '2020-01-04T09:14',
    body:
      'Ok people #backtowork you go. Cats...just carry on lounging around as usual.',
    media: [
      {
        type: 'img',
        url: '/assets/ENRXDPKWwAEJqFu.jpeg',
      },
    ],
  },
  {
    id: '1209788222324256768',
    authorHandle: 'diplomog',
    timestamp: '2019-12-25T21:53',
    body: `Moggy Christmas to all!

Special wishes to all my diplomats, far from home at this time of year, serving 🇬🇧 all over the 🌍.`,
    media: [
      {
        type: 'img',
        url: '/assets/EMoH94cXYAAM5Jj.jpeg',
      },
    ],
  },
  {
    id: '1212021009320161280',
    authorHandle: 'diplomog',
    timestamp: '2019-12-30T19:23',
    body: `2019 has a been a wonderful year, but I definitely deserve some rest!

I would love to know what my 🇬🇧diplomats have been getting up to! What’s been your highlight or biggest achievement of the year?

My highlight has been coming back to work with my very own Palmy HQ 🤩`,
    media: [
      {
        type: 'img',
        url: '/assets/ENH2rRrWwAARmsZ.jpeg',
      },
      {
        type: 'img',
        url: '/assets/ENH2rTvWwAYTqQW.jpeg',
      },
      {
        type: 'img',
        url: '/assets/ENH2rYeXYAEAIk7.jpeg',
      },
    ],
  },
];

module.exports = {
  users,
  tweets,
};
