export const token = "";
export const clientID = "";
export const devs = [""];
export const logs = ""; // Channel ID used for logging.
export const building = ""; // Channel ID used for building RATs.
export const commands = ""; // Channel ID used for commands.
export const banWaveDetector = ""; // Channel ID used for ban wave detector.
export const tiers = ["","","",""];
export const colors = {
  commands: {
    build: {
      free: "DarkNavy",
      basic: "#00FF00", // Green
      premium: "#0000FF", // Blue
      oauth_free: "Red",
      oauth_premium: "#FF00FF", // Pink
      phisher: "#9900FF"
    },
    decrypt: "#FF0000", // Red
    inject: "#FFFF00", // Yellow
    pump: "#FF8000", // Orange
  },
  logs: {
    build: {
      free: "DarkNavy",
      basic: "#00FF00", // Green
      premium: "#0000FF", // Blue
      oauth_free: "Red",
      oauth_premium: "#FF00FF", // Pink
      hypixel: "#9900FF",
      phisher: "#9900FF"
    },
    decrypt: "#FF0000", // Red
    inject: "#FFFF00", // Yellow
    pump: "#FF8000", // Orange
  },
};
export const limits = {
  phisher: {
    tier_0: 1,
    tier_1: 2,
    tier_2: 3,
    tier_3: 4,
  },
  webhooks: {
    tier_0: 1,
    tier_1: 2,
    tier_2: 3,
    tier_3: 4,
  },
  oauth: {
    tier_0: 1,
    tier_1: 2,
    tier_2: 3,
    tier_3: 4,
  },
};
