import Auth0 from "react-native-auth0";
import Constants from "expo-constants";

type Config = {
  auth0Domain: string;
  auth0ClientId: string;
};

const config = Constants.expoConfig?.extra as Config;

if (!config?.auth0Domain || !config?.auth0ClientId) {
  throw new Error("Missing Auth0 config in app.config.js or .env");
}

const domain = config.auth0Domain;
const clientId = config.auth0ClientId;

const auth0 = new Auth0({
  domain: domain,
  clientId: clientId,
});

export { auth0, domain, clientId };
export default auth0;
