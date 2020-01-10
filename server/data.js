const users = {
  larry: {
    bio: "Chief Mouser to the Cabinet Office",
    url: ""
  },
  diplomog: {
    handle: "diplomog",
    displayName: "Palmerston",
    avatarSrc: "/assets/diplomog-avatar.jpg",
    bannerSrc: "/assets/diplomog-banner.jpeg",
    location: "Whitehall",
    url: "http://fco.gov.uk",
    joined: "2016-02-02T12:00",
    bio: "Best friends with @treasurymog.",
    followingIds: ["treasurymog"],
    followerIds: ["treasurymog"],
    likeIds: ["1212689921057665024"]
  },
  treasurymog: {
    handle: "treasurymog",
    displayName: "Gladstone, Esq.",
    avatarSrc: "/assets/treasurymog-avatar.jpg",
    bannerSrc: "/assets/treasurymog-banner.jpeg",
    location: "Whitehall, London",
    url: undefined,
    joined: "2016-10-12T12:00",
    bio:
      "I live and work at the Treasury as a mouser but I also have a paw in the finances. Here to help lighten up the political world. Unofficial.",
    followingIds: ["diplomog", "giantcat9"],
    followerIds: ["diplomog", "giantcat9"],
    likeIds: ["1209791721099411456"]
  },
  giantcat9: {
    handle: "giantcat9",
    displayName: "Giant Military Cats",
    avatarSrc:
      "https://pbs.twimg.com/profile_images/1203323662591504384/GwxdsfNA_400x400.jpg",
    bannerSrc:
      "https://pbs.twimg.com/profile_banners/1168513974763171840/1578494728/1500x500",
    location: undefined,
    url: undefined,
    joined: "2019-09-01T18:00",
    bio:
      "Just giant cats with military hardware. \nInstagram: @giantmilitarycats",
    followingIds: ["treasurymog"],
    followerIds: ["treasurymog"],
    likeIds: []
  }
};

const tweets = [
  {
    id: "1209791721099411456",
    authorHandle: "diplomog",
    timestamp: "2019-12-26T14:38",
    body:
      "If you're a 🇬🇧 diplomat abroad today, let me know where you are and what you're up to!"
  },
  {
    id: "1212689921057665024",
    authorHandle: "treasurymog",
    timestamp: "2020-01-04T09:14",
    body:
      "Ok people #backtowork you go. Cats...just carry on lounging around as usual.",
    media: [
      {
        type: "img",
        url: "/assets/ENRXDPKWwAEJqFu.jpeg"
      }
    ]
  },
  {
    id: "1209788222324256768",
    authorHandle: "diplomog",
    timestamp: "2019-12-25T21:53",
    body: `Moggy Christmas to all!

Special wishes to all my diplomats, far from home at this time of year, serving 🇬🇧 all over the 🌍.`,
    media: [
      {
        type: "img",
        url: "/assets/EMoH94cXYAAM5Jj.jpeg"
      }
    ]
  },
  {
    id: "1215337574526525440",
    authorHandle: "giantcat9",
    timestamp: "2020-01-09T13:20",
    body: `Olifant / Rooikat`,
    media: [
      {
        type: "img",
        url:
          "https://pbs.twimg.com/media/EN2_AttWkAE5PPA?format=jpg&name=medium"
      }
    ]
  },
  {
    id: "1215324598067245056",
    authorHandle: "giantcat9",
    timestamp: "2020-01-06T09:20",
    body: `JAS 39 Gripen`,
    media: [
      {
        type: "img",
        url:
          "https://pbs.twimg.com/media/EN2zNYXWoAEqe1u?format=jpg&name=medium"
      }
    ]
  },
  {
    id: "1215288136026284032",
    authorHandle: "giantcat9",
    timestamp: "2019-12-24T14:02",
    body: `FGS Frankfurt Am Main (A 1412)`,
    media: [
      {
        type: "img",
        url:
          "https://pbs.twimg.com/media/EN2SATMXUAAk1KW?format=jpg&name=medium"
      }
    ]
  },
  {
    id: "1215286068716736512",
    authorHandle: "giantcat9",
    timestamp: "2019-12-29T22:19",
    body: `"The principle of giant military cats deterrence states that a country’s possession of giant military cats discourages other countries from using giant military cats".`,
    media: []
  },
  {
    id: "1215277385404309504",
    authorHandle: "giantcat9",
    timestamp: "2020-01-T11:53",
    body: `Come adopt Storm #Philadelphia 
He needs you to storm the enemy lines and find his new #ForeverHome 
#AdoptDontShop 
https://morrisanimalrefuge.org/adopt/storm `,
    media: [
      {
        type: "img",
        url:
          "https://pbs.twimg.com/media/EN2IQ50W4AMz3VY?format=jpg&name=medium"
      }
    ]
  },
  {
    id: "1212021009320161280",
    authorHandle: "diplomog",
    timestamp: "2019-12-30T19:23",
    body: `2019 has a been a wonderful year, but I definitely deserve some rest!

I would love to know what my 🇬🇧diplomats have been getting up to! What’s been your highlight or biggest achievement of the year?

My highlight has been coming back to work with my very own Palmy HQ 🤩`,
    media: [
      {
        type: "img",
        url: "/assets/ENH2rRrWwAARmsZ.jpeg"
      },
      {
        type: "img",
        url: "/assets/ENH2rTvWwAYTqQW.jpeg"
      },
      {
        type: "img",
        url: "/assets/ENH2rYeXYAEAIk7.jpeg"
      }
    ]
  }
];

module.exports = {
  users,
  tweets
};
