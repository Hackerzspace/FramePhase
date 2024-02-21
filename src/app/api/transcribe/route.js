import { GetTranscriptionJobCommand, StartTranscriptionJobCommand, TranscribeClient } from "@aws-sdk/client-transcribe";
import {GetObjectAclCommand, GetObjectCommand, S3Client} from "@aws-sdk/client-s3";

function getClient(){
    return new TranscribeClient({
        region:'us-east-1', //region in aws portal in s3 depends the upload and download speeds
        credentials:{ // this key is connected with the aws server
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });
}

function createTranscriptionCommand(filename) {
    return new StartTranscriptionJobCommand({
      TranscriptionJobName: filename,
      OutputBucketName: process.env.BUCKET_NAME,
      OutputKey: filename + '.transcription',
      IdentifyLanguage: true,
      Media: {
        MediaFileUri: 's3://' + process.env.BUCKET_NAME + '/'+filename,
      },
    });
}

// this command is used to send to aws to do transcription
async function createTranscriptionJob(filename){
    const transcribeClient = getClient();
    const transcriptionCommand = createTranscriptionCommand(filename);
    
    return transcribeClient.send(transcriptionCommand);
}

async function getJob(filename){
    const transcribeClient = getClient();
    let jobStatusResult = null;
    try{
        // check if already transcribing 
        const transcriptionJobStatusCommand = new GetTranscriptionJobCommand({
            TranscriptionJobName: filename,
        });
        jobStatusResult = await transcribeClient.send(transcriptionJobStatusCommand);
    } catch(e){}
    return jobStatusResult;
}

async function streamToString(stream){
    const chunks = [];
    return new promise((resolve, reject) => {
       stream.on('data', chunk => chunks.push(Buffer.from(chunk)));
       stream.on('end',() => resolve(Buffer.concat(chunks).toString('utf8')));
       stream.on('error', reject);
    });
}

async function getTranscriptionFile(filename){
    const transcriptionFile = filename + '.transcription';
    const s3client = new S3Client({
        region:'us-east-1', //region in aws portal in s3 depends the upload and download speeds
        credentials:{
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });
    const GetObjectCommand = new GetObjectAclCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: transcriptionFile,
    });
    let transcriptionFileResponse = null;
    try{
        transcriptionFileResponse = await s3client.send(GetObjectCommand);
    }catch(e){}
    if(transcriptionFileResponse){
        const chunks = [];
        for (let chunk of transcriptionFileResponse.Body){
            console.log(chunk);
        }
    }
}

export async function GET(req){
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const filename = searchParams.get('filename');

    // find ready transcription
    const transcription = await getTranscriptionFile(filename);
    if(transcription){
        return Response.json({
            status:'COMPLETED',
            transcription,
    });
    }
    // check if alredy transcibing
    const existingJob = await getJob(filename);

    if(existingJob){
        return Response.json({
            status: existingJob.TranscriptionJob.TranscriptionJobStatus,
        });
    }

    // creating new transcription job 
    if(!existingJob){
        const newJob = await createTranscriptionJob(filename);
        return Response.json({
            status: newJob.TranscriptionJob.TranscriptionJobStatus,
        });
    }
    
    return Response.json(null);
}