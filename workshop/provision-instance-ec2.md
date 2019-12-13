# EC2 instances

## Launch your first EC2 instance

We are ready to launch our first EC2 instance. We will create a standard EC2 instance, add a [startup script](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html) (which will run automatically when the instance boots) and finally create a [security group](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html) that will control the outbound and inbound in our EC2 instances.

1. Go to the **EC2** under **Compute section**, and in the top right corner, you can pick the region we are going to use. In this case, we will be using the same region that we used for the S3 bucket setup earlier, that is, `US East (N. Virginia)`.
2. Click on Launch Instance.
3. Look for Ubuntu Server (make sure it is Free tier eligible) and click Select.
4. Select `t2.nano` and then click on Next: Configure Instance Details.
5. On Advanced Details, select "As text" in User data and then paste the following bash script:

   ```
   #!/bin/bash
   export LC_ALL=C.UTF-8
   apt update
   apt -y install ruby
   cd /home/ubuntu
   wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
   chmod +x ./install
   ./install auto
   ```

   Be careful, if you leave spaces at the beginning of the script it will not work. So NO SPACES!
   If you are using another region, the bucket name in the `wget` line needs to be modified (see [here](https://docs.aws.amazon.com/codedeploy/latest/userguide/resource-kit.html#resource-kit-bucket-names)).

6. Click Next: Add Storage.
7. Leave the default settings and click Next: Add Tags.
8. Leave the default settings and click Next: Configure Security Group.
9. Make sure the _Create a new security group_ option is selected and write a descriptive name on the _Security group name:_ field. You cannot rename it later so choose the name wisely.
10. Click Add Rule.
11. In port range put `9000` and in Source `0.0.0.0/0`, and add a meaningful description. This will enable incoming traffic on port 9000 from every IP, so you can "contact" your instance from the outside. If you pay attention, by default we also get a rule allowing inbound traffic on port 22, which we will use for SSH'ing to the instance. Also by default, outbound traffic (that is, traffic originating from your instance) will be allowed to any destination and port, but you can restrict that later by editing the outbound rules for the security group.
12. Add another rule with type `PostgreSQL` (port `5432` should be set automatically) and source `0.0.0.0/0`. This will allow the application to communicate with the database later on.
13. Click Review and Launch.
14. Click Launch.
15. When asked to select an existing key pair, choose `create a new key pair`, name it `aws_workshop` and click download. Store it in a secure place (`~/.ssh` is good, but make sure you `chmod 400` the PEM file so only your user can read it), we will use it to SSH into the instances during the whole workshop.
16. Click Launch Instances.

---

**Extra mile:**

- Try `ping`ing your EC2 instance. Extra points if you get it to work!
- Connect to the new instance via SSH. The username is _ubuntu_, and try the `-i` flag to use the `.pem` file.

---
