const config = require("config");

function getEnvConfig(configName) {
  // check runtime
  const runtime = process.env.NODE_ENV;
  if (runtime === "production") {
    // get from heroku env variables
    return getProductionConfig(configName);
  } else {
    // get from local config
    return config.get(configName);
  }
}

function getProductionConfig(configName) {
  if (configName === null || configName === undefined || configName === "") {
    throw "Production Config Name cannot be null or undefined or an empty string.";
  }

  switch (configName) {
    case "mongoURI":
      return process.env.mongoURI;
    case "jwtSecret":
      return process.env.jwtSecret;
    case "githubClientId":
      return process.env.githubClientId;
    case "githubSecret":
      return process.env.githubSecret;
    default:
      throw "Unknown Environment Variable!  Please add to heroku.";
  }
}

module.exports = getEnvConfig;
