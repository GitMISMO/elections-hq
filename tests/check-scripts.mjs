// Every inline script in the pages parses; no keys, tokens or flow addresses are in any file; slates are valid JSON.
import fs from 'node:fs'; import path from 'node:path'; import vm from 'node:vm';
let bad = 0; const fail = m => { console.log('FAIL', m); bad++; };
for (const f of ['index.html', 'tests/app.html']) {
  if (!fs.existsSync(f)) continue;
  const html = fs.readFileSync(f, 'utf8'); let i = 0;
  for (const m of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
    i++; try { new vm.Script(m[1], { filename: f + '#script' + i }); } catch (e) { fail(f + ' script ' + i + ': ' + e.message); } }
  console.log('ok', f, i, 'scripts');
}
const SECRET = [/ghp_[A-Za-z0-9]{20,}/, /github_pat_[A-Za-z0-9_]{20,}/, /[?&]sig=[A-Za-z0-9%_-]{20,}/, /logic\.azure\.com[^"'\s]*sig=/, /powerplatform\.com[^"'\s]*sig=/, /-----BEGIN [A-Z ]*PRIVATE KEY-----/, /AKIA[0-9A-Z]{16}/];
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.name === '.git' || e.name === 'node_modules' ? [] : e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
for (const f of walk('.')) { if (!/\.(html|js|mjs|json|md|yml|txt)$/.test(f)) continue; const t = fs.readFileSync(f, 'utf8'); for (const r of SECRET) if (r.test(t)) fail(f + ' looks like it holds a secret (' + r + ')'); }
if (fs.existsSync('slates')) for (const f of fs.readdirSync('slates').filter(x => x.endsWith('.json'))) { try { JSON.parse(fs.readFileSync('slates/' + f, 'utf8')); } catch (e) { fail('slates/' + f + ' is not valid JSON'); } }
console.log(bad ? bad + ' problem(s)' : 'All checks passed'); process.exit(bad ? 1 : 0);
