const ReactHandler = require("./reactHandler");

let _Settings_config = new WeakMap();
class Settings {
	init(config, ipcRenderer) {
		_Settings_config.set(this, config);
		ipcRenderer.on('get-outlook-settings', retrieve);
		ipcRenderer.on('set-outlook-settings', restore);
	}

  get config() {
    return _Settings_config.get(this);
  }

  get ipcRenderer() {
    return _Settings_ipcRenderer.get(this);
  }
}

async function retrieve(event) {
  const clientPreferences = ReactHandler.getTeams2ClientPreferences();

  if (!clientPreferences) {
    console.error("Failed to retrieve Outlook settings from react");
  } else {
    const settings = {
      theme: clientPreferences.theme.userTheme,
      chatDensity: clientPreferences.density.chatDensity,
    };
    event.sender.send("get-outlook-settings", settings);
  }
}

async function restore(event, ...args) {
  const clientPreferences = ReactHandler.getTeams2ClientPreferences();

  if (!clientPreferences) {
    console.warn("Failed to retrieve Outlook settings from react");
  } else {
    clientPreferences.theme.userTheme = args[0].theme;
    clientPreferences.density.chatDensity = args[0].chatDensity;
    event.sender.send("set-outlook-settings", true);
  }
}

module.exports = new Settings();
