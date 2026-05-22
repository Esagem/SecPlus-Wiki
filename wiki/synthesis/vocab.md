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
