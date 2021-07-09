const { ShardingManager } = require('discord.js');
const bumbe = new ShardingManager('./index.js',
{ 
	totalShards: 2,
    token: "TOKEN"
});
bumbe.spawn();

bumbe.on('shardCreate', shard => {
    console.log('[✅${shard.id} ID shard initialized!');
});