<h1 align="center">Neko UwU</h1>

<div align="center">
	<a href="https://github.com/NekoIceCream/Discord-Bot/actions">
		<img src="https://github.com/NekoIceCream/Discord-Bot/actions/workflows/checker-ci.yml/badge.svg" alt="Checker CI" />
	</a>
</div>

## Navigation
- [Introduction](#introduction)
- [Installation](#installation)
- [Current Status](#Current-Status)
- [Plan](#Plan)
- [License](https://github.com/NekoIceCream/Discord-Bot/blob/main/LICENSE.md)

## Introduction
Neko UwU is a Discord bot created by NekoIceCream written in JavaScript with npm, this bot was created for fun and learning on developing with JavaScript.

## Installation
1. Fork the repo
2. Edit your token at `discord-bot/config.json`
   ```
   {
    "token": "YOUR_TOKEN",
    "prefix": "YOUR_PREFIX",
    "game": "YOUR_PLAYING_STATUS",
    "mongoose": "YOUR_MONGODB_URL/(DATABASE_NAME)",
    "shard": "TOTAL_YOUR_SHARD"
   }
   ```
3. Install all modules
   ```
   npm i
   ```
4. Start your bot 

- Without Shard
  ```
  node index.js
  ```
- With Shard
  ```
  node shard.js
  ```

## Current Status
1. Music Command [Not Work]
2. Custom Status [Not Work] [In Progress]
3. MongoDB Database [Not Work] [In Progress]

## Plan
1. Fix Bugs
2. Multi Language
3. ChatBot
4. Shard Support [In Progress]
5. Slash Commands
6. Economy Bot (If MongoDB Fixed)
7. Website
