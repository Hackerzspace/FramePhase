import { GetTranscriptionJobCommand, StartTranscriptionJobCommand, TranscribeClient } from "@aws-sdk/client-transcribe";

function getClient(){
    return new TranscribeClient({
        region:'us-east-1', //region in aws portal in s3 depends the upload and download speeds
        credentials:{ // this key is connected with the aws server
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });
}

function createTranscriptionCommand(filename){
    return new StartTranscriptionJobCommand({
        TranscriptionJobName: filename,
        OutputBucketName: process.env.BUCKET_NAME,
        OutputKey: filename + '.transcription',
        IdentifyLanguage: true,
        Media: {
            MediaFileUri:'s3://' + process.env.BUCKET_NAME + '/' + filename,
        },
    });
}



export async function GET(req){
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const filename = searchParams.get('filename');

    // this command is used to send to aws to do transcription
    const transcribeClient = getClient();

    // check if already transcribing 
    const transcriptionJobStatusCommand = new GetTranscriptionJobCommand({
        TranscriptionJobName: filename;
    });
    const jobStatuResult = await transcribeClient.send(transcriptionJobStatusCommand);
    console.log(jobStatuResult);


    // creating new transcription job 
    const transcriptionCommand = createTranscriptionCommand(filename);

    
    const result = await transcribeClient.send(transcriptionCommand);
    return Response.json(result);
}