import { Callback, Context, Handler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import { head, pick } from 'lodash';

const dynamoDB = new DynamoDB.DocumentClient();
const SENSOR_TABLE = process.env.SENSOR_TABLE;

// ==============================
// We define the shape of the data for the Kinesis Event.
// This makes it convenient for future reference and self documentation.
interface KinesisRecordsEvent {
  Records: KinesisRecord[];
}

interface KinesisRecord {
  kinesis: KinesisEvent;
}

interface KinesisEvent {
  kinesisSchemaVersion: string;
  partitionKey: string;
  sequenceNumber: string;
  data: string;
  approximateArrivalTimestamp: number;
}


export const kinesisHandler: Handler = (event: KinesisRecordsEvent, context: Context, cb: Callback) => {
  const kinesisRecord: KinesisRecord = head(event.Records);
  const data = Buffer.from(kinesisRecord.kinesis.data, 'base64').toString('utf8');
  const obj = JSON.parse(data);

  const dynamoItem: DynamoDB.DocumentClient.PutItemInput = {
    TableName: SENSOR_TABLE,
    Item: pick(obj, ['SensorId', 'CurrentTime', 'Temperature'])
  };

  dynamoDB.put(dynamoItem, (err, result) =>{
    if (err) {
      console.error(err, err.stack);
      cb(err);
    } else {
      console.log(result);
      cb(null, result);
    }
  });
}
