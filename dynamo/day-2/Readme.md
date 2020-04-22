# Day 2

Day 2 introduces an architecture for streaming data using Kinesis and Dynamodb.
We try to facilitate some of the steps by abstracting those with the serverless framework, and just
try to focus on the data flow.

# Requirements
1. Nodejs v8.10.0
2. An AWS account with sufficient permissions to create a DynamoDB table, a Lambda function and a Kinesis Stream.
3. Coffee or Tea

# Deploying
Set your `AWS_PROFILE` and `AWS_REGION` environment variables.

```
export AWS_PROFILE=<MY AWS PROFILE>
export AWS_REGION=<A Region, e.g. us-east-1>
```
Install dependencies: `npm install`

Deploy the application to a custom stack. This will create the kinesis stream and Dynamo table as described in
the book. It will also assign the necessary permissions. Provide a custom stack name to differentiate it from
another application with the same name. This is useful for having multiple deployment environments, or if there
are other people deploying this application to the same AWS account. Henceforth, the examples will use a custom
stack named `roberto`.

```
npm run deploy -- -s roberto
```

The Kinesis stream name created is `example-kinesis-stream-roberto` (example-kinesis-stream-<stack-name>).
The DynamoDB Table's name is `sensor-data-roberto` (sensor-data-<stack-name>).

After it has deployed we can inspect our kinesis stream.

```
aws kinesis describe-stream --stream-name example-kinesis-stream-roberto
```

We can push some random data to our stream. Make sure you provide the correct kinesis stream name.

```
npm run push-record -- example-kinesis-stream-roberto
```

And we can also query our dynamo table to verify that the data was saved:

```
aws dynamodb scan --table-name sensor-data-roberto
```

In order to prevent yourself from having this pipeline in your AWS bill next month, make sure to run
```
npm run remove -- -s roberto
```
---

That's it! You're in! Happy hacking!
