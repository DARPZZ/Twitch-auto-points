const fs = require("fs");

const version = process.env.VERSION;

const json = {
  addons: {
    "@extension-twitch-auto-collection": {
      updates: [
        {
          version,
          update_link:
            `https://github.com/DARPZZ/Twitch-auto-points/releases/download/v${version}/twitch-auto-points-${version}.xpi`
        }
      ]
    }
  }
};

fs.writeFileSync(
  "updates.json",
  JSON.stringify(json, null, 2)
);