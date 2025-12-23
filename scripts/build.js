import fs from "fs";
import path from "path";

const dist = "dist";
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const layout = fs.readFileSync("src/templates/layout.html", "utf8");
const romTemplate = fs.readFileSync("src/templates/rom.html", "utf8");

const romsDir = "data/roms";
const outputDir = path.join(dist, "roms");
fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(romsDir).forEach(file => {
  const data = JSON.parse(fs.readFileSync(path.join(romsDir, file)));

  const downloads = data.downloads.map(d => `<a href="${d.url}">${d.name}</a>`).join("<br>");
  const changelog = data.changelog.map(c => `<li>${c}</li>`).join("");
  const warnings = data.warnings.map(w => `<p>⚠ ${w}</p>`).join("");

  let content = romTemplate
    .replace("{{rom}}", data.rom)
    .replace("{{device}}", data.device)
    .replace("{{codename}}", data.codename)
    .replace("{{android}}", data.android)
    .replace("{{patch}}", data.patch)
    .replace("{{status}}", data.status)
    .replace("{{downloads}}", downloads)
    .replace("{{changelog}}", changelog)
    .replace("{{warnings}}", warnings);

  const finalHtml = layout
    .replace("{{title}}", `${data.rom} | ${data.device}`)
    .replace("{{content}}", content);

  fs.writeFileSync(path.join(outputDir, file.replace(".json", ".html")), finalHtml);
});

console.log("NeomOS build completed");
