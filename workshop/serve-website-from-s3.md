# Serve a static website from S3

## Creating the bucket

First we need to create a bucket from where we are going to serve the website.

1. On your AWS Console, go to **S3** under **Storage section** and click on Create bucket.
2. Enter the name of the bucket. Remember, bucket names must be unique across all existing accounts and regions in AWS. You cannot rename a bucket after it is created, so chose the name wisely. Amazon suggests using DNS-compliant bucket names. You should read more about this [here](https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html#bucketnamingrules).
3. Pick a region for the S3 bucket. You can chose any region you like, but beware that Amazon has [different pricing](https://aws.amazon.com/s3/pricing/) for storage in different regions. In this case (though it won't matter too much) we will pick `US East (N. Virginia)`.
4. Click Create. We will configure the properties later.
5. Once created, click on the name of your bucket, go to properties, click **Static website hosting** check the option **Use this bucket to host a website**
6. As index and error document put: `index.html`. Later, we will go to the **endpoint url** specified at the top to access our website.
7. Click Save.
8. Go to **Permissions** tab.
9. On the **Block public access** section, click **Edit** , uncheck **Block all public access**, save and confirm.
10. Then go to **Bucket Policy** section and add the following policy to make every object readable:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AddPerm",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::<your-bucket-name>/*"
        }
    ]
}
```

10. Click Save

## Create a policy to get full access to the S3 website bucket

With [AWS Policies](http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html), you can specify different permissions regarding every AWS resource you use. For example, you can create a policy for enabling full access to a specific S3 bucket, and that is what we are going to do. We will need this in the future to build the project programmatically and store it on S3.

1. Go to **IAM** under **Security, Identity & Compliance**.
2. Click in Policies.
3. Click in Create Policy.
4. Click **Import managed policy**.
5. Search and select `AmazonS3FullAccess` (this is a premade policy, but you can also build your own).
6. Click the **JSON** tab and change the `Resource` value to `["arn:aws:s3:::<your-bucket-name>", "arn:aws:s3:::<your-bucket-name>/*"]` in the JSON content.
7. Click **Review policy**
8. Choose a name for the policy (eg. S3WebsiteFullAccess) and click in Create Policy.

Now we have a policy that allows full access (list, write, update, delete, etc) to our website bucket. Let’s see how we can use it in the following section.

## Upload index.html to S3 bucket

The next step is to upload your index.html.
![upload file](https://res.cloudinary.com/practicaldev/image/fetch/s--bBWCvg1H--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/bpiw1o2obqjr1miy3ixw.png)
At this point, if you head back to the bucket URL you should see your HTML rendered in the browser.

Congratulations, you’ve got a basic website being hosted from AWS!

---

**Next:** [EC2 instances](/workshop/s3-web-ec2-api-rds/02-EC2-instances.md).
