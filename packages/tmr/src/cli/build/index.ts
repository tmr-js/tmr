import compile from "./webpack/compile";
import getServerConfig from './webpack/server-config';
import getBrowserConfig from './webpack/browser-config';

async function build() {
    console.log('Building server.')
    const serverConfig = getServerConfig();
    console.log('serverConfig', serverConfig);
    await compile(serverConfig);
    console.log('Building browser.')
    const browserConfig = getBrowserConfig();
    console.log('browserConfig', browserConfig);
    await compile(browserConfig);
}

export default build;
