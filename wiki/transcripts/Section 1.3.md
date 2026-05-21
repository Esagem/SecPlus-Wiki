# Section 1.3

## Change Management - CompTIA Security+ SY0-701 - 1.3

When you're making a change to
an application or an operating system that you use at home,
the scope of that change is usually based on
a single computer. But in a corporate environment
or a large organization, one single change could
affect hundreds or even thousands of different systems. If you're upgrading software
or modifying an application or making a change to
a router or a firewall, you'll need to go
through a formal process to make sure that that change
is going to work properly. These types of changes
occur constantly. We know that Microsoft has
updates for their operating systems every month. And you might have hundreds or
even thousands of applications that you use. And those might have constant
updates to those as well. This is something that
is incredibly important to stay on top of because a
system that is not updated is one that is
probably less secure. This is why it's
important to have a formal process for making
changes in your environment. If suddenly everyone was able
to make any change they'd like whenever they
would like, you could run into problems with
applications working properly or inconsistencies in
the way that applications are able to use the
operating system. These processes may
dictate how often you're able to make changes,
the type of changes that can be made, and might even
cover things like rollback procedures just in case
you run into a problem when that change is updated. Many organizations already
have a change control process. And this makes it very easy
to implement and control any type of change
to your environment. But if your organization doesn't
have a formal change control process, you may find
it very difficult to implement or make changes
to this corporate culture. We have these formal
change control processes so that
we can maintain the uptime and availability
of our systems. We know that
everyone is informed. So there's no confusion
about the changes being made. And we want to be sure that no
mistakes are made when people make changes to these systems. Here's a summary of a typical
change control process. This might be a little bit
different in your environment. But it tends to follow a
similar path regardless of where you might be. The first part of the process
is to fill out a formal change control process form. This is something
that everyone has to do so that all of
the standard information is provided to the
central committee that makes these decisions. You would document in
this form the reason that you're making this change
so that everybody understands why this change is occurring. You would then identify
the scope of that change. It might be a single system or
a number of different systems. And whoever's
making the decision to either allow or
disallow this change needs to understand what
this scope would really be. There would be a
scheduling process so we would know exactly
when the date and time for this change would be. And then we would
know what systems would be affected by this change
and the impact of that change. To be able to make a decision
on whether this change should occur or not occur, the
change control board generally needs to analyze
the risk associated with the change. For example, this might
be a significant change. And it might be at
a time of the year when the company is very busy. So the change control
committee would need to balance the
risk of not making the change versus
implementing the change and having a problem. At this point, the
change control board should have all
of the information they need to make a decision on
whether the change is allowed or not allowed. And once the change
is made, you may want to have users
try their systems and confirm that the
change was updated without any type of problems. The change control
process usually starts with the owner
of the application or the data wanting
to make a change to that application or data. The owner of the
application or the data don't generally control
the change control process. And they're not usually the
ones making the actual change to that application
or to that data. Instead, the owners are the
ones managing the process. The owner is kept informed
as the change control process occurs. And once the change
is complete, the owner is responsible for
testing their systems and verifying that everything
is working properly. For example, your organization
may have a department for shipping and receiving. And there may be
information that they've received that says
their address label printers need to be upgraded. In this example, the shipping
and receiving department is the owner of this process. And they're going to hand
that off to their IT team to handle the actual change
to the printing software. Another consideration for
the change control process are the stakeholders. These are the individuals
or departments that will be impacted by the
change that you're proposing. They will probably want to
have input on the process and have some type
of control over when this particular change occurs. Identifying the stakeholders
may not be as obvious as you might think. There are some changes that can
affect a large number of people within the organization,
or perhaps the change is only affecting one
single individual. The IT team may need to
research and identify any of the
stakeholders who might be affected by this change. Let's take our previous example
of upgrading software that's being used for shipping labels. And you might think that this
would only affect the shipping and receiving department. But of course, the
shipping labels are also used by accounting
to create reports of what has been shipped. There might be product delivery
frames affected by this change, especially if you're shipping
directly to your customers. This would, in turn, also
affect revenue recognition because it would affect
how quickly you're able to get product into
the hands of your customers. And this would certainly have
the visibility of the CEO. This is a good example
of how something that appears to be a very
simple change to some printing software could ultimately
have a dramatic effect to the bottom line
of the company. Every change has a
different potential impact on the organization. So you need to recognize what
risks may be involved when making any particular change. This might be a risk
value that you assign a high, medium, or low risk. But these risks could
also be very far-reaching. There may be a case
where you install a fix, but it doesn't
actually fix anything. That certainly has a particular
risk associated with it, or maybe you install
the fix and you end up breaking something else. This is not entirely unheard
of when patching systems. There might be a failure
of an operating system just because you installed
this particular update or there might be
corruption of data, which means you would need backups. And all of these would certainly
have different levels of risk. You also have to consider
what risks might be involved if you don't make the change. For example, there might
be a security vulnerability and if you don't patch
this application, that vulnerability will be
available to any attacker that may be coming
across our network. This may cause an
application to be unavailable if you don't patch
the application or you might have other services
that are no longer operating because you didn't make a
change to a secondary service. Given these risks,
you may decide that you want to
do a lot of testing before implementing this change
into a production environment. And for that, we
may use something like a sandbox testing
environment, where you can perform as
many tests as you'd like and have no effect on
your production systems. This is effectively a
technological safe space where you can make mistakes, you
can try different techniques, and then you can perform
extensive testing after the fact to confirm that
the update really did work properly. Inside of the sandbox, we can
load a duplicate environment to our production systems. And then we can try the upgrade,
apply a patch, make the change, and see what effect that
has to a system that is identical to what your
users are using in production. This is also a good time to
test your contingency plan. You can implement the change. And even if the change was
operational in your test environment, you may want to
test your backout procedures just to make sure that if
something does go wrong in production, you have a
documented series of steps that brings everything
back to the way it was before you made the change. There are many documented
cases through the years where someone thought that
a change was very minor, they make that change
into an environment without even thinking
that they would need to be able to revert
back to a previous config, and that change ends up bringing
down their entire network. This is why you
need a backout plan. You should have a
way to revert back to the original configuration
or something that would be very
similar to what you started with before
the change took place. In some cases, this is
a very simple process. You simply uninstall
the patch that you installed and confirm that
the original files are back in place. But some changes are
very difficult to revert. So you may need to have
different techniques and ideas about how you can bring
those systems back to their original form if
something does go wrong. This is why we often
say that before you make any change to a system-- that you have a full and
complete backup of that system. That way, if you do make the
change and run into a problem and then you try your backout
plan and have a problem, you can always go
back to your backup. You may find that the process
for approval of the change is the easy part. The difficult part is finding
time to implement the change. This is something that has
to be planned and considered before making any significant
change to production. For example, you may
not want to make change during the workday, when
everybody is on their systems and performing their work. Instead, you may want to have
off hours or maintenance hours where you can make
changes without having significant impact to users. This is why you often see
the IT folks coming in on weekends and holidays and
very early in the morning just so they can make change
without any type of disruption to the network. This can be
especially challenging if you work in an environment
that is 24 hours a day and seven days a
week, where you have very little time
available to make any changes in those systems. You might also need to
consider what time of the year you're making these changes. Take, for example, a company
that is very retail-based and their busiest times of the
year are between Thanksgiving and New Year's. In those environments,
it's not uncommon for all of their systems
to be completely frozen during that time frame. And no changes would
be allowed whatsoever. Only after the new
year are you now able to reintroduce some
type of change control and begin the process of
updating your systems. Hopefully, you can see
now that change management is a critical part of your
policies and procedures for security. And it affects every single
person in your organization. In almost every environment,
this change control process is well documented, and
anyone in the company can read through
the documentation on their intranet. This should be part of your
standard operating procedures. And no one should be able to
make changes on your network without receiving this approval. And of course, your
change control process is going to be updated over
time to make it more efficient and fit the best with the
requirements of the company.

---

## Technical Change Management - CompTIA Security+ SY0-701 - 1.3

In our previous video, we talked
about the change management process. But of course, eventually,
the actual change will need to be implemented
into your environment. And that usually relies
on the technical staff to be able to make
these changes. When you're making changes to
one or two devices at home, it's a relatively
straightforward process. But when you're working in
an environment with tens, hundreds, or even
thousands of devices, what would be a very simple
update for a single device can turn into a very
complex process. So in this video, let's talk
about the change control process from the perspective
of the technician. The change control
process itself is one that is concerned
with what needs to change. But of course, the
technician is the one who will be actually
performing these changes. For example, a
technician may be asked to make a change to an
allow list or a deny list. These are lists
that are commonly used to allow or prevent certain
applications from working in your environment. This is because
certain applications can be considered dangerous. These applications might
have known vulnerabilities or perhaps they're
well-known applications for carrying malware and
infecting other systems. It would make sense,
then, for a technician to add those malicious
applications to a deny list or perhaps include only the
applications that they'd like to run to an allow list. If you're managing
an allow list, this means that only the
applications you've named will be able to run on
people's workstations. Everything is restricted
except the things that you add to the allow list. A deny list is a little
bit more flexible, in that you could run any
application you'd like, except for the applications that
have been specifically named on the deny list. For example, it's
common to think of antivirus and anti-malware
as being a very large deny list. Everything can
run on your system except specific types
of code that are identified by the anti-malware. When a change is submitted
to a change control board, there's a very specific
documented scope for making this change. And as part of this
change control, you're limited to
only making changes to what is specifically listed
in the change control document. For example, a
change control board may schedule a
two-hour window for you to be able to upgrade a
series of printer drivers. But that doesn't mean, during
that same two-hour period, that you can make other
changes to other applications just because the window
happens to be available. However, this doesn't
mean that you're limited to only what is
listed in the change control documents. There may be times where you
have to make additional updates or expand the scope to be able
to complete the primary goal of that particular change. For example, you may find
that the process of upgrading those printer drivers requires a
modification to a configuration file on everyone's system. And although that wasn't
specifically written as part of the scope
of this change, this change can only take place
if you make that modification. And if this is a relatively
simple modification, there may be policies
in place that allow you to make the
decision to modify that file so that you can complete
the overall change control process. This is why it's important to
have a well-documented change control process so that everyone
understands the procedures that should occur if you need to
change the scope of the change control. When most people hear
the term change control, they automatically
think about downtime. And although this
doesn't necessarily mean that there will be
downtime during the change, we very often set aside a
certain range to tell people that there might be
some unavailability during this particular window. This is one of the reasons
as an IT professional we tend to make these changes
during non-production hours. So the overnight hours or
times when people are not working on a
particular application would be a perfect time to make
any type of significant change to the application. If you work for an organization
that is up and running 24/7, then you may find
it very difficult to find a change control window
where downtime is tolerated. In those environments,
it's probably more common to
have a system where you could switch to
a secondary system, update the primary system, and
then switch over seamlessly to prevent any type of downtime. This move between a primary
and secondary system is probably one that's
relatively automated so that it can make that
change as quickly as possible. This also allows you
to monitor the change. And if you notice that
there are problems, you can switch back to
the secondary system, which at this point, you
haven't made any changes to. This makes it very
easy to fall back to a previous configuration
by simply pointing all of your users to
either the primary or the secondary system. And of course, if there
could be downtime, you need to be
sure that everyone is aware of any
potential outages that may occur during that window. It's common to send out
emails informing everyone of this particular downtime. Or you could have a centralized
change control calendar where people can
proactively view what may be happening at any
particular time of the day. If you've been part
of implementing one of these change
controls, one of the things that
you probably had to do just before bringing
everything back online is to reboot the system. This may be required
by the change. You may have a new configuration
that will only be implemented if you restart the system. This may require rebooting
the operating system itself or, if you're in front
of the physical device, you may be able to physically
power it down and power it back on again. Or this may only require
you stopping and restarting a service that's running
in that operating system. This also helps you understand
if this system is going to be able to recover
properly if there happens to be a power outage. But if you're rebooting the
system as part of your change control, you'll know exactly
how that system will react if it happens to need a power cycle. If the documentation
says that we only need to stop and
restart a service, this can usually be
done relatively quickly. We can do this from the Windows
Services; from Task Manager inside of Windows;
or if it's Linux, we may be able to restart
a daemon that's already running in the background. And if we're updating an
executable that's on a system, we may require our users to
log out of that application, completely close down
and exit the app, and then restart it with
the updated application. One challenging aspect of
this change control process is when you're making a change
that could affect a legacy application. Legacy applications
have usually been running for a very long time,
and there are no current plans to change out this
particular app. To add additional
complexity, it's very common for these
legacy applications to no longer be supported
by the developer-- assuming, of course, that the developer
is even still in business. These are usually the
systems with a sign that says, don't make any
changes to this system because no one in
the organization understands the application
or how to support any aspect of this system. However, you may find that this
application is not as complex as you may have first
thought, and by documenting the application and how it's
installed onto the system, you can bring it into
the normal support cycle for your organization. This doesn't necessarily mean
that the support for this app becomes seamless because there
may be some idiosyncrasies that are specific to this older
application running on an older operating system. You'll find that after
documenting these systems and understanding how they
work just a little bit better, you'll become the
expert in this system and everyone in
your organization will be able to now support
that system a little bit better. If you've ever had to manage
a large scale operating system that is
providing services for hundreds or
thousands of people, then you know that
making a simple upgrade can sometimes be complicated
because of dependencies. With dependencies, you
have to first make a change to one application or
service before you're able to install or update
another application or service. Or it may be that the
service that you've installed won't work until a
secondary service is also installed on that system. This certainly complicates
the change control process. We thought we were updating
and changing one application, and now we have to update a
number of different services just to provide the
original update. And in some cases,
the dependencies may not even be on
the same system. For example, to
be able to install a new version of your
firewall management software, it may also require
your firewalls to be running at a
new version of code. So you would first have to
update all of your firewalls, and then you would need to
update the firewall management software. With change control,
it's certainly true that the only
constant is change. You might have change
control processes occurring in your
data center every week or perhaps even every day. And every change has
something that has now been modified to what it was before. This means that any
documentation you have of your environment could
very quickly be out of date without some type of ongoing
documentation process. That's why we commonly see
documentation being required with the change
management process itself so that you are always
creating the most updated set of documentation
for your network. This might include updating
diagrams or charts that have a network configuration. You might have to
modify IP addresses or different
configurations or you may have to list a new series
of processes or procedures for managing a brand-new
application that has been upgraded in
your production network. And if you're dealing
with change control, then you're probably
also dealing with different versions of code,
software, or configurations that need to be applied
to these systems. In these situations,
it's very useful to have some way to
keep track of all of these different versions
that have been installed. And this also might
give you a way to revert to a previous version
if you run into problems. Many times, we provide
this functionality through version control. This allows us to keep detailed
documentation on things like changes to
router configurations, patches inside of the
Windows operating system, changes to registries when
you're updating an application, and anything else where
you can track what happens between point A and point B. You may find that the
applications or operating systems that you're
using already have some type of
version control built in, and there might be a very easy
way within that application or operating system to click
a button, make a change, and suddenly you're running
a different version. If your application
or operating system doesn't integrate any
type of version control, you might want to install a
third party version control management system so that you
can manage all of your systems and know exactly
when changes are made and what those
changes are doing.

---

