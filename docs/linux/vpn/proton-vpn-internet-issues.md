---
sidebar_label: VPN Internet Issues
sidebar_position: 1
---

# VPN ISSUES

## Internet Issues After Using ProtonVPN

I donwloaded and installed proton vpn via cli on my kali. After connecting and rebooting my device, the internet
connection seemed to have stopped working.

## Fix

After troubleshooting, I found that the issue was caused by the `ipv6leakintrf0` interface.

use the nmcli command to manage your Network Connections

- Run this command

```bash
nmcli device 
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

:::info

The name of the interface might be different depending on your OS and version of proton vpn

:::

```bash
sudo nmcli device delete ipv6leakintrf0
```

With this done, your internet connection should be back on otherwise, restart the OS and check again