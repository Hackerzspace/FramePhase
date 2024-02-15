import { PutObjectAclCommand, S3Client } from "@aws-sdk/client-s3";

export async function POST(req){
    const formData = await req.formData();
    const file = formData.get('file');
    const {name, type} = file;
    const data = await file.arrayBuffer();

    const client = new S3Client({
        region:'us-east-1', //region in aws portal in s3 depends the upload and download speeds
        credentials:{
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });

    const newName = 

    const uploadCommand = new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        body: data,
        ACL: 'public-read',
        ContentType: type,
        Key:''
    });

    return Response.json(file);
}