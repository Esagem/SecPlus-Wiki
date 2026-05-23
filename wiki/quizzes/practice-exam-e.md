---
title: Practice Exam E — Original SY0-701 Drill
category: practice-exam
tags: [practice-exam, full-exam, sy0-701]
status: active
confidence: high
created: 2026-05-22
updated: 2026-05-23
covers: 
source: Original content, written for SY0-701 objectives
---

# Practice Exam E — Original SY0-701 Drill

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
{"n":39,"q":"A company moves their entire email system to Microsoft 365. Which cloud service model is this?","opts":[{"l":"A","t":"IaaS","c":false,"w":"IaaS = raw VMs. M365 abstracts everything below the app."},{"l":"B","t":"PaaS","c":false,"w":"PaaS = managed runtime. M365 doesn't expose a runtime; it's a finished application."},{"l":"C","t":"SaaS","c":true,"w":"Software-as-a-Service: provider runs the full application; customer configures and uses. Email/CRM/HR systems are typical SaaS."},{"l":"D","t":"FaaS","c":false,"w":"FaaS = serverless functions. Different model."}],"topic":"SY0-701, Objective 3.1 - Cloud Infrastructures","url":"https://professormesser.link/701030101","objective":"3.1","domain":"3"},
{"n":40,"q":"A development team uses AWS Lambda to run code in response to events without managing servers. Which model fits BEST?","opts":[{"l":"A","t":"IaaS","c":false,"w":"IaaS exposes VMs. Lambda doesn't."},{"l":"B","t":"Serverless / FaaS","c":true,"w":"Function-as-a-Service / serverless: provider manages everything including runtime and scaling. You upload code; events trigger it."},{"l":"C","t":"SaaS","c":false,"w":"SaaS is an end-user application, not a code-execution platform."},{"l":"D","t":"Private cloud","c":false,"w":"AWS Lambda is public cloud."}],"topic":"SY0-701, Objective 3.1 - Other Infrastructure Concepts","url":"https://professormesser.link/701030103","objective":"3.1","domain":"3"},
{"n":41,"q":"A team packages an application with its dependencies into an isolated unit that can run on any Docker-compatible host. This is:","opts":[{"l":"A","t":"Virtual machine","c":false,"w":"VMs virtualize an entire OS. Containers share the host kernel and are lighter."},{"l":"B","t":"Containerization","c":true,"w":"Containers package the app and its dependencies for portable, lightweight, isolated deployment."},{"l":"C","t":"Bare-metal deployment","c":false,"w":"Bare metal = no virtualization or containerization."},{"l":"D","t":"Microservices architecture","c":false,"w":"Microservices is an application-design pattern. Containers are often used to deploy microservices, but they're not synonyms."}],"topic":"SY0-701, Objective 3.1 - Other Infrastructure Concepts","url":"https://professormesser.link/701030103","objective":"3.1","domain":"3"},
{"n":42,"q":"Two networks are physically isolated with no electronic connection of any kind. This is:","opts":[{"l":"A","t":"Air gap","c":true,"w":"Air-gapped networks have no physical electronic path. Data movement requires sneakernet (USB, etc.). Used for the highest-sensitivity environments."},{"l":"B","t":"DMZ","c":false,"w":"DMZs have connectivity — they're between firewalls, not isolated."},{"l":"C","t":"VPN","c":false,"w":"VPNs connect over a public network. Opposite of isolation."},{"l":"D","t":"Microsegmentation","c":false,"w":"Microsegmentation is about fine-grained policy, not physical isolation."}],"topic":"SY0-701, Objective 3.2 - Network Architecture","url":"https://professormesser.link/701030202","objective":"3.2","domain":"3"},
{"n":43,"q":"A reverse proxy sits in front of web servers. Which of the following is NOT a typical reverse-proxy function?","opts":[{"l":"A","t":"TLS termination","c":false,"w":"Standard reverse-proxy function."},{"l":"B","t":"Load balancing across backend servers","c":false,"w":"Standard reverse-proxy function."},{"l":"C","t":"Inspecting client requests for malicious patterns (WAF-style)","c":false,"w":"Many reverse proxies include WAF features."},{"l":"D","t":"Issuing TLS certificates to clients","c":true,"w":"That's a CA function, not a reverse-proxy function. The other three are bread-and-butter reverse-proxy capabilities."}],"topic":"SY0-701, Objective 3.2 - Network Security Devices","url":"https://professormesser.link/701030203","objective":"3.2","domain":"3"},
{"n":44,"q":"Which protocol provides confidentiality, integrity, and authentication at the IP layer and is commonly used for site-to-site VPNs?","opts":[{"l":"A","t":"SSH","c":false,"w":"SSH operates at the application layer. Different scope."},{"l":"B","t":"IPsec","c":true,"w":"IPsec = IP Security suite. Operates at L3, provides AH (integrity/auth) and ESP (encryption). The standard for site-to-site VPNs."},{"l":"C","t":"TLS","c":false,"w":"TLS operates above the transport layer. Used for site-to-site in some products but IPsec is the IP-layer answer."},{"l":"D","t":"HTTP","c":false,"w":"HTTP is plaintext application-layer."}],"topic":"SY0-701, Objective 3.2 - Secure Communication","url":"https://professormesser.link/701030207","objective":"3.2","domain":"3"},
{"n":45,"q":"A company's web application needs to be accessible only to authenticated employees from approved devices, regardless of whether they're on the corporate network or working from a coffee shop. The MOST appropriate architecture is:","opts":[{"l":"A","t":"Place the app behind a traditional VPN concentrator","c":false,"w":"VPN-based approaches still rely on network-location trust. Doesn't fit the 'regardless of network' framing well."},{"l":"B","t":"Use zero-trust network access (ZTNA) — authenticate user and device per-request","c":true,"w":"ZTNA treats every request as untrusted regardless of network location, making location-independent access the default. Identity + device posture drive access."},{"l":"C","t":"Open the app to the public internet without authentication","c":false,"w":"Doesn't satisfy 'only to authenticated employees.'"},{"l":"D","t":"Move the app onto an air-gapped network","c":false,"w":"Air-gap is the opposite of 'accessible from anywhere.'"}],"topic":"SY0-701, Objective 3.2 - Network Architecture","url":"https://professormesser.link/701030202","objective":"3.2","domain":"3"},
{"n":46,"q":"A bank tokenizes credit card numbers — every CC number gets replaced with a random surrogate value, and the mapping is stored in a separate vault. The PRIMARY benefit is:","opts":[{"l":"A","t":"The token can be used everywhere the card number used to be, but losing the token doesn't expose the actual card data","c":true,"w":"Tokens are useful within the system but contain no recoverable card data on their own. Compromising a downstream service yields tokens, not card numbers."},{"l":"B","t":"Tokens are smaller and save disk space","c":false,"w":"Tokens are typically similar size to the original; storage isn't the benefit."},{"l":"C","t":"Tokens encrypt themselves","c":false,"w":"Tokens are not encrypted versions of the data — they're substitute values with no mathematical relationship."},{"l":"D","t":"Tokenization eliminates PCI-DSS compliance entirely","c":false,"w":"Tokenization reduces scope significantly but doesn't eliminate compliance."}],"topic":"SY0-701, Objective 3.3 - Protecting Data","url":"https://professormesser.link/701030303","objective":"3.3","domain":"3"},
{"n":47,"q":"Which of the following is the BEST example of 'data in use'?","opts":[{"l":"A","t":"Files sitting on a SAN waiting to be read","c":false,"w":"That's data at rest."},{"l":"B","t":"An HTTPS request crossing the internet","c":false,"w":"That's data in transit."},{"l":"C","t":"Credit card numbers being decrypted in application memory for validation","c":true,"w":"In use = in memory being actively processed. Decryption-for-validation is the canonical 'in use' moment."},{"l":"D","t":"A backup tape stored at an off-site facility","c":false,"w":"That's data at rest."}],"topic":"SY0-701, Objective 3.3 - States of Data","url":"https://professormesser.link/701030302","objective":"3.3","domain":"3"},
{"n":48,"q":"An organization classifies data into 'Public,' 'Internal,' 'Confidential,' and 'Restricted.' What is the PRIMARY value of doing this?","opts":[{"l":"A","t":"Compliance reporting becomes simpler","c":false,"w":"Partial benefit but not the primary value."},{"l":"B","t":"Different sensitivity levels get controls proportional to their risk — encryption, access restrictions, retention policies, etc.","c":true,"w":"Classification drives proportional control. Encrypting every email is impractical; encrypting the right emails based on label is the point."},{"l":"C","t":"All data gets the same protections","c":false,"w":"That's the opposite of why you classify."},{"l":"D","t":"Classification eliminates the need for access controls","c":false,"w":"Classification informs access control; it doesn't replace it."}],"topic":"SY0-701, Objective 3.3 - Data Types and Classifications","url":"https://professormesser.link/701030301","objective":"3.3","domain":"3"},
{"n":49,"q":"A storage system uses two complete copies of every disk's data on two separate physical drives. This is:","opts":[{"l":"A","t":"RAID 0","c":false,"w":"RAID 0 stripes for performance with no redundancy."},{"l":"B","t":"RAID 1 (mirroring)","c":true,"w":"Full disk-for-disk copies on separate drives is mirroring. Can lose one drive entirely and keep operating."},{"l":"C","t":"RAID 5","c":false,"w":"RAID 5 stripes with distributed parity. Not full mirrors."},{"l":"D","t":"RAID 10","c":false,"w":"RAID 10 combines mirroring AND striping. Just mirroring is RAID 1."}],"topic":"SY0-701, Objective 3.4 - Resiliency","url":"https://professormesser.link/701030402","objective":"3.4","domain":"3"},
{"n":50,"q":"Which of the following BEST distinguishes RTO from RPO?","opts":[{"l":"A","t":"RTO = how fast you must be back up; RPO = how much recent data you can afford to lose","c":true,"w":"RTO is a TIME-TO-RECOVERY target. RPO is a DATA-LOSS-TOLERANCE target. Different axes."},{"l":"B","t":"RTO and RPO are synonyms","c":false,"w":"They aren't."},{"l":"C","t":"RTO measures network latency; RPO measures storage IOPS","c":false,"w":"Wrong concepts."},{"l":"D","t":"RTO applies to email only; RPO applies to databases only","c":false,"w":"Both apply to any service."}],"topic":"SY0-701, Objective 3.4 - Business Impact Analysis","url":"https://professormesser.link/701050204","objective":"3.4","domain":"3"},
{"n":51,"q":"Why is regularly testing backups by performing real restores important, beyond just ensuring backups completed without errors?","opts":[{"l":"A","t":"It uses up extra disk space, which is a goal","c":false,"w":"Disk usage is not the goal."},{"l":"B","t":"Backups that complete 'successfully' can still be unrestorable — encryption issues, missing files, corruption, or process gaps surface only during a real restore","c":true,"w":"A backup you've never restored is hope, not a recovery plan. Testing surfaces real problems before you actually need recovery."},{"l":"C","t":"Restore tests change the data, which is helpful","c":false,"w":"Restore tests should not mutate live data; if they do, the test isn't well-designed."},{"l":"D","t":"Regulations require all backups to be restored monthly","c":false,"w":"Some regulations require periodic restore testing, but the general principle is operational."}],"topic":"SY0-701, Objective 3.4 - Resiliency","url":"https://professormesser.link/701030402","objective":"3.4","domain":"3"},
{"n":52,"q":"A 3-2-1 backup strategy means:","opts":[{"l":"A","t":"3 backups, 2 of them on tape, 1 in the cloud","c":false,"w":"Specific media types aren't the rule."},{"l":"B","t":"3 copies of data total, on 2 different media types, with 1 copy offsite","c":true,"w":"3-2-1 is the canonical resiliency rule: total copies (3) spans media types (2) and locations (1 offsite). Survives most single-point failures."},{"l":"C","t":"3 hour RTO, 2 hour RPO, 1 backup per day","c":false,"w":"Confuses metrics with strategy."},{"l":"D","t":"Back up every 3, 2, and 1 hours respectively for different tiers","c":false,"w":"Not the standard."}],"topic":"SY0-701, Objective 3.4 - Resiliency","url":"https://professormesser.link/701030402","objective":"3.4","domain":"3"},
{"n":53,"q":"DNSSEC provides which of the following?","opts":[{"l":"A","t":"Encryption of DNS queries","c":false,"w":"DNSSEC does NOT encrypt queries — that's DoH/DoT."},{"l":"B","t":"Authentication and integrity of DNS responses via cryptographic signatures","c":true,"w":"DNSSEC ensures responses haven't been tampered with and came from the authoritative source. Confidentiality is not its goal."},{"l":"C","t":"Faster DNS resolution","c":false,"w":"DNSSEC adds overhead, not speed."},{"l":"D","t":"Anonymous DNS queries","c":false,"w":"That's a different goal entirely, not DNSSEC."}],"topic":"SY0-701, Objective 3.2 - Secure Communication","url":"https://professormesser.link/701030207","objective":"3.2","domain":"3"},
{"n":54,"q":"A field technician's company-issued tablet is lost during travel. Which control will MOST directly prevent the lost tablet from becoming a data breach?","opts":[{"l":"A","t":"MDM with remote wipe and full-device encryption enforced","c":true,"w":"Combine FDE (makes data unreadable without authentication) with remote wipe (zeroes the device on next check-in) and the lost tablet is a brick, not a breach."},{"l":"B","t":"Strong WiFi password on the corporate network","c":false,"w":"Irrelevant once the device is gone."},{"l":"C","t":"Network access control on corporate switches","c":false,"w":"Wired NAC doesn't help with a lost mobile device."},{"l":"D","t":"Quarterly security awareness training","c":false,"w":"Helpful generally; doesn't address the specific physical loss event."}],"topic":"SY0-701, Objective 4.1 - Securing Wireless and Mobile","url":"https://professormesser.link/701040103","objective":"4.1","domain":"4"},
{"n":55,"q":"A company permits employees to use personal phones for work email and slack, but enforces a separate encrypted 'work container' on the device. This approach is BEST called:","opts":[{"l":"A","t":"COBO (Corporate-Owned, Business-Only)","c":false,"w":"COBO is fully company-owned with no personal use."},{"l":"B","t":"Containerization / dual-persona BYOD","c":true,"w":"Separating work data into an encrypted container on a personal device — work data isolated, personal data untouched."},{"l":"C","t":"Jailbreaking","c":false,"w":"Jailbreaking removes manufacturer restrictions. Opposite direction."},{"l":"D","t":"Geofencing","c":false,"w":"Geofencing restricts based on location. Different feature."}],"topic":"SY0-701, Objective 4.1 - Securing Wireless and Mobile","url":"https://professormesser.link/701040103","objective":"4.1","domain":"4"},
{"n":56,"q":"An organization restricts WiFi to WPA3-Enterprise with certificate-based authentication. The PRIMARY benefit over WPA2-PSK is:","opts":[{"l":"A","t":"WPA3 transmits passwords in plaintext for easier troubleshooting","c":false,"w":"That would be a disaster, and is false."},{"l":"B","t":"Per-user authentication tied to identity (no shared PSK), and stronger key exchange (SAE) resistant to offline cracking","c":true,"w":"WPA3-Enterprise uses 802.1X with per-user credentials. WPA2-PSK shares one password across everyone. WPA3 also adds SAE (Simultaneous Authentication of Equals)."},{"l":"C","t":"WPA3 doesn't actually encrypt; it just relies on the physical layer","c":false,"w":"WPA3 encrypts."},{"l":"D","t":"WPA3 works only on 2.4 GHz","c":false,"w":"WPA3 works on both bands."}],"topic":"SY0-701, Objective 4.1 - Securing Wireless and Mobile","url":"https://professormesser.link/701040103","objective":"4.1","domain":"4"},
{"n":57,"q":"When decommissioning servers that held PHI, the recommended sanitization is:","opts":[{"l":"A","t":"Quick format and donate to charity","c":false,"w":"Quick format doesn't destroy data; PHI cannot leave the organization recoverable."},{"l":"B","t":"Physical destruction (shredding/degaussing) or a NIST 800-88 'purge' procedure with verification","c":true,"w":"For regulated data like PHI, recoverability needs to be confirmed zero. NIST 800-88 defines verified destruction/purge."},{"l":"C","t":"Delete the partition and reboot","c":false,"w":"Trivially recoverable."},{"l":"D","t":"Encrypt the drive and store it in a cabinet","c":false,"w":"Doesn't sanitize it; only delays exposure."}],"topic":"SY0-701, Objective 4.2 - Asset Disposal","url":"https://professormesser.link/701040202","objective":"4.2","domain":"4"},
{"n":58,"q":"Why is maintaining an accurate inventory of all software installed across the fleet critical for vulnerability management?","opts":[{"l":"A","t":"You can only patch what you know you have; unknown software harbors unknown vulnerabilities","c":true,"w":"Vuln management is impossible without an inventory. CVEs are matched against installed versions — and you can't match against software you don't know exists."},{"l":"B","t":"Inventory is required for monthly accounting reports","c":false,"w":"Maybe for asset accounting; not the security argument."},{"l":"C","t":"Software licenses require manual inventory checks","c":false,"w":"Modern license management is automated."},{"l":"D","t":"Inventory eliminates the need for patching","c":false,"w":"Opposite — inventory enables patching."}],"topic":"SY0-701, Objective 4.2 - Asset Management","url":"https://professormesser.link/701040201","objective":"4.2","domain":"4"},
{"n":59,"q":"A penetration tester is asked to exclude the customer database from active exploit attempts but is otherwise free to attack production. This is BEST described as:","opts":[{"l":"A","t":"Rules of engagement","c":true,"w":"ROE define what's in and out of scope for the engagement — what assets, what techniques, what hours, what permitted side effects."},{"l":"B","t":"Risk register","c":false,"w":"Risk register catalogues risks generally."},{"l":"C","t":"Service-level agreement","c":false,"w":"SLAs are uptime/performance commitments."},{"l":"D","t":"Acceptable use policy","c":false,"w":"AUPs govern employees, not pentest scope."}],"topic":"SY0-701, Objective 4.3 - Penetration Testing","url":"https://professormesser.link/701040303","objective":"4.3","domain":"4"},
{"n":60,"q":"A CVE has a CVSS score of 9.8 and a known PoC exploit circulating. The affected asset is an internal-only database with no inbound network access from the internet. Which approach is BEST?","opts":[{"l":"A","t":"Treat it the same as any internet-facing 9.8 CVE — patch immediately","c":false,"w":"Severity is real but exposure is also a factor in real prioritization."},{"l":"B","t":"Combine CVSS severity with the asset's actual exposure and exploit chain feasibility before assigning a priority","c":true,"w":"Vulnerability prioritization is severity × exposure × asset value × exploit availability. Internal-only changes the practical risk significantly. Patch, but not necessarily before public-facing 9.8s."},{"l":"C","t":"Ignore it entirely because it's internal","c":false,"w":"Lateral movement makes internal exposures real. Don't ignore."},{"l":"D","t":"Wait for the next scheduled patch cycle six weeks out","c":false,"w":"Six weeks is too long for a 9.8 with PoC even on internal assets."}],"topic":"SY0-701, Objective 4.3 - Vulnerability Management","url":"https://professormesser.link/701040301","objective":"4.3","domain":"4"},
{"n":61,"q":"A SOAR playbook auto-quarantines any endpoint whose EDR fires a high-severity detection. Which risk does this automation introduce?","opts":[{"l":"A","t":"Increased detection latency","c":false,"w":"Automation reduces latency, not increases."},{"l":"B","t":"False positives can take production hosts offline without human review","c":true,"w":"Auto-actions on noisy signals can cause outages. SOAR playbooks need careful tuning of triggers and often a 'high-confidence' threshold before mutating actions."},{"l":"C","t":"Logs are no longer captured","c":false,"w":"SOAR doesn't disable logging."},{"l":"D","t":"Encrypted traffic becomes plaintext","c":false,"w":"Unrelated."}],"topic":"SY0-701, Objective 4.4 - Security Tools","url":"https://professormesser.link/701040402","objective":"4.4","domain":"4"},
{"n":62,"q":"What is the PRIMARY benefit of UEBA (User and Entity Behavior Analytics) over pure signature-based detection?","opts":[{"l":"A","t":"UEBA requires no tuning","c":false,"w":"It requires significant tuning."},{"l":"B","t":"UEBA establishes a behavioral baseline per user/entity and flags deviations, catching novel attacks signatures miss","c":true,"w":"Signatures catch known bad. UEBA catches 'unusual for this user' — useful for insider threats and novel attack patterns."},{"l":"C","t":"UEBA eliminates the need for endpoint security","c":false,"w":"It augments, doesn't replace."},{"l":"D","t":"UEBA is cheaper than SIEM","c":false,"w":"Often more expensive due to ML/storage requirements."}],"topic":"SY0-701, Objective 4.4 - Security Monitoring","url":"https://professormesser.link/701040401","objective":"4.4","domain":"4"},
{"n":63,"q":"Which of the following is the MOST important attribute of effective security alerts?","opts":[{"l":"A","t":"High volume — more alerts means better coverage","c":false,"w":"Alert fatigue is a real and serious problem. Volume is not the goal."},{"l":"B","t":"High signal-to-noise ratio: alerts must be actionable and tuned to minimize false positives","c":true,"w":"An alert that fires constantly with false positives gets ignored. Tuning to reduce false-positives is more valuable than raw alert count."},{"l":"C","t":"Sent only via fax","c":false,"w":"Channel doesn't matter the way tuning does."},{"l":"D","t":"Generated only during business hours","c":false,"w":"Attacks don't keep business hours; alerts shouldn't either."}],"topic":"SY0-701, Objective 4.4 - Security Tools","url":"https://professormesser.link/701040402","objective":"4.4","domain":"4"},
{"n":64,"q":"Which of the following is the BEST description of DMARC?","opts":[{"l":"A","t":"An email encryption standard","c":false,"w":"That's S/MIME or PGP."},{"l":"B","t":"A DNS policy that tells receivers what to do with email failing SPF and/or DKIM checks, and provides reporting","c":true,"w":"DMARC builds on SPF and DKIM by specifying enforcement (none/quarantine/reject) and reporting addresses for failures."},{"l":"C","t":"A spam filter installed on mail servers","c":false,"w":"DMARC isn't a filter — it's a policy declaration."},{"l":"D","t":"A backup protocol for SMTP","c":false,"w":"Not what DMARC is."}],"topic":"SY0-701, Objective 4.5 - Email Security","url":"https://professormesser.link/701040505","objective":"4.5","domain":"4"},
{"n":65,"q":"An organization has SPF and DKIM configured but DMARC set to 'p=none' (no enforcement). What's the practical implication?","opts":[{"l":"A","t":"Strict enforcement — failing messages are rejected","c":false,"w":"'p=none' is the opposite of strict."},{"l":"B","t":"Receivers see your failures and may send you reports, but they aren't required to act on failures (no quarantine, no reject)","c":true,"w":"'p=none' is monitoring mode. Useful to see what's failing and tune SPF/DKIM, but doesn't prevent spoofing on its own. Most orgs eventually move to p=quarantine then p=reject."},{"l":"C","t":"DKIM signing is disabled","c":false,"w":"DMARC doesn't disable DKIM."},{"l":"D","t":"All inbound email is blocked","c":false,"w":"DMARC is about outbound protection from your domain's perspective."}],"topic":"SY0-701, Objective 4.5 - Email Security","url":"https://professormesser.link/701040505","objective":"4.5","domain":"4"},
{"n":66,"q":"Inbound DLP differs from outbound DLP in that:","opts":[{"l":"A","t":"They are the same thing","c":false,"w":"They protect different directions."},{"l":"B","t":"Inbound focuses on detecting malicious content arriving (malware in attachments, hostile URLs); outbound focuses on sensitive data leaving (PII exfil, IP leakage)","c":true,"w":"Direction matters because the goals differ — protect users from arriving attacks vs. prevent sensitive data from leaving the organization."},{"l":"C","t":"Inbound DLP encrypts mail; outbound decrypts it","c":false,"w":"Not what DLP does."},{"l":"D","t":"Inbound is only for web traffic; outbound only for email","c":false,"w":"DLP operates across multiple channels in both directions."}],"topic":"SY0-701, Objective 4.5 - Email Security","url":"https://professormesser.link/701040505","objective":"4.5","domain":"4"},
{"n":67,"q":"Of the following authentication factor combinations, which is TRUE multi-factor authentication?","opts":[{"l":"A","t":"Password + security question","c":false,"w":"Both are 'something you know.' Single factor."},{"l":"B","t":"Password + SMS one-time code","c":true,"w":"Something you know (password) + something you have (the phone receiving SMS). Two different factor categories. (Note: SMS is the weakest 'have' factor due to SIM swap risk.)"},{"l":"C","t":"Fingerprint + retina scan","c":false,"w":"Both are 'something you are.' Single factor."},{"l":"D","t":"PIN + password","c":false,"w":"Both are 'something you know.' Single factor."}],"topic":"SY0-701, Objective 4.6 - Multi-factor Authentication","url":"https://professormesser.link/701040603","objective":"4.6","domain":"4"},
{"n":68,"q":"A phishing-resistant authentication factor that uses public-key cryptography and is bound to the website's origin is:","opts":[{"l":"A","t":"SMS code","c":false,"w":"SMS codes can be relayed by AITM phishing kits."},{"l":"B","t":"TOTP from an authenticator app","c":false,"w":"TOTP can also be relayed to a phishing site — the user types the code into the wrong site."},{"l":"C","t":"FIDO2 / WebAuthn / hardware security key","c":true,"w":"FIDO2 cryptographically binds the authentication to the origin (domain). The key won't release a credential to a wrong origin, defeating AITM phishing."},{"l":"D","t":"Security question","c":false,"w":"Easily phished and often guessable."}],"topic":"SY0-701, Objective 4.6 - Multi-factor Authentication","url":"https://professormesser.link/701040603","objective":"4.6","domain":"4"},
{"n":69,"q":"SAML is BEST described as:","opts":[{"l":"A","t":"An encryption standard for files at rest","c":false,"w":"Different domain entirely."},{"l":"B","t":"An XML-based standard for exchanging authentication and authorization assertions between identity provider and service provider","c":true,"w":"SAML is the OG enterprise SSO/federation protocol. IdP signs an assertion; SP trusts it. Common in enterprise SaaS integrations."},{"l":"C","t":"A password rotation protocol","c":false,"w":"Not what SAML does."},{"l":"D","t":"A network layer encryption standard","c":false,"w":"SAML lives at the application layer."}],"topic":"SY0-701, Objective 4.6 - Identity and Access Management","url":"https://professormesser.link/701040601","objective":"4.6","domain":"4"},
{"n":70,"q":"An organization wants to grant a contractor temporary read access to a specific S3 bucket for 30 days. The MOST appropriate approach is:","opts":[{"l":"A","t":"Add the contractor to the 'admin' group permanently","c":false,"w":"Massive over-grant. Permanent. Violates least privilege."},{"l":"B","t":"Create a scoped role with read-only access to the specific bucket, time-bound to expire in 30 days","c":true,"w":"Least-privilege + just-in-time + time-bound. All three best practices combined."},{"l":"C","t":"Give the contractor the root account password","c":false,"w":"Catastrophic over-grant."},{"l":"D","t":"Email the contractor the bucket's contents","c":false,"w":"Doesn't grant access; doesn't scale; data flies into uncontrolled storage."}],"topic":"SY0-701, Objective 4.6 - Access Controls","url":"https://professormesser.link/701040602","objective":"4.6","domain":"4"},
{"n":71,"q":"Which of the following is a common BENEFIT of automation in security operations? (Pick the BEST single answer.)","opts":[{"l":"A","t":"Removes the need for any human analysts","c":false,"w":"Automation augments humans — judgment-heavy work remains human."},{"l":"B","t":"Provides consistent, repeatable execution of routine response steps, freeing analysts for higher-value work","c":true,"w":"Consistency + speed + analyst time savings. Three benefits in one."},{"l":"C","t":"Encrypts logs as a side effect","c":false,"w":"Unrelated to automation per se."},{"l":"D","t":"Prevents all incidents","c":false,"w":"It doesn't prevent incidents; it helps respond to them faster."}],"topic":"SY0-701, Objective 4.7 - Scripting and Automation","url":"https://professormesser.link/701040701","objective":"4.7","domain":"4"},
{"n":72,"q":"Why is using cloud-native managed identities preferred over storing service account credentials in application configuration?","opts":[{"l":"A","t":"Managed identities are slower, which is a feature","c":false,"w":"Performance is comparable."},{"l":"B","t":"Managed identities issue short-lived tokens rotated automatically, eliminating long-lived secrets that can be leaked","c":true,"w":"No stored secret to leak in code, config, or logs. Short token lifetime limits exposure if intercepted."},{"l":"C","t":"Managed identities don't need any IAM permissions","c":false,"w":"They have IAM permissions — that's their whole point."},{"l":"D","t":"Managed identities only work for non-production","c":false,"w":"They're production-grade."}],"topic":"SY0-701, Objective 4.7 - Scripting and Automation","url":"https://professormesser.link/701040701","objective":"4.7","domain":"4"},
{"n":73,"q":"During an IR engagement, which of the following is the BEST source of authoritative evidence for what processes ran on a Linux host during the suspect window?","opts":[{"l":"A","t":"The user's recollection","c":false,"w":"Recollection is unreliable and not authoritative."},{"l":"B","t":"Process accounting / auditd / EDR telemetry collected at the time","c":true,"w":"Real-time process accounting/audit logs/EDR telemetry are the gold standard. They capture process names, command lines, parent processes, exit codes."},{"l":"C","t":"Marketing materials about the host's purpose","c":false,"w":"Marketing isn't forensic evidence."},{"l":"D","t":"The vendor's product brochure","c":false,"w":"Not evidence."}],"topic":"SY0-701, Objective 4.8 - Incident Response","url":"https://professormesser.link/701040801","objective":"4.8","domain":"4"},
{"n":74,"q":"A tabletop exercise is BEST described as:","opts":[{"l":"A","t":"A surprise penetration test","c":false,"w":"That's a pentest, not a tabletop."},{"l":"B","t":"A facilitated discussion walking through a hypothetical incident scenario, testing decisions and communication without touching production systems","c":true,"w":"Tabletops are cheap, low-risk way to stress-test the human side of IR — who gets called, who decides, what gets communicated."},{"l":"C","t":"An audit of physical security controls","c":false,"w":"Different exercise."},{"l":"D","t":"A drill where the building is evacuated","c":false,"w":"That's a safety/fire drill."}],"topic":"SY0-701, Objective 4.8 - Incident Response","url":"https://professormesser.link/701040801","objective":"4.8","domain":"4"},
{"n":75,"q":"After a major incident, the team produces a written post-incident report that includes timeline, root cause, contributing factors, and improvement actions. Who SHOULD typically receive this report?","opts":[{"l":"A","t":"Only the IR team that worked the incident","c":false,"w":"Limits learning to the people who already know."},{"l":"B","t":"Relevant stakeholders: leadership, affected business owners, and improvement-action owners — at a level of detail appropriate to each audience","c":true,"w":"Different audiences need different levels of technical detail. Sanitizing for executive audiences is fine; keeping the technical detail for the engineering teams who'll execute the improvements is essential."},{"l":"C","t":"The general public, in full detail, immediately","c":false,"w":"Public disclosure happens per legal/regulatory obligations and is typically curated, not raw."},{"l":"D","t":"Nobody — keep findings private","c":false,"w":"Lessons not shared aren't learned."}],"topic":"SY0-701, Objective 4.8 - Incident Response","url":"https://professormesser.link/701040801","objective":"4.8","domain":"4"},
{"n":76,"q":"A SIEM ingests Windows Security Event ID 4625 — failed logon — alongside Event ID 4624 (successful logon). For tuning brute-force detection, the MOST useful pattern is:","opts":[{"l":"A","t":"Many 4625s for one account in a short window followed by a 4624 — a brute-force succeeded","c":true,"w":"Many failures + a success on the same account is the classic 'they got in eventually' signature."},{"l":"B","t":"One 4624 from each user per day","c":false,"w":"Routine; not an attack signature."},{"l":"C","t":"Zero 4625s overall","c":false,"w":"That'd be unusual — humans mistype passwords."},{"l":"D","t":"Equal numbers of 4624 and 4625 events globally","c":false,"w":"Doesn't correlate to a single account."}],"topic":"SY0-701, Objective 4.9 - Log Files","url":"https://professormesser.link/701040901","objective":"4.9","domain":"4"},
{"n":77,"q":"Log retention policies should be set with which of these considerations in mind?","opts":[{"l":"A","t":"Always one week — anything longer wastes space","c":false,"w":"Way too short for most regulated environments and IR investigations."},{"l":"B","t":"A balance of regulatory minimums, IR/forensic needs (incidents often discovered months after the fact), storage costs, and any contractual obligations","c":true,"w":"Retention is a multi-variable problem. Common patterns: SIEM hot tier weeks-months; archival 1-7 years depending on regulation. APT dwell times often exceed 90 days — short retention misses them."},{"l":"C","t":"Forever — never delete anything","c":false,"w":"Cost-prohibitive and increases legal exposure."},{"l":"D","t":"Whatever the storage vendor recommends","c":false,"w":"Vendors are not the policy authority."}],"topic":"SY0-701, Objective 4.9 - Log Data","url":"https://professormesser.link/701040901","objective":"4.9","domain":"4"},
{"n":78,"q":"Why is accurate time synchronization (NTP) across all systems critical for security logging?","opts":[{"l":"A","t":"Correlating events across hosts requires consistent timestamps — otherwise reconstruction of attack timelines is unreliable","c":true,"w":"Logs from different hosts with skewed clocks can't be cleanly ordered. Investigations fall apart. NTP discipline (within seconds across the fleet) is forensic infrastructure."},{"l":"B","t":"NTP makes hosts run faster","c":false,"w":"NTP synchronizes time; it doesn't accelerate processing."},{"l":"C","t":"Logs without NTP can't be encrypted","c":false,"w":"Unrelated."},{"l":"D","t":"NTP is required for backups","c":false,"w":"Backups don't depend on NTP for correctness."}],"topic":"SY0-701, Objective 4.9 - Log Data","url":"https://professormesser.link/701040901","objective":"4.9","domain":"4"},
{"n":79,"q":"Which role is responsible for the day-to-day technical management of data — backups, restores, access enforcement, encryption configuration?","opts":[{"l":"A","t":"Data owner","c":false,"w":"Owner sets policy; doesn't run backups personally."},{"l":"B","t":"Data custodian","c":true,"w":"Custodians (often IT/DBAs) execute the technical management of data on the owner's behalf."},{"l":"C","t":"Data subject","c":false,"w":"Data subject is the person the data is about (under GDPR, for instance)."},{"l":"D","t":"Data processor","c":false,"w":"Data processor is a third party that processes data for a controller. Different role."}],"topic":"SY0-701, Objective 5.1 - Data Roles and Responsibilities","url":"https://professormesser.link/701050105","objective":"5.1","domain":"5"},
{"n":80,"q":"An organization's security policy structure typically includes 'policies,' 'standards,' 'procedures,' and 'guidelines.' Which of the following BEST distinguishes a STANDARD from a POLICY?","opts":[{"l":"A","t":"Standards and policies are the same","c":false,"w":"They aren't."},{"l":"B","t":"Policies state intent and required outcome; standards specify the mandatory technologies, configurations, or methods used to achieve that outcome","c":true,"w":"Policy: 'All data in transit must be encrypted.' Standard: 'TLS 1.2 or higher; AES-128 minimum; specific cipher suites X, Y, Z.' Standards are the technical specifics."},{"l":"C","t":"Standards are voluntary; policies are mandatory","c":false,"w":"Both are mandatory; guidelines are voluntary."},{"l":"D","t":"Policies are written; standards are spoken","c":false,"w":"Both are written."}],"topic":"SY0-701, Objective 5.1 - Security Policies","url":"https://professormesser.link/701050101","objective":"5.1","domain":"5"},
{"n":81,"q":"Quantitative risk analysis differs from qualitative in that:","opts":[{"l":"A","t":"Quantitative uses numerical values (likelihood probabilities, dollar impact estimates); qualitative uses categorical ratings (low/medium/high)","c":true,"w":"Quantitative tries to put dollar figures on risk (ALE, etc.). Qualitative uses ranked categories. Both have a place; quantitative needs good data."},{"l":"B","t":"Quantitative is required by law; qualitative is optional","c":false,"w":"Neither is universally legally mandated; both are practiced."},{"l":"C","t":"Qualitative is more accurate","c":false,"w":"Accuracy depends on data quality, not method."},{"l":"D","t":"Quantitative is only for compliance audits","c":false,"w":"Used in many contexts."}],"topic":"SY0-701, Objective 5.2 - Risk Analysis","url":"https://professormesser.link/701050202","objective":"5.2","domain":"5"},
{"n":82,"q":"After analysis, an organization decides a specific risk is below their risk appetite and they choose to do nothing about it. This is:","opts":[{"l":"A","t":"Risk avoidance","c":false,"w":"Avoidance is dropping the activity that creates the risk."},{"l":"B","t":"Risk transfer","c":false,"w":"Transfer is shifting it to someone else (insurance, contract terms)."},{"l":"C","t":"Risk acceptance","c":true,"w":"Documented, deliberate decision to retain the risk because mitigation would cost more than the potential loss is acceptance."},{"l":"D","t":"Risk mitigation","c":false,"w":"Mitigation reduces likelihood or impact through controls."}],"topic":"SY0-701, Objective 5.2 - Risk Analysis","url":"https://professormesser.link/701050202","objective":"5.2","domain":"5"},
{"n":83,"q":"An organization's RISK APPETITE is BEST described as:","opts":[{"l":"A","t":"The total dollars spent on cyber insurance","c":false,"w":"That's a specific budget line."},{"l":"B","t":"The broad, board-level statement of how much risk the organization is willing to accept in pursuit of its objectives","c":true,"w":"Risk appetite is high-level posture: aggressive vs. cautious. Risk tolerance is the more specific, measurable version of the same idea."},{"l":"C","t":"The number of vulnerabilities accepted per scan","c":false,"w":"Too narrow."},{"l":"D","t":"Whether the CISO uses MFA","c":false,"w":"Single-control question, not the same concept."}],"topic":"SY0-701, Objective 5.2 - Risk Analysis","url":"https://professormesser.link/701050202","objective":"5.2","domain":"5"},
{"n":84,"q":"An MOU (Memorandum of Understanding) is BEST described as:","opts":[{"l":"A","t":"A legally binding contract with specific deliverables and penalties","c":false,"w":"That's closer to an MOA or formal contract."},{"l":"B","t":"A non-binding statement of intent to cooperate between two parties — sets expectations without strict legal enforceability","c":true,"w":"MOUs are softer than contracts. Common in inter-agency cooperation, research partnerships, etc."},{"l":"C","t":"A non-disclosure agreement","c":false,"w":"NDAs cover confidentiality."},{"l":"D","t":"A service-level agreement","c":false,"w":"SLAs cover performance commitments."}],"topic":"SY0-701, Objective 5.3 - Agreement Types","url":"https://professormesser.link/701050302","objective":"5.3","domain":"5"},
{"n":85,"q":"Why is a formal vendor onboarding process (including security questionnaires, SOC 2 reviews, and pen-test attestations) important?","opts":[{"l":"A","t":"To ensure the vendor's stock price is going up","c":false,"w":"Stock price isn't a security indicator."},{"l":"B","t":"Vendors often have access to your data or systems; their security posture becomes part of yours, so reviewing it before granting access is risk management","c":true,"w":"Supply chain compromises (SolarWinds, Kaseya, etc.) show vendor risk is real. Onboarding reviews establish a baseline of trust and inform contract requirements."},{"l":"C","t":"To make the vendor relationship adversarial from the start","c":false,"w":"Onboarding is collaborative."},{"l":"D","t":"To eliminate the need for ongoing monitoring","c":false,"w":"Onboarding is the start; continuous monitoring is also needed."}],"topic":"SY0-701, Objective 5.3 - Third-Party Risk","url":"https://professormesser.link/701050301","objective":"5.3","domain":"5"},
{"n":86,"q":"An organization handles US health records and operates in California. Which TWO regulatory frameworks are MOST directly relevant?","opts":[{"l":"A","t":"HIPAA + CCPA/CPRA","c":true,"w":"HIPAA for health data + California's CCPA/CPRA for California residents' personal data. Both apply to the same organization in this scenario."},{"l":"B","t":"GDPR + PCI-DSS","c":false,"w":"GDPR is EU-focused; PCI-DSS is payment cards. Neither is the strongest fit."},{"l":"C","t":"SOX + FERPA","c":false,"w":"SOX is for financial reporting; FERPA is education records."},{"l":"D","t":"FedRAMP + ITAR","c":false,"w":"FedRAMP is for cloud services to US federal gov; ITAR is for export control of defense items."}],"topic":"SY0-701, Objective 5.4 - Compliance","url":"https://professormesser.link/701050401","objective":"5.4","domain":"5"},
{"n":87,"q":"A privacy impact assessment (PIA) is conducted when:","opts":[{"l":"A","t":"After a breach has occurred","c":false,"w":"Too late — PIAs are proactive."},{"l":"B","t":"Before initiating a project, system, or process that handles personal data, to identify privacy risks and required controls","c":true,"w":"PIAs are forward-looking — they identify privacy risks before a system goes live, so controls and design choices can incorporate them."},{"l":"C","t":"Only when required by law enforcement subpoena","c":false,"w":"PIAs are an organizational practice, not a legal-process artifact."},{"l":"D","t":"At year-end as a finance ritual","c":false,"w":"Not a finance function."}],"topic":"SY0-701, Objective 5.4 - Compliance and Privacy","url":"https://professormesser.link/701050402","objective":"5.4","domain":"5"},
{"n":88,"q":"An external SOC 2 audit firm reviews an organization's controls. The PRIMARY purpose is:","opts":[{"l":"A","t":"To replace internal audits","c":false,"w":"They complement, not replace."},{"l":"B","t":"To provide an INDEPENDENT, formal attestation of the organization's controls to customers, regulators, and partners","c":true,"w":"Independence is the value of an external audit. Customers can rely on the attestation as a credible signal of control maturity."},{"l":"C","t":"To find every possible flaw","c":false,"w":"Audits sample; they don't find every flaw."},{"l":"D","t":"To redesign the organization's controls","c":false,"w":"Auditors evaluate, they don't redesign."}],"topic":"SY0-701, Objective 5.5 - Audits and Assessments","url":"https://professormesser.link/701050501","objective":"5.5","domain":"5"},
{"n":89,"q":"Which type of audit is conducted by the organization's own staff?","opts":[{"l":"A","t":"Internal audit","c":true,"w":"Internal audits use employees of the organization. They're more frequent, less independent, and feed into external audits."},{"l":"B","t":"External audit","c":false,"w":"External by definition uses an outside firm."},{"l":"C","t":"Regulatory inspection","c":false,"w":"Conducted by regulators."},{"l":"D","t":"Third-party audit","c":false,"w":"Third-party = external party."}],"topic":"SY0-701, Objective 5.5 - Audits and Assessments","url":"https://professormesser.link/701050501","objective":"5.5","domain":"5"},
{"n":90,"q":"Security awareness training that's the SAME deck once a year, no variation, no testing of retention, is BEST described as:","opts":[{"l":"A","t":"An ideal program — consistency is everything","c":false,"w":"Static training leads to boredom and minimal retention."},{"l":"B","t":"A compliance check-box that probably doesn't change actual behavior; better programs use varied content, role-specific scenarios, ongoing simulations, and measure outcomes","c":true,"w":"Effective awareness programs are continuous, varied, and measured. Annual one-shot training largely satisfies paperwork without moving behavior."},{"l":"C","t":"Forbidden by regulation","c":false,"w":"Not forbidden; just not effective."},{"l":"D","t":"Identical to a phishing simulation","c":false,"w":"Phishing simulations are an active component, not a slide deck."}],"topic":"SY0-701, Objective 5.6 - Security Awareness","url":"https://professormesser.link/701050601","objective":"5.6","domain":"5"}
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

  // Persist results to sidecar log file (kept separate to avoid self-modification)
  try {
    const date = new Date().toISOString().slice(0, 10);
    const missLines = missed.length === 0
      ? "  - _Clean sweep — no MCQ misses_"
      : missed.map(q => `  - E${q.n} (Obj ${q.objective || "?"}) — ${q.topic}`).join("\n");
    const pbqLines = pbqs.map(p => {
      const r = pbqResults[p.n];
      return `  - E${p.n} ${p.title}: ${r.correct}/${r.total}`;
    }).join("\n");
    const domainLines = Object.keys(domainNames).sort().map(d => {
      const s = domainStats[d] || { right: 0, total: 0 };
      if (s.total === 0) return null;
      return `  - ${domainNames[d]}: ${s.right}/${s.total} (${((s.right / s.total) * 100).toFixed(0)}%)`;
    }).filter(Boolean).join("\n");
    const entry = `### [${date}] Attempt\n- **MCQ:** ${totalCorrect} / ${total} (${pct.toFixed(1)}%)\n- **PBQ items:** ${pbqItemsCorrect} / ${pbqTotalItems}\n- **By domain:**\n${domainLines}\n- **PBQs:**\n${pbqLines}\n- **Missed MCQs:**\n${missLines}\n`;
    const LOG_PATH = "wiki/sessions/quiz-logs/practice-exam-e.log.md";
    const LOG_DIR = "wiki/sessions/quiz-logs";
    (async () => {
      try {
        const existing = app.vault.getAbstractFileByPath(LOG_PATH);
        if (existing && existing.extension === "md") {
          const prior = await app.vault.read(existing);
          await app.vault.modify(existing, prior.trimEnd() + "\n\n" + entry);
        } else {
          const folder = app.vault.getAbstractFileByPath(LOG_DIR);
          if (!folder) await app.vault.createFolder(LOG_DIR);
          await app.vault.create(LOG_PATH, "# Attempt log: practice-exam-e\n\n" + entry);
        }
      } catch (e) {
        console.error("Persist failed:", e);
      }
    })();
  } catch (e) {
    console.error("Persist failed:", e);
  }
};

function escapeHtml(s) {
  return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function truncate(s, n) {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}
```


---

_Attempt history is appended to [[wiki/sessions/quiz-logs/practice-exam-e.log|wiki/sessions/quiz-logs/practice-exam-e.log]] each time you submit the exam._
