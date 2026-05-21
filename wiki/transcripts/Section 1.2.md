# Section 1.2

## The CIA Triad - CompTIA Security+ SY0-701 - 1.2

The CIA Triad is an easy way to
remember the fundamentals of IT security. Sometimes you'll see this
referred to as the AIC Triad to differentiate it from
the federal organization in the US called the
Central Intelligence Agency. But since it's so
easy to remember CIA, we often refer to the CIA
Triad instead of the AIC Triad. But keep in mind
that the CIA Triad has nothing to do with the CIA
being the Central Intelligence Agency. The C in the CIA Triad
is Confidentiality. If we want to prevent
someone from gaining access to private information, we need
to provide that information in a confidential way. The I in CIA is the
Integrity, where if we're sending information
from one person to another, we want to be sure that
the recipient really is receiving exactly what was
sent from the origination. And lastly, the A in the CIA
Triad refers to Availability. Obviously, we want to be
sure that all of our systems remain up and
running at all times, even if we're implementing
some type of IT security. You'll often see the triad
written as a triangle. And each leg of the triangle
has the confidentiality, the availability,
and the integrity listed as the security
objectives associated with the triad. One of the biggest challenges
we have in IT security is making data
available to others but making sure that
availability is only to the right people. We refer to this
as confidentiality. One way that we provide
this confidentiality is through encryption. We can have one person encrypt
data, send it to someone else, and that other person
can then decrypt that data to be able to
see the original plaintext. Obviously, anyone
in the middle who happens to get access
to that encrypted data has no idea what's
on the inside. And if they were to
look at that data, they would not be able to
discern anything important from that information. Another common way to
provide confidentiality is to set limits on what
someone may have access to. We commonly do this
with access controls. We can limit who
might have access to certain types of information. For example, this might allow
someone in the marketing department to be able to see all
of the marketing presentations and be able to make
changes to those. But it would prevent
all access to any of the accounting information
of the organization. And if you've ever
had to provide additional
authentication factors when logging into
a system, that's another type of confidentiality. Someone would not
be able to access an account unless they had
the proper authentication credentials. And adding those
additional factors provides more confidentiality. When we're receiving
data from a third party, we'd like to be able to verify
that the data that we have received is exactly the
same data that was sent and that nobody has made
changes to that data while it was
traversing the network. We're able to do that by
using methods of integrity. One way to provide
integrity is by hashing. The person sending the data
will create a hash of the data and send you both the data
and the hash at the same time. When you receive
the data, you'll perform the same
hashing function. And if your hash matches
the sender's hash, then you know the data
that you've received is exactly the same as
the data that was sent. We can enhance this integrity
by including a digital signature when we're sending
data, which takes a hash and encrypts it with an
asymmetric encryption algorithm. This means that we can check to
make sure that none of the data has changed. And we can confirm the
person who sent the data. That provides an additional
level of integrity that could be
important if you're sending very sensitive data. It's also common
to use certificates to be able to identify
devices or people and provide additional
factors of integrity, especially when you're
transferring data from one device to another. And lastly, we have the
concept of nonrepudiation. This means that we have
proof of integrity, and we can confirm
without a doubt that the information that
we've received really did come from the
originating party. If you've done any work
in information technology, you know how important it is for
your systems to be available. Availability is that
leg of the CIA Triad that ensures that people
have access to the data that they'd like to view. One way to provide
this availability is to have systems
that are designed to always be up and running. We might combine
this with a system that has fault tolerance, where
we have multiple components. And if one of those
components fails, the other component can
pick up and continue to operate normally. And of course, if you're
concerned about systems being available, you'll
constantly need to make sure that they
are managed and updated by patching those systems. This ensures that the
systems are always as stable as possible and
that we can close any existing security holes, preventing
someone from gaining access through some type of exploit.

---

## Non-repudiation - CompTIA Security+ SY0-701 - 1.2

One of the important
foundations of cryptography is ensuring that when someone
sends data to a third party, that that third party is able to
verify that information really came from the sender. This is something that we
think of all the time as part of a contract. We sign a contract
at the bottom. It's our name. It's our signature. And if somebody was to look
at this contract later, they could see our signature
and could reasonably say that the contract
was signed by us. Just like our
signed contract, we have a similar set of
features in cryptography. And today, we'll look at how
this nonrepudiation works, using proof of integrity
and using proof of origin with high assurance
of authenticity. Proof of integrity means that
any data that we've received we can verify that it's
exactly the same data that was originally sent. This means that our data
is accurate, consistent. And we know that nothing inside
of the data we've received has been changed. In cryptography, we
can accomplish this by using a hash. A hash is a short
string of text that we can create based on data that is
contained within the plaintext. This is sometimes referred to
as a message digest or something like a fingerprint. This means that if anything
changes with that data, we'll have a
different fingerprint or a different hash. This is the same as
an actual fingerprint. If the person changes, you'll
see that the fingerprint is very different. Although a hash is
very good at verifying the integrity of the data, it
doesn't associate that data with a particular individual. We can verify that the
data that we've received is exactly the same as
the data that was sent. But we can't verify
who sent the data. However, there are
ways to provide that additional integrity. We'll talk about those
in just a moment. Let's see how this hashing works
by using a practical example. There is an organization
called Project Gutenberg on the internet, and they
have published the Gutenberg Encyclopedia. I downloaded volume one
of that encyclopedia, and it's 8.1 megabytes of data. And then I ran an application
that took all of that data and created a hash
or a fingerprint of that particular
encyclopedia volume one. And here is the exact hash that
I've created from that volume. Now, if I was to change one
character inside of that file, anywhere, although
the size of the file is exactly the same
after making the change, somewhere in that
haystack of data, there is some type
of difference. But it would be very
difficult for a human to read through all of that
data, 8.1 megabytes of text, and somehow determine where
that individual change might be. But if you perform a
hash of the changed data, you'll see that the
hash value that I create is very different than the
hash value that was original. So if I have downloaded this
file, perform my own hash, and compare it to
the original, I can see that
something has indeed changed with this particular
volume one of the Gutenberg Encyclopedia. At this point, we might
want to download again to see if we happen to get a
corrupted or modified version. Or perhaps we perform a diff or
a comparison between those two files to see exactly
where the change might be between the original
version of the volume one and the version
that we received. By using these hashes,
we're able to provide proof of integrity. We know if anything was changed
when the information was sent from the original sender. But we can also add to
this an additional level of integrity called
proof of origin, where we can verify the person
that sent the data to us. Sometimes you'll
see this referred to as an authentication
when we are looking at the source of the message. By using a digital signature,
we provide nonrepudiation. So not only do we
know the person that has sent that data
to us, but anyone else could examine this
transaction and verify that the information
we received really did come from the sending party. Just as someone can use a pen
and paper to sign a contract and send it to you,
in cryptography we use a digital signature. This digital signature
uses a private key that is only known to the
person who's sending the data. No one else has a copy
of this private key. To verify that
private key was used, we use the public key associated
with that private key. And that way, we can assure
that the information we received is not only the same
as what was sent, but we know that it had to
be sent by the person who provided the digital signature. In practical terms, adding a
digital signature to a document is usually created by
clicking a box that says add a digital signature. And a lot of cryptography
happens behind the scenes. Let's lift the hood a little bit
and see what that process might be that's taking place when
you check that box to add a digital signature. We'll start with a
conversation that's occurring between Alice and Bob. Alice is sending a message to
Bob that says, "You're hired, Bob." And the first thing
that Alice will do is provide a digital
signature before she sends it. The first thing
that happens when she clicks that checkbox
for the digital signature is that a hashing
algorithm creates a hash of that plaintext. In this case, the plaintext
is "You're hired, Bob." Once that hash is
created, we now need to have some way to verify
that it really came from Alice. And since Alice is the only
one with her private key, we're going to encrypt that
hash with Alice's private key, take that encrypted hash, send
it along with the plaintext, so that Bob is going to
receive a message that says, "You're hired, Bob." And then, attached
to that message, is a digital signature. In most cases, Alice is going
to send that message over to Bob using email or some other
type of electronic delivery. Bob is going to receive
exactly that message that was sent that
says "You're hired, Bob" with the digital
signature included with it. Bob is going to use
Alice's public key, which is a key available
to anybody, and he's going to examine the
digital signature and decrypt it using
that public key. Once that decryption
takes place, we have the original
hash that was created of that plaintext message. And at this point,
Bob wants to see if the hash that was in
that digital signature matches the hash of
what he received. So he's going to perform
the same hashing function that Alice originally performed. Bob is going to take the
original plaintext, run it through the same
hashing algorithm to come up with a hash
of what he received. Bob can now do a
comparison to see if the hash that was included
with the digital signature is the same as the
hash that he manually created from the plaintext. And if that matches,
we not only know that the information
we received is exactly the same as the
information that was sent, but we know that it had
to be sent from Alice. As I mentioned earlier,
this entire process of creating a digital
signature and verifying the digital signature
is something that's usually created
through clicking a button on your screen,
or it's something that happens automatically. You normally never see
this process occur. But having an understanding of
the digital signature process and the verification of the
digital signature process can help you better understand
the integrity that we're looking for and the
proof of origin that's so important when working
with transactions like this.

---

## Authentication, Authorization, and Accounting - CompTIA Security+ SY0-701 - 1.2

We're all very familiar
with the login process. You put in your
username, your password. There might be some additional
authentication factors. And if all of those
are correct, you gain access to resources
on that system. This process begins
with identification, where you claim to be a
particular user on that system. The check between your
username, your password, and the other
authentication factors is referred to as
authentication. This proves that
we really are who we say we are because we
knew the secret password, or we had some additional
authentication factors that we could use to help
prove that we are that person. Now that we've
identified who we are, we now need to determine
what type of access we have. And that's done
through authorization. If we're part of the shipping
and receiving department, then we should have access
to systems that should only be available to
shipping and receiving, and we should not have access
to information that might be in the finance department. And of course, all
security systems need to have a log of
exactly what happened. So we need to know what
time someone logged in, how much data may have been
sent or received, and what time. This person logged out. We refer to this entire
system as the AAA framework. And this refers to
Authentication, Authorization, and Accounting. Let's have a look at a
practical example of using AAA. We're going to use the example
of logging in to a VPN server. In this case, it would
be a firewall or VPN concentrator in the middle. You're on one side
of that concentrator, and you need to use AAA to
gain access to an internal file server. So we'll start with our
client on the internet. And we'll access the
VPN concentrator, which prompts us for a login. So we're going to provide
a username and password and send that information
over to the VPN concentrator. The concentrator itself
doesn't have any information about usernames, passwords,
authentication factors, or anything else. And in most organizations,
all of that information is stored on a central server. And we refer to
that as AAA server. This AAA server is going
to receive the request from the VPN
concentrator, asking if the username, password,
and other information that was provided matches some
type of user in the database. And if the match is
true, it sends back information to the
concentrator and says those credentials are approved. At that point, the concentrator
knows that we really are the person we
claim to be, and it allows us access into
the internal file server. As a security
professional, you'll be responsible for managing the
security on hundreds or perhaps even thousands of
separate systems. And in many cases, you'll
never have physical access or even be able to see
where those systems might be because they may be
located anywhere in the world. So the question now
becomes, how can we verify that a computer trying
to connect to our network is a computer that's authorized
to be on our network? This computer by
itself obviously can't type a password to
prove who it might be. And in most cases,
you probably wouldn't want to store a password
on one of your systems out in the field anyway. So how can you really confirm
that that system is allowed to be on our internal network? How do we provide that
additional authentication? In many cases, we
use a certificate that we put onto this device
that is digitally signed. And we check that authentication
during the login process. This allows anyone needing
to provide that verification with a way to confirm
that that really is a company-owned laptop. This could be on
a VPN concentrator so that it can verify that the
devices coming into the network really are company devices. Or perhaps it's
management software that can validate
that end device that may be either on
our local network or anywhere in the world. The process for creating
this certificate is relatively straightforward. But the one thing that you
must have in your environment is something called a
Certificate Authority, or a CA. This is a device
or software that is responsible for managing
all of the certificates in our environment. On the CA itself, you would
create a certificate just for that laptop. That certificate is
now digitally signed by the certificate authority
so that, later on, we can verify that it really
is an original certificate from our certificate authority. Now we put that
certificate on the laptop and, anytime we want to
perform an authentication, we can use that certificate
as an authentication factor and verify that it really
was digitally signed by the certificate authority. So as part of your
security infrastructure, you would have a
certificate authority. That certificate
authority itself has its own certificate that
was signed by a root CA. We also have our
laptop in the field. And we have previously created
a device certificate just for this machine. And it has been
signed by the CA. Once we know the CA certificate
and we know the device certificate, we can then
compare these two certificates. And we can see that our
device certificate was signed by the certificate authority
that we trust in our security infrastructure. Now that we've gone through
the authentication process, how do we authorize that device
to have access to resources within our network? We would do that by using
an authorization model. And there are many different
authorization models to choose from. We have a big list of these
later on in the video series, in section 4.6. We would commonly authorize
users and services to have access to certain
types of data and applications. The challenge here is, how do
you create this relationship in a form that's able to easily
scale for tens, hundreds, or even thousands of users? In many environments,
we accomplish this by taking the users and services
and putting an authorization model right in the
middle before you access the data and the applications. These are commonly defined
by roles, organizations, attributes, and many other
types of characteristics. Let's say that you had no
authorization model at all. We would create a series
of rights and permissions where the user has rights
to access the resource. The problem is that this
doesn't scale very well. Let's take an example of
somebody in the shipping and receiving department. This is someone who needs access
to a large number of systems, a lot of data. Maybe there's tracking
information, shipping labels, databases of customers. And we would create separate
rights and permissions so that any time this
person logged in, we would need to give them
rights to create a shipping label, track a shipment,
view monthly shipment reports, access customer data,
and perhaps anything else they need for their
day-to-day operations. Now, if this is the only person
in shipping and receiving, this is a relatively
easy process. But what if you're part of
a larger organization that has tens or hundreds of people
in shipping and receiving? You can see it would
be difficult to take every single user account
and manually set up rights and permissions
for every single resource that they need access to. In this case, there's
only three resources. But imagine if there were
tens or hundreds of resources. You would need to set
those up for the tens or hundreds of users. You can see now why this would
be very difficult to scale. To be able to
scale, we would need to use an authorization model. Sometimes you'll
hear this referred to as an abstraction
that allows us to separate the users from
the information they're trying to access. This greatly
streamlines the process of administering these
large number of users or large number of resources. And we can support a very,
very large infrastructure just with a very simple
set of abstractions. Here's how this would work. We'd have the same user
in shipping and receiving, and we will add them to a group
called Shipping and Receiving. We set this group up
originally so that anybody added to the Shipping
and Receiving group would have access to
create a shipping label, track a shipment, view
monthly shipment reports, have access to customer contact
information, and anything else you would need in
Shipping and receiving. Now let's add in our tens
or hundreds of users. Instead of manually
mapping every single user to the individual
authorizations they need, we just simply add all of
the users to the Shipping and Receiving group. With this one
single addition, we can give tens or hundreds
or thousands of users access to the resources
they might need, regardless of how many users there
are and regardless of how many resources
they need to access.

---

## Gap Analysis - CompTIA Security+ SY0-701 - 1.2

As the name implies,
a gap analysis is a study of
where we are versus where we would like to be. And in the world
of IT security, we are constantly
performing gap analyses to be able to understand
exactly what security is going to be needed in the future. Although this is very
simple to explain, it's a relatively
complex process to perform the analysis
of what's actually going on in your environment
and putting together a plan of how to get from where
you are to where you're going. As you might imagine, trying to
understand every aspect of IT security and how it applies
to your organization can be a very involved process. And this is something
that commonly takes a number of weeks, months,
or even years to compile. As you can imagine,
this might involve a number of different
people in your organization. And there is an
extensive project plan with emails and data
gathering and anything else that's needed to compile
the information about what's happening with security
in your environment. Before starting
the gap analysis, it's useful to have a baseline. This gives you something
to work towards and an idea of where
the goals should be for your organization. There are a number of different
baselines to choose from, and some of these baselines
have been specifically created for certain organizations. For example, your
organization may be following a set of baselines
from the National Institute of Standards and Technologies. They publish a document called
the Special Publication 800-171 Revision 2. And the title of that document
is Protecting Controlled Unclassified Information
in Nonfederal Systems and Organizations. You might also use
a baseline that was created by the
International Organization for Standardization and the
International Electrotechnical Commission. This is the ISO/IEC 27001,
or the information security management systems. And of course, you can
create your own baselines based on your specific
needs as an organization. These baselines will
commonly involve an analysis of the people
in your organization and the processes
you use for security. When evaluating
people, you might want to get a
better understanding of their formal experience
in information technology security. You might want to understand
what kind of training they've received. And you might want
to see if they have a knowledge of
specific security policies and procedures that you can
use in your organization. Even with the right
people in place, you'll still want to
be sure that you're following the correct
policies for IT security. This might start with an
evaluation of the existing IT systems and how they relate
to your formal policies that have been created in your
central security policy documentation. The analysis portion
of the gap analysis will begin with a comparison
of the existing systems that you have running
in your environment and to identify any weaknesses
that those systems might have. You can also compare
these weaknesses with the most
effective processes for understanding
how to compensate for those weaknesses. Ultimately, you'll create
a detailed analysis where you'll look at very
broad categories of security and then break down
those broad securities into individual
smaller segments. Here's a good example
of how you might start with broad
understanding of a process and then breaking it down
into individual pieces. This is the document
800-171 Revision 2, which is Protecting Controlled
Unclassified Information. And this is a table that maps
the access control requirements to the security controls
that are in place. For example, this page
shows access control where you would
want to limit system access to unauthorized
users, processes acting on behalf of
authorized users, and devices. This account management
covers a number of different individual
security controls. So when we start
to break this down, we can look at user
registration and deregistration. We need to understand how user
access provisioning is handled, understand the management
of privileged access rights, a review of the user
access rights, and so on. By looking at these
broad areas, we can now break down
individual security tasks to see how well we're
handling the processes and procedures for each
of these individual steps. Once we've gathered
all of this information for all of our processes,
all of our devices across all of our
different locations, we need to create a
final document that summarizes everything
that we've discovered. We can start with
a comparison that looks at the detailed
baseline objectives and gives a perspective
of where we are today versus where we would
like to be with each one of these objectives. Perhaps the more difficult
question to answer is how you get from where you
are to where you'd like to be. This path to get
from where we are to where we'd like
to be commonly takes time, it takes money,
there may be equipment that we need to
purchase, and, obviously, there's change control so that
you can implement these changes in your environment. Once we have all of this
information compiled and the plan of how
we can get from where we are to where
we'd like to be, we can create a final
gap analysis report. This report not only
includes the information about where we are today, but
it also provides that pathway so that we can understand
what it's really going to take to move
forward into the future. All of the
recommendations you have about meeting this
baseline will be documented in this gap analysis report. Here's an example
of one of the tables that you might include in
your gap analysis report. On the left side, I have a
series of system requirements. And all of those
system requirements were broken into smaller
pieces in the detailed part of the report. But we might want to get a
much broader understanding about all of our
different remote sites and how they are compared
to the ultimate baseline that we would like to reach. For example, our
organization might have seven different
locations, and we've performed a gap
analysis across all of these system requirements for
all seven of those locations. The locations that
are relatively close to meeting the baseline
we can mark with a green color. Anything that might be in the
midpoint we can mark as yellow. And locations that
need a lot of work to be able to meet our
standardized baselines we'll mark with red. So if we wanted to have the
biggest impact on improving our security, we may want
to start with the locations and security requirements
marked in red, and then move to the
ones marked in yellow, and then finally the green. The report obviously will
include extensive details about why these colors
were used and provide a summary of how
we can implement security controls to better meet
the goals of these baselines.

---

## Zero Trust - CompTIA Security+ SY0-701 - 1.2

In many networks, you'll
find that once you're through the firewall,
the inside of the network is relatively open. People are able to move
from system to system without any type of
checks or balances. There are relatively few
security controls in place and this not only allows
authorized individuals to move anywhere
they'd like, but also allows unauthorized individuals
and malicious software to do the same. But many security administrators
are changing their network to be zero trust. This means that you have to
authenticate or prove yourself each time you want
to gain access to a particular resource. This applies to every
device on the network, every process that's running,
and every user on the network. As the name implies, with
zero trust nothing is trusted and everything is subject to
some type of security checks. This means you might be using
multi-factor authentication during your login
process, you may be encrypting data that's
stored and encrypting data as it's traversing
the network, there may be additional
system permissions or additional firewalls
that you're installing, and there are a number of
different security policies and different
controls that may need to be added to create this
zero trust environment. One of the ways
that we can start examining and implementing
zero trust on our networks is taking our security
devices and breaking them into smaller
individual components. We commonly refer to this as
separate functional planes of operation. So whether it is a physical
device, a virtual device, or a security process
that's running in the cloud, we can apply these
different control planes to every single one of
these security controls. Broadly speaking,
we can look at these as having two different
planes of operation. One of them is the data plane. The data plane is the part of
the device that is performing the actual security process. So this might be a switch,
router, or firewall that's processing
frames, packets, and network data in real time. The data plane on these devices
is processing any forwarding, network address translation,
routing processes, or anything else that
helps move data from one part of the network to another. But of course, all of
this movement of data needs to have some type
of management and control, and we perform that control
in the control plane. This is where we manage all of
the actions that are occurring in the data plane. This means we may be configuring
policies or rules for a device to determine whether data may
be traversing the network, or maybe we're setting
up a forwarding policy, or understanding how
routing may be configured. So any time you're
referencing a routing table, you're looking at
a firewall rule or understanding how Network
Address Translation should be handled are configuring
in the control plane. One way to get a better
understanding of the data plane versus the
control plane is to see how this
might be implemented on a physical device. Here we have a
physical switch and we want to be able to break out the
different planes of operation. Down at the bottom
of the switch are all of the different
interfaces that are used to move data from one
part of the network to another. And as we've already
seen, all of the traffic that we're forwarding all
happens on the data plane of the device. But of course, this device
needs to have configurations, there needs to be network
address settings or changes to how data might be trunked,
and all of those changes would take place in the
configuration of the device under the control plane. Of course, this separation of
data plane and control plane is not just specific
to physical devices. You might have a virtual
switch or a virtual firewall that can also be separated into
these two different planes. This same separation also
applies to cloud-based security controls. For zero trust, we not
only need to implement additional security
controls, but we need to be a lot smarter on
how we evaluate those security controls. For example, we can
implement a technology called adaptive identity. This is where we are examining
the identity of an individual and applying security
controls based on not just what the
user is telling us, but other information
that we're gathering about this
authentication process. For example, we
might want to look at the source of the
requested resources. Perhaps someone
who is requesting data that's located
in the United States is using an IP address
that's in China. And if that occurs, we may want
to perform additional security to really confirm that this
user is who they say they are. This might also
include an examination of the relationship of this
person to the organization. So are they an employee? Are they a contractor? Do they work full-time
or part-time? And of course, all of this
goes into the evaluation of this authentication process. We also want to look at
things like physical location, the type of connection
that's in place, IP addresses, and anything
else that can help us identify information about this user. Once we examine all of
these different variables, we can have our
systems automatically create a stronger
authentication, if it's needed in
this particular case. Another way to
control this trust is to limit how
many places can be used to get into the network. So you may want to
limit entry points to only being people that
are inside of the building or connecting through a VPN. There may be no other
methods to gain access to this particular network. And once you have all of
this information in place, we can now start creating what's
called a policy-driven access control that examines all of
these individual data points, puts them all together,
and then decides what type of
authentication process should be used to
truly understand if the person trying
to identify themselves is really that person. Another good way to qualify
the identity of a person is to understand where
they're connecting from, and very broadly, we categorize
these as security zones. This allows us to expand
from something that is simply a one-to-one relationship where
a user is logging into a server and instead looks at the overall
path of the conversation. These security zones look at
where we're connecting from and examine where we're
trying to connect to. So this may be on
an untrusted network and we're trying to connect
to a trusted network, or maybe it's an internal
network or external network. And if you wanted to have
even more granularity, you could create
separate VPN connections or separate groups of
different departments within your organization. This allows you to now
start setting rules on what zone has access
to all of the other zones. For example, you might want to
have a rule that automatically denies access if someone is
coming from an untrusted zone and trying to communicate
to a device that's in a trusted zone. We can also use these zones
to create an implicit trust. For example, if someone is
in our corporate offices, they might be in a trusted zone. This user in the trusted
zone may be accessing data on a database server
that's in our data center and the data center exists
in the internal zone. This might allow us to
create some policies that says if anyone's communicating
from the trusted zone to the internal zone, that
portion of the communication is implicitly trusted. To be able to set these
policies and procedures along this pathway, we need
to have something in place that allows us to create an
enforcement of these policies. This is our Policy
Enforcement Point and any subjects
and systems that are communicating
through this network will be subject to evaluation
by the Policy Enforcement Point. These subjects and systems
commonly are in users, they are individual processes
running on a system, or they may be applications
that are in use. You can think of this
Policy Enforcement Point as a gatekeeper. All of the traffic
traversing the network must pass through the
Policy Enforcement Point so that we can make decisions on
whether we would like to allow or disallow this traffic. And although this
Policy Enforcement Point is shown as a very broad
abstraction in this diagram, you can think of this as
multiple devices working together to be able to
provide identification of the users and the traffic. The Policy Enforcement Point
doesn't provide the decision on whether traffic should
be allowed or disallowed. Instead it gathers all of the
information about the traffic and provides that to a
Policy Decision Point. This Policy Decision Point
is responsible for examining the authentication and making a
decision on whether that should be allowed on the network. Your Policy Engine is looking
at all of the requests that are coming through, it
examines the request and compares it to a set of
predefined security policies, and then makes a
decision on whether that is granted, denied, or revoked. The Policy Administrator's
job is to take that decision and provide that information to
the Policy Enforcement Point. There may be access
tokens or credentials that are created as a result
of these policy decisions and all of those
credentials are then sent to the Policy
Enforcement Point using this Policy Administrator. Now we can put all
of this together to create a single
zero trust model, which starts with our
subjects and systems communicating from an untrusted
zone over the data plane and communicating through
the Policy Enforcement Point. If there is a policy enforcement
that needs to take place, this enforcement point
will provide that to the Policy Administrator,
which then communicates to the Policy Engine
to make the decision about whether this
traffic is allowed. That result is then passed down
to the Policy Administrator, which provides that to the
Policy Enforcement Point. And if this traffic is allowed,
the Policy Enforcement Point then provides access
to this trusted zone, and ultimately, the
Enterprise Resource requested by the
subjects or the systems.

---

## Physical Security - CompTIA SY0-701 Security+ - 1.2

IT security
professionals not only need to be proficient
in digital security. They also need to have a
knowledge of physical security. One common physical
security method is to have a barricade or a
bollard that prevents people from accessing certain
areas of a physical area. These are often used to channel
people through a certain access point. And it's common to have
these bollards set up so that individual
people can pass through but prevent any cars,
trucks, or other vehicles from getting into that area. These barricades can also
be a security notice, especially if they're
brightly colored, letting everyone know that
this is a high-security area. We often see these installed as
concrete barriers or bollards. But you can also create
barricades in other ways. For example, you may have water
around a particular building and require people to go
over a bridge to gain access to that facility. When you enter or
exit a building, there's also a great deal
of physical security, especially if you're using
something like an access control vestibule. This is one where there is
a room you must pass through to be able to gain access
to the rest of the building. This might be a room where
all the doors are normally unlocked. And if you open
one of those doors, no one else can enter the room
while that door is unlocked. Or this may have
higher security, where all of the doors
to the room are locked, and when you badge in or
unlock the first door, all of the other doors remain
locked and cannot be unlocked while that individual
door is open. Or this may be the case where
one of the doors of the room is always locked and the
other door is unlocked. And when one door is open, the
other door cannot be unlocked. Regardless of the configuration,
these access control vestibules are designed to allow
or control access through a particular area. They may be a very small
area, where only one person can traverse at a time. Or maybe it's a controlled
group of people, where you're evaluating
their identification and then allowing
them through the room. Here's an example of one of
the doors to an access control vestibule. This one has a card reader
or a biometric reader on the outside that
could allow you access to the room,
at which point you would check
in with security, provide authentication, and they
may give you a pass or a card to allow you access to
the rest of the facility. This is very common for
very large data centers or for areas where you just
need additional security to make sure that only the appropriate
individuals are able to pass through that particular area. Another type of physical
security control is a fence. This is one that's
relatively common, and it's something that you
can easily see is installed. In this example, you
can see the fence going across the front
of this facility. Because this is so
obvious, it may not be the exact security
control you're looking for, but it does provide a very
good way to prevent access through this area. This may be a
transparent fence, where you're able to see
what's on the other side. Or you may design an opaque
fence, where people can't see what's on the other side. From a security
perspective, we would like these fences to be very robust. We don't want someone to
be able to bend the fence or knock down part of it
to gain access to the area. And in very secure
areas, you might want to make it more
difficult for someone to gain access over the fence. This might include
a very high fence, or you might have razor
wire across the top, just to prevent anyone from gaining
access by going over the fence. Some physical
security techniques require someone to
stand in an area and monitor a
particular location to watch for certain
security events to occur. But you might be able
to make this a bit more efficient by using a camera. When you're putting a
lot of cameras together that's for your own
use, sometimes you'll see this referred to as CCTV, or
the Closed Circuit Television. These cameras are becoming
increasingly more intelligent, so they have things built
in such as motion detection so they can alarm or
alert you if someone happens to walk through an
area and, in some cases, can provide very
detailed object detection and be able to
read someone's face or be able to read the
license tag on a vehicle. Most organizations will
have multiple cameras. These are all networked
together and will send all of their video back
to one single storage point so that you're able to
record this information from every camera over time. But sometimes, you need more
than a camera or some type of automated security. And if that's the
case, you may want to add a security guard
for physical protection for anything that may
happen in a particular area. This is someone who
may sit at a front desk and validate that anyone
walking into the building is either an employee
or someone who is allowed in as a guest
by an existing employee. You often see security guards
working as two or more people simultaneously to provide
two-person integrity or control. This means that one
security guard would not be able to circumvent the
existing security policy, because there's always
someone else there to provide checks and balances. And in almost
every organization, you're required to wear
an identification badge. This is a badge that
may be on a lanyard, or it may be attached
to a jacket or coat. And it will have
a picture, a name, and other details
about the person who has that identification badge. This is a badge that
you would wear and have visible to everyone at all
times so they can easily see at a glance
that you're allowed to be in a particular
area of the building. These are often integrated
with the electronic locks that we might have on doors. So every time you
badge into a room, you can use your
identification card, and all of that information is
logged to a central database. One way to prevent attacker from
gaining access to a building through a dark area is to simply
illuminate that particular area with lighting. More light usually
means more security because someone trying to
get into your building who is unauthorized
will probably want to do this outside the
view of someone else. Sometimes, you can use cameras
that have infrared technology to be able to see
better in dark areas, but nothing is more secure
than having a well-lit area if you're trying
to prevent somebody from sneaking into a building. Finding the right light for
an area is important as well. You want to be sure it's
one that can illuminate the entire areas, and you want
to be sure that the lighting angles are important, especially
if you're using cameras to capture facial recognition. In a parking lot,
for instance, you may have lights to
be able to illuminate all of the cars
in the parking lot and then have cameras that are
able to monitor that parking lot 24 hours a day
and 7 days a week. As we mentioned, we
might have cameras using infrared technology
to better see things that may be happening in the dark. These are devices that can
detect infrared radiation in both light areas
and dark areas and don't need to
have lights to be able to see what's happening. It's also common to see this
infrared technology being used in things like motion detectors,
where you're not necessarily looking for video,
you're simply looking to see if there is
something that may be moving in a particular area. In some organizations, you
might even use pressure sensors. So when somebody
moves across an area, the pressure sensor
notices the change in force and can alert or alarm you
that something is passing through a particular location. Infrared is great
for detecting motion in a relatively limited area. But if you have
a very large area that you would like
to monitor, you might want to use
microwave technologies. These are designed
to detect movement over a much larger area
and therefore might be a bit more efficient
than infrared. And perhaps even more advanced
is the ultrasonic detection. This is something that can
send ultrasonic signals so you're looking for a
reflection of sound waves. This allows you to
detect motion in an area and can even be used to provide
collision detection, especially in something like a parking
lot or a loading zone.

---

## Deception and Disruption - CompTIA Security+SY0-701 - 1.2

As an IT security
professional, you'll spend a lot of time trying to
prevent attackers from gaining access to your systems. But you'll also be able to use
your knowledge and techniques of security to create
deception and disruption to those same attackers. One way to provide
this deception is by using a honeypot. A honeypot is a way to attract
attackers to your system and be able to keep them
involved in these systems so that you can see what
type of security techniques they're trying to
use against you. In most of these
cases, of course, the attacker is actually
an automated process. And what you're trying to do is
to see what type of automation is being used and
what type of systems are they trying to attack. These honeypots
are a virtual world that effectively attracts these
automated systems or attackers. And they spend all of their time
trying to identify or attack systems which in reality are
not part of your production processes. If you wanted to build your
own honeypot and virtual world, you can do that using a number
of commercial and open-source software packages. This also creates a bit of
a race between you creating virtual worlds
that, in most cases, are not production systems and
the attackers that are trying to discern whether these
systems are actual systems or if they are trapped
inside of a honeypot. As the attackers get better
with identifying a honeypot, we increase the complexity
and intelligence of our honeypots to make them
that much more realistic. It's very common,
in fact, to combine a number of these
virtualized honeypots into much larger infrastructures
that we call honeynets. These honeynets may consist of
workstations, servers, routers, firewalls, and
anything else to make the entire infrastructure
look a little bit more real to the attacker. Once you combine all of
these smaller honeypots into one much larger
honeynet, you've now created a much more
believable environment and hopefully one that will
keep the attackers very busy. If you'd like to learn
more about the techniques and technologies
we're using today to create these
honeypots and honeynets, you can visit
projecthoneypot.org. We can even go down to the file
level and create honeyfiles. These are files that
have fake information, or they may be files that
appear to be very important or contain sensitive
information. For example, you might have a
honeyfile called passwords.txt, which, of course, does
not actually contain the passwords to your systems. But the attacker
doesn't know that. And they may find this to
be a very attractive file and spend a lot of time
going through the information contained within that honeyfile. In your normal
production network, no one should be accessing
these honeyfiles. So if someone does
gain access to the file and opens or views
the information, you may want to have
alerts or alarms sent back to a management
station so that you know someone is poking
around in the honeyfiles who probably should
not be there. And another type of data that
might help you identify issues with data that's being
released into the public would be a honeytoken. Honeytokens are a
bit of traceable data that you would add
to your honeynet. So if that information is
copied and distributed, you know exactly
where it came from. For example, you might
put API credentials out on a public cloud share to
see who may come by and grab those credentials. Of course, these API credentials
are not actual usable API credentials. You've simply made
them up and put them into a file that is then
accessed by the attacker. Or you might have a file that
contains a number of fake email addresses. Because these email addresses
are not used by anyone, you can constantly monitor
for those addresses to appear somewhere else on the internet. And if they do, you
can see exactly who posted it, which might give
you information about who may be attacking your network. And of course, these honeytokens
can be any type of data that you might falsify and put
into an area for an attacker to find. This could be database
records, browser cookies, pixels on a web page,
or anything else that you could track if it
happens to be posted somewhere else on the internet.

---

