import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib';

export class CdkAppStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //Use the bucket construct

    const bucket = new s3.Bucket(this, 'avatars-bucket-kaae', {
      removalPolicy: cdk.RemovalPolicy.DESTROY
    })

    const table = new dynamodb.Table(this, 'todos-table', {
      partitionKey: { name: 'todoId', type: dynamodb.AttributeType.NUMBER },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    })

  }
}
