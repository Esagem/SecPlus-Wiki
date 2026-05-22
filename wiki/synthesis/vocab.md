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

  // ───── 3.1 — Architecture and Infrastructure Models ─────
  { term: "Active-active", def: "High-availability mode where all pool members handle traffic simultaneously; capacity scales with the pool", src: "objectives/3.1", srcAlias: "3.1 §Other infrastructure concepts", obj: "3.1", tags: ["architecture", "ha"] },
  { term: "Active-passive", def: "High-availability mode where some members serve traffic and others stand by idle until an active member fails", src: "objectives/3.1", srcAlias: "3.1 §Other infrastructure concepts", obj: "3.1", tags: ["architecture", "ha"] },
  { term: "Air gap", def: "Physical isolation of networks with no cable between switches — total separation, no logical bypass possible", src: "objectives/3.1", srcAlias: "3.1 §Network infrastructure concepts", obj: "3.1", tags: ["architecture", "network", "segmentation"] },
  { term: "API gateway", def: "Front door for a microservices architecture; routes inbound requests to the appropriate backend service", src: "objectives/3.1", srcAlias: "3.1 §Cloud infrastructures", obj: "3.1", tags: ["architecture", "cloud", "microservices"] },
  { term: "Compute (cloud)", def: "Cloud-provider processing capability — virtual CPUs and instances allocated on demand", src: "objectives/3.1", srcAlias: "3.1 §Infrastructure considerations", obj: "3.1", tags: ["architecture", "cloud"] },
  { term: "Container", def: "Application package that runs in containerized form, sharing the host OS kernel with other containers on the same host", src: "objectives/3.1", srcAlias: "3.1 §Other infrastructure concepts", obj: "3.1", tags: ["architecture", "virtualization"] },
  { term: "Containerization", def: "Lighter-weight virtualization where containers share one host OS kernel instead of each having its own guest OS", src: "objectives/3.1", srcAlias: "3.1 §Other infrastructure concepts", obj: "3.1", tags: ["architecture", "virtualization"] },
  { term: "Elasticity", def: "Capacity that grows and shrinks automatically with load — cloud-native bidirectional scaling", src: "objectives/3.1", srcAlias: "3.1 §Infrastructure considerations", obj: "3.1", tags: ["architecture", "cloud", "scaling"] },
  { term: "Embedded system", def: "Purpose-built hardware-plus-software for a single function, often with no general-purpose OS access (e.g., traffic lights, HVAC controllers)", src: "objectives/3.1", srcAlias: "3.1 §Other infrastructure concepts", obj: "3.1", tags: ["architecture", "embedded"] },
  { term: "High availability (HA)", def: "Configuration in which a redundant component is already powered, configured, and ready to take over on failure within seconds", src: "objectives/3.1", srcAlias: "3.1 §Other infrastructure concepts", obj: "3.1", tags: ["architecture", "ha"] },
  { term: "Hybrid cloud", def: "Architecture spanning two or more cloud providers (often plus on-prem), trading complexity for flexibility and resilience", src: "objectives/3.1", srcAlias: "3.1 §Cloud infrastructures", obj: "3.1", tags: ["architecture", "cloud"] },
  { term: "Hypervisor", def: "Software that runs on infrastructure and manages multiple guest virtual machines, each with its own OS", src: "objectives/3.1", srcAlias: "3.1 §Other infrastructure concepts", obj: "3.1", tags: ["architecture", "virtualization"] },
  { term: "IaaS (Infrastructure as a Service)", def: "Cloud model where the provider supplies hardware and virtualization; the customer manages OS, runtime, app, and data", src: "objectives/3.1", srcAlias: "3.1 §Cloud infrastructures", obj: "3.1", tags: ["architecture", "cloud", "service-model"] },
  { term: "ICS (Industrial Control System)", def: "Network of industrial controllers (manufacturing, power, utilities) — same family as SCADA, must be heavily segmented", src: "objectives/3.1", srcAlias: "3.1 §Other infrastructure concepts", obj: "3.1", tags: ["architecture", "ics", "embedded"] },
  { term: "Infrastructure as Code (IaC)", def: "Defining infrastructure in text files (Terraform, CloudFormation) so environments are reproducible and version-controlled", src: "objectives/3.1", srcAlias: "3.1 §Cloud infrastructures", obj: "3.1", tags: ["architecture", "cloud", "iac"] },
  { term: "IoT (Internet of Things)", def: "Network-connected sensors and consumer devices (thermostats, doorbells, smart watches) typically weak on security — segment them", src: "objectives/3.1", srcAlias: "3.1 §Other infrastructure concepts", obj: "3.1", tags: ["architecture", "iot", "embedded"] },
  { term: "Management plane", def: "SDN layer that configures the device via SSH, SNMP, or API calls — distinct from the control plane that decides routing", src: "objectives/3.1", srcAlias: "3.1 §Network infrastructure concepts", obj: "3.1", tags: ["architecture", "network", "sdn"] },
  { term: "Microservices", def: "Application architecture composed of many small, independently scalable services behind an API gateway", src: "objectives/3.1", srcAlias: "3.1 §Cloud infrastructures", obj: "3.1", tags: ["architecture", "cloud", "microservices"] },
  { term: "Monolithic architecture", def: "Application packaged as one large executable; replace the whole app to update any part", src: "objectives/3.1", srcAlias: "3.1 §Cloud infrastructures", obj: "3.1", tags: ["architecture"] },
  { term: "MTTR (Mean Time To Repair)", def: "Average time to replace or restore a failed component back to operation", src: "objectives/3.1", srcAlias: "3.1 §Infrastructure considerations", obj: "3.1", tags: ["architecture", "metrics", "resilience"] },
  { term: "Multi-cloud", def: "Strategy of using more than one cloud provider so a single-provider outage cannot take down everything", src: "objectives/3.1", srcAlias: "3.1 §Cloud infrastructures", obj: "3.1", tags: ["architecture", "cloud", "resilience"] },
  { term: "On-premises", def: "Infrastructure owned, hosted, and managed inside the organization's own facilities", src: "objectives/3.1", srcAlias: "3.1 §Other infrastructure concepts", obj: "3.1", tags: ["architecture"] },
  { term: "PaaS (Platform as a Service)", def: "Cloud model where the provider supplies hardware, OS, and runtime; the customer manages app code and data", src: "objectives/3.1", srcAlias: "3.1 §Cloud infrastructures", obj: "3.1", tags: ["architecture", "cloud", "service-model"] },
  { term: "Patch availability", def: "Whether a vendor publishes patches for a system; many embedded and IoT devices have none — segment instead", src: "objectives/3.1", srcAlias: "3.1 §Infrastructure considerations", obj: "3.1", tags: ["architecture", "patching"] },
  { term: "Responsibility matrix (cloud)", def: "Provider-published grid showing who patches, configures, and secures each layer across IaaS, PaaS, SaaS, and on-prem", src: "objectives/3.1", srcAlias: "3.1 §Cloud infrastructures", obj: "3.1", tags: ["architecture", "cloud", "shared-responsibility"] },
  { term: "Responsiveness", def: "Latency between a request and its reply — a common metric for interactive applications", src: "objectives/3.1", srcAlias: "3.1 §Infrastructure considerations", obj: "3.1", tags: ["architecture", "metrics"] },
  { term: "Risk transference (cyber-insurance)", def: "Strategy of shifting financial impact of a risk to a third party — most often through cyber-security insurance", src: "objectives/3.1", srcAlias: "3.1 §Infrastructure considerations", obj: "3.1", tags: ["architecture", "risk"] },
  { term: "RTOS (Real-Time Operating System)", def: "Deterministic OS that lets a critical task preempt everything and respond within strict timing bounds (cars, medical, factory PLCs)", src: "objectives/3.1", srcAlias: "3.1 §Other infrastructure concepts", obj: "3.1", tags: ["architecture", "embedded", "rtos"] },
  { term: "SaaS (Software as a Service)", def: "Cloud model where the provider operates the entire stack; the customer manages only their data and identities", src: "objectives/3.1", srcAlias: "3.1 §Cloud infrastructures", obj: "3.1", tags: ["architecture", "cloud", "service-model"] },
  { term: "Scalability", def: "The capability of a system to grow capacity to meet additional demand", src: "objectives/3.1", srcAlias: "3.1 §Infrastructure considerations", obj: "3.1", tags: ["architecture", "scaling"] },
  { term: "SCADA (Supervisory Control and Data Acquisition)", def: "Centralized control system for industrial equipment; must be segmented from anything else because compromise has physical-world consequences", src: "objectives/3.1", srcAlias: "3.1 §Other infrastructure concepts", obj: "3.1", tags: ["architecture", "ics", "scada"] },
  { term: "SDN (Software-Defined Networking)", def: "Approach that decouples a network device's data, control, and management planes so they can be reimplemented and orchestrated as software", src: "objectives/3.1", srcAlias: "3.1 §Network infrastructure concepts", obj: "3.1", tags: ["architecture", "network", "sdn"] },
  { term: "Serverless", def: "Cloud architecture in which the provider runs individual functions on demand; no servers, OSes, or instances for the customer to manage", src: "objectives/3.1", srcAlias: "3.1 §Cloud infrastructures", obj: "3.1", tags: ["architecture", "cloud", "serverless"] },
  { term: "Virtualization", def: "Hardware abstraction in which a hypervisor runs multiple guest operating systems, each in its own VM", src: "objectives/3.1", srcAlias: "3.1 §Other infrastructure concepts", obj: "3.1", tags: ["architecture", "virtualization"] },

  // ───── 3.2 — Secure Enterprise Infrastructure ─────
  { term: "Attack surface", def: "The full set of openings an attacker could use — open ports, vulnerable code, weak auth, misconfigured rules; the goal is to shrink it", src: "objectives/3.2", srcAlias: "3.2 §Secure infrastructures — zones and attack surface", obj: "3.2", tags: ["infrastructure", "fundamentals"] },
  { term: "Authentication server (802.1X)", def: "Backend credential store in an 802.1X exchange (RADIUS, TACACS+, AD/Kerberos) that decides allow or deny", src: "objectives/3.2", srcAlias: "3.2 §Port security — 802.1X and EAP", obj: "3.2", tags: ["infrastructure", "authentication", "802.1x"] },
  { term: "Authenticator (802.1X)", def: "Switch port or wireless controller that gates access and relays EAP messages to the authentication server", src: "objectives/3.2", srcAlias: "3.2 §Port security — 802.1X and EAP", obj: "3.2", tags: ["infrastructure", "authentication", "802.1x"] },
  { term: "Content switching", def: "Load-balancer feature that routes requests to specific backends based on URL, path, or content type", src: "objectives/3.2", srcAlias: "3.2 §Network appliances", obj: "3.2", tags: ["infrastructure", "load-balancer"] },
  { term: "DMZ (screened zone)", def: "Network zone holding publicly reachable services; the internet can reach in but the zone cannot freely reach internal systems", src: "objectives/3.2", srcAlias: "3.2 §Secure infrastructures — zones and attack surface", obj: "3.2", tags: ["infrastructure", "zones"] },
  { term: "EAP (Extensible Authentication Protocol)", def: "Framework defining the authentication conversation; carried over 802.1X for wired and wireless port-based access control", src: "objectives/3.2", srcAlias: "3.2 §Port security — 802.1X and EAP", obj: "3.2", tags: ["infrastructure", "authentication", "802.1x"] },
  { term: "Explicit proxy", def: "Proxy whose IP or name is configured in the client OS or application — the client knows it is using a proxy", src: "objectives/3.2", srcAlias: "3.2 §Network appliances", obj: "3.2", tags: ["infrastructure", "proxy"] },
  { term: "Fail-closed", def: "Inline-device behavior on failure: the link is severed to preserve security at the cost of availability", src: "objectives/3.2", srcAlias: "3.2 §IDS vs IPS", obj: "3.2", tags: ["infrastructure", "ips", "ha"] },
  { term: "Fail-open", def: "Inline-device behavior on failure: traffic continues to flow without inspection to preserve availability at the cost of security", src: "objectives/3.2", srcAlias: "3.2 §IDS vs IPS", obj: "3.2", tags: ["infrastructure", "ips", "ha"] },
  { term: "Forward proxy", def: "Outbound proxy: internal clients reach the internet through it; provides caching, URL filtering, and content scanning", src: "objectives/3.2", srcAlias: "3.2 §Network appliances", obj: "3.2", tags: ["infrastructure", "proxy"] },
  { term: "IDS (Intrusion Detection System)", def: "Out-of-band sensor that detects and alerts on malicious traffic but does not block", src: "objectives/3.2", srcAlias: "3.2 §IDS vs IPS", obj: "3.2", tags: ["infrastructure", "ids"] },
  { term: "Inline (active) monitoring", def: "Deployment in which the inspecting device sits in the traffic path and can block in real time", src: "objectives/3.2", srcAlias: "3.2 §IDS vs IPS", obj: "3.2", tags: ["infrastructure", "ips"] },
  { term: "IPS (Intrusion Prevention System)", def: "Inline device that detects malicious traffic and blocks it in real time", src: "objectives/3.2", srcAlias: "3.2 §IDS vs IPS", obj: "3.2", tags: ["infrastructure", "ips"] },
  { term: "Jump server", def: "Hardened internal host that external admins must connect to first before reaching production systems; a single audited choke point", src: "objectives/3.2", srcAlias: "3.2 §Network appliances", obj: "3.2", tags: ["infrastructure", "admin"] },
  { term: "Load balancer", def: "Appliance that distributes inbound traffic across a pool of servers and removes failed members from rotation", src: "objectives/3.2", srcAlias: "3.2 §Network appliances", obj: "3.2", tags: ["infrastructure", "load-balancer", "ha"] },
  { term: "Network Access Control (NAC)", def: "Another name for port-based access control via 802.1X — authenticate before the switch port opens", src: "objectives/3.2", srcAlias: "3.2 §Port security — 802.1X and EAP", obj: "3.2", tags: ["infrastructure", "authentication", "802.1x"] },
  { term: "Network tap", def: "Physical device inserted into a network link to mirror traffic to a monitoring system", src: "objectives/3.2", srcAlias: "3.2 §IDS vs IPS", obj: "3.2", tags: ["infrastructure", "monitoring"] },
  { term: "Open proxy", def: "Anyone-can-use proxy run by an unknown third party; bypasses corporate filtering and can inject ads or malware — usually blocked", src: "objectives/3.2", srcAlias: "3.2 §Network appliances", obj: "3.2", tags: ["infrastructure", "proxy", "risk"] },
  { term: "Passive monitoring", def: "Deployment using a port mirror or tap so the sensor sees a copy of traffic — can alert but cannot block", src: "objectives/3.2", srcAlias: "3.2 §IDS vs IPS", obj: "3.2", tags: ["infrastructure", "ids", "monitoring"] },
  { term: "Port mirror", def: "Switch feature that copies traffic from one or more ports to another port for monitoring; Cisco term is SPAN", src: "objectives/3.2", srcAlias: "3.2 §IDS vs IPS", obj: "3.2", tags: ["infrastructure", "monitoring"] },
  { term: "Proxy server", def: "Appliance that sits between client and target, making requests on the client's behalf and adding caching, filtering, and scanning", src: "objectives/3.2", srcAlias: "3.2 §Network appliances", obj: "3.2", tags: ["infrastructure", "proxy"] },
  { term: "RADIUS", def: "Common backend authentication server protocol used with 802.1X to look up user credentials", src: "objectives/3.2", srcAlias: "3.2 §Port security — 802.1X and EAP", obj: "3.2", tags: ["infrastructure", "authentication"] },
  { term: "Remote access VPN", def: "VPN model for a single device connecting back to a concentrator from anywhere — typically SSL/TLS over TCP 443", src: "objectives/3.2", srcAlias: "3.2 §Secure communication", obj: "3.2", tags: ["infrastructure", "vpn"] },
  { term: "Reverse proxy", def: "Inbound proxy: external clients reach an internal server through it; provides caching, content scanning, and a place to drop bad requests", src: "objectives/3.2", srcAlias: "3.2 §Network appliances", obj: "3.2", tags: ["infrastructure", "proxy"] },
  { term: "SASE (Secure Access Service Edge)", def: "Cloud-delivered security overlay (NGFW, SWG, ZTNA, CASB) brokering access to apps wherever they live", src: "objectives/3.2", srcAlias: "3.2 §Secure communication", obj: "3.2", tags: ["infrastructure", "cloud", "vpn"] },
  { term: "SD-WAN (Software-Defined WAN)", def: "Approach that dynamically chooses the best path per application across sites and clouds, without forcing all traffic through a central data center", src: "objectives/3.2", srcAlias: "3.2 §Secure communication", obj: "3.2", tags: ["infrastructure", "wan"] },
  { term: "Sensor (network)", def: "Switch, router, firewall, IPS, or purpose-built device that gathers traffic data and forwards it to a collector or SIEM", src: "objectives/3.2", srcAlias: "3.2 §Network appliances", obj: "3.2", tags: ["infrastructure", "monitoring"] },
  { term: "Site-to-site VPN", def: "VPN model that permanently binds two networks together with firewall-to-firewall encryption; no per-user client required", src: "objectives/3.2", srcAlias: "3.2 §Secure communication", obj: "3.2", tags: ["infrastructure", "vpn", "ipsec"] },
  { term: "SPAN (Switch Port Analyzer)", def: "Cisco/industry name for a port-mirror configuration that copies switch traffic to a monitoring port", src: "objectives/3.2", srcAlias: "3.2 §IDS vs IPS", obj: "3.2", tags: ["infrastructure", "monitoring"] },
  { term: "SSL/TLS offload", def: "Load-balancer feature that terminates TLS at the LB and sends plaintext to backends, freeing backend CPU", src: "objectives/3.2", srcAlias: "3.2 §Network appliances", obj: "3.2", tags: ["infrastructure", "load-balancer", "crypto"] },
  { term: "SSL/TLS VPN", def: "Remote-access VPN running over TCP 443; traverses firewalls trivially and is the standard for per-user remote access", src: "objectives/3.2", srcAlias: "3.2 §Secure communication", obj: "3.2", tags: ["infrastructure", "vpn"] },
  { term: "Supplicant (802.1X)", def: "Client device (laptop, phone) seeking to authenticate to the network via 802.1X", src: "objectives/3.2", srcAlias: "3.2 §Port security — 802.1X and EAP", obj: "3.2", tags: ["infrastructure", "authentication", "802.1x"] },
  { term: "TACACS+", def: "Cisco-developed backend authentication protocol commonly used for network-device administration", src: "objectives/3.2", srcAlias: "3.2 §Port security — 802.1X and EAP", obj: "3.2", tags: ["infrastructure", "authentication"] },
  { term: "TCP offload", def: "Load-balancer feature that maintains one persistent TCP session per backend server instead of one per client", src: "objectives/3.2", srcAlias: "3.2 §Network appliances", obj: "3.2", tags: ["infrastructure", "load-balancer"] },
  { term: "Transparent proxy", def: "Proxy that intercepts traffic without client configuration — the user does not know it is in place", src: "objectives/3.2", srcAlias: "3.2 §Network appliances", obj: "3.2", tags: ["infrastructure", "proxy"] },
  { term: "Trusted zone", def: "Network zone representing the internal organization — the default-allow-out side of perimeter policy", src: "objectives/3.2", srcAlias: "3.2 §Secure infrastructures — zones and attack surface", obj: "3.2", tags: ["infrastructure", "zones"] },
  { term: "Untrusted zone", def: "Network zone representing the internet or external networks — hostile by default", src: "objectives/3.2", srcAlias: "3.2 §Secure infrastructures — zones and attack surface", obj: "3.2", tags: ["infrastructure", "zones"] },
  { term: "UTM (Unified Threat Management)", def: "Older bundled appliance combining firewall, IDS/IPS, URL filter, antimalware, spam filter, VPN, and QoS — typically L4 with bolt-on features", src: "objectives/3.2", srcAlias: "3.2 §Firewall types", obj: "3.2", tags: ["infrastructure", "firewall"] },
  { term: "VPN (Virtual Private Network)", def: "Encrypted tunnel that allows private data to traverse a public network safely", src: "objectives/3.2", srcAlias: "3.2 §Secure communication", obj: "3.2", tags: ["infrastructure", "vpn"] },
  { term: "VPN concentrator", def: "Endpoint device that terminates one or many VPN tunnels — often a function of an NGFW today", src: "objectives/3.2", srcAlias: "3.2 §Secure communication", obj: "3.2", tags: ["infrastructure", "vpn"] },
  { term: "WAF (Web Application Firewall)", def: "L7 firewall specialized for HTTP and HTTPS payloads; blocks SQL injection, XSS, and other web app attacks (often required by PCI-DSS)", src: "objectives/3.2", srcAlias: "3.2 §Firewall types", obj: "3.2", tags: ["infrastructure", "firewall", "web"] },

  // ───── 3.3 — Data Protection ─────
  { term: "At rest (data)", def: "Data sitting on a storage device — disk, SSD, USB, database; protected by FDE, file/folder/column encryption, and ACLs", src: "objectives/3.3", srcAlias: "3.3 §States of data", obj: "3.3", tags: ["data", "states"] },
  { term: "Ciphertext", def: "Encrypted output of the encryption process — unreadable without the key", src: "objectives/3.3", srcAlias: "3.3 §The seven protection techniques", obj: "3.3", tags: ["data", "crypto"] },
  { term: "Confidential (classification)", def: "Classification level for tighter need-to-know material, often NDA-gated (strategic plans, M&A docs)", src: "objectives/3.3", srcAlias: "3.3 §Classification levels", obj: "3.3", tags: ["data", "classification"] },
  { term: "Critical (classification)", def: "Classification label emphasizing that the data must always be available — availability is the highlighted dimension", src: "objectives/3.3", srcAlias: "3.3 §Classification levels", obj: "3.3", tags: ["data", "classification"] },
  { term: "Data classification", def: "Assigning a sensitivity label (public, sensitive, private, confidential, restricted, critical) that drives access and protection rules", src: "objectives/3.3", srcAlias: "3.3 §Classification levels", obj: "3.3", tags: ["data", "classification"] },
  { term: "Data segmentation", def: "Splitting a single large data store into smaller separately-secured pieces so a breach cannot expose everything", src: "objectives/3.3", srcAlias: "3.3 §The seven protection techniques", obj: "3.3", tags: ["data", "segmentation"] },
  { term: "Data sovereignty", def: "Principle that data stored in a country is subject to that country's laws — court orders, retention rules, residency requirements (e.g., GDPR)", src: "objectives/3.3", srcAlias: "3.3 §States of data", obj: "3.3", tags: ["data", "compliance"] },
  { term: "Geofencing", def: "Access control that allows or denies based on physical location — only inside the campus, only inside the country", src: "objectives/3.3", srcAlias: "3.3 §The seven protection techniques", obj: "3.3", tags: ["data", "access-control", "location"] },
  { term: "Geographic restrictions", def: "Broader policy restricting access by geography; geofencing is the specific implementation", src: "objectives/3.3", srcAlias: "3.3 §The seven protection techniques", obj: "3.3", tags: ["data", "access-control", "location"] },
  { term: "Geolocation", def: "Determining a user's physical location using GPS, Wi-Fi SSID databases, IP subnet, or mobile-provider data", src: "objectives/3.3", srcAlias: "3.3 §The seven protection techniques", obj: "3.3", tags: ["data", "location"] },
  { term: "In transit (data)", def: "Data crossing a network — LAN, WAN, internet; protected by TLS, IPsec, and VPN tunnels", src: "objectives/3.3", srcAlias: "3.3 §States of data", obj: "3.3", tags: ["data", "states"] },
  { term: "In use (data)", def: "Data in RAM or on the CPU during processing — almost always decrypted; the state attackers target (e.g., Target POS memory scraping)", src: "objectives/3.3", srcAlias: "3.3 §States of data", obj: "3.3", tags: ["data", "states"] },
  { term: "Intellectual property (IP)", def: "Creative or inventive work owned by the organization; protected by copyright, trademark, or patent law", src: "objectives/3.3", srcAlias: "3.3 §Data types", obj: "3.3", tags: ["data", "types"] },
  { term: "Permission restrictions", def: "Per-account rights, group memberships, and ACLs that gate what an authenticated user can touch", src: "objectives/3.3", srcAlias: "3.3 §The seven protection techniques", obj: "3.3", tags: ["data", "access-control"] },
  { term: "PHI (Protected Health Information)", def: "Health-specific data tied to an identified person; HIPAA-regulated in the US — a subset of PII", src: "objectives/3.3", srcAlias: "3.3 §Data types", obj: "3.3", tags: ["data", "types", "hipaa"] },
  { term: "PII (Personally Identifiable Information)", def: "Data that points back to a specific person — name, DOB, SSN, address, biometrics", src: "objectives/3.3", srcAlias: "3.3 §Data types", obj: "3.3", tags: ["data", "types", "privacy"] },
  { term: "Plaintext", def: "Original, unencrypted data — readable as-is before encryption is applied", src: "objectives/3.3", srcAlias: "3.3 §The seven protection techniques", obj: "3.3", tags: ["data", "crypto"] },
  { term: "Private (classification)", def: "Classification level for material accessible on a need-to-know basis with permissions (e.g., employee records)", src: "objectives/3.3", srcAlias: "3.3 §Classification levels", obj: "3.3", tags: ["data", "classification"] },
  { term: "Proprietary data", def: "Data owned by and unique to a specific organization; overlaps with trade secrets and IP", src: "objectives/3.3", srcAlias: "3.3 §Data types", obj: "3.3", tags: ["data", "types"] },
  { term: "Public (classification)", def: "Classification level for data that anyone may access (marketing pages, published reports); sometimes called Unclassified", src: "objectives/3.3", srcAlias: "3.3 §Classification levels", obj: "3.3", tags: ["data", "classification"] },
  { term: "Regulated data", def: "Data whose handling rules are dictated by a third-party regulator — PCI cardholder data, HIPAA records, GDPR personal data", src: "objectives/3.3", srcAlias: "3.3 §Data types", obj: "3.3", tags: ["data", "types", "compliance"] },
  { term: "Restricted (classification)", def: "Classification level for strictly controlled data that may require clearance or NDA before access", src: "objectives/3.3", srcAlias: "3.3 §Classification levels", obj: "3.3", tags: ["data", "classification"] },
  { term: "Sensitive (classification)", def: "Classification level for material requiring limited internal access — IP, generic PII", src: "objectives/3.3", srcAlias: "3.3 §Classification levels", obj: "3.3", tags: ["data", "classification"] },
  { term: "Trade secret", def: "Internal proprietary process or formula whose protection comes from non-disclosure rather than public registration", src: "objectives/3.3", srcAlias: "3.3 §Data types", obj: "3.3", tags: ["data", "types"] },

  // ───── 3.4 — Resilience and Recovery ─────
  { term: "Backup", def: "Periodic copy of data preserved on separate media so it can be restored after loss, corruption, or compromise", src: "objectives/3.4", srcAlias: "3.4 §Backups", obj: "3.4", tags: ["resilience", "backups"] },
  { term: "Blackout", def: "Complete loss of electrical power", src: "objectives/3.4", srcAlias: "3.4 §Power resiliency", obj: "3.4", tags: ["resilience", "power"] },
  { term: "Brownout", def: "Sustained drop in line voltage below normal — lights dim, equipment may misbehave", src: "objectives/3.4", srcAlias: "3.4 §Power resiliency", obj: "3.4", tags: ["resilience", "power"] },
  { term: "Capacity planning", def: "Discipline of matching supply (people, technology, infrastructure) to expected demand without over- or under-provisioning", src: "objectives/3.4", srcAlias: "3.4 §Capacity planning", obj: "3.4", tags: ["resilience", "planning"] },
  { term: "Cold site", def: "Recovery site that is an empty building with power and lighting — cheapest, slowest to bring online, all equipment and data must be brought in", src: "objectives/3.4", srcAlias: "3.4 §Resiliency", obj: "3.4", tags: ["resilience", "dr", "sites"] },
  { term: "Continuity of operations (COOP)", def: "Pre-planned manual fallback (paper receipts, phone-in approvals) used when no technological alternative is available", src: "objectives/3.4", srcAlias: "3.4 §Resiliency", obj: "3.4", tags: ["resilience", "dr"] },
  { term: "Failover test", def: "Recovery test that triggers an actual cutover from primary to redundant systems to verify HA works", src: "objectives/3.4", srcAlias: "3.4 §Recovery testing", obj: "3.4", tags: ["resilience", "testing"] },
  { term: "Generator (power)", def: "Long-term backup power source that burns fuel; runs hours to days as long as fuel lasts", src: "objectives/3.4", srcAlias: "3.4 §Power resiliency", obj: "3.4", tags: ["resilience", "power"] },
  { term: "Geographic dispersion", def: "Placing primary and recovery sites far enough apart that a single regional disaster cannot affect both", src: "objectives/3.4", srcAlias: "3.4 §Resiliency", obj: "3.4", tags: ["resilience", "dr"] },
  { term: "Hot site", def: "Fully duplicated recovery site with current data continuously synced — cutover in hours, highest cost", src: "objectives/3.4", srcAlias: "3.4 §Resiliency", obj: "3.4", tags: ["resilience", "dr", "sites"] },
  { term: "Journaling", def: "Writing data to a separate log first and then to the database; on crash, the journal is replayed to recover incomplete transactions", src: "objectives/3.4", srcAlias: "3.4 §Backups", obj: "3.4", tags: ["resilience", "backups"] },
  { term: "Line-interactive UPS", def: "UPS that adjusts voltage during brownouts without switching to battery — useful in areas with frequent dips", src: "objectives/3.4", srcAlias: "3.4 §Power resiliency", obj: "3.4", tags: ["resilience", "power", "ups"] },
  { term: "Off-site backup", def: "Backup stored at a different physical location; survives local disasters but slower to restore", src: "objectives/3.4", srcAlias: "3.4 §Backups", obj: "3.4", tags: ["resilience", "backups"] },
  { term: "Offline / standby UPS", def: "Lower-end UPS that runs on main power and switches to battery on failure", src: "objectives/3.4", srcAlias: "3.4 §Power resiliency", obj: "3.4", tags: ["resilience", "power", "ups"] },
  { term: "Online / double-conversion UPS", def: "Highest-end UPS that always runs the load from battery, with main power continuously recharging — no switchover delay", src: "objectives/3.4", srcAlias: "3.4 §Power resiliency", obj: "3.4", tags: ["resilience", "power", "ups"] },
  { term: "On-site backup", def: "Backup stored at the same location as the primary data; fast to restore but lost if the facility is lost", src: "objectives/3.4", srcAlias: "3.4 §Backups", obj: "3.4", tags: ["resilience", "backups"] },
  { term: "Parallel processing", def: "Distributing transactions across multiple CPUs or hosts simultaneously, both for performance and to tolerate single-CPU failure", src: "objectives/3.4", srcAlias: "3.4 §Recovery testing", obj: "3.4", tags: ["resilience", "performance"] },
  { term: "Phishing simulation", def: "Controlled fake-phishing campaign sent to employees to measure click rates and target additional training", src: "objectives/3.4", srcAlias: "3.4 §Recovery testing", obj: "3.4", tags: ["resilience", "testing", "training"] },
  { term: "Platform diversity", def: "Running a mix of operating systems and platforms so a single-vendor vulnerability cannot take down everything", src: "objectives/3.4", srcAlias: "3.4 §Resiliency", obj: "3.4", tags: ["resilience"] },
  { term: "Recovery testing", def: "Regularly exercising disaster recovery plans (tabletop, simulation, failover, full restore) to confirm they actually work", src: "objectives/3.4", srcAlias: "3.4 §Recovery testing", obj: "3.4", tags: ["resilience", "testing"] },
  { term: "Redundancy", def: "Having a spare component available; weaker guarantee than HA because the spare may not be running or configured", src: "objectives/3.4", srcAlias: "3.4 §Resiliency", obj: "3.4", tags: ["resilience"] },
  { term: "Replication", def: "Near-real-time copy of data to one or more remote locations as changes occur", src: "objectives/3.4", srcAlias: "3.4 §Backups", obj: "3.4", tags: ["resilience", "backups"] },
  { term: "Resilience", def: "Ability of a system or organization to absorb a failure and continue operating, recovering quickly when something breaks", src: "objectives/3.4", srcAlias: "3.4 §The framework", obj: "3.4", tags: ["resilience", "fundamentals"] },
  { term: "Restore testing", def: "Validating that backup data not only restores but can actually be read by the application — untested backups are wishes", src: "objectives/3.4", srcAlias: "3.4 §Backups", obj: "3.4", tags: ["resilience", "backups", "testing"] },
  { term: "Server clustering", def: "Group of servers running identical OS that share state and present as one big server; supports scaling and failover", src: "objectives/3.4", srcAlias: "3.4 §Resiliency", obj: "3.4", tags: ["resilience", "ha"] },
  { term: "Site resiliency", def: "Strategy of maintaining one or more alternate physical sites (hot, warm, cold) ready to take over operations", src: "objectives/3.4", srcAlias: "3.4 §Resiliency", obj: "3.4", tags: ["resilience", "dr", "sites"] },
  { term: "Snapshot (backup)", def: "Point-in-time capture of a VM or cloud instance; initial snapshot is full, subsequent snapshots capture only changes", src: "objectives/3.4", srcAlias: "3.4 §Backups", obj: "3.4", tags: ["resilience", "backups", "virtualization"] },
  { term: "Surge (power)", def: "Excessive voltage spike above normal — can damage equipment if not suppressed", src: "objectives/3.4", srcAlias: "3.4 §Power resiliency", obj: "3.4", tags: ["resilience", "power"] },
  { term: "Tabletop exercise", def: "Verbal walkthrough of a disaster response with the team around a table; cheap recovery test that finds plan gaps", src: "objectives/3.4", srcAlias: "3.4 §Recovery testing", obj: "3.4", tags: ["resilience", "testing"] },
  { term: "UPS (Uninterruptible Power Supply)", def: "Battery-backed device that holds the load through short outages and bridges the gap to generator start-up", src: "objectives/3.4", srcAlias: "3.4 §Power resiliency", obj: "3.4", tags: ["resilience", "power", "ups"] },
  { term: "Warm site", def: "Middle-ground recovery site with some hardware and possibly some data on hand; days to bring online", src: "objectives/3.4", srcAlias: "3.4 §Resiliency", obj: "3.4", tags: ["resilience", "dr", "sites"] },

  // ───── 4.1 — Securing Computing Resources ─────
  { term: "Application monitoring", def: "Built-in instrumentation during app development that surfaces injection attempts, abnormal transfers, and unexpected access spikes at runtime", src: "objectives/4.1", srcAlias: "4.1 §Application security", obj: "4.1", tags: ["application-security", "monitoring"] },
  { term: "BYOD (Bring Your Own Device)", def: "Device-ownership model where the employee owns the device; hardest to balance corporate security against user privacy", src: "objectives/4.1", srcAlias: "4.1 §Securing wireless and mobile", obj: "4.1", tags: ["mobile", "mdm"] },
  { term: "Code signing", def: "Developer signs an application binary with a CA-backed private key so the OS can verify authenticity and integrity at install time", src: "objectives/4.1", srcAlias: "4.1 §Application security", obj: "4.1", tags: ["application-security", "crypto", "signatures"] },
  { term: "COPE (Corporate-Owned, Personally Enabled)", def: "Device-ownership model where the company owns and issues the device but permits personal use", src: "objectives/4.1", srcAlias: "4.1 §Securing wireless and mobile", obj: "4.1", tags: ["mobile", "mdm"] },
  { term: "CYOD (Choose Your Own Device)", def: "Like COPE but the employee picks the model from an approved list; company still owns the device", src: "objectives/4.1", srcAlias: "4.1 §Securing wireless and mobile", obj: "4.1", tags: ["mobile", "mdm"] },
  { term: "Dragonfly key exchange", def: "Diffie-Hellman-based handshake used by WPA3 SAE; derives unique per-session keys with no PSK hash on the wire", src: "objectives/4.1", srcAlias: "4.1 §Wireless security settings", obj: "4.1", tags: ["wireless", "crypto"] },
  { term: "GCMP (Galois Counter Mode Protocol)", def: "WPA3 encryption mode with built-in integrity (GMAC); replaces WPA2 CCMP/AES", src: "objectives/4.1", srcAlias: "4.1 §Wireless security settings", obj: "4.1", tags: ["wireless", "crypto"] },
  { term: "Group Policy", def: "Windows AD-centralized configuration that pushes security settings, login scripts, and network parameters to domain-joined devices", src: "objectives/4.1", srcAlias: "4.1 §Secure baselines", obj: "4.1", tags: ["baseline", "windows", "hardening"] },
  { term: "Hardening target", def: "A class of device or platform with its own published baseline hardening playbook (workstation, server, switch, mobile, SCADA, IoT, embedded)", src: "objectives/4.1", srcAlias: "4.1 §Hardening targets — the per-platform playbook", obj: "4.1", tags: ["hardening", "baseline"] },
  { term: "Heat map (wireless)", def: "Visual signal-strength overlay on a floor plan; shows coverage gaps and overlap before AP placement", src: "objectives/4.1", srcAlias: "4.1 §Securing wireless and mobile", obj: "4.1", tags: ["wireless", "survey"] },
  { term: "Input validation", def: "Developer checks on user input against expected format (length, character set, range) — primary defense against injection attacks", src: "objectives/4.1", srcAlias: "4.1 §Application security", obj: "4.1", tags: ["application-security"] },
  { term: "MDM (Mobile Device Manager)", def: "Central management plane for fleet-wide mobile policy — apps, screen lock, camera disable, data partitioning", src: "objectives/4.1", srcAlias: "4.1 §Securing wireless and mobile", obj: "4.1", tags: ["mobile", "mdm"] },
  { term: "Microsoft Security Compliance Toolkit (SCT)", def: "Microsoft-published baseline templates and tools to evaluate and deploy hardened Group Policy settings", src: "objectives/4.1", srcAlias: "4.1 §Secure baselines", obj: "4.1", tags: ["baseline", "windows", "tools"] },
  { term: "Pre-shared key (PSK)", def: "Shared passphrase used by WPA-Personal so all clients on the network share one secret to join", src: "objectives/4.1", srcAlias: "4.1 §Wireless security settings", obj: "4.1", tags: ["wireless", "authentication"] },
  { term: "Runtime application sandbox", def: "Restricted execution environment limiting what a running app can see — used by VMs, mobile OSes, and browsers", src: "objectives/4.1", srcAlias: "4.1 §Application security", obj: "4.1", tags: ["application-security", "sandbox"] },
  { term: "SAE (Simultaneous Authentication of Equals)", def: "WPA3 handshake (also called Dragonfly) that derives per-session keys with no offline-crackable handshake on the wire", src: "objectives/4.1", srcAlias: "4.1 §Wireless security settings", obj: "4.1", tags: ["wireless", "crypto", "authentication"] },
  { term: "Secure baseline", def: "Agreed-upon set of security settings (OS hardening, patch level, firewall, permissions, app config) that all instances are measured against", src: "objectives/4.1", srcAlias: "4.1 §Secure baselines", obj: "4.1", tags: ["baseline", "hardening"] },
  { term: "Secure cookie", def: "Cookie attribute that requires the cookie to travel only over HTTPS, preventing exposure on cleartext HTTP", src: "objectives/4.1", srcAlias: "4.1 §Application security", obj: "4.1", tags: ["application-security", "web"] },
  { term: "Site survey", def: "Pre-deployment RF inventory identifying existing APs, channels, and interference so new APs can be placed without conflict", src: "objectives/4.1", srcAlias: "4.1 §Securing wireless and mobile", obj: "4.1", tags: ["wireless", "survey"] },
  { term: "Spectrum analyzer", def: "RF tool that detects non-Wi-Fi interferers on the same frequencies as wireless networks (microwaves, Bluetooth, baby monitors)", src: "objectives/4.1", srcAlias: "4.1 §Securing wireless and mobile", obj: "4.1", tags: ["wireless", "tools"] },
  { term: "WPA2", def: "Older Wi-Fi Protected Access standard using CCMP/AES and a 4-way handshake; vulnerable to offline brute-force after handshake capture", src: "objectives/4.1", srcAlias: "4.1 §Wireless security settings", obj: "4.1", tags: ["wireless", "crypto", "deprecated"] },
  { term: "WPA3-Enterprise", def: "WPA3 mode using 802.1X with a backend RADIUS server for per-user credentials in corporate environments", src: "objectives/4.1", srcAlias: "4.1 §Wireless security settings", obj: "4.1", tags: ["wireless", "authentication", "enterprise"] },
  { term: "WPA3-Personal", def: "WPA3 mode using a shared PSK with SAE so every client derives a unique session key from the same passphrase", src: "objectives/4.1", srcAlias: "4.1 §Wireless security settings", obj: "4.1", tags: ["wireless", "authentication"] },

  // ───── 4.2 — Asset Management ─────
  { term: "Acquisition (asset)", def: "First phase of the asset lifecycle covering need identification, budget approval, vendor negotiation, and delivery", src: "objectives/4.2", srcAlias: "4.2 §Procurement and acquisition", obj: "4.2", tags: ["assets", "lifecycle"] },
  { term: "Asset tag", def: "Physical label (barcode, RFID, or numeric) tying a device back to its tracking-system record and named owner", src: "objectives/4.2", srcAlias: "4.2 §Tracking, ownership, and enumeration", obj: "4.2", tags: ["assets", "tracking"] },
  { term: "Capital expenditure (CapEx)", def: "Asset purchase that depreciates over time — the tax treatment typical for hardware", src: "objectives/4.2", srcAlias: "4.2 §Tracking, ownership, and enumeration", obj: "4.2", tags: ["assets", "finance"] },
  { term: "Certificate of Destruction", def: "Document from a third-party destruction service attesting that specific media was destroyed, with serial numbers and method", src: "objectives/4.2", srcAlias: "4.2 §Sanitization and disposal", obj: "4.2", tags: ["assets", "disposal", "compliance"] },
  { term: "Data retention", def: "Policy and practice of keeping data long enough to satisfy regulation, lawsuit, or business need — and deleting it when the period ends", src: "objectives/4.2", srcAlias: "4.2 §Data retention", obj: "4.2", tags: ["assets", "data", "compliance"] },
  { term: "Degaussing", def: "Using a strong electromagnet to erase data on magnetic hard drives; the drive itself becomes unusable and the technique does NOT work on SSDs", src: "objectives/4.2", srcAlias: "4.2 §Sanitization and disposal", obj: "4.2", tags: ["assets", "disposal", "destruction"] },
  { term: "Enumeration (asset)", def: "Breaking a single asset record (e.g., desktop) into its components (CPU, RAM, drives) for help-desk lookup and security tracking", src: "objectives/4.2", srcAlias: "4.2 §Tracking, ownership, and enumeration", obj: "4.2", tags: ["assets", "tracking"] },
  { term: "Incineration", def: "Burning media to ash; absolute end state for sensitive data destruction", src: "objectives/4.2", srcAlias: "4.2 §Sanitization and disposal", obj: "4.2", tags: ["assets", "disposal", "destruction"] },
  { term: "Operating expense (OpEx)", def: "Asset purchase expensed in the year of purchase — the tax treatment typical for software", src: "objectives/4.2", srcAlias: "4.2 §Tracking, ownership, and enumeration", obj: "4.2", tags: ["assets", "finance"] },
  { term: "Owner (asset)", def: "Named person in the asset tracking system responsible for a device — visited when the device needs change or audit", src: "objectives/4.2", srcAlias: "4.2 §Tracking, ownership, and enumeration", obj: "4.2", tags: ["assets", "tracking"] },
  { term: "Procurement", def: "Formal acquisition process — need approval, budget check, vendor negotiation, invoice; where security requirements get baked into contracts", src: "objectives/4.2", srcAlias: "4.2 §Procurement and acquisition", obj: "4.2", tags: ["assets", "lifecycle"] },
  { term: "Sanitization", def: "Making data unrecoverable while leaving the drive usable — secure delete, cryptographic wipe, secure overwrite; used for reuse", src: "objectives/4.2", srcAlias: "4.2 §Sanitization and disposal", obj: "4.2", tags: ["assets", "disposal"] },
  { term: "Secure delete (cryptographic wipe)", def: "Sanitization technique that erases or overwrites the encryption key so all ciphertext on the drive becomes unreadable", src: "objectives/4.2", srcAlias: "4.2 §Sanitization and disposal", obj: "4.2", tags: ["assets", "disposal", "crypto"] },
  { term: "Shredding (media)", def: "Physical destruction technique reducing drives to small fragments that cannot be reassembled", src: "objectives/4.2", srcAlias: "4.2 §Sanitization and disposal", obj: "4.2", tags: ["assets", "disposal", "destruction"] },

  // ───── 4.3 — Vulnerability Management ─────
  { term: "Bug bounty", def: "Formal program rewarding researchers for privately reporting vulnerabilities to the vendor before public disclosure", src: "objectives/4.3", srcAlias: "4.3 §Penetration testing", obj: "4.3", tags: ["vulnerabilities", "disclosure"] },
  { term: "CVSS (Common Vulnerability Scoring System)", def: "FIRST-maintained 0-10 numeric severity score for vulnerabilities; CVSS 2.0 and 3.x are both in current use", src: "objectives/4.3", srcAlias: "4.3 §Analyzing vulnerabilities", obj: "4.3", tags: ["vulnerabilities", "scoring"] },
  { term: "Cyber Threat Alliance (CTA)", def: "Information-sharing alliance where member organizations pool threat intelligence across networks", src: "objectives/4.3", srcAlias: "4.3 §Threat intelligence", obj: "4.3", tags: ["threat-intel", "sharing"] },
  { term: "Cybersecurity insurance", def: "Risk-transference policy covering revenue loss, recovery costs, phishing fraud, and breach liability — typically excludes intentional acts", src: "objectives/4.3", srcAlias: "4.3 §Vulnerability remediation", obj: "4.3", tags: ["vulnerabilities", "risk", "insurance"] },
  { term: "Dark web", def: "Network reachable only via specialized software (Tor) where attackers trade exploits and stolen data; monitored for leaked credentials and chatter", src: "objectives/4.3", srcAlias: "4.3 §Threat intelligence", obj: "4.3", tags: ["threat-intel"] },
  { term: "Environmental factor (vulnerability)", def: "Context that adjusts a finding's priority — internet exposure, user count, revenue impact, exploit complexity", src: "objectives/4.3", srcAlias: "4.3 §Analyzing vulnerabilities", obj: "4.3", tags: ["vulnerabilities", "risk"] },
  { term: "Exception (vulnerability)", def: "Formal committee decision NOT to patch a specific system, justified by limited exposure or critical conflicts; documented and revisited", src: "objectives/4.3", srcAlias: "4.3 §Vulnerability remediation", obj: "4.3", tags: ["vulnerabilities", "governance"] },
  { term: "Exposure factor (EF)", def: "Percentage of system or service impact if a vulnerability is exploited; combined with CVSS and environment to drive priority", src: "objectives/4.3", srcAlias: "4.3 §Analyzing vulnerabilities", obj: "4.3", tags: ["vulnerabilities", "risk"] },
  { term: "False negative", def: "Vulnerability scanner MISSES a real vulnerability — more dangerous than a false positive because the gap remains unknown", src: "objectives/4.3", srcAlias: "4.3 §Analyzing vulnerabilities", obj: "4.3", tags: ["vulnerabilities", "scanning"] },
  { term: "False positive", def: "Vulnerability scanner reports a finding that does not actually exist — wastes triage time but does not leave a hole", src: "objectives/4.3", srcAlias: "4.3 §Analyzing vulnerabilities", obj: "4.3", tags: ["vulnerabilities", "scanning"] },
  { term: "Lateral movement", def: "Pen-test or attack phase of using a foothold to reach other internal systems via pivoting, relays, and proxies", src: "objectives/4.3", srcAlias: "4.3 §Penetration testing", obj: "4.3", tags: ["pentest", "attacks"] },
  { term: "NIST SP 800-115", def: "Technical Guide to Information Security Testing and Assessment — the standard reference for penetration-testing methodology", src: "objectives/4.3", srcAlias: "4.3 §Penetration testing", obj: "4.3", tags: ["pentest", "standards"] },
  { term: "NVD (National Vulnerability Database)", def: "NIST-maintained database synchronized with CVE that adds analysis and CVSS scores for each entry", src: "objectives/4.3", srcAlias: "4.3 §Analyzing vulnerabilities", obj: "4.3", tags: ["vulnerabilities", "reference"] },
  { term: "OSINT (Open-Source Intelligence)", def: "Publicly available threat intelligence from discussion groups, government reports, news, and social media; free to access", src: "objectives/4.3", srcAlias: "4.3 §Threat intelligence", obj: "4.3", tags: ["threat-intel", "osint"] },
  { term: "Penetration test", def: "Simulated attack that actually exploits vulnerabilities (not just observes them) to measure real impact and gain footholds", src: "objectives/4.3", srcAlias: "4.3 §Penetration testing", obj: "4.3", tags: ["pentest"] },
  { term: "Persistence (pen test)", def: "Establishing a back door, account, or modified credential so the attacker can return without re-using the original exploit", src: "objectives/4.3", srcAlias: "4.3 §Penetration testing", obj: "4.3", tags: ["pentest"] },
  { term: "Pivoting", def: "Using a compromised system as a relay or proxy to reach further internal systems during a pen test or attack", src: "objectives/4.3", srcAlias: "4.3 §Penetration testing", obj: "4.3", tags: ["pentest", "attacks"] },
  { term: "Responsible disclosure", def: "Discovery-to-disclosure lifecycle: report to vendor privately, vendor builds and ships a patch, then the vulnerability is publicly disclosed with a CVE", src: "objectives/4.3", srcAlias: "4.3 §Penetration testing", obj: "4.3", tags: ["vulnerabilities", "disclosure"] },
  { term: "Risk tolerance", def: "How much risk an organization is willing to accept while testing patches or running exposed systems — drives patch-cycle pace", src: "objectives/4.3", srcAlias: "4.3 §Analyzing vulnerabilities", obj: "4.3", tags: ["vulnerabilities", "risk"] },
  { term: "Rules of Engagement (RoE)", def: "Written pre-test agreement defining timing, scope, contact list, and out-of-bounds systems for a penetration test", src: "objectives/4.3", srcAlias: "4.3 §Penetration testing", obj: "4.3", tags: ["pentest", "governance"] },
  { term: "SAST (Static Application Security Testing)", def: "Analysis of source code for known-bad patterns — unsafe functions, unbounded buffers, SQL string concatenation; misses design and runtime issues", src: "objectives/4.3", srcAlias: "4.3 §Vulnerability scanning", obj: "4.3", tags: ["vulnerabilities", "scanning", "application-security"] },
  { term: "Threat intelligence", def: "Information about emerging attacks, actors, and techniques used to inform patching, scanning, and blocking decisions", src: "objectives/4.3", srcAlias: "4.3 §Threat intelligence", obj: "4.3", tags: ["threat-intel"] },
  { term: "Vulnerability scan", def: "Automated check that looks for the POTENTIAL of an attack (versions, configs, CVE matches) without actually exploiting", src: "objectives/4.3", srcAlias: "4.3 §Vulnerability scanning", obj: "4.3", tags: ["vulnerabilities", "scanning"] },

  // ───── 4.4 — Security Alerting and Monitoring ─────
  { term: "Agent-based monitoring", def: "Persistent software installed on the system that continuously monitors and reports; adds install and update burden", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["monitoring", "endpoint"] },
  { term: "Agentless monitoring", def: "Monitoring that runs in memory during login or connection then removes itself; no install burden but no continuous coverage", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["monitoring", "endpoint"] },
  { term: "Alert tuning", def: "Iterative reduction of false-positive noise in alerting rules while preserving real signals — start broad, narrow as patterns emerge", src: "objectives/4.4", srcAlias: "4.4 §Monitoring concepts", obj: "4.4", tags: ["monitoring", "alerting"] },
  { term: "CIS Benchmarks", def: "Widely-cited library of vetted secure baseline configurations for operating systems, applications, mobile platforms, and cloud services", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["baseline", "standards"] },
  { term: "Cloud DLP", def: "Data Loss Prevention scanning files at rest in SaaS or object storage (Salesforce, M365, S3) before sensitive content persists", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["dlp", "cloud"] },
  { term: "DLP (Data Loss Prevention)", def: "System that detects and blocks sensitive data (SSNs, PHI, card numbers) in motion or at rest", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["dlp", "data"] },
  { term: "Endpoint DLP", def: "DLP agent on the workstation watching data in use — clipboard, USB writes, screen captures", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["dlp", "endpoint"] },
  { term: "MIB (Management Information Base)", def: "Database of metrics on an SNMP-managed device, navigated by OIDs", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["snmp", "monitoring"] },
  { term: "NetFlow", def: "Flow-based traffic telemetry that records source, destination, ports, bytes, and application — answers who talked to whom and how much", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["netflow", "monitoring"] },
  { term: "Network DLP", def: "DLP appliance (or NGFW-integrated function) inspecting data in motion across the network", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["dlp", "network"] },
  { term: "OID (Object Identifier)", def: "Numeric address of a specific metric within an SNMP MIB", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["snmp", "monitoring"] },
  { term: "Quarantine (response)", def: "Automated alert response that isolates an affected host so it cannot reach other systems or exfiltrate data while remaining up for forensic analysis", src: "objectives/4.4", srcAlias: "4.4 §Monitoring concepts", obj: "4.4", tags: ["monitoring", "incident-response"] },
  { term: "SCAP (Security Content Automation Protocol)", def: "NIST-maintained protocol standardizing how vulnerabilities are named and described across firewalls, IPSes, scanners, and SIEMs — a common vocabulary", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["standards", "monitoring"] },
  { term: "SNMP (Simple Network Management Protocol)", def: "Classic device-monitoring protocol using polling (UDP 161) and traps (UDP 162) against a per-device MIB", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["snmp", "monitoring"] },
  { term: "SNMP polling", def: "Pull-based SNMP query from a management station to a device on a schedule, over UDP 161", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["snmp", "monitoring"] },
  { term: "SNMP trap", def: "Push-based, event-driven notification from a device to the management station, over UDP 162", src: "objectives/4.4", srcAlias: "4.4 §Monitoring tools", obj: "4.4", tags: ["snmp", "monitoring"] },

  // ───── 4.5 — Enterprise Capabilities ─────
  { term: "Active Directory (AD)", def: "Microsoft-centralized database of users, computers, shares, printers, and security groups used for authentication and policy enforcement", src: "objectives/4.5", srcAlias: "4.5 §OS-level access controls", obj: "4.5", tags: ["iam", "windows", "directory"] },
  { term: "Antivirus (AV)", def: "Signature-based endpoint detection of known viruses, worms, Trojans, ransomware, and fileless malware — foundational but not sufficient alone", src: "objectives/4.5", srcAlias: "4.5 §Endpoint security — AV vs EDR vs XDR", obj: "4.5", tags: ["endpoint", "av"] },
  { term: "DKIM (DomainKeys Identified Mail)", def: "Outgoing mail server attaches a digital signature using its private key; the matching public key is published as a DNS TXT record for receivers to verify", src: "objectives/4.5", srcAlias: "4.5 §Email security — SPF, DKIM, DMARC", obj: "4.5", tags: ["email-security", "dkim", "signatures"] },
  { term: "DMARC (Domain-based Message Authentication, Reporting, and Conformance)", def: "DNS TXT record telling receivers what to do when SPF or DKIM fails (accept, quarantine, reject) and where to send compliance reports", src: "objectives/4.5", srcAlias: "4.5 §Email security — SPF, DKIM, DMARC", obj: "4.5", tags: ["email-security", "dmarc"] },
  { term: "DNS filtering", def: "Block malicious FQDNs at the resolver by returning no IP or a sinkhole; works for any DNS-using traffic, including malware reaching C2", src: "objectives/4.5", srcAlias: "4.5 §Web filtering", obj: "4.5", tags: ["filtering", "dns", "network"] },
  { term: "Email DLP", def: "Outbound (and inbound) email scanning for sensitive content — SSNs, PHI, hidden spreadsheet data; would have caught the 2016 Boeing PII exfiltration", src: "objectives/4.5", srcAlias: "4.5 §Monitoring data — FIM and DLP", obj: "4.5", tags: ["dlp", "email-security"] },
  { term: "File Integrity Monitoring (FIM)", def: "Continuous watch on application binaries, libraries, and critical OS files for unexpected change; sfc on Windows, Tripwire on Linux, HIPS-integrated cross-platform", src: "objectives/4.5", srcAlias: "4.5 §Monitoring data — FIM and DLP", obj: "4.5", tags: ["monitoring", "integrity", "endpoint"] },
  { term: "Implicit deny", def: "Default firewall rule at the bottom of the rule set that drops anything not matched by an earlier explicit allow", src: "objectives/4.5", srcAlias: "4.5 §Firewalls", obj: "4.5", tags: ["firewall", "rules"] },
  { term: "Mail gateway", def: "Email security gatekeeper that receives mail, evaluates SPF/DKIM/DMARC, and decides inbox vs spam vs reject; on-prem in a DMZ or cloud-hosted", src: "objectives/4.5", srcAlias: "4.5 §Email security — SPF, DKIM, DMARC", obj: "4.5", tags: ["email-security", "gateway"] },
  { term: "POP3S", def: "POP3 over TLS (TCP 995); secure replacement for cleartext POP3 on TCP 110", src: "objectives/4.5", srcAlias: "4.5 §Secure protocols — replace cleartext", obj: "4.5", tags: ["secure-protocols", "email"] },
  { term: "Rule processing (firewall)", def: "Top-down evaluation in which the first matching rule wins; more-specific rules go above, more-general rules below", src: "objectives/4.5", srcAlias: "4.5 §Firewalls", obj: "4.5", tags: ["firewall", "rules"] },
  { term: "Screened subnet (DMZ)", def: "Public-facing network segment behind the perimeter firewall hosting services the internet can reach without crossing into Internal", src: "objectives/4.5", srcAlias: "4.5 §Firewalls", obj: "4.5", tags: ["firewall", "zones"] },
  { term: "SELinux", def: "Mandatory access control extension for Linux where a central administrator defines policy that users cannot override — replaces default DAC behavior", src: "objectives/4.5", srcAlias: "4.5 §OS-level access controls", obj: "4.5", tags: ["mac", "linux", "access-control"] },
  { term: "SFTP (SSH File Transfer Protocol)", def: "File transfer over SSH (TCP 22); secure replacement for cleartext FTP on TCP 21", src: "objectives/4.5", srcAlias: "4.5 §Secure protocols — replace cleartext", obj: "4.5", tags: ["secure-protocols", "transfer"] },
  { term: "SMTPS", def: "SMTP over TLS (TCP 465 or 587 with STARTTLS); secure replacement for cleartext SMTP on TCP 25", src: "objectives/4.5", srcAlias: "4.5 §Secure protocols — replace cleartext", obj: "4.5", tags: ["secure-protocols", "email"] },
  { term: "SPF (Sender Policy Framework)", def: "DNS TXT record listing the servers authorized to send mail for a domain; receivers verify the sending IP is approved", src: "objectives/4.5", srcAlias: "4.5 §Email security — SPF, DKIM, DMARC", obj: "4.5", tags: ["email-security", "spf"] },
  { term: "System File Checker (sfc)", def: "Windows on-demand utility that scans protected system files against known-good signatures and replaces bad copies", src: "objectives/4.5", srcAlias: "4.5 §Monitoring data — FIM and DLP", obj: "4.5", tags: ["fim", "windows", "tools"] },
  { term: "Tripwire", def: "Linux file-integrity monitoring tool that continuously watches critical files and alerts on change", src: "objectives/4.5", srcAlias: "4.5 §Monitoring data — FIM and DLP", obj: "4.5", tags: ["fim", "linux", "tools"] },
  { term: "URL filter", def: "Web-filtering mechanism that allows or blocks browser traffic based on category and reputation rules", src: "objectives/4.5", srcAlias: "4.5 §Web filtering", obj: "4.5", tags: ["filtering", "web"] },
  { term: "URL reputation", def: "Auto-assigned score (trustworthy, low/medium-risk, suspicious, high-risk) used alongside URL category to set per-site filtering policy", src: "objectives/4.5", srcAlias: "4.5 §Web filtering", obj: "4.5", tags: ["filtering", "web"] },
  { term: "USB DLP", def: "Restriction of removable USB storage to prevent data exfiltration or air-gap-bridging attacks (e.g., 2008 DoD agent.btz worm)", src: "objectives/4.5", srcAlias: "4.5 §Monitoring data — FIM and DLP", obj: "4.5", tags: ["dlp", "endpoint", "usb"] },
  { term: "User Behavior Analytics (UBA)", def: "Baseline-of-normal-activity engine in XDR that alerts on deviations from each user's typical patterns", src: "objectives/4.5", srcAlias: "4.5 §Endpoint security — AV vs EDR vs XDR", obj: "4.5", tags: ["xdr", "behavioral"] },
  { term: "XDR (Extended Detection and Response)", def: "Endpoint security that correlates EDR telemetry across many endpoints with network, identity, and cloud signals for cross-system detection", src: "objectives/4.5", srcAlias: "4.5 §Endpoint security — AV vs EDR vs XDR", obj: "4.5", tags: ["endpoint", "xdr"] },

  // ───── 4.6 — Identity and Access Management ─────
  { term: "ABAC (Attribute-Based Access Control)", def: "Newest access-control model combining multiple attributes (role, device posture, time, location, action) into a single per-request policy decision", src: "objectives/4.6", srcAlias: "4.6 §Access-control models", obj: "4.6", tags: ["iam", "access-control"] },
  { term: "Attestation (identity proofing)", def: "Final step of identity proofing that verifies the claimed identity using authoritative evidence — government ID, in-person meeting, or automated KBA", src: "objectives/4.6", srcAlias: "4.6 §The IAM lifecycle", obj: "4.6", tags: ["iam", "identity-proofing"] },
  { term: "Authentication factor", def: "A category of evidence presented at login — something you know, have, are, or somewhere you are", src: "objectives/4.6", srcAlias: "4.6 §Multifactor authentication (MFA)", obj: "4.6", tags: ["iam", "mfa"] },
  { term: "Biometric authentication", def: "Authentication using a stored mathematical template of a fingerprint, face, voice, or iris — cannot be revoked, usually paired with another factor", src: "objectives/4.6", srcAlias: "4.6 §Multifactor authentication (MFA)", obj: "4.6", tags: ["iam", "mfa", "biometrics"] },
  { term: "DAC (Discretionary Access Control)", def: "Access-control model where the data owner decides who else can read or modify their resources; maximum flexibility, minimum central oversight", src: "objectives/4.6", srcAlias: "4.6 §Access-control models", obj: "4.6", tags: ["iam", "access-control"] },
  { term: "De-provisioning", def: "IAM lifecycle step that deactivates or deletes a user account on offboarding, transfer, or role change — missed steps leave orphan access", src: "objectives/4.6", srcAlias: "4.6 §The IAM lifecycle", obj: "4.6", tags: ["iam", "lifecycle"] },
  { term: "Directory Information Tree (DIT)", def: "LDAP hierarchical structure of containers (country, organization, OU) and leaf objects (users, devices)", src: "objectives/4.6", srcAlias: "4.6 §Authentication protocols", obj: "4.6", tags: ["iam", "ldap"] },
  { term: "Distinguished Name (DN)", def: "LDAP identifier built from attribute=value pairs (CN, OU, O, C) that uniquely names an object within the directory tree", src: "objectives/4.6", srcAlias: "4.6 §Authentication protocols", obj: "4.6", tags: ["iam", "ldap"] },
  { term: "Entropy (password)", def: "How unpredictable a password is; raised more by length than by complexity rules", src: "objectives/4.6", srcAlias: "4.6 §Password security", obj: "4.6", tags: ["iam", "passwords"] },
  { term: "Federation", def: "Architectural choice to accept identities issued by a partner IdP (Google, Microsoft, Okta) instead of creating local accounts; SAML and OAuth/OpenID implement it", src: "objectives/4.6", srcAlias: "4.6 §Authentication protocols", obj: "4.6", tags: ["iam", "federation"] },
  { term: "Hardware token", def: "Physical device displaying a rotating code; specific to the user — a something-you-have factor", src: "objectives/4.6", srcAlias: "4.6 §Multifactor authentication (MFA)", obj: "4.6", tags: ["iam", "mfa", "tokens"] },
  { term: "IAM (Identity and Access Management)", def: "Full arc of giving the right access to the right person at the right time — provisioning, change, de-provisioning, with proofing and access controls", src: "objectives/4.6", srcAlias: "4.6 §The IAM lifecycle", obj: "4.6", tags: ["iam", "fundamentals"] },
  { term: "Identity proofing", def: "Verifying the human behind a new account request via three steps — resolution, validation, attestation — before provisioning", src: "objectives/4.6", srcAlias: "4.6 §The IAM lifecycle", obj: "4.6", tags: ["iam", "identity-proofing"] },
  { term: "Just-in-time (JIT) permissions", def: "Pattern where a vault issues short-lived, scoped credentials for a specific task; primary admin credentials are never handed out", src: "objectives/4.6", srcAlias: "4.6 §Password security", obj: "4.6", tags: ["iam", "passwords", "privileged-access"] },
  { term: "LDAP (Lightweight Directory Access Protocol)", def: "Protocol for reading large directories of users, groups, and devices; standardized by X.500 and implemented by Active Directory", src: "objectives/4.6", srcAlias: "4.6 §Authentication protocols", obj: "4.6", tags: ["iam", "ldap", "directory"] },
  { term: "MAC (Mandatory Access Control)", def: "Access-control model where the administrator assigns clearance labels to data and users; users cannot grant or change access to their own files", src: "objectives/4.6", srcAlias: "4.6 §Access-control models", obj: "4.6", tags: ["iam", "access-control"] },
  { term: "MFA (Multifactor Authentication)", def: "Two or more authentication factors from DIFFERENT categories; password plus security question is single-factor, not MFA", src: "objectives/4.6", srcAlias: "4.6 §Multifactor authentication (MFA)", obj: "4.6", tags: ["iam", "mfa", "authentication"] },
  { term: "OAuth", def: "Authorization framework that issues scoped tokens letting a third-party app act on a user's behalf; pairs with OpenID Connect for authentication", src: "objectives/4.6", srcAlias: "4.6 §Authentication protocols", obj: "4.6", tags: ["iam", "oauth", "authorization"] },
  { term: "OpenID Connect", def: "Authentication layer built on top of OAuth that adds identity assertions to the authorization flow", src: "objectives/4.6", srcAlias: "4.6 §Authentication protocols", obj: "4.6", tags: ["iam", "openid", "authentication"] },
  { term: "Password manager", def: "Encrypted vault storing per-site credentials, unlocked by a master password (often plus MFA); generates strong unique passwords and flags reuse", src: "objectives/4.6", srcAlias: "4.6 §Password security", obj: "4.6", tags: ["iam", "passwords"] },
  { term: "Passwordless authentication", def: "Login that removes user-typed passwords in favor of PINs, biometrics, or hardware keys — Windows Hello, FIDO2, mobile face/touch unlock", src: "objectives/4.6", srcAlias: "4.6 §Password security", obj: "4.6", tags: ["iam", "passwords", "passwordless"] },
  { term: "Provisioning", def: "Core IAM operation that creates a user account, assigns group membership, and applies baseline permissions at onboarding", src: "objectives/4.6", srcAlias: "4.6 §The IAM lifecycle", obj: "4.6", tags: ["iam", "lifecycle"] },
  { term: "RBAC (Role-Based Access Control)", def: "Access-control model where permissions attach to roles (Manager, Director, Shipping Clerk); users inherit permissions by role membership", src: "objectives/4.6", srcAlias: "4.6 §Access-control models", obj: "4.6", tags: ["iam", "access-control"] },
  { term: "Resolution (identity proofing)", def: "First step of identity proofing that uniquely identifies a candidate by name, employee ID, or applicant ID", src: "objectives/4.6", srcAlias: "4.6 §The IAM lifecycle", obj: "4.6", tags: ["iam", "identity-proofing"] },
  { term: "Rule-based access control", def: "Access-control model where the administrator attaches rules to objects (time-of-day, browser, source IP); users do not own or modify the rules", src: "objectives/4.6", srcAlias: "4.6 §Access-control models", obj: "4.6", tags: ["iam", "access-control"] },
  { term: "SAML (Security Assertion Markup Language)", def: "Three-party browser SSO using signed XML assertions between client, resource server, and authorization server; designed before mobile and clunky there", src: "objectives/4.6", srcAlias: "4.6 §Authentication protocols", obj: "4.6", tags: ["iam", "saml", "sso"] },
  { term: "Smart card", def: "Card with an embedded chip carrying a certificate and identity; typically inserted plus PIN — a something-you-have factor", src: "objectives/4.6", srcAlias: "4.6 §Multifactor authentication (MFA)", obj: "4.6", tags: ["iam", "mfa", "tokens"] },
  { term: "Software token", def: "TOTP authenticator app on a mobile phone (Google Authenticator, Authy); the phone itself counts as something-you-have", src: "objectives/4.6", srcAlias: "4.6 §Multifactor authentication (MFA)", obj: "4.6", tags: ["iam", "mfa", "tokens"] },
  { term: "Something you are", def: "Biometric authentication factor — fingerprint, voice, face, iris", src: "objectives/4.6", srcAlias: "4.6 §Multifactor authentication (MFA)", obj: "4.6", tags: ["iam", "mfa", "biometrics"] },
  { term: "Something you have", def: "Possession-based authentication factor — smart card, USB security key, hardware token, software token on a phone, SMS code", src: "objectives/4.6", srcAlias: "4.6 §Multifactor authentication (MFA)", obj: "4.6", tags: ["iam", "mfa"] },
  { term: "Something you know", def: "Knowledge-based authentication factor — password, PIN, unlock pattern, security question answer", src: "objectives/4.6", srcAlias: "4.6 §Multifactor authentication (MFA)", obj: "4.6", tags: ["iam", "mfa"] },
  { term: "Somewhere you are", def: "Location-based authentication factor combining GPS and IP geolocation; commonly used for impossible-travel detection", src: "objectives/4.6", srcAlias: "4.6 §Multifactor authentication (MFA)", obj: "4.6", tags: ["iam", "mfa", "location"] },
  { term: "SSO (Single Sign-On)", def: "Log in once and gain access to all authorized resources for the session; requires underlying authentication and authorization protocols that support it", src: "objectives/4.6", srcAlias: "4.6 §Authentication protocols", obj: "4.6", tags: ["iam", "sso", "authentication"] },
  { term: "TOTP (Time-based One-Time Password)", def: "Algorithm generating short-lived numeric codes for MFA, synchronized between an authenticator app and the server", src: "objectives/4.6", srcAlias: "4.6 §Multifactor authentication (MFA)", obj: "4.6", tags: ["iam", "mfa", "tokens"] },
  { term: "USB security key", def: "Hardware key carrying a per-user certificate; physical possession proves identity — a something-you-have factor (e.g., YubiKey)", src: "objectives/4.6", srcAlias: "4.6 §Multifactor authentication (MFA)", obj: "4.6", tags: ["iam", "mfa", "tokens"] },
  { term: "Validation (identity proofing)", def: "Middle step of identity proofing that captures what the user knows or possesses — password choice, security questions, one-time codes", src: "objectives/4.6", srcAlias: "4.6 §The IAM lifecycle", obj: "4.6", tags: ["iam", "identity-proofing"] },
  { term: "X.500", def: "ITU-T specification that LDAP implements; defines directory structure, distinguished names, and the attribute-value notation", src: "objectives/4.6", srcAlias: "4.6 §Authentication protocols", obj: "4.6", tags: ["iam", "ldap", "standards"] },

  // ───── 4.7 — Automation and Orchestration ─────
  { term: "API integration (automation)", def: "Scripts calling exposed APIs on cloud, firewall, and identity systems to make programmatic changes without GUI clicks", src: "objectives/4.7", srcAlias: "4.7 §Why automate — the benefit ledger", obj: "4.7", tags: ["automation", "api"] },
  { term: "Continuous deployment (CD)", def: "Automated push of code changes through build, test, and deploy stages so applications ship frequently with minimal manual intervention", src: "objectives/4.7", srcAlias: "4.7 §Why automate — the benefit ledger", obj: "4.7", tags: ["automation", "cicd"] },
  { term: "Guard rails", def: "Automated verification of human input that blocks catastrophic typos or out-of-scope commands before they execute on a system", src: "objectives/4.7", srcAlias: "4.7 §Why automate — the benefit ledger", obj: "4.7", tags: ["automation", "guard-rails"] },
  { term: "Help-desk automation", def: "Email-to-ticket conversion, classification, routing, and self-resolution of known patterns (e.g., password reset) with escalation when needed", src: "objectives/4.7", srcAlias: "4.7 §Why automate — the benefit ledger", obj: "4.7", tags: ["automation", "service-desk"] },
  { term: "Onboarding automation", def: "Scripted creation of accounts, group memberships, home directories, and access provisioning when a new employee joins", src: "objectives/4.7", srcAlias: "4.7 §Why automate — the benefit ledger", obj: "4.7", tags: ["automation", "iam"] },
  { term: "Orchestration", def: "Coordinated automation across many systems — patches, configs, scaling, security tooling — driven from a central plane", src: "objectives/4.7", srcAlias: "4.7 §Why automate — the benefit ledger", obj: "4.7", tags: ["automation", "orchestration"] },
  { term: "Patch automation", def: "Scripts that watch a deployment folder for new patches and push them to all systems that need them, enforcing the security baseline", src: "objectives/4.7", srcAlias: "4.7 §Why automate — the benefit ledger", obj: "4.7", tags: ["automation", "patching"] },
  { term: "Scripting", def: "Encoding repeatable tasks into code that runs without human intervention — fast, consistent, and able to enforce security baselines at scale", src: "objectives/4.7", srcAlias: "4.7 §Why automate — the benefit ledger", obj: "4.7", tags: ["automation", "scripting"] },
  { term: "Security group monitoring (automation)", def: "Real-time alert when membership changes in sensitive groups (Domain Admins, root, AWS root) — catches legitimate and malicious privilege adds", src: "objectives/4.7", srcAlias: "4.7 §Why automate — the benefit ledger", obj: "4.7", tags: ["automation", "monitoring"] },
  { term: "Single point of failure (SPOF)", def: "A widely-used script or orchestration component whose failure breaks every dependent process; demands its own redundancy and hardening", src: "objectives/4.7", srcAlias: "4.7 §Why be careful — the concerns", obj: "4.7", tags: ["automation", "risk"] },
  { term: "Technical debt", def: "Accumulated cost of scripts that mask symptoms instead of fixing root causes; future changes become risky because no one remembers what is duct tape", src: "objectives/4.7", srcAlias: "4.7 §Why be careful — the concerns", obj: "4.7", tags: ["automation", "risk"] },

  // ───── 4.8 — Incident Response ─────
  { term: "Acquisition (digital forensics)", def: "Collecting evidence from disk, memory, firmware, files, servers, network devices, VM snapshots, logs, recycle bin, and browser data", src: "objectives/4.8", srcAlias: "4.8 §Digital forensics", obj: "4.8", tags: ["forensics", "evidence"] },
  { term: "Chain of custody", def: "Documented trail of who accessed evidence and when; physical uses sealed bags with signatures, digital uses hashes and digital signatures plus an access log", src: "objectives/4.8", srcAlias: "4.8 §Digital forensics", obj: "4.8", tags: ["forensics", "evidence"] },
  { term: "Containment (IR)", def: "Stopping the spread of an active incident before further investigation — isolate affected hosts, disable compromised accounts, block C2 traffic", src: "objectives/4.8", srcAlias: "4.8 §The NIST IR lifecycle", obj: "4.8", tags: ["incident-response", "containment"] },
  { term: "Detection and Analysis (IR phase)", def: "NIST IR phase that recognizes an incident has occurred and characterizes its scope and impact using IPS alerts, AV reports, log review, and traffic anomalies", src: "objectives/4.8", srcAlias: "4.8 §The NIST IR lifecycle", obj: "4.8", tags: ["incident-response", "detection"] },
  { term: "Digital forensics", def: "Collection, preservation, analysis, and reporting of digital evidence for internal investigation and potential legal proceedings", src: "objectives/4.8", srcAlias: "4.8 §Digital forensics", obj: "4.8", tags: ["forensics"] },
  { term: "E-discovery", def: "Collection, preparation, review, interpretation, and production of electronic documents in response to legal action — collection-focused, no analysis required", src: "objectives/4.8", srcAlias: "4.8 §Digital forensics", obj: "4.8", tags: ["forensics", "legal"] },
  { term: "Eradication (IR)", def: "Removing the cause of an incident — malware deletion, vulnerability patching, attacker-created account removal", src: "objectives/4.8", srcAlias: "4.8 §The NIST IR lifecycle", obj: "4.8", tags: ["incident-response", "eradication"] },
  { term: "ESI (Electronically Stored Information)", def: "Data identified in a legal hold, acquired and stored in a dedicated repository in pristine and accessible form", src: "objectives/4.8", srcAlias: "4.8 §Digital forensics", obj: "4.8", tags: ["forensics", "legal"] },
  { term: "Forensic report", def: "Structured forensic deliverable with summary, detailed acquisition steps, factual analysis of the data, and conclusions about what occurred", src: "objectives/4.8", srcAlias: "4.8 §Digital forensics", obj: "4.8", tags: ["forensics", "reporting"] },
  { term: "Go-bag (IR)", def: "Pre-assembled incident-response kit with forensic laptops, write-blockers, removable media, digital imaging tools, and printed contact lists", src: "objectives/4.8", srcAlias: "4.8 §The NIST IR lifecycle", obj: "4.8", tags: ["incident-response", "preparation"] },
  { term: "Incident response (IR)", def: "Discipline of preparing for, detecting, containing, eradicating, recovering from, and learning from security incidents", src: "objectives/4.8", srcAlias: "4.8 §The NIST IR lifecycle", obj: "4.8", tags: ["incident-response"] },
  { term: "Legal hold", def: "Formal preservation request from a lawyer or legal entity to the data custodian requiring specific data be retained in pristine form for legal purposes", src: "objectives/4.8", srcAlias: "4.8 §Digital forensics", obj: "4.8", tags: ["forensics", "legal"] },
  { term: "Live acquisition", def: "Forensic capture of memory and disk while the system is still running so full-disk encryption keys remain accessible in RAM", src: "objectives/4.8", srcAlias: "4.8 §Digital forensics", obj: "4.8", tags: ["forensics", "acquisition"] },
  { term: "NIST SP 800-61r2", def: "Computer Security Incident Handling Guide — defines the four IR phases (Preparation, Detection & Analysis, Containment/Eradication/Recovery, Post-incident)", src: "objectives/4.8", srcAlias: "4.8 §The NIST IR lifecycle", obj: "4.8", tags: ["incident-response", "standards"] },
  { term: "Post-incident activity", def: "Final NIST IR phase — lessons-learned meeting held as soon as memory is fresh; updates playbooks, controls, and indicators monitored", src: "objectives/4.8", srcAlias: "4.8 §The NIST IR lifecycle", obj: "4.8", tags: ["incident-response", "lessons-learned"] },
  { term: "Preparation (IR phase)", def: "First NIST IR phase — assembling team, go-bag, contact list, baselines, file hashes, known-good images, and playbooks BEFORE an incident occurs", src: "objectives/4.8", srcAlias: "4.8 §The NIST IR lifecycle", obj: "4.8", tags: ["incident-response", "preparation"] },
  { term: "Recovery (IR)", def: "Restoring operations after eradication — reimage from known-good media, restore from offline backups, re-enable verified accounts, lock down the entry path", src: "objectives/4.8", srcAlias: "4.8 §The NIST IR lifecycle", obj: "4.8", tags: ["incident-response", "recovery"] },
  { term: "RFC 3227", def: "Guidelines for Evidence Collection and Archiving — the documented best-practice reference for forensic acquisition order and integrity preservation", src: "objectives/4.8", srcAlias: "4.8 §Digital forensics", obj: "4.8", tags: ["forensics", "standards"] },
  { term: "Simulation (incident planning)", def: "Live but contained test — phishing emails to users, pretext calls to the help desk, simulated exfiltration — to measure controls and identify training gaps", src: "objectives/4.8", srcAlias: "4.8 §Incident planning — exercises", obj: "4.8", tags: ["incident-response", "testing"] },
  { term: "Threat hunting", def: "Proactive search for vulnerabilities and attacker activity before an incident — CVE monitoring, patch verification, firewall-rule updates, signature tuning", src: "objectives/4.8", srcAlias: "4.8 §Incident planning — exercises", obj: "4.8", tags: ["incident-response", "threat-hunting"] },

  // ───── 4.9 — Data Sources for Investigation ─────
  { term: "Application log", def: "Per-application events stored in Windows Event Viewer (Application section) or under /var/log on Linux and macOS", src: "objectives/4.9", srcAlias: "4.9 §Application logs", obj: "4.9", tags: ["logs", "investigation"] },
  { term: "Dashboard (SIEM)", def: "At-a-glance SIEM view of current state — active firewall rules, warnings, top talkers — designed to render instantly for SOC monitoring", src: "objectives/4.9", srcAlias: "4.9 §SIEM consolidation", obj: "4.9", tags: ["siem", "monitoring"] },
  { term: "Email header", def: "Metadata field set including Received chain, sending server IPs, SPF and DKIM results, and message-ID; the true source of an email regardless of From line", src: "objectives/4.9", srcAlias: "4.9 §Metadata — the data about the data", obj: "4.9", tags: ["logs", "metadata", "email"] },
  { term: "Endpoint log", def: "Per-host record of authentication events, system events, process activity, password changes, and directory service interactions", src: "objectives/4.9", srcAlias: "4.9 §Endpoint logs", obj: "4.9", tags: ["logs", "endpoint"] },
  { term: "EXIF metadata", def: "Image metadata captured by the camera — model, software, timestamp, and GPS coordinates of the photo", src: "objectives/4.9", srcAlias: "4.9 §Metadata — the data about the data", obj: "4.9", tags: ["logs", "metadata"] },
  { term: "Firewall log", def: "Per-flow record from a firewall containing timestamp, source and destination IP/port, disposition (allow/deny), and on NGFW the application and URL category", src: "objectives/4.9", srcAlias: "4.9 §Firewall logs", obj: "4.9", tags: ["logs", "firewall"] },
  { term: "IPS/IDS log", def: "Attack-detection record with timestamp, alert class (e.g., SYN flood), priority, and source/destination IP/port; Snort is the canonical open-source example", src: "objectives/4.9", srcAlias: "4.9 §IPS / IDS logs", obj: "4.9", tags: ["logs", "ips"] },
  { term: "Metadata (forensic)", def: "Data about data — email headers, EXIF on images, browser user-agent, document author info; often the most revealing source in an investigation", src: "objectives/4.9", srcAlias: "4.9 §Metadata — the data about the data", obj: "4.9", tags: ["logs", "metadata"] },
  { term: "Network device log", def: "Switch, router, wireless controller, or VPN concentrator log capturing routing changes, authentication errors, and edge-detected attacks like SYN floods", src: "objectives/4.9", srcAlias: "4.9 §Network infrastructure logs", obj: "4.9", tags: ["logs", "network"] },
  { term: "OS security log", def: "Operating system security event record — brute-force attempts, file-integrity events, service-state changes, privilege escalations", src: "objectives/4.9", srcAlias: "4.9 §OS security logs", obj: "4.9", tags: ["logs", "endpoint"] },
  { term: "Packet capture", def: "Bit-for-bit recording of network traffic (Wireshark, switch/router/firewall captures) with packet-by-packet summary plus layered detail breakdown", src: "objectives/4.9", srcAlias: "4.9 §Packet captures", obj: "4.9", tags: ["network", "investigation"] },
  { term: "Snort", def: "Open-source IPS/IDS whose log format is the textbook example — timestamp, class, priority, source/destination IP and port", src: "objectives/4.9", srcAlias: "4.9 §IPS / IDS logs", obj: "4.9", tags: ["ips", "tools"] },
  { term: "Vulnerability scan log", def: "Scan-output record listing missing AV/firewall, misconfigurations, unsupported OS, world-readable shares, and known CVEs by host", src: "objectives/4.9", srcAlias: "4.9 §Vulnerability scan logs", obj: "4.9", tags: ["logs", "vulnerabilities"] },
  { term: "Wireshark", def: "Canonical packet-capture tool with a summary pane (packet list) and a detail pane showing layered Ethernet, IP, TCP, and HTTP headers", src: "objectives/4.9", srcAlias: "4.9 §Packet captures", obj: "4.9", tags: ["network", "tools", "investigation"] },
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
