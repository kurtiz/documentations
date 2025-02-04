---
sidebar_label: Add Apt Repository
sidebar_position: 1
---

# Add-Apt-Repository

If you want to add a [PPA repository](https://www.geeksforgeeks.org/using-ppa-in-linux/) to your linux repository in order to install certain software, you will need to use the add-apt-repository command. For some reasons (which I'm not sure yet), this command or tool is usually not available by default for use.

To install it run this command
```bash
sudo apt-get install software-properties-common
sudo apt update
```

# Basic Usage

```bash
sudo add-apt-repository ppa:software-repo/ppa
```
where `software-repo` is the repo of the software you want to add.

In case you encounter an error like this when trying to add a ppa,

```bash
user@pcsd:~$ sudo add-apt-repository ppa:kelebek333/kablosuz
Traceback (most recent call last):
  File "/usr/bin/add-apt-repository", line 362, in <module>
    sys.exit(0 if addaptrepo.main() else 1)
  File "/usr/bin/add-apt-repository", line 345, in main
    shortcut = handler(source, **shortcut_params)
  File "/usr/lib/python3/dist-packages/softwareproperties/shortcuts.py", line 40, in shortcut_handler
    return handler(shortcut, **kwargs)
  File "/usr/lib/python3/dist-packages/softwareproperties/ppa.py", line 86, in __init__
    if self.lpppa.publish_debug_symbols:
  File "/usr/lib/python3/dist-packages/softwareproperties/ppa.py", line 126, in lpppa
    self._lpppa = self.lpteam.getPPAByName(name=self.ppaname)
  File "/usr/lib/python3/dist-packages/softwareproperties/ppa.py", line 113, in lpteam
    self._lpteam = self.lp.people(self.teamname)
AttributeError: 'NoneType' object has no attribute 'people'
```

install this library `python3-launchpadlib`
```bash
sudo apt install python3-launchpadlib
```