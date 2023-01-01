# VPN ISSUES

##  Internet Issues After Using ProtonVPN
use the nmcli command to manage your Network Connections

- Run this command
```bash
$ nmcli device 
```
and the results should look like this
``` bash
DEVICE          TYPE      STATE      CONNECTION               
eth0            ethernet  connected  Wired connection 1       
ipv6leakintrf0  dummy     connected  pvpn-ipv6leak-protection 
lo              loopback  unmanaged  --      
```
- Looking at the list returned, you can find a connection named `ipv6leakintrf0` or something related
this is actually created to protect you from IP Leaks. (basically not allowing internet access when 
the vpn connection is interupted, that way your actual IP address is not used to connect to the internet)
So in order get rid of this, you would have to delete this connection. To do so, run this command
```bash
$ sudo nmcli device delete ipv6leakintrf0
```
With this done, your internet connection should be back on otherwise, restart the OS and check again
