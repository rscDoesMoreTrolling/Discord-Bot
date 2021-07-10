const { ShardingManager } = require("discord.js");
const config = require('./config.json');

require('dotenv').config();

const shards = new ShardingManager("./index.js",

{
  token: config.token,
  totalShards: process.config.shard,
  respawn: true,
  execArgv: ['--trace-warnings'],
  shardArgs: ['--ansi', '--color']
});

shards.on("shardCreate", shard => {
  console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`)
});

shards.spawn(shards.totalShards, 15000, Infinity);
