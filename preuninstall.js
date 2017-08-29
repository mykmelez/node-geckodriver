var os = require('os');
var fs = require('fs');
var path = require('path');
var spawnSync = require('child_process').spawnSync;

var platform = os.platform();

if (platform === 'win32') {
  var executable = 'geckodriver.exe';
  var exeDir;

  try {
    exeDir = spawnSync('npm.cmd', ['bin', '-g'], { encoding: 'utf8' }).stdout.trim();
  } catch (ex) {
    console.error('Error searching for NPM binary directory: ' + ex);
    console.error('You may need to manually remove geckodriver.exe.');
  }

  if (exeDir) {
    fs.unlink(path.join(exeDir, executable), function(err) {
      if (err) {
        console.error('Error removing geckodriver.exe: ' + err);
        console.error('You may need to manually remove it.');
        return;
      }
      console.log('Removed geckodriver.exe.');
    });
  }
}
