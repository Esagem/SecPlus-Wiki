# Section 1.4

## Public Key Infrastructure - CompTIA Security+ Sy0-701 - 1.4

The term public
key infrastructure is a very broad term
in cryptography, but it commonly refers to
policies and procedures, this might also include
hardware and software, that is responsible for
creating, distributing, managing, storing,
revoking, and performing other processes associated
with digital certificates. Although that seems relatively
straightforward, even in the smallest
of companies, this can involve a great
deal of planning and a lot of decisions
that have to be made about the encryption
and methods that you use within your company. You might also hear the
term PKI used as a way to associate a certificate
to people or devices. This is usually in conjunction
with a Certificate Authority, or CA. And it's generally
based around how you may be able to trust
that a particular user or a particular device is
really who they say they are. Before we get into the details
of public key encryption, let's first start with
symmetric encryption. As this name implies,
symmetric encryption means that any time
you're performing a decryption of
some information, you're using the same key that
was used to originally encrypt that information. In the movies, we often refer
to this single secret key being shown as something
inside of a suitcase, and that suitcase is fastened
to the delivery person with a pair of handcuffs. This ensures that no
one else can gain access to that symmetric key, which is
very important because if you have the symmetric key, you're
able to decrypt anything that was originally
encrypted with that same key. Sometimes, you'll hear
about this process of symmetric encryption
being described as a secret key algorithm,
where that symmetric key is that one secret key. You might also hear this
referred to as a shared secret because the same key is
used for both the encryption and the decryption process. So you have to share the key if
you expect someone else to be able to decrypt that data. As you might
already be thinking, if you have to provide
this secret key to every single person who
needs to decrypt the data, then you're probably going to
have a scalability problem. Once you get above 10
individuals or devices, it now becomes very
difficult to not only share the keys between all of
these different people but also manage which keys
happen to go with which person or which device. As you dive deeper into
the world of cryptography, you'll notice though that we
still use symmetric encryption quite a bit. And the reason is
that it's very fast. It has very little overhead
as compared to something like asymmetric encryption. So we usually are using both. We're using
asymmetric encryption to perform some functions
and symmetric encryption for others. So if symmetric encryption
is encrypting and decrypting with the same key,
asymmetric encryption is encrypting and decrypting
with two different keys. These two keys that we
use, the one for encryption and the other key
for decryption, are two keys that are
mathematically related. In fact, we create both of
these keys at the same time during the same process. And that provides that
mathematical relationship between those two keys. This means once you've created
these two mathematically created keys, you then
assign one of them as being the private
key and the other one as being the public key. As the name implies,
the private key is the one that only
one person or one device would have access to. No one else has access
to this private key. The public key, however, can
be seen and used by anyone. The public key, just
as that name implies, can be available to the public. If you've never used
asymmetric cryptography before, this next part may
not seem intuitive, but this is what adds the power
and the magic to performing asymmetric cryptography. Everyone who has
the public key can encrypt data and send it to
you by using that public key. The private key that
you have is the only key that can decrypt any
of that data encrypted with the public key. For example, there may be a
number of different individuals that are encrypting data
using your public key and sending you
that information. If any of those individuals
happens to gain access to this information
that's encrypted, they would not be able to
decrypt it with the public key, because the only key that can
decrypt it is the private key, and you're the only one
that owns the private key. Another important
consideration is although both the public and
private key are mathematically related, you can't
derive one key by simply looking at
or owning another key. Because of the math
associated with the creation of these public
and private keys, there's no way to reverse
engineer the private key, even if you happen to
have the public key. And that is one of
the big benefits of public key cryptography. If you've ever used
an application that takes advantage of asymmetric
encryption, such as PGP or GPG, you've gone through
the process of creating your public private key pair. This process of creating
a public and private key is something that
occurs simultaneously, and it usually involves
a lot of randomization, a combination of very
large prime numbers, and a lot of cryptography
behind the scenes. If you're creating these
keys as an individual, this is usually a process you
only have to go through once at the very beginning. And from that point
going forward, you have your private
key and your public key. So in the case of Alice,
she's creating or generating a new pair of keys. The key-generation
process usually only takes a few moments. And it outputs
two separate keys. One of those keys it
identifies as the public key. And it labels the other
key the private key. At this point, we can distribute
our public key to our friends. We can post it on our
website or attach it to our social media pages. We would then take
the private key, save it locally, and make
sure that it is protected. Very often, we would assign
a password to a private key so that you had to know the
password to gain access. This adds another
level of protection, just in case a
third party happens to come across or gain
access to our private key. So now that Alice has created
a public and a private key, she's made the public key
available to everyone. There is a friend
of hers named Bob who would like to send
Alice an encrypted message. Bob starts on his laptop
by writing the message that we'll refer to as
this plaintext that says, "Hello, Alice." And he has Alice's public key
because, as the public key, it's available
for anyone to use. This goes into your asymmetric
encryption software, which then creates the ciphertext. This is the combination
of the plaintext and Alice's public key. At this point, this ciphertext
can be sent to Alice and can be viewed,
effectively, by anyone. There's no way to
decrypt this information without the private key. Even if somebody gains
access to the ciphertext and they gain access
to the public key, they still would not
be able to somehow reverse engineer the plaintext. Now that Bob's created
the ciphertext, Bob can send that over to Alice. Alice sees that this
is encrypted data and uses her private key
to decrypt the ciphertext. At that point, we're
back to the plaintext. And as you can see, it is
identical to the plain text that Bob originally sent. When you're dealing
with a single person who happens to have their own
public and private key pair, it's up to the individual
to manage those. And at some time in
the future, if you need to decrypt the information,
that individual simply goes to their private
key and decrypts anything that may still be
encrypted on their system. But when you're working in
an environment with hundreds or thousands of users,
and each of these users has their own public
and private key pair, you may need some way to manage
that very large amount of data. This may be a third party, where
you hand over private keys, and they maintain
those private keys until you happen to need them. Or perhaps you're performing
your own key escrow. Once everybody
creates their keys, you can store the keys locally. And if that user happens to
leave the company or move to a different
department, you'll still have the private keys SO
that you can decrypt everything they've been working on. This is something
commonly seen when you need to provide
some way to decrypt data even if you're not the person
that originally encrypted that information. For example, as we
mentioned earlier, a user may leave
the organization, but we still need access to
all of their encrypted data. Or it may be a government agency
that is working with a partner, and both of those
organizations need to decrypt data that
may have been encrypted as part of this project. Handing your private
key off to someone else to be able to manage
the process may seem a little controversial. But in some cases,
it's required in order to maintain uptime and
availability of all of your organization's data.

---

## Encrypting Data - CompTIA Security+ SY0-701 - 1.4

If you need to protect
data that you're storing on an SSD, a hard drive,
or any other type of storage device, then you'll need
to work on encrypting all of this stored data. Sometimes you'll hear this
referred to as encrypting data at rest. This includes not
just individual files that you might have on
these storage devices, but in some cases, everything
that's on the storage device is using full disk or
volume level encryption. In the Windows
operating system, you may be using BitLocker
to accomplish this. If you're using
Mac OS, you may be using FileVault.
And other operating systems have other ways
for encrypting everything on a single volume. You might also need to
encrypt a single file that is on a system and
not the entire volume. In Windows, you can use EFS. That stands for the
Encrypting File System. It's a file level encryption
that's built into the NTFS file system. And if you're using Mac
OS, Linux, or even Windows, there are many third
party utilities that can perform a similar function. In Windows, you would
look at the properties of a file or folder. And inside the
Advanced Attributes, you can select, Encrypt contents
to secure data to enable EFS. A lot of the data that we use
online is stored in a database. And of course, there
are different techniques to be able to protect
the data that's inside of these database files. For example, you may
be able to configure transparent encryption. This uses a symmetric
key to encrypt everything that might be in that database. And you would need to perform
an encryption or decryption of that data each
time the information is pulled from the database. Some of the information
in your database might not be private
or sensitive. So you might have
some data inside of the database that is
protected or encrypted and other data, which is
still available in plain text. Here's an example of a
table inside of a database. This is an employee
database that has employee ID numbers, first
names, last names, and Social Security numbers. Of course, you could
encrypt the entire database by applying a symmetric key
so that all of this data is now encrypted. And you can see, we have
no idea what part of this may have anything to do with
an employee's name, their ID number, or their
Social Security number. But of course, there's
overhead involved in being able to view
this information. And every time we need to search
through the entire database, we would effectively need
to decrypt all of the data within that single database. One way to avoid
some of that overhead is to only encrypt a certain
type of data in the database. In this example, we're
performing column level encryption, where the
employee ID, the first name, and the last name are all
displayed in plain text. And if you needed to search
for a name or search for an ID, you can perform
this very quickly without having to decrypt
any other type of data. But if you needed access to
a person's Social Security number, you would
either need to decrypt the entire column or
that single record to be able to gain
access to that data. Another common place to
perform this encryption is when we're sending
data across the network. We want to be sure
that everything we're sending between
two devices is protected. And if someone does tap
into this connection and view that
data, they wouldn't be able to make sense
of any of those details. For example, you're probably
using a browser right now to watch this video. And all of the
communication that's taking place in your
browser is most likely using HTTPS, which means
that everything traversing the network is encrypted. If you need to connect
different sites to each other or need to connect
individuals for remote access, we commonly would use a VPN
to provide this encryption. This stands for Virtual
Private Network. And it effectively creates
an encrypted tunnel, where you can send all
information into the tunnel to the other side. And anything within that tunnel
is going to be encrypted. This is commonly
used with client based VPNs using SSL or TLS. And if you're connecting
two sites together, we commonly will use IPsec to
provide that VPN connectivity. To be able to have a successful
encryption and decryption, both sides must be using the
same encryption algorithms. This is the formula that's
used to not only provide the encryption
process, but it also provides you with
the way to decrypt that data on the other side. Generally, both sides would
agree from the very beginning, to use one or more
encryption algorithms so that both sides know exactly
what to expect when information is received. Many times, the end
user doesn't see the details of the algorithms
that are being used. But they know that they're
using a particular application. And they want to be sure
the person on the other side is using a similar
application so that the encryption
and decryption processes will be compatible. There are obviously
advantages and disadvantages, depending on what encryption
algorithm you're using. Some algorithms have a
better security level, some work faster
than others, some have a more complex
method for implementation. But once both sides agrees
on the application that will be used for
encryption and decryption, everything else generally takes
care of itself automatically. Usually, the security
administrator will have a pretty good idea
of what the requirements are for the users. And they'll make sure
that the proper encryption algorithms are used. Here's a good
example of why it's so important that both
parties in a conversation are using the same
encryption algorithm. These are very broad comparisons
between the DES encryption algorithm and the AES
encryption algorithm. They stand for the
Data Encryption Standard and the Advanced
Encryption Standard. You do not need to know the
specifics of these block diagrams for the Security+ exam. But you can visually
see that there are quite a few
differences between both of these algorithms. The DES encryption algorithm
has five different steps, which include breaking up the
data into a left plaintext and right plaintext
to finally come up with a 64-bit cipher text. You can see that AES works
a little bit differently, where you take a plain
text and a secret key, add it to a cipher, and
finally get the ciphertext. There are also different
versions of AES that can produce different
levels of output. You obviously would not be
able to encrypt with DES and somehow decrypt with AES. You have to be sure that you're
using compatible encryption and decryption algorithms on
both sides of the conversation. Here's another interesting part
about encryption algorithms, is we know exactly
how they work. The algorithms themselves
are usually public. You can read the code
or look through the math and see exactly the
process that occurs. The algorithm is usually
a very well-known thing. In fact, it makes the
algorithm more trustworthy, because we can see the
math and the process that's used to create the encryption. The one major piece of
information that we don't have is the key. And although we know
how the algorithm works, we still are not able to
reverse engineer anything unless we have that key. This is very similar to the
way that a door lock operates. We know how door locks work. We know how to
manufacture door locks. We know what happens
inside of a door lock when you put a key in. But just knowing
that information doesn't somehow allow you
access through a locked door. You have to have the
proper key, just as you do with encryption and decryption. That key helps determine
the final output. If you're encrypting
data or hashing data or creating a digital signature,
it's all based around that key. And even though we
have the algorithm and understand everything
about the math, you still need the key
to be able to gain access to the data. This is why we always
tell you to keep those private keys private. If somebody gains
access to your key, they're able to use
it on your door lock. And now, they have access
to all of your data. Like anything else, your
encryption and decryption keys are subject to brute
force attacks, which means that an attacker could
go through every possible permeation to be
able to determine what a public or
private key might be. We can effectively prevent
these brute force attacks from being successful by
creating a very, very long key. In the world of
encryption, a symmetric key of 128 bits or larger
would be very common and today, would
be very protected. As time goes on and our
processors become more powerful and we're able to tie many
different processors together, we may increase the
size of our keys to make them that much more
difficult to brute force. This extension of
the key lengths also applies to asymmetric
encryption as well. Even though an asymmetric key
involves complex mathematics surrounding very
large prime numbers, an attacker can still
performed with brute force. And it's not uncommon to
see asymmetric keys that have a key length of
3072 bits or even larger. This means as time
goes on, we may have to create larger
and larger keys, just to keep up with the
changes in technology. But there are some
other things we can do to make our existing
keys that much more secure. And one of the
ways to do that is to perform the encryption
process multiple times on a single type of data. For example, you may
want to hash a password, then hash the hash
of that password, then hash the hash of the hash
of that password, and so on. This is referred to
as key stretching or key strengthening. This means if someone
wanted to brute force some data that's been
encrypted multiple times using this key stretching method,
that they would need to decrypt multiple times to
see if their brute force was successful. And this adds an
additional overhead, and certainly would create more
time during the brute force process.

---

## Key Exchange - CompTIA Security+ SY0-701 - 1.4

As we've been discussing
in our previous videos, we've talked about
how important it is to have an encryption
key that is only known by the person
encrypting the data and the person
decrypting the data. Well, this brings up a
logistical challenge, especially when we need to
encrypt a large amount of data across the internet,
is, how do you share that encryption key
between those two people without physically
transferring that encryption key across an insecure
medium like the internet? One way to do this is by
exchanging the key out of band, which means we're
not going to use the network. That means we would need to find
some other method to transfer that key from one
place to the other. You can think back to the
person with the suitcase that is handcuffed. And they hop on the train. And they go across the country. And they hand that suitcase
off to someone else. And now both sides
of the conversation will have the same key. You could of course
accomplish the same thing by using a courier or calling
someone on the telephone or simply exchanging
the key in person. But on the internet, we don't
have the luxury of time. We need to be able to encrypt
a single communication immediately in our browser. So we would need to use some
type of in-band key exchange, which means some
type of information is going to be sent
across the network. Sometimes, you can do this by
using additional encryption mechanisms. For example, you could
use asymmetric encryption to encrypt a symmetric key, send
that asymmetrically encrypted key to a third party,
and they can decrypt it to obtain the symmetric key. This allows us to securely
transfer these encryption keys across the network. And it all occurs
relatively quickly. This is something
that's commonly done with keys that
may be only used for a short period of time. For example, things
like session keys are used for temporary basis. We then remove
those session keys and use a new session
key for the next session. For example, a client could
encrypt a random or symmetric key that could be
used for a session and encrypt it with a
server's public key. The client would then send
that encrypted information to the server. And the server would
use its private key to decrypt that session key. Since session keys tend to
be ephemeral or temporary, we can use that session key,
discard it, and then perform this process again to
transfer a new session key between systems. There's also another
way to create a symmetric key
between two devices by using public
key cryptography. This is something
that will allow us to create the
same symmetric key on both sides of
the conversation without sending the symmetric
key across the network. Here's how this works. We would start with Bob's side. Bob obviously has a private
key that no one has but Bob. Alice also has a private key. Her private key is
only known to herself. We would then combine
Bob's private key with Alice's public key. Alice's public key is
obviously known to everyone. So Bob would easily have
access to that information. Conversely, Alice can
combine her private key with Bob's public key. And since both Bob
and Alice are using keys that are
mathematically related, they create the same symmetric
key from that algorithm. We refer to these as
key exchange algorithms. We're not performing any type
of encryption or hashing. We're instead building
the same symmetric key on both sides of
the conversation, even though we didn't
send that symmetric key across the network.

---

## Encryption Technologies - CompTIA Security+ SY0-701 - 1.4

If you were to look on
a modern motherboard, you would find a chip or a
subsystem called a Trusted Platform Module, or a TPM. This is a standardized
bit of hardware that is specifically designed to
provide cryptographic functions for that computer. If you want to do anything
with cryptography, such as generating
random numbers or keys, you can do that
by using the TPM. The TPM also has
persistent memory, so you can have keys that
have been created and burned into this TPM that are
unique to only this machine. This becomes especially
helpful if you need some type of
secure key generation that you could use for something
like full-disk encryption. This can also securely
store these keys on your local machine. So if you wanted to use
a different set of keys for BitLocker, you could
have the TPM create and store those keys on that system. This is also password
protected, and there's no way to use a brute
force or dictionary attack to gain access to the
information stored in your TPM. You can think of a TPM as
providing encryption functions for a single device. But in our data centers,
we need to provide cryptographic functions
for hundreds or thousands of devices. For that large-scale
cryptographic use, we would want to use a Hardware
Security Module, or HSM. HSMs in large environments are
usually clustered together, and there's redundancy, such
as power supplies and network connectivity, so that you will
always have access to the HSM. Imagine having a thousand web
servers in your data center and you need someplace
to securely store all of the encryption keys
for all of those servers. In that scenario,
you would use the HSM to provide the secure storage
for all of those systems. For this large-scale
cryptography, it's more efficient if
you are able to perform these cryptographic
functions in the hardware of the device itself. So, many HSM devices will
have a separate plug-in card or separate hardware
that can connect to the HSM that is specifically
designed to perform very fast cryptographic functions. These devices are also
specially designed to securely store keys. This allows you to store
all of those sensitive keys on a centralized HSM but
prevents unauthorized access to those keys. And additional hardware such
as cryptographic accelerators can be used on an HSM,
especially if the HSM needs to perform encryption
and decryption in real time in large-scale
computing environments. So now we've got
encryption keys that are used for our web servers. We have encryption keys
for full-disk encryption on our individual devices. Each individual user may
have their own certificates. So we need some way to
manage all of these keys. Fortunately, we can provide
this type of management through a centralized
key management system. You can run these key
management systems on devices that are
on your premises, or it may be a
cloud-based system that can be accessed from anywhere. This allows you to manage all
of these very different keys from one single
management console. And this also keeps all of the
keys separate from the data that you're trying to protect. So you might create
a series of keys. Maybe it's an SSL or TLS
key for a web server. Maybe it's an SSH key to provide
remote access to a console. Or it's keys that you would
use for Active Directory or for BitLocker. Once you create
the keys, you would associate those
with specific users in the software of the
key management system. And you can set up an
automatic key rotation so that you're constantly
changing out keys as time goes on. This is also a great place to
provide logging and reporting of all of the keys
and how you're using them in your environment. Here's the dashboard
of the key management system, which gives us a
summary of the types of keys that we're using. We can see what certificate
authorities have been used, when
certificates might expire, details for licenses, and more. If you wanted to see the keys we
were using for our web servers, we can click on SSL. And now we can see what
keys have been created and what server they're
associated with. We can look up similar key
information for SSH console communication,
where you could see the key name, the fingerprint
and other details, and where this
key might be used. And of course, we
can create reports that can give us information on
how these keys are being used, what keys are currently active,
which keys are inactive. And we can get a
summary of how often these keys are being utilized. When all of our data
was stored on one central mainframe
computer, it was relatively easy to provide security. We just had to keep
anyone from gaining access to that one source of data. But of course, today,
our data is spread across many different systems. We have data on a
laptop, a mobile phone, on our computers at home,
and many other locations. So how do we maintain
the privacy of our data, even though we seem to
be distributing this data onto many different systems? Another challenge we
have is that as soon as we find a secure
way to store data, the attackers find ways to
gain access to that data. It's a constant race
to stay one step ahead of people that are
trying to get their hands on your information. Another challenge is that all
of this data that we're using is constantly changing. So we not only need to protect
and keep this data private, but we also need ways to easily
change that data at any time. One way that we're providing
this privacy of our data is through the use
of a secure enclave. A secure enclave is
a security processor that's built into the
systems that we're using. You probably have one
on your mobile phone, perhaps even in your laptop,
or even your desktop systems. This is not considered the
primary CPU of your system. This is a separate processor
whose job is solely dedicated to the privacy of your data. Different
manufacturers will also have different names for
this security processor, but we generally refer
to it generically as a secure enclave. This is the
technology that allows you to keep all of
your data private, even if your phone
and other devices were to fall into the
hands of someone else. This is a separate
secure processor that has its own boot ROM. It manages and monitors all of
the processes on your system, especially during
the boot process. It has a true random
number generator. It can do real-time
encryption of all of the data as it moves in
and out of memory. It has cryptographic keys that
are built in that cannot be changed and that can be used
as a root for all of the other cryptography on your system. And it does AES encryption in
the hardware of your device. This is just a
summary of the things that are available
inside a secure enclave. But you can see that the
power of these processors works to keep all of your
data private, regardless of where it happens to be.

---

## Obfuscation - CompTIA Security+ SY0-701 - 1.4

Obfuscation is a process,
where you take something that normally would be
very easy to understand, and you make it much more
difficult to understand. As we step through
this video, you'll get an idea of all
of the different ways that you could take a bit
of information or data and turn it into something
that's not quite as clear as it could be. One of the interesting
aspects of obfuscation is that if you know how
the obfuscation is done, you're able to reverse
the process and gain access to the original data. With obfuscation, you're
effectively hiding information, but it's in plain sight. And only if you know
how it was hidden, would you recognize
that there's actually data contained
within that object. One very popular
kind of obfuscation is steganography, where
we can hide information within an image. And somewhere in this
image is some data that we would be able to recover
if we knew how that data was originally stored. Steganography has its roots
in the Greek language. And it stands for
"concealed writing." It's a way to hide data in
an image such as this one. We often refer to steganography
as a type of security through obscurity, which
means that if the process that was used to hide the data,
you can very easily recover the data. And that's why we often mention
that security through obscurity is not really security at all. So in this example, we've
used a third party utility to take a bit of information
and hide that information within the image itself. Obviously, looking
at the image, you can't see any of the data
that's stored within it. But it is really stored
within the data containing this particular image. Sometimes you'll hear this image
referred to as the covertext. The covertext is the document
that contains the data that you're hiding. Of course, hiding
information within an image is only one type
of steganography. You can use steganography
in many different types of media and forms. For example, you
can hide information within network traffic and embed
messages within TCP packets that you're sending
across the network. This data is obviously sent a
few bits or bytes at a time. And if you know how
the data is being sent, you can reconstruct that
data on the other side. We've already mentioned how
easy it is to use steganography with an image to hide data. And one of the more interesting
ways to hide information is by putting dots
on a piece of paper. These are almost
invisible watermarks that are included
with laser printers and other types of printers. And if you look very
closely at the printed page, you'll start to see
little yellow dots appear. These yellow dots are referred
to as machine identification codes. And if you know the format
of these yellow dots, you can match that back
to the printer that was used to print this output. This is a little bit difficult
to see with the yellow dots on a white page. So let's invert the image. And now, you'll see blue
dots on this black page. If you look closely at
a laser printer output from your printer, you should be
able to find those yellow dots somewhere on the printed page. Well. If you can store information
inside of an image, you could certainly
store information in other types of media. For example, you can
have audio steganography, where you're hiding information
within an audio file or an audio track. We can also use
video steganography. So a video, such
as this one can be used to hide a great
deal of information within that particular file. A very popular form
of obfuscation that we use every day is tokenization. This is where we take something
that is sensitive data, and we replace it with a
token of that sensitive data. For example, we can take a
Social Security number, which is relatively
sensitive information, change it into a completely
different number. But behind the scenes, we're
matching those two together. This means we can
transfer the modified number across the network. And on the other side,
it will make that switch to what the actual
number might be. If someone did happen
to capture information containing that
token, they would not be able to use it for
anything practical, because it is not an actual
Social Security number. You may not realize it, but
this is the same process that's occurring when you
pay for items at the store with your mobile phone
or your smartwatch. There is a temporary token that
is created from your credit card number. And that token is what's
sent across the network. This is a one-time
use token, which means if somebody does capture
that token during the transfer and then they try
to use it again, that token will be denied
because it can only be used once. This means that we can transfer
this data across the network without needing to
encrypt any of the data. Since we've replaced the
sensitive credit card information with
a one-use token, we can send this information
across the network without needing to encrypt
or hash any information. If anyone got their
hands on this data, they wouldn't be able
to do anything with it. And since it doesn't have
any mathematical relationship back to your credit card
number, it's completely safe to send across the network. Here's how this credit
card tokenization process works behind the scenes. The first step is to
register a credit card number on our mobile phone. When you perform that
registration process, it reaches out to a remote
token service server to register this credit card. At that time, this
server is going to provide you with a
series of tokens that will be stored on your local phone. Notice that the token is
a very different number than the actual
credit card number that we've registered
on our phone. In most cases, we usually
don't see this token at all. Although if you do
look at a receipt, you may notice that the receipt
is showing a credit card number that doesn't match the
actual credit card number. Now that we've
received these tokens, our phone is ready to
be used during checkout. So we'll go to a store. And during the
checkout process, we'll use near-field communication
to transfer that token into the payment system. So instead of sending our
actual credit card number, we are now paying
with one of the tokens that we originally received
from the token service server. The merchant then
sends that token to the token service server. And it does a reverse
lookup to determine what the actual credit
card number happens to be. Now that this system knows
the actual credit card number, it can check to validate that
you have the proper funds or credit to be able to
perform this transaction. It validates the token and
approves the transaction for the merchant. Now that this token
has been used, your phone is going to
throw that token away. It can no longer be used
for any future transactions. Your phone then
readies the next token that's in your
list or it requests a new token from the
token service server. And that's the
token that will be used for the next transaction. When you get the receipt
for your payment, you may notice there's
additional obfuscation that is used on the receipt itself. If you look at the credit
card number on your receipt, you'll usually see a string
of asterisks and usually, the last four digits
of the credit card. This is called
data masking, where we are hiding parts
of the original number and only showing you a portion
of that number on the receipt. This is obviously
preventing someone from gaining access
to your receipts and being able to use those
credit card numbers to make their own payments. Obviously, the entire
credit card number is known by your
credit card company. But for the purposes
of printing a receipt, only a portion of
that number is shown. This type of data
masking might also be used for a customer
service representative. So if you call in to
your credit card company, they may tell you, we're
looking at the credit card with the last four
digits of 2512. To protect the security
of the entire number, it's not uncommon for
companies to limit who has access to that information. And the person you're
calling on the phone may only be able to see a
portion of your credit card number. There are a number of different
ways to mask a number. You don't have to use asterisks. We could simply
rearrange the numbers or replace certain numbers
with others that we could then reverse later on.

---

## Hashing and Digital Signatures - CompTIA Security+ SY0-701 - 1.4

A cryptographic hash is
used to represent data as a short string of text. Sometimes you'll hear this
referred to as a message digest or a fingerprint. Just like our fingerprints
that can represent us, a digital fingerprint
can represent data that is being stored elsewhere. Keep in mind that this
cryptographic hash is not encryption. You can't somehow recreate the
data if the only thing you have is the hash. For the same reason, you can't
recreate a person when all you have is their fingerprint. In practical terms, we
can use these hashes to verify that a document
that we've downloaded matches the original document
that was posted on a website. This provides us with integrity. We can also use these hashes
during the process of creating a digital signature. And these digital signatures
are used for authentication, non-repudiation, and integrity. Let's create some hashes. We're going to use a very
common hashing algorithm called the SHA256
hashing algorithm. This will produce 256
bits of information that we will represent as
64 hexadecimal characters. So let's create a hash from
a very simple text string. This text string says, "My
name is Professor Messer." And there's a period at
the end of that sentence. If we were to put this
into an application to create a SHA256 hash
from that sentence, we would get this long
string of characters that you see right here. Let's now make one
change to this sentence. This now says, "My name
is Professor Messer." But instead of it
ending in a period, it's now ending in
an exclamation mark. So there's really only one
character that's been changed. This is a very common
characteristic of hashing, where you make one minor
change to the input text. And the output hash is very
different from each other. One of the things we'd like
to avoid when creating a hash is to make sure the hashes are
very different for all types of input. In practical use, we should
never run into a situation where this hash is duplicated. If we're putting
different inputs into the hashing
algorithm, we should expect to see different
outputs as well. If, for some reason, we
do have different inputs and those inputs create
exactly the same hashing value, then we've created a collision. In practical use,
you're probably never going to run into
one of these collisions. And your hashing
algorithm should be created so that
collisions are an extremely rare occurrence. Unfortunately, there have
been hashing algorithms, through the years, that did
have problems with collisions. One good example of this is
the hashing algorithm MD5. This collision problem
was found in 1996. And because of that,
we highly recommend that you use a different
hashing algorithm than MD5. Here's how this MD5
collision works. Here, we have a string of input. This is text that we're going
to put into a hashing algorithm. And we're going to take
another string of text that's almost the same. You can see these
almost match up. But every place there
is a red character means there's a slight
difference between each of these inputs. But if we take both
of those inputs and put them into
the MD5 algorithm, we get exactly the same hash. This is a collision. And this is the reason we
no longer recommend using MD5 as a hashing algorithm. We use hashing for many
different purposes. And you might run into
hashing multiple times through a normal workday. For example, you
may need to verify that a file that
you've downloaded matches the file that happens
to be posted on a website. You'll often see
this on sites where you're downloading very
important files like a Linux distribution. And you can see that
each distribution has been associated
with a particular hash. This means that you can
download the ISO file, run the same hashing algorithm
on the file you downloaded, and compare it to the hash
that's posted on the website. If your hash matches the
one that's on the website, then you've downloaded the same
file that exists on that site. Another common use of hashing
is to store passwords. Ideally, we would never
store someone's password in plain text. And we would not
encrypt passwords, because then, someone could
potentially decrypt and gain access to your passwords. Instead, we provide a hash
for all of the passwords that someone stores. In reality, it's a hash plus a
little extra information called a salted hash. This way, we're able to
store everyone's password as a hash, which means
we have no idea what the actual password might be. During the login process,
the password you input is changed to a hash,
compared to the one that's stored on the server. And if they match, you've
gained access to that system. I mentioned earlier that
when we're storing passwords, we might want to add some
additional information to make it more difficult
to brute force. We refer to this extra
information as assault. This is random
information that we add during the hashing
process to modify or randomize the resulting hash. Every user gets a
different random salt to go along with their password,
which means if everyone's using the same
password, we'll still see very different hashes
stored for every single user. There's a technique
for reverse engineering hashes called a rainbow table. This is a pre-compiled set
of every possible input and the series of hashes
associated with those inputs. This makes it very
easy for someone to get a non-salted
hash and very quickly be able to determine what the
original password might be. But if you're adding a random
salt to everyone's password, these rainbow tables
will no longer work. This would certainly
slow things down for an attacker that's trying
to find everyone's password by performing a brute force. A rainbow table can
find this information in a matter of seconds. But brute forcing can take
days, weeks, or even longer to find someone's password. Let's take some user passwords. We'll add some salt
to each password. And let's see what the
resulting hash looks like. Let's take the
password of "dragon." And if we're not
using any salting, this is the hash that results
from that password of dragon. But now, let's add some
additional random text onto this password of dragon. And as we add the
different randomization for each one of
these, you can see that we have a very different
hash that we're storing. If someone was to gain access
to our hashed database, they would think that there were
five different passwords being used, when in reality,
there's a single password with a number of different
salts added to that password. Hashes are also used during
the process of creating a digital signature. A digital signature is
very similar to a signature you might use on
any other document. But this one is
a digital version of the signature that proves
that the message that you received was not somehow changed
during the process of sending that message to you. From that perspective, digital
signatures provide integrity. The digital signature
will also help you prove the source of the message. This provides authentication. And if others want to prove
that the message really was sent by the person
who says they sent it, we can confirm that with
the digital signature. That's also referred
to as non-repudiation. The process for creating
a digital signature is almost the opposite
as encrypting data. For digital signature, the
person signing the document will use their private key to
create the digital signature. When that signature is
sent to another party, they're able to confirm
that private key was used by verifying it with
the public key for that user. If we receive a
digital signature and go through the
verification process and find that the
public key of the sender is not able to verify
the digital signature, then something in that
document has changed. And we can no longer
trust the information that we've received. If you're using a digital
signature process built into your email system, or
you're using a third party utility to provide
digital signatures, then it's as simple as
clicking a button or checkbox to include a digital
signature with the information that you're sending. But behind the scenes, there's
a great deal of cryptography that's going on. Let's step through the process
of creating a digital signature so that you can see what happens
when you select that checkbox. We'll start with
Alice, who would like to send a message to Bob
that says, "You're hired, Bob." We refer to this original
message as the plaintext. Alice is going to click that
check box that tells her email program to include
a digital signature with this email message. Behind the scenes,
the email client is going to look at the plain
text of, "You're hired, Bob," and send it through
a hashing algorithm to create a hash
of that plaintext. The email application
is then going to encrypt the hash
that's been created with Alice's private key. And since Alice is the only
one that has her private key, she's the only one
that could have created this final digital signature. Just like a digital signature
is a bit of information you add to the
end of a document, we can do exactly the same
thing with this email. So, "You're hired,
Bob," is still sent through the
network in plaintext. We're not doing any
type of encryption in this specific example. But we do include the
digital signature, usually as an attachment or at
the end of the email. Bob now checks his email. And he's got a
message from Alice that has a message that
says, "You're hired, Bob," and it includes that
same digital signature. Now, Bob wants to really verify
that the message he received is really the message
that was originally sent. And he wants to confirm that
it really came from Alice. The first thing he's going
to do is load that message into his email client. And generally, the
email client will recognize there's
a digital signature and will perform a
verification and tell Bob that this is either
verified or not verified. Behind the scenes,
what's really happening is that the email
client is looking at the digital signature. And it decrypts that
digital signature using Alice's public key. Remember that the keys are
mathematically related. So if you encrypt with one key,
you can decrypt with the other. The result of this
decryption ends up being a hash of the
original plain text. Now we simply
perform the same hash that was done originally
to the plaintext to see what the results are. And if both of
those hashes match, then we know that the
digital signature verifies, and that not only is the
document exactly what was originally sent,
but we can confirm that it really came from Alice.

---

## Blockchain Technology - CompTIA Security+ SY0-701 - 1.4

Blockchain technology
is often described as a distributed ledger. This is a ledger that's
available for anyone to be able to see. And its job is to keep track
of individual transactions. One interesting characteristic
of the blockchain is that everyone who's
participating on the blockchain can maintain the
ledger, and everyone has a copy of this ledger. Once changes are
recorded in the ledger, those changes are
distributed to everyone who also would like to
maintain a copy of this ledger. This means we can use the
blockchain for anything that would require us to keep
track of transactions. This might be
payment processing, digital identification,
monitoring of the supply chain, or digital voting. First, we need some
type of transaction. We might be transferring Bitcoin
from one person to another. We might be creating
a data backup, and we want to track the
process of that backup transfer. Or maybe we're
transferring a house title from one individual to another. Instead of sending the
results of that transaction to one person, we send the
transaction information to everyone who's participating
as part of this blockchain. So every individual
device in the blockchain that is keeping
track of the ledger will also get a copy
of this transaction. This transaction is then
added into a larger block of transactions that
will ultimately be processed into the blockchain. To complete the block, we
add a hash to the block, and that provides integrity
of all of the transactions that are part of this
particular block. A copy of this block
is now sent to everyone who has a copy of this
particular blockchain's ledger. This hash is very useful
because if somebody goes into the blockchain and
modifies one of these existing transactions the hash is no
longer going to be valid. And as other devices that are
also maintaining the ledger see that a block has come
through with an invalid hash, it throws out the block and
confirms that this block has been modified. As you've probably seen with
cryptocurrency and other applications that
use the blockchain, this type of technology
is one that we're able to use for many
different purposes. And we'll certainly be seeing
additional functionality from the blockchain
in the future.

---

## Certificates - CompTIA Security+ SY0-701 - 1.4

A digital certificate is a file
that contains both a public key and a digital signature. You can think of this
as a digital version of an identification card. But in reality, it has
so many more capabilities than simply providing
authentication. One of the characteristics
we're constantly striving for in IT
security is that of trust. Whenever we're allowing
someone access to a system, we're trusting that the
person using that username and password really is
the person that we'd like to provide access. A digital certificate is a
way to provide that trust. We can create a
digital certificate, have a certificate authority
digitally sign that certificate so that we know that if the
certificate authority trusts that person, then we should
also trust that person as well. There are other ways
to provide trust with digital certificates. One of those methods is through
the use of a web of trust. Instead of having a centralized
certificate authority, we can have multiple
individuals sign each other's certificate,
thereby creating this web of trust. If we trust our
friend and our friend has signed the
digital certificate of a third party,
then therefore, we can trust the
third party as well. But of course, you
don't necessarily need a third-party certificate
authority to provide trust, especially if you're just
creating certificates within your own organization. In that case, you may want
to use the certificate tools that are built into
Microsoft Windows Domain Services. And there are many other
third-party software options to provide your own
certificate authority. If you're in a web browser
and you're connected securely to a website, you'll
notice there's a lock in the address bar. And if you click
that lock, you'll be able to see the details
of the certificate associated with that web server. You'll notice that
your browser is able to show you the information
about the certificate for that web server
regardless of what websites you might be connected to. That's because all of
these different websites are using a single certificate
format that everyone can read. The standard for that format
is called an X.509 format. And sometimes,
you'll hear people refer to the X.509 certificate. And they're referring to
the standardized format for a digital certificate. There is an amazing amount
of information stored in these digital certificates. You have a serial
number, a version, and a signature algorithm. You can see who issued the
digital certificate, the name of the holder of the
digital certificate, the public key, and other
information as well. In this video, we'll look at
some of these characteristics inside of this certificate. And we'll talk about how we can
use those to help better secure our networks. Having a method of creating
trust between yourself and someone trying to gain
access to your systems is a foundational
part of IT security. The real challenge,
of course, is, how do you trust something
that up to this point has been an unknown entity? For example, when
we use our browser to visit a website for
the very first time, how does our browser
know that we're connecting to the right
website and creates that trust between you and that resource? One way to provide this trust
is to have a third party vouch for the site that
you're connecting to so that if the third party
trusts the site, then therefore, I should be able
to trust the site as well. We often refer to this
inherently trusted component as the root of trust. This might be provided
through hardware or software. Or there may be firmware or some
other component that provides trust for a particular system. If we have a mobile
phone or a website, we may be using hardware
security modules, Secure Enclave, a certificate
authority, or some other method that provides us with
some level of trust for this particular system. The method of trust that's
built in to all of our browsers is one that allows
us to understand if we're connecting to a
website that can be trusted or not trusted. When you're connecting to a
website for the very first time, it would be great if
we could get some feedback on whether this
site can be trusted or whether it's untrusted. So we'll use a trusted third
party, an authority of sorts, called a certificate authority. The certificate
authority is one that digitally signs the
certificates that are stored on that website. And your browser trusts
the certificate authority. So when you visit this website
for the very first time, you can view their certificate
and see that their certificate was digitally signed by
a certificate authority that your browser
already trusts. Therefore, you also will trust
this third-party website. This provides a
real-time validation that this website
is one we can trust. And it's this process that
occurs to every website we visit throughout our workday. This process that a browser
uses to trust a website is built into the internals of
the browser that you're using. And if you look at the list
of certificate authorities that are trusted
by your browser, you will see there are
hundreds of certificate authorities listed. This means the website can
purchase a certificate from any of these hundreds of
certificate authorities, put that digitally
signed certificate on their web server. And as long as they're in
the list of your browser, they'll be trusted. In this example, the
certificate authority is in charge of digitally
signing this certificate that you put on
your website server. But we're not really
purchasing a digital signature. When we purchase a
certificate, we're really purchasing the
validation process that a certificate
authority goes through. The certificate
authority is going to go through a series
of verifications to make sure that
the person receiving that digital signature
is truly the owner of that particular website. That is the trust part that
is built into this certificate authority. And it's how we can trust
any of these websites that we visit
throughout the day. Let's say that we would
like to create a certificate for our web server. We'd like to send that
certificate to a certificate authority to be validated,
have them digitally sign it, and return that back to us. The process to do this
is relatively simple. We would first create
what is effectively a digital certificate
by using our public key, add the identifying
information about what server this might
be connected to and information about
our organization, and combine those together to
create a Certificate Signing Request, or a CSR. That CSR is sent to a
certificate authority. The certificate authority now
does the validation process. They confirm that the
certificate that you're asking for is one that is
really for a web server that you own and control. And if they agree that this
is a valid certificate, they will use their private
key to digitally sign the certificate and
send it back to you. It's this middle part
where the validation is occurring that
is so important to this entire process. If the certificate
authority doesn't provide this validation,
then we can't trust any of the
certificates from that CA. That's why this validation
process is so important, because that's where
we get trust associated with this digital certificate. So far, we've been talking
about using a public CA that is built into everyone's
browser in the world to be able to provide trust. But if you have your own
internal applications and your own
internal web servers and these will only be
connected to by people inside of your organization, then you
can be your own certificate authority. For this to work, we would
install our own certificate authority software inside
of our organization. We would then take
the public certificate for that certificate
authority, and we would install it on
everyone's computer inside of our organization. That way, everyone's machine
would trust the certificate authority we run internally,
the same way that they would trust a certificate
authority that was external. And you'll find that this is
relatively common for medium- to large-sized
organizations that have their own internal services. They can create their
own certificates using an internal CA. There are many
software packages that allow you to create your
own certificate authority. Microsoft has their Windows
Certificate Services that you see here. There's OpenCA and many other
third-party software packages. So now we've created our
own certificate authority for everything that is
internal to our organization. And if we have an application or
user that needs a certificate, we don't have to go
outside to a public CA. We can simply use
our internal CA to create those certificates. The process for creating
a digital certificate, having the certificate
authority digitally sign that certificate, and
distributing it back to the end user is
exactly the same as you would use
with an external CA. The only difference is
we're using our internal CA to provide the trust and provide
digital signatures for all of our certificates. As long as you've installed your
internal certificate authority certificate to the trusted
chain on all of your devices, it works exactly the same
as an external or public CA. All of these devices
will inherently trust anything
they're connecting to because you've
digitally signed those with the internal CA. If you're visiting a
website in your browser and you click the lock
that is in the address bar, you'll be able to see all of
the details of that certificate. And if you scroll through
this web server certificate, you may see a section called
Subject Alternative Name. Sometimes, we refer to this
as a wildcard certificate because it allows you to
put the name of a domain with an asterisk associated
with the name of the device. This means the certificate
that we've created can be used for any
device that happens to share that fully
qualified domain name listed in the
Subject Alternative Name. For example, in
this certificate, there are large number of
DNS names that are listed. One of these is
birdfeeder.live, which is one of my certificates. And you can see it has
an *.birdfeeder.live. That means that this
certificate could be used for
www.certificate.live, ftp.certificate.live,
mail.certificate.live, and so on. From an administration
perspective, this makes it very easy to
create a single certificate and distribute that certificate
to a large number of devices within your organization. As long as that device is
associated with that domain name, this certificate will
be valid for that service. There may be times when we're
decommissioning a web server, and we would like
that certificate to no longer be valid. Or maybe we're concerned that
an attacker has gained access to our certificates. So we would like to revoke
all of those certificates and create some that are new. One of the ways that we
can provide this revocation is through the use of a CRL, or
a Certificate Revocation List. This is a list of all of the
certs that have been revoked. And we keep this list on the
certificate authority itself. This administrative process
of creating and then revoking certificates is one that is
built into any certificate authority. But there might be other
reasons for providing some way to revoke a certificate. We found this out
in April of 2014, when we discovered
an attack that could have a web server provide
a third party with the web server's private key. We refer to this
attack as Heartbleed. And it was due to a
vulnerability in the OpenSSL application library. We had to revoke all
of our certificates and create brand-new
certificates once this OpenSSL code was updated. All of our old certificates
were moved to the certificate revocation list. And our newer
certificates were then installed into all
of our web servers. You can see how
important it is to have some method for revoking this
trust which had previously been installed onto
a particular service. You can find where this
list of revoked certificates happens to be by
looking into the details of your certificate. If you click the lock on the
address bar of your browser, you can scroll through
the certificate and find a section that's
called CRL Distribution Points. This will include
a list of URIs, or Uniform Resource Identifiers,
that are effectively a link to the CRL file. So this tends to be
a multistep process. Your browser connects to
a third-party website. That third-party website
provides your browser with its certificate. Your browser then
looks through the cert to find the CRL
distribution points and then follows one of those
URIs to download the CRL list. From there, your browser
can look through this list and make sure that this
certificate is not one that's listed as being revoked. As long as it's not
in the list, you can continue with
your browsing session. But if this certificate from
this third-party website is listed in this
CRL, your browser knows that is now a site
that is not trusted. This certificate is not valid. And it will not allow you
access to that web server. As you can imagine,
it's not very efficient to have
a single file that lists out all the revocations
for a certificate authority. It would be great if we could
have a more efficient process that didn't involve us
going to a third-party site and downloading a big
list of revocations. Fortunately, we've
created a protocol that does exactly that. This is OCSP, or the Online
Certificate Status Protocol. Relying on the
certificate authority to provide a list of
all of these revocations to anyone who might be
visiting our website is inherently inefficient. To make this process
more efficient, we can put the status
of our certificates onto our web servers itself. This is accomplished by
sending status messages about the validity
of your certificate during the SSL handshake
that occurs when you first connect to a web server. This is referred
to as OCSP stapling because we're embedding the
status of this certificate within the handshake
of this server. We obviously can't trust
a third-party web server to truthfully tell us the
status of the certificate. So this OCSP protocol uses a
digital signature by the CA to validate its status. Most browsers today support
OCSP for the Online Certificate Status Protocol, which means
the browser itself can handle all of the checks for
revocation when you visit a third-party website. If you're not stapling the
status into the handshake message, you could use
a third-party server to provide the OCSP
status information. This is easily added
to the certificate. And it's much more
efficient than downloading an entire certificate
revocation list from your CA. If your organization is
using very outdated browsers, you may find that
OCSP is not an option. And even some of
the newer browsers say that they support using
OCSP but unfortunately don't implement the checks properly
to be able to confirm the status of a certificate. Most modern browsers
support OCSP. But you might want
to check your browser and see that it really performs
the validation when you connect to a website so that you
can tell what the status is of those certificates.

---

