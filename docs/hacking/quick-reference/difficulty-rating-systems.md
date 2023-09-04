# Difficulty Rating Systems

> Difficulty rating criteria varies. The following is a general rule of thumb

## Hack The Box

The historic difficulty levels for the Hack The Box rating system are listed below. The rating system for Hack The Box has [since been updated](https://help.hackthebox.com/en/articles/5185158-introduction-to-hack-the-box). The following information should be used for contextual purposes only

### Easy <!-- htb -->

* Typically 2-3 steps
* CVE with script or Metasploit without modification
* Path clear from context / hints, no rabbit holes
* No binary exploitation / RE
* Only the most basic scripting require

### Medium <!-- htb -->

* Typically around 3 steps
* Custom exploitation, but straight forward
* Path clear from context / hints, no rabbit holes
* Generating simple scripts

### Hard <!-- htb -->

* Typically 3-5 steps, but can be more
* Custom exploitation, chaining together different vulnerabilities, complex concepts
* More enumeration is allowed, though don't include pointless rabbit holes

### Insane <!-- htb -->

* Typically many steps (5+), but can be as short as 3 really hard steps
* Anything goes as far as exploitation
* Rabbit holes allowed, but hopefully for a purpose. Don't just make things hard for the sake of being hard

### Best Practices

> Considerations for box authors

#### Do

* Do keep the machines realistic where possible
* Do have the exploited code exist for some legit reason
* Do make history immutable (redirect to /dev/null if this does not affect the path of the box)
* Do run linuxprivchecker, linenum, LinPEAS or equivalent to confirm that there isn't any unintentional vulnerability/exploit
* Do make sure web directories are easily found with dirbuster/gobuster/etc and common wordlists like directory-list-2.3-medium.txt (or better small) or raft-small-words.txt

If passwords are intended to be cracked

* Do make sure hashes crack quickly with hashcat and rockyou.txt
* Do include hints to indicate the method and word list to crack passwords if they are intended to be cracked with some method and wordlist other than hashcat and rockyou

If passwords are not intended to be cracked

* Do pick a strong passphrase. Something solid but also not that hard to type

#### Do not

* Do not include things like todo.txt on a Web server
* Do not include rabbit holes without a good reason
* Do not include inappropriate, trolly, offensive, political, or insulting content
* Do not require brute forcing other than above without talking to HTB staff
* Do not make use of commercial software. Including trials
* Do not use potential unstable elements that may degrade user experience in a shared environment
* Do not use ufw (Linux)
* Do not use an evaluation copy of Windows
    * Do not worry about activating Windows, as HTB will take care of that
    * Do not use a web app where a key page can be removed
    * Do not use a service exploit that crashes the web server
    * Do not use RDP access
    * Do not use a volatile exploit
    * ...

## VulnHub

The difficulty levels for the [VulnHub rating system](https://www.vulnhub.com/difficulty/) are listed below

### Very Easy

> Often no need to escalate privileges. Already the highest user (root access) after initial access

Vulnerability types:

* Brute force
  * No information gathering is required
  * Able to guess about the target
* Singe vector for completing the machine
* Software exploits where code is suitable out of the box
  * No modifications/alterations required
  * SearchSploit/Metasploit-Framework
* SQL injection

### Easy

> A single exploit to get initial access, another single exploit for privilege escalation

Vulnerability types ("Very Easy" as well as the following):

* Command injection
* File inclusions
* Hash cracking
* Kernel exploits for privilege escalation
* Very little amount of information gathering is required

### Medium

> In order to get root access, you may need to use a few vulnerabilities (short chain)

Vulnerability types ("Very Easy + Easy" as well as the following):

* Cross-Site scripting
* Multiple vectors
* Software exploits requiring some modifications/alterations for it to work
  * SearchSploit
* System administrator knowledge
* Privilege escalation is required

### Hard

> In order to get initial and root access, having to chain multiple vulnerabilities (long chain)

Vulnerability types ("Very Easy + Easy + Medium" as well as the following):

* Encryption
* Harden/Defense enabled on the Operating System
* No public software exploits
* Pivoting
* Time-based challenge limitations

### Very Hard (Insane)

> In order to get initial & root access, having to chain multiple vulnerabilities in various different ways

Vulnerability types ("Very Easy + Easy + Medium + Hard" as well as the following):

* The Unknown
