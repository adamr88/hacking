# Nmap

> Network exploration tool and security / port scanner

## Port Scanning

### Operating System Version (Full)

```{.shell .copy}
nmap -v -p- -T5 -O -A --open \
	--version-all --max-retries 1 \
	--osscan-guess \
	-Pn -n $rhost
```

### Service Version

```{.shell .copy}
nmap -v -sV --open \
	--max-retries 0 --version-intensity 0 \
	-Pn -n $rhost -p $rport
```

### SYN Fast (Full)

```{.shell .copy}
nmap -p- -T5 -sS --open \
	--max-retries 1 \
	-Pn -n $rhost
```

### SYN Quick

```{.shell .copy}
nmap --top-ports 20 -sS --open \
	-Pn -n $rhost
```

### UDP Fast

```{.shell .copy}
nmap -sUV -T4 -F \
	--version-intensity 0 \
	-Pn -n $rhost
```

### UDP Quick

```{.shell .copy}
nmap --top-ports 20 -sU --open \
	-Pn -n $rhost
```

## Nmap Scripting Engine (NSE)

### SMB Vulnerabilities

```{.shell .copy}
nmap -v --open \
	-p "*netbios*","*microsoft*" \
	--script-args="unsafe=1" --script vuln \
	-Pn -n $rhost
```

### Service Unsafe

```{.shell .copy}
nmap -v -sCV --open \
	--version-all --script-args="unsafe=1" \
	-Pn -n $rhost -p $rport
```

### Service Unsafe Snipe

```{.shell .copy}
nmap -v -sCV --open \
	--version-all --script-args="unsafe=1" \
	--script="not (brute or exploit or vuln
		or enum or broadcast or external or intrusive)" \
	-Pn -n $rhost -p $rport 
```

### SSH Version Snipe

```{.shell .copy}
nmap -v -sV \
	--script="banner,ssh2-enum-algos,ssh-hostkey,
		ssh-auth-methods,ssh-publickey-acceptance" \
	-Pn -n $rhost -p ${rport:-22} 
```
