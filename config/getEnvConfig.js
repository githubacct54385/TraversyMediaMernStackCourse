const config = require("config");

function getEnvConfig(configName) {
  // check runtime
  const runtime = process.env.NODE_ENV;
  if (runtime === "production") {
    // get from heroku env variables
    console.log(`getting ${configName} from production`);
    return process.env.configName;
  } else {
    // get from local config
    console.log(`getting ${configName} from development`);
    return config.get(configName);
  }
}

module.exports = getEnvConfig;
