# What's Amazon EC2?

Amazon **E**lastic **C**loud **C**ompute, called **EC2**, is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.

# What can it do?

Amazon EC2's simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon's proven computing environment. Amazon EC2 reduces the time required to obtain and boot new server instances to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change.

# Why use it?

Amazon EC2 changes the economics of computing by allowing you to pay only for capacity that you actually use. Amazon EC2 provides developers the tools to build failure resilient applications and isolate themselves from common failure scenarios.

S3 is extremely reliable and flexible. You want to use it if you at some point need to store and retrieve:

- Huge amounts of data for analytics
- Files for customers to access
- Build files for your applications
- Assets such as images and videos
- Hosting static websites

Also, it has multiple integrations with other services within AWS.

# Some basic EC2 concepts

- ## Security Groups

* All inbound traffic is blocked by default.
* All outbound traffic is allowed.
* Changes to security groups take effect immediately.
* You can have any number of EC2 instances within a security group.
* You can have multiple security groups attached to EC2 instances.
* Security groups are STATEFUL, which means that if you enable inbound traffic on specific port, its outbound traffic will be allowed correspondingly.
* You cannot block specific IP addresses using security groups, instead use Network Access Control Lists. Also, you can only specify allow rules, but not deny rules.

- ## Elastic Block Store (EBS)
  Essentially, EBS provides virtual block storage volumes for EC2 instances. Each volume is replicated within its availability zone to protect you from component failure, offering high availability and durability.

#### Different types of EBS storage

- General Purpose (SSD): Balance price and performance for a wide variety of transactional workloads.
- Provisioned IOPS (SSD): Highest-performance SSD volume designed for mission-critical applications. Typically designed for Databases.
- Throughput Optimised Hard Disk Drive: Low cost HDD volume designed for frequently access, throughput intensive workloads. Typically designed for Big Data and Data Warehouses.
- Cold Hard Disk Drive: Lowest cost HDD volume designed for less frequently accessed workloads. Designed for File Servers.
- Magnetic: Previous generation HDD. Workloads where data is infrequently accessed.

#### AMI Types (EBS and Instance Store)

You can select your AMI based on:  
Region  
Operating system  
Architecture (32-bit or 64-bit)  
Launch permissions  
Storage for the Root device (Root device volume)

- Instance Store (Ephemeral Storage)
- EBS Backed Volumes

#### EBS Volumes

The root device for an instance launched from the AMI is an Amazon EBS volume created from an EBS snapshot.

EBS backed instances can be stopped. You will not lose the data on this instance if it’s stopped or rebooted.

By default, EBS volumes will be deleted on termination. However, with EBS volumes, you can tell AWS to keep the root device volume.

#### Instance Store Volume

The root device for an instance launched from the AMI is an instance store volume created from a template stored in Amazon S3.

Instance Store Volumes are sometimes called Ephemeral Storage since it cannot be stopped. You will lose all data is the host fails.

#### Encrypted Root Device Volumes and Snapshots

Snapshots of encrypted volumes are encrypted automatically.

Volumes restored from encrypted snapshots are encrypted automatically.

You can share snapshots with other AWS accounts or made public, but only if they are encrypted.

You can encrypted root device while creating EC2 instance. However, if your device is unencrypted at started, you could create a snapshot, create an encrypted copy of it, and create an AMI from that snapshot, and use that AMI to launch an encrypted instance.

- ## Using IAM roles with EC2

User will grant permissions to individuals, while a role is intended to be assumable by anyone who needs it.  
Roles are more secure than storing your access key and secret access key on individual EC2 instances and are easier to manage.  
Roles can be assigned to an EC2 instance after it is created using both the console and command line.  
Roles are universal. You can use them in any region.

# Some EC2 use cases

- Store AWS Load Balancer logs for further analysis
- Host static websites
- Store assets for a static web page
- Store exported data for your customers

# Wrap up
