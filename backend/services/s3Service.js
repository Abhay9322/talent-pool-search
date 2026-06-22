import {
    PutObjectCommand
} from "@aws-sdk/client-s3";

import s3 from "../config/aws.js";
import { v4 as uuidv4 } from "uuid";

export const uploadToS3 = async (
    file
) => {
    const fileKey = `resumes/${uuidv4()}-${file.originalname}`;

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileKey,
        Body: file.buffer,
        ContentType: file.mimetype
    };

    await s3.send(
        new PutObjectCommand(params)
    );

    return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;
};