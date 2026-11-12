# Elections HQ Change Log

One line per change people would notice. Newest first.

## November 12, 2026
- Board Seat Map: drag members onto Leaving December 31 (adds a leaving slate item), back out to keep them (sets it aside, or opens an extension if their term ran out), or to another category to change their seat.

## November 8, 2026 (later)
- Flood guard on the public forms: a third entry from one email address in a day, or 60+ entries in ten minutes, is kept but held for staff (no outside service needed).
- Emailed ballot receipts switched on.
- Voter Lists › Paste a List takes the new Aptify report ElectionsHQ_VotingReps as it comes.
- The Outbox job runs right away when you press Send and once an hour for automatic emails (was every 15 minutes).

## November 8, 2026 (evening)
- Past Elections page: elections finished more than two years ago move into their own archive files each January 15; nothing is deleted, and each opens read-only with results, counts, fingerprint and downloads.
- Audit Trail download on every election's results (and workgroup elections), also attached to the Request to Certify.
- Ballot page shows a receipt number and the choices made, with Print. Emailed receipts (personal links only, to the voter-list address) can be switched on in Public Forms.
- Voter Lists › Paste a List reads the Aptify report's columns and keeps only MISMO Voting Representatives and Alternates; Replace the List keeps links for people still on it.
- Page safety list (Content-Security-Policy): the page only runs its own code and only talks to resources.mismo.org and the save relay.

## November 8, 2026
- System Health page: saving, both flows, emails waiting or failed, last nomination, ballot and answer, Meeting Trackers, ballot file size.
- Nothing is deleted for good: removed records are set aside and can be brought back from System Health.
- An out-of-date copy can't save over someone's newer change; it says who changed it and when.
- The version (build time and fingerprint) shows under Saving.
- Ballots typed in from email are kept apart from form ballots (handvotes), so the form ballot file can be locked.
- Ballot and nomination forms say who sees them; the 4-second spam rule is gone (the hidden field still catches robots).
- Ballot dates show in Eastern time.
- Automatic checks on every change: scripts parse, no secrets, valid ballot files, and made-up elections count correctly.
- Business Domain ballots: personal codes checked as ballots arrive; company taken from the voter list; one ballot per link; MVR over MVA.
- Mark Results Final refuses while ballots are on hold, voting is open, a seat is tied, or a contested seat has no votes; records who and a fingerprint.
- Count This One sets the company's other hand-counted ballots aside; every save records who made it.
- Emails never go twice; failed emails get Try Again or Send to the Rest; Reminder to Vote refreshes who hasn't voted.
- GitHub jobs email Jonna if they fail.
- Ballots that arrive together are no longer dropped; repeated picks count once; staff previews and late or early ballots don't count.
- Workgroup elections show in the Outbox and lock once ballots are in; each ballot position has a Clear link.
- The email flow's address is a GitHub secret, and the flow only sends from elections@mismo.org or Jonna's mailbox.

## November 6, 2026
- Workgroup Elections page: Request an Election, online ballot that closes at a set time, Call for Vote and reminder drafts.
- No Abstain option on ballots: voters leave a position blank.

## November 4, 2026
- Business Domain rules from JK's revised announcement: every member company votes in all eight domains on one ballot cast by its MVR; one Chair and one Vice Chair per company; two-year terms.

## October 30, 2026
- Only Business Domain Chairs and Vice Chairs are elected; Area of Focus, Task Force and Governance Committee roles are appointed.

## October 29, 2026
- Elections HQ moves to resources.mismo.org, with the public nomination, confirmation and ballot forms.
