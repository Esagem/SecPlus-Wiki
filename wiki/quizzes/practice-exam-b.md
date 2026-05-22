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
/*CHUNK2*//*CHUNK3*/
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
