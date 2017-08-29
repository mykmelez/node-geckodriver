import test from 'ava';
import child_process from 'child_process';

test.cb('properly extracts', t => {
  child_process.exec('node ../index.js', (error, stdout, stderr) => {
    if (error) {
      return t.fail(`exec error: ${error}`)
    }
    if (process.platform() === 'win32') {
      t.is(stdout, 'Downloading geckodriver... Extracting... Linking... Complete.\n');
    }
    else {
      t.is(stdout, 'Downloading geckodriver... Extracting... Complete.\n');
    }
    t.is(stderr, '');
    t.end();
  });
});

test('programmatic usage', t => {
  var driver = require('../lib/geckodriver')
  t.is(driver.version, '0.18.0')
});
