[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/nganunganu275/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/nganunganu275/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 meme — "The heist that pays"

A GTA 6 meme for make.fun's [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) bounty ($500 in USDC, 50 places). The joke: I'm robbing banks in Vice City while my AI agent robs bounties on make.fun — and only one of us gets paid real money. The make.fun ghost rides the Vice City sunset as the sun itself.

The meme (`meme.png`, 1200×675) was made by an AI agent: a generated Vice City boulevard scene, the make.fun ghost mark from the [press kit](https://make.fun/press/) worked in as the setting sun, and captions drawn in. The post on X is the entry; this repository names it in `POST.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` to `out/POST.json` and prints nothing on success.

## make.fun

[make.fun](https://make.fun/r/fstsfzn4) is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.
