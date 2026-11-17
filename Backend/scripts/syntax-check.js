const { spawnSync } = require("child_process");
const { readdirSync, statSync } = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

function collectJavaScriptFiles(dir, files) {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules") {
      continue;
    }
    const fullPath = path.join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      collectJavaScriptFiles(fullPath, files);
      continue;
    }
    if (fullPath.endsWith(".js")) {
      files.push(fullPath);
    }
  }
}

const files = [];
collectJavaScriptFiles(root, files);

let failed = false;
for (const file of files) {
  const result = spawnSync(process.execPath, ["--check", file], {
    stdio: "inherit",
  });
  if (result.status !== 0) {
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log(`Syntax OK (${files.length} files)`);
