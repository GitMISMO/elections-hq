// Runs made-up elections through the real Elections HQ code (tests/app.html, the same code as index.html
// without the sign-in) in a browser, and checks the counting rules. No real records are used.
import { chromium } from 'playwright';
import path from 'node:path';
const b = await chromium.launch(); const p = await b.newPage(); const errs = [];
p.on('pageerror', e => errs.push(e.message));
await p.addInitScript(() => { const store = {}; window.claude = { use: async k => k === 'db' ? { collection: c => ({ onSnapshot: cb => cb({ docs: [] }), doc: id => ({ set: async d => { store[c + '/' + id] = d; }, delete: async () => { delete store[c + '/' + id]; } }) }) } : null }; });
await p.goto('file://' + path.resolve('tests/app.html')); await p.waitForTimeout(1500);
const r = await p.evaluate(async () => {
  const res = {}; const ok = (name, cond) => { res[name] = !!cond; };
  /* a workgroup election: two Co-Chair seats, closes noon ET Nov 13 */
  S.cycles['wg-t'] = { id: 'wg-t', type: 'wg', year: 2026, group: 'Test DWG', closeTime: '12:00', dates: { ballotOpen: '2026-11-09', ballotClose: '2026-11-13' } };
  S.seats = { 'wg-t__co-chair': { id: 'wg-t__co-chair', cycle: 'wg-t', group: 'Test DWG', position: 'Co-Chair', count: 2 } };
  S.nominations = { a: { id: 'a', cycle: 'wg-t', seat: 'wg-t__co-chair', status: 'confirmed', first: 'Ann', last: 'A' }, b: { id: 'b', cycle: 'wg-t', seat: 'wg-t__co-chair', status: 'confirmed', first: 'Bo', last: 'B' }, c: { id: 'c', cycle: 'wg-t', seat: 'wg-t__co-chair', status: 'confirmed', first: 'Cy', last: 'C' } };
  const V = (id, co, ch, at, x) => Object.assign({ id, cycle: 'wg-t', group: 'Test DWG', voter: { company: co, email: id + '@example.com' }, choices: { 'wg-t__co-chair': ch }, submittedAt: at, receivedAt: at }, x || {});
  S.votes = { v1: V('v1', 'Acme', ['a', 'a', 'a', 'b', 'c'], '2026-11-10T15:00:00.000Z'), v2: V('v2', 'Beta', ['c'], '2026-11-13T17:05:00.000Z'), v3: V('v3', 'Gamma', ['c'], '2026-11-13T17:04:00.000Z', { submittedAt: '2026-11-13T16:59:00.000Z' }), v4: V('v4', 'Delta', ['b'], '2026-11-10T15:00:00.000Z', { via: 'Elections HQ preview' }), v5: V('v5', 'Eps', ['b'], '2026-11-08T15:00:00.000Z') };
  S.voteflags = {};
  const c = S.cycles['wg-t']; const st = voteStatus(c); const t = tally(c)['wg-t__co-chair'];
  ok('repeated picks count once and never more than the seats', t.a === 1 && t.b === 1);
  ok('ballot sent just before the close counts (grace)', st.v3.k === 'counted');
  ok('late ballot is set aside', st.v2.k === 'excluded');
  ok('early ballot is set aside', st.v5.k === 'excluded');
  ok('staff preview is set aside', st.v4.k === 'excluded');
  ok('workgroup elections stay out of the election year', (CY = null, curYear() !== 2026));
  /* a Business Domain election with personal links */
  S.cycles['2099-domain'] = { id: '2099-domain', type: 'domain', year: 2099, voterList: 'mvr', dates: { ballotOpen: '2026-11-01', ballotClose: '2026-11-05' } };
  S.seats['d1'] = { id: 'd1', cycle: '2099-domain', group: 'Origination', position: 'Chair', count: 1 };
  S.nominations.x = { id: 'x', seat: 'd1', cycle: '2099-domain', status: 'confirmed', first: 'X', last: 'X' }; S.nominations.y = { id: 'y', seat: 'd1', cycle: '2099-domain', status: 'confirmed', first: 'Y', last: 'Y' };
  S.voters = { r: { id: 'r', list: 'mvr', email: 'r@bank.example', company: 'Example Bank', role: 'MVR', code: 'RCODE00001' }, m: { id: 'm', list: 'mvr', email: 'm@bank.example', company: 'Example Bank', role: 'MVA', code: 'MCODE00001' }, z: { id: 'z', list: 'mvr', email: 'z@zeta.example', company: 'Zeta', role: 'MVR', code: 'ZCODE00001' } };
  const D = (id, co, code, email, ch, at) => ({ id, cycle: '2099-domain', group: 'All Business Domains', voter: { company: co, email }, code, choices: { d1: ch }, submittedAt: at, receivedAt: at });
  Object.assign(S.votes, { d1v: D('d1v', 'Example Bank Mortgage', 'RCODE00001', 'r@bank.example', ['x'], '2026-11-02T15:00:00.000Z'), d2v: D('d2v', 'Example Bank NA', 'MCODE00001', 'm@bank.example', ['y'], '2026-11-02T16:00:00.000Z'), d3v: D('d3v', 'Zeta', 'ZCODE00001', 'z@zeta.example', ['y'], '2026-11-02T17:00:00.000Z'), d4v: D('d4v', 'Zeta Corp', 'ZCODE00001', 'other@zeta.example', ['x'], '2026-11-02T18:00:00.000Z') });
  const d = S.cycles['2099-domain']; const ds = voteStatus(d);
  ok('company comes from the voter list, and the MVR counts over the MVA', ds.d1v.k === 'counted' && ds.d2v.k === 'excluded');
  ok('a personal link counts once', ds.d3v.k === 'counted' && ds.d4v.k === 'excluded');
  ok('results can not be finalized with a tie', finalProblems(d).some(x => /tie/.test(x)));
  return res;
});
let bad = 0; for (const [k, v] of Object.entries(r)) { console.log(v ? 'ok  ' : 'FAIL', k); if (!v) bad++; }
if (errs.length) { console.log('Page errors:', errs.join(' | ')); bad++; }
await b.close(); console.log(bad ? bad + ' failed' : 'All election tests passed'); process.exit(bad ? 1 : 0);
