const env = process.env.NODE_ENV;

let config = {
  development: {
    app: {
      port: process.env.PORT || 8000,
    }
  },
  production: {
    app: {
      port: process.env.PORT,
    }
  }
}

module.exports = config[env];
