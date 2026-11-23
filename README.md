# elections-hq

Leadership HQ (formerly Elections HQ) moved to **GitMISMO/leadership-hq**, live at
https://resources.mismo.org/leadership-hq/, on November 22, 2026. Make every change to the page there.

This repository stays, for two jobs:
- `index.html` forwards the old address, resources.mismo.org/elections-hq/, to /leadership-hq/
  (keeping any #page and ?options), so old links and bookmarks still work.
- `slates/` is what the public forms read at /elections-hq/slates/ (the open seats, each ballot's
  confirmed nominees, and `forms.json`). Leadership HQ writes it through the relay project
  `elections-hq-public`, whose only writable folder is `slates/`. Don't move or rename it.

The records are in the private `elections-hq-data` repository, reached through the relay under the
project key `elections-hq` (unchanged).
