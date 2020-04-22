import { Kinesis } from 'aws-sdk';
import { floor, random, last } from 'lodash';


const kinesis = new Kinesis();


function pushReading(streamName: string) {
    const sampleReading = {
        SensorId: `${random(1, 100000000)}-sensor-id`,
        Temprature: floor(random(0.0, 110.9), 2),
        CurrentTime: random(111111111, 1000000000),
    };

    const kinesisRecord = {
        Data: JSON.stringify(sampleReading),
        PartitionKey: "My-Partition-Key-1",
        StreamName: streamName,
    };

    kinesis.putRecord(kinesisRecord, (err, data) => {
        if(err) {
            console.error("An error occurred pushing record to Kinesis", err);
            return;
        }
        console.log("Successfully pushed record to Kinesis");
        console.log(data);
    });
}

function readArgs() {
    console.log(last(process.argv));
}

if (process.argv.length !== 3) {
    console.error("You need to provide a kinesis stream name");
} else {
    pushReading(last(process.argv));
}

