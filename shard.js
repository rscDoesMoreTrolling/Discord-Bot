const { ShardingManager } = require('discord.js');
const bumbe = new ShardingManager('./index.js',
{ 
	totalShards: config.shard,
    token: config.token
});
bumbe.spawn();

bumbe.on('shardCreate', shard => {
    console.log('[✅${shard.id} ID shard initialized!');
});