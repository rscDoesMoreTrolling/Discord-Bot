#!/bin/bash

echo "Installing Bot [0/3]"
sleep 2
echo ""
echo "Select your distro based!"
echo ""
echo "1.Debian Linux (Available)"
echo "2.Arch Linux (Available)"
echo ""
read -p "===>" select
sleep 2

if[ $select = 1 ];
then
echo "Installing Nodejs For debian based [1/3]"
sleep 2
sudo apt update -y 
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt update -y
sudo apt install nodejs -y
sleep 2
echo "Done!"
sleep 2
echo ""
echo "Installing Modules For Bot! [2/3]"
npm i
echo ""
echo "Instalation Done! [3/3]"
echo ""
echo "Edit your config in Discord-Bot/config.json"
echo ""
echo "If done Run your bot with command"
echo "node shard.js (With shard)"
echo "node index.js (Without shard)"
echo ""
fi

if[ $select = 2 ];
then
echo "Installing Nodejs For Arch based [1/3]"
sleep 2
sudo pacman -Syuu --no-confirm
sudo pacman -S nodejs npm --no-confirm
sleep 2
echo "Done!"
sleep 2
echo ""
echo "Installing Modules For Bot! [2/3]"
npm i
echo ""
echo "Instalation Done! [3/3]"
echo ""
echo "Edit your config in Discord-Bot/config.json"
echo ""
echo "If done Run your bot with command"
echo "node shard.js (With shard)"
echo "node index.js (Without shard)"
echo ""
fi

# Copyright (c) 2021 NekoIceCream