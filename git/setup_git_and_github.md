## Setting up SSH Key for Git and GitHub
- First make sure you have git.
- Make sure you have a github account
- Add your github email and username to your local git
 configuration 
 
 ## Please Note:
 
 _Do not add the dollar sign ($) in front of the commands_
 ```bash 
 $ git config --global user.name "username"
 $ git config --global user.email "email"
 ```
 replace `"username"` with your github username and replace `"email"` with your github email
- To check if these commands have taken effect, output the
 configuration variables
 ```bash
 $ git config --global --list
 ```
 this will output all the config variables that have been set

- Since Github no longer supports password authentication 
 over git, we will have to setup ssh key which serves as 
 the means of authentication.
- Login into your github account in the browser and navigate 
 to the settings page.
- On the settings page, select SSH and GPG keys
- Click on new SSH key
- Github will provide you with a form with three input fields.
 The first one is a "Title"(This is pretty much the name or 
 tag you would use to identify the machine which will use this
 key. It helps with managing the keys, especially if they're 
 many), the second one is "key type" (it used to determine 
 what the key will be used for) and the last one is the "key"
(which is the encrypted key we will be using).
- We will have to generate our key and link it to our github 
 account. Github recommends the ed25519 encryptions but allows
 rsa encryption if you're using a legacy systems.
- To create the key we will use ssh-keygen command.
 ```bash
 $ ssh-keygen -t ed25519 -C "your_email@example.com"
 ```
 please note that the email using are using should be your primary
 email on github
- On running this command, the program will request a location to
 to save the file. To leave it as default press enter.
- The request would be for you to enter a password if you would
like to further secure your SSH key. If you don't want to use a
password, press enter.
- Retype the passwoard again or just press enter if you did not
enter a password previously.
- Upon completion an SSH key will be generated. It actually generates
two keys. A private key and a public key. the private key is kept
on your local machine and the public key is sent to github. 
The two keys are required to decrypt and authenticate your connection
to github
- Now we will have to register our newly generated key to our ssh
 service. Usually the key generated is saved in a '.ssh' folder in 
 your home directory.

- Let's start the SSH agent on our local machine

### Note
```
Windows users using Git Bash can run the commands under Linux
```

### For Windows

open powershell in administator mode
and run the following commands
```powershell
$ Set-Service ssh-agent -StartupType Manual
$ Start-Service ssh-agent
$ ssh-agent -s
```

### For Linux / MacOS

```bash
 $ eval "$(ssh-agent -s)"
 ```
 This should return the process ID like this 
 ```bash
 > Agent pid 286
 ```
- Now we can add our SSH key.
 ```bash
 $ ssh-add ~/.ssh/id_ed25519
 ```
 if you used a password when generating the key, you will be
 required to enter the password otherwise it will be added 
 automatically.
 You should get a response stating that the identity has been 
 added
- Let's copy the content of the file to our 
 clipboard.
 ## Windows users
--------------------------------------
 ```bash
 $ cat ~/.ssh/id_ed25519.pub | clip
 ```
--------------------------------------
## Linux users
--------------------------------------
 ```bash
 $ cat ~/.ssh/id_ed25519.pub
 ```
 - this will output the content of the file, select and copy it
---------------------------------------
## MacOS users
---------------------------------------
 ```bash
 $ pbcopy < ~/.ssh/id_ed25519.pub
 ```
---------------------------------------
- With the key copied to our clipboard, we will go back to our github 
 settings page > SSH and GPG Keys, and paste the content in the 
 key field. Enter the Name you would want to use to identify 
 your machine on github. select authentication as the key-type
 and click add. <br>
 NB: Please make sure there is no whitespace before
 or after the key when copying or pasting.

- We have successfully added the SSh key to github. Let's test to see 
 if it works.
 ```bash
 $ ssh -T git@github.com
 ```
 since this our first time using this machine to ssh into github,
 we will encounter a warning screen. Type yes and press enter.
 A message like this should be returned
 ```bash
 Hi username! You've successfully authenticated, but GitHub 
 does not provide shell access.
 ``` 
 Any response apart from this 
 means there has been an error, either with setting up the key or
 internet problem.
