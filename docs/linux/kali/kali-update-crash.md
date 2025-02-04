---
sidebar_label: Kali Upgrade Crash
sidebar_position: 1
---

# Kali Upgrade Crash

I was upgrading kali (installed on VMware virtual machine) with the `sudo apt upgrade` command, when the process crashed.
It actually froze for a long time. I had no option but to reboot. Some applications seemed weird. The icons were unusual, some applications behaved funny and some applications were missing too.

## Fix
I run this command to manually complete the upgrade process which crashed
```bash
sudo dpkg --configure -a 
```

In some cases you might need to run the upgrade command again
```bash
sudo apt upgrade
```
## Recommendations
- It is good to create a snapshot before running commands that might have an enormous change / effect on your device or OS. (hardware or virtual machine)
- Make sure you understand the commands you run in the terminal. It can help you know where to start fixing the issue