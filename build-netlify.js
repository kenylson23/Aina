import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildForNetlify() {
  try {
    await build({
      configFile: path.resolve(__dirname, 'vite.config.netlify.ts'),
      mode: 'production'
    });
    console.log('Build completed successfully for Netlify deployment!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildForNetlify();