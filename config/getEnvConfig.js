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

  console.log(`Attempting to get production config value ${configName}`);

  switch (configName) {
    case "mongoURI":
      console.log(process.env.mongoURI);
      return process.env.mongoURI;
    case "jwtSecret":
      console.log(process.env.jwtSecret);
      return process.env.jwtSecret;
  }
}

module.exports = getEnvConfig;
