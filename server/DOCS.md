# Critter API docs

## Endpoints

### GET /api/tweet/:tweetId

returns data about the specified tweet.

Example:

```json
{
  "tweet": {
    "id": "1215337574526525440",
    "author": {
      "handle": "diplomog",
      "displayName": "Palmerston",
      "avatarSrc": "/assets/diplomog-avatar.jpg",
      "bannerSrc": "/assets/diplomog-banner.jpeg",
      "location": "Whitehall",
      "url": "http://fco.gov.uk",
      "joined": "2016-02-02T12:00",
      "bio": "Best friends with @treasurymog.",
      "numFollowing": 4,
      "numFollowers": 10,
      "numLikes": 21
    },
    "timestamp": "2020-01-09T13:20:00+00:00",
    "numLikes": 800,
    "numRetweets": 250,
    "isLiked": true,
    "isRetweeted": false,
    "status": "Had salad for lunch today, so tasty!!1",
    "media": [
      {
        "type": "img",
        "url": "/salad.jpg"
      }
    ]
  }
}
```

### GET /api/:handle/feed

Returns an array of tweets from the user specified.

```json
{
  "tweets": [
    // See GET /api/tweet/:tweetId for an example of
    // the data received for each tweet.
  ]
}
```

### GET /api/me/feed

Same as `/api/:handle/tweets`, but for the current user

### PUT /api/tweet/:tweetId/like

Toggles between liking and unliking the specified tweet, by the current user.

You must specify whether the tweet should be liked in the request, using the `like` query parameter.

Example body:

```json
{
  "like": true
}
```

Response:

```json
{
  "success": true
}
```

If the tweet cannot be found, it returns a 404.
