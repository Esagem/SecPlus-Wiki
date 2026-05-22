---
title: Vocab
category: synthesis
tags: [vocab, glossary, reference]
status: active
confidence: high
created: 2026-05-21
updated: 2026-05-21
---

# Vocab

Master glossary of SY0-701 terms. Search across term / definition / tags, filter by objective, click any column header to toggle sort.

```dataviewjs
const data = [
  // ───── 1.1 — Security Controls ─────
  { term: "Compensating control", def: "A control that substitutes for an unavailable control, usually temporarily", src: "objectives/1.1", srcAlias: "1.1 §Compensating", obj: "1.1", tags: ["controls", "compensating"] },
  { term: "Control category", def: "How a control is implemented — Technical, Managerial, Operational, or Physical", src: "objectives/1.1", srcAlias: "1.1 §Framework", obj: "1.1", tags: ["controls", "framework"] },
  { term: "Control type", def: "What a control does in the event lifecycle — Preventive, Deterrent, Detective, Corrective, Compensating, or Directive", src: "objectives/1.1", srcAlias: "1.1 §Framework", obj: "1.1", tags: ["controls", "framework"] },
  { term: "Corrective control", def: "A control applied after an event to undo or limit its impact", src: "objectives/1.1", srcAlias: "1.1 §Corrective", obj: "1.1", tags: ["controls", "corrective"] },
  { term: "Detective control", def: "A control that identifies and reports that an event has occurred", src: "objectives/1.1", srcAlias: "1.1 §Detective", obj: "1.1", tags: ["controls", "detective"] },
  { term: "Deterrent control", def: "A control that discourages an actor without physically blocking the act", src: "objectives/1.1", srcAlias: "1.1 §Deterrent", obj: "1.1", tags: ["controls", "deterrent"] },
  { term: "Directive control", def: "A control that instructs a person to behave securely; relies on cooperation", src: "objectives/1.1", srcAlias: "1.1 §Directive", obj: "1.1", tags: ["controls", "directive"] },
  { term: "Managerial control", def: "Control category: implemented by policies and procedures", src: "objectives/1.1", srcAlias: "1.1 §Managerial", obj: "1.1", tags: ["controls", "managerial"] },
  { term: "Operational control", def: "Control category: implemented by people performing tasks", src: "objectives/1.1", srcAlias: "1.1 §Operational", obj: "1.1", tags: ["controls", "operational"] },
  { term: "Physical control", def: "Control category: implemented by tangible barriers or devices", src: "objectives/1.1", srcAlias: "1.1 §Physical", obj: "1.1", tags: ["controls", "physical"] },
  { term: "Preventive control", def: "A control that blocks an event before it can occur", src: "objectives/1.1", srcAlias: "1.1 §Preventive", obj: "1.1", tags: ["controls", "preventive"] },
  { term: "Security control", def: "Any mechanism that prevents, detects, or responds to a security event", src: "objectives/1.1", srcAlias: "1.1 §Framework", obj: "1.1", tags: ["controls", "fundamentals"] },
  { term: "Technical control", def: "Control category: implemented by technology (systems, software, hardware)", src: "objectives/1.1", srcAlias: "1.1 §Technical", obj: "1.1", tags: ["controls", "technical"] },

  // ───── 1.2 — Fundamental Concepts ─────
  { term: "AAA framework", def: "The Authentication, Authorization, and Accounting model for managing access", src: "objectives/1.2", srcAlias: "1.2 §AAA", obj: "1.2", tags: ["aaa", "framework"] },
  { term: "AAA server", def: "Centralized server holding credentials; network devices forward auth requests to it (RADIUS, TACACS+)", src: "objectives/1.2", srcAlias: "1.2 §AAA", obj: "1.2", tags: ["aaa", "authentication"] },
  { term: "Accounting (AAA)", def: "The AAA stage that records what an authenticated user did — login times, data, actions", src: "objectives/1.2", srcAlias: "1.2 §AAA", obj: "1.2", tags: ["aaa", "logging"] },
  { term: "Access control vestibule", def: "A two-door room with interlocked doors that controls flow into a secure area; also called a mantrap", src: "objectives/1.2", srcAlias: "1.2 §Physical Security", obj: "1.2", tags: ["physical", "access-control"] },
  { term: "Adaptive identity", def: "Authentication strengthened dynamically based on IP, geography, device, time, and other context", src: "objectives/1.2", srcAlias: "1.2 §Zero Trust", obj: "1.2", tags: ["zero-trust", "authentication"] },
  { term: "Authentication", def: "Proving you are who you claim to be (password, MFA, biometric, certificate)", src: "objectives/1.2", srcAlias: "1.2 §AAA", obj: "1.2", tags: ["aaa", "authentication"] },
  { term: "Authorization", def: "Determining what an authenticated subject is allowed to access", src: "objectives/1.2", srcAlias: "1.2 §AAA", obj: "1.2", tags: ["aaa", "authorization"] },
  { term: "Authorization model", def: "An abstraction (roles, groups, attributes) that maps users to permissions at scale", src: "objectives/1.2", srcAlias: "1.2 §AAA", obj: "1.2", tags: ["aaa", "authorization"] },
  { term: "Availability", def: "The CIA principle ensuring systems and data remain reachable when needed", src: "objectives/1.2", srcAlias: "1.2 §CIA Triad", obj: "1.2", tags: ["cia", "fundamentals"] },
  { term: "Baseline (security)", def: "A documented target state — e.g., NIST SP 800-171, ISO/IEC 27001 — used to drive gap analysis", src: "objectives/1.2", srcAlias: "1.2 §Gap Analysis", obj: "1.2", tags: ["governance", "gap-analysis"] },
  { term: "Bollard", def: "A vertical post or barricade that channels pedestrians and blocks vehicles", src: "objectives/1.2", srcAlias: "1.2 §Physical Security", obj: "1.2", tags: ["physical", "barriers"] },
  { term: "CIA Triad", def: "The three security objectives: Confidentiality, Integrity, Availability (also called AIC Triad)", src: "objectives/1.2", srcAlias: "1.2 §CIA Triad", obj: "1.2", tags: ["cia", "fundamentals"] },
  { term: "Confidentiality", def: "The CIA principle preventing unauthorized disclosure (encryption, access controls, MFA)", src: "objectives/1.2", srcAlias: "1.2 §CIA Triad", obj: "1.2", tags: ["cia", "fundamentals"] },
  { term: "Control plane", def: "The layer of a device that holds configuration, policies, and decision logic", src: "objectives/1.2", srcAlias: "1.2 §Zero Trust", obj: "1.2", tags: ["zero-trust", "network"] },
  { term: "Data plane", def: "The layer of a device that actually moves traffic — forwarding, routing, NAT", src: "objectives/1.2", srcAlias: "1.2 §Zero Trust", obj: "1.2", tags: ["zero-trust", "network"] },
  { term: "Gap analysis", def: "A formal comparison of current security posture vs. a target baseline, with a remediation path", src: "objectives/1.2", srcAlias: "1.2 §Gap Analysis", obj: "1.2", tags: ["governance", "gap-analysis"] },
  { term: "Honeyfile", def: "A bait file with no legitimate readers; access triggers an alert", src: "objectives/1.2", srcAlias: "1.2 §Deception", obj: "1.2", tags: ["deception", "detection"] },
  { term: "Honeynet", def: "A network of honeypots designed to look like a real environment", src: "objectives/1.2", srcAlias: "1.2 §Deception", obj: "1.2", tags: ["deception", "detection"] },
  { term: "Honeypot", def: "A fake system designed to attract and study attackers", src: "objectives/1.2", srcAlias: "1.2 §Deception", obj: "1.2", tags: ["deception", "detection"] },
  { term: "Honeytoken", def: "Traceable fake data seeded so its appearance elsewhere reveals a leak", src: "objectives/1.2", srcAlias: "1.2 §Deception", obj: "1.2", tags: ["deception", "detection"] },
  { term: "Implicit trust", def: "Permitting access within a trusted zone without re-verification", src: "objectives/1.2", srcAlias: "1.2 §Zero Trust", obj: "1.2", tags: ["zero-trust", "fundamentals"] },
  { term: "Integrity", def: "The CIA principle ensuring data was not altered between sender and receiver", src: "objectives/1.2", srcAlias: "1.2 §CIA Triad", obj: "1.2", tags: ["cia", "fundamentals"] },
  { term: "Non-repudiation", def: "Provable inability to deny having sent something — requires proof of integrity + proof of origin", src: "objectives/1.2", srcAlias: "1.2 §Non-repudiation", obj: "1.2", tags: ["crypto", "fundamentals"] },
  { term: "Policy Administrator", def: "Zero-trust component that issues access tokens once the Policy Engine has decided", src: "objectives/1.2", srcAlias: "1.2 §Zero Trust", obj: "1.2", tags: ["zero-trust", "components"] },
  { term: "Policy Decision Point (PDP)", def: "Zero-trust component that decides allow/deny; comprises Policy Engine + Policy Administrator", src: "objectives/1.2", srcAlias: "1.2 §Zero Trust", obj: "1.2", tags: ["zero-trust", "components"] },
  { term: "Policy Engine", def: "Zero-trust component that evaluates a request against policies and returns allow/deny/revoke", src: "objectives/1.2", srcAlias: "1.2 §Zero Trust", obj: "1.2", tags: ["zero-trust", "components"] },
  { term: "Policy Enforcement Point (PEP)", def: "Zero-trust gatekeeper that gathers request info and enforces the PDP's decision", src: "objectives/1.2", srcAlias: "1.2 §Zero Trust", obj: "1.2", tags: ["zero-trust", "components"] },
  { term: "Proof of integrity", def: "Verification that data is bit-identical to what was sent — provided by a hash", src: "objectives/1.2", srcAlias: "1.2 §Non-repudiation", obj: "1.2", tags: ["crypto", "integrity"] },
  { term: "Proof of origin", def: "Verification of who sent the data — provided by a digital signature", src: "objectives/1.2", srcAlias: "1.2 §Non-repudiation", obj: "1.2", tags: ["crypto", "signatures"] },
  { term: "Security zone", def: "A network region (trusted, untrusted, internal, external) used to scope access policies", src: "objectives/1.2", srcAlias: "1.2 §Zero Trust", obj: "1.2", tags: ["zero-trust", "network"] },
  { term: "Two-person integrity", def: "Requiring two people present for a sensitive action, preventing single-actor bypass", src: "objectives/1.2", srcAlias: "1.2 §Physical Security", obj: "1.2", tags: ["physical", "governance"] },
  { term: "Zero Trust", def: "Architectural model that requires verification for every access — never trust, always verify", src: "objectives/1.2", srcAlias: "1.2 §Zero Trust", obj: "1.2", tags: ["zero-trust", "fundamentals"] },

  // ───── 1.3 — Change Management ─────
  { term: "Allow list", def: "A list of permitted apps/IPs; everything not on the list is blocked", src: "objectives/1.3", srcAlias: "1.3 §Technical Execution", obj: "1.3", tags: ["change-mgmt", "lists"] },
  { term: "Application restart", def: "Closing and reopening a single application after a config or executable change", src: "objectives/1.3", srcAlias: "1.3 §Technical Execution", obj: "1.3", tags: ["change-mgmt", "restart"] },
  { term: "Backout plan", def: "Documented procedure to revert a change if it goes wrong; required before the change runs", src: "objectives/1.3", srcAlias: "1.3 §Testing and Backout", obj: "1.3", tags: ["change-mgmt", "recovery"] },
  { term: "Change control board (CCB)", def: "The body that reviews, approves, denies, and schedules proposed changes", src: "objectives/1.3", srcAlias: "1.3 §Process", obj: "1.3", tags: ["change-mgmt", "governance"] },
  { term: "Change freeze", def: "A defined period when no non-emergency changes are permitted (e.g., retail peak season)", src: "objectives/1.3", srcAlias: "1.3 §Testing and Backout", obj: "1.3", tags: ["change-mgmt", "scheduling"] },
  { term: "Change management", def: "Formal process for proposing, approving, executing, and documenting changes to systems", src: "objectives/1.3", srcAlias: "1.3 §Process", obj: "1.3", tags: ["change-mgmt", "governance"] },
  { term: "Dependency", def: "A required prior change to another component before the primary change can succeed", src: "objectives/1.3", srcAlias: "1.3 §Dependencies", obj: "1.3", tags: ["change-mgmt", "planning"] },
  { term: "Deny list", def: "A list of blocked apps/IPs; everything not on the list is permitted (e.g., anti-malware)", src: "objectives/1.3", srcAlias: "1.3 §Technical Execution", obj: "1.3", tags: ["change-mgmt", "lists"] },
  { term: "Downtime", def: "A period when affected systems are unavailable during a change", src: "objectives/1.3", srcAlias: "1.3 §Technical Execution", obj: "1.3", tags: ["change-mgmt", "scheduling"] },
  { term: "Legacy application", def: "Older software, often unsupported, with no current expert — needs documentation to be safely managed", src: "objectives/1.3", srcAlias: "1.3 §Legacy Applications", obj: "1.3", tags: ["change-mgmt", "legacy"] },
  { term: "Maintenance window", def: "Pre-defined off-hours period when changes are permitted", src: "objectives/1.3", srcAlias: "1.3 §Testing and Backout", obj: "1.3", tags: ["change-mgmt", "scheduling"] },
  { term: "Owner (change management)", def: "The person/department responsible for the affected app or data; initiates and verifies, doesn't usually execute", src: "objectives/1.3", srcAlias: "1.3 §Process", obj: "1.3", tags: ["change-mgmt", "roles"] },
  { term: "Reboot", def: "A full restart of the operating system, required for kernel/driver/registry-load changes", src: "objectives/1.3", srcAlias: "1.3 §Technical Execution", obj: "1.3", tags: ["change-mgmt", "restart"] },
  { term: "Sandbox testing environment", def: "An isolated duplicate of production used to validate changes and backout procedures safely", src: "objectives/1.3", srcAlias: "1.3 §Testing and Backout", obj: "1.3", tags: ["change-mgmt", "testing"] },
  { term: "Scope (change)", def: "The defined set of systems, users, and data a change is approved to touch", src: "objectives/1.3", srcAlias: "1.3 §Technical Execution", obj: "1.3", tags: ["change-mgmt", "planning"] },
  { term: "Service restart", def: "Stopping and starting a single OS service or daemon", src: "objectives/1.3", srcAlias: "1.3 §Technical Execution", obj: "1.3", tags: ["change-mgmt", "restart"] },
  { term: "Stakeholder", def: "Anyone meaningfully affected by a change; must be identified before approval", src: "objectives/1.3", srcAlias: "1.3 §Process", obj: "1.3", tags: ["change-mgmt", "roles"] },
  { term: "Standard operating procedure (SOP)", def: "Documented standard steps for routine operations including change requests", src: "objectives/1.3", srcAlias: "1.3 §Process", obj: "1.3", tags: ["change-mgmt", "documentation"] },
  { term: "Version control", def: "Tracking changes to artifacts (configs, code, OS images) so versions can be diffed and reverted", src: "objectives/1.3", srcAlias: "1.3 §Documentation", obj: "1.3", tags: ["change-mgmt", "documentation"] },

  // ───── 1.4 — Cryptographic Solutions ─────
  { term: "AES (Advanced Encryption Standard)", def: "Modern symmetric encryption algorithm; replaced DES", src: "objectives/1.4", srcAlias: "1.4 §Encrypting Data", obj: "1.4", tags: ["crypto", "symmetric", "algorithms"] },
  { term: "Asymmetric encryption", def: "Encryption using a mathematically related public/private key pair", src: "objectives/1.4", srcAlias: "1.4 §Foundations", obj: "1.4", tags: ["crypto", "asymmetric"] },
  { term: "BitLocker", def: "Microsoft full-disk volume encryption for Windows", src: "objectives/1.4", srcAlias: "1.4 §Encrypting Data at Rest", obj: "1.4", tags: ["crypto", "fde"] },
  { term: "Blockchain", def: "A distributed, tamper-evident ledger where blocks are chained by hashes", src: "objectives/1.4", srcAlias: "1.4 §Blockchain", obj: "1.4", tags: ["crypto", "blockchain"] },
  { term: "Brute force", def: "Trying every possible key or password until the right one is found", src: "objectives/1.4", srcAlias: "1.4 §Key Length", obj: "1.4", tags: ["crypto", "attacks"] },
  { term: "Certificate Authority (CA)", def: "A trusted entity that issues and digitally signs certificates after validating identity", src: "objectives/1.4", srcAlias: "1.4 §Certificates", obj: "1.4", tags: ["crypto", "pki", "certificates"] },
  { term: "Certificate Revocation List (CRL)", def: "A published list of certificates invalidated before their expiry", src: "objectives/1.4", srcAlias: "1.4 §Certificates", obj: "1.4", tags: ["crypto", "certificates", "revocation"] },
  { term: "Certificate Signing Request (CSR)", def: "A request file containing a public key + identity info, sent to a CA for signing", src: "objectives/1.4", srcAlias: "1.4 §Certificates", obj: "1.4", tags: ["crypto", "certificates"] },
  { term: "Collision (hash)", def: "Two different inputs producing the same hash value — a hash-function failure", src: "objectives/1.4", srcAlias: "1.4 §Hashing", obj: "1.4", tags: ["crypto", "hashing"] },
  { term: "Column-level encryption", def: "Encrypting only specific columns of a database (e.g., SSN) for fast plaintext search elsewhere", src: "objectives/1.4", srcAlias: "1.4 §Encrypting Data at Rest", obj: "1.4", tags: ["crypto", "database"] },
  { term: "Covertext", def: "The file or medium that conceals hidden data in steganography", src: "objectives/1.4", srcAlias: "1.4 §Obfuscation", obj: "1.4", tags: ["crypto", "obfuscation", "steganography"] },
  { term: "Data masking", def: "Hiding parts of sensitive data for display (e.g., showing only last 4 digits of a card)", src: "objectives/1.4", srcAlias: "1.4 §Obfuscation", obj: "1.4", tags: ["crypto", "obfuscation", "masking"] },
  { term: "DES (Data Encryption Standard)", def: "Older symmetric encryption algorithm; superseded by AES", src: "objectives/1.4", srcAlias: "1.4 §Encrypting Data", obj: "1.4", tags: ["crypto", "symmetric", "algorithms", "deprecated"] },
  { term: "Diffie-Hellman key exchange", def: "A key-exchange method where two parties derive a shared symmetric secret without transmitting it", src: "objectives/1.4", srcAlias: "1.4 §Key Exchange", obj: "1.4", tags: ["crypto", "key-exchange"] },
  { term: "Digital certificate", def: "A file binding an identity to a public key, signed by a CA; standardized as X.509", src: "objectives/1.4", srcAlias: "1.4 §Certificates", obj: "1.4", tags: ["crypto", "certificates"] },
  { term: "Digital signature", def: "A hash of a message encrypted with the sender's private key; proves integrity + origin", src: "objectives/1.4", srcAlias: "1.4 §Digital Signatures", obj: "1.4", tags: ["crypto", "signatures", "non-repudiation"] },
  { term: "Distributed ledger", def: "A synchronized record of transactions held by many participants; blockchain is one type", src: "objectives/1.4", srcAlias: "1.4 §Blockchain", obj: "1.4", tags: ["crypto", "blockchain"] },
  { term: "EFS (Encrypting File System)", def: "Windows NTFS feature for file/folder-level encryption", src: "objectives/1.4", srcAlias: "1.4 §Encrypting Data at Rest", obj: "1.4", tags: ["crypto", "file-encryption"] },
  { term: "Ephemeral key", def: "A short-lived key used for one session, then discarded", src: "objectives/1.4", srcAlias: "1.4 §Key Exchange", obj: "1.4", tags: ["crypto", "keys", "session"] },
  { term: "FileVault", def: "macOS full-disk volume encryption", src: "objectives/1.4", srcAlias: "1.4 §Encrypting Data at Rest", obj: "1.4", tags: ["crypto", "fde"] },
  { term: "Full disk encryption (FDE)", def: "Encrypting an entire volume so the disk is unreadable without the proper key", src: "objectives/1.4", srcAlias: "1.4 §Encrypting Data at Rest", obj: "1.4", tags: ["crypto", "fde"] },
  { term: "Hash (message digest)", def: "A fixed-length one-way fingerprint of input data; used for integrity, signatures, password storage", src: "objectives/1.4", srcAlias: "1.4 §Hashing", obj: "1.4", tags: ["crypto", "hashing"] },
  { term: "HSM (Hardware Security Module)", def: "Centralized, clustered hardware for cryptographic functions across many systems", src: "objectives/1.4", srcAlias: "1.4 §Encryption Hardware", obj: "1.4", tags: ["crypto", "hardware"] },
  { term: "In-band key exchange", def: "Transmitting or deriving a key over the network being used for communication", src: "objectives/1.4", srcAlias: "1.4 §Key Exchange", obj: "1.4", tags: ["crypto", "key-exchange"] },
  { term: "Internal CA", def: "A CA run inside an organization, trusted by hosts that have its root cert installed", src: "objectives/1.4", srcAlias: "1.4 §Certificates", obj: "1.4", tags: ["crypto", "certificates", "pki"] },
  { term: "IPsec", def: "Protocol suite for site-to-site VPN encryption", src: "objectives/1.4", srcAlias: "1.4 §Encrypting Data in Transit", obj: "1.4", tags: ["crypto", "vpn", "transport"] },
  { term: "Key escrow", def: "A controlled third party holding copies of private keys for recovery if needed", src: "objectives/1.4", srcAlias: "1.4 §PKI", obj: "1.4", tags: ["crypto", "keys", "recovery"] },
  { term: "Key length", def: "The size of a cryptographic key in bits; longer keys resist brute force longer", src: "objectives/1.4", srcAlias: "1.4 §Key Length", obj: "1.4", tags: ["crypto", "keys"] },
  { term: "Key Management System (KMS)", def: "Centralized software/service for managing keys across an organization (rotation, reporting, storage)", src: "objectives/1.4", srcAlias: "1.4 §Encryption Hardware", obj: "1.4", tags: ["crypto", "key-management"] },
  { term: "Key stretching", def: "Deliberately slowing key derivation (repeated hashing) to make brute force costlier", src: "objectives/1.4", srcAlias: "1.4 §Key Length", obj: "1.4", tags: ["crypto", "keys", "brute-force"] },
  { term: "MD5", def: "Deprecated hashing algorithm with documented collision vulnerabilities (since 1996)", src: "objectives/1.4", srcAlias: "1.4 §Hashing", obj: "1.4", tags: ["crypto", "hashing", "deprecated"] },
  { term: "Obfuscation", def: "Hiding information in plain sight; recoverable by anyone who knows how it was hidden", src: "objectives/1.4", srcAlias: "1.4 §Obfuscation", obj: "1.4", tags: ["crypto", "obfuscation"] },
  { term: "OCSP (Online Certificate Status Protocol)", def: "Real-time per-cert revocation lookup, replacing bulk CRL downloads", src: "objectives/1.4", srcAlias: "1.4 §Certificates", obj: "1.4", tags: ["crypto", "certificates", "revocation"] },
  { term: "OCSP stapling", def: "The server embeds a recent CA-signed OCSP response in the TLS handshake, avoiding client lookup", src: "objectives/1.4", srcAlias: "1.4 §Certificates", obj: "1.4", tags: ["crypto", "certificates", "revocation"] },
  { term: "Out-of-band key exchange", def: "Transmitting a key via a channel separate from the network where the key will be used", src: "objectives/1.4", srcAlias: "1.4 §Key Exchange", obj: "1.4", tags: ["crypto", "key-exchange"] },
  { term: "Private key", def: "The secret half of an asymmetric key pair, held only by its owner", src: "objectives/1.4", srcAlias: "1.4 §Foundations", obj: "1.4", tags: ["crypto", "asymmetric", "keys"] },
  { term: "Public CA", def: "A Certificate Authority trusted by major browsers and OSes by default", src: "objectives/1.4", srcAlias: "1.4 §Certificates", obj: "1.4", tags: ["crypto", "certificates", "pki"] },
  { term: "Public key", def: "The shareable half of an asymmetric key pair, available to anyone", src: "objectives/1.4", srcAlias: "1.4 §Foundations", obj: "1.4", tags: ["crypto", "asymmetric", "keys"] },
  { term: "Public Key Infrastructure (PKI)", def: "The framework of policies, procedures, hardware, and software for managing certificates and keys", src: "objectives/1.4", srcAlias: "1.4 §PKI", obj: "1.4", tags: ["crypto", "pki"] },
  { term: "Rainbow table", def: "A precomputed lookup of inputs and their hashes, used to reverse unsalted password hashes", src: "objectives/1.4", srcAlias: "1.4 §Hashing", obj: "1.4", tags: ["crypto", "attacks", "hashing"] },
  { term: "Record-level encryption", def: "Encrypting individual rows of a database independently", src: "objectives/1.4", srcAlias: "1.4 §Encrypting Data at Rest", obj: "1.4", tags: ["crypto", "database"] },
  { term: "Root of trust", def: "The inherently trusted anchor (hardware, CA, firmware) from which derived trust flows", src: "objectives/1.4", srcAlias: "1.4 §Certificates", obj: "1.4", tags: ["crypto", "pki", "trust"] },
  { term: "Salting", def: "Adding a unique random value to each password before hashing; defeats rainbow tables", src: "objectives/1.4", srcAlias: "1.4 §Hashing", obj: "1.4", tags: ["crypto", "hashing", "passwords"] },
  { term: "Secure enclave", def: "A separate hardware-isolated security processor inside a device with its own boot ROM and crypto", src: "objectives/1.4", srcAlias: "1.4 §Encryption Hardware", obj: "1.4", tags: ["crypto", "hardware"] },
  { term: "Session key", def: "A symmetric key used for a single session and then discarded", src: "objectives/1.4", srcAlias: "1.4 §Key Exchange", obj: "1.4", tags: ["crypto", "keys", "session"] },
  { term: "SHA-256", def: "A secure hashing algorithm in the SHA-2 family producing 256-bit digests", src: "objectives/1.4", srcAlias: "1.4 §Hashing", obj: "1.4", tags: ["crypto", "hashing"] },
  { term: "Shared secret", def: "Another name for a symmetric key — the same key used by both parties", src: "objectives/1.4", srcAlias: "1.4 §Foundations", obj: "1.4", tags: ["crypto", "symmetric", "keys"] },
  { term: "Steganography", def: "Hiding data inside another file (image, audio, video, network packets) — concealed writing", src: "objectives/1.4", srcAlias: "1.4 §Obfuscation", obj: "1.4", tags: ["crypto", "obfuscation", "steganography"] },
  { term: "Subject Alternative Name (SAN)", def: "A certificate field listing additional hostnames the cert is valid for", src: "objectives/1.4", srcAlias: "1.4 §Certificates", obj: "1.4", tags: ["crypto", "certificates"] },
  { term: "Symmetric encryption", def: "Encryption using one shared secret key for both encryption and decryption", src: "objectives/1.4", srcAlias: "1.4 §Foundations", obj: "1.4", tags: ["crypto", "symmetric"] },
  { term: "Tokenization", def: "Replacing sensitive data with an unrelated token that maps back only via a trusted service", src: "objectives/1.4", srcAlias: "1.4 §Obfuscation", obj: "1.4", tags: ["crypto", "obfuscation", "tokenization"] },
  { term: "TPM (Trusted Platform Module)", def: "Per-device crypto hardware for key storage, random numbers, and FDE keys", src: "objectives/1.4", srcAlias: "1.4 §Encryption Hardware", obj: "1.4", tags: ["crypto", "hardware"] },
  { term: "Transparent database encryption", def: "Symmetric encryption of an entire database, decrypted on access", src: "objectives/1.4", srcAlias: "1.4 §Encrypting Data at Rest", obj: "1.4", tags: ["crypto", "database"] },
  { term: "Web of trust", def: "Decentralized model where individuals sign each other's certificates instead of a central CA", src: "objectives/1.4", srcAlias: "1.4 §Certificates", obj: "1.4", tags: ["crypto", "certificates", "pki"] },
  { term: "Wildcard certificate", def: "A certificate whose subject uses an asterisk (e.g., *.example.com) to cover all subdomains", src: "objectives/1.4", srcAlias: "1.4 §Certificates", obj: "1.4", tags: ["crypto", "certificates"] },
  { term: "X.509", def: "The universal standard format for digital certificates", src: "objectives/1.4", srcAlias: "1.4 §Certificates", obj: "1.4", tags: ["crypto", "certificates"] },

  // ───── 2.1 — Threat Actors ─────
  { term: "Advanced Persistent Threat (APT)", def: "A style of attack — long-duration, custom-tooled, well-funded — typically run by nation states or top-tier organized crime", src: "objectives/2.1", srcAlias: "2.1 §Nation state", obj: "2.1", tags: ["threat-actors", "nation-state"] },
  { term: "Hacktivist", def: "Technically sophisticated attacker motivated by a political, social, or philosophical cause rather than money", src: "objectives/2.1", srcAlias: "2.1 §Hacktivist", obj: "2.1", tags: ["threat-actors", "motivations"] },
  { term: "Insider threat", def: "Someone with legitimate access who abuses it; the hardest archetype to detect because they are already inside the boundary", src: "objectives/2.1", srcAlias: "2.1 §Insider threat", obj: "2.1", tags: ["threat-actors", "insider"] },
  { term: "Location (threat actor)", def: "Where an actor sits relative to the org — internal or external; the first attribute axis used to classify threat actors", src: "objectives/2.1", srcAlias: "2.1 §The four attribute axes", obj: "2.1", tags: ["threat-actors"] },
  { term: "Motivation (threat actor)", def: "Why a threat actor acts — financial, espionage, disruption, philosophical, revenge, war, or ethical; usually the tie-breaker between similar actors", src: "objectives/2.1", srcAlias: "2.1 §The four attribute axes", obj: "2.1", tags: ["threat-actors", "motivations"] },
  { term: "Nation state", def: "Government-sponsored threat actor with extensive resources and the highest sophistication; the canonical APT", src: "objectives/2.1", srcAlias: "2.1 §Nation state", obj: "2.1", tags: ["threat-actors", "nation-state"] },
  { term: "Organized crime", def: "Criminal enterprise running cyber operations as a business; resources rival a nation state but motivation is money", src: "objectives/2.1", srcAlias: "2.1 §Organized crime", obj: "2.1", tags: ["threat-actors", "financial"] },
  { term: "Resources (threat actor)", def: "Funding and infrastructure available to an actor — limited, moderate, or extensive", src: "objectives/2.1", srcAlias: "2.1 §The four attribute axes", obj: "2.1", tags: ["threat-actors"] },
  { term: "Script kiddie", def: "Older informal name for the unskilled attacker — runs publicly available exploits without understanding the underlying mechanics", src: "objectives/2.1", srcAlias: "2.1 §Unskilled attacker", obj: "2.1", tags: ["threat-actors", "unskilled"] },
  { term: "Shadow IT", def: "A group inside the organization running unsanctioned IT outside the official IT department; risk comes from convenience, not malice", src: "objectives/2.1", srcAlias: "2.1 §Shadow IT", obj: "2.1", tags: ["threat-actors", "internal"] },
  { term: "Sophistication (threat actor)", def: "How deep an actor's technical capability runs — script-running, mature tooling, or custom zero-day development", src: "objectives/2.1", srcAlias: "2.1 §The four attribute axes", obj: "2.1", tags: ["threat-actors", "capability"] },
  { term: "Stuxnet", def: "Nation-state malware (US/Israel, ~2010) that destroyed Iranian nuclear centrifuges by manipulating PLC firmware", src: "objectives/2.1", srcAlias: "2.1 §Nation state", obj: "2.1", tags: ["threat-actors", "nation-state", "case-study"] },
  { term: "Threat actor", def: "The entity behind an event affecting security — classified by location, resources, sophistication, and motivation", src: "objectives/2.1", srcAlias: "2.1 §The four attribute axes", obj: "2.1", tags: ["threat-actors", "fundamentals"] },
  { term: "Unskilled attacker", def: "Low-sophistication actor who runs publicly available exploits without modifying or developing them; defeated by routine hygiene", src: "objectives/2.1", srcAlias: "2.1 §Unskilled attacker", obj: "2.1", tags: ["threat-actors", "unskilled"] },

  // ───── 2.2 — Threat Vectors and Attack Surfaces ─────
  { term: "802.1X", def: "Port-based network access control standard that requires authentication before granting any network access, wired or wireless", src: "objectives/2.2", srcAlias: "2.2 §Network vectors", obj: "2.2", tags: ["vectors", "network", "authentication"] },
  { term: "BadUSB", def: "A modified USB device that registers itself as a keyboard and automatically types attacker commands when plugged in", src: "objectives/2.2", srcAlias: "2.2 §Removable-device vectors", obj: "2.2", tags: ["vectors", "usb", "hid"] },
  { term: "Brand impersonation", def: "Attacker registers many lookalike sites or runs ads that mimic a trusted brand to lure clicks", src: "objectives/2.2", srcAlias: "2.2 §Brand impersonation in search/ads", obj: "2.2", tags: ["social-engineering", "phishing"] },
  { term: "Business Email Compromise (BEC)", def: "Spoofed or hijacked-mailbox emails that appear to come from an executive or vendor, typically requesting wire transfers or sensitive data", src: "objectives/2.2", srcAlias: "2.2 §Business Email Compromise (BEC) — the spoofed sender", obj: "2.2", tags: ["social-engineering", "phishing", "fraud"] },
  { term: "Default credentials (vector)", def: "Vendor-supplied admin username and password (often documented publicly) left in place after installation", src: "objectives/2.2", srcAlias: "2.2 §Software and service vectors", obj: "2.2", tags: ["vectors", "misconfiguration"] },
  { term: "Disinformation", def: "Deliberately false content distributed to mislead a target audience", src: "objectives/2.2", srcAlias: "2.2 §Misinformation, disinformation, influence campaigns", obj: "2.2", tags: ["social-engineering", "influence"] },
  { term: "Eliciting information", def: "Extracting useful details through casual conversation without ever directly asking for the sensitive item", src: "objectives/2.2", srcAlias: "2.2 §Impersonation", obj: "2.2", tags: ["social-engineering"] },
  { term: "File-based vector", def: "Delivery path that uses an executable, document with macros, PDF, archive, or extension to carry malicious code", src: "objectives/2.2", srcAlias: "2.2 §File-based vectors", obj: "2.2", tags: ["vectors", "files"] },
  { term: "Identity fraud", def: "Using a stolen identity to open accounts, file taxes, or take loans — the crime that often follows successful impersonation", src: "objectives/2.2", srcAlias: "2.2 §Impersonation", obj: "2.2", tags: ["social-engineering", "fraud"] },
  { term: "Image-based vector", def: "An image format (especially SVG) that allows embedded script or HTML to execute when rendered", src: "objectives/2.2", srcAlias: "2.2 §Image-based vectors", obj: "2.2", tags: ["vectors", "files"] },
  { term: "Impersonation", def: "Pretending to be someone the victim trusts or fears (executive, IT, vendor, law enforcement) to short-circuit normal scrutiny", src: "objectives/2.2", srcAlias: "2.2 §Impersonation", obj: "2.2", tags: ["social-engineering"] },
  { term: "Influence campaign", def: "Coordinated multi-account effort to amplify content artificially so platforms and real users surface it organically", src: "objectives/2.2", srcAlias: "2.2 §Misinformation, disinformation, influence campaigns", obj: "2.2", tags: ["social-engineering", "influence"] },
  { term: "Managed Service Provider (MSP)", def: "Third party with privileged access to your systems; compromise of the MSP cascades to every customer they manage", src: "objectives/2.2", srcAlias: "2.2 §Supply-chain vectors", obj: "2.2", tags: ["vectors", "supply-chain"] },
  { term: "Message-based vector", def: "Email, SMS, IM, or other messaging channel used to deliver phishing, malware, or fraud", src: "objectives/2.2", srcAlias: "2.2 §Message-based vectors", obj: "2.2", tags: ["vectors", "messaging"] },
  { term: "Mirai botnet", def: "IoT botnet (2016) that propagated almost entirely by trying documented default credentials on internet-exposed devices", src: "objectives/2.2", srcAlias: "2.2 §Software and service vectors", obj: "2.2", tags: ["vectors", "iot", "case-study"] },
  { term: "Misinformation", def: "Factually incorrect content shared without deliberate deceptive intent", src: "objectives/2.2", srcAlias: "2.2 §Misinformation, disinformation, influence campaigns", obj: "2.2", tags: ["social-engineering", "influence"] },
  { term: "Open service port", def: "A network port left listening for an unused or unneeded service, expanding the attack surface", src: "objectives/2.2", srcAlias: "2.2 §Software and service vectors", obj: "2.2", tags: ["vectors", "network"] },
  { term: "Phishing", def: "Email-based social engineering that lures victims to click malicious links, open attachments, or enter credentials on fake pages", src: "objectives/2.2", srcAlias: "2.2 §Phishing (email)", obj: "2.2", tags: ["social-engineering", "phishing"] },
  { term: "Pretexting", def: "The fabricated story an attacker tells to make a social-engineering attempt credible — the wrapper around phishing, vishing, or impersonation", src: "objectives/2.2", srcAlias: "2.2 §Pretexting", obj: "2.2", tags: ["social-engineering"] },
  { term: "Removable-device vector", def: "USB or other portable media used to bridge networks, deliver malware, or exfiltrate data physically", src: "objectives/2.2", srcAlias: "2.2 §Removable-device vectors", obj: "2.2", tags: ["vectors", "usb"] },
  { term: "Smishing", def: "SMS-based phishing — typically delivery, package, or banking lures via text message", src: "objectives/2.2", srcAlias: "2.2 §Smishing (SMS phishing)", obj: "2.2", tags: ["social-engineering", "phishing"] },
  { term: "Social engineering", def: "Manipulating people rather than systems — exploiting trust, urgency, or authority to obtain access or information", src: "objectives/2.2", srcAlias: "2.2 §Social engineering — the human vectors", obj: "2.2", tags: ["social-engineering"] },
  { term: "SPIT (Spam over IP)", def: "Automated robocall spam delivered over VoIP networks", src: "objectives/2.2", srcAlias: "2.2 §Voice and call vectors", obj: "2.2", tags: ["vectors", "voice"] },
  { term: "Supply-chain vector", def: "Compromising the target by abusing trust in a vendor, MSP, contractor, manufacturer, or software updater", src: "objectives/2.2", srcAlias: "2.2 §Supply-chain vectors", obj: "2.2", tags: ["vectors", "supply-chain"] },
  { term: "Threat vector", def: "The path an attacker takes to reach a target; also called an attack vector", src: "objectives/2.2", srcAlias: "2.2 §The two halves of the objective", obj: "2.2", tags: ["vectors", "fundamentals"] },
  { term: "Typo squatting", def: "Registering domains that misspell or imitate a legitimate domain to catch mistyped or misread clicks", src: "objectives/2.2", srcAlias: "2.2 §Typo squatting / URL hijacking / brand jacking", obj: "2.2", tags: ["social-engineering", "phishing"] },
  { term: "Unsupported system", def: "OS or application past end-of-service-life that no longer receives security patches — a permanent open door until removed or compensated", src: "objectives/2.2", srcAlias: "2.2 §Software and service vectors", obj: "2.2", tags: ["vectors", "patching"] },
  { term: "URL hijacking", def: "Synonym for typo squatting — domains that exploit misspellings or near-misses to capture traffic", src: "objectives/2.2", srcAlias: "2.2 §Typo squatting / URL hijacking / brand jacking", obj: "2.2", tags: ["social-engineering", "phishing"] },
  { term: "USB drop attack", def: "Leaving an infected USB drive where a target will find it, relying on curiosity to bridge air-gapped or otherwise isolated networks", src: "objectives/2.2", srcAlias: "2.2 §Removable-device vectors", obj: "2.2", tags: ["vectors", "usb"] },
  { term: "Vishing", def: "Voice phishing — phone calls (often with spoofed caller ID) used to extract credentials, money, or actions", src: "objectives/2.2", srcAlias: "2.2 §Vishing (voice phishing)", obj: "2.2", tags: ["social-engineering", "phishing", "voice"] },
  { term: "Vulnerable software", def: "Software with known unpatched flaws — client-based requires per-endpoint patching, web/agentless centralizes the risk on the server", src: "objectives/2.2", srcAlias: "2.2 §Software and service vectors", obj: "2.2", tags: ["vectors", "patching"] },
  { term: "War dialing", def: "Sweeping ranges of phone numbers looking for modems, fax-backs, or other reachable systems", src: "objectives/2.2", srcAlias: "2.2 §Voice and call vectors", obj: "2.2", tags: ["vectors", "voice"] },
  { term: "Watering hole attack", def: "Compromising a third-party site the target visits regularly, then waiting for the target to come to the malware", src: "objectives/2.2", srcAlias: "2.2 §Watering hole attacks", obj: "2.2", tags: ["social-engineering", "case-study"] },
  { term: "WPA3", def: "Current Wi-Fi Protected Access standard; modern replacement for vulnerable WEP, WPA, and weaker WPA2 configurations", src: "objectives/2.2", srcAlias: "2.2 §Network vectors", obj: "2.2", tags: ["vectors", "network", "wireless"] },

  // ───── 2.3 — Vulnerabilities ─────
  { term: "ASLR (Address Space Layout Randomization)", def: "OS mitigation that randomizes process memory layout so exploit payloads cannot rely on fixed addresses", src: "objectives/2.3", srcAlias: "2.3 §Buffer overflow", obj: "2.3", tags: ["vulnerabilities", "memory", "mitigation"] },
  { term: "Buffer overflow", def: "Writing more data into a memory region than it can hold, spilling into adjacent memory and potentially altering execution flow", src: "objectives/2.3", srcAlias: "2.3 §Buffer overflow", obj: "2.3", tags: ["vulnerabilities", "memory"] },
  { term: "Cross-site scripting (XSS)", def: "Web flaw where attacker-supplied script runs in the victim's browser in the context of a trusted site", src: "objectives/2.3", srcAlias: "2.3 §Cross-site scripting (XSS)", obj: "2.3", tags: ["vulnerabilities", "web", "injection"] },
  { term: "CVE (Common Vulnerabilities and Exposures)", def: "Public catalog of disclosed vulnerabilities, each with a unique ID; tracked at cve.mitre.org", src: "objectives/2.3", srcAlias: "2.3 §Operating system vulnerabilities", obj: "2.3", tags: ["vulnerabilities", "reference"] },
  { term: "DEP (Data Execution Prevention)", def: "OS mitigation that marks memory regions non-executable so injected data cannot run as code", src: "objectives/2.3", srcAlias: "2.3 §Buffer overflow", obj: "2.3", tags: ["vulnerabilities", "memory", "mitigation"] },
  { term: "DLL injection", def: "Forcing a legitimate process to load a malicious DLL, granting the malicious code the host process's rights", src: "objectives/2.3", srcAlias: "2.3 §Memory injection", obj: "2.3", tags: ["vulnerabilities", "memory", "malware"] },
  { term: "End of Life (EOL)", def: "Manufacturer has stopped selling a product; support and patches may continue for a defined window", src: "objectives/2.3", srcAlias: "2.3 §Hardware vulnerabilities", obj: "2.3", tags: ["vulnerabilities", "hardware", "lifecycle"] },
  { term: "End of Service Life (EOSL)", def: "Manufacturer has stopped providing patches; the device is a permanent vulnerability unless removed or compensated", src: "objectives/2.3", srcAlias: "2.3 §Hardware vulnerabilities", obj: "2.3", tags: ["vulnerabilities", "hardware", "lifecycle"] },
  { term: "Firmware (vulnerability)", def: "The embedded operating software of a hardware device; usually patchable only by the manufacturer", src: "objectives/2.3", srcAlias: "2.3 §Hardware vulnerabilities", obj: "2.3", tags: ["vulnerabilities", "hardware"] },
  { term: "Fuzzing", def: "Automated testing technique that feeds malformed or random inputs to find buffer overflows and other input-handling flaws", src: "objectives/2.3", srcAlias: "2.3 §Buffer overflow", obj: "2.3", tags: ["vulnerabilities", "testing"] },
  { term: "Jailbreaking", def: "Modifying iOS firmware to bypass Apple restrictions, defeating MDM controls and enabling unsigned code", src: "objectives/2.3", srcAlias: "2.3 §Mobile device vulnerabilities", obj: "2.3", tags: ["vulnerabilities", "mobile"] },
  { term: "Legacy system", def: "Older system still in production because something critical depends on it; often EOL or EOSL", src: "objectives/2.3", srcAlias: "2.3 §Hardware vulnerabilities", obj: "2.3", tags: ["vulnerabilities", "lifecycle"] },
  { term: "Log4j", def: "Java logging library whose 2021 remote-code-execution vulnerability (CVE-2021-44228) became a defining cloud-RCE incident", src: "objectives/2.3", srcAlias: "2.3 §Cloud-specific vulnerabilities", obj: "2.3", tags: ["vulnerabilities", "cloud", "case-study"] },
  { term: "Memory injection", def: "Malware that runs inside an existing trusted process's memory instead of as its own process, evading process-based detection", src: "objectives/2.3", srcAlias: "2.3 §Memory injection", obj: "2.3", tags: ["vulnerabilities", "memory", "malware"] },
  { term: "Misconfiguration", def: "A security weakness created by incorrect operation rather than a platform flaw — open buckets, weak admin, insecure protocols, default creds", src: "objectives/2.3", srcAlias: "2.3 §Misconfiguration vulnerabilities", obj: "2.3", tags: ["vulnerabilities", "configuration"] },
  { term: "Non-persistent XSS (reflected)", def: "XSS variant where the malicious script is in a crafted URL the victim must click; runs once for that recipient", src: "objectives/2.3", srcAlias: "2.3 §Cross-site scripting (XSS)", obj: "2.3", tags: ["vulnerabilities", "web", "xss"] },
  { term: "Patch Tuesday", def: "Microsoft's monthly patch release cadence — the second Tuesday of each month, typically 50-100 fixes", src: "objectives/2.3", srcAlias: "2.3 §Operating system vulnerabilities", obj: "2.3", tags: ["vulnerabilities", "patching"] },
  { term: "Persistent XSS (stored)", def: "XSS variant where the malicious script is stored on the server (post, comment, profile) and runs in every visitor's browser", src: "objectives/2.3", srcAlias: "2.3 §Cross-site scripting (XSS)", obj: "2.3", tags: ["vulnerabilities", "web", "xss"] },
  { term: "Race condition", def: "Flaw where two events happen close enough in time that the application fails to handle the simultaneity correctly", src: "objectives/2.3", srcAlias: "2.3 §Race condition / TOCTOU", obj: "2.3", tags: ["vulnerabilities", "timing"] },
  { term: "Resource reuse (virtualization)", def: "Hypervisor flaw allowing one VM to read memory that was written by another VM on the same host", src: "objectives/2.3", srcAlias: "2.3 §Resource reuse", obj: "2.3", tags: ["vulnerabilities", "virtualization"] },
  { term: "Rooting", def: "Modifying Android firmware to gain root access, defeating MDM controls and enabling unsigned code", src: "objectives/2.3", srcAlias: "2.3 §Mobile device vulnerabilities", obj: "2.3", tags: ["vulnerabilities", "mobile"] },
  { term: "Sideloading", def: "Installing mobile apps from outside the official app store, bypassing platform vetting", src: "objectives/2.3", srcAlias: "2.3 §Mobile device vulnerabilities", obj: "2.3", tags: ["vulnerabilities", "mobile"] },
  { term: "SolarWinds Orion attack", def: "2020 supply-chain breach where attackers injected malicious code into a signed software update distributed to ~18,000 customers", src: "objectives/2.3", srcAlias: "2.3 §Malicious updates and the SolarWinds case", obj: "2.3", tags: ["vulnerabilities", "supply-chain", "case-study"] },
  { term: "SQL injection (SQLi)", def: "Inserting SQL syntax into application input so the database executes attacker-supplied queries alongside legitimate ones", src: "objectives/2.3", srcAlias: "2.3 §SQL injection (SQLi)", obj: "2.3", tags: ["vulnerabilities", "injection", "database"] },
  { term: "TOCTOU (Time-Of-Check to Time-Of-Use)", def: "Race-condition subtype where the application checks a value, then later uses it, while an attacker changes the value in between", src: "objectives/2.3", srcAlias: "2.3 §Race condition / TOCTOU", obj: "2.3", tags: ["vulnerabilities", "timing"] },
  { term: "VM escape", def: "Breaking out of a guest VM to reach the hypervisor or other VMs on the same host", src: "objectives/2.3", srcAlias: "2.3 §VM escape", obj: "2.3", tags: ["vulnerabilities", "virtualization"] },
  { term: "Zero-day", def: "A vulnerability for which no patch yet exists because the vendor is unaware; a status rather than category — any vuln family can be zero-day", src: "objectives/2.3", srcAlias: "2.3 §Zero-day vulnerabilities", obj: "2.3", tags: ["vulnerabilities", "zero-day"] },

  // ───── 2.4 — Malicious Activity ─────
  { term: "Account lockout (IOC)", def: "Repeated locking of an account with no user attempt — often evidence of brute force, password spraying, or help-desk pretexting", src: "objectives/2.4", srcAlias: "2.4 §Indicators of Compromise (IOCs)", obj: "2.4", tags: ["ioc", "passwords"] },
  { term: "Amplification attack", def: "DoS technique that uses an internet service to return responses far larger than the attacker's spoofed request, swamping the victim", src: "objectives/2.4", srcAlias: "2.4 §Amplification / reflection", obj: "2.4", tags: ["attacks", "dos"] },
  { term: "ARP poisoning", def: "On-path technique that sends spoofed ARP replies so a victim caches the attacker's MAC for the gateway's IP", src: "objectives/2.4", srcAlias: "2.4 §ARP poisoning", obj: "2.4", tags: ["attacks", "on-path", "network"] },
  { term: "Birthday attack", def: "Hash-collision attack using the birthday paradox — finding two inputs that produce the same hash much faster than brute force", src: "objectives/2.4", srcAlias: "2.4 §Birthday attack / hash collision", obj: "2.4", tags: ["attacks", "crypto", "hashing"] },
  { term: "Bloatware", def: "Pre-installed manufacturer software the user did not request; consumes resources and adds untrusted attack surface", src: "objectives/2.4", srcAlias: "2.4 §Bloatware", obj: "2.4", tags: ["malware", "endpoint"] },
  { term: "Boot sector virus", def: "Virus that runs from the boot sector before the OS loads, executing earlier than normal AV", src: "objectives/2.4", srcAlias: "2.4 §Virus", obj: "2.4", tags: ["malware", "virus"] },
  { term: "Botnet", def: "Network of compromised hosts (bots) coordinated by a command-and-control server to amplify attacks like DDoS", src: "objectives/2.4", srcAlias: "2.4 §Denial of service (DoS)", obj: "2.4", tags: ["attacks", "malware", "dos"] },
  { term: "Brute force (password)", def: "Trying every possible password against an account; online is slow due to lockouts, offline is fast against a stolen hash file", src: "objectives/2.4", srcAlias: "2.4 §Brute force", obj: "2.4", tags: ["attacks", "passwords"] },
  { term: "Brute force (physical)", def: "Physical attack forcing a door, window, or lock to gain unauthorized access — full control follows physical access", src: "objectives/2.4", srcAlias: "2.4 §Physical attacks", obj: "2.4", tags: ["attacks", "physical"] },
  { term: "CSRF (Cross-Site Request Forgery)", def: "Web attack that uses the victim's existing authenticated session to perform unintended actions on a trusted site", src: "objectives/2.4", srcAlias: "2.4 §Application attacks", obj: "2.4", tags: ["attacks", "web"] },
  { term: "Deauthentication attack", def: "Wireless DoS that sends spoofed deauthentication frames to force clients off a Wi-Fi network; mitigated by 802.11ac and newer", src: "objectives/2.4", srcAlias: "2.4 §Deauthentication attack", obj: "2.4", tags: ["attacks", "wireless"] },
  { term: "Denial of Service (DoS)", def: "Forcing a service to fail through overload, exploitation, or interruption so legitimate users cannot use it", src: "objectives/2.4", srcAlias: "2.4 §Denial of service (DoS)", obj: "2.4", tags: ["attacks", "dos"] },
  { term: "Directory traversal", def: "Manipulating file paths (../../) to access files outside the web server's intended directory", src: "objectives/2.4", srcAlias: "2.4 §Application attacks", obj: "2.4", tags: ["attacks", "web"] },
  { term: "Distributed Denial of Service (DDoS)", def: "DoS sourced from many distributed hosts (a botnet) to overwhelm the target from too many points to block easily", src: "objectives/2.4", srcAlias: "2.4 §Denial of service (DoS)", obj: "2.4", tags: ["attacks", "dos"] },
  { term: "DNS poisoning", def: "Modifying DNS records, caches, or client hosts files so a name resolves to an attacker-controlled IP", src: "objectives/2.4", srcAlias: "2.4 §DNS poisoning / cache poisoning", obj: "2.4", tags: ["attacks", "dns"] },
  { term: "Environmental attack", def: "Attacking infrastructure around the data center — power, HVAC, fire suppression — instead of the systems directly", src: "objectives/2.4", srcAlias: "2.4 §Physical attacks", obj: "2.4", tags: ["attacks", "physical"] },
  { term: "Fileless virus", def: "Malware that runs only in memory, persisted via a registry auto-start that re-injects on boot — leaves no executable on disk", src: "objectives/2.4", srcAlias: "2.4 §Virus", obj: "2.4", tags: ["malware", "virus", "evasion"] },
  { term: "Fox hunting", def: "Locating an RF jammer or rogue transmitter using a directional antenna and signal-strength triangulation", src: "objectives/2.4", srcAlias: "2.4 §RF jamming", obj: "2.4", tags: ["wireless", "investigation"] },
  { term: "Impossible travel (IOC)", def: "Same account authenticating from two distant geographies within a window shorter than physical travel time", src: "objectives/2.4", srcAlias: "2.4 §Indicators of Compromise (IOCs)", obj: "2.4", tags: ["ioc", "authentication"] },
  { term: "Indicator of Compromise (IOC)", def: "Observable evidence that a security event has occurred — lockouts, impossible travel, log gaps, resource spikes, exfiltrated data", src: "objectives/2.4", srcAlias: "2.4 §Indicators of Compromise (IOCs)", obj: "2.4", tags: ["ioc", "detection"] },
  { term: "Keylogger", def: "Malware that captures every keystroke (sometimes clipboard and screenshots) and exfiltrates the data", src: "objectives/2.4", srcAlias: "2.4 §Keylogger", obj: "2.4", tags: ["malware", "spyware"] },
  { term: "Logic bomb", def: "Malicious code that detonates on a trigger — date, time, file change, or specific user action — often custom-written for a single target", src: "objectives/2.4", srcAlias: "2.4 §Logic bomb", obj: "2.4", tags: ["malware"] },
  { term: "Macro virus", def: "Virus that lives inside a Microsoft Office document and runs via the macro engine when the user opens the file", src: "objectives/2.4", srcAlias: "2.4 §Virus", obj: "2.4", tags: ["malware", "virus"] },
  { term: "Malicious code", def: "Catch-all category covering executable malware, scripts, macros, and trojans — defended by AV, firewall, patching, and user training", src: "objectives/2.4", srcAlias: "2.4 §Malicious code", obj: "2.4", tags: ["malware"] },
  { term: "Malware", def: "Software designed to harm, exfiltrate, or take control — includes viruses, worms, ransomware, trojans, rootkits, spyware, keyloggers, logic bombs", src: "objectives/2.4", srcAlias: "2.4 §Malware", obj: "2.4", tags: ["malware"] },
  { term: "Man-in-the-Browser (MITB)", def: "On-path malware running inside the victim's browser as a proxy; sees data before encryption (out) and after decryption (in)", src: "objectives/2.4", srcAlias: "2.4 §On-path browser attack (man-in-the-browser, MITB)", obj: "2.4", tags: ["attacks", "on-path", "malware"] },
  { term: "Missing logs (IOC)", def: "Absence of expected log entries — often a sign that an attacker deleted or paused logging to hide their tracks", src: "objectives/2.4", srcAlias: "2.4 §Indicators of Compromise (IOCs)", obj: "2.4", tags: ["ioc", "logging"] },
  { term: "On-path attack", def: "Attacker sits between two parties, reads and modifies traffic in transit while remaining invisible to both endpoints; older name MITM", src: "objectives/2.4", srcAlias: "2.4 §On-path attacks", obj: "2.4", tags: ["attacks", "on-path"] },
  { term: "Out-of-cycle logging (IOC)", def: "Log entries from times when work is not normally happening — late nights, weekends — suggesting unauthorized activity", src: "objectives/2.4", srcAlias: "2.4 §Indicators of Compromise (IOCs)", obj: "2.4", tags: ["ioc", "logging"] },
  { term: "Pass-the-hash", def: "Replay attack that captures the hashed password during authentication and re-sends the hash to the server", src: "objectives/2.4", srcAlias: "2.4 §Pass-the-hash", obj: "2.4", tags: ["attacks", "replay", "authentication"] },
  { term: "Password spraying", def: "Trying a few very common passwords against many accounts to stay under per-account lockout thresholds", src: "objectives/2.4", srcAlias: "2.4 §Password spraying", obj: "2.4", tags: ["attacks", "passwords"] },
  { term: "Plaintext password storage", def: "Storing passwords as literal text rather than as hashes; the worst case — a breach of the file gives the attacker every credential", src: "objectives/2.4", srcAlias: "2.4 §Plaintext storage", obj: "2.4", tags: ["attacks", "passwords", "anti-pattern"] },
  { term: "Privilege escalation", def: "Using a flaw to gain higher rights than intended — vertical (user to admin) or horizontal (user A to user B)", src: "objectives/2.4", srcAlias: "2.4 §Application attacks", obj: "2.4", tags: ["attacks", "privilege"] },
  { term: "RAT (Remote Access Trojan)", def: "Trojan that gives the attacker remote control of the infected host, often including keylogging and screen capture", src: "objectives/2.4", srcAlias: "2.4 §RAT (Remote Access Trojan)", obj: "2.4", tags: ["malware", "trojan"] },
  { term: "Ransomware", def: "Malware that encrypts the victim's data and demands payment for the decryption key; defended by offline backups and patched systems", src: "objectives/2.4", srcAlias: "2.4 §Ransomware", obj: "2.4", tags: ["malware", "ransomware"] },
  { term: "Reflection attack", def: "DoS technique paired with amplification where the attacker spoofs the victim's address as the source so responses are directed at the victim", src: "objectives/2.4", srcAlias: "2.4 §Amplification / reflection", obj: "2.4", tags: ["attacks", "dos"] },
  { term: "Replay attack", def: "Capturing legitimate traffic and re-sending it to gain unauthorized access; often paired with on-path to collect material", src: "objectives/2.4", srcAlias: "2.4 §Replay attacks", obj: "2.4", tags: ["attacks", "replay"] },
  { term: "Resource consumption (IOC)", def: "Unexpected spikes in CPU, memory, or outbound bandwidth — often a sign of malware, mining, or data exfiltration", src: "objectives/2.4", srcAlias: "2.4 §Indicators of Compromise (IOCs)", obj: "2.4", tags: ["ioc"] },
  { term: "Resource inaccessibility (IOC)", def: "Files, accounts, or services suddenly unreachable — ransomware encryption, account locks, or service crashes", src: "objectives/2.4", srcAlias: "2.4 §Indicators of Compromise (IOCs)", obj: "2.4", tags: ["ioc"] },
  { term: "RF jamming", def: "Transmitting noise on a target frequency to drop signal-to-noise enough that clients cannot communicate; located via fox hunting", src: "objectives/2.4", srcAlias: "2.4 §RF jamming", obj: "2.4", tags: ["attacks", "wireless"] },
  { term: "RFID cloning", def: "Reading a victim's RFID badge and writing a duplicate; defeated by adding MFA so a clone alone cannot grant access", src: "objectives/2.4", srcAlias: "2.4 §Physical attacks", obj: "2.4", tags: ["attacks", "physical", "rfid"] },
  { term: "Rootkit", def: "Malware that hides itself in the OS kernel or as a normal process, becoming effectively part of the OS; defended by Secure Boot", src: "objectives/2.4", srcAlias: "2.4 §Rootkit", obj: "2.4", tags: ["malware"] },
  { term: "Script-based virus", def: "Virus that runs in a scripting host such as PowerShell or JavaScript rather than as a compiled binary", src: "objectives/2.4", srcAlias: "2.4 §Virus", obj: "2.4", tags: ["malware", "virus"] },
  { term: "Secure Boot", def: "UEFI feature that validates the OS kernel signature at boot and refuses to load a modified kernel — defense against rootkits", src: "objectives/2.4", srcAlias: "2.4 §Rootkit", obj: "2.4", tags: ["mitigation", "rootkit"] },
  { term: "Session hijacking", def: "Stealing a victim's session ID or cookie and replaying it to impersonate the authenticated user; also called sidejacking", src: "objectives/2.4", srcAlias: "2.4 §Session hijacking / sidejacking", obj: "2.4", tags: ["attacks", "replay", "web"] },
  { term: "Spyware", def: "Malware that observes user activity — browsing, keystrokes, screen, clipboard — and exfiltrates the data", src: "objectives/2.4", srcAlias: "2.4 §Spyware", obj: "2.4", tags: ["malware", "spyware"] },
  { term: "SSL stripping", def: "On-path downgrade attack: attacker swallows the server's HTTPS redirect and proxies HTTP to the user while speaking HTTPS to the server", src: "objectives/2.4", srcAlias: "2.4 §Downgrade attack (e.g., SSL stripping)", obj: "2.4", tags: ["attacks", "crypto", "on-path"] },
  { term: "Trojan horse", def: "Software that appears to do one thing but secretly does something malicious; requires user installation", src: "objectives/2.4", srcAlias: "2.4 §Trojan horse", obj: "2.4", tags: ["malware", "trojan"] },
  { term: "Virus", def: "Self-replicating malware that requires user action to start; spreads through file systems and across networks once running", src: "objectives/2.4", srcAlias: "2.4 §Virus", obj: "2.4", tags: ["malware", "virus"] },
  { term: "WannaCry", def: "2017 worm that used the EternalBlue SMB vulnerability to propagate and installed ransomware on each infected host", src: "objectives/2.4", srcAlias: "2.4 §Worm", obj: "2.4", tags: ["malware", "case-study", "worm"] },
  { term: "Worm", def: "Self-replicating malware that spreads without user action by exploiting network-reachable vulnerabilities", src: "objectives/2.4", srcAlias: "2.4 §Worm", obj: "2.4", tags: ["malware", "worm"] },

  // ───── 2.5 — Mitigation Techniques for Security ─────
  { term: "Access Control List (ACL)", def: "Rules on a device, OS, or application that allow or deny traffic based on source IP, destination, port, time, or identity", src: "objectives/2.5", srcAlias: "2.5 §Access Control Lists (ACLs)", obj: "2.5", tags: ["mitigation", "network", "access-control"] },
  { term: "Application allow list", def: "Restrictive default-deny policy where only explicitly approved applications may run on a system", src: "objectives/2.5", srcAlias: "2.5 §Application allow lists vs deny lists", obj: "2.5", tags: ["mitigation", "endpoint", "lists"] },
  { term: "Application deny list", def: "Permissive default-allow policy where named applications are blocked while everything else may run (anti-malware pattern)", src: "objectives/2.5", srcAlias: "2.5 §Application allow lists vs deny lists", obj: "2.5", tags: ["mitigation", "endpoint", "lists"] },
  { term: "Application-level encryption", def: "An application encrypts its own data independent of file-system or disk encryption — protects regardless of underlying storage encryption", src: "objectives/2.5", srcAlias: "2.5 §Encryption", obj: "2.5", tags: ["mitigation", "crypto"] },
  { term: "Decommissioning", def: "Process of retiring equipment safely — format the drive for reuse, remove and relocate it, or physically destroy it for sensitive data", src: "objectives/2.5", srcAlias: "2.5 §Decommissioning", obj: "2.5", tags: ["mitigation", "lifecycle"] },
  { term: "Defense in depth", def: "Layering multiple controls so no single tool or failure compromises overall security", src: "objectives/2.5", srcAlias: "2.5 §Endpoint hardening", obj: "2.5", tags: ["mitigation", "fundamentals"] },
  { term: "EDR (Endpoint Detection and Response)", def: "Endpoint security that adds behavioral analysis, ML, process monitoring, root-cause analysis, and automated response to signature-based detection", src: "objectives/2.5", srcAlias: "2.5 §EDR (Endpoint Detection and Response)", obj: "2.5", tags: ["mitigation", "endpoint"] },
  { term: "Endpoint hardening", def: "Applying baseline security configurations to user devices — patching, AV/EDR, host firewall, encryption — adapted to each platform", src: "objectives/2.5", srcAlias: "2.5 §Endpoint hardening", obj: "2.5", tags: ["mitigation", "hardening", "endpoint"] },
  { term: "Hardening", def: "Set of baseline configurations that shrink a system's attack surface — patches, password policy, limited accounts, IP restrictions, AV", src: "objectives/2.5", srcAlias: "2.5 §Hardening (system level)", obj: "2.5", tags: ["mitigation", "hardening"] },
  { term: "HIPS (Host-based Intrusion Prevention System)", def: "IPS on the endpoint that sees OS internals — registry, files, process memory — and can block in-process buffer overflows or OS modifications", src: "objectives/2.5", srcAlias: "2.5 §Host-based IPS (HIPS)", obj: "2.5", tags: ["mitigation", "endpoint", "ips"] },
  { term: "Host-based firewall", def: "Software firewall on the OS itself; sees traffic before and after encryption and manages inbound and outbound on a per-process basis", src: "objectives/2.5", srcAlias: "2.5 §Host-based firewall", obj: "2.5", tags: ["mitigation", "endpoint", "firewall"] },
  { term: "Least privilege", def: "Assign every user the minimum rights required for their job; admins elevate temporarily rather than running with admin rights day-to-day", src: "objectives/2.5", srcAlias: "2.5 §Least privilege", obj: "2.5", tags: ["mitigation", "access-control"] },
  { term: "Logical segmentation", def: "Separating network traffic in software (VLANs) on shared physical infrastructure", src: "objectives/2.5", srcAlias: "2.5 §Segmentation", obj: "2.5", tags: ["mitigation", "network", "segmentation"] },
  { term: "Monitoring (security)", def: "Continuous observation of switches, routers, firewalls, IPS, and auth systems to feed logs and alerts to a SIEM", src: "objectives/2.5", srcAlias: "2.5 §Monitoring, logging, SIEM", obj: "2.5", tags: ["mitigation", "monitoring"] },
  { term: "Next-generation firewall (NGFW)", def: "Firewall that filters by application and content rather than just port and IP — finer-grained control of services", src: "objectives/2.5", srcAlias: "2.5 §Open ports and services", obj: "2.5", tags: ["mitigation", "firewall"] },
  { term: "nmap", def: "Network scanner used to audit which ports and services are actually listening on a system", src: "objectives/2.5", srcAlias: "2.5 §Open ports and services", obj: "2.5", tags: ["mitigation", "tools", "scanning"] },
  { term: "Patching", def: "Applying vendor-supplied fixes to OS, applications, and firmware; cycles include automatic, tested deployment, and emergency out-of-band patches", src: "objectives/2.5", srcAlias: "2.5 §Patching", obj: "2.5", tags: ["mitigation", "patching"] },
  { term: "Physical segmentation", def: "Separating network traffic on different switches, cables, and physical infrastructure — no shared wire between segments", src: "objectives/2.5", srcAlias: "2.5 §Segmentation", obj: "2.5", tags: ["mitigation", "network", "segmentation"] },
  { term: "Posture assessment", def: "Endpoint configuration check at connect time — OS version, patches, AV/EDR, firewall, certificate; failing systems are dropped into a quarantine VLAN", src: "objectives/2.5", srcAlias: "2.5 §Posture assessment", obj: "2.5", tags: ["mitigation", "endpoint"] },
  { term: "Quarantine VLAN", def: "Limited-connectivity VLAN where systems that fail posture assessment can reach only remediation services until they comply", src: "objectives/2.5", srcAlias: "2.5 §Posture assessment", obj: "2.5", tags: ["mitigation", "network", "endpoint"] },
  { term: "Root cause analysis (RCA)", def: "EDR investigation upstream from a suspicious event to identify the entry point and full extent of the compromise", src: "objectives/2.5", srcAlias: "2.5 §EDR (Endpoint Detection and Response)", obj: "2.5", tags: ["mitigation", "edr", "investigation"] },
  { term: "Segmentation (network)", def: "Splitting the network into smaller pieces — physical, logical (VLAN), or virtual — so an event in one piece cannot reach the others", src: "objectives/2.5", srcAlias: "2.5 §Segmentation", obj: "2.5", tags: ["mitigation", "network", "segmentation"] },
  { term: "SIEM (Security Information and Event Manager)", def: "System that consolidates logs from across the environment for correlation, reporting, and alerting", src: "objectives/2.5", srcAlias: "2.5 §Monitoring, logging, SIEM", obj: "2.5", tags: ["mitigation", "logging", "monitoring"] },
  { term: "Virtual segmentation", def: "Network isolation inside a hypervisor or cloud fabric, separating workloads at the virtualization layer", src: "objectives/2.5", srcAlias: "2.5 §Segmentation", obj: "2.5", tags: ["mitigation", "network", "cloud", "segmentation"] },
  { term: "VLAN", def: "Virtual LAN — a logical broadcast domain on a switch that separates traffic from other VLANs on the same physical infrastructure", src: "objectives/2.5", srcAlias: "2.5 §Segmentation", obj: "2.5", tags: ["network", "segmentation"] },
];

// ---- State ----
let activeObjective = "All";
let searchTerm = "";
let sortKey = "term";
let sortDir = 1; // 1 asc, -1 desc

// ---- Render scaffold ----
const root = dv.container;
root.empty();

const style = root.createEl("style");
style.textContent = `
  .vocab-controls { display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px; padding: 12px 14px; background: var(--background-secondary); border-radius: 6px; }
  .vocab-search { width: 100%; padding: 8px 12px; font-size: 0.95em; border: 1px solid var(--background-modifier-border); background: var(--background-primary); color: var(--text-normal); border-radius: 5px; box-sizing: border-box; }
  .vocab-search:focus { outline: 2px solid var(--interactive-accent); outline-offset: -1px; }
  .vocab-chips { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
  .vocab-chips-label { font-size: 0.85em; color: var(--text-muted); margin-right: 4px; }
  .vocab-chip { padding: 4px 12px; font-size: 0.85em; border: 1px solid var(--background-modifier-border); background: var(--background-primary); color: var(--text-normal); border-radius: 999px; cursor: pointer; transition: all 100ms ease; }
  .vocab-chip:hover { background: var(--background-modifier-hover); }
  .vocab-chip.active { background: var(--interactive-accent); color: var(--text-on-accent); border-color: var(--interactive-accent); }
  .vocab-count { font-size: 0.85em; color: var(--text-muted); }
  .vocab-table { width: 100%; border-collapse: collapse; font-size: 0.92em; }
  .vocab-table thead { position: sticky; top: 0; background: var(--background-secondary); z-index: 1; }
  .vocab-th { text-align: left; padding: 10px 12px; border-bottom: 2px solid var(--background-modifier-border); cursor: pointer; user-select: none; font-weight: 600; color: var(--text-normal); white-space: nowrap; }
  .vocab-th:hover { background: var(--background-modifier-hover); }
  .vocab-table tbody tr { border-bottom: 1px solid var(--background-modifier-border); }
  .vocab-table tbody tr:hover { background: var(--background-modifier-hover); }
  .vocab-table td { padding: 9px 12px; vertical-align: top; line-height: 1.45; color: var(--text-normal); }
  .vocab-cell-term { font-weight: 600; white-space: nowrap; }
  .vocab-cell-def { color: var(--text-normal); }
  .vocab-cell-obj { font-family: var(--font-monospace); white-space: nowrap; color: var(--text-muted); }
  .vocab-cell-tags { font-size: 0.85em; color: var(--text-muted); }
  .vocab-empty { padding: 24px; text-align: center; color: var(--text-muted); font-style: italic; }
`;

// Controls
const controls = root.createDiv({ cls: "vocab-controls" });

const searchInput = controls.createEl("input", {
  type: "text",
  cls: "vocab-search",
  attr: { placeholder: "Search term, definition, or tag…" },
});

const chipsWrap = controls.createDiv({ cls: "vocab-chips" });
chipsWrap.createEl("span", { cls: "vocab-chips-label", text: "Objective:" });
const objectives = ["All", ...Array.from(new Set(data.map((d) => d.obj))).sort()];
const chipEls = {};
objectives.forEach((o) => {
  const chip = chipsWrap.createEl("button", { cls: "vocab-chip", text: o });
  chip.onclick = () => {
    activeObjective = o;
    refresh();
  };
  chipEls[o] = chip;
});

const count = controls.createDiv({ cls: "vocab-count" });

// Table
const table = root.createEl("table", { cls: "vocab-table" });
const thead = table.createEl("thead");
const headRow = thead.createEl("tr");
const columns = [
  { key: "term", label: "Term" },
  { key: "def", label: "Definition" },
  { key: "srcAlias", label: "Source" },
  { key: "obj", label: "Objective" },
  { key: "tags", label: "Tags" },
];
const headerEls = {};
columns.forEach((col) => {
  const th = headRow.createEl("th", { cls: "vocab-th", text: col.label });
  th.onclick = () => {
    if (sortKey === col.key) sortDir *= -1;
    else {
      sortKey = col.key;
      sortDir = 1;
    }
    refresh();
  };
  headerEls[col.key] = th;
});
const tbody = table.createEl("tbody");

// ---- Refresh ----
function computeRows() {
  let rows = data.slice();
  if (activeObjective !== "All") {
    rows = rows.filter((r) => r.obj === activeObjective);
  }
  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    rows = rows.filter(
      (r) =>
        r.term.toLowerCase().includes(q) ||
        r.def.toLowerCase().includes(q) ||
        r.tags.some((t) => t.toLowerCase().includes(q))
    );
  }
  rows.sort((a, b) => {
    let av = a[sortKey];
    let bv = b[sortKey];
    if (Array.isArray(av)) av = av.join(",");
    if (Array.isArray(bv)) bv = bv.join(",");
    av = String(av || "").toLowerCase();
    bv = String(bv || "").toLowerCase();
    if (av < bv) return -1 * sortDir;
    if (av > bv) return 1 * sortDir;
    return 0;
  });
  return rows;
}

function refresh() {
  // Chip active state
  objectives.forEach((o) => {
    chipEls[o].classList.toggle("active", o === activeObjective);
  });
  // Header sort arrows
  columns.forEach((col) => {
    const arrow = sortKey === col.key ? (sortDir > 0 ? "  ▲" : "  ▼") : "";
    headerEls[col.key].setText(col.label + arrow);
  });
  // Rows
  const rows = computeRows();
  tbody.empty();
  if (rows.length === 0) {
    const tr = tbody.createEl("tr");
    const td = tr.createEl("td", { cls: "vocab-empty", attr: { colspan: 5 } });
    td.setText("No terms match the current filters.");
  } else {
    rows.forEach((r) => {
      const tr = tbody.createEl("tr");
      tr.createEl("td", { cls: "vocab-cell-term", text: r.term });
      tr.createEl("td", { cls: "vocab-cell-def", text: r.def });
      const srcTd = tr.createEl("td", { cls: "vocab-cell-src" });
      srcTd.createEl("a", {
        text: r.srcAlias,
        cls: "internal-link",
        attr: { "data-href": r.src, href: r.src, target: "_blank", rel: "noopener" },
      });
      tr.createEl("td", { cls: "vocab-cell-obj", text: r.obj });
      tr.createEl("td", { cls: "vocab-cell-tags", text: r.tags.join(", ") });
    });
  }
  count.setText(`Showing ${rows.length} of ${data.length} terms`);
}

searchInput.oninput = (e) => {
  searchTerm = e.target.value;
  refresh();
};

refresh();
```
