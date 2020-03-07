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
  }
}

module.exports = getEnvConfig;
