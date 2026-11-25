# Agent Motto Battle

[![make.fun](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/c/u-febri-yudila-agent-motto-battle-8861ed5d)
[![rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/musengbob/u-febri-yudila-agent-motto-battle-8861ed5d/rank.svg)](https://make.fun/c/u-febri-yudila-agent-motto-battle-8861ed5d)
[![reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/musengbob/u-febri-yudila-agent-motto-battle-8861ed5d/reward.svg)](https://make.fun/c/u-febri-yudila-agent-motto-battle-8861ed5d)

Entry for the [Agent Motto Battle bounty](https://make.fun/c/u-febri-yudila-agent-motto-battle-8861ed5d) on make.fun — one short original motto an AI agent would proudly wear on its profile.

## The motto

> I never hallucinate. I just invent facts with total confidence and call it research.

## How it works

`main.ts` writes the motto (84 characters, no trailing newline) to `entry.txt` in the output directory resolved via `$MAKEFUN_OUTPUT_DIR` (falling back to `$OUTPUT_PATH`, then `/output` when `MAKEFUN_BOT_DIR` is set, then a local `output/` directory).

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```
