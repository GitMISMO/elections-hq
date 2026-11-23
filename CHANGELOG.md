# Leadership HQ Change Log

One line per change people would notice. Newest first.

## November 22, 2026
- Leadership HQ moved to GitMISMO/leadership-hq (resources.mismo.org/leadership-hq/). This repository now only forwards the old address and keeps slates/ for the public forms. See that repository's CHANGELOG for everything after this.
- Business Domain results are certified by MBA Legal (Justin Wiseman): a Heads-Up when the Call for Vote goes out and a Request to Certify on the audit date, both drafts until Jonna presses Send. New dates on the domain election: Results to Legal and Certification Back.
- MBA Legal: Justin Wiseman (replaced Michael Briggs) now receives the Heads-Up and the Request to Certify, and is filled in on Certification.
- Leadership HQ everywhere: page text, help, the GitHub jobs, the public forms' notes and the Aptify reports now say Leadership HQ. The address (/elections-hq/), the repositories and the save relay project keep elections-hq, so nothing that connects to it changes. Staff previews saved under the old name are still recognized.
- The two Power Automate flows are now Leadership HQ - Forms and Leadership HQ - Send Email, and the GitHub jobs Leadership HQ form entries and Leadership HQ Outbox (their addresses and secrets didn't change).

## November 21, 2026
- Voter Lists › MVRs and MVAs updates by itself from Aptify every Monday (report ElectionsHQ_VotingReps_Feed, emailed to Jonna (the elections mailbox once she has full access) and sent on by the flow Leadership HQ - Aptify Voting Reps). New people get their own ballot link, everyone keeps theirs, people added by hand stay, and nobody is taken off while a ballot is open. System Health warns if a week is missed.
- Elections HQ is now Leadership HQ: the menu starts with Leadership (Roster, Board of Directors, Structure, Onboarding) and opens on the Leadership Roster; elections are run from the Elections sections. The address stays /elections-hq/.
- Records & Audits: keep each year's audit request and reply, the Board list and the signed minutes. Drop an Outlook email and it becomes a record with its attachments; every file downloads as it went in.
- Board List for a year: drafts the calendar-year Board list (officers, members with title and company, ex officio, Secretary, Treasurer, notes) to check and save.
- Board members have Job Title, Joined the Board and a Note for the Board List.

## November 17, 2026
- Elections can close nominations and voting at a set Eastern time (Business Domains: 5 p.m. Friday). The forms close on time and the emails, ballot and request to MBA Legal say the time.
- Architecture split in two: the workgroup is an Area of Focus under Data & Technology Enablement; the approval body stays in the Governance Process.

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
