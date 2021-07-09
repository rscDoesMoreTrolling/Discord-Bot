const { ShardingManager } = require('discord.js');
const config = require('./config.json');
const bumbe = new ShardingManager('./index.js',
{ 
	totalShards: config.shard,
    token: config.token
});
bumbe.spawn();

bumbe.on('shardCreate', shard => {
    console.log('[X]{shard.id} ID shard initialized!');
});