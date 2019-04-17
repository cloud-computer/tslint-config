import { writeFileSync } from 'fs';
import { join } from 'path';

const configJson = JSON.stringify(require('../tslint.js'), null, 2); // tslint:disable-line:no-var-requires
const tslintConfig = join(__dirname, '../tslint.json');

writeFileSync(tslintConfig, configJson);
