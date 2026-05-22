---
title: Practice Exam C — Original SY0-701 Drill
category: practice-exam
tags: [practice-exam, exam-c]
status: active
confidence: high
created: 2026-05-22
updated: 2026-05-22
covers: [1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6]
source: Original content, written for SY0-701 objectives
---

# Practice Exam C — Original SY0-701 Drill

**Original** practice exam covering the same SY0-701 objectives as [[quizzes/practice-exam-a|Practice Exam A]] and [[quizzes/practice-exam-b|Practice Exam B]]. **85 multiple-choice questions** (C6–C90) plus **5 performance-based questions** (C1–C5) — written from scratch with fresh scenarios distinct from A and B.

> PBQ topics rotated relative to A and B: log-source triage, access-control model selection, cloud shared-responsibility allocation, password attack identification, and a 3-tier web app firewall scenario.

**How this works:** same harness as the other practice exams. PBQs first as interactive widgets, then MCQs. **No feedback as you go** — hit **Grade my test** at the bottom and a full report card with per-question feedback drops in at the top.

Pass-line reference: roughly **75–83%** on the MCQs (CompTIA's scaled pass is around 750/900 ≈ 83%).

```dataviewjs
const questions = [
{"n":6,"q":"A receptionist's desk faces the only entrance to a secured floor and verifies visitor badges. The receptionist is BEST classified as which type of security control?","opts":[{"l":"A","t":"Technical preventive","c":false,"w":"Technical means enforced by systems. A human at a desk is not technical."},{"l":"B","t":"Operational preventive","c":true,"w":"Operational controls are executed by people in daily operations. Verifying badges to block unauthorized entry is preventive AND operational."},{"l":"C","t":"Managerial detective","c":false,"w":"Managerial = policy/governance. A receptionist is hands-on, not policy."},{"l":"D","t":"Physical compensating","c":false,"w":"A receptionist isn't a physical barrier — that would be a turnstile or mantrap. They're an operational control."}],"topic":"SY0-701, Objective 1.1 - Security Controls","url":"https://professormesser.link/701010101","objective":"1.1","domain":"1"},
{"n":7,"q":"An organization installs CCTV cameras throughout its parking lots. The cameras don't physically stop anyone but they record what happens. Which control category does this BEST fit?","opts":[{"l":"A","t":"Preventive","c":false,"w":"Preventive controls block the action. Cameras alone don't block."},{"l":"B","t":"Detective","c":true,"w":"Detective controls identify that an event happened. Surveillance is the textbook detective control."},{"l":"C","t":"Corrective","c":false,"w":"Corrective controls remediate after the fact (restore from backup, patch a system). Cameras don't fix anything."},{"l":"D","t":"Directive","c":false,"w":"Directive controls provide guidance through policy. Cameras don't tell anyone what to do."}],"topic":"SY0-701, Objective 1.1 - Security Controls","url":"https://professormesser.link/701010101","objective":"1.1","domain":"1"},
{"n":8,"q":"An organization tracks data lineage so that every record can be traced back to who created it, who modified it, and when. Which security principle does this MOST directly support?","opts":[{"l":"A","t":"Confidentiality","c":false,"w":"Confidentiality is about keeping data secret. Lineage is about traceability."},{"l":"B","t":"Availability","c":false,"w":"Availability is about uptime. Lineage doesn't impact whether data is reachable."},{"l":"C","t":"Non-repudiation","c":true,"w":"Non-repudiation means the actor can't credibly deny their action. Audit trails tying actions to identities are the mechanism."},{"l":"D","t":"Authentication","c":false,"w":"Authentication proves identity at login time. Lineage records what happened after that, not the proof of identity itself."}],"topic":"SY0-701, Objective 1.2 - Fundamental Security Concepts","url":"https://professormesser.link/701010202","objective":"1.2","domain":"1"},
{"n":9,"q":"A breach occurred because an admin's account had standing access to production databases 24/7 even though they only need it during quarterly audits. Which principle was violated?","opts":[{"l":"A","t":"Just-in-time access (least privilege over time)","c":true,"w":"Standing privileged access that's only needed occasionally is exactly what JIT access models eliminate. The fix: grant access on request, time-bound, with approval."},{"l":"B","t":"Two-person integrity","c":false,"w":"Two-person integrity requires dual control for sensitive actions. Not what's described here."},{"l":"C","t":"Separation of duties","c":false,"w":"SoD prevents one person from controlling an entire sensitive process. Different concept."},{"l":"D","t":"Defense in depth","c":false,"w":"Defense in depth is layering. Not the principle in tension here."}],"topic":"SY0-701, Objective 1.2 - Fundamental Security Concepts","url":"https://professormesser.link/701010202","objective":"1.2","domain":"1"},
{"n":10,"q":"An organization sets up a fake database server with realistic but bogus customer records. Internal monitoring flags any access. The server has no legitimate business purpose. Of the following, which is the BEST single descriptor?","opts":[{"l":"A","t":"Honeypot","c":false,"w":"A honeypot is a decoy SERVER. A honeyfile is more specifically a decoy file. Both fit here, but the question describes a whole server."},{"l":"B","t":"Honeynet","c":false,"w":"Honeynets are networks of multiple decoys."},{"l":"C","t":"Decoy / honeypot system","c":true,"w":"A single fake server with bogus data designed to detect access is a honeypot. The 'realistic but bogus' framing fits the deception-and-disruption category."},{"l":"D","t":"Sinkhole","c":false,"w":"DNS sinkholes redirect bad domains. Different mechanism."}],"topic":"SY0-701, Objective 1.2 - Deception and Disruption","url":"https://professormesser.link/701010207","objective":"1.2","domain":"1"},
{"n":11,"q":"A change request to update a TLS certificate on a production load balancer is being reviewed. The reviewer asks: 'If this doesn't work, how do we get back to a known good state in 5 minutes?' Which change-management element is the reviewer probing?","opts":[{"l":"A","t":"Approval","c":false,"w":"Approval is a yes/no decision, not a recovery question."},{"l":"B","t":"Backout plan","c":true,"w":"How to revert is exactly what a backout plan answers. The 5-minute framing is a hint at recovery time."},{"l":"C","t":"Stakeholder list","c":false,"w":"Stakeholders are about communication, not technical reversion."},{"l":"D","t":"Risk register","c":false,"w":"Risk register tracks risks generally; the question is about a specific revert procedure."}],"topic":"SY0-701, Objective 1.3 - Change Management Process","url":"https://professormesser.link/701010301","objective":"1.3","domain":"1"},
{"n":12,"q":"A small team makes 'minor' configuration changes outside the change-management process because they consider them low-risk. The CISO flags this. Which is the BEST argument for routing all changes through CAB?","opts":[{"l":"A","t":"Even 'minor' changes can have unanticipated downstream impact, and the process creates documentation, peer review, and accountability","c":true,"w":"The point of CAB isn't friction — it's a known checkpoint for impact assessment, second eyes, and a record of who changed what when. Small changes have caused large outages."},{"l":"B","t":"Change management is required by law in all jurisdictions","c":false,"w":"Not strictly true everywhere — some regulated industries require it; the better answer is operational."},{"l":"C","t":"CAB approval prevents all outages","c":false,"w":"It doesn't. It reduces the unanticipated-outage risk; it doesn't eliminate outages."},{"l":"D","t":"Skipping CAB voids the company's cyber insurance","c":false,"w":"Specific insurance terms vary. The general principle is operational/governance, not insurance."}],"topic":"SY0-701, Objective 1.3 - Change Management Process","url":"https://professormesser.link/701010301","objective":"1.3","domain":"1"},
{"n":13,"q":"Why is RSA-2048 considered weaker than ECC-256 even though it has many more bits?","opts":[{"l":"A","t":"RSA actually has fewer bits than ECC at the same key size","c":false,"w":"Numerically, RSA-2048 has more bits in the key than ECC-256."},{"l":"B","t":"ECC's underlying problem (discrete log on elliptic curves) is harder per-bit than RSA's (integer factorization)","c":true,"w":"ECC operates on a math problem where small keys provide strong security. RSA-2048 ≈ ECC-224 in equivalent strength."},{"l":"C","t":"ECC keys are reusable; RSA keys aren't","c":false,"w":"Both can be used long-term; that's not the difference."},{"l":"D","t":"RSA has known mathematical backdoors","c":false,"w":"There are no known backdoors in standard RSA. The difference is asymptotic problem difficulty."}],"topic":"SY0-701, Objective 1.4 - Encrypting Data","url":"https://professormesser.link/701010402","objective":"1.4","domain":"1"},
{"n":14,"q":"A developer needs to compare two passwords without storing the original. The developer uses MD5, which is fast and well-known. Why is this a bad choice?","opts":[{"l":"A","t":"MD5 is not actually a hash function","c":false,"w":"MD5 is a hash function — it's just a weak one."},{"l":"B","t":"MD5 has known collisions and is fast enough that brute-forcing common passwords is trivial; modern password storage needs slow, salted, key-stretched hashing","c":true,"w":"For passwords, you specifically want slow hashing (bcrypt, scrypt, Argon2, PBKDF2). MD5 is the opposite — and it's also broken cryptographically."},{"l":"C","t":"MD5 requires too much CPU for password storage","c":false,"w":"Opposite problem — MD5 is too fast for password storage."},{"l":"D","t":"MD5 produces output that's too long to store efficiently","c":false,"w":"MD5 produces 128 bits. That's not the issue."}],"topic":"SY0-701, Objective 1.4 - Hashing and Digital Signatures","url":"https://professormesser.link/701010406","objective":"1.4","domain":"1"},
{"n":15,"q":"Which of the following BEST describes the role of an intermediate CA in a public key infrastructure?","opts":[{"l":"A","t":"It is the offline root that holds the ultimate trust anchor","c":false,"w":"That's the root CA, which is typically kept offline."},{"l":"B","t":"It issues end-entity certificates on behalf of the root CA, allowing the root to remain offline and secure","c":true,"w":"Intermediates take the day-to-day issuance load. If an intermediate is compromised, you revoke and reissue from the still-protected root."},{"l":"C","t":"It's a backup CA for redundancy of the root","c":false,"w":"Intermediates aren't redundant copies of the root; they delegate from it."},{"l":"D","t":"It validates certificates submitted by users","c":false,"w":"That's a validation authority / OCSP responder."}],"topic":"SY0-701, Objective 1.4 - Public Key Infrastructure","url":"https://professormesser.link/701010401","objective":"1.4","domain":"1"},
{"n":16,"q":"An attacker who obtains long-term private keys should NOT be able to decrypt past recorded sessions. The property that ensures this is:","opts":[{"l":"A","t":"Forward secrecy (perfect forward secrecy)","c":true,"w":"PFS uses ephemeral session keys derived per-session. Compromising the long-term key doesn't help with past sessions because their ephemeral keys are gone."},{"l":"B","t":"Key escrow","c":false,"w":"Key escrow is the opposite — keys are deliberately stored with a third party."},{"l":"C","t":"Key stretching","c":false,"w":"Key stretching slows password hashing. Different concept."},{"l":"D","t":"Asymmetric encryption alone","c":false,"w":"Plain asymmetric encryption with long-lived keys does NOT provide forward secrecy. You need ephemeral exchanges (e.g., DHE, ECDHE)."}],"topic":"SY0-701, Objective 1.4 - Public Key Infrastructure","url":"https://professormesser.link/701010401","objective":"1.4","domain":"1"},
{"n":17,"q":"Why is it generally a bad idea to roll your own cryptographic algorithm for production use?","opts":[{"l":"A","t":"Custom algorithms are slower than standard ones","c":false,"w":"Performance isn't the main concern."},{"l":"B","t":"Cryptographic primitives need years of public peer review and cryptanalysis before they can be trusted; ad-hoc designs almost always have subtle exploitable flaws","c":true,"w":"AES, SHA-2, etc. survived years of professional cryptanalysis. Bespoke algorithms haven't, and history is full of homegrown crypto that turned out to be broken."},{"l":"C","t":"Custom algorithms aren't legal in most countries","c":false,"w":"Not generally true."},{"l":"D","t":"Custom algorithms can't be patented","c":false,"w":"Patentability isn't the security argument."}],"topic":"SY0-701, Objective 1.4 - Encrypting Data","url":"https://professormesser.link/701010402","objective":"1.4","domain":"1"},
{"n":18,"q":"A company wants to give employees the ability to access encrypted corporate data even if a user loses their key. The technique that supports this is:","opts":[{"l":"A","t":"Key stretching","c":false,"w":"Key stretching slows brute force. Unrelated to recovery."},{"l":"B","t":"Key escrow","c":true,"w":"Key escrow deposits a copy of decryption keys with a trusted party (often the company or a third party) so data can be recovered when the original holder can't decrypt."},{"l":"C","t":"Hashing","c":false,"w":"Hashing is one-way. Can't recover anything."},{"l":"D","t":"Forward secrecy","c":false,"w":"Forward secrecy intentionally makes past data harder to recover. Opposite goal."}],"topic":"SY0-701, Objective 1.4 - Encryption Technologies","url":"https://professormesser.link/701010404","objective":"1.4","domain":"1"},
{"n":19,"q":"A control is described as 'compensating.' Which of the following is the BEST example?","opts":[{"l":"A","t":"A firewall blocking inbound port 23","c":false,"w":"That's a preventive technical control."},{"l":"B","t":"Increasing log monitoring on a server because a required patch can't yet be installed","c":true,"w":"Compensating controls substitute for a missing or unavailable primary control. Monitoring is not as good as patching, but it covers the gap until patching is possible."},{"l":"C","t":"Sending users to phishing-awareness training","c":false,"w":"That's a directive/preventive control aimed at user behavior."},{"l":"D","t":"Restoring data from a backup after corruption","c":false,"w":"That's a corrective control."}],"topic":"SY0-701, Objective 1.2 - Security Controls","url":"https://professormesser.link/701010101","objective":"1.2","domain":"1"},
{"n":20,"q":"A company encrypts data at rest using customer-managed keys held in their cloud KMS. Which of the following is the MAIN benefit over provider-managed keys?","opts":[{"l":"A","t":"Better performance — customer-managed keys are faster","c":false,"w":"Performance is roughly identical."},{"l":"B","t":"The customer can revoke key access to render data unreadable, even by the provider, on demand","c":true,"w":"Customer control over key lifecycle means the customer can pull the key and make ciphertext useless, including against the provider's own access."},{"l":"C","t":"Customer-managed keys are exempt from breach notification requirements","c":false,"w":"Not true. Notification rules depend on data sensitivity and jurisdiction, not key management."},{"l":"D","t":"Provider-managed keys are illegal in most jurisdictions","c":false,"w":"They're widely used and legal."}],"topic":"SY0-701, Objective 1.4 - Encryption Technologies","url":"https://professormesser.link/701010404","objective":"1.4","domain":"1"},
{"n":21,"q":"Which threat actor is BEST characterized by 'limited skills, uses publicly available tools, often motivated by curiosity or notoriety'?","opts":[{"l":"A","t":"Nation-state","c":false,"w":"Nation-states are well-resourced and skilled."},{"l":"B","t":"Script kiddie / unskilled attacker","c":true,"w":"By definition: low technical depth, reliance on existing tools, motivations are typically nontactical (curiosity, ego, mild mischief)."},{"l":"C","t":"Organized crime","c":false,"w":"Organized crime is well-funded and operates for profit."},{"l":"D","t":"Insider threat","c":false,"w":"Insiders use their authorized access; the description doesn't suggest insider context."}],"topic":"SY0-701, Objective 2.1 - Threat Actors","url":"https://professormesser.link/701020101","objective":"2.1","domain":"2"},
{"n":22,"q":"A hacktivist's primary motivation is BEST described as:","opts":[{"l":"A","t":"Direct financial gain through theft or extortion","c":false,"w":"That's organized crime."},{"l":"B","t":"Political, ideological, or social messaging via cyber means","c":true,"w":"Hacktivists target organizations to advance a cause — defacement, leaks, DDoS as political statement. Funding is incidental."},{"l":"C","t":"Long-dwell strategic intelligence collection","c":false,"w":"That's nation-state behavior."},{"l":"D","t":"Personal ego and notoriety alone","c":false,"w":"Some overlap with script kiddies, but hacktivism is specifically ideologically motivated."}],"topic":"SY0-701, Objective 2.1 - Threat Actors","url":"https://professormesser.link/701020101","objective":"2.1","domain":"2"},
{"n":23,"q":"An attacker leaves USB drives labeled 'EXECUTIVE BONUSES Q4' in the parking lot of a target company. An employee picks one up, plugs it in, and the malware activates. Which social-engineering technique is this?","opts":[{"l":"A","t":"Phishing","c":false,"w":"Phishing is over electronic communication channels."},{"l":"B","t":"Baiting (USB drop)","c":true,"w":"Baiting uses curiosity-triggering physical objects. The 'lost' USB labeled enticingly is the textbook example."},{"l":"C","t":"Pretexting","c":false,"w":"Pretexting involves a fabricated scenario in interaction (phone, email). No conversation here."},{"l":"D","t":"Tailgating","c":false,"w":"Tailgating is following someone through a secured door."}],"topic":"SY0-701, Objective 2.2 - Social Engineering","url":"https://professormesser.link/701020204","objective":"2.2","domain":"2"},
{"n":24,"q":"A phishing email targets the CFO of a Fortune 500 specifically, references her direct reports by name, and asks her to approve a wire transfer. This is BEST called:","opts":[{"l":"A","t":"Spear phishing","c":false,"w":"Spear phishing is targeted at a specific person but the executive context makes a more specific term apply."},{"l":"B","t":"Whaling","c":true,"w":"Whaling = spear phishing targeting senior executives ('big fish'). The detailed targeting is a hallmark."},{"l":"C","t":"Smishing","c":false,"w":"SMS-based phishing. Wrong channel — this is email."},{"l":"D","t":"Vishing","c":false,"w":"Voice-based phishing. Wrong channel."}],"topic":"SY0-701, Objective 2.2 - Phishing","url":"https://professormesser.link/701020202","objective":"2.2","domain":"2"},
{"n":25,"q":"An attacker registers the domain 'goggle.com' hoping users will mistype 'google.com' and land on a malicious site. This is:","opts":[{"l":"A","t":"Watering hole attack","c":false,"w":"Watering hole compromises a site the target audience already visits."},{"l":"B","t":"Typosquatting","c":true,"w":"Registering misspellings/typos of legitimate domains to catch traffic from fat-fingered URLs is typosquatting."},{"l":"C","t":"DNS poisoning","c":false,"w":"DNS poisoning corrupts the resolver's cache to redirect traffic. The attacker here is just registering a similar domain."},{"l":"D","t":"Pharming","c":false,"w":"Pharming uses DNS or hosts-file tampering to redirect. Different mechanism."}],"topic":"SY0-701, Objective 2.2 - Phishing","url":"https://professormesser.link/701020202","objective":"2.2","domain":"2"},
{"n":26,"q":"A user opens a PDF, which silently exploits a known vulnerability in the PDF reader to install malware. The vulnerability was disclosed three weeks ago and a patch is available, but the user hasn't applied it. Which vulnerability category fits BEST?","opts":[{"l":"A","t":"Zero-day","c":false,"w":"Zero-day = no patch available yet. A patch exists here."},{"l":"B","t":"Unpatched / missing patch","c":true,"w":"Known vulnerability + available patch + not applied = the textbook missing-patch scenario. The single most common breach root cause."},{"l":"C","t":"Configuration error","c":false,"w":"Not a configuration issue. The defect is in the software."},{"l":"D","t":"Hardware vulnerability","c":false,"w":"PDF readers are software."}],"topic":"SY0-701, Objective 2.3 - Vulnerabilities","url":"https://professormesser.link/701020310","objective":"2.3","domain":"2"},
{"n":27,"q":"An attacker exploits a flaw in a CPU's speculative execution to read memory they shouldn't have access to. This is BEST classified as:","opts":[{"l":"A","t":"SQL injection","c":false,"w":"SQL injection is a software-input flaw."},{"l":"B","t":"Side-channel hardware vulnerability","c":true,"w":"Spectre/Meltdown-class flaws are hardware/microarchitectural side channels exploiting speculative execution."},{"l":"C","t":"Buffer overflow","c":false,"w":"Buffer overflows are memory-bounds errors in software."},{"l":"D","t":"Cross-site scripting","c":false,"w":"XSS is browser/web-layer."}],"topic":"SY0-701, Objective 2.3 - Hardware vulnerabilities","url":"https://professormesser.link/701020308","objective":"2.3","domain":"2"},
{"n":28,"q":"A web application stores session tokens in a hidden form field and accepts them from any client. An attacker observes a token and reuses it from their own browser. The fundamental flaw is:","opts":[{"l":"A","t":"Buffer overflow","c":false,"w":"No memory corruption here."},{"l":"B","t":"Weak session management — tokens are bearer credentials with no binding to client","c":true,"w":"If a token can be stolen and reused with no additional check (IP, user agent, signature, MFA challenge), it's a session-management flaw."},{"l":"C","t":"SQL injection","c":false,"w":"No SQL involved."},{"l":"D","t":"DNS poisoning","c":false,"w":"DNS isn't part of this attack."}],"topic":"SY0-701, Objective 2.3 - Application Vulnerabilities","url":"https://professormesser.link/701020305","objective":"2.3","domain":"2"},
{"n":29,"q":"A user reports their files were renamed with a .locked extension and a ransom note appeared on their desktop. The IR team's FIRST priority should be:","opts":[{"l":"A","t":"Pay the ransom immediately","c":false,"w":"FBI and most authorities recommend against paying; it doesn't guarantee recovery and funds the attackers."},{"l":"B","t":"Isolate the host from the network to prevent further encryption and lateral spread","c":true,"w":"Containment first. Ransomware often propagates; pulling the host off the network stops the bleeding without destroying forensic state."},{"l":"C","t":"Wipe the disk and reimage","c":false,"w":"That's eradication/recovery, which comes after containment and analysis. Wiping first destroys evidence."},{"l":"D","t":"Email all users to change passwords","c":false,"w":"Reasonable later step in some scenarios but not the first action."}],"topic":"SY0-701, Objective 2.4 - Malware","url":"https://professormesser.link/701020401","objective":"2.4","domain":"2"},
{"n":30,"q":"An on-path (MITM) attacker intercepts traffic between a user and a banking site. They present their own TLS certificate. The user's browser displays a certificate warning, but the user clicks 'continue anyway.' Which control failed?","opts":[{"l":"A","t":"TLS/PKI certificate validation","c":true,"w":"The browser correctly detected the wrong certificate. The user override defeated PKI's protection. Mitigated by HSTS preloading (which makes the warning unclickable for known sites)."},{"l":"B","t":"Network segmentation","c":false,"w":"Segmentation isn't relevant to an in-the-middle position."},{"l":"C","t":"Symmetric encryption","c":false,"w":"The encryption itself isn't broken; the attack happens at the trust layer."},{"l":"D","t":"DNS","c":false,"w":"DNS may or may not be involved depending on how the MITM was set up; the failed control here is certificate validation."}],"topic":"SY0-701, Objective 2.4 - Network Attacks","url":"https://professormesser.link/701020405","objective":"2.4","domain":"2"},
{"n":31,"q":"An attacker sends a massive volume of SYN packets to a server without completing the TCP handshake. The server's connection table fills up. This is:","opts":[{"l":"A","t":"SYN flood (a type of DoS)","c":true,"w":"Half-open connections exhaust server resources. Mitigated with SYN cookies and rate limiting."},{"l":"B","t":"DNS amplification","c":false,"w":"DNS amplification reflects via DNS servers. Different mechanism."},{"l":"C","t":"ARP spoofing","c":false,"w":"ARP spoofing manipulates local-network MAC mappings."},{"l":"D","t":"Slowloris","c":false,"w":"Slowloris keeps HTTP connections open with slow headers. Different layer."}],"topic":"SY0-701, Objective 2.4 - Denial of Service","url":"https://professormesser.link/701020406","objective":"2.4","domain":"2"},
{"n":32,"q":"A piece of malware installs itself into the boot record so it loads BEFORE the operating system, evading conventional antivirus. This is BEST described as:","opts":[{"l":"A","t":"Trojan","c":false,"w":"Trojans are disguised programs; the load timing isn't the defining trait."},{"l":"B","t":"Rootkit (bootkit variety)","c":true,"w":"Rootkits hide presence at low levels. Bootkits specifically load pre-OS so they intercept the OS as it starts."},{"l":"C","t":"Worm","c":false,"w":"Worms self-propagate. The defining trait here is timing/persistence, not propagation."},{"l":"D","t":"Ransomware","c":false,"w":"Ransomware encrypts for extortion. No encryption described."}],"topic":"SY0-701, Objective 2.4 - Malware","url":"https://professormesser.link/701020401","objective":"2.4","domain":"2"},
{"n":33,"q":"A user notices unusual fan activity on their laptop and the CPU is pinned at 100%. Investigation finds the system is being used to mine cryptocurrency for an attacker. This malware is BEST classified as:","opts":[{"l":"A","t":"Cryptojacker / cryptomining malware","c":true,"w":"Cryptojackers steal compute cycles to mine for the attacker. CPU/GPU pegged at 100% is the signature."},{"l":"B","t":"Ransomware","c":false,"w":"No encryption or ransom demand. Different goal."},{"l":"C","t":"Spyware","c":false,"w":"Spyware steals information. Cryptojacking steals resources."},{"l":"D","t":"Worm","c":false,"w":"Worms self-propagate; the malware behavior described isn't propagation."}],"topic":"SY0-701, Objective 2.4 - Malware","url":"https://professormesser.link/701020401","objective":"2.4","domain":"2"},
{"n":34,"q":"An attacker sends an ARP reply to a victim's machine claiming the gateway's IP belongs to the attacker's MAC. The victim now sends all traffic to the attacker. This is:","opts":[{"l":"A","t":"DNS poisoning","c":false,"w":"DNS poisoning corrupts the DNS cache. Wrong layer."},{"l":"B","t":"ARP spoofing / ARP poisoning","c":true,"w":"Manipulating ARP mappings on a local network to position the attacker as a router/gateway is ARP spoofing. Same-subnet attack."},{"l":"C","t":"VLAN hopping","c":false,"w":"VLAN hopping crosses VLAN boundaries via mis-tagged frames."},{"l":"D","t":"BGP hijacking","c":false,"w":"BGP hijacking is internet-routing-level. ARP is local-network-level."}],"topic":"SY0-701, Objective 2.4 - Network Attacks","url":"https://professormesser.link/701020405","objective":"2.4","domain":"2"},
{"n":35,"q":"A team is hardening a new Linux server. Removing the GUI, disabling SSH password authentication in favor of key-only, and uninstalling compilers are all examples of:","opts":[{"l":"A","t":"Reducing attack surface","c":true,"w":"Each of those removes a potential vector (GUI/X11 exposure, password brute-force, on-box build tools an attacker could use). Attack-surface reduction is the umbrella term."},{"l":"B","t":"Increasing redundancy","c":false,"w":"Redundancy is about backup capacity. Different concept."},{"l":"C","t":"Improving performance","c":false,"w":"Some incidental performance benefit, but not the security framing."},{"l":"D","t":"Enabling logging","c":false,"w":"None of these add logging."}],"topic":"SY0-701, Objective 2.5 - Hardening","url":"https://professormesser.link/701020503","objective":"2.5","domain":"2"},
{"n":36,"q":"A security team is concerned about lateral movement after a phishing-driven foothold. Which control MOST directly limits east-west movement inside the network?","opts":[{"l":"A","t":"Perimeter firewall","c":false,"w":"Perimeter firewalls control north-south traffic. Lateral movement happens inside."},{"l":"B","t":"Microsegmentation / internal segmentation","c":true,"w":"Breaking the internal network into tight segments with policy between them is the direct counter to lateral movement."},{"l":"C","t":"Email gateway","c":false,"w":"Email gateways stop inbound phishing before it lands. Useful, but doesn't help once a host is compromised."},{"l":"D","t":"Web content filter","c":false,"w":"Outbound filtering. Doesn't address internal-to-internal movement."}],"topic":"SY0-701, Objective 2.5 - Segmentation and Access Control","url":"https://professormesser.link/701020501","objective":"2.5","domain":"2"},
{"n":37,"q":"Application allow-listing means:","opts":[{"l":"A","t":"Blocking specifically-named bad applications","c":false,"w":"That's deny-listing (block-listing)."},{"l":"B","t":"Only applications on an explicit approved list may run; everything else is blocked by default","c":true,"w":"Allow-listing is the inverse of block-listing — much stronger, much harder to maintain. Default-deny posture for executables."},{"l":"C","t":"Letting users vote on which apps to install","c":false,"w":"Not a thing."},{"l":"D","t":"Allowing all applications from a specific vendor","c":false,"w":"That's a narrow specific allow rule, not the general concept."}],"topic":"SY0-701, Objective 2.5 - Hardening","url":"https://professormesser.link/701020503","objective":"2.5","domain":"2"},
{"n":38,"q":"Disabling a service that listens on a network port even though no application is currently using it is an example of:","opts":[{"l":"A","t":"Hardening — closing an unused port reduces attack surface even if it's not currently exploited","c":true,"w":"Unused-but-open ports are pure liability. Closing what you don't use is core hardening."},{"l":"B","t":"Patching","c":false,"w":"Patching applies vendor fixes for known vulnerabilities."},{"l":"C","t":"Monitoring","c":false,"w":"Monitoring observes; closing ports is an active control change."},{"l":"D","t":"Risk acceptance","c":false,"w":"Risk acceptance is leaving the risk in place. This is removing it."}],"topic":"SY0-701, Objective 2.5 - Hardening","url":"https://professormesser.link/701020503","objective":"2.5","domain":"2"},
__INSERT_QUESTIONS_HERE_DO_NOT_EDIT__
];

const pbqs = [
  {"n":1,"title":"Log triage — which source has the evidence","type":"match","prompt":"An on-call analyst gets paged for several issues. For each investigation, pick the single log source MOST likely to hold the answer first. Each source is used at most once; one is a distractor.","options":["Web server access log","Authentication / auth.log","Firewall log","DNS query log","EDR / endpoint telemetry","SIEM correlation alert","System (kernel) log"],"items":[{"id":"1a","desc":"User reports 'I can't log in' — confirm whether attempts are reaching the server and what's failing","answer":"Authentication / auth.log","w":"auth.log (Linux) or Security event log (Windows) records each login attempt with the failure reason. Start here."},{"id":"1b","desc":"Marketing site is returning 500s for some users; need to see which URLs and source IPs","answer":"Web server access log","w":"Access logs record every HTTP request with status code, URL, source IP, and user agent — the per-request truth."},{"id":"1c","desc":"Suspicious outbound connection to a known C2 domain — need to confirm which internal host requested it","answer":"DNS query log","w":"DNS query logs tie an internal client IP to a queried domain at a specific time. Best signal for which host reached out."},{"id":"1d","desc":"A workstation is showing unusual process activity and you need parent-process and command-line context","answer":"EDR / endpoint telemetry","w":"EDR captures process trees, command lines, and child-process spawns. Network or auth logs can't give you that depth."},{"id":"1e","desc":"Need to know whether a remote scan was blocked at the perimeter or actually reached an internal server","answer":"Firewall log","w":"Firewall logs show accepted vs. dropped flows at the boundary — exactly the allow/deny question."},{"id":"1f","desc":"Three different alerts fired within minutes on the same user across login, EDR, and DLP — need them stitched","answer":"SIEM correlation alert","w":"Stitching cross-source signals into one timeline is the whole point of a SIEM correlation rule."}],"objective":"4.9","url":"https://professormesser.link/701040901"},
  {"n":2,"title":"Pick the right access-control model","type":"match","prompt":"For each scenario, pick the access-control model that fits best. Each model is used at least once; some are reused.","options":["DAC","MAC","RBAC","ABAC","Rule-based"],"items":[{"id":"2a","desc":"A defense contractor handles SECRET and TOP SECRET documents; users have clearances and documents have classifications, and the OS enforces who can read what","answer":"MAC","w":"Mandatory Access Control with classification labels and clearance levels is the standard government/defense model."},{"id":"2b","desc":"A file owner on a Linux box uses chmod to grant a coworker read access to their own files","answer":"DAC","w":"Discretionary Access Control: the OWNER decides. Linux/Windows file permissions are DAC by default."},{"id":"2c","desc":"A SaaS app grants permissions by job title — 'Sales Manager' implies a specific permission set for everyone with that title","answer":"RBAC","w":"Role-Based Access Control attaches permissions to roles; users inherit via role assignment."},{"id":"2d","desc":"A document is readable only if the requester is in HR, the request is during business hours, AND the document is not flagged as 'restricted'","answer":"ABAC","w":"Multiple attributes (department, time-of-day, resource label) combining in a policy expression is Attribute-Based Access Control."},{"id":"2e","desc":"A network firewall permits port 443 inbound from any source to the web server; denies everything else","answer":"Rule-based","w":"Static condition-based rules independent of user identity are rule-based. Common in firewalls and routers."},{"id":"2f","desc":"A bank's customer support reps can view any customer record while on shift; the same individuals can't view records when clocked out","answer":"ABAC","w":"Shift status is a subject attribute being evaluated at request time — ABAC. Pure RBAC wouldn't change between shifts."}],"objective":"4.6","url":"https://professormesser.link/701040602"},
  {"n":3,"title":"Cloud shared responsibility — who patches what","type":"match","prompt":"For each layer in a cloud deployment, indicate who is responsible under each service model. Pick the party that owns the listed component.","options":["Customer","Provider","Shared"],"items":[{"id":"3a","desc":"Physical hardware in the data center (any model — IaaS, PaaS, SaaS)","answer":"Provider","w":"Physical infrastructure is always the provider's responsibility regardless of service model."},{"id":"3b","desc":"Guest operating system patches in IaaS (you rent a VM)","answer":"Customer","w":"In IaaS the OS and everything above it is yours. You patch the kernel, packages, and services."},{"id":"3c","desc":"The runtime and language libraries in PaaS (Heroku, App Engine, Lambda)","answer":"Provider","w":"PaaS abstracts away the OS and runtime — provider manages it. You deploy code; they handle the rest."},{"id":"3d","desc":"The application code's vulnerabilities in PaaS","answer":"Customer","w":"Your code is your responsibility on PaaS. Provider runs it; they don't audit your bugs."},{"id":"3e","desc":"User identities, roles, and permissions configured in your tenant (any model)","answer":"Customer","w":"Identity and access management — who exists, who can do what — is always yours to configure, regardless of model."},{"id":"3f","desc":"The SaaS application's source code and feature security","answer":"Provider","w":"SaaS provider owns the app end-to-end. You can't patch their code."},{"id":"3g","desc":"Data classification and the encryption keys for data you upload","answer":"Customer","w":"Data is yours regardless of model. Classification, retention, and key custody for customer-managed keys stay with you."}],"objective":"3.1","url":"https://professormesser.link/701030101"},
  {"n":4,"title":"Identify the password attack","type":"match","prompt":"For each observed pattern, pick the password attack it best matches. Each attack is used exactly once.","options":["Brute force","Password spraying","Credential stuffing","Dictionary attack","Rainbow table","Pass-the-hash"],"items":[{"id":"4a","desc":"One account, 250,000 password attempts in 20 minutes, all from a single source","answer":"Brute force","w":"Many guesses against ONE account is brute force. The 250K-in-20-min cadence is the giveaway."},{"id":"4b","desc":"One password ('Summer2025!') attempted against 4,200 different accounts, one try each","answer":"Password spraying","w":"One password across MANY accounts, low-and-slow per account to evade lockouts."},{"id":"4c","desc":"Login attempts using email+password pairs from a leaked 'collection #1' dump succeed on a small percentage of accounts","answer":"Credential stuffing","w":"Reusing leaked username/password PAIRS from breaches at other sites. The 'small % success' is characteristic."},{"id":"4d","desc":"An attacker tries every word in a curated 100k-word list against a single account","answer":"Dictionary attack","w":"Curated wordlist (not exhaustive enumeration) against an account is the dictionary attack — a constrained subtype of brute force."},{"id":"4e","desc":"An attacker with a stolen unsalted password-hash file uses a precomputed lookup table to reverse hashes to plaintexts","answer":"Rainbow table","w":"Precomputed hash→plaintext lookup tables. Defeated by per-user salts."},{"id":"4f","desc":"On a Windows network, an attacker steals an NTLM hash from one host and uses it to authenticate to another host without ever cracking it","answer":"Pass-the-hash","w":"Using the hash directly as the authentication credential — no need to recover the plaintext. NTLM weakness."}],"objective":"2.4","url":"https://professormesser.link/701020404"},
  {"n":5,"title":"Stateful firewall rules — 3-tier web application","type":"firewall","prompt":"A 3-tier application has a public web tier, an internal app tier, and an internal database tier. A stateful firewall sits between each tier. Configure the rules below — only the initiating direction needs an entry because the firewall is stateful.","servers":[{"name":"Public Web Server","ip":"10.10.1.10"},{"name":"Internal Load Balancer","ip":"10.10.1.20"},{"name":"App Server","ip":"10.20.2.50"},{"name":"Cache Server","ip":"10.20.2.60"},{"name":"Database Primary","ip":"10.30.3.100"},{"name":"Database Replica","ip":"10.30.3.101"}],"ports":["22","25","53","80","443","636","1433","1521","3306","3389","5432","6379","8080","9092"],"rules":[{"id":"5a","goal":"Allow the Public Web Server to forward backend requests to the App Server on its application port (TCP 8080).","answer":{"srcIP":"10.10.1.10","dstIP":"10.20.2.50","proto":"TCP","port":"8080","action":"Allow"},"w":"Web tier → app tier on the chosen application port. 8080 is the listed option matching the question's stated port. Direction is web to app."},{"id":"5b","goal":"Allow the App Server to read from the Cache Server over Redis (TCP 6379).","answer":{"srcIP":"10.20.2.50","dstIP":"10.20.2.60","proto":"TCP","port":"6379","action":"Allow"},"w":"App tier reaching cache. Redis listens on TCP/6379 by default. Source is app, destination is cache."},{"id":"5c","goal":"Allow the App Server to query the Database Primary over PostgreSQL (TCP 5432).","answer":{"srcIP":"10.20.2.50","dstIP":"10.30.3.100","proto":"TCP","port":"5432","action":"Allow"},"w":"App tier → DB primary. PostgreSQL is TCP/5432. Direction matters — only app should originate to DB, not the reverse."},{"id":"5d","goal":"Block any direct connection from the Public Web Server to the Database Primary — the web tier must never bypass the app tier.","answer":{"srcIP":"10.10.1.10","dstIP":"10.30.3.100","proto":"TCP","port":"5432","action":"Block"},"w":"Explicit defense-in-depth deny. Even if a default-deny is in place, an explicit block on the database port from the web tier protects against future misconfiguration."}],"objective":"4.5","url":"https://professormesser.link/701040501"}
];

const domainNames = {"1": "1.0 General Security Concepts", "2": "2.0 Threats, Vulnerabilities, and Mitigations", "3": "3.0 Security Architecture", "4": "4.0 Security Operations", "5": "5.0 Security Program Management & Oversight"};

// ---- State ----
const selections = {}; // qNum -> Set of letters
questions.forEach(q => { selections[q.n] = new Set(); });
const pbqSelections = {};
pbqs.forEach(p => { pbqSelections[p.n] = {}; });
let graded = false;

// ---- Render setup ----
const root = dv.container;
root.empty();

const style = root.createEl("style");
style.textContent = `
  .pe-intro { padding: 12px 16px; background: var(--background-secondary); border-radius: 6px; margin-bottom: 18px; font-size: 0.9em; color: var(--text-muted); }
  .pe-progress { position: sticky; top: 0; z-index: 10; padding: 10px 14px; background: var(--background-secondary); border-radius: 6px; font-size: 0.9em; color: var(--text-muted); margin-bottom: 20px; border: 1px solid var(--background-modifier-border); }
  .pe-card { border: 1px solid var(--background-modifier-border); padding: 18px 22px; margin-bottom: 22px; border-radius: 8px; background: var(--background-primary-alt); scroll-margin-top: 60px; }
  .pe-q-header { display: flex; align-items: baseline; gap: 10px; margin-bottom: 12px; flex-wrap: wrap; }
  .pe-q-num { font-weight: 700; color: var(--text-muted); font-size: 0.85em; letter-spacing: 0.05em; }
  .pe-q-tag { font-size: 0.75em; padding: 2px 8px; border-radius: 10px; background: var(--background-secondary); color: var(--text-muted); border: 1px solid var(--background-modifier-border); }
  .pe-q-tag.multi { background: rgba(187, 128, 9, 0.12); color: var(--text-normal); border-color: rgba(187, 128, 9, 0.4); }
  .pe-q-text { font-weight: 500; line-height: 1.55; font-size: 1.0em; white-space: pre-wrap; word-wrap: break-word; }
  .pe-opt { display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; padding: 10px 14px; margin: 7px 0; border: 1px solid var(--background-modifier-border); background: var(--background-secondary); cursor: pointer; border-radius: 6px; color: var(--text-normal); font-size: 0.95em; line-height: 1.45; transition: all 120ms ease; font-family: inherit; }
  .pe-opt:hover:not(:disabled) { background: var(--background-modifier-hover); }
  .pe-opt.selected { background: rgba(56, 139, 253, 0.14); border-color: rgba(56, 139, 253, 0.55); }
  .pe-opt-letter { font-weight: 600; color: var(--text-muted); flex-shrink: 0; min-width: 18px; }
  .pe-opt-text { flex: 1; }
  .pe-opt.graded-correct-selected { background: rgba(63, 185, 80, 0.18); border-color: rgba(63, 185, 80, 0.55); }
  .pe-opt.graded-correct-missed { background: rgba(63, 185, 80, 0.08); border-color: rgba(63, 185, 80, 0.45); border-style: dashed; }
  .pe-opt.graded-wrong-selected { background: rgba(248, 81, 73, 0.14); border-color: rgba(248, 81, 73, 0.5); }
  .pe-opt.graded-neutral { opacity: 0.65; }
  .pe-grade-btn { display: block; margin: 30px auto 10px; padding: 13px 36px; font-size: 1.05em; font-weight: 600; background: var(--interactive-accent); color: var(--text-on-accent); border: none; border-radius: 8px; cursor: pointer; transition: all 120ms ease; }
  .pe-grade-btn:hover:not(:disabled) { filter: brightness(1.1); }
  .pe-grade-btn:disabled { opacity: 0.6; cursor: not-allowed; }
  .pe-feedback { margin-top: 14px; padding: 12px 16px; border-radius: 6px; font-size: 0.9em; line-height: 1.55; display: none; }
  .pe-feedback.correct { background: rgba(63, 185, 80, 0.08); border-left: 3px solid rgba(63, 185, 80, 0.6); }
  .pe-feedback.incorrect { background: rgba(248, 81, 73, 0.08); border-left: 3px solid rgba(248, 81, 73, 0.55); }
  .pe-feedback .pe-fb-row { margin: 6px 0; }
  .pe-feedback .pe-fb-letter { display: inline-block; font-weight: 600; margin-right: 6px; }
  .pe-feedback .pe-fb-link { margin-top: 8px; font-size: 0.85em; color: var(--text-muted); }
  .pe-feedback .pe-fb-link a { color: var(--text-accent); text-decoration: none; }
  .pe-report { padding: 22px 26px; margin: 0 0 28px; border-radius: 10px; background: var(--background-primary-alt); border: 2px solid var(--background-modifier-border); }
  .pe-report h2 { margin-top: 0; }
  .pe-score-line { font-size: 1.3em; font-weight: 600; margin: 10px 0; }
  .pe-score-percent { font-size: 1.6em; }
  .pe-score-percent.pass { color: rgb(63, 185, 80); }
  .pe-score-percent.fail { color: rgb(248, 81, 73); }
  .pe-pass-note { font-size: 0.9em; color: var(--text-muted); margin: 6px 0 18px; }
  .pe-domain-table { width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9em; }
  .pe-domain-table th, .pe-domain-table td { padding: 8px 12px; text-align: left; border-bottom: 1px solid var(--background-modifier-border); }
  .pe-domain-table th { font-weight: 600; color: var(--text-muted); }
  .pe-domain-table .pe-dt-score { text-align: right; font-variant-numeric: tabular-nums; }
  .pe-miss-list { margin: 14px 0 4px; padding-left: 20px; }
  .pe-miss-list li { margin: 6px 0; font-size: 0.9em; }
  .pe-miss-list a { color: var(--text-accent); text-decoration: none; }
  .pe-miss-list a:hover { text-decoration: underline; }
  .pbq-section-header { margin-top: 8px; margin-bottom: 14px; font-size: 1.05em; color: var(--text-muted); font-weight: 600; letter-spacing: 0.02em; border-bottom: 1px solid var(--background-modifier-border); padding-bottom: 8px; }
  .pbq-prompt { font-style: italic; color: var(--text-muted); margin: 8px 0 14px; font-size: 0.92em; line-height: 1.5; }
  .pbq-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
  .pbq-table td { padding: 9px 10px; vertical-align: middle; border-bottom: 1px solid var(--background-modifier-border); font-size: 0.95em; }
  .pbq-table td.pbq-desc-cell { padding-right: 18px; line-height: 1.45; }
  .pbq-table td.pbq-sel-cell { width: 230px; text-align: right; }
  .pbq-select { padding: 6px 10px; border-radius: 4px; border: 1px solid var(--background-modifier-border); background: var(--background-secondary); color: var(--text-normal); font-size: 0.9em; min-width: 210px; font-family: inherit; }
  .pbq-select:focus { outline: 2px solid var(--interactive-accent); outline-offset: 1px; }
  .pbq-select:disabled { opacity: 0.85; cursor: default; }
  .pbq-row-correct { background: rgba(63, 185, 80, 0.08); }
  .pbq-row-wrong { background: rgba(248, 81, 73, 0.06); }
  .pbq-srv-list { font-size: 0.85em; color: var(--text-muted); margin: 10px 0; padding: 9px 12px; background: var(--background-secondary); border-radius: 4px; line-height: 1.7; }
  .pbq-rule { margin: 14px 0; padding: 12px 14px; background: var(--background-secondary); border-radius: 6px; border: 1px solid var(--background-modifier-border); }
  .pbq-rule-goal { font-weight: 500; margin-bottom: 10px; font-size: 0.92em; line-height: 1.5; }
  .pbq-fw-table { width: 100%; border-collapse: collapse; font-size: 0.85em; }
  .pbq-fw-table th { text-align: left; padding: 4px 6px; color: var(--text-muted); font-weight: 600; font-size: 0.78em; text-transform: uppercase; letter-spacing: 0.03em; }
  .pbq-fw-table td { padding: 4px 6px; }
  .pbq-fw-select { min-width: 95px; font-size: 0.85em; padding: 4px 8px; }
  .pbq-report-tbl { width: 100%; border-collapse: collapse; margin: 10px 0 14px; font-size: 0.9em; }
  .pbq-report-tbl th, .pbq-report-tbl td { padding: 8px 12px; text-align: left; border-bottom: 1px solid var(--background-modifier-border); }
  .pbq-report-tbl th { font-weight: 600; color: var(--text-muted); }
  .pbq-report-tbl .pbq-rt-score { text-align: right; font-variant-numeric: tabular-nums; }
  .pbq-report-tbl a { color: var(--text-accent); text-decoration: none; }
  .pbq-report-tbl a:hover { text-decoration: underline; }
`;

const intro = root.createDiv({ cls: "pe-intro" });
intro.setText(`5 performance-based questions + ${questions.length} multiple-choice questions. Multi-select MCQs are flagged below. No feedback until you click Grade my test at the bottom.`);

const progress = root.createDiv({ cls: "pe-progress" });
const countPbqItems = (p) => {
  if (p.type === "match") return p.items.length;
  if (p.type === "firewall") return p.rules.reduce((s, r) => s + Object.keys(r.answer).length, 0);
  return 0;
};
const countPbqAnswered = (p) => {
  if (p.type === "match") return Object.values(pbqSelections[p.n]).filter(v => v).length;
  if (p.type === "firewall") {
    let n = 0;
    p.rules.forEach(r => {
      const sel = pbqSelections[p.n][r.id] || {};
      Object.keys(r.answer).forEach(k => { if (sel[k]) n++; });
    });
    return n;
  }
  return 0;
};
const pbqItemsTotal = pbqs.reduce((s, p) => s + countPbqItems(p), 0);
const updateProgress = () => {
  if (graded) return;
  const mcqAnswered = questions.filter(q => selections[q.n].size > 0).length;
  const pbqAnswered = pbqs.reduce((s, p) => s + countPbqAnswered(p), 0);
  progress.setText(`PBQ ${pbqAnswered}/${pbqItemsTotal}  ·  MCQ ${mcqAnswered}/${questions.length}`);
};
updateProgress();

const reportContainer = root.createDiv();

const pbqHeader = root.createDiv({ cls: "pbq-section-header" });
pbqHeader.setText("Performance-Based Questions · C1–C5");

const pbqContainer = root.createDiv();

pbqs.forEach(p => {
  const card = pbqContainer.createDiv({ cls: "pe-card" });
  card.id = `pe-pbq-${p.n}`;

  const hdr = card.createDiv({ cls: "pe-q-header" });
  hdr.createEl("span", { cls: "pe-q-num", text: `PBQ · C${p.n}` });
  if (p.objective) {
    const objTag = hdr.createEl("span", { cls: "pe-q-tag" });
    objTag.setText(`Obj ${p.objective}`);
  }

  card.createEl("div", { cls: "pe-q-text", text: p.title });
  const promptEl = card.createDiv({ cls: "pbq-prompt" });
  promptEl.setText(p.prompt);

  if (p.type === "match") {
    const tbl = card.createEl("table", { cls: "pbq-table" });
    p.items.forEach(item => {
      const tr = tbl.createEl("tr");
      tr.dataset.itemId = item.id;
      tr.createEl("td", { cls: "pbq-desc-cell", text: item.desc });
      const tdSel = tr.createEl("td", { cls: "pbq-sel-cell" });
      const sel = tdSel.createEl("select", { cls: "pbq-select" });
      const def = sel.createEl("option", { text: "— Select —" });
      def.value = "";
      p.options.forEach(opt => {
        const o = sel.createEl("option", { text: opt });
        o.value = opt;
      });
      sel.onchange = () => {
        if (graded) return;
        pbqSelections[p.n][item.id] = sel.value;
        updateProgress();
      };
    });
  } else if (p.type === "firewall") {
    const srvList = card.createDiv({ cls: "pbq-srv-list" });
    srvList.createEl("strong", { text: "Servers: " });
    p.servers.forEach((s, i) => {
      srvList.appendText(`${s.name} ${s.ip}`);
      if (i < p.servers.length - 1) srvList.appendText("  ·  ");
    });

    p.rules.forEach((rule, idx) => {
      const ruleBox = card.createDiv({ cls: "pbq-rule" });
      ruleBox.dataset.ruleId = rule.id;
      ruleBox.createEl("div", { cls: "pbq-rule-goal", text: `Rule ${idx + 1}: ${rule.goal}` });

      const tbl = ruleBox.createEl("table", { cls: "pbq-fw-table" });
      const thead = tbl.createEl("thead");
      const trh = thead.createEl("tr");
      ["Source IP", "Destination IP", "Protocol", "Port", "Action"].forEach(h => {
        trh.createEl("th", { text: h });
      });
      const tbody = tbl.createEl("tbody");
      const tr = tbody.createEl("tr");

      const ipOptions = p.servers.map(s => s.ip);
      const fields = [
        { key: "srcIP", options: ipOptions },
        { key: "dstIP", options: ipOptions },
        { key: "proto", options: ["TCP", "UDP"] },
        { key: "port", options: p.ports },
        { key: "action", options: ["Allow", "Block"] }
      ];

      fields.forEach(f => {
        const td = tr.createEl("td");
        const sel = td.createEl("select", { cls: "pbq-select pbq-fw-select" });
        const def = sel.createEl("option", { text: "—" });
        def.value = "";
        f.options.forEach(opt => {
          const o = sel.createEl("option", { text: opt });
          o.value = opt;
        });
        sel.dataset.field = f.key;
        sel.onchange = () => {
          if (graded) return;
          if (!pbqSelections[p.n][rule.id]) pbqSelections[p.n][rule.id] = {};
          pbqSelections[p.n][rule.id][f.key] = sel.value;
          updateProgress();
        };
      });
    });
  }

  const fb = card.createDiv({ cls: "pe-feedback" });
  fb.dataset.pbqN = p.n;
});

const mcqHeader = root.createDiv({ cls: "pbq-section-header" });
mcqHeader.setText("Multiple-Choice Questions · C6–C90");
mcqHeader.style.marginTop = "30px";


const cardsContainer = root.createDiv();

questions.forEach((q) => {
  const correctCount = q.opts.filter(o => o.c).length;
  const isMulti = correctCount > 1;

  const card = cardsContainer.createDiv({ cls: "pe-card" });
  card.id = `pe-q-${q.n}`;

  const header = card.createDiv({ cls: "pe-q-header" });
  header.createEl("span", { cls: "pe-q-num", text: `Q${q.n - 5}  ·  C${q.n}` });
  if (isMulti) {
    const tag = header.createEl("span", { cls: "pe-q-tag multi" });
    tag.setText(`Select ${correctCount}`);
  }
  if (q.objective) {
    const objTag = header.createEl("span", { cls: "pe-q-tag" });
    objTag.setText(`Obj ${q.objective}`);
  }

  card.createEl("div", { cls: "pe-q-text", text: q.q });

  const optButtons = {};
  q.opts.forEach(opt => {
    const btn = card.createEl("button", { cls: "pe-opt" });
    const letterSpan = btn.createEl("span", { cls: "pe-opt-letter", text: `${opt.l}.` });
    const textSpan = btn.createEl("span", { cls: "pe-opt-text", text: opt.t });
    optButtons[opt.l] = btn;
    btn.onclick = () => {
      if (graded) return;
      const sel = selections[q.n];
      if (isMulti) {
        if (sel.has(opt.l)) {
          sel.delete(opt.l);
          btn.classList.remove("selected");
        } else {
          sel.add(opt.l);
          btn.classList.add("selected");
        }
      } else {
        sel.clear();
        Object.values(optButtons).forEach(b => b.classList.remove("selected"));
        sel.add(opt.l);
        btn.classList.add("selected");
      }
      updateProgress();
    };
  });

  const feedback = card.createDiv({ cls: "pe-feedback" });
  feedback.dataset.qnum = q.n;
});

const gradeBtn = root.createEl("button", { cls: "pe-grade-btn", text: "Grade my test" });

gradeBtn.onclick = () => {
  if (graded) return;
  graded = true;
  gradeBtn.disabled = true;
  gradeBtn.setText("Test graded — scroll up for your report card");
  progress.style.display = "none";

  // ---- Grade PBQs ----
  let pbqItemsCorrect = 0;
  const pbqResults = {};

  pbqs.forEach(p => {
    pbqResults[p.n] = { correct: 0, total: 0, details: [] };
    const card = document.getElementById(`pe-pbq-${p.n}`);
    card.querySelectorAll("select.pbq-select").forEach(s => { s.disabled = true; });

    if (p.type === "match") {
      p.items.forEach(item => {
        const got = pbqSelections[p.n][item.id] || "";
        const right = (got === item.answer);
        pbqResults[p.n].total += 1;
        if (right) { pbqResults[p.n].correct += 1; pbqItemsCorrect += 1; }
        pbqResults[p.n].details.push({ kind: "match", desc: item.desc, got, expected: item.answer, right, w: item.w });
        const tr = card.querySelector(`tr[data-item-id="${item.id}"]`);
        if (tr) tr.classList.add(right ? "pbq-row-correct" : "pbq-row-wrong");
      });
    } else if (p.type === "firewall") {
      p.rules.forEach(rule => {
        const sel = pbqSelections[p.n][rule.id] || {};
        const fieldRights = {};
        let ruleAllRight = true;
        Object.keys(rule.answer).forEach(k => {
          const got = sel[k] || "";
          const right = (got === rule.answer[k]);
          fieldRights[k] = { got, expected: rule.answer[k], right };
          pbqResults[p.n].total += 1;
          if (right) { pbqResults[p.n].correct += 1; pbqItemsCorrect += 1; }
          else ruleAllRight = false;
        });
        pbqResults[p.n].details.push({ kind: "firewall", goal: rule.goal, fields: fieldRights, w: rule.w, allRight: ruleAllRight });
        const rb = card.querySelector(`div[data-rule-id="${rule.id}"]`);
        if (rb) rb.classList.add(ruleAllRight ? "pbq-row-correct" : "pbq-row-wrong");
      });
    }

    const fb = card.querySelector(".pe-feedback");
    const allRight = pbqResults[p.n].correct === pbqResults[p.n].total;
    fb.classList.add(allRight ? "correct" : "incorrect");
    fb.style.display = "";
    const headerRow = fb.createDiv({ cls: "pe-fb-row" });
    headerRow.innerHTML = `<strong>${allRight ? "✓" : "✗"} ${pbqResults[p.n].correct} / ${pbqResults[p.n].total} item${pbqResults[p.n].total === 1 ? "" : "s"} correct</strong>`;

    pbqResults[p.n].details.forEach((d, idx) => {
      if (d.kind === "match") {
        const row = fb.createDiv({ cls: "pe-fb-row" });
        const mark = d.right ? "✓" : "✗";
        const yourPart = d.got ? `picked <em>${escapeHtml(d.got)}</em>` : `<em>no answer</em>`;
        row.innerHTML = `<strong>${mark}</strong> ${escapeHtml(d.desc)} → <strong>${escapeHtml(d.expected)}</strong>${d.right ? "" : ` &nbsp;(${yourPart})`}`;
        if (!d.right && d.w) {
          const why = fb.createDiv();
          why.style.marginLeft = "22px";
          why.style.fontSize = "0.88em";
          why.style.color = "var(--text-muted)";
          why.style.marginTop = "2px";
          why.setText(d.w);
        }
      } else if (d.kind === "firewall") {
        const row = fb.createDiv({ cls: "pe-fb-row" });
        row.style.marginTop = "10px";
        const mark = d.allRight ? "✓" : "✗";
        row.innerHTML = `<strong>${mark} Rule ${idx + 1}:</strong> ${escapeHtml(d.goal)}`;
        Object.keys(d.fields).forEach(k => {
          const f = d.fields[k];
          if (!f.right) {
            const sub = fb.createDiv();
            sub.style.marginLeft = "22px";
            sub.style.fontSize = "0.88em";
            const labelMap = { srcIP: "Source IP", dstIP: "Destination IP", proto: "Protocol", port: "Port", action: "Action" };
            sub.innerHTML = `<strong>${labelMap[k]}:</strong> ${escapeHtml(f.expected)} <span style="color:var(--text-muted)">(you picked ${escapeHtml(f.got || "—")})</span>`;
          }
        });
        if (!d.allRight && d.w) {
          const why = fb.createDiv();
          why.style.marginLeft = "22px";
          why.style.fontSize = "0.88em";
          why.style.color = "var(--text-muted)";
          why.style.marginTop = "4px";
          why.setText(d.w);
        }
      }
    });

    if (p.url) {
      const linkRow = fb.createDiv({ cls: "pe-fb-link" });
      linkRow.innerHTML = `Reference: <a href="${p.url}" target="_blank" rel="noopener">Objective ${escapeHtml(p.objective)}</a>`;
    }
  });

  let totalCorrect = 0;
  const missed = [];
  const domainStats = {};

  questions.forEach((q) => {
    const sel = selections[q.n];
    const correctLetters = new Set(q.opts.filter(o => o.c).map(o => o.l));
    const allRight = sel.size === correctLetters.size && [...sel].every(l => correctLetters.has(l));

    if (q.domain) {
      if (!domainStats[q.domain]) domainStats[q.domain] = { right: 0, total: 0 };
      domainStats[q.domain].total += 1;
      if (allRight) domainStats[q.domain].right += 1;
    }

    if (allRight) totalCorrect += 1;
    else missed.push(q);

    const card = document.getElementById(`pe-q-${q.n}`);
    const buttons = card.querySelectorAll(".pe-opt");
    buttons.forEach(btn => {
      const letter = btn.querySelector(".pe-opt-letter").innerText.replace(".", "");
      const isSel = sel.has(letter);
      const isCorrect = correctLetters.has(letter);
      btn.classList.remove("selected");
      btn.disabled = true;
      if (isCorrect && isSel) btn.classList.add("graded-correct-selected");
      else if (isCorrect && !isSel) btn.classList.add("graded-correct-missed");
      else if (!isCorrect && isSel) btn.classList.add("graded-wrong-selected");
      else btn.classList.add("graded-neutral");
    });

    const fb = card.querySelector(".pe-feedback");
    fb.classList.add(allRight ? "correct" : "incorrect");
    fb.style.display = "";

    const headerRow = fb.createDiv({ cls: "pe-fb-row" });
    headerRow.innerHTML = allRight
      ? "<strong>✓ Correct</strong>"
      : (sel.size === 0
          ? "<strong>✗ No answer</strong>"
          : "<strong>✗ Incorrect</strong>");

    const firstCorrect = q.opts.find(o => o.c);
    if (firstCorrect) {
      const row = fb.createDiv({ cls: "pe-fb-row" });
      const correctLettersStr = q.opts.filter(o => o.c).map(o => o.l).join(", ");
      const correctTexts = q.opts.filter(o => o.c).map(o => o.t).join("; ");
      const strong = row.createEl("strong");
      strong.setText(`Answer: ${correctLettersStr}. ${correctTexts}`);
      const why = row.createDiv();
      why.style.marginTop = "6px";
      why.setText(firstCorrect.w);
    }

    const wrongPicked = [...sel].filter(l => !correctLetters.has(l));
    if (wrongPicked.length > 0) {
      const row = fb.createDiv({ cls: "pe-fb-row" });
      row.style.marginTop = "10px";
      const strong = row.createEl("strong");
      strong.setText("Why your pick was wrong:");
      wrongPicked.forEach(l => {
        const opt = q.opts.find(o => o.l === l);
        const sub = row.createDiv();
        sub.style.marginTop = "4px";
        sub.innerHTML = `<span class="pe-fb-letter">${l}.</span> ${escapeHtml(opt.w)}`;
      });
    }

    if (q.url) {
      const linkRow = fb.createDiv({ cls: "pe-fb-link" });
      linkRow.innerHTML = `Reference: <a href="${q.url}" target="_blank" rel="noopener">${escapeHtml(q.topic)}</a>`;
    }
  });

  const total = questions.length;
  const pct = (totalCorrect / total) * 100;
  const strictPass = pct >= 83;

  reportContainer.empty();
  const report = reportContainer.createDiv({ cls: "pe-report" });
  report.createEl("h2", { text: "Report Card" });

  const scoreLine = report.createDiv({ cls: "pe-score-line" });
  scoreLine.innerHTML = `MCQ: ${totalCorrect} / ${total} correct&nbsp;&nbsp;<span class="pe-score-percent ${strictPass ? "pass" : "fail"}">${pct.toFixed(1)}%</span>`;

  const passNote = report.createDiv({ cls: "pe-pass-note" });
  passNote.setText(strictPass
    ? `Above the ~83% CompTIA scaled-pass benchmark. Solid.`
    : `Below the ~83% CompTIA scaled-pass benchmark (≈ 750/900). Review the misses below.`);

  // PBQ section in report
  report.createEl("h3", { text: "Performance-Based (C1–C5)" });
  const pbqRptTbl = report.createEl("table", { cls: "pbq-report-tbl" });
  const pbqThead = pbqRptTbl.createEl("thead");
  const pbqTrh = pbqThead.createEl("tr");
  pbqTrh.createEl("th", { text: "PBQ" });
  pbqTrh.createEl("th", { text: "Topic" });
  pbqTrh.createEl("th", { text: "Score", cls: "pbq-rt-score" });
  pbqTrh.createEl("th", { text: "%", cls: "pbq-rt-score" });
  const pbqTbody = pbqRptTbl.createEl("tbody");
  pbqs.forEach(p => {
    const r = pbqResults[p.n];
    const tr = pbqTbody.createEl("tr");
    const tdN = tr.createEl("td");
    const link = tdN.createEl("a", { href: `#pe-pbq-${p.n}`, text: `C${p.n}` });
    link.onclick = (e) => {
      e.preventDefault();
      document.getElementById(`pe-pbq-${p.n}`).scrollIntoView({ behavior: "smooth", block: "start" });
    };
    tr.createEl("td", { text: p.title });
    tr.createEl("td", { text: `${r.correct} / ${r.total}`, cls: "pbq-rt-score" });
    const pct2 = r.total > 0 ? (r.correct / r.total * 100).toFixed(0) : "—";
    tr.createEl("td", { text: `${pct2}%`, cls: "pbq-rt-score" });
  });
  const pbqTotalItems = pbqs.reduce((s, p) => s + pbqResults[p.n].total, 0);
  const pbqSummary = report.createDiv();
  pbqSummary.style.fontSize = "0.9em";
  pbqSummary.style.marginTop = "4px";
  pbqSummary.style.marginBottom = "18px";
  pbqSummary.innerHTML = `<strong>PBQ total:</strong> ${pbqItemsCorrect} / ${pbqTotalItems} items`;

  // Domain breakdown
  report.createEl("h3", { text: "By domain" });
  const table = report.createEl("table", { cls: "pe-domain-table" });
  const thead = table.createEl("thead");
  const trh = thead.createEl("tr");
  trh.createEl("th", { text: "Domain" });
  trh.createEl("th", { text: "Score", cls: "pe-dt-score" });
  trh.createEl("th", { text: "%", cls: "pe-dt-score" });
  const tbody = table.createEl("tbody");
  Object.keys(domainNames).sort().forEach(d => {
    const s = domainStats[d] || { right: 0, total: 0 };
    if (s.total === 0) return;
    const tr = tbody.createEl("tr");
    tr.createEl("td", { text: domainNames[d] });
    tr.createEl("td", { text: `${s.right} / ${s.total}`, cls: "pe-dt-score" });
    tr.createEl("td", { text: `${((s.right / s.total) * 100).toFixed(0)}%`, cls: "pe-dt-score" });
  });

  if (missed.length > 0) {
    report.createEl("h3", { text: `Missed questions (${missed.length})` });
    const ul = report.createEl("ul", { cls: "pe-miss-list" });
    missed.forEach(q => {
      const li = ul.createEl("li");
      const a = li.createEl("a", { href: `#pe-q-${q.n}` });
      a.setText(`Q${q.n - 5} (C${q.n})`);
      a.onclick = (e) => {
        e.preventDefault();
        document.getElementById(`pe-q-${q.n}`).scrollIntoView({ behavior: "smooth", block: "start" });
      };
      const objLabel = q.objective ? ` — Obj ${q.objective}` : "";
      li.appendText(`${objLabel} — ${truncate(q.q.split("\n")[0], 90)}`);
    });
  } else {
    report.createEl("p", { text: "No misses. Clean sweep." });
  }

  report.scrollIntoView({ behavior: "smooth", block: "start" });
};

function escapeHtml(s) {
  return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function truncate(s, n) {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}
```


---

## Misses log

*(none yet — fill in after the first session: date, score, themes from missed Qs)*
