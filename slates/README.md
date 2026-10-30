# slates

What the public forms read. Elections HQ writes these files here through the relay project
`elections-hq-public`; nobody edits them by hand.

- `nominate.json`: the elections open for nominations and their seats
- `<election>.json` (for example `2027-cop.json`): a ballot, with confirmed nominees only
  (name, company, title and the statement written for the ballot)

Nothing else belongs in this folder. Nominations and ballots themselves are kept in the
private `elections-hq-data` repository.
