---
title: Practice Exam B — Custom Community SY0-701
category: practice-exam
tags: [practice-exam, exam-b, community]
status: active
confidence: high
created: 2026-05-22
updated: 2026-05-22
covers: [1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6]
source: Custom community SY0-701 Security+ practice exam (user-supplied)
---

# Practice Exam B — Custom Community SY0-701

Full multiple-choice section of Practice Exam B from the user-supplied community SY0-701 practice exam. **85 questions** total — 81 single-answer, 4 multi-answer (Select TWO).

> **Performance-based questions B1–B5** appear first as interactive widgets — matching tasks across certificates, mobile platforms, incident response ordering, security technologies, and data states. The 85 multiple-choice questions B6–B90 follow below.

**How this works:** answer every question by clicking option(s). For "Select TWO" questions, click each option you want to include — clicking again deselects. **No feedback appears as you go.** When you're done, hit **Grade my test** at the bottom and the full report card with per-question feedback drops in at the top.

The CompTIA passing score is roughly **750 / 900 (~83%)** — this exam scales that proportionally below.

```dataviewjs
const questions = [
{"n":6,"q":"A security administrator has performed an audit of the organization’s production web servers, and the results have identified default configurations, web services running from a privileged account, and inconsistencies with SSL certificates. Which of the following would be the BEST way to resolve these issues?","opts":[{"l":"A","t":"Server hardening","c":true,"w":"Many applications and services include secure configuration guides to assist in hardening the system. These hardening steps will make the system as secure as possible while simultaneously allowing the application to run efficiently."},{"l":"B","t":"Multi-factor authentication","c":false,"w":"Although multi-factor authentication is always a good best practice, simply enabling multiple authentication methods would not resolve the issues identified during the audit."},{"l":"C","t":"Enable HTTPS","c":false,"w":"Most web servers will use HTTPS to ensure that network communication is encrypted. However, requiring encrypted network traffic would not correct the issues identified during the audit."},{"l":"D","t":"Run operating system updates","c":false,"w":"Keeping the system updated is another good best practice, but the issues identified during the audit were not related to OS patches. Many of the issues identified in the audit appear to be related to the configuration of the web server, so any resolution should focus on correcting these configuration issues."}],"topic":"SY0-701, Objective 2.5 - Hardening Techniques","url":"https://professormesser.link/701020503","objective":"2.5","domain":"2"},
{"n":7,"q":"A shipping company stores information in small regional warehouses around the country. The company maintains an IPS at each warehouse to watch for suspicious traffic patterns. Which of the following would BEST describe the security control used at the warehouse?","opts":[{"l":"A","t":"Deterrent","c":false,"w":"A deterrent discourages an intrusion attempt, but it doesn't directly prevent the access. An application splash screen or posted warning sign would be categorized as a deterrent."},{"l":"B","t":"Compensating","c":false,"w":"A compensating control can’t prevent an attack, but it can provide an alternative when an attack occurs. For example, a compensating control would include the re-imaging of a compromised server."},{"l":"C","t":"Directive","c":false,"w":"Directive control types are guidelines offered to help direct a subject towards security compliance. Training users on the proper storage of sensitive files would be an example of a directive control."},{"l":"D","t":"Detective","c":true,"w":"An IPS can detect, alert, and log an intrusion attempt. The IPS could also be categorized as a preventive control, since it has the ability to actively block known attacks."}],"topic":"SY0-701, Objective 1.1 - Security Controls","url":"https://professormesser.link/701010101","objective":"1.1","domain":"1"},
{"n":8,"q":"The Vice President of Sales has asked the IT team to create daily backups of the sales data. The Vice President is an example of a:","opts":[{"l":"A","t":"Data owner","c":true,"w":"The data owner is accountable for specific data, so this person is often a senior officer of the organization."},{"l":"B","t":"Data controller","c":false,"w":"A data controller manages the processing of the data. For example, a payroll department would be a data controller, and a payroll servicing company would be the data processor."},{"l":"C","t":"Data steward","c":false,"w":"The data steward manages access rights to the data. In this example, the IT team would be the data steward."},{"l":"D","t":"Data processor","c":false,"w":"The data processor is often a third-party that processes data on behalf of the data controller."}],"topic":"SY0-701, Objective 5.1 - Data Roles and Responsibilities","url":"https://professormesser.link/701050105","objective":"5.1","domain":"5"},
{"n":9,"q":"A security engineer is preparing to conduct a penetration test of a third- party website. Part of the preparation involves reading through social media posts for information about this site. Which of the following describes this practice?","opts":[{"l":"A","t":"Partially known environment","c":false,"w":"A partially known environment describes how aware an attacker might be about a test. The attacker may have access to some information about the test, but not all information is disclosed."},{"l":"B","t":"OSINT","c":true,"w":"OSINT (Open Source Intelligence) describes the process of obtaining information from open sources such as social media sites, corporate websites, online forums, and other publicly available locations."},{"l":"C","t":"Exfiltration","c":false,"w":"Exfiltration describes the theft of data by an attacker."},{"l":"D","t":"Active reconnaissance","c":false,"w":"Active reconnaissance would show some evidence of data gathering. For example, performing a ping scan or DNS query wouldn’t exploit a vulnerability, but it would show that someone was gathering information."}],"topic":"SY0-701, Objective 4.3 - Threat Intelligence","url":"https://professormesser.link/701040302","objective":"4.3","domain":"4"},
{"n":10,"q":"A company would like to orchestrate the response when a virus is detected on company devices. Which of the following would be the BEST way to implement this function?","opts":[{"l":"A","t":"Active reconnaissance","c":false,"w":"Active reconnaissance will gather information about a system, but it does not provide any ongoing monitoring or response features."},{"l":"B","t":"Log aggregation","c":false,"w":"Log aggregation provides a method of centralizing evidence and log files for reporting and future analysis. The aggregated log does not inherently provide a response to a security event."},{"l":"C","t":"Vulnerability scan","c":false,"w":"A vulnerability scan will identify any known vulnerabilities that may be associated with a system. However, a vulnerability scan will not identify real-time infections or automate the response."},{"l":"D","t":"Escalation scripting","c":true,"w":"Scripting and automation can provide methods to automate or orchestrate the escalation response when a security issue is detected."}],"topic":"SY0-701, Objective 4.7 - Scripting and Automation","url":"https://professormesser.link/701040701","objective":"4.7","domain":"4"},
{"n":11,"q":"A user in the accounting department has received a text message from the CEO. The message requests payment by cryptocurrency for a recently purchased tablet. Which of the following would BEST describe this attack?","opts":[{"l":"A","t":"Brand impersonation","c":false,"w":"Brand impersonation usually involves a third-party pretending to be an employee or representative of another (usually well-known) company. This text message did not claim a particular brand or trademark as part of the attack."},{"l":"B","t":"Watering hole attack","c":false,"w":"A watering hole attack requires users to visit a central website or location. Viewing this text message did not require the user to visit any third-party websites."},{"l":"C","t":"Smishing","c":true,"w":"Smishing is phishing using SMS (Short Message Service), and is more commonly referenced as text messaging. A message allegedly from the CEO asking for an unusual payments using cryptocurrency or gift cards would be categorized as smishing."},{"l":"D","t":"Typosquatting","c":false,"w":"A typosquatting attack commonly uses a misspelling of a domain name to redirect victims to a malicious website."}],"topic":"SY0-701, Objective 2.1 - Phishing","url":"https://professormesser.link/701020202","objective":"2.1","domain":"2"},
{"n":12,"q":"A company has been informed of a hypervisor vulnerability that could allow users on one virtual machine to access resources on another virtual machine. Which of the following would BEST describe this vulnerability?","opts":[{"l":"A","t":"Containerization","c":false,"w":"Containerization is an application deployment architecture that uses a self-contained group of application code and dependencies. Using containerization, many separate containers can be deployed simultaneously on a single system."},{"l":"B","t":"Jailbreaking","c":false,"w":"Jailbreaking describes the replacement of firmware on a mobile phone or tablet with the goal of enabling or allowing features that would not normally be available. For example, a jailbroken phone or tablet can install software from locations other than the primary app store."},{"l":"C","t":"SDN","c":false,"w":"SDN (Software-Defined Networking) separates the control plane of devices from the data plane. This allows for more automation and dynamic changes to the infrastructure."},{"l":"D","t":"Escape","c":true,"w":"A VM (Virtual Machine) escape is a vulnerability that allows communication between separate VMs."}],"topic":"SY0-701, Objective 2.3 - Virtualization Vulnerabilities","url":"https://professormesser.link/701020309","objective":"2.3","domain":"2"},
{"n":13,"q":"While working from home, users are attending a project meeting over a web conference. When typing in the meeting link, the browser is unexpectedly directed to a different website than the web conference. Users in the office do not have any issues accessing the conference site. Which of the following would be the MOST likely reason for this issue?","opts":[{"l":"A","t":"Buffer overflow","c":false,"w":"A buffer overflow vulnerability is associated with application input that exceeds the expected input size. A buffer overflow would cause an application to fail or perform unusually, but a buffer overflow would not appear as a redirected web server from a DNS lookup."},{"l":"B","t":"Wireless disassociation","c":false,"w":"Wireless deauthentication would cause users on a wireless network to constantly disconnect. Wireless deauthentication would not cause a redirection of a website."},{"l":"C","t":"Amplified DDoS","c":false,"w":"An amplified DDOS (Distributed Denial of Service) would attack a service from many different devices and cause the service to be unavailable. This attack sends specially crafted packets to maximize the amount of traffic seen in the response. In this example, the service did not document any availability problems."},{"l":"D","t":"DNS poisoning","c":true,"w":"An attacker with access to a DNS (Domain Name System) server can modify the DNS configuration files and redirect users to a different website. Anyone using a different DNS server may not see any problems with connectivity to the original site."}],"topic":"SY0-701, Objective 2.4 - DNS Attacks","url":"https://professormesser.link/701020407","objective":"2.4","domain":"2"},
{"n":14,"q":"A company is launching a new internal application that will not start until a username and password is entered and a smart card is plugged into the computer. Which of the following BEST describes this process?","opts":[{"l":"A","t":"Federation","c":false,"w":"Federation provides a way to authenticate and authorize between two different organizations. In this example, the authentication process uses internal information without any type of connection or trust to a third-party."},{"l":"B","t":"Accounting","c":false,"w":"Accounting will document information regarding a user’s session, such as login time, data sent and received, files transferred, and logout time."},{"l":"C","t":"Authentication","c":true,"w":"The process of proving who you say you are is authentication. In this example, the password and smart card are two factors of authentication, and both reasonably prove that the person with the login credentials is authentic."},{"l":"D","t":"Authorization","c":false,"w":"The authorization process assigns users to resources. This process commonly occurs after the authentication process is complete."}],"topic":"SY0-701, Objective 1.2 - Authentication, Authorization, and Accounting","url":"https://professormesser.link/701010203","objective":"1.2","domain":"1"},
{"n":15,"q":"An online retailer is planning a penetration test as part of their PCI DSS validation. A third-party organization will be performing the test, and the online retailer has provided the Internet-facing IP addresses for their public web servers. No other details were provided. What penetration testing methodology is the online retailer using?","opts":[{"l":"A","t":"Known environment","c":false,"w":"A known environment test is performed when the attacker has complete details about the victim’s systems and infrastructure."},{"l":"B","t":"Passive reconnaissance","c":false,"w":"Passive reconnaissance is the process of gathering information from publicly available sites, such as social media or corporate websites."},{"l":"C","t":"Partially known environment","c":true,"w":"A partially known environment test is performed when the attacker knows some information about the victim, but not all information is available."},{"l":"D","t":"Benchmarks","c":false,"w":"Security benchmarks describe a set of best practices to apply to an application, operating system, or any other service. A benchmark does not describe the information provided to a vulnerability scanning service."}],"topic":"SY0-701, Objective 5.5 - Penetration Tests","url":"https://professormesser.link/701050502","objective":"5.5","domain":"5"},
{"n":16,"q":"A manufacturing company produces radar used by commercial and military organizations. A recently proposed policy change would allow the use of mobile devices inside the facility. Which of the following would be the MOST significant threat vector issue associated with this change in policy?","opts":[{"l":"A","t":"Unauthorized software on rooted devices","c":false,"w":"Although unauthorized software use can be a security issue, it isn’t as significant as the exfiltration of intellectual property."},{"l":"B","t":"Remote access clients on the mobile devices","c":false,"w":"It’s sometimes convenient to have a remote access client available, and this type of access can certainly be a concern if the proper security is not in place. However, the much more significant security issue in this list would be associated with the ease of photos and videography when working with confidential information."},{"l":"C","t":"Out of date mobile operating systems","c":false,"w":"Having an outdated operating system can potentially include security vulnerabilities, but these vulnerabilities do not have the significance of an active data exfiltration method."},{"l":"D","t":"Loss of intellectual property","c":true,"w":"The exfiltration of confidential information and intellectual property is relatively simple with an easily transportable mobile phone. Organizations associated with sensitive products or services must always be aware of the potential for information leaks using files, photos, or video."}],"topic":"SY0-701, Objective 2.2 - Common Threat Vectors","url":"https://professormesser.link/701020201","objective":"2.2","domain":"2"},
{"n":17,"q":"Which of the following would be the BEST way for an organization to verify the digital signature provided by an external email server?","opts":[{"l":"A","t":"Perform a vulnerability scan","c":false,"w":"A vulnerability scan can provide information on any unpatched applications or services, but it won't provide digital signature verification for incoming email messages."},{"l":"B","t":"View the server's device certificate","c":false,"w":"A device certificate can validate the trust of a system, but it does not provide digital signature validation for email servers."},{"l":"C","t":"Authenticate to a RADIUS server","c":false,"w":"A RADIUS server can verify account credentials, but it does not provide a method for validating the digital signatures provided by a third-party email server."},{"l":"D","t":"Check the DKIM record","c":true,"w":"A DKIM (Domain Keys Identified Mail) record is a DNS (Domain Name System) entry that includes the public key associated with an email server's digital signatures. A legitimate email server will digitally sign all outgoing emails and provide the public key in their DNS for third-party validation."}],"topic":"SY0-701, Objective 4.5 - Email Security","url":"https://professormesser.link/701040505","objective":"4.5","domain":"4"},
{"n":18,"q":"A company is using older operating systems for their web servers and are concerned of their stability during periods of high use. Which of the following should the company use to maximize the uptime and availability of this service?","opts":[{"l":"A","t":"Cold site","c":false,"w":"A cold site is commonly used for disaster recovery and would require building an infrastructure and installing software before the site would be functional. Moving the web services to a cold site would not be an efficient form of server resiliency."},{"l":"B","t":"UPS","c":false,"w":"A UPS (Uninterruptible Power Supply) provides an alternative power source when the main power is no longer available. Although this would provide additional uptime for power faults, it does not provide resiliency if an operating system crashes."},{"l":"C","t":"Redundant routers","c":false,"w":"Maintaining multiple routers is common in highly available networks, but multiple routers will not provide uptime if the server operating system was to fail."},{"l":"D","t":"Load balancer","c":true,"w":"A load balancer maintains a pool of servers and can distribute the load across those devices. If a device fails, the other servers will continue to operate and provide the necessary services."}],"topic":"SY0-701, Objective 3.4 - Resiliency","url":"https://professormesser.link/701030401","objective":"3.4","domain":"3"},
{"n":19,"q":"A user in the accounting department would like to email a spreadsheet with sensitive information to a list of third-party vendors. Which of the following would be the BEST way to protect the data in this email?","opts":[{"l":"A","t":"Full disk encryption","c":false,"w":"Full disk encryption protects all data saved on a storage drive, but it does not provide any data protection for messages or attachments sent between email servers."},{"l":"B","t":"Key exchange algorithm","c":false,"w":"A key exchange algorithm can be used to securely exchange key information between devices, but it does not provide a method of encrypting data."},{"l":"C","t":"Salted hash","c":false,"w":"A salted hash describes a hash value that includes some additional data (the salt) to provide randomization. A salted hash does not provide data confidentiality or encryption."},{"l":"D","t":"Asymmetric encryption","c":true,"w":"Asymmetric encryption uses a recipient's public key to encrypt data, and this data can only be decrypted with the recipient's private key. This encryption method is commonly used with software such as PGP or GPG."}],"topic":"SY0-701, Objective 1.4 - Encrypting Data","url":"https://professormesser.link/701010402","objective":"1.4","domain":"1"},
{"n":20,"q":"A system administrator would like to segment the network to give the marketing, accounting, and manufacturing departments their own private network. The network communication between departments would be restricted for additional security. Which of the following should be configured on this network?","opts":[{"l":"A","t":"VPN","c":false,"w":"A VPN (Virtual Private Network) is an encryption technology used to secure network connections between sites or remote end-user communication. VPNs are not commonly used to segment internal network communication."},{"l":"B","t":"RBAC","c":false,"w":"RBAC (Role-Based Access Control) describes a control mechanism for managing rights and permissions in an operating system. RBAC is not used for network segmentation."},{"l":"C","t":"VLAN","c":true,"w":"A VLAN (Virtual Local Area Network) is a common method of using a switch to logically segment a network. The devices in each segmented VLAN can only communicate with other devices in the same VLAN. A router is used to connect VLANs, and this router can often be used to control traffic flows between the VLANs."},{"l":"D","t":"SDN","c":false,"w":"SDN (Software Defined Networking) separates the planes of operation so that infrastructure devices would have a defined control plane and data plane. SDN would not be used when segmenting internal networks."}],"topic":"SY0-701, Objective 2.5 - Segmentation and Access Control","url":"https://professormesser.link/701020501","objective":"2.5","domain":"2"},
{"n":21,"q":"A technician at an MSP has been asked to manage devices on third-party private network. The technician needs command line access to internal routers, switches, and firewalls. Which of the following would provide the necessary access?","opts":[{"l":"A","t":"HSM","c":false,"w":"An HSM (Hardware Security Module) is a secure method of cryptographic key backup and hardware-based cryptographic offloading."},{"l":"B","t":"Jump server","c":true,"w":"A jump server is a highly secured device commonly used to access secure areas of another network. The technician would first connect to the jump server using SSH or a VPN tunnel, and then \"jump\" from the jump server to other devices on the inside of the protected network. This would allow technicians at an MSP (Managed Service Provider) to securely access devices on their customer's private networks."},{"l":"C","t":"NAC","c":false,"w":"NAC (Network Access Control) is a broad term describing access control based on a health check or posture assessment. NAC will deny access to devices that don't meet the minimum security requirements."},{"l":"D","t":"Air gap","c":false,"w":"An air gap is a segmentation strategy that separates devices or networks by physically disconnecting them from each other."}],"topic":"SY0-701, Objective 3.2 - Network Appliances","url":"https://professormesser.link/701030203","objective":"3.2","domain":"3"},
{"n":22,"q":"A transportation company is installing new wireless access points in their corporate office. The manufacturer estimates the access points will operate an average of 100,000 hours before a hardware-related outage. Which of the following describes this estimate?","opts":[{"l":"A","t":"MTTR","c":false,"w":"MTTR (Mean Time to Repair) is the time required to repair a product or system after a failure."},{"l":"B","t":"RPO","c":false,"w":"RPO (Recovery Point Objectives) define how much data loss would be acceptable during a recovery."},{"l":"C","t":"RTO","c":false,"w":"RTO (Recovery Time Objectives) define the minimum objectives required to get up and running to a particular service level."},{"l":"D","t":"MTBF","c":true,"w":"The MTBF (Mean Time Between Failures) is the average time expected between outages. This is usually an estimation based on the internal device components and their expected operational lifetime."}],"topic":"SY0-701, Objective 5.2 - Business Impact Analysis","url":"https://professormesser.link/701050204","objective":"5.2","domain":"5"},
{"n":23,"q":"A security administrator is creating a policy to prevent the disclosure of credit card numbers in a customer support application. Users of the application would only be able to view the last four digits of a credit card number. Which of the following would provide this functionality?","opts":[{"l":"A","t":"Hashing","c":false,"w":"Hashing is a method of storing a digital fingerprint of data. In this example, the last four digits displayed are the actual card numbers and not a hash of the card numbers."},{"l":"B","t":"Tokenization","c":false,"w":"Tokenization replaces sensitive data with a non-sensitive placeholder. In this example, the only visible information is part of the actual card number. Tokenization is not used to replace any of the card numbers."},{"l":"C","t":"Masking","c":true,"w":"Data masking hides data from being viewed. The full credit card numbers are stored in a database, but only a limited view of this data is available when accessing the information from the application."},{"l":"D","t":"Salting","c":false,"w":"Salting adds randomized data when performing a hashing function. Salting is often used to add additional randomization when storing passwords."}],"topic":"SY0-701, Objective 3.3 - Protecting Data","url":"https://professormesser.link/701030303","objective":"3.3","domain":"3"},
{"n":24,"q":"A user is authenticating through the use of a PIN and a fingerprint. Which of the following would describe these authentication factors?","opts":[{"l":"A","t":"Something you know, something you are","c":true,"w":"A PIN (Personal Identification Number) is something you know, and a fingerprint is something you are."},{"l":"B","t":"Something you are, somewhere you are","c":false,"w":"A fingerprint would be categorized as something you are, but a somewhere you are could be a set of GPS coordinates or IP addresses."},{"l":"C","t":"Something you have, something you know","c":false,"w":"Something you have could be an smart ID card or phone app, and something you know could be a PIN or password."},{"l":"D","t":"Somewhere you are, something you are","c":false,"w":"Somewhere you are would be a location, and something you are would be a biometric reading."}],"topic":"SY0-701, Objective 4.6 - Multi-factor Authentication","url":"https://professormesser.link/701040603","objective":"4.6","domain":"4"},
{"n":25,"q":"A security administrator is configuring the authentication process used by technicians when logging into wireless access points and switches. Instead of using local accounts, the administrator would like to pass all login requests to a centralized database. Which of the following would be the BEST way to implement this requirement?","opts":[{"l":"A","t":"COPE","c":false,"w":"COPE (Corporate-owned, personally enabled) devices are purchased by the organization and enabled for both business and personal use. A COPE device does not provide any centralized authentication functionality."},{"l":"B","t":"AAA","c":true,"w":"Using AAA (Authentication, Authorization, and Accounting) is a common method of centralizing authentication. Instead of having separate local accounts on different devices, users can authenticate with account information maintained in a centralized database."},{"l":"C","t":"IPsec","c":false,"w":"IPsec is commonly used as an encrypted tunnel between sites or endpoints. It’s useful for protecting data sent over the network, but IPsec isn’t used to centralize the authentication process."},{"l":"D","t":"SIEM","c":false,"w":"A SIEM (Security Information and Event Management) service provides centralized logging and reporting for network infrastructure devices. A SIEM service does not provide any centralized authentication features."}],"topic":"SY0-701, Objective 4.1 - Wireless Security Settings","url":"https://professormesser.link/701040104","objective":"4.1","domain":"4"},
{"n":26,"q":"A recent audit has determined that many IT department accounts have been granted Administrator access. The audit recommends replacing these permissions with limited access rights. Which of the following would describe this policy?","opts":[{"l":"A","t":"Password vaulting","c":false,"w":"Password vaulting is a secure way to store and retrieve passwords, but it doesn't include a policy for limiting system access."},{"l":"B","t":"Offboarding","c":false,"w":"The offboarding process describes the policies and procedures associated with someone leaving the organization or someone who is no longer an employee of the company."},{"l":"C","t":"Least privilege","c":true,"w":"The policy of least privilege limits the rights and permissions of a user account to only the access required to accomplish their objectives. This policy would limit the scope of an attack originating from a user in the IT department."},{"l":"D","t":"Discretionary access control","c":false,"w":"With discretionary access control (DAC), access and permissions are determined by the owner or originator of the files or resources."}],"topic":"SY0-701, Objective 4.6 - Access Controls","url":"https://professormesser.link/701040602","objective":"4.6","domain":"4"},
{"n":27,"q":"A recent security audit has discovered usernames and passwords which can be easily viewed in a packet capture. Which of the following did the audit identify?","opts":[{"l":"A","t":"Weak encryption","c":false,"w":"A weak encryption cipher will appear to protect data, but instead can be commonly circumvented to reveal the plaintext. In this example, the usernames and passwords were not encrypted in any way and could be viewed in a packet capture."},{"l":"B","t":"Improper patch management","c":false,"w":"Maintaining systems to the latest patch version will protect against vulnerabilities and security issues. Sending information in the clear over the network is not commonly associated with an unpatched system."},{"l":"C","t":"Insecure protocols","c":true,"w":"An insecure authentication protocol will transmit information \"in the clear,\" or without any type of encryption or protection."},{"l":"D","t":"Open ports","c":false,"w":"Open ports are usually associated with a service or application on a device. An open port is not commonly associated with any encryption or protected network communication."}],"topic":"SY0-701, Objective 4.5 - Secure Protocols","url":"https://professormesser.link/701040504","objective":"4.5","domain":"4"},
{"n":28,"q":"Before deploying a new application, a company is performing an internal audit to ensure all of their servers are configured with the appropriate security features. Which of the following would BEST describe this process?","opts":[{"l":"A","t":"Due care","c":true,"w":"Due care describes a duty to act honestly and in good faith. Due diligence is often associated with third-party activities, and due care tends to refer to internal activities."},{"l":"B","t":"Active reconnaissance","c":false,"w":"Active reconnaissance refers to the process of collecting information before a penetration test. Active reconnaissance includes activities that will communicate to devices where traffic can be logged."},{"l":"C","t":"Data retention","c":false,"w":"Data retention involves the collection and storage of data over time. For example, many organizations are required to collect and store years of email records or financial documents."},{"l":"D","t":"Statement of work","c":false,"w":"A statement of work is often used during a professional services engagement to detail a list of specific tasks to complete. In this example, all of the work is part of an internal audit and does not include any mention of third-party professional services."}],"topic":"SY0-701, Objective 5.4 - Compliance","url":"https://professormesser.link/701050401","objective":"5.4","domain":"5"},
{"n":29,"q":"An organization has previously purchased insurance to cover a ransomware attack, but the costs of maintaining the policy have increased above the acceptable budget. The company has now decided to cancel the insurance policies and address potential ransomware issues internally. Which of the following would best describe this action?","opts":[{"l":"A","t":"Mitigation","c":false,"w":"If the organization was to purchase additional backup facilities and update their backup processes to include offline backup storage, they would be mitigating the risk of a ransomware infection."},{"l":"B","t":"Acceptance","c":true,"w":"Risk acceptance is a business decision that places the responsibility of the risky activity on the organization itself."},{"l":"C","t":"Transference","c":false,"w":"Purchasing insurance to cover a risky activity is a common method of transferring risk from the organization to the insurance company."},{"l":"D","t":"Risk-avoidance","c":false,"w":"To avoid the risk of ransomware, the organization would need to completely disconnect from the Internet and disable all methods that ransomware might use to infect a system. This risk response technique would most likely not apply to ransomware."}],"topic":"SY0-701, Objective 5.2 - Risk Management Strategies","url":"https://professormesser.link/701050203","objective":"5.2","domain":"5"},
{"n":30,"q":"Which of these threat actors would be MOST likely to install a company's internal application on a public cloud provider?","opts":[{"l":"A","t":"Organized crime","c":false,"w":"Organized crime is usually motivated by money. An organized crime group is more interested in stealing information than installing company applications in a public cloud."},{"l":"B","t":"Nation state","c":false,"w":"Nation states are highly sophisticated hackers, and their efforts are usually focused on obtaining confidential government information or disrupting governmental operations."},{"l":"C","t":"Shadow IT","c":true,"w":"Shadow IT is an internal organization within the company but is not part of the IT department. Shadow IT often circumvents or ignores existing IT policies to build their own infrastructure with company resources."},{"l":"D","t":"Hacktivist","c":false,"w":"A hacktivist often has a political statement to make, and their hacking efforts would commonly result in a public display of that information. However, a hacktivist would not install company application on a public cloud provider's network."}],"topic":"SY0-701, Objective 2.1 - Threat Actors","url":"https://professormesser.link/701020101","objective":"2.1","domain":"2"},
{"n":31,"q":"An IPS report shows a series of exploit attempts were made against externally facing web servers. The system administrator of the web servers has identified a number of unusual log entries on each system. Which of the following would be the NEXT step in the incident response process?","opts":[{"l":"A","t":"Check the IPS logs for any other potential attacks","c":false,"w":"Before looking for additional intrusions, the devices showing a potential exploit should be contained."},{"l":"B","t":"Create a plan for removing malware from the web servers","c":false,"w":"The eradication and recovery processes should occur after the systems have been isolated and contained."},{"l":"C","t":"Disable any breached user accounts","c":false,"w":"Disabling accounts is part of the recovery process, and it should occur after the exploited servers are contained."},{"l":"D","t":"Disconnect the web servers from the network","c":true,"w":"The unusual log entries on the web server indicate that the system may have been exploited. In that situation, the servers should be contained to prevent all connectivity to those systems."}],"topic":"SY0-701, Objective 4.8 - Incident Response","url":"https://professormesser.link/701040801","objective":"4.8","domain":"4"},
{"n":32,"q":"A security administrator is viewing the logs on a laptop in the shipping and receiving department and identifies these events: 8:55:30 AM | D:\\Downloads\\ChangeLog-5.0.4.scr | Quarantine Success 9:22:54 AM | C:\\Program Files\\Photo Viewer\\ViewerBase.dll | Quarantine Failure 9:44:05 AM | C:\\Sales\\Sample32.dat | Quarantine Success Which of the following would BEST describe the circumstances surrounding these events?","opts":[{"l":"A","t":"The antivirus application identified three viruses and quarantined two viruses","c":true,"w":"The logs are showing the name of files on the local device and a quarantine disposition, which indicates that two of the files were moved (quarantined) to a separate area of the drive. This will prevent the malicious files from executing and will safely store the files for any future investigation. The second file in the list failed the quarantine process, and was most likely because the library was already in use by the operating system and could not be moved."},{"l":"B","t":"The host-based firewall blocked two traffic flows","c":false,"w":"A host-based firewall will allow or deny traffic flows based on IP address, port number, application, or other criteria. A host-based firewall does not block traffic flows based on the name of an existing file, and the firewall process would not quarantine or move files to other folders."},{"l":"C","t":"A host-based allow list has blocked two applications from executing","c":false,"w":"The \u201cquarantine\u201d disposition refers to a file that has been moved from one location to another. An allow list function would simply stop the application from executing without changing the location of an application file."},{"l":"D","t":"A network-based IPS has identified two known vulnerabilities","c":false,"w":"The logs from a network-based IPS (Intrusion Prevention System) would not commonly be located on a user\u2019s laptop, and those logs would display allow or deny dispositions based on the name of a known vulnerability. A network-based IPS would also not commonly move (quarantine) files on an end-user\u2019s computer."}],"topic":"SY0-701, Objective 4.9 - Log Data","url":"https://professormesser.link/701040901","objective":"4.9","domain":"4"},
{"n":33,"q":"In the past, an organization has relied on the curated Apple App Store to avoid issues associated with malware and insecure applications. However, the IT department has discovered an iPhone in the shipping department with applications not available on the Apple App Store. How did the shipping department user install these apps on their mobile device?","opts":[{"l":"A","t":"Side loading","c":true,"w":"If Apple\u2019s iOS has been circumvented using jailbreaking, a user can install apps without using the Apple App Store. Circumventing a curated app store to install an app manually is called side loading."},{"l":"B","t":"Malicious update","c":false,"w":"A malicious update would patch an existing app and would not commonly install a different app onto a mobile device."},{"l":"C","t":"VM escape","c":false,"w":"VM (Virtual Machine) escape describes the unauthorized access of one VM from a different VM on the same hypervisor. An app installation on a phone is not related to virtual machines."},{"l":"D","t":"Cross-site scripting","c":false,"w":"Cross-site scripting is an attack that uses the trust in a browser to gain access to a third-party site. The installation of an app isn't commonly associated with cross-site scripting."}],"topic":"SY0-701, Objective 2.3 - Mobile Device Vulnerabilities","url":"https://professormesser.link/701020313","objective":"2.3","domain":"2"},
{"n":34,"q":"A company has noticed an increase in support calls from attackers. These attackers are using social engineering to gain unauthorized access to customer data. Which of the following would be the BEST way to prevent these attacks?","opts":[{"l":"A","t":"User training","c":true,"w":"Many social engineering attacks do not involve technology, so the best way to prevent the attack is to properly train users to watch for these techniques."},{"l":"B","t":"Next-generation firewall","c":false,"w":"A next-generation firewall can provide extensive protection against attacks involving technology, but a firewall can't stop a phone conversation or similar type of social engineering."},{"l":"C","t":"Internal audit","c":false,"w":"An internal audit may be able to recognize and report on the increase in social engineering attacks, but an audit does not provide a method of stopping the attack from originally occurring."},{"l":"D","t":"Penetration testing","c":false,"w":"Penetration testing can identify vulnerabilities and can attempt to exploit those vulnerabilities. Penetration testing does not block an attack from occurring."}],"topic":"SY0-701, Objective 5.6 - User Training","url":"https://professormesser.link/701050602","objective":"5.6","domain":"5"},
{"n":35,"q":"As part of an internal audit, each department of a company has been asked to compile a list of all devices, operating systems, and applications in use. Which of the following would BEST describe this audit?","opts":[{"l":"A","t":"Attestation","c":false,"w":"Attestation is commonly one of the last steps when performing an audit. This attestation is an opinion of the truth or accuracy of a company\u2019s security position."},{"l":"B","t":"Self-assessment","c":true,"w":"A self-assessment describes an organization performing their own security checks."},{"l":"C","t":"Regulatory compliance","c":false,"w":"Regulatory compliance is often required to validate a specific security posture. For example, an organization storing credit card information may be required by regulation to ensure the confidentiality of that data. This question does not mention any type of regulation as the reason for this information gathering."},{"l":"D","t":"Vendor monitoring","c":false,"w":"When working with a third-party, it's often important to maintain an ongoing audit and monitoring processes with the vendor. In this example, all of the information gathering is with internal company departments."}],"topic":"SY0-701, Objective 5.5 - Audits and Assessments","url":"https://professormesser.link/701050501","objective":"5.5","domain":"5"},
{"n":36,"q":"A company is concerned about security issues at their remote sites. Which of the following would provide the IT team with more information of potential shortcomings?","opts":[{"l":"A","t":"Gap analysis","c":true,"w":"A gap analysis is a formal process comparing the current security posture with where the company would like to be. This often examines many different aspects of the overall security environment."},{"l":"B","t":"Policy administrator","c":false,"w":"The Policy Administrator is used in a zero-trust environment to generate access tokens or credentials."},{"l":"C","t":"Change management","c":false,"w":"The change management process is important for the controlled deployment of system changes, but it doesn't help provide an overview of security shortcomings."},{"l":"D","t":"Dependency list","c":false,"w":"A list of dependencies is often used during technical change management to plan for any potential changes. Before a change can occur, all of the dependencies associated with that change must be addressed."}],"topic":"SY0-701, Objective 1.2 - Gap Analysis","url":"https://professormesser.link/701010204","objective":"1.2","domain":"1"},
{"n":37,"q":"An attacker has identified a number of devices on a corporate network with the username of \u201cadmin\u201d and the password of \u201cadmin.\u201d Which of the following describes this situation?","opts":[{"l":"A","t":"Open service ports","c":false,"w":"Service ports are commonly opened when an inbound connection needs to be made to a service. For example, a web server will open ports 80 and 443 to allow all incoming traffic requests by the service."},{"l":"B","t":"Default credentials","c":true,"w":"When a device is first installed, it will often have a default set of credentials such as admin/password or admin/admin. If these default credentials are never changed, they would allow access by anyone who knows the default configuration."},{"l":"C","t":"Unsupported systems","c":false,"w":"Unsupported systems describe devices or services no longer supported by the manufacturer. An unsupported system may not receive ongoing security patches or updates."},{"l":"D","t":"Phishing","c":false,"w":"Phishing uses social engineering to obtain sensitive or private information. A device using the default credentials would not require a phishing attack to determine the valid username and password."}],"topic":"SY0-701, Objective 2.2 - Common Threat Vectors","url":"https://professormesser.link/701020201","objective":"2.2","domain":"2"},
{"n":38,"q":"A security administrator attends an annual industry convention with other security professionals from around the world. Which of the following attacks would be MOST likely in this situation?","opts":[{"l":"A","t":"Smishing","c":false,"w":"Smishing, or SMS phishing, is a phishing attack over text messaging. A security administrator attending an industry event would not be the best possible scenario for smishing."},{"l":"B","t":"Supply chain","c":false,"w":"A supply chain attack infects part of the product manufacturing process in an attempt to also infect everything further down the chain. An industry trade event would not be a common vector for a supply chain attack."},{"l":"C","t":"SQL injection","c":false,"w":"A SQL (Structured Query Language) injection attack takes advantage of a software vulnerability to allow direct access to a SQL database. A SQL injection is not commonly directed towards an individual or an event."},{"l":"D","t":"Watering hole","c":true,"w":"A watering hole attack infects a third-party visited by the intended victims. An industry convention would be a perfect location to attack security professionals."}],"topic":"SY0-701, Objective 2.2 - Watering Hole Attacks","url":"https://professormesser.link/701020204","objective":"2.2","domain":"2"},
{"n":39,"q":"A transportation company headquarters is located in an area with frequent power surges and outages. The security administrator is concerned about the potential for downtime and hardware failures. Which of the following would provide the most protection against these issues? Select TWO.","opts":[{"l":"A","t":"UPS","c":true,"w":"A UPS (Uninterruptible Power Supply) can provide backup power for a limited time when the main power source is unavailable, and a generator can maintain uptime as long as a fuel source is available."},{"l":"B","t":"Parallel processing","c":false,"w":"Parallel processing uses multiple processors across multiple systems to improve the performance of an application. Parallel processing will not protect against power outages."},{"l":"C","t":"Snapshots","c":false,"w":"A snapshot is a type of backup commonly associated with virtual machines (VMs). Taking the snapshot of a VM can provide an easy method of reverting to an earlier configuration, but it doesn't help for power issues."},{"l":"D","t":"Multi-cloud system","c":false,"w":"An application hosted across multiple cloud providers would not provide any resiliency for power-related issues in a local data center."},{"l":"E","t":"Load balancing","c":false,"w":"Load balancers provide a method of managing busy services by increasing the number of available servers and balancing the load between them. A load balancer won't provide any help with power issues, however."},{"l":"F","t":"Generator","c":true,"w":"A UPS (Uninterruptible Power Supply) can provide backup power for a limited time when the main power source is unavailable, and a generator can maintain uptime as long as a fuel source is available."}],"topic":"SY0-701, Objective 3.4 - Power Resiliency","url":"https://professormesser.link/701030405","objective":"3.4","domain":"3"},
{"n":40,"q":"An organization has developed an in-house mobile device app for order processing. The developers would like the app to identify revoked server certificates without sending any traffic over the corporate Internet connection. Which of the following must be configured to allow this functionality?","opts":[{"l":"A","t":"CSR generation","c":false,"w":"A CSR (Certificate Signing Request) is used during the key creation process. The certificate is sent to the CA to be signed as part of the CSR."},{"l":"B","t":"OCSP stapling","c":true,"w":"The use of OCSP (Online Certificate Status Protocol) requires communication between the client and the issuing CA (Certificate Authority). If the CA is an external organization, then validation checks will communicate across the Internet. The certificate holder can verify their own status and avoid client Internet traffic by storing the status information on an internal server and \u201cstapling\u201d the OCSP status into the SSL/TLS handshake."},{"l":"C","t":"Key escrow","c":false,"w":"Key escrow will provide a third-party with access to decryption keys. The escrow process is not involved in real-time server revocation updates."},{"l":"D","t":"Wildcard","c":false,"w":"A wildcard certificate can be used across many different systems matching the fully qualified domain name associated with the wildcard."}],"topic":"SY0-701, Objective 1.4 - Certificates","url":"https://professormesser.link/701010408","objective":"1.4","domain":"1"},
{"n":41,"q":"A security administrator has been asked to build a network link to secure all communication between two remote locations. Which of the following would be the best choice for this task?","opts":[{"l":"A","t":"SCAP","c":false,"w":"The SCAP (Security Content Automation Protocol) is used as a common protocol across multiple security tools. SCAP is not used to provide an encrypted tunnel between two locations."},{"l":"B","t":"Screened subnet","c":false,"w":"A screened subnet is a protected area commonly used to host public services without allowing access to an organization's internal private network."},{"l":"C","t":"IPsec","c":true,"w":"IPsec (Internet Protocol Security) is commonly used to create a VPN (Virtual Private Network) protected tunnel between devices or locations."},{"l":"D","t":"Network access control","c":false,"w":"Network access control (NAC) describes the authentication and authorization process when devices connect to a network. NAC is not used to connect two sites over an encrypted channel."}],"topic":"SY0-701, Objective 3.2 - Secure Communication","url":"https://professormesser.link/701030206","objective":"3.2","domain":"3"},
{"n":42,"q":"A Linux administrator has received a ticket complaining of response issues with a database server. After connecting to the server, the administrator views this information: Filesystem Size Used Avail Use% Mounted on /dev/xvda1 158G 158G 0 100% / Which of the following would BEST describe this information?","opts":[{"l":"A","t":"Buffer overflow","c":false,"w":"A buffer overflow allows an attacker to manipulate the contents of memory. A filesystem at 100% utilization does not describe the contents in memory."},{"l":"B","t":"Resource consumption","c":true,"w":"The available storage on the local filesystem has been depleted, and the information shows 0 bytes available. More drive space would need to be available for the server to return to normal response times."},{"l":"C","t":"SQL injection","c":false,"w":"A SQL injection is a network attack type used to access database information directly. A SQL injection would not cause significant storage drive utilization."},{"l":"D","t":"Race condition","c":false,"w":"A race condition is a programming issue where a portion of the application is making changes not seen by other parts of the application. A race condition does not commonly use all available storage space on the device."}],"topic":"SY0-701, Objective 2.4 - Indicators of Compromise","url":"https://professormesser.link/701020415","objective":"2.4","domain":"2"},
{"n":43,"q":"Which of the following can be used for credit card transactions from a mobile device without sending the actual credit card number across the network?","opts":[{"l":"A","t":"Tokenization","c":true,"w":"Tokenization replaces sensitive data with a non-sensitive placeholder. Tokenization is commonly used for NFC (Near-Field Communication) payment systems, and sends a single-use token across the network instead of the actual credit card information."},{"l":"B","t":"Hashing","c":false,"w":"Hashing creates a digital \"fingerprint\" of data, but hashing isn't used to transfer card numbers or other financial details from one device to another."},{"l":"C","t":"Steganography","c":false,"w":"Steganography describes hiding data within other media types. For example, it's common to use steganography to hide text documents within an image file. However, steganography is not commonly used to transfer credit card transactions across the network."},{"l":"D","t":"Masking","c":false,"w":"Data masking hides some of the original data to protect sensitive information. Credit card transfers cannot omit or hide data necessary to complete the transaction."}],"topic":"SY0-701, Objective 3.3 - Protecting Data","url":"https://professormesser.link/701030303","objective":"3.3","domain":"3"},
{"n":44,"q":"A security administrator receives a report each week showing a Linux vulnerability associated with a Windows server. Which of the following would prevent this information from appearing in the report?","opts":[{"l":"A","t":"Alert tuning","c":true,"w":"Our monitoring systems are not always perfect, and many require ongoing tuning to properly configure alerts and notifications of important events."},{"l":"B","t":"Application benchmarking","c":false,"w":"Creating an application benchmark can help with the planning and implementation of security monitoring. However, the creation of an application benchmark does not change the alert messages created by a third-party monitoring system."},{"l":"C","t":"SIEM aggregation","c":false,"w":"A SIEM (Security Information and Event Manager) can be used to aggregate all log files to a centralized reporting system. Creating a centralized log repository does not remove invalid alerts from a weekly report."},{"l":"D","t":"Data archiving","c":false,"w":"Many organizations are required to archive data for long-term security monitoring. Simply archiving the data does not change the alert notification in a weekly report."}],"topic":"SY0-701, Objective 4.4 - Security Monitoring","url":"https://professormesser.link/701040401","objective":"4.4","domain":"4"},
{"n":45,"q":"Which of the following would a company use to calculate the loss of a business activity if a vulnerability is exploited?","opts":[{"l":"A","t":"Risk tolerance","c":false,"w":"Risk tolerance describes the amount of risk that would be acceptable to an organization. For example, an organization may tolerate the risk involved with a delay so that patches can be tested prior to deployment."},{"l":"B","t":"Vulnerability classification","c":false,"w":"Most vulnerabilities are classified into categories and are often assigned a score to designate the severity of the known vulnerability."},{"l":"C","t":"Environmental variables","c":false,"w":"An environmental variable is considered when prioritizing patches and security responses. For example, a device in the production network environment will probably have priority over the devices in a test lab environment."},{"l":"D","t":"Exposure factor","c":true,"w":"An exposure factor describes a loss of value to the organization. For example, a network throughput issue might limit access to half of the users, creating a 50% exposure factor. A completely disabled service would calculated as a 100% exposure factor."}],"topic":"SY0-701, Objective 4.3 - Analyzing Vulnerabilities","url":"https://professormesser.link/701040304","objective":"4.3","domain":"4"},
{"n":46,"q":"An administrator is designing a network to be compliant with a security standard for storing credit card numbers. Which of the following would be the BEST choice to provide this compliance?","opts":[{"l":"A","t":"Implement RAID for all storage systems","c":false,"w":"RAID (Redundant Array of Independent Disks) is an important consideration for any project that stores data, but using a RAID array is not part of this compliance requirement. Although compliance may include backups, RAID is not a backup technology."},{"l":"B","t":"Connect a UPS to all servers","c":false,"w":"Integrating a UPS (Uninterruptible Power Supply) is an important way to maintain power during an outage, but it's not required for security compliance for data storage."},{"l":"C","t":"DNS should be available on redundant servers","c":false,"w":"Name resolution can be an important service on the network, but maintaining redundant DNS servers isn't required for compliance with sensitive data storage."},{"l":"D","t":"Perform regular audits and vulnerability scans","c":true,"w":"A focus of credit card storage compliance is to keep credit card information private. The only option matching this requirement is scheduled audits and ongoing vulnerability scans."}],"topic":"SY0-701, Objective 5.4 - Compliance","url":"https://professormesser.link/701050401","objective":"5.4","domain":"5"},
{"n":47,"q":"A company is accepting proposals for an upcoming project, and one of the responses is from a business owned by a board member. Which of the following would describe this situation?","opts":[{"l":"A","t":"Due diligence","c":false,"w":"Due diligence is the process of investigating and verifying information before doing business with an organization."},{"l":"B","t":"Vendor monitoring","c":false,"w":"Vendor monitoring involves ongoing management of the vendor relationship, including ongoing reviews, periodic audits, and other checks and balances."},{"l":"C","t":"Conflict of interest","c":true,"w":"A conflict of interest occurs when a personal interest in a business transaction could compromise the judgment of the people involved. Personal and family relationships between organizations may potentially be a conflict of interest."},{"l":"D","t":"Right-to-audit","c":false,"w":"A right-to-audit clause is commonly added to business contracts to ensure access to periodic audits when working with a third-party."}],"topic":"SY0-701, Objective 5.3 - Third-party Risk Assessment","url":"https://professormesser.link/701050301","objective":"5.3","domain":"5"},
{"n":48,"q":"A company has rolled out a new application that requires the use of a hardware-based token generator. Which of the following would be the BEST description of this access feature?","opts":[{"l":"A","t":"Something you know","c":false,"w":"The number, or token, created by the token generator isn\u2019t previously known by the user, and there\u2019s no requirement to remember the tokens once the authentication process is complete."},{"l":"B","t":"Somewhere you are","c":false,"w":"The location of an individual can be a useful authentication factor when evaluating the validity of a login request. Someone authenticating from an unexpected location or country may be subject to additional authentication checks."},{"l":"C","t":"Something you are","c":false,"w":"Something you are describes a biometric factor, such as a fingerprint or facial scan. The token generator works without any type of biometric scan."},{"l":"D","t":"Something you have","c":true,"w":"The use of the hardware token generator requires the user be in possession of the device during the login process."}],"topic":"SY0-701, Objective 4.6 - Multi-factor Authentication","url":"https://professormesser.link/701040603","objective":"4.6","domain":"4"},
{"n":49,"q":"A company has signed an SLA with an Internet service provider. Which of the following would BEST describe the requirements of this SLA?","opts":[{"l":"A","t":"The customer will connect to remote sites over an IPsec tunnel","c":false,"w":"A service level agreement describes the minimum service levels provided to the customer. You would not commonly see descriptions of how the service will be used in the SLA contract."},{"l":"B","t":"The service provider will provide 99.99% uptime","c":true,"w":"An SLA (Service Level Agreement) is a contract specifying the minimum terms for provided services. It\u2019s common to include uptime, response times, and other service metrics in an SLA."},{"l":"C","t":"The customer applications use HTTPS over tcp/443","c":false,"w":"The protocols used by the customer\u2019s applications aren\u2019t part of the service requirements from the ISP."},{"l":"D","t":"Customer application use will be busiest on the 15th of each month","c":false,"w":"The customer\u2019s application usage isn\u2019t part of the service requirements from the ISP."}],"topic":"SY0-701, Objective 5.3 - Agreement Types","url":"https://professormesser.link/701050302","objective":"5.3","domain":"5"},
{"n":50,"q":"An attacker has created multiple social media accounts and is posting information in an attempt to get the attention of the media. Which of the following would BEST describe this attack?","opts":[{"l":"A","t":"On-path","c":false,"w":"An on-path attack uses an attacker in the middle of a conversation to capture or modify information as it traverses the network."},{"l":"B","t":"Watering hole","c":false,"w":"A watering hole attack uses a carefully selected attack location to infect visitors to a specific website."},{"l":"C","t":"Misinformation campaign","c":true,"w":"Misinformation campaigns are carefully crafted attacks that exploit social media and traditional media."},{"l":"D","t":"Phishing","c":false,"w":"A phishing attack uses social engineering to convince the victim to disclose private or sensitive information."}],"topic":"SY0-701, Objective 2.4 - Other Social Engineering Attacks","url":"https://professormesser.link/701020205","objective":"2.4","domain":"2"},
{"n":51,"q":"Which of the following would be the BEST way to protect credit card account information when performing real-time purchase authorizations?","opts":[{"l":"A","t":"Masking","c":false,"w":"Data masking hides sensitive data by replacing the information with a non-sensitive alternative. An example of masking would be replacing an account number on a receipt with hash marks or asterisks."},{"l":"B","t":"DLP","c":false,"w":"DLP (Data Loss Prevention) solutions can identify and block sensitive data from being sent over the network. DLP does not provide any additional security or protection for real-time financial transactions."},{"l":"C","t":"Tokenization","c":true,"w":"Tokenization is a technique that replaces user data with a non-sensitive placeholder, or token. Tokenization is commonly used on mobile devices during a purchase to use a credit card without transmitting the physical credit card number across the network."},{"l":"D","t":"NGFW","c":false,"w":"An NGFW (Next-Generation Firewall) is an application-aware security technology. NGFW solutions can provide additional controls for specific applications, but they won't provide any additional account protections when sending financial details."}],"topic":"SY0-701, Objective 3.3 - Protecting Data","url":"https://professormesser.link/701030303","objective":"3.3","domain":"3"},
{"n":52,"q":"A company must comply with legal requirements for storing customer data in the same country as the customer's mailing address. Which of the following would describe this requirement?","opts":[{"l":"A","t":"Geographic dispersion","c":false,"w":"Geographic dispersion describes a data resiliency technique for distributing data to different locations to maintain uptime and availability."},{"l":"B","t":"Least privilege","c":false,"w":"Least privilege refers to a set of rights and permissions that would limit access based on a user's job requirements. Least privilege does not describe the storage of information based on a geographic location."},{"l":"C","t":"Data sovereignty","c":true,"w":"Data sovereignty laws can mandate how data is handled and stored. Data residing in a country is usually subject to the laws of that country, and compliance regulations may not allow the data to be moved outside of the country."},{"l":"D","t":"Exfiltration","c":false,"w":"Exfiltration describes the removal or theft of data by a third-party. Exfiltration is not associated with the geographic storage of information."}],"topic":"SY0-701, Objective 3.3 - States of Data","url":"https://professormesser.link/701030302","objective":"3.3","domain":"3"},
{"n":53,"q":"A company is installing access points in all of their remote sites. Which of the following would provide confidentiality for all wireless data?","opts":[{"l":"A","t":"802.1X","c":false,"w":"802.1X is a standard for authentication using AAA (Authentication, Authorization and Accounting) services. 802.1X is commonly used in conjunction with LDAP, RADIUS, or similar authentication services."},{"l":"B","t":"WPA3","c":true,"w":"WPA3 (Wi-Fi Protected Access 3) is an encryption protocol used on wireless networks. All data sent over a WPA3-protected wireless network will be encrypted."},{"l":"C","t":"RADIUS","c":false,"w":"RADIUS (Remote Authentication Dial-In User Service) is an authentication protocol used for centralized authentication. RADIUS is commonly used in conjunction with 802.1X, but RADIUS does not provide data confidentiality or encryption."},{"l":"D","t":"MDM","c":false,"w":"An MDM (Mobile Device Manager) is used to manage and control an organization's mobile phones and tablets. MDM policies are not used to manage the confidentiality settings of a wireless access point."}],"topic":"SY0-701, Objective 4.1 - Wireless Security Settings","url":"https://professormesser.link/701040104","objective":"4.1","domain":"4"},
{"n":54,"q":"A security administrator has found a keylogger installed in an update of the company's accounting software. Which of the following would prevent the transmission of the collected logs?","opts":[{"l":"A","t":"Prevent the installation of all software","c":false,"w":"Blocking software installations may prevent the initial malware infection, but it won\u2019t provide any control of outbound data."},{"l":"B","t":"Block all unknown outbound network traffic at the Internet firewall","c":true,"w":"Keylogging software has two major functions; record user input, and transmit that information to a remote location. Local file scanning and software best-practices can help prevent the initial installation, and controlling outbound network traffic can block unauthorized file transfers."},{"l":"C","t":"Install host-based anti-virus software","c":false,"w":"A good anti-virus application can identify malware before the installation occurs, but anti-virus does not commonly provide any control of network communication."},{"l":"D","t":"Scan all incoming email attachments at the email gateway","c":false,"w":"Malware can be installed from many sources, and sometimes the source is unexpected. Scanning or blocking executables at the email gateway can help prevent infection but it won\u2019t provide any control of outbound file transfers."}],"topic":"SY0-701, Objective 2.4 - Other Malware Types","url":"https://professormesser.link/701020404","objective":"2.4","domain":"2"},
{"n":55,"q":"A user in the marketing department is unable to connect to the wireless network. After authenticating with a username and password, the user receives this message: The connection attempt could not be completed. The Credentials provided by the server could not be validated. Radius Server: radius.example.com Root CA: Example.com Internal CA Root Certificate. The access point is configured with WPA3 encryption and 802.1X authentication. Which of the following is the MOST likely reason for this login issue?","opts":[{"l":"A","t":"The user\u2019s computer is in the incorrect VLAN","c":false,"w":"The RADIUS server certificate validation process should work properly from all VLANs. The error indicates that the communication process is working properly, so an incorrect VLAN would not be the cause of this issue."},{"l":"B","t":"The RADIUS server is not responding","c":false,"w":"If the RADIUS server had no response to the user, then the process would simply timeout. In this example, the error message indicates that the communication process is working between the RADIUS server and the client\u2019s computer."},{"l":"C","t":"The user\u2019s computer does not support WPA3 encryption","c":false,"w":"The first step when connecting to a wireless network is to associate with the 802.11 access point. If WPA3 encryption was not supported, the authentication process would not have occurred and the user\u2019s workstation would not have seen the server credentials."},{"l":"D","t":"The user is in a location with an insufficient wireless signal","c":false,"w":"The error message regarding server validation indicates that the wireless signal is strong enough to send and receive data on the wireless network."},{"l":"E","t":"The client computer does not have the proper certificate installed","c":true,"w":"The error message states that the server credentials could not be validated. This indicates that the certificate authority that signed the server\u2019s certificate is either different than the CA certificate installed on the client\u2019s workstation, or the client workstation does not have an installed copy of the CA\u2019s certificate. This validation process ensures that the client is communicating to a trusted server and there are no on-path attacks occurring."}],"topic":"SY0-701, Objective 1.4 - Certificates","url":"https://professormesser.link/701010408","objective":"1.4","domain":"1"},
{"n":56,"q":"A security administrator has created a new policy prohibiting the use of MD5 hashes due to collision problems. Which of the following describes the reason for this new policy?","opts":[{"l":"A","t":"Two different messages have different hashes","c":false,"w":"In normal operation, two different inputs will create two different hash outputs."},{"l":"B","t":"The original message can be derived from the hash","c":false,"w":"Hashing is a one-way cipher, and you cannot derive the original message from a hash value."},{"l":"C","t":"Two identical messages have the same hash","c":false,"w":"Two identical messages should always create exactly the same hash output."},{"l":"D","t":"Two different messages share the same hash","c":true,"w":"A well-designed hashing algorithm will create a unique hash value for every possible input. If two different inputs create the same hash, the hash algorithm has created a collision."}],"topic":"SY0-701, Objective 2.4 - Cryptographic Attacks","url":"https://professormesser.link/701020413","objective":"2.4","domain":"2"},
{"n":57,"q":"A security administrator has been tasked with hardening all internal web servers to control access from certain IP address ranges and ensure all transferred data remains confidential. Which of the following should the administrator include in his project plan? (Select TWO)","opts":[{"l":"A","t":"Change the administrator password","c":false,"w":"Occasionally changing administrator passwords is a good best practice, but it doesn't directly address the goals of IP address filtering and data confidentiality."},{"l":"B","t":"Use HTTPS for all server communication","c":true,"w":"Using the secure HTTPS (Hypertext Transfer Protocol Secure) protocol will ensure that all network communication is encrypted between the web server and the client devices. A host-based firewall can be used to allow or disallow traffic from certain IP address ranges."},{"l":"C","t":"Uninstall all unused software","c":false,"w":"Uninstalling unused software is an important hardening technique, but uninstalling software does not control access from IP address ranges, and it does not provide any data confidentiality."},{"l":"D","t":"Enable a host-based firewall","c":true,"w":"Using the secure HTTPS (Hypertext Transfer Protocol Secure) protocol will ensure that all network communication is encrypted between the web server and the client devices. A host-based firewall can be used to allow or disallow traffic from certain IP address ranges."},{"l":"E","t":"Install the latest operating system update","c":false,"w":"Installing an operating system update can be a useful security task, but an OS update does not directly encrypt network traffic and does not control access from certain IP addresses."}],"topic":"SY0-701, Objective 2.5 - Hardening Techniques","url":"https://professormesser.link/701020503","objective":"2.5","domain":"2"},
{"n":58,"q":"A security administrator has identified the installation of ransomware on a database server and has quarantined the system. Which of the following should be followed to ensure that the integrity of the evidence is maintained?","opts":[{"l":"A","t":"E-discovery","c":false,"w":"E-discovery is the process of collecting, preparing, reviewing, interpreting, and producing electronic documents. However, e-discovery does not provide any additional integrity of the data."},{"l":"B","t":"Non-repudiation","c":false,"w":"Non-repudiation ensures the author of a document cannot be disputed. Non-repudiation does not provide any method of tracking and managing digital evidence."},{"l":"C","t":"Chain of custody","c":true,"w":"A chain of custody is a documented record of the evidence. The chain of custody also documents the interactions of every person who comes into contact with the evidence to maintain the integrity."},{"l":"D","t":"Legal hold","c":false,"w":"A legal hold is a technique for preserving important evidence, but it doesn't provide any mechanism for the ongoing integrity of that evidence."}],"topic":"SY0-701, Objective 4.8 - Digital Forensics","url":"https://professormesser.link/701040803","objective":"4.8","domain":"4"},
{"n":59,"q":"Which of the following would be the BEST option for application testing in an environment completely separated from the production network?","opts":[{"l":"A","t":"Virtualization","c":false,"w":"Although virtualization provides the option to connect devices in a private network, there\u2019s still the potential for a misconfigured network configuration or an application to communicate externally."},{"l":"B","t":"VLANs","c":false,"w":"VLANs (Virtual Local Area Networks) are a common segmentation technology, but a router could easily connect the VLANs to the production network."},{"l":"C","t":"Cloud computing","c":false,"w":"Cloud-based technologies provide for many network options, and it\u2019s common to maintain a connection between the cloud and the rest of the network."},{"l":"D","t":"Air gap","c":true,"w":"An air gapped network removes all connectivity between components and ensures there would be no possible communication path between the test network and the production network."}],"topic":"SY0-701, Objective 3.1 - Network Infrastructure Concepts","url":"https://professormesser.link/701030102","objective":"3.1","domain":"3"},
{"n":60,"q":"A security engineer is planning the installation of a new IPS. The network must remain operational if the IPS is turned off or disabled. Which of the following would describe this configuration?","opts":[{"l":"A","t":"Containerization","c":false,"w":"Application containerization describes the process of creating a deployment strategy where each application runs in a self-contained image. Containerization allows organizations to quickly deploy and run different application instances on the same hardware."},{"l":"B","t":"Load balancing","c":false,"w":"A load balancer will divide a single load among many different servers to provide faster response and a more efficient use of network resources. Load balancers do not maintain connectivity for an intrusion prevention system."},{"l":"C","t":"Fail open","c":true,"w":"An IPS (Intrusion Prevention System) designed to fail open will maintain network connectivity during an outage or failure of the IPS. Even if the IPS was not actively preventing an intrusion, the network would still be up and running."},{"l":"D","t":"Tunneling","c":false,"w":"Tunneling describes the process of transferring data inside of another protocol type, such as sending encrypted data over a VPN (Virtual Private Network). Tunneling would not maintain network connectivity if an IPS was to fail."}],"topic":"SY0-701, Objective 3.2 - Intrusion Prevention","url":"https://professormesser.link/701030202","objective":"3.2","domain":"3"},
{"n":61,"q":"Which of the following describes the process of hiding data from others by embedding the data inside of a different media type?","opts":[{"l":"A","t":"Hashing","c":false,"w":"Hashing creates a digital \"fingerprint\" based on the contents of data. This hash provides a method of checking data integrity, but it doesn't hide data within other media types."},{"l":"B","t":"Obfuscation","c":true,"w":"Obfuscation is the process of taking something normally understandable and making it very difficult to understand or to be seen. One common obfuscation method used by steganography is to embed a document within an image file."},{"l":"C","t":"Encryption","c":false,"w":"Encrypting source code will provide data confidentiality, but encrypting the data does not require any type of subterfuge. Conversely, hiding data within another media type does not necessarily require any type of encryption."},{"l":"D","t":"Masking","c":false,"w":"Data masking hides portions of the data by replacing it with a different value. For example, replacing a credit card number with a series of asterisks would be a common form of data masking."}],"topic":"SY0-701, Objective 3.3 - Protecting Data","url":"https://professormesser.link/701030303","objective":"3.3","domain":"3"},
{"n":62,"q":"Which of the following vulnerabilities would be the MOST significant security concern when protecting against a hacktivist?","opts":[{"l":"A","t":"Data center access with only one authentication factor","c":false,"w":"Most hacktivists don\u2019t have access to walk around inside of your building, and they certainly wouldn\u2019t have access to secure areas. A single authentication method would commonly prevent unauthorized access to a data center for both employees and non-employees, although more authentication factors would provide additional security."},{"l":"B","t":"Spoofing of internal IP addresses when accessing an intranet server","c":false,"w":"Intranet servers are not accessible from the outside. This makes them an unlikely target for hacktivists and other non-employees."},{"l":"C","t":"Employee VPN access uses a weak encryption cipher","c":false,"w":"A weak encryption cipher can be a security issue, but a potential exploitation would require the network traffic to begin any decryption attempts. Although this scenario would technically be possible if someone was to catch an employee on a public wireless network, it\u2019s not the most significant security issue in the available list."},{"l":"D","t":"Lack of patch updates on an Internet-facing database server","c":true,"w":"One of the easiest ways for a third-party to obtain information is through an existing Internet connection. A hacktivist could potentially exploit an unpatched server to obtain unauthorized access to the operating system and data."}],"topic":"SY0-701, Objective 2.1 - Threat Actors","url":"https://professormesser.link/701020101","objective":"2.1","domain":"2"},
{"n":63,"q":"A company is installing a security appliance to protect the organization's web-based applications from attacks such as SQL injections and unexpected input. Which of the following would BEST describe this appliance?","opts":[{"l":"A","t":"WAF","c":true,"w":"A WAF (Web Application Firewall) is designed as a firewall for web-based applications. WAFs are commonly used to protect against application attacks such as injections, cross-site scripting, and invalid input types."},{"l":"B","t":"VPN concentrator","c":false,"w":"A VPN (Virtual Private Network) concentrator is the central connectivity point for all remote VPN users. A VPN concentrator would not be used as protection against application attacks."},{"l":"C","t":"UTM","c":false,"w":"A UTM (Unified Threat Management) appliance acts as a traditional firewall, and many UTMs may also include additional features such as intrusion prevention and content filtering. However, UTMs are not commonly used for protection of web-based applications."},{"l":"D","t":"SASE","c":false,"w":"SASE (Secure Access Service Edge) is a cloud-aware version of a VPN client, and it is commonly deployed as a client on the user device. A SASE solution would not commonly be used to protect a web-based application."}],"topic":"SY0-701, Objective 3.2 - Firewall Types","url":"https://professormesser.link/701030205","objective":"3.2","domain":"3"},
{"n":64,"q":"Which of the following would be the BEST way to determine if files have been modified after the forensics data acquisition process has occurred?","opts":[{"l":"A","t":"Use a tamper seal on all storage devices","c":false,"w":"A physical tamper seal will identify if a device has been opened or physically modified, but it cannot identify any changes to the data on the storage device."},{"l":"B","t":"Create a hash of the data","c":true,"w":"A hash creates a unique value and can be quickly validated at any time in the future. If the hash value changes, then the data must have also changed."},{"l":"C","t":"Image each storage device for future comparison","c":false,"w":"A copy of the data would allow for comparisons later, but the process of comparing the data would take much more time than simply validating a hash value. It\u2019s also possible that someone could tamper with both the original data and the copy of the data."},{"l":"D","t":"Take screenshots of file directories with file sizes","c":false,"w":"It\u2019s very easy to change the contents of a file without changing the size of the file. Storing the file sizes would not provide any data integrity checks."}],"topic":"SY0-701, Objective 4.8 - Digital Forensics","url":"https://professormesser.link/701040803","objective":"4.8","domain":"4"},
{"n":65,"q":"A system administrator is implementing a password policy that would require letters, numbers, and special characters to be included in every password. Which of the following controls MUST be in place to enforce this password policy?","opts":[{"l":"A","t":"Length","c":false,"w":"Adding all of these character types to a password do not necessarily change the length of the password."},{"l":"B","t":"Expiration","c":false,"w":"A common password security policy is an expiration date. This password expiration requires the user to periodically change their password."},{"l":"C","t":"Reuse","c":false,"w":"The controls that prohibit the reuse of passwords do not control the characters used in the password."},{"l":"D","t":"Complexity","c":true,"w":"Adding different types of characters to a password requires technical controls that increase password complexity."}],"topic":"SY0-701, Objective 4.6 - Password Security","url":"https://professormesser.link/701040604","objective":"4.6","domain":"4"},
/*CHUNK3*/
];

const pbqs = [
/*PBQS*/
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
    const pct = r.total > 0 ? (r.correct / r.total * 100).toFixed(0) : "—";
    tr.createEl("td", { text: `${pct}%`, cls: "pbq-rt-score" });
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

  // Missed questions list with jump links
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
