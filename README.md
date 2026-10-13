# AISWEC demo

A live example of [AISWEC](https://aiswec.com), in public: one task, from an issue to a merged pull
request, with nothing edited after the fact.

1. [Issue #1](https://github.com/aiswec/demo/issues/1) asked for a tip calculator, and a
   maintainer added the `aiswec` label.
2. AISWEC answered with a plan on the issue, and the maintainer approved it with one comment.
3. AISWEC built it as [pull request #2](https://github.com/aiswec/demo/pull/2), once this
   repository's own check, `bun test`, had passed ([the run](https://github.com/aiswec/demo/actions/runs/38336681773)).
4. The maintainer asked for one change in a review. AISWEC answered with a commit and a reply,
   and the maintainer merged.

Everything written by `aiswec[bot]` here was written by AISWEC. The workflows that ran are open
source, at [aiswec/core](https://github.com/aiswec/core).

## The project

A one-page app on bun: `bun test` runs the checks, and `bun run build` writes the page to
`dist`. `.github/aiswec.yml` is how AISWEC behaves here.
