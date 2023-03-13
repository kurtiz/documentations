#!/bin/bash

# Colors
red="\e[0;31m"
blue="\e[0;34m"
green="\e[0;32m"
cyan="\e[0;36m"
purple="\e[0;35m"
brown="\e[0;33m"
reset="\e[0m"

# **Installs some required libraries**
echo -e ${cyan}"Installing some required libraries"
echo -e ${reset}

sudo apt-get install build-essential checkinstall
sudo apt-get install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev

# **Downloads and Installs Python 3.4**

echo -e ${brown}"Downloading Python3.4....."
echo -e ${reset}

sudo cd /usr/src
sudo wget https://www.python.org/ftp/python/3.4.4/Python-3.4.4.tgz

echo -e ${brown}"Unzipping Python-3.4.4.tgz....."
echo -e ${reset}
clear

sudo tar -xzf Python-3.4.4.tgz
sudo cd Python-3.4.4

echo -e ${purple}"Configuring and Installing Python3.4......"
echo -e ${reset}

sudo ./configure
sudo make altinstall
clear

echo -e ${cyan}"Testing if the installation was successful"
echo -e ${reset}

# **Tests if it was installed successfully**
python3.4 --version
clear

echo -e ${brown}"Copying Libraries to the include folder"
echo -e ${reset}

# **Copy the necessary header files to the python3.4 dev folder**
cp /usr/src/Python-3.4.4/Include/ /usr/include/python3.4 -Rv

cp /usr/src/Python-3.4.4/pyconfig.h /usr/include/python3.4 -v
clear

echo -e ${green}"Successfully installed and setup\nDone......"
echo -e ${reset}

