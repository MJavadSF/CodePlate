
const { spawn } = require("child_process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("\x1b[0m\x1b[32m%s\x1b[1m", "1) Major Update");
console.info("\x1b[0m\x1b[3m\x1b[2m", "ex: x.0.0");
console.log("\x1b[0m\x1b[33m%s\x1b[1m", "2) Minor Update");
console.info("\x1b[0m\x1b[3m\x1b[2m", "ex: 1.x.0");
console.log("\x1b[0m\x1b[34m%s\x1b[1m", "3) Patch Update");
console.info("\x1b[0m\x1b[3m\x1b[2m", "ex: 1.0.x");
console.log("\x1b[0m\x1b[35m%s\x1b[1m", "a) Alpha Release");
console.info("\x1b[0m\x1b[3m\x1b[2m", "ex: 1.0.0-alpha-x");
console.log("\x1b[0m\x1b[35m%s\x1b[1m", "b) Beta Release");
console.info("\x1b[0m\x1b[3m\x1b[2m", "ex: 1.0.0-beta-x");
console.log("\x1b[0m");

rl.question("Choose your update type: ", function(input) {
  if (input === "1") {
    spawn('yarn release --release-as', ["major"], { shell: true, stdio: 'inherit' })
    rl.close();
  }
    else if (input === "2") {
    spawn('standard-version --release-as', ["minor"], { shell: true, stdio: 'inherit' })
    rl.close();
  }
  else if (input === "3") {
    spawn('standard-version --release-as', ["patch"], { shell: true, stdio: 'inherit' })
    rl.close();
  }
  else if (input === "a") {
    spawn('standard-version -- --prerelease', ["alpha"], { shell: true, stdio: 'inherit' })
    rl.close();
  }
  else if (input === "b") {
    spawn('standard-version -- --prerelease', ["beta"], { shell: true, stdio: 'inherit' })
    rl.close();
  }
});

rl.on("close", function() {
  console.log("\n Version number updated.");
  process.exit(0);
});
