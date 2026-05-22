---
title: Practice Exam A — Professor Messer SY0-701
category: practice-exam
tags: [practice-exam, exam-a, messer]
status: active
confidence: high
created: 2026-05-21
updated: 2026-05-21
covers: [1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 5.1]
source: Professor Messer's CompTIA SY0-701 Security+ Practice Exams (v1.8, Nov 2023)
---

# Practice Exam A — Professor Messer SY0-701

Full multiple-choice section of Practice Exam A from Professor Messer's *CompTIA SY0-701 Security+ Practice Exams* (v1.8). **85 questions** total — 82 single-answer, 3 multi-answer (Select TWO / Select THREE).

> **Performance-based questions A1–A5** from the printed exam aren't included here — they're drag-and-drop / matching exercises that don't fit the quiz format. The multiple-choice questions A6–A90 are reproduced in full below.

**How this works:** answer every question by clicking option(s). For "Select TWO" or "Select THREE" questions, click each option you want to include — clicking again deselects. **No feedback appears as you go.** When you're done, hit **Grade my test** at the bottom and the full report card with per-question feedback drops in at the top.

The CompTIA passing score is roughly **750 / 900 (~83%)** — this exam scales that proportionally below.

```dataviewjs
const questions = [
{"n":6,"q":"A company has hired a third-party to gather information about the\ncompany’s servers and data. This third-party will not have direct access to\nthe company's internal network, but they can gather information from any\nother source. Which of the following would BEST describe this approach?","opts":[{"l":"A","t":"Vulnerability scanning","c":false,"w":"Some active reconnaissance tests will query systems directly to see if a vulnerability currently exists."},{"l":"B","t":"Passive reconnaissance","c":true,"w":"Passive reconnaissance focuses on gathering as much information from\nopen sources such as social media, corporate websites, and business\norganizations."},{"l":"C","t":"Supply chain analysis","c":false,"w":"A supply chain analysis will examine the security associated with a supplier, and the analysis will not provide any information regarding a company's own servers and data."},{"l":"D","t":"Regulatory audit","c":false,"w":"A regulatory audit is a detailed security analysis based on existing laws or private guidelines. A regulatory audit commonly requires access to internal systems and data."}],"topic":"SY0-701, Objective 5.5 - Penetration Tests","url":"https://professormesser.link/701050502","objective":"5.5","domain":"5"},
{"n":7,"q":"A company's email server has received an email from a third-party, but the\norigination server does not match the list of authorized devices. Which of\nthe following would determine the disposition of this message?","opts":[{"l":"A","t":"SPF","c":false,"w":"SPF (Sender Policy Framework) is a list of all authorized mail servers for a specific domain. All legitimate emails would be sent from one of the servers listed in the SPF configuration."},{"l":"B","t":"NAC","c":false,"w":"NAC (Network Access Control) is a way to limit network access to only authorized users. NAC is not commonly used to manage the transfer of email messages."},{"l":"C","t":"DMARC","c":true,"w":"DMARC (Domain-based Message Authentication Reporting and\nConformance) specifies the disposition of spam emails. The legitimate\nowner of the originating email domain can choose to have these messages\naccepted, sent to a spam folder, or rejected."},{"l":"D","t":"DKIM","c":false,"w":"DKIM (Domain Keys Identified Mail) provides a way to validate all digitally signed messages from a specific email server. DKIM does not determine how the receiving server categorizes these digitally signed messages."}],"topic":"SY0-701, Objective 4.5 - Email Security","url":"https://professormesser.link/701040505","objective":"4.5","domain":"4"},
{"n":8,"q":"Which of these threat actors would be MOST likely to attack systems for\ndirect financial gain?","opts":[{"l":"A","t":"Organized crime","c":true,"w":"An organized crime actor is motivated by money, and their hacking\nobjectives are usually based around objectives that can be easily exchanged\nfor financial capital."},{"l":"B","t":"Hacktivist","c":false,"w":"A hacktivist is focused on a political agenda and not commonly on a financial gain."},{"l":"C","t":"Nation state","c":false,"w":"Nation states are already well funded, and their primary objective is not usually based on revenue or income."},{"l":"D","t":"Shadow IT","c":false,"w":"Shadow IT describes part of the organization that works around the existing IT department to build their own applications and infrastructure."}],"topic":"SY0-701, Objective 2.1 - Threat Actors","url":"https://professormesser.link/701020101","objective":"2.1","domain":"2"},
{"n":9,"q":"A security administrator has examined a server recently compromised by\nan attacker, and has determined the system was exploited due to a known\noperating system vulnerability. Which of the following would BEST\ndescribe this finding?","opts":[{"l":"A","t":"Root cause analysis","c":true,"w":"The goal of a root cause analysis is to explain the ultimate cause of an\nincident. Once the cause is known, it becomes easier to protect against\nsimilar attacks in the future."},{"l":"B","t":"E-discovery","c":false,"w":"E-discovery relates to the collection, preparation, review, interpretation, and production of electronic documents. E-discovery itself is not involved with the research and determination of an attack's root cause."},{"l":"C","t":"Risk appetite","c":false,"w":"A risk appetite describes the amount of risk an organization is willing to take before taking any action to reduce that risk. Risk appetite is not part of a root cause analysis."},{"l":"D","t":"Data subject","c":false,"w":"A data subject describes any information relating to an identified or identifiable natural person, especially when describing or managing private information about the subject."}],"topic":"SY0-701, Objective 4.8 - Incident Planning","url":"https://professormesser.link/701040802","objective":"4.8","domain":"4"},
{"n":10,"q":"A city is building an ambulance service network for emergency medical\ndispatching. Which of the following should have the highest priority?","opts":[{"l":"A","t":"Integration costs","c":false,"w":"When lives are on the line, the cost is not commonly the most important aspect of a system integration."},{"l":"B","t":"Patch availability","c":false,"w":"Although it's important to always keep systems patched, it's more important that a life saving service be available to those who might need it."},{"l":"C","t":"System availability","c":true,"w":"Requests to emergency services are often critical in nature, and it's\nimportant for a dispatching system to always be available when a call is\nmade."},{"l":"D","t":"Power usage","c":false,"w":"Power usage is not usually the most important consideration when building a critical healthcare and emergency service infrastructure."}],"topic":"SY0-701, Objective 3.1 - Infrastructure Considerations","url":"https://professormesser.link/701030104","objective":"3.1","domain":"3"},
{"n":11,"q":"A system administrator receives a text alert when access rights are\nchanged on a database containing private customer information. Which\nof the following would describe this alert?","opts":[{"l":"A","t":"Maintenance window","c":false,"w":"A maintenance window describes the scheduling associated with the change control process. Systems and services generally have limited availability during a maintenance window."},{"l":"B","t":"Attestation and acknowledgment","c":false,"w":"With compliance, the process of attestation and acknowledgment is the final verification of the formal compliance documentation. An alert from an automated process would not qualify as attestation."},{"l":"C","t":"Automation","c":true,"w":"Automation ensures that compliance checks can be performed on a\nregular basis without the need for human intervention. This can be\nespecially useful to provide alerts when a configuration change causes an\norganization to be out of compliance."},{"l":"D","t":"External audit","c":false,"w":"An external audit can be a valuable tool for verifying the compliance process, but an automated alert from a monitoring system would not be part of an external audit."}],"topic":"SY0-701, Objective 5.4 - Compliance","url":"https://professormesser.link/701050401","objective":"5.4","domain":"5"},
{"n":12,"q":"A security administrator is concerned about the potential for data\nexfiltration using external storage drives. Which of the following would\nbe the BEST way to prevent this method of data exfiltration?","opts":[{"l":"A","t":"Create an operating system security policy to block the use of removable media","c":true,"w":"Removable media uses hot-pluggable interfaces such as USB to connect\nstorage drives. A security policy in the operating system can prevent any\nfiles from being written to a removable drive."},{"l":"B","t":"Monitor removable media usage in host-based firewall logs","c":false,"w":"A host-based firewall monitors traffic flows and does not commonly log hardware or USB drive access."},{"l":"C","t":"Only allow applications that do not use removable media","c":false,"w":"File storage access options are not associated with applications, so it’s not possible to allow based on external storage drive usage."},{"l":"D","t":"Define a removable media block rule in the UTM","c":false,"w":"A UTM (Unified Threat Manager) watches traffic flows across the network and does not commonly manage the storage options on individual computers."}],"topic":"SY0-701, Objective 2.2 - Common Threat Vectors","url":"https://professormesser.link/701020201","objective":"2.2","domain":"2"},
{"n":13,"q":"A company creates a standard set of government reports each calendar\nquarter. Which of the following would describe this type of data?","opts":[{"l":"A","t":"Data in use","c":false,"w":"Data in use describes information actively processing in the memory of a system, such as system RAM, CPU registers, or CPU cache. Government reports are static documents and are not actively being processed."},{"l":"B","t":"Obfuscated","c":false,"w":"Obfuscation describes the modification of data to make something understandable into something very difficult to understand. Information contained in a government report is relatively easy to understand and would not be considered obfuscated data."},{"l":"C","t":"Trade secrets","c":false,"w":"Trade secrets are the private details a company uses as part of their normal business processes, and these trade secrets are not shared with any other organization or business."},{"l":"D","t":"Regulated","c":true,"w":"Reports and information created for governmental use are regulated by\nlaws regarding the disclosure of certain types of data."}],"topic":"SY0-701, Objective 3.3 - Data Types and Classifications","url":"https://professormesser.link/701030301","objective":"3.3","domain":"3"},
{"n":14,"q":"An insurance company has created a set of policies to handle data\nbreaches. The security team has been given this set of requirements based\non these policies:\n• Access records from all devices must be saved and archived\n• Any data access outside of normal working hours\nmust be immediately reported\n\n• Data access must only occur inside of the country\n\n• Access logs and audit reports must be created from a single database\n\nWhich of the following should be implemented by the security team to\nmeet these requirements? (Select THREE)","opts":[{"l":"A","t":"Restrict login access by IP address and GPS location","c":true,"w":"Adding location-based policies will prevent direct data access from outside\nof the country. Saving log information from all devices and creating audit\nreports from a single database can be implemented through the use of a\nSIEM (Security Information and Event Manager). Adding a check for the\ntime-of-day will report any access that occurs during non-working hours."},{"l":"B","t":"Require government-issued identification during the onboarding process","c":false,"w":"Requiring proper identification is always a good idea, but it’s not one of the listed requirements."},{"l":"C","t":"Add additional password complexity for accounts that access data","c":false,"w":"Additional password complexity is another good best practice, but it’s not part of the provided requirements."},{"l":"D","t":"Conduct monthly permission auditing","c":false,"w":"No requirements for ongoing auditing were included in the requirements, but ongoing auditing is always an important consideration."},{"l":"E","t":"Consolidate all logs on a SIEM","c":true,"w":"Adding location-based policies will prevent direct data access from outside\nof the country. Saving log information from all devices and creating audit\nreports from a single database can be implemented through the use of a\nSIEM (Security Information and Event Manager). Adding a check for the\ntime-of-day will report any access that occurs during non-working hours."},{"l":"F","t":"Archive the encryption keys of all disabled accounts","c":false,"w":"If an account is disabled, there may still be encrypted data that needs to be recovered later. Archiving the encryption keys will allow access to that data after the account is no longer in use."},{"l":"G","t":"Enable time-of-day restrictions on the authentication server","c":true,"w":"Adding location-based policies will prevent direct data access from outside\nof the country. Saving log information from all devices and creating audit\nreports from a single database can be implemented through the use of a\nSIEM (Security Information and Event Manager). Adding a check for the\ntime-of-day will report any access that occurs during non-working hours."}],"topic":"SY0-701, Objective 4.6 - Access Controls","url":"https://professormesser.link/701040602","objective":"4.6","domain":"4"},
{"n":15,"q":"A security engineer, is viewing this record from the firewall logs:\nUTC 04/05/2023 03:09:15809\nAV Gateway Alert\n136.127.92.171 80 -> 10.16.10.14 60818\nGateway Anti-Virus Alert:\nXPACK.A_7854 (Trojan) blocked.\n\nWhich of the following can be observed from this log information?","opts":[{"l":"A","t":"The victim's IP address is 136.127.92.171","c":false,"w":"The victim’s IP address is 136.127.92.171 The format for this log entry uses an arrow to differentiate between the attacker and the victim. The attacker IP address is 136.127.92.171, and the victim’s IP address is 10.16.10.14."},{"l":"B","t":"A download was blocked from a web server","c":true,"w":"A traffic flow from a web server port number (80) to a device port (60818)\nindicates that this traffic flow originated on port 80 of the web server. A\nfile download is one of the most common ways to deliver a Trojan, and\nthis log entry shows that the file containing the XPACK.A_7854 Trojan\nwas blocked."},{"l":"C","t":"A botnet DDoS attack was blocked","c":false,"w":"A botnet attack would not commonly include a Trojan horse as part of a distributed denial of service (DDoS) attack."},{"l":"D","t":"The Trojan was blocked, but the file was not","c":false,"w":"A Trojan horse attack involves malware that is disguised as legitimate software. The Trojan malware and the file are the same entity, so there isn’t a way to decouple the malware from the file."}],"topic":"SY0-701, Objective 4.9 - Log Files","url":"https://professormesser.link/701040901","objective":"4.9","domain":"4"},
{"n":16,"q":"A user connects to a third-party website and receives this message:\nYour connection is not private.\nNET::ERR_CERT_INVALID\n\nWhich of the following attacks would be the MOST likely reason\nfor this message?","opts":[{"l":"A","t":"Brute force","c":false,"w":"A brute force attack is commonly associated with password hacks. Brute force attacks would not cause the certificate on a website to be invalid."},{"l":"B","t":"DoS","c":false,"w":"A DoS (Denial of Service) attack would prevent communication to a server and most likely provide a timeout error. This error is not related to a service availability issue."},{"l":"C","t":"On-path","c":true,"w":"An on-path attack is often associated with a third-party who is actively\nintercepting network traffic. This entity in the middle would not be able\nto provide a valid SSL certificate for a third-party website, and this error\nwould appear in the browser as a warning."},{"l":"D","t":"Deauthentication","c":false,"w":"Deauthentication attacks are commonly associated with wireless networks, and they usually cause disconnects and lack of connectivity. The error message in this example does not appear to be associated with a network outage or disconnection."}],"topic":"SY0-701, Objective 2.4 - On-Path Attacks","url":"https://professormesser.link/701020409","objective":"2.4","domain":"2"},
{"n":17,"q":"Which of the following would be the BEST way to provide a website\nlogin using existing credentials from a third-party site?","opts":[{"l":"A","t":"Federation","c":true,"w":"Federation would allow members of one organization to authenticate\nusing the credentials of another organization."},{"l":"B","t":"802.1X","c":false,"w":"802.1X is a useful authentication protocol, but it needs additional functionality to authenticate across multiple user databases."},{"l":"C","t":"EAP","c":false,"w":"EAP (Extensible Authentication Protocol) is an authentication framework commonly associated with network access control. EAP by itself does not provide the federation needed to authenticate users to a third-party access database."},{"l":"D","t":"SSO","c":false,"w":"SSO (Single Sign-On) describes the process of enabling a single authentication to grant access to many different network services. Obtaining login credentials from a third-party access database does not describe the process used by SSO."}],"topic":"SY0-701, Objective 4.6 - Identity and Access Management","url":"https://professormesser.link/701040601","objective":"4.6","domain":"4"},
{"n":18,"q":"A system administrator is working on a contract that will specify a\nminimum required uptime for a set of Internet-facing firewalls. The\nadministrator needs to know how often the firewall hardware is expected\nto fail between repairs. Which of the following would BEST describe this\ninformation?","opts":[{"l":"A","t":"MTBF","c":true,"w":"The MTBF (Mean Time Between Failures) is a prediction of how often a\nrepairable system will fail."},{"l":"B","t":"RTO","c":false,"w":"RTO (Recovery Time Objectives) define a timeframe needed to restore a particular service level."},{"l":"C","t":"MTTR","c":false,"w":"MTTR (Mean Time to Restore) is the amount of time it takes to repair a component."},{"l":"D","t":"RPO","c":false,"w":"RPO (Recovery Point Objective) describes the minimum data or operational state required to categorize a system as recovered."}],"topic":"SY0-701, Objective 5.2 - Business Impact Analysis","url":"https://professormesser.link/701050204","objective":"5.2","domain":"5"},
{"n":19,"q":"An attacker calls into a company’s help desk and pretends to be the\ndirector of the company’s manufacturing department. The attacker\nstates that they have forgotten their password and they need to have the\npassword reset quickly for an important meeting. What kind of attack\nwould BEST describe this phone call?","opts":[{"l":"A","t":"Social engineering","c":true,"w":"This social engineering attack uses impersonation to take advantage of\nauthority and urgency principles in an effort to convince someone else to\ncircumvent normal security controls."},{"l":"B","t":"Supply chain","c":false,"w":"A supply chain attack focuses on the equipment or raw materials used to deliver products or services to an organization or user. A call to the help desk would not be categorized as part of the supply chain."},{"l":"C","t":"Watering hole","c":false,"w":"A watering hole attack uses a third-party site to perform attacks outside of a user's local (and usually more secure) network."},{"l":"D","t":"On-path","c":false,"w":"An on-path attack commonly occurs without any knowledge to the parties involved, and there’s usually no additional notification that an attack is underway. In this question, the attacker contacted the help desk engineer directly."}],"topic":"SY0-701, Objective 2.2 - Impersonation","url":"https://professormesser.link/701020203","objective":"2.2","domain":"2"},
{"n":20,"q":"Two companies have been working together for a number of months,\nand they would now like to qualify their partnership with a broad formal\nagreement between both organizations. Which of the following would\ndescribe this agreement?","opts":[{"l":"A","t":"SLA","c":false,"w":"An SLA (Service Level Agreement) is commonly provided as a formal contract between two parties that documents the minimum terms for services provided. The SLA often provides very specific requirements and expectations between both parties."},{"l":"B","t":"SOW","c":false,"w":"An SOW (Statement of Work) is a detailed list of items to be completed as part of overall project deliverables. For example, a list of expected job tasks associated with a firewall installation would be documented in an SOW."},{"l":"C","t":"MOA","c":true,"w":"An MOA (Memorandum of Agreement) is a formal document where\nboth sides agree to a broad set of goals and objectives associated with the\npartnership."},{"l":"D","t":"NDA","c":false,"w":"An NDA (Non-Disclosure Agreement) is a confidentiality agreement between parties. This question did not mention any requirement for privacy or confidentiality."}],"topic":"SY0-701, Objective 5.3 - Agreement Types","url":"https://professormesser.link/701050302","objective":"5.3","domain":"5"},
{"n":21,"q":"Which of the following would explain why a company would\nautomatically add a digital signature to each outgoing email message?","opts":[{"l":"A","t":"Confidentiality","c":false,"w":"Confidentiality describes the privacy of data. Encrypting traffic sent over a VPN or encrypting files stored on a flash drive would be an example of data confidentiality."},{"l":"B","t":"Integrity","c":true,"w":"Integrity refers to the trustworthiness of data. A digital signature allows\nthe recipient to confirm that none of the data has been changed since the\ndigital signature was created."},{"l":"C","t":"Authentication","c":false,"w":"Authentication refers to the process of verifying the identity of an individual or system. A username and password is a common method of authentication, but digital signatures are not commonly used as an authentication method."},{"l":"D","t":"Availability","c":false,"w":"Availability describes the ability of an authorized user to access data. A digital signature does not provide any features associated with the availability of the data."}],"topic":"SY0-701, Objective 1.2 - The CIA Triad","url":"https://professormesser.link/701010201","objective":"1.2","domain":"1"},
{"n":22,"q":"The embedded OS in a company’s time clock appliance is configured to\nreset the file system and reboot when a file system error occurs. On one\nof the time clocks, this file system error occurs during the startup process\nand causes the system to constantly reboot. Which of the following\nBEST describes this issue?","opts":[{"l":"A","t":"Memory injection","c":false,"w":"A memory injection is commonly used by malicious software to add code to the memory of an existing process. The issue in this question was related to a file system error and was not part of a malicious data injection."},{"l":"B","t":"Resource consumption","c":false,"w":"If the time clock was running out of storage space or memory, it would most likely be unusable. In this example, the issue isn’t based on a lack of resources."},{"l":"C","t":"Race condition","c":true,"w":"A race condition occurs when two processes occur at similar times, and\nusually with unexpected results. The file system problem can often be fixed\nbefore a reboot, but the reboot is occurring before the fix can be applied.\nThis has created a race condition that results in constant reboots."},{"l":"D","t":"Malicious update","c":false,"w":"A malicious update occurs when a software patch installs unwanted or unauthorized code. Many attackers will use software patches to install their own malicious code during a software update."}],"topic":"SY0-701, Objective 2.3 - Race Conditions","url":"https://professormesser.link/701020303","objective":"2.3","domain":"2"},
{"n":23,"q":"A recent audit has found that existing password policies do not include\nany restrictions on password attempts, and users are not required to\nperiodically change their passwords. Which of the following would\ncorrect these policy issues? (Select TWO)","opts":[{"l":"A","t":"Password complexity","c":false,"w":"A complex password would make the password more difficult to brute force, but it would not solve the issues listed in this question."},{"l":"B","t":"Password expiration","c":true,"w":"Password expiration would require a password change after the expiration\ndate. An account lockout would disable an account after a predefined\nnumber of unsuccessful login attempts."},{"l":"C","t":"Password reuse","c":false,"w":"Maintaining a password history would prevent the reuse of any previous passwords. Restricting password reuse would ensure that a different password is used each time a password change is processed."},{"l":"D","t":"Account lockout","c":true,"w":"Password expiration would require a password change after the expiration\ndate. An account lockout would disable an account after a predefined\nnumber of unsuccessful login attempts."},{"l":"E","t":"Password managers","c":false,"w":"A password manager would provide a way to securely store and retrieve passwords, but it would not resolve any issues relating to password expirations or account lockouts."}],"topic":"SY0-701, Objective 4.6 - Password Security","url":"https://professormesser.link/701040604","objective":"4.6","domain":"4"},
{"n":24,"q":"What kind of security control is associated with a login banner?","opts":[{"l":"A","t":"Preventive","c":false,"w":"A preventive control physically limits access to a device or area."},{"l":"B","t":"Deterrent","c":true,"w":"A deterrent control does not directly stop an attack, but it may discourage\nan action."},{"l":"C","t":"Corrective","c":false,"w":"A corrective control can actively work to mitigate any damage."},{"l":"D","t":"Detective","c":false,"w":"A detective control may not prevent access, but it can identify and record any intrusion attempts."},{"l":"E","t":"Compensating","c":false,"w":"A compensating security control doesn’t prevent an attack, but it does restore from an attack using other means."},{"l":"F","t":"Directive","c":false,"w":"A directive control is relatively weak control which relies on security compliance from the end users."}],"topic":"SY0-701, Objective 1.1 - Security Controls","url":"https://professormesser.link/701010101","objective":"1.1","domain":"1"},
{"n":25,"q":"An internal audit has discovered four servers that have not been updated\nin over a year, and it will take two weeks to test and deploy the latest\npatches. Which of the following would be the best way to quickly\nrespond to this situation in the meantime?","opts":[{"l":"A","t":"Purchase cybersecurity insurance","c":false,"w":"Cybersecurity insurance can help plan for financial issues during a significant attack, but it wouldn't provide any assistance for mitigating potential vulnerabilities during this two week period."},{"l":"B","t":"Implement an exception for all data center services","c":false,"w":"Security exceptions should be rare, and they should be very specific to a small number of systems. It would be risky to create a broad security exception for systems which are not in-scope for the identified vulnerability."},{"l":"C","t":"Move the servers to a protected segment","c":true,"w":"Segmenting the servers to their own protected network would allow\nfor additional security controls while still maintaining the uptime and\navailability of the systems."},{"l":"D","t":"Hire a third-party to perform an extensive audit","c":false,"w":"Audits take time, and hiring a third-party to perform an audit takes even longer. By the time a third-party audit was underway, the problematic systems would have already been tested and patched."}],"topic":"SY0-701, Objective 4.3 - Vulnerability Remediation","url":"https://professormesser.link/701040305","objective":"4.3","domain":"4"},
{"n":26,"q":"A business manager is documenting a set of steps for processing orders\nif the primary Internet connection fails. Which of these would BEST\ndescribe these steps?","opts":[{"l":"A","t":"Platform diversity","c":false,"w":"Using different operating systems and platforms can help mitigate issues associated with a single OS, but it wouldn't provide any mitigation if the primary Internet connection was no longer available."},{"l":"B","t":"Continuity of operations","c":true,"w":"It's always useful to have an alternative set of processes to handle any type\nof outage or issue. Continuity of operations planning ensures that the\nbusiness will continue to operate when these issues occur."},{"l":"C","t":"Cold site recovery","c":false,"w":"A cold site takes time to build, and the time and expense associated with a disaster recovery switchover would be extensive. By the time a cold site was enabled, the primary Internet connection may already be restored and many alternative recovery options could have potentially been deployed."},{"l":"D","t":"Tabletop exercise","c":false,"w":"A tabletop exercise usually consists of a meeting where members of a recovery team or disaster recovery talk through a disaster scenario."}],"topic":"SY0-701, Objective 3.4 - Resiliency","url":"https://professormesser.link/701030401","objective":"3.4","domain":"3"},
{"n":27,"q":"A company would like to examine the credentials of each individual\nentering the data center building. Which of the following would BEST\nfacilitate this requirement?","opts":[{"l":"A","t":"Access control vestibule","c":true,"w":"An access control vestibule is a room designed to restrict the flow of\nindividuals through an area. These are commonly used in high security\nareas where each person needs to be evaluated and approved before access\ncan be provided."},{"l":"B","t":"Video surveillance","c":false,"w":"Although video surveillance can assist with monitoring access to a building or room, it doesn't provide a way to validate the credentials of each visitor."},{"l":"C","t":"Pressure sensors","c":false,"w":"Pressure sensors are commonly used on doors or windows to detect movement in those devices. However, pressure sensors would not be used to check visitor credentials."},{"l":"D","t":"Bollards","c":false,"w":"Bollards and barricades are often used on the exterior of a facility to prevent access to motorized vehicles and channel people through a specific access location."}],"topic":"SY0-701, Objective 1.2 - Physical Security","url":"https://professormesser.link/701010206","objective":"1.2","domain":"1"},
__INSERT_QUESTIONS_HERE_DO_NOT_EDIT__
];

const domainNames = {"1": "1.0 General Security Concepts", "2": "2.0 Threats, Vulnerabilities, and Mitigations", "3": "3.0 Security Architecture", "4": "4.0 Security Operations", "5": "5.0 Security Program Management & Oversight"};

// ---- State ----
const selections = {}; // qNum -> Set of letters
questions.forEach(q => { selections[q.n] = new Set(); });
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
  .pe-opt { display: flex; align-items: flex-start; gap: 10px; width: 100%; text-align: left; padding: 10px 14px; margin: 7px 0; border: 1px solid var(--background-modifier-border); background: var(--background-secondary); cursor: pointer; border-radius: 6px; color: var(--text-normal); font-size: 0.95em; line-height: 1.45; transition: all 120ms ease; font-family: inherit; }
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
`;

const intro = root.createDiv({ cls: "pe-intro" });
intro.setText(`${questions.length} questions. Multi-select questions are flagged below. No feedback until you click Grade my test.`);

const progress = root.createDiv({ cls: "pe-progress" });
const updateProgress = () => {
  if (graded) return;
  const answered = questions.filter(q => selections[q.n].size > 0).length;
  progress.setText(`Answered: ${answered} / ${questions.length}`);
};
updateProgress();

const reportContainer = root.createDiv();

const cardsContainer = root.createDiv();

questions.forEach((q) => {
  const correctCount = q.opts.filter(o => o.c).length;
  const isMulti = correctCount > 1;

  const card = cardsContainer.createDiv({ cls: "pe-card" });
  card.id = `pe-q-${q.n}`;

  const header = card.createDiv({ cls: "pe-q-header" });
  header.createEl("span", { cls: "pe-q-num", text: `Q${q.n - 5}  ·  A${q.n}` });
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
        // single-select: clear others
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

  let totalCorrect = 0;
  const missed = [];
  const domainStats = {};

  questions.forEach((q) => {
    const sel = selections[q.n];
    const correctLetters = new Set(q.opts.filter(o => o.c).map(o => o.l));
    // Question is correct only if user picked all correct and no incorrect.
    const allRight = sel.size === correctLetters.size && [...sel].every(l => correctLetters.has(l));

    // domain bucket
    if (q.domain) {
      if (!domainStats[q.domain]) domainStats[q.domain] = { right: 0, total: 0 };
      domainStats[q.domain].total += 1;
      if (allRight) domainStats[q.domain].right += 1;
    }

    if (allRight) totalCorrect += 1;
    else missed.push(q);

    // mark options
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

    // build feedback
    const fb = card.querySelector(".pe-feedback");
    fb.classList.add(allRight ? "correct" : "incorrect");
    fb.style.display = "";

    const headerRow = fb.createDiv({ cls: "pe-fb-row" });
    headerRow.innerHTML = allRight
      ? "<strong>✓ Correct</strong>"
      : (sel.size === 0
          ? "<strong>✗ No answer</strong>"
          : "<strong>✗ Incorrect</strong>");

    // Show the correct option's explanation (the main "Why" text).
    // For multi-correct, the same explanation is attached to each correct opt.
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

    // If user picked wrong option(s), show their incorrect explanation(s)
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

    // Link out
    if (q.url) {
      const linkRow = fb.createDiv({ cls: "pe-fb-link" });
      linkRow.innerHTML = `Reference: <a href="${q.url}" target="_blank" rel="noopener">${escapeHtml(q.topic)}</a>`;
    }
  });

  // ---- Build report card ----
  const total = questions.length;
  const pct = (totalCorrect / total) * 100;
  // CompTIA scales 750/900 ≈ 83% as pass. We'll mark pass at >= 75% as a lenient bar
  // since this isn't a scaled exam, but show both. Strict pass: 83%.
  const strictPass = pct >= 83;

  reportContainer.empty();
  const report = reportContainer.createDiv({ cls: "pe-report" });
  report.createEl("h2", { text: "Report Card" });

  const scoreLine = report.createDiv({ cls: "pe-score-line" });
  scoreLine.innerHTML = `${totalCorrect} / ${total} correct&nbsp;&nbsp;<span class="pe-score-percent ${strictPass ? "pass" : "fail"}">${pct.toFixed(1)}%</span>`;

  const passNote = report.createDiv({ cls: "pe-pass-note" });
  passNote.setText(strictPass
    ? `Above the ~83% CompTIA scaled-pass benchmark. Solid.`
    : `Below the ~83% CompTIA scaled-pass benchmark (≈ 750/900). Review the misses below.`);

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

  // Missed questions list with jump links
  if (missed.length > 0) {
    report.createEl("h3", { text: `Missed questions (${missed.length})` });
    const ul = report.createEl("ul", { cls: "pe-miss-list" });
    missed.forEach(q => {
      const li = ul.createEl("li");
      const a = li.createEl("a", { href: `#pe-q-${q.n}` });
      a.setText(`Q${q.n - 5} (A${q.n})`);
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

  // Scroll to top of report
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
