
module.exports = {
    development: {
      db: 'mongodb://localhost/noobjs_dev',
      facebook: {
          appId: "APP_ID"
        , appSecret: "APP_SECRET"
        , callbackURL: "http://localhost:3000/auth/facebook/callback"
      },
      twitter: {
          consumerKey: "CONSUMER_KEY"
        , consumerSecret: "CONSUMER_SECRET"
        , callbackURL: "http://localhost:3000/auth/twitter/callback"
      },
      github: {
          appId: 'APP_ID'
        , secret: 'APP_SECRET'
        , callbackURL: 'http://127.0.0.1:3000/auth/github/callback'
      }
    }
  , test: {

    }
  , production: {

    }
}
