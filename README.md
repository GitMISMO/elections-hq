# elections-hq

Elections HQ: MISMO's one place to run the yearly elections. Business Domain and Area of
Focus leaders, the Governance Committee and the Board of Directors slate,
with seats, nominations, ballots, the one-company-one-vote check, the count, the timeline
and tasks, the emails and posts, onboarding new leaders, and the leadership roster.
Live at https://resources.mismo.org/elections-hq/ (sign-in required).

Set up the same way as Marketing HQ. The records live in the private `elections-hq-data`
repository and are read and saved through the resources.mismo.org relay under the project
key `elections-hq`. No token, secret, nominee contact or ballot is ever kept in this repo.

The one thing this public repository does hold is `slates/`: what voters see on the public
ballot (confirmed nominees' names, companies, titles and statements) and the seat list for
the nomination form. Elections HQ publishes those through a second relay project,
`elections-hq-public`, whose only writable folder is `slates/`.

Switched on from the start (`PREVIEW` is `false`). The relay entries for `elections-hq` and
`elections-hq-public` are already in `GitMISMO.github.io/_internal/projects.json`, and Elections HQ
is in `assets/tools.json` (Planning). The one remaining step is the save relay's GitHub key:
add `elections-hq-data` and `elections-hq` to its repository list. Until then the page explains
that in plain words instead of opening.

Who can do what (set per person in People & Access):
- **Admin** and **Staff**: change anything.
- **View**: read-only.

The public forms go in the organization site, `GitMISMO.github.io/forms/elections/`
(`nominate/`, `ballot/` and `confirm/`; ready in the setup package, not uploaded yet). Each posts to its own Power Automate flow, which files the entry
in elections-hq-data: nominations in `data/nomsubs.json`, ballots in `data/votes.json`, shaped
`{"docs": {"nomsubs/<id>": {...}}}`. Elections HQ never writes those two files; staff decisions
go in `nomreviews` and `voteflags` beside them, so a ballot is never changed after it's cast.

Before uploading a new copy of index.html, download the current one from GitHub first and make
changes to that copy, so nothing that changed since is undone.

Meeting Trackers is the source of truth for which groups are active and for attendance. Elections HQ
can read a daily summary (feeds/elections in meeting-trackers-data) once `elections-feed.js` is added
to the meeting-trackers repository (not added yet).

When results are applied for a Business Domain or Area of Focus, Elections HQ writes the new Chair,
Vice Chair or Co-Chairs into Meeting Trackers' Workgroup Leadership (file `leaders`, document
`leaders/all`, one item per group) through the relay, marked `src: "Elections HQ"`. Whoever applies
the results needs Meeting Trackers access too; anything that couldn't be sent waits in `mtpush`
and can be re-sent from the results panel.

Emails are drafted into `data/outbox.json` by the page and sent by the "Elections Outbox" flow from
elections@mismo.org, which records each send in `data/outsent.json`. Nominee answers arrive in
`data/responses.json`. See GO-LIVE.md.
